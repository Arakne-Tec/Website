import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsOfService from './components/TermsOfService.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

