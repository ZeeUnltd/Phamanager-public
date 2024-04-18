// // import { baseUrl } from "@/baseurl";
// import { NextAuthOptions } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"

// export const authOptions: NextAuthOptions = {

//     providers: [
//         CredentialsProvider({

//             name: 'Credentials',

//             credentials: {
//                 email: { label: "Email", type: "text", placeholder: "jsmith" },
//                 password: { label: "Password", type: "password" }
//             },


//             async authorize(credentials, req) {
//                 const res = await fetch(`${.auth}/login`, {
//                     method: 'POST',
//                     body: JSON.stringify(credentials),
//                     headers: { "Content-Type": "application/json" }
//                 })

//                 const data = await res.json()

//                 if (res.ok && data.user && data.accessToken) {
//                     const token = data.accessToken
//                     const employeeData = data.employeeData
//                     const user = { ...data.user, token, employeeData }
//                     return user;
//                 } else {
//                     throw new Error(data.message);
//                 }
//             }
//         })
//     ],

//     //session strategy
//     session: {
//         strategy: "jwt",
//         maxAge: 10800
//     },


//     pages: {
//         signIn: "/"
//     },

//     // to have all users details in the session
//     callbacks: {
//         async jwt({ token, user, trigger, session }) {

//             if (trigger === "update") {
//                 return { ...token, ...session.user }
//             }
//             return ({ ...token, ...user });
//         },

//         async session({ session, token }) {
//             session.user = token as any;
//             return session;
//         }
//     },
// }