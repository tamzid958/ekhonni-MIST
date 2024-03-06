import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text", placeholder: "Enter Your Email"},
                password: {label: "Password", type: "password", placeholder: "Enter Your Password"}
            },
            async authorize(credentials, req) {
                const res = await fetch("http://localhost:8080/api/v1/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: {"Content-Type": "application/json"}
                })
                const user = await res.json();
                if (res.ok && user)
                    return user
                else
                    return null;
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user}
        },
        async session({session, token, user}) {
            session.user = token;
            // session.user.user.role = user;
            return session;
        }
    },

    session : {
        strategy : "jwt",
        maxAge : 12000 //in seconds
    },
    pages: {
        signIn: '/login',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/register' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
})

export {handler as GET, handler as POST}