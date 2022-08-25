import React from "react";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Container from "./components/UI/Container";
import Navbar from "./components/UI/Navbar";
import AboutView from "./views/AboutView";
import DashboardView from "./views/DashboardView";
import GraphView from "./views/GraphView";
import CoinsView from "./views/CoinsView";
import BlogView from "./views/BlogView";
import MobileNavbar from "./components/UI/MobileNavbar";

const App = () => {
  const location = useLocation();
  const queryClient = new QueryClient();
  const baseUrl = process.env.REACT_APP_API;

  return (
    <StyledApp>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <MobileNavbar />
        <Container>
          <TransitionGroup component={"div"}>
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
      </QueryClientProvider>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  position: relative;
  padding-bottom: 20px;
  @media (max-width: 730px) {
    padding-bottom: 79px;
  }
`;

export default App;
