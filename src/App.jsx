import './App.css'
import { Routes,Route } from 'react-router-dom' 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import IndexPage from './pages/IndexPage';
import CreateTrip from './pages/CreateTrip';
import { Toaster } from 'react-hot-toast';
import MyTrip from './pages/MyTrip';
import ViewTrip from './pages/viewTrip/[tripId]/Index';
import ProtectedRoute from './components/ProtectedRoute';
function App() {

  return (
    <div className=" ">
      <div>
        <Toaster />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/my-trip" element={<MyTrip />} />
        <Route
          path="/view-trip/:tripId"
          element={
            <ProtectedRoute>
              <ViewTrip />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App
