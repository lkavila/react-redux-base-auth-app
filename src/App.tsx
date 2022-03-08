import {
  Routes,
  Route,
} from "react-router-dom";
import LogIn from "./Containers/User/LogIn";
import SignUp from "./Containers/User/SignUp"

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}