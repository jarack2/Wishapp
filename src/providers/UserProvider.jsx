import React, { createContext, useEffect, useState } from 'react';

import firebase from '../../firebaseConfig';
import 'firebase/firestore';

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, defineUser] = useState();
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(userAuth => {
      defineUser(userAuth);
    });
  });
  
  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;