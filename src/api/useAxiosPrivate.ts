import React, { useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
// import { useAppDispatch, useAppSelector } from "../components/redux/store";
import { axiosPrivate } from "./axios";
import { refreshToken } from "../components/redux/Auth/features";

const useAxiosPrivate = () => {
  // const dispatch = useAppDispatch();
  // const auth = useAppSelector((state) => state.auth.Auth);

  const refresh = useRefreshToken();
  const { auth: Auth } = useAuth();

  useEffect(() => {
    const requestInterceptors = axiosPrivate.interceptors.request.use(
      (config: any) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${Auth?.accessToken}`;
        }
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    const responseInterceptors = axiosPrivate.interceptors.response.use(
      (response: any) => response,
      async (error: any) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseInterceptors);
      axiosPrivate.interceptors.response.eject(requestInterceptors);
    };
  }, [Auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
