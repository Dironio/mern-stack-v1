import { useCallback, useEffect, useState } from "react";

const storageName = 'userData';

function useAuth() {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const login = useCallback((jwtToken: any, id: any) => {
        setToken(jwtToken);
        setUserId(id);

        localStorage.setItem(storageName, JSON.stringify({
            userId: id,
            jwtToken
        }))
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);

        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName) || '{}');

        if (data && data.token) {
            login(data.token, data.userId);
        }
    }, [login]);

    return { login, logout, token, userId };
}

export default useAuth;