import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import {
  Container,
  Title,
  Card,
  Greeting,
  DateText,
  ImageWrapper,
  WelcomeText,
  Content,
} from "./styles";
import WelcomeImage from "../../assets/people-home.svg";



const Home = () => {
  const userName = "Millena";
  const today = new Date();
  const formattedDate = today.toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  });

  return(
    <>
      <div>
        <Header/> 
      </div>
      <Container>
        <Sidebar/>
        <Content>   
          <Title>Home</Title>
            <Card>
              <Greeting>Olá {userName}!</Greeting>
              <DateText>{formattedDate}</DateText>
                <ImageWrapper>
                    <img src={WelcomeImage} alt="Bem-vindo ao WenLock" />
                    <WelcomeText>Bem-vindo ao WenLock!</WelcomeText>
                </ImageWrapper>
            </Card>
        </Content>
      </Container>
    </>    
  );
};

export default Home;