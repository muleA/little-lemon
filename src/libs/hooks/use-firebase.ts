/* eslint-disable @typescript-eslint/no-explicit-any */
import initializeAuthentication from "@components/auth/config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert2';


//initialize firebase  authentication
initializeAuthentication()

const useFirebase = () => {
   const [user,setUser] = useState<any>({});
   const auth:any = getAuth();
   const history = useNavigate();

   //on State Change 
   useEffect(() => {
       onAuthStateChanged(auth,user => {
           if (user) {
               setUser(user)
           }
       })
   },[auth])

   //sign up functionality
   const signUpUser = (email: string, password: string, name: any, image: any) => {
       createUserWithEmailAndPassword(auth, email, password)
           .then((res) => {
               setUser(res.user)
               updateProfile(auth?.currentUser, {
                   displayName: name,
                   photoURL: image
               }).then(() => {
                   swal.fire("Good job!", "Account has been created!", "success");
                   history('/');
               })

           }).catch(err => swal.fire("Something went wrong!", `${err.message}`, "error"))
   }

   //sign in functionality
   const signInUser = (email: string, password: string) => {
       signInWithEmailAndPassword(auth, email , password)
       .then(res => {
           setUser(res.user);
           swal.fire("Sign in Successful!", "Welcome back !", "info")
           history('/');
       })
           .catch(err => swal.fire("Something went wrong!", `${err.message}`, "error"))
   }


   //google sign in 
   const signInWithGoogle = () => {
       const googleProvider = new GoogleAuthProvider();
       signInWithPopup(auth, googleProvider)
       .then(res => {
           setUser(res.user);
           swal.fire("Good job!", "Account has been created!", "success");
           history('/');
       }).catch(err => console.log(err.message))
   }

   // sign out 
   const signOutUser = () => {
       signOut(auth).then(() => {
           setUser({});
           swal.fire("Logout Successful!", "You are logged out!", "success");
           history('/signin')
       }).catch((err) => {
           swal.fire("Something went wrong!", `${err.message}`, "error")
       });
   }

   return {
       user,
       signUpUser,
       signInUser,
       signOutUser,
       signInWithGoogle
   }
}

export default useFirebase
