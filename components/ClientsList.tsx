
import { EnvelopeOpenIcon} from '@heroicons/react/24/solid';
import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import {useCollection} from "react-firebase-hooks/firestore";
import { db } from "../firebase";


const ClientsList = ({props, openingClient}) => {
    const {data: session} = useSession();
    const [chats, loading, error] = useCollection(query(collection(db, "clients", 'csingh', "infos")))
       
       console.log(chats);

console.log(props)
    return  <ul className='overflow-scroll bottom-2 mx-4'>
                {chats?.docs.map(chat => 
                <li key={chat?.id}  onClick={() => {openingClient(chat.id)}}  className="flex justify-around border-2 py-2 cursor-pointer hover:bg-gray-400 bg-gray-200 text-black">
                    <span>{chat?._document.data.value.mapValue.fields.mobileno.stringValue}</span>
                    <span>{chat?._document.data.value.mapValue.fields.email.stringValue}</span>
                    <span>{chat?._document.data.value.mapValue.fields.name.stringValue}</span>
                    <span>{chat?._document.data.value.mapValue.fields.state.stringValue}</span>
                    <span>{chat?._document.data.value.mapValue.fields.createdAt.timestampValue}</span>
                    <span><EnvelopeOpenIcon className='h-5 w-5 cursor-pointer'/></span>
                </li>)}
            </ul>  
             
}

export default ClientsList;