import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import UserPrivacy from './pages/UserPrivacy'
import MerchantPrivacy from './pages/MerchantPrivacy'
import DriverPrivacy from './pages/DriverPrivacy'
import UserSupport from './pages/UserSupport'
import MerchantSupport from './pages/MerchantSupport'
import DriverSupport from './pages/DriverSupport'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/privacy" element={<UserPrivacy />} />
        <Route path="/merchant/privacy" element={<MerchantPrivacy />} />
        <Route path="/driver/privacy" element={<DriverPrivacy />} />
        <Route path="/user/support" element={<UserSupport />} />
        <Route path="/merchant/support" element={<MerchantSupport />} />
        <Route path="/driver/support" element={<DriverSupport />} />
        <Route path="/" element={<Navigate to="/user/support" replace />} />
      </Routes>
    </Router>
  )
}

export default App

