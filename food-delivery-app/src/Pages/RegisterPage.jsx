import { useNavigate } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import AuthForm from "../Components/Auth/AuthForm";
import RegisterImg from "../assets/RegisterImg.png";

function Register() {
  const navigate = useNavigate();

  const registerFields = [
    { type: "text", placeholder: "Full Name", required: true },
    { type: "email", placeholder: "Email", required: true },
    { type: "password", placeholder: "Password", required: true },
  ];

  const handleRegister = () => {
    navigate("/dashboard");
  };

  return (
    <AuthLayout image={RegisterImg}>
      <AuthForm
        title="Welcome to FastChops"
        fields={registerFields}
        buttonText="SIGN UP"
        onSubmit={handleRegister}
        footerText="Already have an account?"
        footerLinkText="Login"
        onFooterClick={() => navigate("/login")}
      />
    </AuthLayout>
  );
}

export default Register;
