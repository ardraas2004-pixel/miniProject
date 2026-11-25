
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#626B4F] text-white text-center p-6">

      <h2 className="text-2xl font-bold mb-2">
        Voyara.
      </h2>

      <p className="text-sm mb-4">
        Explore the world. Create memories.
      </p>

      <div className="flex justify-center gap-6 mb-4">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/mytrips">My Trips</Link>
      </div>

      <p className="text-sm text-gray-200">
        © 2026 Voyara. All Rights Reserved.
      </p>

    </footer>
  )
}

export default Footer
