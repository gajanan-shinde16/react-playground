import { useContext } from 'react'
import UserContext from '../context/userContext'
function Profile() {
  const { user } = useContext(UserContext)

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  )
}

export default Profile