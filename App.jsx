import Register from "./Register";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";
axios.defaults.withCredentials = true;

function App() {
  return <Register />;
}

export default App;
