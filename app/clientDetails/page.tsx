"use client"
import { useCallback, useEffect, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { addDoc, collection, serverTimestamp, doc, getDoc, deleteDoc, query } from "firebase/firestore";
import {useCollection} from "react-firebase-hooks/firestore";
import { useSession } from "next-auth/react";
import { db } from "../../firebase";

import { TrashIcon } from '@heroicons/react/24/solid';

const clientDetails = (props:any) => {

    console.log(props)
    const [data, setData] = useState();
    const searchParam = useSearchParams();
    
    const router = useRouter(); 
    //const [data, loading, error] = useCollection(query(collection(db, "clients", 'csingh', "infos/" +  searchParam.get("id"))))
    async function getData() {
      const data2 = doc(db, "clients", 'csingh', "infos/" + searchParam.get("id"))
      const docSnap = await getDoc(data2);
      return docSnap
    }
   getData().then((d) => setData(d));
console.log('--->', data);


  const deleteRow = () => {
    function  del() {
      deleteDoc(doc(db, "clients", 'csingh', "infos/" + searchParam.get("id")));
    }
    del();
    router.push('/');
}

    return <div className='text-black'>
                        <div>{data?._document?.data.value.mapValue.fields.mobileno.stringValue}</div>
                        <div>{data?._document?.data.value.mapValue.fields.email.stringValue}</div>
                        <div>{data?._document?.data.value.mapValue.fields.name.stringValue}</div>
                        <div>{data?._document?.data.value.mapValue.fields.state.stringValue}</div>
                        <div>{data?._document?.data.value.mapValue.fields.createdAt.timestampValue}</div>
            <div onClick={() => deleteRow()}><TrashIcon className='h-10 w-10 cursor-pointer'/></div>
          </div>
}
export default clientDetails