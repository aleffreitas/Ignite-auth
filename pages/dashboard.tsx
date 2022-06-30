import { useContext, useEffect } from "react"
import { AuthContext } from "../src/contexts/AuthContext"
import { api } from "../src/services/api"

export default function Dashboard(){

  const { user } = useContext(AuthContext)

  useEffect(() => {
    api.get('/me')
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }, [])

  return(
    <div>
      <h1>Dashboard: {user?.email} </h1>
    </div>
  )
}