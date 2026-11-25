
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-[#626B4F] text-white px-8 py-4 flex justify-between items-center">

      <Link to="/" className="text-2xl font-bold">
        Voyara.
      </Link>

      <div className="flex gap-6 items-center">

        <Link to="/">Home</Link>

        <Link to="/explore">Explore</Link>

        <Link to="/favorites">Favorites</Link>

        <Link to="/mytrips">My Trips</Link>

        <Link
          to="/addtrip"
          className="bg-[#F7F5ED] text-[#626B4F] px-4 py-2 rounded-lg"
        >
          + Add Trip
        </Link>

      </div>

    </nav>
  )
}

export default Navbar
