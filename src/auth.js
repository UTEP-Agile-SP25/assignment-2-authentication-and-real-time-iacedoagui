import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./config";
import { db } from "./config";
import { doc, setDoc, Timestamp } from "firebase/firestore";

export async function signUp(firstName, LastName, email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log("User signed up:", userCredential.user.email)
        console.log("User ID:", userCredential.user.uid)

        const userRef = doc(db, "users", userCredential.user.uid)

        await setDoc(userRef, {
            firstName: firstName,
            LastName: LastName,
            timestamp: new Date()
        })
    } catch (error) {
        console.error("Error fetching user data:", error)
    }
}

export async function login(email, password){
    try {
        const userCredential = await signInWithEmailAndPassword(app, email, password)

        window.location.href = "songManager.html"
    } catch (error) {
        console.error("Login Error:", error)
    }
}

export async function logout(params) {
    try {
        await signOut(auth)
        console.log("User Logged Out")
    } catch (error) {
        console.error("Logout Error", error)
    }
}