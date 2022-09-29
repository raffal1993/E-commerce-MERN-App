import styled from 'styled-components';
import { mobile } from 'styles/responsive';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;
export const Arrow = styled.div<{ direction: string }>`
  width: 50px;
  height: 50px;
  background-color: orange;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ direction }) => direction === 'left' && '10px'};
  right: ${({ direction }) => direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s;
  z-index: 100;

  :hover {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
export const Slide = styled.div<{ bg: string; slideIndex: number }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${({ bg }) => `#${bg}`};
  transform: translateX(${({ slideIndex }) => `-${slideIndex * 100}%`});
  transition: all 0.5s;
`;
export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  width: 90%;
  height: 90%;
  margin: auto;
  object-fit: cover;

  @media (max-width: 1000px) {
    height: 60%;
  }
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
export const Title = styled.h2`
  font-size: 50px;
`;
export const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 10px;
  font-style: 20px;
  background-color: transparent;
  cursor: pointer;
`;
