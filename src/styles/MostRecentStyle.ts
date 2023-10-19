import styled from "styled-components";

export const MostRecentContainerDiv = styled.div`
  display: flex;
  margin: 3% 3% 3% 3%;
  padding-right: 3%;
  width: 90%;
  height: 450px;
`;

export const MostRecentHeadDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

export const MostRecentNewsInfoDiv = styled.div`
  margin-left: 4%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

export const MostRecentDateDiv = styled.div`
  display: flex;
`;

export const DateTextElementP = styled.p`
  padding-right: 420px;
  margin-right: 30px;
  color: var(--Text, #2A2A2A);
  font-family: Poppins;
`;

export const TextElementH1 = styled.h1`
  color: var(--Main-Red, #C31815);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 210%; 
  letter-spacing: 0.28px;
  padding-right: 420px;
  margin-right: 80px;
`;

export const TextElementTitle = styled.h1`
  color: var(--Text, #2A2A2A);
  font-family: IBM Plex Serif;
  font-size: 32px;
  font-weight: 600;
`;

export const TextElementIntro = styled.p`
  color: var(--Text, #2A2A2A);
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 165%;
`;