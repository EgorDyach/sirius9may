import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/MainPage'
import { Header } from './shared/Header'
import { AuthPage } from './pages/AuthPage'
import { AuthGooglePage } from './pages/AuthGooglePage'
import { AdminPage } from './pages/AdminPage'
import { Layout } from './shared/Layout'
import { FormPage } from './pages/FormPage'
import { ThankYou } from './pages/ThankYou'
import { UnderConstruction } from './pages/UnderConstruction'
import { HistoriesPage } from './pages/HistoriesPage'

function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path='*' element={<MainPage />} />
          <Route path='form' element={<FormPage />} />
          <Route path='auth' element={<AuthPage />} />
          <Route path='auth2' element={<AuthGooglePage />} />
          <Route path='admin' element={<AdminPage />} />
          <Route path='thankYou' element={<ThankYou />} />
          <Route path='histories' element={<HistoriesPage />} />
          <Route path='gallary' element={<UnderConstruction />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
