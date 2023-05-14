"use client"
import { useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../../firebase";
import { useRouter } from "next/navigation";

const NewEntry = (props:any) => {
    const {data:session} = useSession();
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const addressRef = useRef(null);

    const stateRef = useRef(null);
    const districtRef = useRef(null);
    const pincodeRef = useRef(null);

    const mobileRef = useRef(null);
    const emailRef = useRef(null);
    
    const router = useRouter();

    const [name, setNameValue] = useState("");
    const [age, setAgeValue] = useState("");
    const [address, setAddress] = useState("");

    const [state, setState] = useState(""); 
    const [district, setDistrict] = useState("");
    const [pincode, setPincode] = useState("");
    const [email, setEmail] = useState("");
    const [mobileno, setMobile] = useState("");

    const submitValue = (e) => {
        async function  add() {
            const doc = await addDoc(
                collection(db, "clients", 'csingh', "infos"), {
                    name: name,
                    mobileno: mobileno,
                    state: state,
                    district: district,
                    email: email,
                    createdAt: serverTimestamp()
                });
        }
        add();
        e.preventDefault();
       /// props.addEntry({firstName : name, lastName : name, age: age, title:name, id:name, address: address, email:email, phone: mobileno});        
    }

    const createNewChat = async () => {
        const doc = await addDoc(
            collection(db, "users", session?.user?.email!, "chats"), {
                messages: [],
                userId: session?.user?.email!,
                createdAt: serverTimestamp()
            });
          console.log('========> doc ..', doc);
    }

    const updateNameValue = (e:any) => {
        setNameValue(e.target.value);
    }
    const updateAgeValue = (e:any) => {
        setAgeValue(e.target.value);
    }

    const updateState = (e:any) => {
        setState(e.target.value);
    }
    const updatePin = (e:any) => {
        setPincode(e.target.value);
    }
    const updatedistrict = (e:any) => {
        setDistrict(e.target.value);
    }
    const updateAddress = (e:any) => {
        setAddress(e.target.value);
    }
    const updateMobile = (e:any) => {
        setMobile(e.target.value);
    }
    const updateEmail = (e:any) => {
        setEmail(e.target.value);
    }



    return (
        <div>
             
            <form onSubmit={submitValue}>
                <div className="px-10 w-full h-20">
                    <div className="text-lg">Add Details of client</div>
                </div>
                <div className="flex">
                    <div className="ml-4">Client Details</div><hr className="border-2 w-4/5 mt-3 ml-4"/>
                </div>
                <div className="px-20 flex">                    
                    <div className="px-6 py-6">
                        <div>First Name</div>
                        <input value={name} onChange={updateNameValue} ref={nameRef} type="text" placeholder="First Name"
                                    className="text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                        </input>
                    </div>
                    <div className="px-6 py-6"> 
                        <div>Last Name</div>
                        <input value={age} onChange={updateAgeValue} ref={ageRef} type="text" placeholder="Last Name"
                                    className="text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                        </input>
                    </div>                    
                </div> 
                <div className="px-20 flex">
                    <div className="px-6 py-6"> 
                        <div>Mobile No</div>
                        <input value={mobileno} onChange={updateMobile} ref={ageRef} type="text" placeholder="Mobile No"
                                    className="text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                        </input>
                    </div> 
                    <div className="px-6 py-6"> 
                        <div>Email Address</div>
                        <input value={email} onChange={updateEmail} ref={ageRef} type="text" placeholder="Email Address"
                                    className="text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                        </input>
                    </div> 
                </div>     
                
                <div className="flex">
                    <div className="ml-4">Address</div><hr className="border-2 w-4/5 mt-3 ml-4"/>
                </div>
                <div className="px-20 flex">
                    <div className="px-6 py-6">
                        <div>Address</div>
                        <input value={address} onChange={updateAddress} ref={addressRef} type="text" placeholder="Address"
                                    className="text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                        </input>
                    </div>
                    <div className="px-6 py-6">
                        <div>State</div>
                        <input value={state} onChange={updateState} ref={stateRef} type="text" placeholder="State"
                                    className="text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                        </input>
                    </div>
                </div>

                <div className="px-20 flex">
                    <div className="px-6 py-6">
                        <div>District</div>
                        <input value={district} onChange={updatedistrict} ref={districtRef} type="text" placeholder="District"
                                    className="text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                        </input>
                    </div>
                    <div className="px-6 py-6">
                        <div>Pin Code</div>
                        <input value={pincode} onChange={updatePin} ref={pincodeRef} type="text" placeholder="Pin Code"
                                    className="text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                        </input>
                    </div>
                </div>
                               
                    
                <div className="px-20 flex">
                    <button className="mx-2 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Done</button>
                    <button className="mx-2 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onClick={() => { router.push('/');}}>Cancel</button>            
                </div>
            </form>
            
        </div>
    )
}
export default NewEntry;