import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData()



  return (
    <div className="bg-gray-700 h-70">
        <div className="text-center text-2xl text-white">Github Followers: {data.followers}</div>
        <img className=" w-50 h-50 m-5 " src={data.avatar_url} alt="profile picture" />
    </div>
    
  )
}

export default Github;

export const githubInfoLoader = async ()=>{
    const data = await fetch("https://api.github.com/users/gajanan-shinde16")
    .then((res) => res.json());

    return data;
}