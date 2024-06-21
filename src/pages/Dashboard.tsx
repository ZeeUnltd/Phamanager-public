import React, {
  useEffect,
  useInsertionEffect,
  useState,
  useContext,
} from "react";

import { useNavigate, useLocation, useParams } from "react-router-dom";
import useAxiosPrivate from "../api/useAxiosPrivate";
import AuthContext from "../AuthProvider";

interface User {
  businessName: string;
}

const Dashboard = () => {
  const params = useParams();
  const [user, setUser] = useState();
  const axiosPrivate = useAxiosPrivate();
  const { auth, pharmacy, set_Pharmacy } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(params.id);
  const getPharmacyById_url = `/pharmacy/${params.id}`;

  useEffect(() => {
    let isMounted = true;
    // const controller = new AbortController();

    const getSpecificUser = async () => {
      try {
        const response = await axiosPrivate.get(getPharmacyById_url, {
          withCredentials: true,
        });
        console.log(response.data);
        isMounted && set_Pharmacy(response.data.data.businessName);
      } catch (error) {
        console.error(error);
        navigate("/login", { state: { from: location }, replace: true });
      }
    };

    getSpecificUser();

    return () => {
      isMounted = false;
      // controller.abort()1
    };
  }, []);

  console.log(pharmacy);

  return (
    <>
      <div>Dashboard</div>
      <h1>{pharmacy}</h1>
    </>
  );
};

export default Dashboard;
