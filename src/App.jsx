import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Container from "./components/UI/Container";
import Navbar from "./components/UI/Navbar";
// import Footer from "./components/UI/Footer";
import AboutView from "./views/AboutView";
import DashboardView from "./views/DashboardView";
import GraphView from "./views/GraphView";
import CoinsView from "./views/CoinsView";
import BlogView from "./views/BlogView";
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
                <Route path="/" element={<CoinsView baseUrl={baseUrl} />} />
                <Route path="/graph/:id" element={<GraphView />} />
                <Route path="/dashboard" element={<DashboardView />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="/blog" element={<BlogView />} />
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
