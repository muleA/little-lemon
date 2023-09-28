/* eslint-disable @typescript-eslint/no-explicit-any */
import useAuth from '@libs/hooks/use-auth';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }:any) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <Route
            {...rest}
            element={
                user.displayName ? (
                    children
                ) : (
                    // Use the navigate function to redirect
                    () => {
                        navigate('/signin');
                        return null;
                    }
                )
            }
        />
    );
}

export default PrivateRoute;
