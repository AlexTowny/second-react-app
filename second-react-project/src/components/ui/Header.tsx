import { useAuth } from "../../hooks/useAuth"

const Header = () => {
    const {user, setUser} = useAuth()
return user ? (<><h2>
    Welcome, {user.name}
    <button onClick={()=>setUser(null)}>Logout</button>
</h2>
</>) :
<button onClick={()=>setUser({name:'Max'})}>Login</button>

}

export default  Header 