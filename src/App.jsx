
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './App.css'
import auth from './firebase/firebase.init';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result=>{
      console.log(result.user);
      setUser(result.user)
    })
    .catch(error => console.log('Error', error))
  }

  return (
    <>
     
      <h1>Dimple Firebase</h1>
      <button onClick={handleGoogleSignIn}>Login with Google</button>
      {
        user && <div>
          <h3>User: {user.displayName}</h3>
          <h4>Email: {user.email}</h4>
        </div>
      }
      
    </>
  )
}

export default App
