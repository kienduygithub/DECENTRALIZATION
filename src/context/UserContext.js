import React, { useEffect, useState } from "react"
import {
    getUserAccount
} from '../services/userServices'
const UserContext = React.createContext();
const UserProvider = ({ children }) => {
    const defaultUser = ({
        isLoading: true,
        isAuthenticated: false,
        token: '',
        account: {}
    })
    const [ user, setUser ] = useState(defaultUser);

    const loginContext = (userData) => {
        setUser(userData);
    }

    const logout = () => {
        setUser((user) => ({
            name: '',
            auth: false
        }))
    }
    const fetchUser = async () => {
        let response = await getUserAccount();
        if (response && response.EC === 0) {
            console.log('response', response.DT);
            let data = {
                groupWithRoles: response.DT.groupWithRoles,
                email: response.DT.email,
                username: response.DT.username,
                isAuthenticated: true,
                token: response.DT.token,
                isLoading: false
            }
            setUser(data);
        } else {
            setUser({
                ...defaultUser,
                isLoading: false
            });
        }
    }
    useEffect(() => {
        if (window.location.pathname !== '/' || window.location.pathname !== '/login') {
            console.log('location', window.location.pathname)
            fetchUser();
        }
    }, []);
    return (
        <UserContext.Provider value={{ user, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }