import {
  Nav,
  Button,
  Text,
  Bar,
  LogoRiot,
  ContainerRiot,
  LogoIcon,
  LogoLol,
  ContainerText,
  ContainerIcon,
  ContainerTextIcon,
  TextWithIcon,
  Icon,
  TextWithoutBorder,
} from "../styles/navbar";

export default function NavBar() {
  return (
    <Nav>
      <ContainerRiot href="https://br.leagueoflegends.com/pt-br/">
        <LogoRiot />
        <LogoIcon src="/assets/arrowDown.svg" />
        <Bar />
        <LogoLol src="/assets/logo.svg" />
      </ContainerRiot>
      <ContainerText>
        <Text>O JOGO</Text>
        <Text>CAMPEÔES</Text>
        <ContainerTextIcon>
          <TextWithIcon>NOTÍCIAS</TextWithIcon>
          <Icon src="/assets/arrowDown.svg" />
        </ContainerTextIcon>
        <Text>NOTAS DAS ATUALIZAÇÔES</Text>
        <ContainerTextIcon>
          <TextWithIcon>MAIS</TextWithIcon>
          <Icon src="/assets/arrowDown.svg" />
        </ContainerTextIcon>
      </ContainerText>
      <ContainerIcon>
        <img src="/assets/alert.svg" />
        <img src="/assets/browser.svg" />
      </ContainerIcon>
      <TextWithoutBorder>INICIAR SESSÂO</TextWithoutBorder>
      <Button>JOGUE AGORA</Button>
    </Nav>
  );
}
