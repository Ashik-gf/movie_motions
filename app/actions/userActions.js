"use server"

import connectMongo from "@/dbconnect/connectMongo"
import WatchList from "@/models/watchListModel"
import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation'
import User from "../../models/userModel"
export const addUser = async (formData) => {
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')
    // most beautifull function form javaScript 
    // const user = Object.fromEntries(formData)

    if (password !== confirmPassword) {
        // Handle password mismatch error, e.g., display an error message to the user
        console.error("Passwords do not match");
        return; // Or redirect the user to the registration form with an error message
    }
    const userData = {
        firstName, lastName, email, password
    }
    const users = await getUser()
    const invalidUser = users.find((user) => user.email === userData.email)
    if (invalidUser) {
        console.log("User Already Exist");
        redirect('/auth/login')
    }
    try {
        await connectMongo()
        // insert data to data base
        await new User(userData).save();
        revalidatePath('/auth/user')
    } catch (error) {
        console.error(error.message);
    }

}
// getAll user
export const getUser = async () => {
    try {
        await connectMongo()
        const users = User.find();
        return users
    } catch (error) {
        console.error(error.message);
    }
}
// getOne User
async function findUserByCredentials(credential) {
    const users = await getUser();
    const user = users.find((user) => user.email === credential.email && user.password === credential.password);
    // if (user) {
    //     return replaceMongoIdInObject(user);
    // }
    // return null;

    return user;
}
export async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");
        const found = await findUserByCredentials(credential);
        return found;
    } catch (error) {
        throw error;
    }
}
// for watchlist
export const addWatchList = async (movieData) => {
    try {
        await connectMongo()
        // insert data to data base
        await new WatchList(movieData).save();
        revalidatePath('/watch')
    } catch (error) {
        // console.error(error.message);
        throw error
    }
}
export const getWatchList = async () => {
    try {
        await connectMongo();
        const watchLists = WatchList.find();
        console.log(watchLists);
        return watchLists
    } catch (error) {
        console.error(error.message);
    }
}