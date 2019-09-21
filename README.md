<p align="center">
  <img alt="Gym App" src="./static/img/logo.png" height="85"/>
  <h3 align="center">Gym App</h3>
</p>

---

O Gym App foi desenvolvido como projeto de conclusão do curso de Tecnologia em Análise e Desenvolvimento de Sistemas do IFSP Campos do Jordão. 

## Estrutura

A aplicação foi dividida em três partes essenciais: uma API REST como back-end, um cliente front-end web e um cliente front-end mobile (Android). 

Para a execução do projeto foram utilizadas diversas tecnlogias opensource, incluindo, mas não limitado a:

- NodeJs
- Yarn
- MongoDB
- Express
- Bulma
- PassportJs
- Nodemailer
- ReactJs
- NextJs
- React Native

## Webfront

Essa etapa do projeto tratou da criação de uma dashboard para o gerenciamento administrativo do sistema. A principal tecnologia utilizada foi a framework Next.js, uma framework para renderização de lado do servidor (server-side rendering) de aplicações React.js.


### Pastas e Arquivos

O projeto se divide em 4 pastas principais, e quatro arquivos na raiz. As pastas *.next* e *node_modules*, assim como o arquivo *yarn.lock* são gerados automaticamente. 

#### Pasta Raiz

Na raiz do projeto é possível encontrar dois arquivos principais: 
- next.config.js
- styles.scss

Ambos dizem respeito a estilização da aplicação utilizando Sass. O arquivo *next.config.js* adiciona a capacidade da framework de processar arquivos .sass e .scss. Em *styles.scss* por sua vez, definimos os estilos globais para toda a aplicação. 

#### Pasta pages

Aqui são definidas páginas e as rotas da aplicação. É a única pasta obrigatória dentro da framework. Cada arquivo aqui definido se torna uma rota, com base em seu nome. O arquivo *login.js*, por exemplo, é o arquivo responsável pela rota **dominio.com/login**. Subpastas podem ser criadas para definir subrotas. Dentro da pasta professores, por exemplo, temos o arquivo *index.js* e *\[id\].js*. O primeiro será a rota para **dominio.com/professores** e o segundo para **dominio.com/professores/\[id\]**. O arquivo *\[id\].js*, aliás, é um dos arquivos especiais da framework. As rotas geradas por esses arquivos são dinâmicas, permitindo rotas com parâmetros. **dominio.com/professores/1** e **dominio.com/professores/2** por exemplo, serão tratadas pelo mesmo arquivo. 

Além desses arquivo especiais, dois arquivos são únicos nessa pasta, *\_app.js* e *index.js*. Em *\_app.js*, nós definimos os estilos e configurações globais para todas as páginas definidas. *index.js* por sua vez, é o arquivo responsável pela rota principal: **dominio.com**. 

#### Pasta components

A pasta components contém todos os componentes da aplicação. Componentes de apresentação, containeres de outros componentes, etc. 

#### Pasta utils

Bibliotecas e configurações fora do escopo de componentes React são mantidos nessa pasta, como configurações de acesso à API e estrutura de autenticação e proteção das rotas do sistema. 

#### Pasta static

Essa pasta é responsável pelos arquivos estáticos da aplicação, como fontes e imagens. 
