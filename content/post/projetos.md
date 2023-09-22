---
title: "Projetos"
url: /post/projetos
date: 2023-09-21T20:18:40-03:00
draft: true
author: Mateus Roveda
categorias:
 - projetos
tags:
 - open-source
 - pessoal
 - comunidade
---

Acesso rápido
- [Pets Vale do Taquari](#pets-vale-do-taquari)
  - [Infraestrutura](#infraestrutura)
- [Prefa](#prefa)
- [Universidade Brasileira Livre](#universidade-brasileira-livre)
- [municipios.dev](#municipiosdev)
- [ROVEEb](#roveeb)
- [Sorteador](#sorteador)

## [Pets Vale do Taquari](petsvaledotaquari.com.br/)

O [Pets Vale do Taquari](petsvaledotaquari.com.br) é um projeto criado em 6h em parceria com o Zeno Sbardellotto Júnior e o Fabrício Pretto. Esse projeto foi pensado para ajudar a os animaizinhos atingidos pelas enchentes de setembro que o Vale do Taquari (RS) sofreu e é totalmente voluntário.

Já conta com mais de 1000 seguidores no Instagram, mais de 6000 visitantes únicos e vários pets encontrados.

### Infraestrutura
- **Strapi CMS**: gerenciar os dados
- **PostgreSQL**: banco de dados
- **Amazon SES**: envio de e-mails
- **Amazon S3**: armazenamento de imagens
- **Amazon Cloudfront**: CDN para entrega das imagens
- **PM2**: executar o Strapi CMS
- **NGINX**: proxy reverso
- **Cloudflare**: DNS e SSL
- **Github Actions**: pipeline de deploy
- **Cloudflare Pages**: frontend desenvolvido pelo Zeno (VueJS)

Esboço da infraestrutura usada no projeto:
![Infraestrutura petsvaledotaquari.com.br](/images/uploads/infra-pets.jpg)

Pipelines que são usadas no projeto:
![Infraestrutura petsvaledotaquari.com.br](/images/uploads/pipelines-pets.jpg)

## Prefa

TODO

## Universidade Brasileira Livre

TODO

## municipios.dev

TODO

## ROVEEb

TODO

## Sorteador

TODO