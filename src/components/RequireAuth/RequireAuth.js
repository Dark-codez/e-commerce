import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAuth = () => {
    const [user, loading] = useAuthState(auth);
    return ( 
        <>
            {user 
                ? <Outlet />
                : <Navigate to = "/login" replace = {true}/>
            }        
        </>
     );
}
 
export default RequireAuth;