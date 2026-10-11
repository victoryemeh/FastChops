import './landingpage.css'
import googlePlayImg from '../../assets/google-play-icon.svg'
import appStoreImg from "../../assets/apple-app-store.svg"
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Safety Center</p>
        </div>

        <div>
          <h4>Legal</h4>
          <p>Cookies Policy</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        <div>
          <h4>Install App</h4>
          <button className="store-btn small">
            <img src={appStoreImg} alt="App Store" className="store-icon-footer" />App Store</button>
          <button className="store-btn small">
            <img src={googlePlayImg} alt="Google Play" className="store-icon-footer" />Google Play</button>
        </div>
      </div>
      <div>
        <p className="copyright">© 2024 FastChops. Website by Veecodes </p>
      </div>
    </div>
  );
}
export default Footer