import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import UserPrivacy from './pages/UserPrivacy'
import MerchantPrivacy from './pages/MerchantPrivacy'
import DriverPrivacy from './pages/DriverPrivacy'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/privacy" element={<UserPrivacy />} />
        <Route path="/merchant/privacy" element={<MerchantPrivacy />} />
        <Route path="/driver/privacy" element={<DriverPrivacy />} />
        <Route path="/" element={<Navigate to="/user/privacy" replace />} />
      </Routes>
    </Router>
  )
}

export default App

