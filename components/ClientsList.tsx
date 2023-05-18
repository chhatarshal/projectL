
import { EnvelopeOpenIcon} from '@heroicons/react/24/solid';
import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import {useCollection} from "react-firebase-hooks/firestore";
import { db } from "../firebase";


const ClientsList = ({openingClient}) => {
    const {data: session} = useSession();
    const [chats, loading, error] = useCollection(query(collection(db, "clients", 'csingh', "infos")))
       
    
       console.log(chats);


    return  <table className='overflow-scroll bottom-2 ml-10 w-11/12'>
                <thead>
                    <tr className="flex justify-between border-2 py-2 cursor-pointer hover:bg-gray-400 bg-gray-200 text-black">
                        <th>Id</th>
                        <th>Mobile No</th>
                        <th>Email</th>
                        <th>State</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                {chats?.docs.map(chat => 
                    <tr key={chat?.id}  onClick={() => {openingClient(chat.id)}}  className="flex justify-between border-2 py-2 cursor-pointer hover:bg-gray-400 bg-gray-200 text-black">
                        <td>{chat?._document.data.value.mapValue.fields.mobileno.stringValue}</td>
                        <td>{chat?._document.data.value.mapValue.fields.email.stringValue}</td>
                        <td>{chat?._document.data.value.mapValue.fields.name.stringValue}</td>
                        <td>{chat?._document.data.value.mapValue.fields.state.stringValue}</td>
                        <td>{chat?._document.data.value.mapValue.fields.createdAt.timestampValue}</td>
                        <td><EnvelopeOpenIcon className='h-5 w-5 cursor-pointer'/></td>
                    </tr>)}
                </tbody>
            </table>  
             
}

export default ClientsList;