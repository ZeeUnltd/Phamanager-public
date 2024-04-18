import axios from "axios";

//  axios.create({
//     baseURL:'https://pharmanager-backend.onrender.com'
// })

let Axios = axios.create({withCredentials:true})
axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("get-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
axios.defaults.withCredentials = true

 export default Axios.interceptors.response.use({
    function(response){
        return response
    },
    function(err){
        if(err.response.status === 401){
            localStorage.removeItem('user')
        }
        return Promise.reject(err)
    }
})