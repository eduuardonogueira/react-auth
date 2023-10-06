import { Route, Routes, Link } from "react-router-dom"
import { Home } from './pages/Home'
import { Private } from './pages/Private'
import { RequireAuth } from "./contexts/Auth/RequireAuth"
import { useContext } from "react"
import { AuthContext } from "./contexts/Auth/AuthContext"


function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href
  }

  return (
  <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <header>
        <h1>Header do site</h1>
        <nav style={{display:"flex", gap:"12px"}}>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      
      <hr style={{width:"80%"}}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>}/>
      </Routes>
  </div>
  )
}

export default App
