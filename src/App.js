import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import CoinPage from './pages/CoinPage'
import BackToTop from './components/Common/BackToTop'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/coin/:id' element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
     <BackToTop />
    </div>
  )
}

export default App

