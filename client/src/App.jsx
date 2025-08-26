import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/register"
            element={
              <PrivateRoute>
                <Signup />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
