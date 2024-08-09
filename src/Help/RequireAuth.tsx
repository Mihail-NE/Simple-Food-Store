import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

const RequireAuth = ({ children }: { children: ReactNode }) => {
    const jwt = localStorage.getItem('JWT');

    if (!jwt) {
        return <Navigate to="/auth/login" replace />;
    }

    return children;
};

export default RequireAuth;
