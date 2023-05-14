"use client"
import { useCallback, useEffect, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const clientDetails = (props:any) => {

    console.log(props)

    const searchParam = useSearchParams();
    

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch(
            "https://dummyjson.com/users/" + searchParam.get("id")
          );
          const newResult = await result.json();
          console.log(newResult);

          //console.log(newResult)
          setData(newResult);
         
        };
     
        fetchData();
      }, []);

    return <div className='text-black'>
            {data?.firstName} {data?.lastName} {data?.university}
          </div>
}
export default clientDetails