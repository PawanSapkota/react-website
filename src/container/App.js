import Contact from "../components/pages/contact";
import Home from "../components/pages/home";
import Layout from "../hoc/layout/layout";
import Blog from "../components/pages/blog";
import Course from "../components/pages/course";
import Page from "../components/pages/page";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
          <Route path="/page" element={<Page />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </Layout>

    </div>
  )


}

export default App;
