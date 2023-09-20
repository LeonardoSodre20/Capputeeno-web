import styled from "styled-components";

import { Saira_Stencil_One } from "next/font/google";
import { IoMenuSharp } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";

const saira = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
});

interface PropsMenuMobile {
  visible?: string;
}

export const WrapperHeader = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerInputAndButtonCart = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContainerInput = styled.div`
  position: relative;
  width: 350px;
`;

export const InputSearchProducts = styled.input`
  background-color: #f3f5f6;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.95em;
  font-weight: 400;
  padding: 0.8rem;
  width: 100%;
  color: #737380;
`;

export const IconSearchInput = styled.img`
  top: 0.6rem;
  position: absolute;
  right: 1rem;
  height: 24px;
  width: 24px;
`;

export const ContainerIconCartProducts = styled.div`
  position: relative;
`;

export const IconCartMenu = styled.img`
  height: 24px;
  width: 24px;
`;

export const CountProducts = styled.span`
  border-radius: 50%;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #de3838;
  font-size: 0.75em;
  font-weight: 700;

  height: 15px;
  width: 15px;
`;

// --------MOBILE COMPONENTS------------ //

export const Title = styled.h1`
  font-family: ${saira.style.fontFamily};
  font-size: 1.8em;
  text-transform: uppercase;
  font-weight: 400;
  color: #5d5d6d;
`;

export const ButtonOpenMenuMobile = styled(IoMenuSharp)`
  display: none;
  @media (max-width: 800px) {
    display: block;
    font-size: 2.8em;
    cursor: pointer;
  }
`;

export const ButtonCloseMobile = styled(AiFillCloseCircle)<PropsMenuMobile>`
  @media (max-width: 800px) {
    display: block;
    font-size: 2.8em;
    cursor: pointer;
  }
`;

export const ContainerMenuMobile = styled.div<PropsMenuMobile>`
  visibility: none;
  opacity: 0;
  display: none;

  transform: translateX(-500px);
  @media (max-width: 800px) {
    display: block;
    border-top: 1px solid rgba(0, 0, 0, 0.7);
    visibility: ${({ visible }) => (visible === "true" ? "visible" : "hidden")};
    opacity: ${({ visible }) => (visible === "true" ? "1" : "0")};
    transition: ease-in-out 0.5s;

    position: absolute;
    top: 80px;
    background-color: #ffffff;
    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const InputSearchProductsMobile = styled.input`
  margin-top: 2em;
  background-color: #f3f5f6;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.95em;
  font-weight: 400;
  padding: 0.8rem;
  width: clamp(300px, 50%, 350px);
  color: #737380;
`;

export const ButtonOpenCheckoutMobile = styled.button`
  margin-top: 2em;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #115d8c;
  color: #f5f5fa;
  border-radius: 0.5rem;
  padding: 0.8rem;
  width: clamp(300px, 50%, 350px);
  font-weight: 700;
`;

export const IconCart = styled.img`
  height: 24px;
  width: 24px;
`;

// --------MOBILE COMPONENTS------------ //
