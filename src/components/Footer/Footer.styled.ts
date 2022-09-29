import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Logo = styled.h5``;

export const Desc = styled.p`
  margin: 20px 0px;
`;
export const SocialContainer = styled.div`
  display: flex;
`;
export const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${({ color }) => color};
  margin-right: 20px;
`;

export const Title = styled.h6`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  width: 50%;
`;
