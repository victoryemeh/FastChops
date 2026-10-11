import { useNavigate } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import AuthForm from "../Components/Auth/AuthForm";
import LoginImg from "../assets/LoginImg.png";

function Login() {
  const navigate = useNavigate();

  const loginFields = [
    { type: "email", placeholder: "Email", required: true },
    { type: "password", placeholder: "Password", required: true },
  ];

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <AuthLayout image={LoginImg}>
      <AuthForm
        title="Welcome Back"
        fields={loginFields}
        buttonText="Login"
        onSubmit={handleLogin}
        footerText="Don't have an account?"
        footerLinkText="Register"
        onFooterClick={() => navigate("/register")}
      />
    </AuthLayout>
  );
}

export default Login;
