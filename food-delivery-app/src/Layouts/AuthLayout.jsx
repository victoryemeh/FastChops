import "../Components/Auth/Auth.css";

function AuthLayout({ children, image }) {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src={image} alt="Auth visual" className="auth-image" />
      </div>

      <div className="auth-right">{children}</div>
    </div>
  );
}

export default AuthLayout;
