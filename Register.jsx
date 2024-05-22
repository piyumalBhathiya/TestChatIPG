import { useContext, useState } from "react";
import axios from "axios";
import { UserContextProvider, UserContext } from './UserContext';

export default function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [EmplId, setEmpId] = useState("");

  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

  async function register(ev) {
    ev.preventDefault();
    try {
      await axios.post(
        'http://localhost:4040/register',
        {
          Name,
          Email,
          Username,
          Password,
          EmplId,
        },
        {
          withCredentials: true,
        }
      );
      setLoggedInUsername(Username);
      setId(data.id);
    } catch (error) {
      console.error("Registration error:", error);
    }
  }

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto" onSubmit={register}>
        Name:{" "}
        <input
          value={Name}
          onChange={(ev) => setName(ev.target.value)}
          type="text"
          className="block w-full rounded-sm p-2 mb-2"
        />
        Email:{" "}
        <input
          value={Email}
          onChange={(ev) => setEmail(ev.target.value)}
          type="email"
          className="block w-full rounded-sm p-2 mb-2"
        />
        Username:{" "}
        <input
          value={Username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          className="block w-full rounded-sm p-2 mb-2"
        />
        Password:{" "}
        <input
          value={Password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          className="block w-full rounded-sm p-2 mb-2"
        />
        Employee ID:{" "}
        <input
          value={EmplId}
          onChange={(ev) => setEmpId(ev.target.value)}
          type="text"
          className="block w-full rounded-sm p-2 mb-2"
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          Register
        </button>
      </form>
    </div>
  );
}
