import styled from "styled-components";

export const WrapperTabNavigator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const ContainerTabLinks = styled.div`
  font-size: 1em;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TabLink = styled.span`
  font-weight: 600;
  color: #41414d;
  cursor: pointer;
  text-transform: uppercase;
`;

export const SelectFilterProducts = styled.select`
  font-size: 0.8em;
  font-weight: 400;
  background-color: none;
  border: none;
`;

export const OptionFilter = styled.option`
  color: #737380;
  background-color: #ffffff;
  border: none;
`;
