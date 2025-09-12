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
    slug: 'diario-de-uma-dorameira',
    title: 'Diário de uma Dorameira 💖',
    description: 'Um espaço para compartilhar impressões, análises e a paixão por doramas.',
    imageUrl: coreanoImg,
    author: 'Besouro',
    date: '10 de março de 2025',
    content: `
    <p>Olá, dorameiros! Preparei um espaço para compartilhar minhas impressões sobre os doramas que assisto. Sejam bem-vindos ao meu diário!</p>

    <h2>Além do Direito (Dorama) ⚖️</h2>
    <p>Acabei de assistir ao dorama "Além do Direito" e, uau, que história! É um drama legal que me prendeu do início ao fim com um enredo incrível. Gostei bastante da trama e dos personagens, mas confesso que senti falta de uma pitada de romance entre o casal principal.</p>
    <p>Apesar de não ser o foco, o desenvolvimento da relação deles poderia ter sido um pouco mais explorado, né? Mesmo assim, a série é maravilhosa e super-recomendo para quem curte tramas intensas com uma boa dose de drama e mistério.</p>
    <p>Me conta nos comentários o que você achou se já assistiu!</p>
  
  <h2> Bon Appétit, Vossa Majestade 🍽️</h2>
      <p>Comecei a assistir "Bon Appétit, Vossa Majestade" e estou completamente fascinada! A ideia de uma chef super talentosa ser transportada para a era Joseon é simplesmente genial. Os desafios dela para cozinhar sem os ingredientes modernos são hilários e a forma como ela usa sua criatividade para agradar o rei é de dar água na boca.</p>
      <p>Apesar de o rei parecer um tirano no início, já estou torcendo para que a relação entre eles se aprofunde. Se você adora uma boa comédia romântica com uma pitada de história e gastronomia, esse dorama é uma excelente pedida!</p>
      <p>Alguém mais está assistindo? Me digam nos comentários o que estão achando!</p>
    `
  },
  {
    postId: 2,
    slug: 'descobrindo-o-mundo-anime',
    title: 'Cantinho do Anime 📺',
    description: 'Novo filme de Demon Slayer e os animes que roubaram meu coração recentemente.',
    imageUrl: animeImg,
    author: 'Besouro',
    date: '12 de setembro de 2025',
    content: `
      <p>O outono chegou e, com ele, a temporada perfeita para maratonar séries e animes! Hoje, quero compartilhar o que ando assistindo e o que já terminei. Pegue seu lanchinho e venha comigo!</p>

      <p>Animes são muito mais do que desenhos. São obras de arte com narrativas complexas e visuais de tirar o fôlego. Me encantei com a capacidade de criar mundos tão únicos e personagens tão profundos que nos fazem refletir sobre a vida.</p>
      <p>Cada história é uma jornada de superação e amizade. Se você quer algo que te inspire, mergulhe de cabeça neste universo!</p>

      <h2>O Novo Filme de Demon Slayer 🗡️</h2>
      <p>A experiência de assistir ao novo filme de Demon Slayer no cinema é surreal! A animação é impecável, e a forma como a história se conecta é de arrepiar. Foi um ótimo aquecimento para o que está por vir, e a ansiedade para os próximos só aumentou!</p>

      <h2>Recém-Terminado: Diário de uma Apotecária 💊</h2>
      <p>Que anime incrível! "Diário de uma Apotecária" me surpreendeu do início ao fim. A protagonista é genial, e a forma como ela resolve mistérios e intrigas com seu conhecimento de plantas e remédios é fascinante. Recomendo muito para quem busca uma história com uma protagonista forte e inteligente, sem foco em romance.</p>

      <h2>Maratonando Agora 💖</h2>
      <p>Estou completamente apaixonada por "The Fragrant Flower Blooms With Dignity". A delicadeza da história e o crescimento dos personagens são lindos de se ver. É um anime que aquece o coração e me faz refletir sobre a beleza da vida e das pequenas coisas.</p>
      <p>Também comecei a assistir "The Beginning of the End", e a premissa é super intrigante! A história está me prendendo muito e mal posso esperar para saber o que vai acontecer.</p>
    `
  },
  {
    postId: 3,
    slug: 'meu-guia-alimentacao',
    title: 'Meu Guia de Alimentação 🍓',
    description: 'Pequenas escolhas e dicas práticas que fazem uma grande diferença no seu bem-estar e na sua saúde.',
    imageUrl: alimentacaoImg,
    author: 'Besouro',
    date: '20 de março de 2025',
    content: `
    <p>Cuidar da nossa alimentação é um ato de amor-próprio. Não se trata de dietas restritivas, mas de encontrar um equilíbrio que nos faça sentir bem. Amo incluir mais frutas, vegetais e grãos integrais na minha rotina.</p>
    <p>Lembre-se: pequenas escolhas saudáveis podem ter um grande impacto na sua energia e bem-estar.</p>

    <h2>Dicas Práticas para o Dia a Dia 🌸</h2>
    <ul>
      <li><strong>Planeje suas refeições:</strong> Preparar um cardápio semanal ajuda a manter escolhas mais saudáveis e evita decisões impulsivas.</li>
      <li><strong>Inclua variedade de cores:</strong> Quanto mais colorido o prato, mais nutrientes diferentes você estará consumindo.</li>
      <li><strong>Hidrate-se:</strong> Água é essencial para o funcionamento do corpo e ajuda a controlar a fome emocional.</li>
      <li><strong>Evite ultraprocessados:</strong> Sempre que possível, opte por alimentos frescos e integrais.</li>
      <li><strong>Escute seu corpo:</strong> Respeite sinais de fome e saciedade, e tente comer com atenção plena.</li>
    </ul>

    <h2>Alimentação e Endometriose 🌱</h2>
    <p>Se você, assim como eu, lida com a endometriose, sabe como a alimentação é uma aliada poderosa no controle dos sintomas. O foco principal é em uma dieta anti-inflamatória:</p>
    <ul>
      <li>Prefira alimentos integrais e vegetais de folhas verdes escuras.</li>
      <li>Inclua frutas vermelhas e gorduras boas, como abacate e azeite de oliva.</li>
      <li>Tente reduzir laticínios, glúten e ultraprocessados.</li>
    </ul>
    <p>Cada corpo é único, então é sempre importante ter a orientação de um nutricionista para encontrar o que funciona melhor para você.</p>

    <h2>Pequenos Hábitos que Fazem Diferença ✨</h2>
    <p>Lembre-se que consistência é mais importante que perfeição. Experimente preparar lanches saudáveis, incluir uma fruta no café da manhã ou trocar refrigerante por água com sabor natural. Pequenos passos diários geram grandes resultados a longo prazo!</p>
  `
  },
  {
    postId: 4,
    slug: 'livros-que-aquecem-a-alma',
    title: 'Livros que Aquecem a Alma 📚',
    description: 'Uma seleção de histórias que transformam, inspiram a vida e trazem conforto para a alma.',
    imageUrl: livrosImg,
    author: 'Besouro',
    date: '25 de março de 2025',
    content: `
    <p>A leitura é a minha forma preferida de viajar sem sair do lugar. Um bom livro me transporta para mundos incríveis e me apresenta a personagens que me ensinam sobre a vida. Seja um romance, uma fantasia ou um livro de autoconhecimento, sempre há uma história perfeita esperando para ser descoberta.</p>

    <h2>O Nome do Vento & O Temor do Sábio 📖</h2>
    <p>Se você ama fantasia, precisa conhecer a série "A Crônica do Matador do Rei" de Patrick Rothfuss. Eu me apaixonei completamente pela história de Kvothe em <strong>O Nome do Vento</strong>, e agora estou mergulhada na leitura do segundo livro, <strong>O Temor do Sábio</strong>. A escrita é tão rica e o universo tão bem construído que é impossível não se perder nas páginas.</p>

    <h2>Mais Dicas de Leitura 🌟</h2>
    <p>Se você gosta de fantasia sombria e aventuras mágicas:</p>
    <ul>
      <li><strong>O Senhor dos Anéis</strong> – Uma jornada épica pelo mundo de Tolkien, cheia de magia, mistério e batalhas lendárias.</li>
    </ul>

    <p>Se prefere um bom romance, que aquece o coração e emociona:</p>
    <ul>
      <li><strong>Orgulho e Preconceito</strong> – Um clássico atemporal, cheio de charme, ironia e romance.</li>
      <li><strong>Simplesmente Acontece</strong> – Uma história moderna, leve e envolvente sobre encontros, desencontros e o amor verdadeiro.</li>
    </ul>

    <p>Um bom livro não só entretém, mas também transforma a nossa maneira de pensar e sentir. Escolha aquele que toca sua alma e permita-se mergulhar na leitura!</p>
  `
  },

  {
    postId: 5,
    slug: 'organize-sua-vida-seu-refugio',
    title: 'Organize sua Vida, Crie seu Refúgio ✨',
    description: 'Dicas de organização e minimalismo para transformar seu espaço em um verdadeiro refúgio de paz.',
    imageUrl: organizeImg,
    author: 'Besouro',
    date: '30 de março de 2025',
    content: `
    <p>Organizar não é só sobre arrumar a casa; é sobre criar um espaço mental e físico que te traga paz. Começar com pequenas tarefas, como organizar a mesa de trabalho ou uma gaveta, pode ter um impacto enorme na sua produtividade e bem-estar.</p>
    <p>Uma vida mais organizada te dá mais tempo para as coisas que você realmente ama. Aqui vão algumas dicas para transformar seu espaço em um verdadeiro refúgio:</p>
    <ul>
      <li><strong>Desapegue do que não usa:</strong> Doe ou recicle roupas, livros e objetos que você não utiliza mais.</li>
      <li><strong>Organize por categorias:</strong> Separe itens por função ou frequência de uso. Isso facilita encontrar o que precisa.</li>
      <li><strong>Use caixas e organizadores:</strong> Pequenos recipientes ajudam a manter a mesa, gavetas e prateleiras sempre limpas.</li>
      <li><strong>Crie rotinas:</strong> Reserve alguns minutos por dia para arrumar rapidamente o espaço. Pequenos hábitos fazem grande diferença.</li>
      <li><strong>Minimalismo visual:</strong> Mantenha superfícies livres e evite acumular itens desnecessários. Um ambiente mais limpo transmite calma.</li>
      <li><strong>Personalize seu espaço:</strong> Inclua plantas, luzes suaves ou objetos que tragam boas lembranças e inspirem criatividade.</li>
      <li><strong>Organização digital:</strong> Limpe a área de trabalho do computador, organize pastas e emails para reduzir o estresse mental.</li>
    </ul>
    <p>Com pequenas mudanças e atenção aos detalhes, seu espaço se tornará mais acolhedor e funcional, refletindo diretamente no seu bem-estar e produtividade.</p> 
    <p>Experimente essas práticas e veja como pequenos ajustes podem transformar o seu dia a dia.</p>
  `
  },

  {
    postId: 6,
    slug: 'adeus-procrastinacao-com-leveza',
    title: 'Adeus Procrastinação com Leveza 💖',
    description: 'Estratégias suaves e eficazes para combater a procrastinação sem gerar mais estresse ou culpa.',
    imageUrl: procrastinacaoImg,
    author: 'Besouro',
    date: '5 de abril de 2025',
    content: `
    <p>A procrastinação é uma vilã que todas nós conhecemos, mas podemos combatê-la com gentileza. Em vez de nos punirmos, podemos usar pequenas estratégias como a técnica Pomodoro ou dividir tarefas grandes em pequenas partes.</p>
    
    <p>O segredo é começar, mesmo que seja por apenas 5 minutos. Pequenos passos consistentes levam a grandes resultados e ajudam a reduzir o estresse.</p>

    <h2>Dicas para Vencer a Procrastinação 🌸</h2>
    <ul>
      <li><strong>Liste suas tarefas:</strong> Escreva tudo que precisa fazer e priorize pelo mais importante.</li>
      <li><strong>Divida tarefas grandes:</strong> Transforme objetivos complexos em pequenas ações alcançáveis.</li>
      <li><strong>Use a técnica Pomodoro:</strong> Trabalhe por 25 minutos, faça uma pausa de 5 e repita. Mantém o foco e evita cansaço mental.</li>
      <li><strong>Remova distrações:</strong> Deixe o celular de lado, feche abas desnecessárias e crie um ambiente propício para concentração.</li>
      <li><strong>Recompense-se:</strong> Depois de concluir uma tarefa, faça algo que te faça sentir bem — mesmo que seja simples.</li>
      <li><strong>Mantenha rotina leve:</strong> Inclua pequenas pausas, meditação ou alongamento para equilibrar produtividade e bem-estar.</li>
      <li><strong>Comece sempre pelo “5 minutos”:</strong> Se estiver difícil começar, comprometa-se a trabalhar apenas 5 minutos. Muitas vezes, isso é suficiente para ganhar impulso.</li>
    </ul>

    <h2>Livros que Podem Ajudar 📖</h2>
    <p>A leitura é uma grande aliada na luta contra a procrastinação. Aqui estão algumas dicas de livros que me ajudaram a entender e a mudar meus hábitos:</p>
    <ul>
      <li><strong>O Poder do Hábito</strong>: Explica a ciência por trás dos nossos hábitos e como podemos transformá-los.</li>
      <li><strong>Hábitos Atômicos</strong>: Um guia prático e fácil de seguir para criar bons hábitos e quebrar os ruins.</li>
      <li><strong>A Arte de Fazer Acontecer</strong>: Apresenta um método para organizar suas tarefas e liberar sua mente para focar no que realmente importa.</li>
    </ul>

    <p>Com pequenas mudanças, gentileza consigo mesma e disciplina leve, você vai perceber que é possível vencer a procrastinação sem sofrimento e transformar sua rotina em algo mais produtivo e prazeroso!</p>
  `
  }

];