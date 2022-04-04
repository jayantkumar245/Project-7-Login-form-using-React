import { useState } from "react";

export default function Loginform({ Login, error }) {
  const [details, setdetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setdetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setdetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setdetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}
