import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Auth/Login/Login'
import SideBar from './components/SideBar/SideBar'
import Monitoring from './pages/Dashboard/Monitoring/Monitoring'
import History from './pages/Dashboard/History/History'
import Alarms from './pages/Dashboard/Alarms/Alarms'
import Configuration from './pages/Dashboard/Configuration/Configuration'
import Reports from './pages/Dashboard/Reports/Reports'
import Support from './pages/Dashboard/Support/Support'
import VaccineEsp32Management from './pages/Dashboard/Vaccine&Esp32/VaccineEsp32Management'
import DetailsEsp32 from './pages/Dashboard/DetailsEsp32/DetailsEsp32'
import DetailsEsp32Temperature from './pages/Dashboard/DetailsEsp32Temperature/DetailsEsp32Temperature'
import UsersManagement from './pages/Dashboard/UsersManagement/UsersManagement'
import './App.css'

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <section className="flex bg-gray-200 h-screen">
      {/* Solo muestra el sidebar si no estás en la ruta de Login */}
      {!isLoginPage && <SideBar />}
      <div className="flex-1 h-screen overflow-y-auto lg:p-8 p-2 w-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Monitoring />} />
          <Route path="/management" element={<VaccineEsp32Management />} />
          <Route path="/history" element={<History />} />
          <Route path="/alarms" element={<Alarms />} />
          <Route path="/users" element={<UsersManagement />} />
          <Route path="/config" element={<Configuration />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/support" element={<Support />} />
          <Route path="/esp32/:name" element={<DetailsEsp32 />} />
          <Route path="/temperature/:esp32name" element={<DetailsEsp32Temperature />} />
        </Routes>
      </div>
    </section>
  );
}

export default App
