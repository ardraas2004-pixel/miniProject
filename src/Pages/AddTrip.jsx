import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@mui/material";

function AddTrip() {
  return (
    <div className="bg-[#F7F5ED] min-h-screen p-8">
      <h1 className="text-3xl font-bold text-[#626B4F] text-center mb-8">
        Add New Trip
      </h1>

      <div className="flex justify-center">
        <Card className="w-full max-w-lg rounded-xl shadow-md">
          <CardContent>
            <form className="flex flex-col gap-4">
              <TextField
                label="Trip Name"
                placeholder="Enter trip name"
                fullWidth
              />

              <TextField
                label="Destination"
                placeholder="Enter destination"
                fullWidth
              />

              <TextField label="Start Date"  />

              <TextField label="End Date"  />
              <TextField
                label="Trip Description"
                placeholder="Enter trip description"
                multiline
                rows={4}
                fullWidth
              />

              <Button
                type="button"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#626B4F",
                  padding: "12px",
                  "&:hover": {
                    backgroundColor: "#4F583F",
                  },
                }}
              >
                Add Trip
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AddTrip;
