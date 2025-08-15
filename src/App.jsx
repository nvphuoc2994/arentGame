import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { queryClient } from './configs/queryClient'
import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
