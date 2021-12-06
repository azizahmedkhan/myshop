import firebaseApp from '@/lib/firebase';
import {
    getFirestore,
    addDoc,
    setDoc,
    getDoc,
    doc,
    collection, } from "firebase/firestore";

    const firestore = getFirestore(firebaseApp);

export function createUser(uid, data) {
     const userDoc =  doc(firestore, 'users/'+uid);
    return setDoc(userDoc, {uid, ...data}, {merge: true});
}

export function getUser(uid) {
    const userDoc =  doc(firestore, 'users/'+uid);
   return getDoc(userDoc);
}

export function createCategory(data) {
    console.log("data>>"+data);

    // const catRef = await addDoc(collection(firestore, 'categories'), {
    //     name: getUserName(),
    //     imageUrl: LOADING_IMAGE_URL,
    //     profilePicUrl: getProfilePicUrl(),
    //     timestamp: serverTimestamp()
    //   });

    return setDoc(collection(firestore, 'categories'),{...data}, {merge: true});
//    return addDoc(catCol, {...data}, {merge: true});
}