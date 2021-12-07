import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import {Home,About,Dashboard, Login, SignUp} from "./index"



function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </Router>
  );
}


export default AppRouter