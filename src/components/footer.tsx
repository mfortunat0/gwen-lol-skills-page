import {
  ContainerMedias,
  Links,
  LogoClassification,
  ContainerLinks,
  ContainerLogoRiot,
  Options,
  TextCopyright,
  ContainerOptions,
  Main,
  Media,
} from "../styles/footer";

export default function Footer() {
  return (
    <Main>
      <ContainerOptions>
        <Options href="https://br.leagueoflegends.com/pt/game-info/get-started/what-is-lol/">
          SOBRE LEAGUE OF LEGENDS
        </Options>
        <Options href="http://leagueoflegends.br-surveybr2.sgizmo.com/s3/">
          AJUDE-NOS MELHORAR
        </Options>
        <Options href="https://status.riotgames.com/?locale=pt_BR&region=br">
          STATUS DE SERVIÇO
        </Options>
        <Options href="https://support.riotgames.com/hc/pt-br">SUPORTE</Options>
      </ContainerOptions>
      <ContainerLogoRiot>
        <a href="http://www.riotgames.com/">
          <img src="/assets/riotLogo.svg" />
        </a>
      </ContainerLogoRiot>
      <ContainerMedias>
        <a href="https://www.youtube.com/user/RiotGamesBrasil">
          <Media src="/assets/youtube.svg" />
        </a>
        <a href="https://www.twitter.com/LoLegendsBR">
          <Media src="/assets/twitter.svg" />
        </a>
        <a href="https://www.facebook.com/LeagueofLegendsBrasil">
          <Media src="/assets/facebook.svg" />
        </a>
        <a href="https://www.instagram.com/leagueoflegends/">
          <Media src="/assets/instagran.svg" />
        </a>
      </ContainerMedias>
      <TextCopyright>
        ™ & © 2021 Riot Games, Inc. Todos os direitos reservados. Riot Games,
        League of Legends e PvP.net são marcas registradas e marcas de serviço
        da Riot Games, Inc.
      </TextCopyright>
      <ContainerLinks>
        <Links href="https://br.leagueoflegends.com/pt/legal/eula">EULA</Links>
        <Links href="https://www.riotgames.com/pt-br/privacy-notice-BR">
          AVISO DE PRIVACIDADE
        </Links>
        <Links href="https://www.riotgames.com/pt-br/terms-of-service-BR">
          Termos de Uso
        </Links>
        <Links href="">riotbar.cookiePolicy.cookiesPreferences</Links>
      </ContainerLinks>
      <LogoClassification>
        <a href="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltd8318f573a54dfdf/5f2dba47327a6201d7eba345/riot-seloclassind-12-lol.png">
          <img src="/assets/classificacao.png" />
        </a>
      </LogoClassification>
    </Main>
  );
}
