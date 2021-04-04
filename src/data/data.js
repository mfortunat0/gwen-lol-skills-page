const data = [
  {
    skill: "Passive",
    name: "Mil Retalhos",
    description: `Os ataques básicos de Gwen causam Dano Mágico adicional ao contato com base em uma porcentagem da Vida máxima dos inimigos dela. Ataques básicos contra Campeões a curam em valor equivalente a uma parte do dano causado.`,
  },
  {
    skill: "Q",
    name: "Corte e Recorte",
    description: `Gwen corta de duas a seis vezes rapidamente com a tesoura, causando Dano Mágico em cone. Gwen cortará pelo menos duas vezes, adicionando um corte por cada ataque básico que tiver acertado em um inimigo (até quatro, chegando ao total de seis).
  
        Inimigos que estiverem no centro de cada corte sofrerão Dano Verdadeiro, assim como o Dano Mágico adicional de Mil Retalhos.`,
  },
  {
    skill: "W",
    name: "Névoa Sagrada",
    description: `Gwen faz surgir um círculo de Névoa Sagrada que a envolve por 5s. Enquanto estiver dentro dele, Gwen receberá Armadura e Resistência Mágica. Inimigos fora da Névoa não podem alvejar Gwen nem atingi-la com habilidades. Quando Gwen se deslocar para além do círculo pela primeira vez, a névoa a seguirá. No entanto, a névoa se dissipará caso Gwen saia dela novamente.`,
  },
  {
    skill: "E",
    name: "Avanço Afiado",
    description: `Gwen avança por uma curta distância e fortalece seus ataques com um aumento de alcance, velocidade e Dano Mágico ao contato por 4s. Atacar um inimigo durante esse período restaura 50% do Tempo de Recarga da habilidade.`,
  },
  {
    skill: "R",
    name: "Ponto-Cruz",
    description: `Gwen pode conjurar Ponto-Cruz até três vezes, mas precisa atingir um inimigo dentro de 8s para habilitar cada conjuração subsequente. Cada conjuração dispara agulhas em linha reta, causando Dano Mágico e Lentidão aos inimigos e aplicando o Dano Mágico adicional de Mil Retalhos.
  
       A primeira conjuração dispara uma agulha, a segunda dispara três e a terceira dispara cinco, com um total de nove agulhas e nove aplicações de Mil Retalhos aos inimigos atingidos.`,
  },
];

export default data;
