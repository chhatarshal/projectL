'use client'

import { CurrencyRupeeIcon, HomeIcon, ListBulletIcon, PlusIcon, PowerIcon, RectangleStackIcon } from "@heroicons/react/24/solid";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {useCollection} from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";

const SideBar = () => {
    const {data: session} = useSession();

   const [chats, loading, error] = useCollection(
    session &&  query(collection(db, "users", "csingh", "chats"), 
                orderBy("createdAt", "asc"))
   );
   console.log(chats);

    return <div className="flex flex-col border-2 justify-between h-screen bg-white max-w-xs overflow-y-auto">
                <div className="flex flex-col">
                    
                    <Link href="/" className="shadow-lg cursor-pointer hover:bg-gray-400 rounded-lg p-2 bg-gray-200 text-black my-4">
                        <div className="p-4 text-white cursor-pointer">
                            <HomeIcon className="text-black h-10 w-10" />
                        </div>
                    </Link>
                    <Link href="/" className="shadow-lg cursor-pointer hover:bg-gray-400 rounded-lg p-2 bg-gray-200 text-black my-4">
                        <div className="p-4 text-white cursor-pointer">
                            <ListBulletIcon className="text-black h-10 w-10" />
                        </div> 
                    </Link>
                    <Link href="/" className="shadow-lg cursor-pointer hover:bg-gray-400 rounded-lg p-2 bg-gray-200 text-black my-4">
                        <div className="p-4 text-white cursor-pointer">
                            <RectangleStackIcon className="text-black h-10 w-10" />
                        </div>  
                    </Link>
                    <Link href="/billing" className="shadow-lg cursor-pointer hover:bg-gray-400 rounded-lg p-2 bg-gray-200 text-black my-4">
                        <div className="p-4 text-white cursor-pointer">
                            <CurrencyRupeeIcon className="text-black h-10 w-10" />
                        </div>  
                    </Link>
                </div>

                <div className="flex">
                    <Link href="/" className="shadow-lg cursor-pointer hover:bg-gray-400 rounded-lg p-2 bg-gray-200 text-black">
                        <div className="p-4 cursor-pointer">
                            <PowerIcon className="text-black h-10 w-10" />
                        </div>
                    </Link>
                </div>
                            
            </div>
}
export default SideBar;