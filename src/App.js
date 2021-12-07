import "./App.css"
import AppRouter from "./ReactRouter/Router";
import { useSelector } from "react-redux";
import Navbar from "./Components/Nav&Footer/Navbar";
import Footer from "./Components/Nav&Footer/Footer";





function App() {

  const state = useSelector((e) => (e))
  console.log(state)
  return (
    <div className="App">


      <header className="app_header">
        
        <Navbar />
        <AppRouter />
        
        </header>

      <body className="app_body"></body>
      

      <footer className="app_footer">

        <Footer />
      </footer>
    </div>
  );
}

export default App;
