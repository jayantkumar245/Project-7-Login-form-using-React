import { useState } from "react";
import Loginform from "./Loginform";

export default function App() {
  const adminUser = {
    email: "admin@user.com",
    password: "admin123"
  };
  const [users, setUser] = useState({ name: "", email: "" });
  const [errors, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    setUser({
      name: details.name,
      email: details.email
    });
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("logged in");
    } else {
      console.log("Details do not Match");
      setError("Details do not Match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <div className="App">
      {users.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{users.name}</span>
          </h2>
          <button onClick={Logout}>logout</button>
        </div>
      ) : (
        <Loginform Login={Login} error={errors} />
      )}
      ;
    </div>
  );
}
