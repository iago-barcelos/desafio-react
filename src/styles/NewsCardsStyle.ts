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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 95%;
  border: solid;
  border-width: 1px;
  border-radius: 6px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const DivReadAndFavorite = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;

export const TextContentDiv = styled.div`
  padding: 2%;
`;

export const ReadMoreButton = styled.button`
  
`;

export const HeartButton = styled.button`
  background: none;
  border: none;
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