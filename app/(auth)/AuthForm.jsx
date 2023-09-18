"use client";
import { useState } from "react";

function AuthForm({ handleSubmit, text, isLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => handleSubmit(e, email, password)}>
      <div class="mb-3 row mt-5">
        <label for="staticEmail" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
            className="form-control"
            type="email"
            autoFocus="true"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input
            className="form-control"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <button disabled={isLoading} className="btn btn-success">
        {text}
      </button>
    </form>
  );
}

export default AuthForm;
