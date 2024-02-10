import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Forms</Heading>
              <Button>Check in</Button>
              <Button variation="secondary" size="medium">
                Check out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as="h3">tree</Heading>
            <form>
              <Input
                type="number"
                placeholder="Number of guests"
                Number
                of
                guests
              />

              <Input
                type="number"
                placeholder="Number of guests"
                Number
                of
                guests
              />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
