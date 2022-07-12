import React, { useState } from "react";
import styled from "styled-components";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");

      document.documentElement.style.setProperty("--gray", "#f3f4f6");
      document.documentElement.style.setProperty("--gray-decor", "#e6e6e6");
      document.documentElement.style.setProperty("--dark", "#ffffff");
      document.documentElement.style.setProperty("--text-white", "#000000");
      document.documentElement.style.setProperty("--text-gray", "#6b7280");
    } else {
      setTheme("dark");
      document.documentElement.style.setProperty("--gray", "#1e1e1e");
      document.documentElement.style.setProperty("--gray-decor", "#272828");
      document.documentElement.style.setProperty("--dark", "#121212");
      document.documentElement.style.setProperty("--text-white", "#e2e2e2");
      document.documentElement.style.setProperty("--text-gray", "#a5a59c");

    }
  };

  return (
    <StyledThemeToggler onClick={toggleTheme} theme={theme}>
      <div className="round"></div>
    </StyledThemeToggler>
  );
};

const StyledThemeToggler = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#ffffff" : "#444444"};
  border: 1px solid var(--gray-decor);
  padding: 3px;
  transition: all 0.3s ease-in-out;
  margin-right: 10px;
  
  .round {
    width: 20px;
    height: 20px;
    background-color: ${(props) =>
      props.theme === "light" ? "#ffffff" : "var(--blue)"};
    box-shadow: 0 0 3px var(--text-gray);
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    transform: translateX(
      ${(props) => (props.theme === "light" ? "20px" : "0")}
    );
    &:hover {
      box-shadow: 0 0 10px var(--blue);
    }
  }
`;

export default ThemeToggler;
