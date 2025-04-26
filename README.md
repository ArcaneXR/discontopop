# Discontopop - Aplicativo de Descontos e Cashback

## Visão Geral
Discontopop é uma plataforma web responsiva que simula um aplicativo de descontos, cashback, cupons e sorteios. A aplicação é focada em mobile-first e oferece uma experiência similar a um aplicativo nativo.

## Arquitetura
- **Frontend**: Next.js 14 com TypeScript
- **Estilização**: Tailwind CSS
- **Gerenciamento de Estado**: React Context API
- **Formulários**: React Hook Form
- **Validação**: Zod
- **Testes**: Jest e React Testing Library

## Estrutura de Diretórios
```
src/
├── app/                    # Rotas da aplicação
├── components/            # Componentes reutilizáveis
├── contexts/             # Contextos do React
├── hooks/                # Hooks personalizados
├── lib/                  # Utilitários e configurações
├── styles/              # Estilos globais
└── types/               # Definições de tipos TypeScript
```

## Funcionalidades por Perfil

### Cliente
1. **Home**
   - Lista de lojas favoritas
   - Propagandas e anúncios personalizados
   - Cupons ativos
   - Sorteios disponíveis
   - Seção de cashback acumulado

2. **Explorar**
   - Busca de lojas
   - Filtros por categoria
   - Mapa de lojas próximas
   - Ofertas em destaque

3. **Cupons**
   - Lista de cupons disponíveis
   - Histórico de cupons utilizados
   - Cupons favoritos
   - Compartilhamento de cupons

4. **Perfil**
   - Dados pessoais
   - Histórico de compras
   - Configurações de notificações
   - Preferências de lojas

### Lojista
1. **Dashboard**
   - Visão geral de desempenho
   - Métricas de engajamento
   - Gráficos de conversão

2. **Gerenciamento de Cupons**
   - Criação de cupons
   - Edição de cupons existentes
   - Validação de cupons
   - Relatórios de uso

3. **Clientes**
   - Lista de clientes
   - Histórico de compras
   - Segmentação de clientes
   - Envio de mensagens personalizadas

4. **Marketing**
   - Criação de anúncios
   - Push notifications
   - Campanhas promocionais
   - Relatórios de engajamento

### Gestor do App
1. **Dashboard Administrativo**
   - Visão geral da plataforma
   - Métricas de crescimento
   - Alertas e notificações

2. **Gerenciamento de Lojistas**
   - Cadastro de lojistas
   - Aprovação de contas
   - Monitoramento de atividades
   - Suporte e atendimento

3. **Configurações**
   - Políticas da plataforma
   - Configurações gerais
   - Gerenciamento de categorias
   - Configurações de segurança

## Fluxos Principais

### Cliente
1. **Busca e Uso de Cupons**
   - Busca por loja/categoria
   - Visualização de cupom
   - Ativação do cupom
   - Compartilhamento

2. **Cashback**
   - Acumulação automática
   - Resgate de valores
   - Histórico de transações

3. **Sorteios**
   - Participação
   - Notificações de resultados
   - Premiações

### Lojista
1. **Criação de Cupom**
   - Definição de regras
   - Período de validade
   - Limites de uso
   - Aprovação do gestor

2. **Marketing**
   - Criação de campanha
   - Seleção de público
   - Agendamento
   - Monitoramento

### Gestor
1. **Aprovação de Lojista**
   - Análise de documentos
   - Verificação de dados
   - Ativação da conta

## Design System
- **Cores Principais**
  - Primária: #FF6B6B
  - Secundária: #4ECDC4
  - Fundo: #F7F7F7
  - Texto: #2D3436

- **Tipografia**
  - Títulos: Poppins
  - Corpo: Inter
  - Tamanhos: 12px - 32px

- **Componentes**
  - Cards
  - Botões
  - Inputs
  - Modais
  - Navegação
  - Badges

## Próximos Passos
1. [ ] Configuração inicial do projeto
2. [ ] Implementação do design system
3. [ ] Desenvolvimento das telas do cliente
4. [ ] Desenvolvimento das telas do lojista
5. [ ] Desenvolvimento das telas do gestor
6. [ ] Implementação da autenticação
7. [ ] Testes e otimizações
8. [ ] Deploy e monitoramento
