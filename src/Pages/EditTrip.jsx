
import {
  Card,
  CardContent,
  Button,
  TextField
} from '@mui/material'

function EditTrip() {
  return (
    <div className="bg-[#F7F5ED] min-h-screen p-8">

      <h1 className="text-3xl font-bold text-[#626B4F] text-center mb-8">
        Edit Trip
      </h1>

      <Card className="max-w-lg mx-auto rounded-xl shadow-md">

        <CardContent>

          <form className="flex flex-col gap-4">

            <TextField
              label="Trip Name"
              defaultValue="Manali Trip"
              fullWidth
            />

            <TextField
              label="Destination"
              defaultValue="Manali"
              fullWidth
            />

            <TextField
              label="Start Date"
              placeholder="DD/MM/YYYY"
              fullWidth
            />

            <TextField
              label="End Date"
              placeholder="DD/MM/YYYY"
              fullWidth
            />

            <TextField
              label="Trip Description"
              placeholder="Enter trip description"
              multiline
              rows={3}
              fullWidth
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#626B4F',
                '&:hover': {
                  backgroundColor: '#4F583F'
                }
              }}
            >
              Update Trip
            </Button>

          </form>

        </CardContent>

      </Card>

    </div>
  )
}

export default EditTrip
