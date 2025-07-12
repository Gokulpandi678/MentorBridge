import { atom } from "jotai";

export const loginAtom = atom({
    name:'',
    password:'',
    loggedIn:false
})