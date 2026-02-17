import { Link, useLocation, useNavigate } from "react-router-dom"

function CreateRoom() {
  const location = useLocation()
   
  const pathNames = ["/set-profile"]
  return (
   pathNames.includes(location.pathname) ? <></> : <Link to={"/create"}>
    <div className="border absolute right-4 bottom-5 p-4 bg-purple-600 rounded-xl text-white cursor-pointer">
      + Create Room
    </div></Link>
  )
}

export default CreateRoom
