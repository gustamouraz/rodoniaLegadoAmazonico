# Rondônia: Legado Amazônico

Apresentação de um projeto de jogo educativo sobre a história de Rondônia, desenvolvido como trabalho de conclusão de curso em Engenharia da Computação. A proposta é uma experiência em terceira pessoa com exploração, parkour e furtividade, passando por acontecimentos e personagens ligados à formação do estado.

> **Estado atual:** este repositório contém uma página de apresentação do projeto e mockups do jogo. Ainda não há um jogo jogável nesta versão.

## O que há na página

- Linha do tempo com eventos históricos relacionados a Rondônia.
- Mockups que ilustram a proposta visual e as mecânicas do jogo.
- Galeria de personagens.
- Objetivos educacionais do projeto.

## Tecnologias

A interface foi construída com React, TypeScript e Vite. O projeto também utiliza componentes Radix UI e ícones Lucide.

## Como executar

É necessário ter Node.js e npm instalados.

```bash
git clone https://github.com/gustamouraz/rodoniaLegadoAmazonico.git
cd rodoniaLegadoAmazonico/rondoniaLegadoAmazonico
npm install
npm run dev
```

Abra no navegador o endereço local exibido pelo Vite no terminal.

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura do repositório

```text
rondoniaLegadoAmazonico/
├── index.html
├── package.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── components/
    └── styles/
```

O projeto visual original está disponível no [Figma](https://www.figma.com/design/RA1WqgLgnO0fWYp931Aesj/Jogo-Virtual-Educativo). Créditos de componentes e imagens constam em [Attributions.md](rondoniaLegadoAmazonico/src/Attributions.md).
