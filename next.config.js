/**
 * A única configuração global da aplicação é a utilização do pacote next-sass,
 * que possibilita a estilização com arquivos .sass e .scss. 
 */
const withSass = require('@zeit/next-sass')
module.exports = withSass();