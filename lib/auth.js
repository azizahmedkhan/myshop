import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
  } from 'firebase/auth';
  import { useState, useEffect, createContext, useContext } from "react";
  import firebaseApp from '@/lib/firebase';
  import { createUser } from '@/lib/db.js';

const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const handleUser = async (rawUser) => {
        if (rawUser) {
          const user = await formatUser(rawUser);
          const { token, ...userWithoutToken } = user;
          createUser(user.uid, userWithoutToken);
          setUser(user);
          return user;
        } else {
          setUser(false);    
          return false;
        }
      };
    const signInWithGoogle = () => {
        return signInWithPopup(getAuth(firebaseApp), new GoogleAuthProvider())
         .then(response => {
            handleUser(response.user);
            return response.user;
        }).catch(error => {
            console.log('error',error);
        });
    }

    const signOut = () => {        
        return getAuth(firebaseApp)
        .signOut()
        .then(() => handleUser(false));
    }

    useEffect(() => {
        const unsubscribe = getAuth(firebaseApp).onIdTokenChanged(handleUser);
        return () => unsubscribe();
    }, []);
    
    return {
        user,
        signInWithGoogle,   
        signOut,
    }
}

const formatUser = async (user) => {
  const token = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token
  };
  };