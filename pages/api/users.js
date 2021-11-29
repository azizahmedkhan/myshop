// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getUsers } from "@/lib/db-admin"
import {auth, firestore} from '@/lib/firebase-admin';

export default async function handler(req, res) {
  const {uid} = await auth.verifyIdToken(req.headers.token);
  const users = await getUsers(firestore, uid);
  res.status(200).json(users);
}
