import { firestore } from './firebase-admin';

async function getUsers() {
    const snapshot = await firestore.collection('users').get();
    const users = [];
    snapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
    });
  return users;
}
export {getUsers}