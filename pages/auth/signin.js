import { useState } from "react";
import { signIn } from 'next-auth/react';

const signin = () => {

    const [userInfo, setUserInfo] = useState({email: "", password: ""})

    const handleSubmit = async (e) =>  {
        e.preventDefault();
        await signIn("credentials", {
            email: userInfo.email,
            password: userInfo.password,
            redirect: false
        });
        console.log('handle submit....');
    }

    return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                    <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                    <form className="" onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <div>
                                <label className="block" >User Name</label>
                                    <input type="text" onChange={({target}) => {setUserInfo({...userInfo, email:target.value})}} value={userInfo.email} placeholder="Email"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                            </input>
                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                    <input value={userInfo.password} onChange={({target}) => {setUserInfo({...userInfo, password:target.value})}} type="password" placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                            </input>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default signin;