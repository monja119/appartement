import { removeToken } from "./tokenManager"
import { useUser } from "../contexts/UserContext"

export const deconnexion = () => {
    removeToken()
    window.location = '' 
}