# 💪 StrongWorld

> Portal definitivo dos maiores strongmen e arm wrestlers do mundo



## 📖 Sobre o Projeto

O **StrongWorld** é um portal dedicado aos maiores atletas de strongman e arm wrestling do planeta. Conectando fãs com os atletas mais extraordinários, suas histórias incríveis e os momentos que definiram suas carreiras.

### 🎯 Características Principais

- **🏠 Home Responsiva**: Hero section impactante com atletas em destaque
- **👥 Galeria de Atletas**: Perfis detalhados dos maiores strongmen e arm wrestlers
- **🔍 Sistema de Busca Inteligente**: Pesquisa por nome, apelido ou país com aliases
- **📱 Design Responsivo**: Experiência otimizada para desktop e mobile
- **🎨 Interface Moderna**: Design dark theme com gradientes e animações suaves
- **⚡ Performance Otimizada**: Carregamento rápido com Vite e React 18
- **💬 Formulário WhatsApp**: Integração direta com WhatsApp para contato

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca para interfaces de usuário
- **TypeScript 5.8.3** - Superset tipado do JavaScript
- **Tailwind CSS 4.0** - Framework CSS utilitário
- **Vite 5.4.19** - Build tool e dev server
- **React Router DOM 6.30.1** - Roteamento client-side

### UI Components
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos e consistentes
- **Shadcn/ui** - Sistema de design components

### Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **PostCSS** - Processador CSS
- **Autoprefixer** - Prefixos CSS automáticos

## 🏃‍♂️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd strength-sports-project
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:8080
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Build para produção
npm run build:dev    # Build para desenvolvimento

# Qualidade
npm run lint         # Executa ESLint

# Preview
npm run preview      # Preview do build de produção
```

## 📁 Estrutura do Projeto

```
strength-sports-project-editado/
├── public/                 # Arquivos estáticos
│   ├── favicon.svg        # Favicon personalizado
│   └── ...
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── AthleteCard.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   └── ui/           # Componentes base (Shadcn/ui)
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home.tsx
│   │   ├── Athletes.tsx
│   │   └── Contact.tsx
│   ├── assets/           # Imagens e recursos
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilitários
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Entry point
│   └── index.css         # Estilos globais
├── tailwind.config.ts    # Configuração Tailwind
├── postcss.config.js     # Configuração PostCSS
├── vite.config.ts        # Configuração Vite
└── package.json          # Dependências e scripts
```

## 🎨 Funcionalidades

### 🏠 Página Home
- **Hero Section**: Apresentação impactante com call-to-actions
- **Atletas em Destaque**: Cards com perfis dos principais atletas
- **Seção de Estatísticas**: Números impressionantes do esporte
- **Navegação Suave**: Scroll automático para seções

### 👥 Página de Atletas
- **Galeria Completa**: Todos os atletas com perfis detalhados
- **Sistema de Busca Avançado**: 
  - Pesquisa por nome, apelido ou país
  - Aliases inteligentes (ex: "edi", "ed", "Edi", "edie" encontram Eddie Hall)
- **Filtros por Categoria**:
  - Esporte (Strongman, Arm Wrestling)
  - Peso (Leve, Médio, Pesado)
- **Cards Interativos**: Hover effects e animações

### 🔍 Sistema de Busca
- **Aliases Inteligentes**: Múltiplas variações de nomes
- **Busca em Tempo Real**: Resultados instantâneos
- **Filtros Combinados**: Esporte + peso + busca textual

### 📱 Design Responsivo
- **Mobile First**: Otimizado para dispositivos móveis
- **Breakpoints**: Adaptação para tablet e desktop
- **Menu Mobile**: Navegação hambúrguer responsiva

## 🎯 Atletas em Destaque

### Strongman
- **Brian Shaw** - 4x World's Strongest Man
- **Eddie Hall** - Recordista mundial de deadlift (500kg)
- **Hafþór Júlíus Björnsson** - "The Mountain" de Game of Thrones

### Arm Wrestling
- **John Brzezin** - Jovem talento americano
- **Devon Larratt** - Lenda do arm wrestling
- **Levan Saginashvili** - Campeão mundial atual

## 🛠️ Customizações Implementadas

### 🎨 Design System
- **Cores Personalizadas**: Paleta dark theme com azul e vermelho
- **Gradientes**: Transições suaves entre cores primárias
- **Tipografia**: Hierarquia clara e legível
- **Espaçamentos**: Sistema consistente de padding/margin

### ⚡ Performance
- **Lazy Loading**: Carregamento otimizado de imagens
- **Code Splitting**: Divisão automática de código
- **Tree Shaking**: Remoção de código não utilizado
- **Hot Reload**: Atualização instantânea durante desenvolvimento

### 🔧 Funcionalidades Técnicas
- **Navegação Inteligente**: Scroll suave para seções
- **Estado Persistente**: Filtros mantidos durante navegação
- **Acessibilidade**: Componentes Radix UI acessíveis
- **SEO Friendly**: Meta tags e estrutura semântica
- **Integração WhatsApp**: Formulário de contato com redirecionamento automático

## 📱 Responsividade

| Dispositivo | Breakpoint | Características |
|-------------|------------|-----------------|
| **Mobile** | < 768px | Menu hambúrguer, cards empilhados |
| **Tablet** | 768px - 1024px | Grid 2 colunas, navegação adaptada |
| **Desktop** | > 1024px | Grid 3 colunas, navegação completa |

## 🎨 Paleta de Cores

```css
/* Cores Primárias */
--primary: 210 85% 45%      /* Azul forte */
--secondary: 0 75% 55%      /* Vermelho poder */
--accent: 45 90% 55%        /* Amarelo dourado */

/* Cores de Fundo */
--background: 220 20% 8%    /* Preto azulado */
--surface: 220 15% 12%      /* Cinza escuro */
--card: 220 15% 12%         /* Cards escuros */
```

## 📱 Funcionalidade WhatsApp

O formulário de contato possui integração direta com WhatsApp:

- **Validação Completa**: Campos obrigatórios, email e telefone validados em tempo real
- **Redirecionamento Automático**: Após preenchimento, redireciona automaticamente para WhatsApp
- **Mensagem Formatada**: Dados do formulário são organizados em mensagem estruturada
- **Experiência Mobile**: Funciona perfeitamente em dispositivos móveis
- **Interface Moderna**: Design integrado com o tema dark do site

### Como Funciona:
1. Preencha o formulário de contato na página Contact
2. Clique em "Enviar Mensagem"
3. O sistema valida os dados
4. Redireciona automaticamente para WhatsApp com a mensagem formatada
5. Complete o envio no WhatsApp

## 🚀 Deploy

### Build para Produção
```bash
npm run build
```

### Preview Local
```bash
npm run preview
```

### Deploy em Vercel/Netlify
1. Conecte o repositório
2. Configure build command: `npm run build`
3. Configure output directory: `dist`
4. Deploy automático

## 👨‍💻 Desenvolvedor

**Robson Jobim**
- 📧 Email: robsonjobim96@hotmail.com
- 📱 WhatsApp: (51) 99694-0564
- 📍 Localização: Cachoeira do Sul - RS, Brasil

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- **Atletas**: Inspiração e dedicação ao esporte
- **Comunidade**: Feedback e sugestões
- **Tecnologias**: React, Tailwind CSS, Vite e toda a stack moderna



