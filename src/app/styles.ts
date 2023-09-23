import styled from "styled-components";

export const MainContainer = styled.section`
  width: 90%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 1266px) {
    position: fixed;
    top: 25em;
  }
`;
