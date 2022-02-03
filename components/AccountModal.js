import React, { useState, useEffect } from 'react';
import { ArchiveIcon, HeartIcon, MailIcon, TicketIcon, UserIcon } from '@heroicons/react/outline'
import { useRouter } from "next/router"
import {GoogleLogin } from 'react-google-login'
import {signIn } from "../slices/authSlice"
import {logOut } from "../slices/authSlice"
import { useDispatch } from "react-redux"

const AccountModal = ({setClose, close}) => {
   const dispatch = useDispatch()
    const router = useRouter()
    const [user, setUser] = useState(null);
    // const [close, setClose] = useState(true)
    
    useEffect(() => {
        const token = user?.token
        // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

        const value = localStorage.getItem("profile");
        const user = !!value ? JSON.parse(value) : undefined;
        setUser(JSON.parse(localStorage.getItem("profile")))
            console.log(user)
        // setUser(JSON.parse(localStorage.getItem("profile")))
    },[])
    console.log(user)
    // const items = useSelector(selectItems)
   
    const googleSuccess = async (res) => {
        console.log(res)
       const result = res?.profileObj
       const token = res?.tokenId
        try {
            dispatch(signIn({ type: "AUTH", data: { result, token } }))
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = (error) => {
        console.log(error)
        console.log("Google login was unsuccessful")
    }
    // Logout
    const logout = () => {
        dispatch(logOut())
        setUser(null)
    }
    const handleClose = () => {
        setClose(prevState => !prevState)
    }
    return (
      <div onClick={handleClose} className="flex flex-col relative top-0 left-0 bottom-0 bg-orange-900">
        <div className="flex flex-col bg-white shadow-gray-300 fixed shadow-md rounded-sm top-18 right-12 lg:right-48 z-50">
            <span onClick={() => router.push("/orders")} className="account_util">
                <UserIcon className="h-5 text-gray-700 pointer-events-none"/>
                <p className="account_util1 pointer-events-none">My Account</p>
            </span>
            <span onClick={() => router.push("/orders")} className="account_util" id="orders">
                <ArchiveIcon className="h-5 text-gray-700 pointer-events-none"/>
                <p className="account_util1 pointer-events-none">Orders</p>
            </span>
            <span onClick={() => router.push("/orders")} className="account_util">
                <MailIcon className="h-5 text-gray-700 pointer-events-none"/>
                <p className="account_util1 pointer-events-none">Inbox</p>
            </span>
            <span onClick={() => router.push("/wishlist")} className="account_util">
                <HeartIcon className="h-5 text-gray-700 pointer-events-none"/>
                <p className="account_util1 pointer-events-none">Saved Items</p>
            </span>
            <span onClick={() => router.push("/orders")} className="account_util">
                <TicketIcon className="h-5 text-gray-700 pointer-events-none"/>
                <p className="account_util1 pointer-events-none">Wave Credit</p>
            </span>
            {!user ? (<GoogleLogin
                clientId="943228039096-85874clgtl50rgj4bn4ook2tom7b4ni1.apps.googleusercontent.com"
                    render={renderProps => (
                        <span className="flex items-center border-t hover:bg-gray-100 hover:cursor-pointer border-gray-200 justify-center py-1 px-5"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}>
                            <p className="text-orange-400 text-sm py-1 hover:cursor-pointer">SIGNIN</p>
                        </span>
                    )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
              cookiePolicy={"single_host_origin"} />) : (
            <span className="flex items-center border-t hover:bg-gray-100 hover:cursor-pointer border-gray-200 justify-center py-1 px-5">
                <p onClick={logout} className="text-orange-400 text-sm py-1 hover:cursor-pointer">LOGOUT</p>
            </span>)}
        </div>
    </div>
    )
};

export default AccountModal;
// {
//     "error": "idpiframe_initialization_failed",
//     "details": "Not a valid origin for the client: http://localhost:3000 has not been registered for client ID 943228039096-85874clgtl50rgj4bn4ook2tom7b4ni1.apps.googleusercontent.com. Please go to https://console.developers.google.com/ and register this origin for your project's client ID."
// }