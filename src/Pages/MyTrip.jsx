
import { Link } from 'react-router-dom'

import {
  Card,
  CardContent,
  Button,
  Typography
} from '@mui/material'

function MyTrips() {
  return (
    <div className="bg-[#F7F5ED] min-h-screen p-8">

      <h1 className="text-3xl font-bold text-[#626B4F] text-center mb-8">
        My Trips
      </h1>

      <div className="flex justify-center">

        <Card className="w-full max-w-md rounded-xl shadow-md">

          <CardContent>

            <Typography
              variant="h5"
              className="font-bold text-[#626B4F] mb-3"
            >
              Manali Trip
            </Typography>

            <Typography className="text-gray-600 mb-2">
              Destination: Manali
            </Typography>

            <Typography className="text-gray-600 mb-2">
              Start Date: 10 December 2026
            </Typography>

            <Typography className="text-gray-600 mb-4">
              End Date: 15 December 2026
            </Typography>

            <div className="flex gap-3">

              <Button
                component={Link}
                to="/edittrips/1"
                variant="contained"
                sx={{
                  backgroundColor: '#626B4F',
                  '&:hover': {
                    backgroundColor: '#4F583F'
                  }
                }}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
              >
                Delete
              </Button>

            </div>

          </CardContent>

        </Card>

      </div>

    </div>
  )
}

export default MyTrips

