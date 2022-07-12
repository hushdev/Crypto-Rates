import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Container from "./components/UI/Container";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import About from "./views/About";
import Dashboard from "./views/Dashboard";
import Graph from "./views/Graph";
import Rates from "./views/Rates";
import Blog from "./views/Blog";
import BlogPost from "./views/BlogPost";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <Container>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes>
              <Route path="/" element={<Rates />} exac />
              <Route path="/graph" element={<Graph />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/blog/:postID" element={<BlogPost/>} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Container>
      <Footer/>
    </div>
  );
};

export default App;
