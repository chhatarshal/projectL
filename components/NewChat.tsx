"use client";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase";

const NewChat = () => {

    const router = useRouter();
    const {data:session} = useSession();
console.log(session);
    const createNewChat = async () => {
        console.log('========> Clicked..')
        console.log(session?.user?.email!);
        const doc = await addDoc(
          
            collection(db, "users", session?.user?.email!, "chats"), {
                messages: [],
                userId: session?.user?.email!,
                createdAt: serverTimestamp()
            });

            console.log('========> doc ..', doc);
        router.push(`/chat/${doc.id}`)
    }

    return <div onClick={createNewChat} className="chatRow border border-gray-700">
                   <PlusIcon className="h-4 w-4" />
                  <div>New Chat</div>  
            </div>
}
export default  NewChat;