import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Blogs from './components/Blogs';
import CreateBlog from "./components/CreateBlog";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Navigation from "./components/Navigation"
import NotFound from "./pages/NotFound";
import Register from './pages/Register';

function App() {
  return (
    <>
      <div className="scrollbar scrollbar-thumb-blue-700 scrollbar-track-gray-700 overflow-y-auto">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/:id' element={<Blog />} />
          <Route path='/create' element={<CreateBlog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
