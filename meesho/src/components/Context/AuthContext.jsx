import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();


const initalState = { user: null, product: [] };

const reducer = ( state, action ) => {
    switch (action.type) {
        case "Login":
            return { user: action.payload}
        case "Logout":
            return { user:null}
        default:
            return state;    
    }
}

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initalState);

    function Login(userData) {
        dispatch({
            type: "Login",
            payload: userData
        })
    }

    function Logout() {
        localStorage.removeItem("MeeshoCurrent-user")
        dispatch({
            type: "Logout"
        })
    }

    useEffect(()=> {
        const userData = JSON.parse(localStorage.getItem("MeeshoCurrent-user"))
        if(userData) {
            dispatch({
                type: "Login",
                payload: userData
            })
        }
    },[])

    return (
        <AuthContext.Provider value={{ state, Login, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}