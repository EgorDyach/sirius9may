import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/MainPage'
import { Header } from './shared/Header'
import { AuthPage } from './pages/AuthPage'
import { AuthGooglePage } from './pages/AuthGooglePage'
import { AdminPage } from './pages/AdminPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<MainPage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/auth2' element={<AuthGooglePage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
