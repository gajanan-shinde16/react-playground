import {useState, useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {
    const {setUser} = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ name: username });
        setUsername('');
        setPassword('');
    }


  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>
        Login
      </button>
    </div>
  )
}

export default Login