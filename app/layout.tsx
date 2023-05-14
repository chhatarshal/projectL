import { getServerSession } from "next-auth";
import { SessionProvider } from '../components/SessionProvider';
import SideBar from "../components/SideBar";
import "../styles/globals.css";
import {authOptions} from '../pages/api/auth/[...nextauth]';
import Login from "../components/Login";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
                      {!session ? <Login /> : 
                        <div className="flex">
                          <SideBar />   
                          <div className="bg-white flex-1">{children}</div>    
                        </div> 
                      }
        </SessionProvider>              
      </body>
    </html>
  )
}
