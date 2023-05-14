"use client";
import {signIn} from "next-auth/react";
import Image from "next/image";

const Login = () => {

    const sg = () => {
        signIn('google');
    }

    const handleSubmit = (d:any) => {
            d.preventDefault(); 
            alert('Logged in success');
    }

    return (
        signIn()        
    )
}
export default Login;