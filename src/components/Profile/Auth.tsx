
import { Navigate, RouteMatch, RouteProps } from 'react-router-dom';

// interface IntrinsicElements {
//     [elemName: string]: any;
// }

const Auth = ({ children }: any) => {

    if (localStorage.getItem('token')) {
        return children
    }
    // return <Navigate to="/login" />
    return children // middleware set until token is available
}

export default Auth