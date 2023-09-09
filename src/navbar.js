import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1> The Dojo Blog </h1>
        <div className="links">
          <Link to="/">Home</Link> {/* This will be Link tag for out home page and the given path */}    
          <Link to="/create" style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px"
          }} >New Blog</Link> {/* This will be later for creating a new blog */}    
        </div> {/* This will be links in our navigation */}
    </nav>
  );
}

export default Navbar;
