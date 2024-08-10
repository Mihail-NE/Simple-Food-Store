import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const RequireAuth = ({ children }: { children: ReactNode }) => {
    const JWT = useSelector((s: RootState) => s.user.JWT);

    if (!JWT) {
        return <Navigate to="/auth/login" replace />;
    }

    return children;
};

export default RequireAuth;
