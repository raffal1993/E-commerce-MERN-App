import styled from 'styled-components';
import { mobile } from 'styles/responsive';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  ${mobile({ padding: '0px', flexDirection: 'column' })}
`;
