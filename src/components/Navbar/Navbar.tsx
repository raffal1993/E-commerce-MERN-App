import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
} from './Navbar.styled';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ fontSize: '16px', color: 'grey' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LOGO</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
