import styled from 'styled-components';

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px dotted black;
  border-radius: 10px;
  cursor: pointer;

  :hover ${Info} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  height: 75%;
  object-fit: contain;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
