import './App.css'
import Login from '../components/Login'
import { useContext } from 'react'
import AuthContext from '../components/AuthContext'
import TablaEstudiantes from '../components/TablaEstudiantes'

function App() {

  const {user, token} = useContext(AuthContext);

  return (
      <div>
        {
          token ?
          (
            <TablaEstudiantes />
          ) : (
            <Login />   
          )
        }
      </div>
  )
}

export default App
