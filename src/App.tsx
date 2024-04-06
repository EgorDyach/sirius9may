import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/MainPage'
import { Header } from './shared/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<MainPage />} />
          {/* <Route path='*' element={<MainPage />} /> */}
          {/* <Route path='*' element={<MainPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
