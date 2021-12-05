import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="home">
        <img
          src="https://www.dccomics.com/sites/all/themes/dc_comics_bp/logo.png"
          alt="dc home"
        />
      </a>
      <a href="aboutus">CHARACTERS</a>
      <a href="foryou">COMICS</a>
      <a href="services">MOVIES</a>
      <a href="blog">GAMES</a>
      <a href="vlog">NEWS</a>
      <a href="contact">SHOP</a>
    </div>
  );
};

export default Navbar;
