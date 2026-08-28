import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import NgoDashboardPage from '../pages/ngo/NgoDashboardPage'
import NgoDonationsPage from '../pages/ngo/NgoDonationsPage'
import NgoHistoryPage from '../pages/ngo/NgoHistoryPage'
import NgoPickupsPage from '../pages/ngo/NgoPickupsPage'
import HomePage from '../pages/public/HomePage'
import CreateDonationPage from '../pages/restaurant/CreateDonationPage'
import RestaurantDashboardPage from '../pages/restaurant/RestaurantDashboardPage'
import RestaurantDonationsPage from '../pages/restaurant/RestaurantDonationsPage'
import SettingsPage from '../pages/SettingsPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/restaurant" element={<RestaurantDashboardPage />} />
          <Route
            path="/restaurant/create-donation"
            element={<CreateDonationPage />}
          />
          <Route
            path="/restaurant/donations"
            element={<RestaurantDonationsPage />}
          />
          <Route path="/ngo" element={<NgoDashboardPage />} />
          <Route path="/ngo/donations" element={<NgoDonationsPage />} />
          <Route path="/ngo/pickups" element={<NgoPickupsPage />} />
          <Route path="/ngo/history" element={<NgoHistoryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
