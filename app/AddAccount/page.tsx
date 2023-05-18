"use client"
import { useState } from "react";

const AddAccount = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    // Add form submission function here
    const submitForm = (e) => {
       e.preventDefault();
    }
  
    return (
      <form className="w-full max-w-lg mx-auto pt-10">
        <div className="h-20 w-full">
            <h1 className="text-lg">Adding New Account</h1>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input className="w-full mb-2 border-2" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input className="w-full mb-2 border-2" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>
        <div className="mb-6">
          <input className="w-full mb-2 border-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
          <textarea className="w-full mb-2 border-2" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" onClick={submitForm}>
          Add Account
        </button>
      </form>
    );
}
export default AddAccount;