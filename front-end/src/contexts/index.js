import { AuthContext } from "./authContext/AuthContextProvider";
import { useContext } from "react";

export {default as AuthContextProvider} from './authContext/AuthContextProvider'

export const useAuthContext = () => useContext(AuthContext) 