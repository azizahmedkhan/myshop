import firebaseApp from '@/lib/firebase';
import {
    getFirestore,
    setDoc,
    getDoc,
    doc, } from "firebase/firestore";

    const firestore = getFirestore(firebaseApp);

export  function createUser(uid, data) {
     const userDoc =  doc(firestore, 'users/'+uid);
    return setDoc(userDoc, {uid, ...data}, {merge: true});
}

export  function getUser(uid) {
    const userDoc =  doc(firestore, 'users/'+uid);
   return getDoc(userDoc);
}