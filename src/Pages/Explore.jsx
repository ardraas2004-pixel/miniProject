import { Link } from 'react-router-dom'

import {
  Card,
  CardContent,
  Button,
  Typography
} from '@mui/material'

function Explore() {

  const destinations = [
    {
      id: 1,
      name: 'Manali',
      location: 'Himachal Pradesh, India',
      image: 'https://www.snowvalleyresorts.com/wp-content/uploads/featurd-image-min.webp'
    },
    {
      id: 2,
      name: 'Shimla',
      location: 'Himachal Pradesh, India',
      image: 'https://th.bing.com/th/id/R.dadb5905727159bc726ab48cf3bafc88?rik=KG0xbYy3Fr%2fg7A&riu=http%3a%2f%2fimage3.mouthshut.com%2fimages%2fimagesp%2f925003655s.jpg&ehk=CrTEZ%2bw%2fnIRP9yLRlmKLSeVsMy5oV0l6woIVJbD0DLc%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 3,
      name: 'Munnar',
      location: 'Kerala, India',
      image: 'https://irisholidays.com/keralatourism/wp-content/uploads/2013/01/munnar-tea-plantations.jpg'
    },
    {
      id: 4,
      name: 'Kashmir',
      location: 'India',
      image: 'https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg'
    },
    {
      id: 5,
      name: 'Tokyo',
      location: 'Japan',
      image: 'https://goldensmiletravel.com/_next/image?url=https%3A%2F%2Fadmin.goldensmiletravel.com%2Fupload%2Fold%2Fimages%2F2023%2F07%2F03%2Fimage4-1688355394.jpg&w=1200&q=80'
    },
    {
      id: 6,
      name: 'Switzerland',
      location: 'Switzerland',
      image: 'https://cdn1.matadornetwork.com/blogs/1/2018/10/Waterfall-in-Lauterbrunnen-village.jpg'
    },
    {
      id: 7,
      name: 'Paris',
      location: 'France',
      image: 'https://wallpapercave.com/wp/wp4840467.jpg'
    },
    {
      id: 8,
      name: 'Bali',
      location: 'Indonesia',
      image: 'https://tse2.mm.bing.net/th/id/OIP.lDq5ek7Vofdo-WxV1vuWnAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 9,
      name: 'Jaipur',
      location: 'Rajasthan, India',
      image: 'https://static.toiimg.com/thumb/110183308/Jaipur.jpg?width=636&height=358&resize=4'
    }
  ]

  return (
    <div className="bg-[#F7F5ED] min-h-screen p-8">

      <h1 className="text-3xl font-bold text-[#626B4F] text-center mb-8">
        Explore Destinations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {destinations.map((place) => (

          <Card
            key={place.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >

            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover"
            />

            <CardContent className="text-center">

              <Typography
                variant="h5"
                className="font-bold text-[#626B4F]"
              >
                {place.name}
              </Typography>

              <Typography
                className="text-gray-600 mt-2"
              >
                {place.location}
              </Typography>

              <Button
                component={Link}
                to={`/destination/${place.id}`}
                variant="contained"
                className="mt-4"
                sx={{
                  backgroundColor: '#626B4F',
                  '&:hover': {
                    backgroundColor: '#4F583F'
                  }
                }}
              >
                View Details
              </Button>

            </CardContent>

          </Card>

        ))}

      </div>

    </div>
  )
}

export default Explore