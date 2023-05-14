'use client'
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { setPriority } from "os"
import { useState } from "react";
import { useSession } from "next-auth/react";


const ChatInput = () => {
    const [prompt, setPrompt] = useState("");
    const {data:session} = useSession();
    
   // const prompt = "Val";
    const changePrompt = () => {
        setPrompt("Updated");
    }
    return (
        <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
            <form className="p-5 space-x-5 flex">
                <input className="bg-transparent focus:outline-none
                flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
                disabled={!session} 
                type="text" value={prompt}
                onChange={(e) => setPrompt(e.target.value)} placeholder="Type your messages here"/>
                <button type="submit" className="bg-[#11A37F] hover:opacity-50 text-whil
                 font-bold disabled:cursor-not-allowed px-4 py-2 disabled:bg-gray-300">
                    <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
                </button>
            </form>
        </div>
    )
}
export default ChatInput