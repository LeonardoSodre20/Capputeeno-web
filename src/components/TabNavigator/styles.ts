import styled from "styled-components";

interface PropsLinks {
  border?: "4px solid transparent" | "4px solid #FFA585";
  weigth: "700" | "400";
}

export const WrapperTabNavigator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  position: fixed;
  top: 130px;

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
  gap: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TabLink = styled.span<PropsLinks>`
  font-weight: ${({ weigth }) => weigth || "400"};
  color: #41414d;
  cursor: pointer;
  text-transform: uppercase;
  border-bottom: ${({ border }) => border || "4px solid transparent"};
`;

export const SelectFilterProducts = styled.select`
  font-size: 0.8em;
  font-weight: 400;
  background-color: none;
  border: none;

  @media (max-width: 800px) {
    font-size: 1.2em;
  }
`;

export const OptionFilter = styled.option`
  color: #737380;
  background-color: #ffffff;
  border: none;
`;
