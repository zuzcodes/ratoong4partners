import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
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
`

export const Button = styled.button`
border-radius: 4px;
border: 2px solid #FF7A5A;
background: ${({primary}) => (primary ? 'transparent' : '#FF7A5A')};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #FF7A5A;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out;
    color: #FFFF;
    background-color: ${({ primary }) => (primary ? '#FF7A5A' : 'transparent')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle
