import {
  Text,
  SubTitle,
  Button,
  ContainerButtons,
  ContainerImageSkin,
  ImageSkin,
  BarPrimary,
  ContainerDescriptionSkin,
  DescriptionSkin,
} from "../styles/index";
import NavBar from "../components/navbar";
import Header from "../components/header";
import Player from "../components/player";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Text>
        Retalhe e perfure seus inimigos com Gwen, a Costureira Encantada e suas
        habilidades.
      </Text>
      <SubTitle>&quot;O PRAZER É TODO MEU, A TESOURA TAMBÉM.&quot;</SubTitle>
      <Player />
      <ContainerButtons>
        <Button
          href="https://universe.leagueoflegends.com/pt_BR/champion/gwen/"
          primary={true}
        >
          BIOGRAFIA DE CAMPEÃ
        </Button>
        <Button
          href="https://br.leagueoflegends.com/pt-br/news/dev/analise-de-campea-gwen/"
          primary={false}
        >
          ANÁLISE DE CAMPEÃ
        </Button>
      </ContainerButtons>
      <SubTitle>
        &quot;MAS QUE MUNDO ESTRANHO E MARAVILHOSO. DEVO GARANTIR QUE CONTINUE
        ASSIM.&quot;
      </SubTitle>
      <ContainerImageSkin>
        <a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta8f81a78bce37774/605b996dcc77b20f047aa3a4/SpaceGroove_Gwen_Final-optimized.jpg?disposition=inline">
          <ImageSkin src="/assets/wallpaperSkin.jpg" />
        </a>
      </ContainerImageSkin>
      <ContainerDescriptionSkin>
        <BarPrimary />
        <DescriptionSkin>
          Retalhe seus inimigos com Gwen na Atualização 11.8!
        </DescriptionSkin>
      </ContainerDescriptionSkin>
      <Footer />
    </>
  );
}
