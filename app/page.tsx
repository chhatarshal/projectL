"use client";
import { EnvelopeOpenIcon, ExclamationTriangleIcon, SunIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import { JSXElementConstructor, ReactElement, ReactFragment, useState } from "react";
import NewEntry from '../components/NewEntry';
import { useCallback, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import ClientsList from '../components/ClientsList';
 

import { usePathname, useRouter } from "next/navigation";

const HomePage = () => {
    
    let list:any = [];
    const data = useSession();

    //const [data, setData] = useState([]);
    const [newEntry, setNewEntry] = useState(false);
    const [openclient, setOpenClient] = useState(false);
    const [openclientId, setOpenclientId] = useState(0);
   // console.log('======> HomePage ====>' + JSON.stringify(data))

   const pathname = usePathname();
   const router = useRouter();

    
    let resetNewEntry = () => {
        setNewEntry(false);
    }

    useEffect(() => {
      console.log('===data ', data);
         if (!data) {
          router.push('/Login')
         }
      }, []);

     let addNewEntry = (d:any) => {
       // data.push(d);
       // setData(data);
        setNewEntry(!newEntry);
        router.push(`/NewClient`)        
    }

    let addEntry = (d:any) => {
      if (d && d.id) {
        data.unshift(d);
        // setData(data);
      }
      setNewEntry(!newEntry); 
      setOpenClient(false);           
   }

 const openingClient = (id) => {
  console.log('id: of value of details ', id);
    setOpenclientId(id);
    router.push(`/clientDetails?id=` + id); 
    //setOpenClient(!openclient);
 }
        
    return  (<div className="flex flex-col border-b-4 text-yellow-50 overflow-scroll h-screen w-full">                               
                <div className='flex content-between justify-between mt-10 mx-4'>
                    <div className='shadow-lg cursor-pointer hover:bg-gray-400 rounded-lg p-2 bg-gray-200 text-black my-4' onClick={() => {addNewEntry()}}>
                      <UserPlusIcon className='h-10 w-10' />
                    </div>
                    
                </div>               
              
                {!newEntry &&
                  <div>                  
                  {!openclient && <ClientsList openingClient={openingClient}/>}
                  
                </div>}                             
            </div>)
}
export default HomePage;

