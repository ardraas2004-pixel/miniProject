
import { Link } from 'react-router-dom'
import { Button, Paper } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'

function Home() {
  return (
    <div>

      {/* Background Section */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e')"
        }}
      >

        <Paper
          elevation={5}
          className="text-center p-10 rounded-xl"
          sx={{
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: 'white',
            borderRadius: '16px'
          }}
        >

          <h1 className="text-5xl font-bold mb-4">
            Welcome to Voyara
          </h1>

          <p className="text-lg mb-6">
            Explore the world and create beautiful memories.
          </p>

          <Button
            component={Link}
            to="/explore"
            variant="contained"
            sx={{
              backgroundColor: '#626B4F',
              '&:hover': { backgroundColor: '#4D563D' }
            }}
          >
            Explore Now
          </Button>

        </Paper>
      </div>

      {/* Why Choose Voyara */}
      <section className="bg-[#F7F5ED] p-10 text-center">

        <h2 className="text-3xl font-bold text-[#626B4F] mb-8">
          Why Choose Voyara?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <Paper elevation={2} className="p-6">
            <EventAvailableIcon sx={{ fontSize: 40, color: '#626B4F' }} />
            <h3 className="text-xl font-bold my-3">Easy Planning</h3>
            <p className="text-gray-600">
              Plan your trips easily in one place.
            </p>
          </Paper>

          <Paper elevation={2} className="p-6">
            <TravelExploreIcon sx={{ fontSize: 40, color: '#626B4F' }} />
            <h3 className="text-xl font-bold my-3">Explore Places</h3>
            <p className="text-gray-600">
              Discover beautiful destinations.
            </p>
          </Paper>

          <Paper elevation={2} className="p-6">
            <FavoriteIcon sx={{ fontSize: 40, color: '#626B4F' }} />
            <h3 className="text-xl font-bold my-3">Save Favorites</h3>
            <p className="text-gray-600">
              Save your favorite travel destinations.
            </p>
          </Paper>

        </div>
      </section>

    </div>
  )
}

export default Home
