
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home.jsx'
import Cart from './Components/Cart'
import PageNotFound from './Components/PageNotFound.jsx'
import { Provider } from 'react-redux';
import { store } from './Store/Store.jsx'
import { Toaster } from 'react-hot-toast'
function App() {
 

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'*'} element={<PageNotFound/>}/>
      </Routes>
      <Toaster/>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
