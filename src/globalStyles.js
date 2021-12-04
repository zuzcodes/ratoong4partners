import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  border: 2px solid;
  padding: 12px 40px;
  border-color: ${({ primary }) => (primary ? "#5570ff" : "#cfdaff")};
  width: ${({ wide }) => (wide ? "350px" : "auto")};
  display: ${({ display }) => (display ? "auto" : "none")};
  color: ${({ primary }) => (primary ? "#5570ff" : "#cfdaff")};
  font-size: 1.2rem;
  font-weight: 400;
  background: none;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    color: #1d2027;
    background-color: ${({ primary }) => (primary ? "#5570ff" : "#cfdaff")};
  }

  @media screen and (max-width: 960px) {
    width: ${({ wide }) => (wide ? "350px" : "100%")};
  }
`;

export default GlobalStyle;
