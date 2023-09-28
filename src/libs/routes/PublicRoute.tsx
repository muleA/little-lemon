/* eslint-disable @typescript-eslint/no-explicit-any */
import useAuth from '@libs/hooks/use-auth';
import { Route, useNavigate } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }: any) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <Route
            {...rest}
            element={
                !user.displayName ? (
                    children
                ) : (
                    // Use the navigate function to redirect
                    () => {
                        navigate('/');
                        return null;
                    }
                )
            }
        />
    );
};

export default PublicRoute;
