import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart'
import NavBar from './components/NavBar';
function App() {

  return (
    <div style={{textAlign:'center'}}>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
