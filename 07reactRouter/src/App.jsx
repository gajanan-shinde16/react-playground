import {Outlet} from 'react-router-dom'
import Headers from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {
  

  return (
    <>
    <Headers />
    <Outlet />
    <Footer/>
    </>
  )
}

export default App
