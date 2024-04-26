import Axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { set_Auth } = useAuth();

    const refresh = async () => {
        const response = await Axios.post('/auth/refresh-token', {
         
            withCredentials:false
        });
        set_Auth((prev:any) => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev, accessToken: response.data.accessToken }
        });
        return response.data.accessToken;
    }

    
    return refresh;
};

export default useRefreshToken;