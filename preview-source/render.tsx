import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import Index from './adapted';
import fs from 'node:fs';
const html='<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Caderno de Terapia Ocupacional | Prévia</title><meta name="description" content="Caderno de Terapia Ocupacional: resumos, flashcards, estágio, TCC e organização acadêmica."><link rel="stylesheet" href="/preview-assets/editorial.css"></head><body>'+renderToStaticMarkup(<Index/> )+'</body></html>';
fs.mkdirSync('preview-assets',{recursive:true});
fs.writeFileSync('index.html',html);
