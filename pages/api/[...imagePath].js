import { getImage } from "@/lib/storage.js"
// import {auth, firestore} from '@/lib/firebase-admin';

export default async function handler(req, res) {
    console.log(req.query.imagePath);
    // const {uid} = await auth.verifyIdToken(req.headers.token);
    const imagePath = await getImage(req.query.imagePath.join('/'));
    console.log("imagePath>>",imagePath);
    res.status(200).json(imagePath);
}
