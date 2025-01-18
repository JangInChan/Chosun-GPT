import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Chosun-GPT</div>
      <div className="links">
        <a href="/" className="link">Home</a>
        <a href="/chat" className="link">Chat</a>
      </div>
    </nav>
  );
};

export default Navbar;