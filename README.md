# 🛍️ Discontopop - Plataforma de Descontos e Cashback

<div align="center">
  <img src="public/logo.png" alt="Discontopop Logo" width="200"/>
  
  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
</div>

## 📋 Índice
- [Visão Geral](#-visão-geral)
- [Documentação por Perfil](#-documentação-por-perfil)
- [Tecnologias](#-tecnologias)
- [Design System](#-design-system)
- [Instalação](#-instalação)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🌟 Visão Geral
Discontopop é uma plataforma web que conecta lojistas e consumidores através de descontos, cashback e promoções. A plataforma é dividida em três perfis principais: Lojista, Cliente e Administrador, cada um com suas funcionalidades específicas.

### Objetivos
- Conectar lojistas e consumidores
- Facilitar a gestão de promoções
- Proporcionar uma experiência de compra vantajosa
- Oferecer ferramentas de análise e gestão

## 📚 Documentação por Perfil

### 🏪 [Lojista](docs/merchant/README.md)
- Gestão de campanhas
- Análise de desempenho
- Gestão de clientes
- Métricas e relatórios

### 👤 [Cliente](docs/client/README.md)
- Busca de descontos
- Cashback
- Cupons
- Histórico de compras

### 👨‍💼 [Administrador](docs/admin/README.md)
- Gestão da plataforma
- Monitoramento
- Configurações
- Suporte

## 🛠️ Tecnologias
- **Frontend**: 
  - React 18 com TypeScript
  - Vite para build e desenvolvimento
  - CSS puro para estilização
  - React Router para navegação
  - Dados mockados em JSON para simulação

## 🎨 Design System

### Cores
```css
:root {
  --primary: #FF6B6B;    /* Vermelho principal */
  --secondary: #4ECDC4;  /* Verde água */
  --background: #F7F7F7; /* Fundo claro */
  --text: #2D3436;      /* Texto escuro */
  --success: #00C853;   /* Verde sucesso */
  --warning: #FFD600;   /* Amarelo alerta */
  --error: #FF3D00;     /* Vermelho erro */
}
```

### Tipografia
- **Títulos**: Poppins (Bold, Medium, Regular)
- **Corpo**: Inter (Regular, Medium)
- **Tamanhos**:
  - H1: 32px
  - H2: 24px
  - H3: 20px
  - Body: 16px
  - Small: 14px
  - Caption: 12px

## 🚀 Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/discontopop.git
cd discontopop
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

## 📁 Estrutura do Projeto
```
src/
├── components/            # Componentes reutilizáveis
│   ├── merchant/         # Componentes do lojista
│   ├── client/          # Componentes do cliente
│   ├── admin/           # Componentes do administrador
│   └── shared/          # Componentes compartilhados
├── pages/                # Páginas da aplicação
│   ├── merchant/        # Páginas do lojista
│   ├── client/          # Páginas do cliente
│   └── admin/           # Páginas do administrador
├── data/                # Dados mockados em JSON
│   ├── merchant/        # Dados do lojista
│   ├── client/          # Dados do cliente
│   └── admin/           # Dados do administrador
├── assets/              # Recursos visuais
│   ├── illustrations/   # Ilustrações isométricas
│   ├── icons/          # Ícones
│   └── images/         # Imagens gerais
├── hooks/               # Hooks personalizados
├── styles/             # Estilos globais
└── types/              # Definições de tipos TypeScript
```

## 🤝 Contribuição
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>Desenvolvido com ❤️ pela equipe Discontopop</p>
</div>
