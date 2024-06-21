import axios from "axios";

const baseURL ='https://pharmanager-backend.onrender.com/'
// Create an Axios instance with baseURL and withCredentials options
const Axios = axios.create({
    baseURL: baseURL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});



// // Request interceptor
// Axios.interceptors.request.use(
//     (config) => {
//         const userDataString = localStorage.getItem("userData");
//         const user = userDataString ? JSON.parse(userDataString) : null;
        
//         if (user && user.accessToken) {
//             config.headers.Authorization = `Bearer ${user.accessToken}`;
//         }
//         return config; // Always return the config object
//     },
//     (error) => {
//         // Do something with request error
//         return Promise.reject(error);
//     }
// );

// // Response interceptor
// Axios.interceptors.response.use(
//     (response) => {
//         // Handle the response
//         return response;
//     },
//     (error) => {
//         // Handle different types of errors here
//         if (error.response) {
//             switch (error.response.status) {
//                 case 401:
//                     // Unauthorized access, remove user data
//                     localStorage.removeItem('userData');
//                     break;
//                 // Handle other status codes if needed
//             }
//         }
//         return Promise.reject(error);
//     }
// );
 

export default Axios;

export const axiosPrivate = axios.create({
    baseURL:baseURL,
    headers:{'Content-Type':'application/json'},
    withCredentials: true,
})