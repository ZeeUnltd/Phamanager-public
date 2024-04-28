import axios from "axios";

const setAuthToken = (token: string | null|undefined) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('get-token')}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};
export default setAuthToken;