
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import AddTrip from './Pages/AddTrip'
import Favorites from './Pages/Favorites'
import MyTrips from './Pages/MyTrip'
import EditTrip from './Pages/EditTrip'
import DestinationDetails from './Pages/DestinationDetails'


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/addtrip' element={<AddTrip/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/mytrips' element={<MyTrips/>}/>
      <Route path='/edittrips/:id' element={<EditTrip/>}/>
      <Route path='/destination/:id' element={<DestinationDetails/>}/>
      
    </Routes>
     <Footer/>
    </>
    
  )
}

export default App
