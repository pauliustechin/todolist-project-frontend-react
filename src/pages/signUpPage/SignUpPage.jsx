import { useState } from 'react';
import axios from 'axios';
import './SignUpPage.css';
// import App from '../../App';


function AddUser(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/public/users', {username, password});
      setUsername('');
      setPassword('');
    } catch (error) {
      console.log("Error adding user: ", error);
    }
  }


  return (
    <main className="main-container">
      <form onSubmit={handleSignUp}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <input type="submit" value="Add user"/>
      </form>
    </main>
  )
}

export default AddUser;
