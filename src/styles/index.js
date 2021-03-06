import styled from 'styled-components';
import img from './../img/wmp-background.jpg';

/*
TO BE REFACTORED INTO MORE READABLE STYLE NAMES
- React I dev initially created names for the styled components
 */

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  color: black;
  width:100%;
  justify-content:space-between;
  align-items:flex-end;
  box-shadow: 0 -20px 3px 3px red;
`;

export const Ss = styled.button`
  height: 30px;
  background: #1A4704;
  color: black;
  border: 0;
  border-radius: .5rem;
  margin: 20px 0;
  padding:10px;
  height:50px;
  color:white;
  width:100%;
  font-family: 'Amatic SC', cursive;
  font-size:25px;

  &:hover{
    background-color: #008000;
    cursor: pointer;
  }
`;

export const Ii = styled.input`
  width: 100%;
  padding: 15px 22px;
  margin: 10px 0;
  box-sizing: border-box;
  border-radius: 4px;
  background-color:#ACFE9F;
  border: 1px solid #1A4704;
  `;

export const Ll = styled.label`
  margin-bottom: -12px;
  text-align: center;
  width: 200px;
  padding:10px;
  `;

export const Main = styled.div`
    background:url(${img}) no-repeat center center fixed;
    height:100vh;
    background-size:cover;
`;

export const LinkDiv = styled.div`
display:flex;
justify-content:space-evenly;
padding:20px;
`;

export const PlantAreaIn = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid 1px #1A4704; */
  border-radius: 3px;
  padding: 1rem;
  position: relative;
  margin: 1rem;
`;

export const PlantAreaOut = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PlantCard = styled.div`

`;
