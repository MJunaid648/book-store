import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
