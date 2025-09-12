# 📖 Blog Pessoal com Next.js (App Router)

Este é um projeto de **blog pessoal simples**, criado para praticar os conceitos fundamentais do **Next.js 15**, com foco especial no **App Router**, **Server Components** e **Client Components**.

O projeto foi desenvolvido seguindo as especificações do documento **"Projeto - Blog Pessoal Simples (Next.js App Router)"**.

---

## ✨ Funcionalidades Implementadas

### Funcionalidades Requeridas

- **Página Inicial (`/`)**: Exibe uma lista com todos os posts do blog, renderizada como um *Server Component* para otimização de performance.  
- **Páginas de Post Individuais (`/posts/[slug]`)**: Rotas dinâmicas que exibem o conteúdo completo de cada post.  
- **Página Sobre (`/about`)**: Uma página estática com informações sobre o autor do blog.  
- **Layout Global (`layout.tsx`)**: Estrutura de navegação consistente (com links para "Home" e "Sobre") compartilhada entre todas as páginas.  
- **Botão de Curtir Interativo**: Um *Client Component* (`"use client"`) que permite aos usuários interagir com os posts, com estado gerenciado localmente no cliente.  
- **Design Responsivo**: Layout construído com **Tailwind CSS**, adotando uma abordagem *mobile-first* para garantir uma boa experiência em todos os tamanhos de tela.  

### Funcionalidades Adicionais

- **Geração de Páginas Estáticas**: Utiliza `generateStaticParams` para pré-renderizar os posts em tempo de build, melhorando SEO e carregamento.  
- **Estrutura de Dados Local**: Os posts são carregados a partir de um arquivo (`/lib/posts.ts`), simulando uma fonte de dados.  

---

## 🛠️ Tecnologias Utilizadas

- [**Next.js**](https://nextjs.org/) – Framework React para produção, utilizando o **App Router**.  
- [**React**](https://react.dev/) – Biblioteca para construção de interfaces.  
- [**TypeScript**](https://www.typescriptlang.org/) – Tipagem estática no JavaScript.  
- [**Tailwind CSS**](https://tailwindcss.com/) – Framework *utility-first* para estilização rápida e responsiva.  

---

## 📂 Estrutura do Projeto

```bash
/app
├── layout.tsx                # Layout global com navegação
├── page.tsx                  # Página inicial (lista de posts)
├── about
│   └── page.tsx              # Página "Sobre"
└── posts
    └── [slug]
        └── page.tsx          # Página dinâmica para posts individuais
/components
├── LikeButton.tsx            # Componente "Curtir" (Client Component)
└── ...
/lib
└── posts.ts                  # Simulação de banco de dados local
   ```
---

## ▶️ Como Executar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ingridmoitinho/blog-pessoal.git
   cd blog-pessoal
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.  

---

## 🚀 Deploy

Este projeto está hospedado na [Vercel](https://vercel.com/).  
🔗 Acesse em: **[https://meu-blog.vercel.app](https://meu-blog.vercel.app)**  

---

## 🎯 Objetivos de Aprendizagem Atingidos

- Estrutura e funcionamento do **App Router**.  
- Diferença e aplicação de **Server Components** e **Client Components**.  
- Implementação de **roteamento dinâmico**.  
- Criação de **layouts compartilhados** para uma UI consistente.  
- Uso de **TypeScript** em projetos Next.js.  

---
