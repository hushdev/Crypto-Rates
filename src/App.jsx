import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Container from "./components/UI/Container";
import Navbar from "./components/UI/Navbar";
// import Footer from "./components/UI/Footer";
import About from "./views/About";
import Dashboard from "./views/Dashboard";
import Graph from "./views/Graph";
import Coins from "./views/Coins";
import Blog from "./views/Blog";
import BlogPost from "./views/BlogPost";
import styled from "styled-components";

const App = () => {
  const location = useLocation();
  const queryClient = new QueryClient();
  const baseUrl = process.env.REACT_APP_API;

  return (
    <StyledApp>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Container>
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Routes>
                <Route path="/" element={<Coins baseUrl={baseUrl} />} exac />
                <Route path="/graph/:id" element={<Graph />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:postID" element={<BlogPost />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </Container>
        {/* <Footer /> */}
      </QueryClientProvider>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  /* min-height: 100vh; */
  /* height: 100%; */
  position: relative;
  padding-bottom: 45px;
`;

export default App;
