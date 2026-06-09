import { Link } from "react-router-dom";

function Navbar() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (
    <nav>

      <Link to="/">
        Home
      </Link>

      <Link to="/destinations">
        Destinations
      </Link>

      {!user && (
        <>
          <Link to="/login">
            Login
          </Link>

          <Link to="/register">
            Register
          </Link>
        </>
      )}

      {user && (
        <Link to="/logout">
          Logout
        </Link>
      )}
<Link to="/favorites">
  Favorites
</Link>
    </nav>
  );
}

export default Navbar;