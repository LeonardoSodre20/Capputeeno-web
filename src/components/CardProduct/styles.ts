import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: #ffffff66;
  width: 260px;
  height: 350px;
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;

  @media (max-width: 630px) {
    width: 85%;
    height: 380px;
  }
`;

export const ImageProduct = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const Name = styled.p`
  color: #41414d;
  font-size: 1em;
  margin-left: 0.5rem;
  padding: 0.5rem 0 0.2rem 0.3rem;
  border-bottom: 1px solid #dce2e5;
  font-weight: 300;
  width: 90%;
`;

export const Price = styled.span`
  color: #09090a;
  font-size: 0.85em;
  margin-left: 0.5rem;
  padding: 0.5rem 0 0.2rem 0.3rem;
  font-weight: 600;
`;
