import React, { useState, useEffect } from 'react';
import { ArchiveIcon, HeartIcon, MailIcon, TicketIcon, UserIcon } from '@heroicons/react/outline'
import { useRouter } from "next/router"
import {GoogleLogin } from 'react-google-login'
import {signIn } from "../slices/authSlice"
import {logOut } from "../slices/authSlice"

const AccountModal = () => {
   
    const router = useRouter()
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const token = user?.token
        // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

        const value = localStorage.getItem("profile");
        const user = !!value ? JSON.parse(value) : undefined;
        setUser(JSON.parse(localStorage.getItem("profile")))

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
  return (
        <div className="flex flex-col bg-white shadow-gray-300 shadow-md rounded-sm absolute top-36 right-48 z-50">
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
            <GoogleLogin
                clientId="943228039096-85874clgtl50rgj4bn4ook2tom7b4ni1.apps.googleusercontent.com"
                    render={renderProps => (
                        <span className="flex items-center border-t hover:bg-gray-100 hover:cursor-pointer border-gray-200 justify-center py-1 px-5"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}>
                            <p className="text-orange-400 text-sm py-1">{user ? "LOGOUT" : "SIGN IN"}</p>
                        </span>
                    )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={"single_host_origin"}     
            /> 
        </div>
    )
};

export default AccountModal;