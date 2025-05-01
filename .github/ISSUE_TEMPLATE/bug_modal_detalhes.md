---
name: Bug Modal Detalhes
about: Botão "Detalhes" não abre o modal do cliente
title: 'Bug: Modal de detalhes do cliente não abre'
labels: bug, UI, funcionalidade
assignees: ''
---

## Descrição
O botão "Detalhes" nos cards de clientes não está abrindo o modal com as informações detalhadas do cliente.

## Comportamento Esperado
- Ao clicar no botão "Detalhes" no menu dropdown do card do cliente
- Modal deve abrir suavemente
- Deve exibir todas as informações detalhadas do cliente
- Deve mostrar histórico e cupons

## Comportamento Atual
- Clique no botão não produz nenhuma ação
- Modal não é exibido
- Console pode estar mostrando erros relacionados ao Bootstrap
- Funcionalidade completamente inoperante

## Possíveis Causas
- Bootstrap Modal não inicializado corretamente
- Erro na passagem de parâmetros para a função abrirModalCliente()
- Conflito com outras bibliotecas JavaScript
- Problema na estrutura HTML do modal
- Erro na serialização do objeto cliente

## Prioridade
Alta - Impede acesso a informações importantes dos clientes

## Sugestão de Correção
1. Verificar se o Bootstrap está sendo carregado corretamente
2. Confirmar se a função abrirModalCliente() está sendo chamada (adicionar console.log)
3. Verificar a estrutura do modal no HTML
4. Testar a serialização do objeto cliente
5. Validar se todos os scripts necessários estão sendo carregados na ordem correta

## Ambiente
- Reproduzível em todos os navegadores
- Ocorre em todas as resoluções
- Afeta todos os cards de clientes

## Logs Relevantes
```javascript
// Verificar no console do navegador:
- Erros de JavaScript
- Chamadas da função abrirModalCliente()
- Estado do objeto bootstrap
``` 