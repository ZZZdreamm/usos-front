import './App.css'
import { logo } from "./logo"
import { getRequestToken } from './apiFunctions/login'

function App() {


  const getToken = async () => {
    const response = await getRequestToken()
    console.log(response)
  }

  let logoComponent = logo('/TradeEITI.png')

  return (
    <main>
      {logoComponent}
      <br></br>
      <button onClick={getToken} id="loginButton">Login</button>
    </main>
  )
}

export default App
