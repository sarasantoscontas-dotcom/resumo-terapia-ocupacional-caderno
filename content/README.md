# Prévia editorial de Terapia Ocupacional — 22/10/2026

Alterações para revisão, sem publicação na Vercel. Branch de aprovação separada de main. A regra git.deploymentEnabled desta branch impede implantação automática; retirar a regra somente na preparação da publicação aprovada.

## Entrega
- Cinco resumos autorais aprofundados (5.627 palavras), tabelas, mapas de conceitos, casos e 15 perguntas comentadas.
- Recursos terapêuticos e comunicação reunidos para contemplar os seis assuntos solicitados em cinco resumos.
- 38 disciplinas, 304 tópicos; sem organização por semestre ou inclusão de estágio/TCC/extensão na grade.
- 20 referências, citação autor-data e botão de copiar; sem links externos nas referências.
- Jogo com 20 cartões demonstrativos, respostas e autoavaliação.
- Plano de estudo preenchido e exemplo de TCC.
- Imagens existentes e seção de 10 mil campos preservadas.
- Não representa auditoria do sistema entregue nem criação de 2.600 resumos: a alteração solicitada é na página comercial. Quantitativos do produto foram preservados conforme autorização da proprietária.

## Bases consultadas
Conteúdo original sintetizado; não reprodução de livros. Seleção curricular comparativa, sem afirmar grade universal para todas as instituições.

- USP São Paulo: https://uspdigital.usp.br/jupiterweb/listarGradeCurricular?codcg=5&codcur=5073&codhab=0&tipo=N
- USP Ribeirão Preto: https://uspdigital.usp.br/jupiterweb/listarGradeCurricular?codcg=17&codcur=17201&codhab=0&tipo=N
- UFSCar PPC 2026: https://www.prograd.ufscar.br/pt-br/assets/arquivos/cursos/cursos-oferecidos/terapia-ocupacional/ppc_t-o_2026.pdf
- AOTA, OTPF-4 (2020): https://doi.org/10.5014/ajot.2020.74S2001
- COFFITO Resolução 425: https://www.coffito.gov.br/nsite/?p=3188
- COFFITO Resolução 532: https://www.coffito.gov.br/nsite/?p=18752
- AHA, Adult Basic Life Support (2025): https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support
- OMS, World report on disability (2011): https://www.who.int/publications/i/item/9789241564182
- OMS, Rehabilitation in health systems (2017): https://www.who.int/publications/i/item/9789241549974/

Metadados bibliográficos conferidos em catálogos institucionais e editoras; apresentação de referências de livros e documentos impressos conforme ABNT NBR 6023:2025, e exemplos autor-data conforme NBR 10520:2023. Não foram inseridos links nas fichas bibliográficas da página.

## Validação
`validation.json`: contagens, preservação de seções e imagem, jogo, leitura, filtros, referências sem links e ausência de erros JS. `check_preview.cjs` verifica que o HTML independente monta os cinco resumos. Conferência visual em navegador da versão independente realizada.

## Arquivos
`build_content.py`, `catalog.py` e `build_refresh.py` geram os dados e o JS da nova camada editorial. Não exigem instalação adicional. `study-refresh.js` aguarda o conteúdo anterior antes de atualizar as seções. `preview-terapia-ocupacional.html` contém uma versão independente para aprovação e pode ser aberta no navegador sem hospedagem.
