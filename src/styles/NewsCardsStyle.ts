import styled from "styled-components";

export const GridDiv = styled.div`
  margin: 3% 3% 3% 3%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-auto-flow: row dense;

  justify-content: center;
`;

export const EachNewsCard = styled.section`
  width: 95%;
  border-radius: 3px;
  background-color: green;
  filter: drop-shadow(0px 2px 14px rgba(42, 42, 42, 0.24));
`;

export const StyledButton = styled.button`
  
`;

export const FilterBarButtons = styled.button`
  margin-right: 3%;
  font-family: Poppins;
  width: auto;
  font-size: larger;
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
  
`;

export const FilterBarDiv = styled.div`
  margin: 3%;
  height: 42px;
  margin-top: 10%;

`;