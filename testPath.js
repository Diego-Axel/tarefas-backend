const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src');
const serverJsPath = path.join(srcPath, 'server.js');

console.log('Tentando acessar o caminho da pasta src:', srcPath);

try {
  const filesInSrc = fs.readdirSync(srcPath);
  console.log('Arquivos encontrados dentro de "src":', filesInSrc);

  console.log('Tentando acessar o caminho do arquivo server.js:', serverJsPath);
  if (fs.existsSync(serverJsPath)) {
    console.log('SUCESSO: O arquivo server.js FOI ENCONTRADO em:', serverJsPath);
  } else {
    console.error('ERRO: O arquivo server.js NÃO FOI ENCONTRADO em:', serverJsPath);
  }
} catch (error) {
  console.error('ERRO ao tentar ler a pasta src ou o arquivo server.js:');
  console.error(error);
}