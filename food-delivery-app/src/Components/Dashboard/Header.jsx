import avatar from "../../assets/avatar.svg";
import "./dashboard.css";
function Header({ userName = "Victory Emeh" }) {
  return (
    <div className="header">
      <div className="greeting">
        <h3>Good morning, {userName}!</h3>
        <p>What delicious meal are you craving today?</p>
      </div>
      <img className="avatar" src={avatar} alt="Avatar"></img>
    </div>
  );
}

export default Header;
