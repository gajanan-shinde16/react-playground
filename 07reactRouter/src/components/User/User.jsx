import { useParams } from "react-router-dom"



function User() {
    const {userid} = useParams();
  return (
    <div className="bg-gray-400 text-blue-700  text-center text-2xl">User: {userid}</div>
  )
}

export default User;