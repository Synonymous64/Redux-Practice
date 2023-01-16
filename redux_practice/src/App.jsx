import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart'
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/cart' element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
