
import { Link } from 'react-router-dom'

import {
  Card,
  CardContent,
  Button,
  Typography
} from '@mui/material'

function DestinationDetails() {
  return (
    <div className="bg-[#F7F5ED] min-h-screen p-8">

      <Card className="max-w-3xl mx-auto rounded-xl shadow-md">

        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
          alt="Manali mountains"
          className="w-full h-72 object-cover"
        />

        <CardContent>

          <Typography
            variant="h4"
            className="font-bold text-[#626B4F] mt-4"
          >
            Manali
          </Typography>

          <Typography className="text-gray-600 mt-3">
            Himachal Pradesh, India
          </Typography>

          <Typography className="text-gray-700 mt-4">
            Manali is a beautiful hill station known for its
            mountains, snowy landscapes and natural beauty.
          </Typography>

          <Button
            component={Link}
            to="/addtrip"
            variant="contained"
            sx={{
              backgroundColor: '#626B4F',
              marginTop: '24px',
              '&:hover': {
                backgroundColor: '#4F583F'
              }
            }}
          >
            Plan a Trip
          </Button>

        </CardContent>

      </Card>

    </div>
  )
}

export default DestinationDetails

