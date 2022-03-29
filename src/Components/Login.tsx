import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Hooks/useStore";

export const Login = observer(() => {
  const {
    rootStore: { loginStore },
  } = useStore();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onLogin = async () => {
    await loginStore.fetchUserToken(username, password);
    navigate("/products");
  };

  const onChangeUserName = (event: ChangeEvent<HTMLInputElement>) =>
    setUserName(event.target.value);
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  return (
    <main className="form-signin">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={username}
            onChange={onChangeUserName}
          />
          <label htmlFor="floatingInput">UserName</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button
          onClick={onLogin}
          className="w-100 btn btn-lg btn-primary"
          type="button"
        >
          Sign in
        </button>
      </form>
    </main>
  );
});
