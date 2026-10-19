import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const app=fs.readFileSync('assets/app.js','utf8');const start=app.indexOf('const bp=');const end=app.indexOf(',oE=',start);assert(start>0&&end>start);
const passthrough=p=>({type:'div',props:p});const jsx=(type,props)=>typeof type==='function'?type(props):({type,props:props||{}});
const ctx={c:{jsx,jsxs:jsx,Fragment:'fragment'},KC:passthrough,Hg:passthrough,Vg:passthrough,Qg:passthrough,Date};vm.createContext(ctx);vm.runInContext(app.slice(start,end)+';globalThis.tree=rE();',ctx);
const nodes=[];function visit(n){if(Array.isArray(n)){n.forEach(visit);return;}if(n&&typeof n==='object'){nodes.push(n);visit(n.props?.children);}}visit(ctx.tree);
const text=JSON.stringify(ctx.tree);assert(text.includes('Terapia Ocupacional.'));assert(text.includes('R$ 29,99'));assert(!text.includes('87,99'));assert(!text.includes('Medicina'));assert(!text.includes('Sinal de Murphy'));assert(!text.includes('Dose por peso'));
const links=nodes.filter(n=>n.type==='a').map(n=>n.props);for(const a of links){assert(a.href.startsWith('#')||a.href==='https://pay.cakto.com.br/i2cyf2c');if(a.href.startsWith('https:')){assert.equal(a.target,'_blank');assert(a.rel.includes('noopener'));}}
const headings=nodes.filter(n=>/^h[123]$/.test(n.type));assert(headings.length>50);
const ids=new Set(nodes.map(n=>n.props.id).filter(Boolean));for(const a of links.filter(a=>a.href.startsWith('#')))assert(ids.has(a.href.slice(1)),a.href);
const d=JSON.parse(fs.readFileSync('assets/expansion-content.json','utf8'));assert(d.sheets.length===72);assert(d.library.length===8);assert(d.cards.length+82===d.totalCount);assert(d.cards.every(x=>x.q&&x.a));assert(d.sheets.every(s=>s.blocks.length===4));
const html=fs.readFileSync('index.html','utf8');assert.equal(html,fs.readFileSync('404.html','utf8'));for(const a of ['app.js','expansion.js','expansion.css','notebook-theme.css'])assert(html.includes(a));
const expansion=fs.readFileSync('assets/expansion.js','utf8');for(const anchor of ['Veja os flashcards','Veja como chega','Benefícios práticos','Grade do curso','Páginas do caderno','Amostra do caderno'])assert(text.includes(anchor),anchor);
assert(expansion.includes("slice(0,10)"));assert(expansion.includes("index<20"));assert(expansion.includes('agenda-day-story'));assert(expansion.includes('weekGuide.days.map'));
console.log('Verificado: componentes, seções, links, checkout, preço, matriz, fichas, flashcards, agenda e pontos de expansão.');
