import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import UnAuthRoute from './components/UnAuthRoute'
import { queryClient } from './configs/queryClient'
import { ROUTES } from './constants'
import { AuthProvider } from './contexts/AuthContext'
import MainLayout from './layouts/MainLayout'
import Login from './pages/Login'
import TopPage from './pages/TopPage'
import RecordPage from './pages/RecordPage'
import ColumnPage from './pages/ColumnPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<UnAuthRoute />}>
              <Route path={ROUTES.LOGIN} element={<Login />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path={ROUTES.INDEX} element={<TopPage />} />
                <Route path={ROUTES.MY_RECORD} element={<RecordPage />} />
              </Route>
            </Route>
            <Route element={<MainLayout />}>
              <Route path={ROUTES.COLUMN} element={<ColumnPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
