import headerLogo from "../images/chef-claude-icon.png";

const Header = () => {
  return (
    <header className="header">
      <img src={headerLogo} alt="logo" className="logo" />
      <span className="heading">Chef Claude</span>
    </header>
  );
};

export default Header;
