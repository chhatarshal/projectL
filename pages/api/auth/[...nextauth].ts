import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
       
      },
      authorize(credentials, req) {
        const {email, password} = credentials as {
          email: string;
          password: string;
        }
        console.log('Email: ', email)
        if (email != 'happy' && password != 'happy') {
           throw new Error('invalid credintials');
        }
        return {id: '1234', name:'abc', email:'onemail'}
      }
    })
  ],
  pages: {
    signIn: '/auth/signin'
  }
  // Configure one or more authentication providers
  
}

export default NextAuth(authOptions)