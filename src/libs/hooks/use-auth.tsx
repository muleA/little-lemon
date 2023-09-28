/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react'
import { AuthContext } from './auth-provider'

const useAuth:any = () => {
    return useContext(AuthContext)
}

export default useAuth
