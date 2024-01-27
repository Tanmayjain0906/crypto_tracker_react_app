import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import CoinPage from './pages/CoinPage'
import BackToTop from './components/Common/BackToTop'
import ComparePage from './pages/ComparePage'
import Wishlist from './pages/WishlistPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/coin/:id' element={<CoinPage />} />
          <Route path='/compare' element={<ComparePage />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
     <BackToTop />
    </div>
  )
}

export default App

