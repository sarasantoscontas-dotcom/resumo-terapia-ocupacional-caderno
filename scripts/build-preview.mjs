import fs from 'node:fs';
fs.mkdirSync('dist/preview-assets',{recursive:true});
fs.copyFileSync('index.html','dist/index.html');
fs.copyFileSync('preview-assets/editorial.css','dist/preview-assets/editorial.css');
console.log('Previa estatica de Terapia Ocupacional pronta.');
