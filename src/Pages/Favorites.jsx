
import {
  Card,
  CardContent,
  Button,
  Typography
} from '@mui/material'

function Favorites() {
  return (
    <div className="bg-[#F7F5ED] min-h-screen p-8">

      <h1 className="text-3xl font-bold text-[#626B4F] text-center mb-8">
        My Favorites
      </h1>

      <div className="flex justify-center">

        <Card className="w-full max-w-sm rounded-xl shadow-md">

          <img
            src="https://www.snowvalleyresorts.com/wp-content/uploads/featurd-image-min.webp"
            alt="Mountain destination"
            className="w-full h-48 object-cover"
          />

          <CardContent className="text-center">

            <Typography
              variant="h5"
              className="font-bold text-[#626B4F]"
            >
              Manali
            </Typography>

            <Typography className="text-gray-600 mb-4">
              Himachal Pradesh, India
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#626B4F',
                '&:hover': {
                  backgroundColor: '#4F583F'
                }
              }}
            >
              Remove Favorite
            </Button>

          </CardContent>

        </Card>

      </div>

    </div>
  )
}

export default Favorites
