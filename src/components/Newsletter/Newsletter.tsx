import Send from '@mui/icons-material/Send';
import { Container, Description, InputContainer, Title, Input, Button } from './Newsletter.styled';

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favourite products.</Description>
      <InputContainer>
        <Input placeholder="You email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
