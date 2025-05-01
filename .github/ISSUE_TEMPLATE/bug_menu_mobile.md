---
name: Bug Menu Mobile
about: Botão de menu navbar mobile não aparece
title: 'Bug: Botão de menu navbar mobile não aparece'
labels: bug, mobile, UI
assignees: ''
---

## Descrição
O botão de menu na navbar mobile não está sendo exibido corretamente.

## Comportamento Esperado
- O botão de menu deve estar visível na navbar mobile
- Deve estar posicionado à direita da navbar
- Deve ter contraste adequado para visualização

## Comportamento Atual
- Botão não está visível
- Prejudica a navegação em dispositivos móveis
- Impede acesso ao menu lateral

## Possíveis Causas
- Problema de z-index
- CSS incorreto
- Conflito com outras classes
- Problema de posicionamento

## Prioridade
Alta - Afeta navegação principal em mobile

## Sugestão de Correção
1. Verificar CSS do botão
2. Ajustar z-index da navbar
3. Revisar classes Bootstrap
4. Garantir contraste adequado

## Ambiente
- Dispositivos: Mobile
- Browsers testados: Chrome, Firefox, Safari
- Resolução: < 768px 