import Container from "@/components/Container";
import Game from "@/components/Game";
import Section from "@/components/Section";
import Title from "@/components/Title";

const Home = () => {
  return (
    <Section>
      <Container>
        <Title nought={"Noughts"} cross={"Crosses"} />
        <Game />
      </Container>
    </Section>
  );
};

export default Home;
