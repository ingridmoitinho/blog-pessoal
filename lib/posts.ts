import { StaticImageData } from 'next/image';

// Importando imagens
import coreanoImg from '../public/images/coreano.jpg';
import animeImg from '../public/images/anime.jpg';
import alimentacaoImg from '../public/images/alimentacao.jpg';
import livrosImg from '../public/images/livros.jpg';
import organizeImg from '../public/images/organize.jpg';
import procrastinacaoImg from '../public/images/procrastinacao.jpg';

// Definindo a interface Post
export interface Post {
  postId: number; 
  slug: string;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  author: string;
  date: string;
  content: string;
}

// Lista de posts
export const posts: Post[] = [
  {
    postId: 1,
    slug: 'resenha-alem-do-direito',
    title: 'Resenha: Além do Direito (Dorama) ⚖️',
    description: 'Uma análise detalhada do popular dorama de tribunal, explorando a trama e personagens.',
    imageUrl: coreanoImg,
    author: 'Besouro',
    date: '10 de março de 2025',
    content: `<p>Acabei de assistir ao dorama "Além do Direito" e, uau, que história! É um drama legal que me prendeu do início ao fim com um enredo incrível. Gostei bastante da trama e dos personagens, mas confesso que senti falta de uma pitada de romance entre o casal principal.</p>
              <p>Apesar de não ser o foco, o desenvolvimento da relação deles poderia ter sido um pouco mais explorado, né? Mesmo assim, a série é maravilhosa e super-recomendo para quem curte tramas intensas com uma boa dose de drama e mistério.</p>
              <p>Me conta nos comentários o que você achou se já assistiu!</p>`
  },
  {
    postId: 2,
    slug: 'descobrindo-o-mundo-anime',
    title: 'Descobrindo o Mundo do Anime 🌸',
    description: 'Uma jornada introdutória pelas narrativas únicas e visuais incríveis que definem a animação japonesa.',
    imageUrl: animeImg,
    author: 'Besouro',
    date: '15 de março de 2025',
    content: `<p>Animes são muito mais do que desenhos. São obras de arte com narrativas complexas e visuais de tirar o fôlego. Me encantei com a capacidade de criar mundos tão únicos e personagens tão profundos que nos fazem refletir sobre a vida.</p>
              <p>Cada história é uma jornada de superação e amizade. Se você quer algo que te inspire, mergulhe de cabeça neste universo!</p>`
  },
  {
    postId: 3,
    slug: 'meu-guia-alimentacao-saudavel',
    title: 'Meu Guia de Alimentação Saudável 🍓',
    description: 'Pequenas escolhas e dicas práticas que fazem uma grande diferença no seu bem-estar e na sua saúde.',
    imageUrl: alimentacaoImg,
    author: 'Besouro',
    date: '20 de março de 2025',
    content: `<p>Cuidar da nossa alimentação é um ato de amor-próprio. Não se trata de dietas restritivas, mas de encontrar um equilíbrio que nos faça sentir bem. Amo incluir mais frutas, vegetais e grãos integrais na minha rotina.</p>
              <p>Lembre-se: pequenas escolhas saudáveis podem ter um grande impacto na sua energia e bem-estar.</p>`
  },
  {
    postId: 4,
    slug: 'livros-que-aquecem-a-alma',
    title: 'Livros que Aquecem a Alma 📚',
    description: 'Uma seleção de histórias que transformam, inspiram a vida e trazem conforto para a alma.',
    imageUrl: livrosImg,
    author: 'Besouro',
    date: '25 de março de 2025',
    content: `<p>A leitura é a minha forma preferida de viajar sem sair do lugar. Um bom livro me transporta para mundos incríveis e me apresenta a personagens que me ensinam sobre a vida.</p>
              <p>Seja um romance, uma fantasia ou um livro de autoconhecimento, sempre há uma história perfeita esperando para ser descoberta.</p>`
  },
  {
    postId: 5,
    slug: 'organize-sua-vida-seu-refugio',
    title: 'Organize sua Vida, Crie seu Refúgio ✨',
    description: 'Dicas de organização e minimalismo para transformar seu espaço em um verdadeiro refúgio de paz.',
    imageUrl: organizeImg,
    author: 'Besouro',
    date: '30 de março de 2025',
    content: `<p>Organizar não é só sobre arrumar a casa; é sobre criar um espaço mental e físico que te traga paz. Começar com pequenas tarefas, como organizar a mesa de trabalho ou uma gaveta, pode ter um impacto enorme na sua produtividade e bem-estar.</p>
              <p>Uma vida mais organizada te dá mais tempo para as coisas que você realmente ama.</p>`
  },
  {
    postId: 6,
    slug: 'adeus-procrastinacao-com-leveza',
    title: 'Adeus Procrastinação com Leveza 💖',
    description: 'Estratégias suaves e eficazes para combater a procrastinação sem gerar mais estresse ou culpa.',
    imageUrl: procrastinacaoImg,
    author: 'Besouro',
    date: '5 de abril de 2025',
    content: `<p>A procrastinação é uma vilã que todas nós conhecemos, mas podemos combatê-la com gentileza. Em vez de nos punirmos, podemos usar pequenas estratégias como a técnica Pomodoro ou dividir tarefas grandes em pequenas.</p>
              <p>O segredo é começar, mesmo que seja por apenas 5 minutos. Você vai se surpreender com o que pode alcançar!</p>`
  },
];
