# ROVEEb site
Site [ROVEEb.com](roveeb.com) integrado com o Cloudflare Pages.

## Informações
Ambiente de desenvolvimento baseado no 
https://github.com/awesometic/docker-docusaurus.

## Ambiente

### Variáveis de ambiente

As variáveis são definidas no próprio [docker-compose.yml](docker-compose.yml).

| **Variável** |  **Valor**  |                       **Descrição**                       |
|:------------:|:-----------:|:---------------------------------------------------------:|
| TARGET_UID   | 1001        | Usuário de destino para mudar as permissões da instalação |
| TARGET_GID   | 1001        | Grupo de destino para mudar as permissões da instalação   |
| AUTO_UPDATE  | true        | Auto atualizar ao modificar o código                      |
| WEBSITE_NAME | ROVEEb      | Nome do site a ser criado                                 |
| TEMPLATE     | classic     | Tema/template a ser usado                                 |
| RUN_MODE     | development | Modo de execução                                          |

### Executar
Após fazer o clone do projeto, basta executar um build e um up para o container 
ser criado e fornecer acesso ao Docusaurus.

```bash
docker-compose build
```
```bash
docker-compose up -d
```

A URL que irá servir o docusaurus é http://localhost.

