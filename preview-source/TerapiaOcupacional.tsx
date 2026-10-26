import React from "react";
const bannerTO={url:"/assets/previa-caderno.jpg"};
const Accordion=({children,className})=><div className={className}>{children}</div>;
const AccordionItem=({children,className})=><details name="faq" className={className}>{children}</details>;
const AccordionTrigger=({children,className})=><summary className={className}>{children}</summary>;
const AccordionContent=({children,className})=><div className={className}>{children}</div>;
const CHECKOUT_URL = "https://pay.cakto.com.br/i2cyf2c";

/* ============================================================
   DATA — Caderno de Terapia Ocupacional
   ============================================================ */

const todasFuncionalidades: { label: string; tone: string }[] = [
  ...["Cronograma semestral","Cronograma semanal de estudos","Calendário acadêmico","Plano de revisão por disciplina","Sistema de revisão espaçada","Pomodoro e bloco de foco","Mapa mental por matéria","Metas semanais e mensais","Diário de estudos","Checklist de provas","Trilha por período da graduação"].map(label => ({ label, tone: "emerald" })),
  ...["Grade curricular de Terapia Ocupacional","Fundamentos da Terapia Ocupacional","Anatomia Humana","Fisiologia Humana","Neuroanatomia","Desenvolvimento Humano","Análise da Atividade","Avaliação em Terapia Ocupacional","Cinesiologia","Saúde Coletiva e SUS"].map(label => ({ label, tone: "coral" })),
  ...["Resumos prontos por tema","Flashcards por disciplina","Mapas conceituais","Fichas de leitura de textos e artigos","Banco de questões comentadas","Simulados por área","Erros recorrentes do acadêmico","Mais cobrado em provas e concursos","Glossário de Terapia Ocupacional","Instrumentos e escalas de avaliação"].map(label => ({ label, tone: "azure" })),
  ...["Diário de estágio","Registro de atendimentos supervisionados","Relatório de atividades","Discussão de casos em Terapia Ocupacional","Estudo de caso","Relatório final de estágio","Modelos de registros terapêuticos","Casos resolvidos comentados","Estágios em UBS, CAPS, hospital e reabilitação","Supervisão e portfólio acadêmico"].map(label => ({ label, tone: "amber" })),
  ...["Terapia Ocupacional em Saúde Mental","Integração Sensorial","Neuroanatomia aplicada","Terapia Ocupacional em Pediatria","Tecnologia Assistiva","Reabilitação Física","Terapia Ocupacional em Gerontologia","Atividades de Vida Diária (AVD)","Desempenho Ocupacional","Terapia Ocupacional no contexto escolar","Terapia Ocupacional Social"].map(label => ({ label, tone: "violet" })),
  ...["Banco de questões ENADE","Concursos de Terapia Ocupacional","Provas de residência multiprofissional","Gabaritos comentados","Simulados por instituição","Revisão pré-prova","Erros clássicos de avaliação","Treino de raciocínio terapêutico-ocupacional"].map(label => ({ label, tone: "rose" })),
  ...["TCC em Terapia Ocupacional","Iniciação Científica (PIBIC)","Monitorias e grupos de pesquisa","Mestrado e doutorado","Bolsas (CAPES/CNPq/FAPs)","Publicações científicas","Pós-doutorado","Concursos e provas de título","Portfólio e currículo","Áreas de atuação do terapeuta ocupacional","Carreira e consultório próprio","Ética profissional e COFFITO/CREFITO","Educação continuada","Networking profissional"].map(label => ({ label, tone: "magenta" })),
];

const toneClasses: Record<string, string> = {
  emerald: "bg-[hsl(158,84%,42%)]/10 text-[hsl(158,84%,22%)] border-[hsl(158,84%,42%)]/40",
  coral: "bg-[hsl(12,90%,62%)]/10 text-[hsl(12,80%,38%)] border-[hsl(12,90%,62%)]/40",
  azure: "bg-[hsl(210,90%,55%)]/10 text-[hsl(210,90%,32%)] border-[hsl(210,90%,55%)]/40",
  amber: "bg-[hsl(38,96%,56%)]/15 text-[hsl(28,90%,32%)] border-[hsl(38,96%,56%)]/45",
  violet: "bg-[hsl(262,75%,60%)]/10 text-[hsl(262,75%,38%)] border-[hsl(262,75%,60%)]/40",
  rose: "bg-[hsl(340,82%,60%)]/10 text-[hsl(340,82%,38%)] border-[hsl(340,82%,60%)]/40",
  magenta: "bg-[hsl(300,70%,55%)]/10 text-[hsl(300,70%,35%)] border-[hsl(300,70%,55%)]/40",
};

// 5 grandes áreas × 5 cartões de resumo cada
const resumosTO: {
  area: string; desc: string; bg: string; text: string;
  cards: { topic: string; resumo: string; exemplo: string; distincao: string; revisao: string; fonte: string }[];
}[] = [{"area": "Fundamentos da Terapia Ocupacional e Ocupação Humana", "desc": "Das ocupações cotidianas à análise da atividade: bases para compreender participação e autonomia.", "bg": "bg-vib-emerald", "text": "text-paper", "cards": [{"topic": "Ocupações e cotidiano", "resumo": "Ocupações articulam o que a pessoa faz, o sentido atribuído a esse fazer e as condições em que ele acontece. Autocuidado, estudo, trabalho, brincar e lazer integram rotinas distintas. A análise considera escolhas, história e oportunidades, evitando reduzir a vida cotidiana a uma lista de tarefas executadas.", "exemplo": "Descreva um dia fictício de um universitário e relacione atividades, papéis e prioridades.", "distincao": "A mesma tarefa pode ter significados diferentes para pessoas diferentes.", "revisao": "Qual ocupação a pessoa considera importante e por quê?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "Análise da atividade", "resumo": "Analisar uma atividade envolve compreender sua sequência, os materiais, o espaço, as regras e as demandas que emergem durante sua realização. Também é necessário conhecer quem a realiza e em qual contexto. Uma análise permite formular perguntas sobre facilidades, barreiras e possíveis mudanças, sem assumir que toda dificuldade pertence ao indivíduo.", "exemplo": "Decomponha o preparo de um lanche em etapas e registre as demandas de cada uma.", "distincao": "Descrever uma tarefa em abstrato não substitui observar sua realização no contexto.", "revisao": "Que demanda muda quando o ambiente muda?", "fonte": "Atividades humanas na terapia ocupacional: construção e compromisso"}, {"topic": "Desempenho ocupacional", "resumo": "O desempenho se expressa na realização de ocupações e na relação entre características da pessoa, demandas da atividade e condições do ambiente. Sua compreensão combina o relato da pessoa e a observação situada. Uma dificuldade específica não resume todas as capacidades, interesses ou possibilidades de participação.", "exemplo": "Compare a mesma atividade em casa e em um espaço desconhecido.", "distincao": "Desempenho observado e capacidade em uma condição de teste são informações diferentes.", "revisao": "Qual aspecto do contexto ajuda a explicar a diferença?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "Modelos de prática", "resumo": "Modelos organizam conceitos e ajudam a justificar perguntas, observações e decisões. Diferentes referenciais enfatizam dimensões próprias da ocupação e da relação com o contexto. No estudo, é necessário reconhecer os conceitos do modelo escolhido e explicar como eles se conectam ao caso, em vez de apenas citar seu nome.", "exemplo": "Monte um quadro com conceito, pergunta de avaliação e informação que seria procurada.", "distincao": "Modelo teórico não é uma sequência pronta de procedimentos.", "revisao": "O referencial escolhido explica o raciocínio apresentado?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "Anatomia e movimento", "resumo": "Conhecimentos sobre estruturas corporais e movimento contribuem para compreender demandas das tarefas. A leitura funcional relaciona posição, alcance, manipulação de objetos e organização do espaço. O estudo anatômico integra a análise ocupacional, sem substituir informações sobre significado, contexto e participação.", "exemplo": "Observe os movimentos presentes ao organizar livros sobre uma mesa.", "distincao": "Uma estrutura corporal isolada não explica toda a realização de uma ocupação.", "revisao": "Como objeto e altura da superfície modificam a tarefa?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}]}, {"area": "Neuroanatomia e Reabilitação Física", "desc": "Do sistema nervoso às estratégias para ampliar a funcionalidade no cotidiano.", "bg": "bg-vib-violet", "text": "text-paper", "cards": [{"topic": "Sistema nervoso central", "resumo": "No estudo da neuroanatomia, localização, conexão e função precisam ser relacionadas. O comportamento em uma atividade envolve processos motores, sensoriais e cognitivos articulados. Para o estudante, mapas e esquemas são recursos para organizar hipóteses e perguntas, não para deduzir conclusões clínicas a partir de uma observação isolada.", "exemplo": "Relacione observar, planejar e executar às etapas de uma tarefa acadêmica.", "distincao": "Correlação anatômica e explicação completa de um desempenho não são equivalentes.", "revisao": "Quais processos atuam em conjunto durante a tarefa?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "Acidente vascular cerebral", "resumo": "Um caso acadêmico após AVC pode ser estudado a partir das ocupações que a pessoa deseja retomar e das mudanças percebidas em sua rotina. O raciocínio articula história, ambiente, observações e prioridades, reconhecendo a diversidade entre pessoas com a mesma condição de saúde.", "exemplo": "Organize um caso fictício em ocupações anteriores, mudanças relatadas e perguntas para avaliação.", "distincao": "O diagnóstico não determina sozinho objetivos ou possibilidades de participação.", "revisao": "Qual prioridade foi expressa pela própria pessoa?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "Função de membros superiores", "resumo": "Alcançar, segurar, manipular e soltar objetos integram diversas tarefas. A análise considera características do objeto, exigência de precisão, tempo e organização do espaço. Observar a atividade completa ajuda a relacionar os movimentos às estratégias utilizadas, sem resumir a tarefa a uma medida isolada.", "exemplo": "Compare escrever, abrir um estojo e separar folhas em um exemplo de estudo.", "distincao": "Um teste de destreza e o uso das mãos no cotidiano respondem a perguntas distintas.", "revisao": "Que exigências diferenciam os três exemplos?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "Avaliação funcional", "resumo": "Avaliar exige definir a pergunta, reunir informações pertinentes e registrar as condições em que foram obtidas. Entrevista, observação e instrumentos podem oferecer perspectivas complementares. A interpretação relaciona resultados ao contexto, às prioridades e aos limites do método, distinguindo os dados coletados das hipóteses formuladas.", "exemplo": "Crie três colunas: relato, observação e questão ainda a investigar.", "distincao": "Uma pontuação não descreve sozinha a vida cotidiana.", "revisao": "Que informação adicional ajuda a interpretar o resultado?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "Adaptação de tarefas", "resumo": "Uma tarefa pode ser modificada em materiais, etapas, ritmo, regras ou ambiente. A análise acadêmica pergunta qual mudança favoreceria o objetivo discutido e como verificar sua pertinência. Adaptar envolve preservar sentido e possibilidades de escolha, reconhecendo que uma solução útil em um contexto pode não servir em outro.", "exemplo": "Proponha duas maneiras de organizar uma atividade de estudo com o mesmo objetivo.", "distincao": "Simplificar uma tarefa e torná-la significativa não são a mesma coisa.", "revisao": "Qual parte do objetivo deve permanecer após a mudança?", "fonte": "Atividades humanas na terapia ocupacional: construção e compromisso"}]}, {"area": "Avaliação e Intervenção em Terapia Ocupacional", "desc": "Da escuta à definição de objetivos: planejar intervenções centradas na pessoa e no contexto.", "bg": "bg-vib-coral", "text": "text-paper", "cards": [{"topic": "Perfil ocupacional", "resumo": "O perfil ocupacional reúne história, papéis, interesses, rotinas e prioridades de uma pessoa. Ele orienta a compreensão do que importa em seu cotidiano e do que precisa ser aprofundado. A construção deve valorizar a perspectiva da pessoa, sem transformar o relato em uma lista de déficits ou em um formulário descontextualizado.", "exemplo": "Escreva um perfil fictício de alguém que concilia graduação, trabalho e cuidado familiar.", "distincao": "A demanda do serviço pode diferir da prioridade da pessoa.", "revisao": "Como essa prioridade aparece no registro?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "AVD e AIVD", "resumo": "Atividades de vida diária incluem ocupações de autocuidado. As atividades instrumentais envolvem tarefas que apoiam a vida em casa e na comunidade. A classificação ajuda a organizar o estudo, mas o contexto, os recursos e a participação de outras pessoas modificam a maneira como cada atividade é realizada.", "exemplo": "Classifique exemplos de uma rotina e justifique cada escolha.", "distincao": "Autonomia para decidir e independência para executar são dimensões distintas.", "revisao": "Que apoios podem coexistir com escolhas autônomas?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "Plano terapêutico", "resumo": "Um plano articula prioridades, objetivos, ações e formas de acompanhamento. No estudo de casos, cada objetivo precisa ser relacionado às informações da avaliação e às ocupações relevantes. A revisão do plano considera o processo e os resultados observados, tornando explícito o que foi proposto e o que efetivamente aconteceu.", "exemplo": "Relacione uma prioridade fictícia a um objetivo e a uma forma de registro.", "distincao": "Objetivo descreve uma mudança pretendida; atividade descreve uma ação proposta.", "revisao": "Como o acompanhamento mostraria relação com a prioridade?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "Tecnologia assistiva", "resumo": "O estudo da tecnologia assistiva relaciona recursos, estratégias, serviços e participação. Sua análise considera pessoa, atividade, ambiente, aprendizagem de uso e acompanhamento. O valor de um recurso não depende apenas de sua complexidade tecnológica, mas da adequação ao contexto e às necessidades identificadas.", "exemplo": "Compare duas soluções de organização de materiais para uma situação acadêmica fictícia.", "distincao": "Disponibilizar um recurso e garantir seu uso significativo são etapas diferentes.", "revisao": "Quais condições precisam ser avaliadas antes da escolha?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "Documentação clínica", "resumo": "Registros precisam comunicar contexto, informações relevantes, decisões e acompanhamento de forma compreensível. Relato e observação devem ser distinguíveis. Na formação, casos fictícios permitem exercitar linguagem objetiva e organização da escrita, cuidando para não expor informações pessoais ao discutir experiências.", "exemplo": "Reescreva uma anotação vaga com data, contexto e descrição objetiva.", "distincao": "Uma impressão do observador não deve ser apresentada como fato relatado pela pessoa.", "revisao": "É possível identificar a origem de cada informação?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}]}, {"area": "Saúde Mental, Infância e Contextos Sociais", "desc": "Do brincar à participação comunitária: cuidado em diferentes fases e contextos de vida.", "bg": "bg-vib-azure", "text": "text-paper", "cards": [{"topic": "Saúde mental e CAPS", "resumo": "O estudo da atenção psicossocial inclui cotidiano, relações, circulação no território e projetos de vida. Atividades e espaços coletivos podem ser analisados quanto às oportunidades de vínculo e participação. A discussão considera a singularidade das pessoas e os recursos do contexto, em vez de associar um diagnóstico a uma rotina padronizada.", "exemplo": "Mapeie espaços e relações relevantes em um caso territorial fictício.", "distincao": "Oferecer uma atividade não garante que ela seja significativa para todos.", "revisao": "Como os participantes influenciam a proposta?", "fonte": "Participação social em terapia ocupacional: sobre o que estamos falando?"}, {"topic": "Integração sensorial", "resumo": "O estudo do processamento sensorial investiga como informações sensoriais se relacionam às ações e experiências do cotidiano. A observação deve considerar atividade, ambiente e história. Para organizar a aprendizagem, diferencie conceitos gerais de processamento, relatos individuais e métodos específicos de avaliação ou intervenção.", "exemplo": "Descreva as características sensoriais de uma sala de estudos sem atribuir diagnósticos.", "distincao": "Preferência sensorial isolada não estabelece uma condição clínica.", "revisao": "Que mudança no contexto poderia ser investigada?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "Pediatria e brincar", "resumo": "O brincar constitui uma dimensão importante das ocupações da infância e pode envolver imaginação, regras, objetos e relações. A observação considera interesses, oportunidades, contexto cultural e participação de outras crianças e adultos. Estudar o brincar exige olhar para a experiência da criança, além do produto final da atividade.", "exemplo": "Compare a mesma brincadeira em dois ambientes fictícios.", "distincao": "Brincar não se resume ao treino de uma habilidade isolada.", "revisao": "Que escolhas a criança pode fazer na proposta?", "fonte": "Atividades humanas na terapia ocupacional: construção e compromisso"}, {"topic": "Contexto escolar", "resumo": "Participar da escola envolve atividades de aprendizagem, recreio, deslocamentos, relações e organização da rotina. A análise considera barreiras e facilitadores nos espaços, materiais e formas de participação. O trabalho com a equipe e a escuta do estudante ajudam a compreender demandas que não podem ser atribuídas apenas ao desempenho individual.", "exemplo": "Mapeie o percurso de um estudante entre entrada, sala e recreio.", "distincao": "Estar presente no espaço não equivale a participar de suas atividades.", "revisao": "Em qual momento surgem oportunidades ou barreiras?", "fonte": "Participação social em terapia ocupacional: sobre o que estamos falando?"}, {"topic": "Terapia Ocupacional Social", "resumo": "No campo social, cotidiano, direitos, redes e território orientam a leitura de situações individuais e coletivas. A análise inclui condições concretas de acesso e oportunidades de participação. Projetos e atividades precisam ser compreendidos em sua dimensão cultural e política, evitando reduzir questões sociais a dificuldades pessoais.", "exemplo": "Desenhe um mapa fictício de equipamentos, trajetos e redes de apoio.", "distincao": "A participação social possui sentidos diferentes conforme o referencial utilizado.", "revisao": "Qual definição de participação está orientando a análise?", "fonte": "Participação social em terapia ocupacional: sobre o que estamos falando?"}]}, {"area": "Ciclos da Vida, Ética e Carreira em Terapia Ocupacional", "desc": "Da infância ao envelhecimento, do estágio à atuação profissional: práticas com ética e propósito.", "bg": "bg-vib-rose", "text": "text-paper", "cards": [{"topic": "Desenvolvimento infantil", "resumo": "O desenvolvimento pode ser estudado em sua relação com experiências, vínculos e contextos de vida. Referências de aquisição de habilidades apoiam a aprendizagem, mas não substituem a compreensão da história e das oportunidades da criança. A observação acadêmica deve integrar o que a criança faz, com quem e em quais situações.", "exemplo": "Organize uma descrição fictícia de rotina familiar e escolar.", "distincao": "Uma habilidade isolada não resume o desenvolvimento.", "revisao": "Como as oportunidades do ambiente aparecem na descrição?", "fonte": "Atividades humanas na terapia ocupacional: construção e compromisso"}, {"topic": "Envelhecimento ativo", "resumo": "A participação na velhice envolve história, escolhas, relações e condições de acesso às ocupações. O estudo não deve pressupor que todas as pessoas idosas tenham as mesmas necessidades. Rotinas e apoios podem ser analisados a partir das atividades valorizadas pela pessoa e das transformações em seu contexto de vida.", "exemplo": "Compare duas rotinas fictícias de pessoas idosas com interesses diferentes.", "distincao": "Idade cronológica e necessidades de apoio não são sinônimos.", "revisao": "Quais atividades cada pessoa deseja manter?", "fonte": "Participação social em terapia ocupacional: sobre o que estamos falando?"}, {"topic": "Ética e documentação", "resumo": "A reflexão ética acompanha escolhas, comunicação, responsabilidades e relação com as pessoas atendidas. Nos estudos, é importante justificar decisões e reconhecer dúvidas, sem tratar dilemas como simples respostas decoradas. Registros e discussões acadêmicas devem preservar a confidencialidade e explicitar o contexto da atividade.", "exemplo": "Discuta um caso fictício de compartilhamento inadequado de uma ficha.", "distincao": "Ter acesso a uma informação não significa poder divulgá-la.", "revisao": "Quais informações são necessárias para a finalidade da discussão?", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition"}, {"topic": "Redes de cuidado e território", "resumo": "O território inclui lugares, relações, recursos e barreiras que participam da vida cotidiana. Compreender uma rede exige observar como pessoas e serviços se articulam e quais trajetos são possíveis. Um mapa de equipamentos é um ponto de partida, mas não revela sozinho acesso, vínculo e continuidade.", "exemplo": "Relacione um objetivo de participação a trajetos, pessoas e recursos de uma comunidade fictícia.", "distincao": "Existência de um serviço e possibilidade real de acesso são informações distintas.", "revisao": "Que barreira permanece mesmo com o serviço disponível?", "fonte": "As estruturas da vida cotidiana e a terapia ocupacional"}, {"topic": "Carreira e pesquisa", "resumo": "A formação continua por meio de estudo, prática reflexiva, supervisão e leitura crítica. Organizar referências exige registrar autoria, título e dados de publicação. No projeto de pesquisa, a pergunta orienta a busca e o método; na carreira, o portfólio deve relacionar experiências e aprendizagens de forma clara e responsável.", "exemplo": "Monte uma ficha de leitura com objetivo, método, resultado e limites de um artigo.", "distincao": "Uma revisão sistemática exige método explícito; uma lista de textos não basta.", "revisao": "As fontes selecionadas respondem à pergunta do trabalho?", "fonte": "The PRISMA 2020 statement"}]}];

// Amostra interativa do caderno
const amostraTabs: {
  id: string; label: string; side: string; title: string; subtitle: string;
  rows: { title: string; meta: string; tag?: string }[];
}[] = [
  { id: "cronograma", label: "Cronograma", side: "Cronograma de estudos", title: "Plano semestral · 5º período", subtitle: "Neuroanatomia + avaliação funcional + saúde mental · revisão programada", rows: [
    { title: "Bloco 1 — Neuroanatomia + funcionalidade", meta: "Foco principal", tag: "Foco" }, { title: "Bloco 2 — Análise da atividade + AVD", meta: "Bloco prático", tag: "Prática" }, { title: "Bloco 3 — Saúde mental + rede de cuidado", meta: "Integração com prática", tag: "Prática" }, { title: "Bloco 4 — Revisão integrada + simulado ENADE", meta: "Pré-prova", tag: "Revisão" },
  ]},
  { id: "resumos", label: "Resumos", side: "Resumos prontos", title: "Resumos por disciplina", subtitle: "Fundamentos, Desenvolvimento, Avaliação, Saúde Mental, Pediatria e Reabilitação", rows: [
    { title: "Ocupação humana — conceitos e cotidiano", meta: "Resumo com esquema visual", tag: "Básico" }, { title: "AVD e AIVD — diferenças e exemplos", meta: "Quadro comparativo", tag: "AVD" }, { title: "Processamento sensorial e modulação", meta: "Roteiro por conceito", tag: "Sensorial" }, { title: "Análise da atividade — demandas e adaptação", meta: "Conceitos e aplicações", tag: "Análise" }, { title: "História da Terapia Ocupacional — marcos e práticas", meta: "Linha do tempo comentada", tag: "História" }, { title: "Avaliação do desempenho ocupacional", meta: "Princípios aplicados", tag: "Avaliação" }, { title: "Neuroanatomia e controle motor", meta: "Tabela de funções", tag: "Neuro" }, { title: "AVC — participação nas atividades diárias", meta: "Roteiro e aplicação", tag: "Reab." }, { title: "Plano terapêutico ocupacional passo a passo", meta: "Passo a passo com quadros", tag: "Plano" }, { title: "Tecnologia assistiva e adaptações", meta: "Modelos e interpretação", tag: "TA" }, { title: "Ciclos da Vida — ocupações por fase", meta: "Esquema visual", tag: "Ciclo vital" }, { title: "SUS e rede de atenção psicossocial", meta: "Mapa conceitual", tag: "Pública" }, { title: "Terapia Ocupacional no contexto escolar", meta: "Cuidados e fluxos", tag: "Escola" }, { title: "Saúde mental — rotina e participação", meta: "Ferramentas e etapas", tag: "CAPS" }, { title: "Código de Ética Profissional", meta: "Artigos comentados", tag: "Ética" },
  ]},
  { id: "flashcards", label: "Flashcards", side: "Sistema de revisão", title: "Flashcards · revisão espaçada", subtitle: "Perguntas e respostas por tema para revisão programada", rows: [
    { title: "O que é desempenho ocupacional?", meta: "Próxima revisão hoje", tag: "Hoje" }, { title: "AVD x AIVD", meta: "Em consolidação", tag: "AVD" }, { title: "O que é modulação sensorial?", meta: "Em consolidação", tag: "Sensorial" }, { title: "Componentes da análise da atividade", meta: "Revisar amanhã", tag: "Prática" }, { title: "Exemplos de tecnologia assistiva", meta: "Novo conjunto", tag: "Novo" },
  ]},
  { id: "estagio", label: "Estágio", side: "Diário de estágio", title: "Atividades acompanhadas · 9º período", subtitle: "Vivências semanais · supervisão · portfólio em formação", rows: [
    { title: "Hospital · treino de atividades de vida diária", meta: "Atendimento supervisionado", tag: "Clínica" }, { title: "UBS · grupos de promoção da participação", meta: "Intervenção acompanhada", tag: "UBS" }, { title: "Escola · adaptação de atividade para participação", meta: "Rotina intersetorial", tag: "Escola" }, { title: "CAPS · oficinas e projetos de vida", meta: "Atividades no território", tag: "CAPS" }, { title: "Supervisão · discussão de caso", meta: "Reunião agendada · roteiro pronto", tag: "Aluno" },
  ]},
  { id: "concursos", label: "Concursos", side: "Carreira · Concursos", title: "Plano de estudos para concursos", subtitle: "Fundamentos + Avaliação + Saúde Mental + SUS + Ética + Reabilitação", rows: [
    { title: "Edital de concurso — análise por eixo", meta: "Conteúdo programático mapeado", tag: "Edital" }, { title: "Saúde coletiva, SUS e redes de cuidado", meta: "Resumo e diretrizes", tag: "Áreas" }, { title: "Avaliação e intervenção em Terapia Ocupacional", meta: "Resumos + flashcards", tag: "Prova" }, { title: "Código de Ética e sistema COFFITO/CREFITO", meta: "Casos comentados", tag: "Ética" }, { title: "Banco de questões por instituição", meta: "ENADE e concursos", tag: "Treino" },
  ]},
  { id: "tcc", label: "TCC", side: "Pesquisa & TCC", title: "TCC em Terapia Ocupacional", subtitle: "Cronograma, fichamentos, normas ABNT/APA e metodologia", rows: [
    { title: "Cronograma do TCC — 12 meses", meta: "Tema → projeto → coleta → análise → defesa", tag: "Plano" }, { title: "Fichamentos de artigos e livros", meta: "Bibliografia organizada por tema", tag: "Acervo" }, { title: "Ética em pesquisa", meta: "TCLE, CEP e Plataforma Brasil", tag: "Ética" }, { title: "Análise de dados em Terapia Ocupacional", meta: "Estatística e análise de conteúdo", tag: "Dados" }, { title: "Defesa — slides e roteiro", meta: "Modelo + perguntas frequentes da banca", tag: "Defesa" },
  ]},
];

// Tour visual: páginas do caderno
type MockRow = { title: string; meta: string; tag?: string };
type MockTone = "emerald" | "coral" | "azure" | "violet" | "amber" | "rose" | "magenta" | "teal" | "lime" | "mustard";
const r = (titles: string[]): MockRow[] => titles.map((title) => ({ title, meta: "Conteúdo organizado por assunto", tag: "EC" }));
const tourPaginas: {
  kicker: string; title: string; desc: string;
  mock: { crumb: string; side: string; title: string; subtitle: string; rows: MockRow[]; accent: MockTone };
}[] = [
  { kicker: 'Visão geral', title: 'Um caderno, toda a Terapia Ocupacional à mão', desc: 'Cronograma, resumos, flashcards, estágio, casos práticos, TCC e concursos organizados para acompanhar sua formação.', mock: { crumb: "caderno · terapia ocupacional", side: 'Visão geral', title: 'Painel do acadêmico de Terapia Ocupacional', subtitle: "Materiais de estudo e exemplos práticos", accent: "emerald", rows: r(['Cronograma de estudos da semana','Resumos das disciplinas do período','Diário de estágio','Questões de ENADE e concursos']) } },
  { kicker: 'Disciplinas / Grade', title: 'Disciplinas de Terapia Ocupacional organizadas por ciclo', desc: 'Cada disciplina reúne tópicos de estudo, bibliografia, atividades e revisão para acompanhar seu semestre.', mock: { crumb: "caderno · terapia ocupacional", side: 'Grade do curso', title: 'Disciplinas por período', subtitle: "Materiais de estudo e exemplos práticos", accent: "coral", rows: r(['Fundamentos, História da Terapia Ocupacional e Anatomia','Fisiologia, Neuroanatomia e Desenvolvimento Humano','Análise da Atividade, Avaliação e Integração Sensorial','Saúde Mental, Pediatria, Reabilitação e Saúde Coletiva']) } },
  { kicker: 'Sistema de revisão', title: 'Revisão espaçada com flashcards por disciplina', desc: 'Cards de revisão ajudam a retomar conceitos, avaliação funcional e ética profissional ao longo dos estudos.', mock: { crumb: "caderno · terapia ocupacional", side: 'Flashcards', title: 'Revisão de hoje', subtitle: "Materiais de estudo e exemplos práticos", accent: "teal", rows: r(['Ocupações e atividades de vida diária','Análise da atividade','Marcos do desenvolvimento infantil','Código de Ética e sigilo','Erros clássicos de avaliação']) } },
  { kicker: 'Trilha por período', title: 'Trilha de estudos do ciclo básico ao estágio', desc: 'Organize o foco de cada período, as disciplinas e os prazos de estágio e TCC.', mock: { crumb: "caderno · terapia ocupacional", side: 'Trilha por período', title: 'Foco curricular por semestre', subtitle: "Materiais de estudo e exemplos práticos", accent: "azure", rows: r(['Fundamentos e ocupação humana','Anatomia, neuroanatomia e desenvolvimento','Avaliação e intervenção terapêutico-ocupacional','Áreas de atuação e políticas públicas','Estágio e TCC']) } },
  { kicker: 'Diário de estágio', title: 'Estágio organizado: UBS, CAPS, hospital e escola', desc: 'Registre atendimentos supervisionados, intervenções, rotinas e aprendizados de cada estágio.', mock: { crumb: "caderno · terapia ocupacional", side: 'Diário de estágio', title: 'Atividades acompanhadas', subtitle: "Materiais de estudo e exemplos práticos", accent: "violet", rows: r(['Grupo na UBS','Atendimento em reabilitação','Atividade no contexto escolar','Oficina terapêutica no CAPS']) } },
  { kicker: 'Planos e roteiros', title: 'Planos e roteiros prontos por área', desc: 'Modelos para entrevista ocupacional, plano terapêutico, relatório de estágio e registro de supervisão.', mock: { crumb: "caderno · terapia ocupacional", side: 'Modelos prontos', title: 'Modelos por área', subtitle: "Materiais de estudo e exemplos práticos", accent: "amber", rows: r(['Roteiro de entrevista ocupacional','Modelo de plano terapêutico','Modelo de relatório de estágio','Checklist de registro de evolução']) } },
  { kicker: 'Casos práticos', title: 'Casos de Terapia Ocupacional para treinar o raciocínio', desc: 'Exemplos de situações em reabilitação, saúde mental, pediatria e contexto escolar.', mock: { crumb: "caderno · terapia ocupacional", side: 'Casos práticos', title: 'Casos comentados', subtitle: "Materiais de estudo e exemplos práticos", accent: "rose", rows: r(['Pessoa após AVC retomando autocuidado','Criança com desafios de participação escolar','Pessoa em acompanhamento no CAPS','Idoso com dificuldade nas atividades diárias']) } },
  { kicker: 'Cronograma semanal', title: 'Cronograma semanal com aulas, estudos e práticas', desc: 'Visualize aulas, blocos de estudo, revisões programadas, supervisões e atendimentos.', mock: { crumb: "caderno · terapia ocupacional", side: 'Cronograma semanal', title: 'Semana atual', subtitle: "Materiais de estudo e exemplos práticos", accent: "emerald", rows: r(['Aula de Saúde Mental','Prática de Análise da Atividade','Revisão de Neuroanatomia','Prova de Fundamentos de Terapia Ocupacional','Supervisão de estágio']) } },
  { kicker: 'Terapia Ocupacional aplicada', title: 'Terapia Ocupacional sem decoreba', desc: 'Estude fundamentos, avaliação, reabilitação, saúde mental e ética com aplicação prática no hospital, na UBS, no CAPS e na escola.', mock: { crumb: "caderno · terapia ocupacional", side: 'Terapia Ocupacional', title: 'Resumo aplicado', subtitle: "Materiais de estudo e exemplos práticos", accent: "lime", rows: r(['Fundamentos da Terapia Ocupacional','Avaliação e intervenção','Neuroanatomia','Saúde Mental','Ética profissional']) } },
];

const mockToneBg: Record<MockTone, string> = {
  emerald: "bg-vib-emerald",
  coral: "bg-vib-coral",
  azure: "bg-vib-azure",
  violet: "bg-vib-violet",
  amber: "bg-vib-amber",
  rose: "bg-vib-rose",
  magenta: "bg-vib-magenta",
  teal: "bg-vib-teal",
  lime: "bg-vib-lime",
  mustard: "bg-vib-mustard",
};
const mockTonePalette: MockTone[] = ["emerald","coral","azure","violet","amber","rose","magenta","teal","lime","mustard"];

const funcionalidadesCorridas = [
  "Cronograma semestral","Cronograma semanal","Calendário acadêmico","Plano de revisão",
  "Revisão espaçada","Pomodoro e foco","Mapas mentais","Diário de estudos",
  "Resumos por disciplina","Flashcards","Mapas conceituais","Banco de questões",
  "ENADE comentado","Concursos públicos","Carreira do terapeuta ocupacional","Simulados por instituição",
  "Diário de estágio","Registro de atendimentos","Relatório de atividades","Discussão de casos",
  "Estudo de caso","Relatório final de estágio","Acompanhamento por supervisor","Casos de Terapia Ocupacional comentados",
  "Fundamentos da Terapia Ocupacional","História da Terapia Ocupacional","Neuroanatomia","Fisiologia Humana",
  "Análise da Atividade","Integração Sensorial","Ciclos da Vida","Avaliação Ocupacional",
  "Desempenho Ocupacional","AVD e AIVD","Reabilitação Física","Saúde Mental",
  "Pediatria","Tecnologia Assistiva","Terapia Ocupacional Social","Terapia Ocupacional na escola","TCC em Terapia Ocupacional","Iniciação Científica",
  "Mestrado e doutorado","Bolsas acadêmicas","Publicações","Áreas de atuação",
  "Portfólio e currículo","Ética e CREFITO","Educação continuada",
];

const faqItems: { q: string; a: React.ReactNode }[] = [
  { q: "Afinal, o que é o Caderno de Terapia Ocupacional?", a: "É um caderno digital para estudantes de Terapia Ocupacional organizarem estudos, resumos, flashcards, casos práticos, estágio, TCC, portfólio e preparação para concursos e ENADE em um só lugar." },
  { q: "Como o caderno funciona no dia a dia?", a: "Você encontra cronogramas, resumos por disciplina, flashcards, questões, modelos de avaliação e plano terapêutico e conteúdos de fundamentos, neuroanatomia, saúde mental, pediatria, reabilitação e tecnologia assistiva." },
  { q: "Funciona em celular, tablet e computador?", a: "Sim. Você acessa pelo navegador do celular, tablet ou computador, sem precisar instalar nada." },
  { q: "Para quem é o caderno?", a: "Para estudantes de Terapia Ocupacional, estagiários, recém-formados e terapeutas ocupacionais que querem revisar conteúdos, preparar provas e organizar a carreira." },
  { q: "Serve para estudar para concursos públicos?", a: "Sim. Você pode organizar editais, leituras, questões, revisões e a preparação para concursos de prefeituras, hospitais, órgãos públicos, residências multiprofissionais e para o ENADE." },
  { q: "Serve para provas e avaliações do curso?", a: "Sim. O caderno reúne temas essenciais, questões, simulados e revisão por grande área da Terapia Ocupacional." },
  { q: "Serve durante todos os períodos da faculdade?", a: "Sim. O conteúdo acompanha a formação, dos fundamentos e da análise da atividade à neuroanatomia, saúde mental, reabilitação, estágio, TCC e carreira." },
  { q: "Serve para estágios em UBS, CAPS, hospital e escola?", a: "Sim. Há espaço para diário de estágio, registro de atendimentos, supervisões, relatórios, casos práticos e construção de portfólio." },
  { q: "Serve depois de formado, na vida profissional?", a: "Sim. Os materiais ajudam a revisar avaliação do desempenho ocupacional, planos terapêuticos, registros, ética e diferentes áreas de atuação." },
  { q: "Serve para pós-graduação, mestrado e doutorado?", a: "Sim. A organização de leituras, fichamentos, projetos, currículo e publicações também acompanha os estudos na pós-graduação." },
  { q: "Serve para diferentes áreas da Terapia Ocupacional?", a: "Sim. Você pode seguir trilhas em Saúde Mental, Pediatria, Reabilitação Física, Gerontologia, Tecnologia Assistiva, Saúde Coletiva, contextos escolares e outras áreas." },
  { q: "Como funcionam os flashcards e as revisões?", a: "O caderno apresenta flashcards por tema e revisão espaçada para ajudar na fixação dos conteúdos." },
  { q: "Quais são, na prática, as áreas que o caderno cobre?", a: "Estudos, disciplinas, resumos, flashcards, casos práticos, estágio, questões, TCC, concursos e conteúdos das principais áreas da Terapia Ocupacional." },
  { q: "Quais são os benefícios reais no dia a dia?", a: "Estudos organizados, resumos e flashcards por assunto, apoio no estágio e revisão dos principais temas de Terapia Ocupacional." },
  { q: "É difícil de usar? Preciso ser bom de tecnologia?", a: "Não. O caderno foi pensado para ser acessado pelo navegador de forma simples." },
  { q: "Como faço para acessar depois da compra?", a: "Após a confirmação do pagamento, os dados de acesso são enviados ao e-mail informado na compra. Confira o endereço antes de finalizar." },
  { q: "Quanto custa? É mensalidade?", a: "O valor informado nesta página é R$ 29,99 em pagamento único, sem mensalidade." },
  { q: "Posso pedir reembolso se não gostar do caderno?", a: "Você tem 7 dias para solicitar reembolso diretamente pela Cakto." },
  { q: "E se eu tiver dúvida ou suporte técnico?", a: "Fale com o suporte pela Cakto, usando o mesmo e-mail informado na compra. O atendimento responde em até 24 horas em dias úteis." },
  { q: "O conteúdo é atualizado?", a: "O caderno organiza os conteúdos por assunto e etapa da formação, facilitando as revisões ao longo do curso." },
  { q: "Posso usar para várias disciplinas e ao longo de todo o curso?", a: "Sim. O caderno reúne materiais e temas para acompanhar diferentes disciplinas e etapas da graduação." },
];

/* -------- Mini flashcards interativos (frente/verso) -------- */

const FC_TONES: { bg: string; text: string }[] = [
  { bg: "bg-vib-emerald", text: "text-paper" },
  { bg: "bg-vib-amber", text: "text-ink" },
  { bg: "bg-vib-violet", text: "text-paper" },
  { bg: "bg-vib-coral", text: "text-ink" },
  { bg: "bg-vib-azure", text: "text-paper" },
  { bg: "bg-vib-mustard", text: "text-ink" },
  { bg: "bg-vib-teal", text: "text-paper" },
  { bg: "bg-vib-rose", text: "text-ink" },
  { bg: "bg-vib-lime", text: "text-ink" },
  { bg: "bg-vib-magenta", text: "text-paper" },
];

const flashcardsTO: { cat: string; q: string; a: string }[] = [{"cat": "História", "q": "Qual é o foco central da Terapia Ocupacional?", "a": "A participação em ocupações significativas nos contextos de vida da pessoa."}, {"cat": "História", "q": "Por que conhecer a história da profissão?", "a": "Para compreender como suas práticas, modelos e campos de atuação se desenvolveram."}, {"cat": "História", "q": "Qual o papel do COFFITO?", "a": "Normatizar e fiscalizar o exercício profissional por meio do sistema de conselhos."}, {"cat": "Fundamentos", "q": "O que são ocupações?", "a": "Atividades do cotidiano que têm significado e propósito para uma pessoa ou grupo."}, {"cat": "Fundamentos", "q": "O que são AVD?", "a": "Atividades básicas de autocuidado, como banho, vestir-se e alimentação."}, {"cat": "Fundamentos", "q": "O que são AIVD?", "a": "Atividades instrumentais, como preparar refeições, usar transporte e administrar finanças."}, {"cat": "Fundamentos", "q": "O que é desempenho ocupacional?", "a": "A forma como a pessoa realiza ocupações em interação com seu ambiente."}, {"cat": "Fundamentos", "q": "O que é participação social?", "a": "Envolvimento em situações e relações da vida comunitária."}, {"cat": "Fundamentos", "q": "O que é análise da atividade?", "a": "Estudo das demandas, etapas, materiais e contextos de uma atividade."}, {"cat": "Fundamentos", "q": "O que significa abordagem centrada na pessoa?", "a": "Construir objetivos e decisões com a pessoa a partir de suas prioridades."}, {"cat": "Neuroanatomia", "q": "O que compõe o sistema nervoso central?", "a": "Encéfalo e medula espinal."}, {"cat": "Neuroanatomia", "q": "Qual a função do córtex motor?", "a": "Participar do planejamento e comando dos movimentos voluntários."}, {"cat": "Neuroanatomia", "q": "O que é neuroplasticidade?", "a": "Capacidade do sistema nervoso de reorganizar conexões em resposta à experiência."}, {"cat": "Neuroanatomia", "q": "O que é propriocepção?", "a": "Percepção da posição e do movimento das partes do corpo."}, {"cat": "Neuroanatomia", "q": "O que é hemiparesia?", "a": "Redução de força em um lado do corpo, possível após um AVC."}, {"cat": "Neuroanatomia", "q": "Como atenção impacta as AVD?", "a": "Dificuldades de atenção podem interferir na sequência e segurança das tarefas."}, {"cat": "Sensorial", "q": "O que é processamento sensorial?", "a": "Organização e interpretação de informações recebidas pelos sentidos."}, {"cat": "Sensorial", "q": "O que é modulação sensorial?", "a": "Regulação da intensidade das respostas a estímulos sensoriais."}, {"cat": "Sensorial", "q": "O que é discriminação sensorial?", "a": "Capacidade de distinguir características e localização dos estímulos."}, {"cat": "Sensorial", "q": "O que é o sistema vestibular?", "a": "Sistema que informa sobre movimento e posição da cabeça no espaço."}, {"cat": "Sensorial", "q": "Qual o papel do sistema tátil?", "a": "Permitir perceber toque, textura, pressão e aspectos de proteção corporal."}, {"cat": "Sensorial", "q": "O que são adaptações sensoriais?", "a": "Ajustes de estímulos e tarefas conforme as necessidades no contexto real."}, {"cat": "Avaliação", "q": "O que é perfil ocupacional?", "a": "Síntese da história, rotina, valores, interesses e prioridades da pessoa."}, {"cat": "Avaliação", "q": "Por que observar uma atividade real?", "a": "Para identificar habilidades, barreiras e apoios no contexto de execução."}, {"cat": "Avaliação", "q": "O que é entrevista inicial?", "a": "Escuta estruturada das demandas, objetivos e contextos da pessoa atendida."}, {"cat": "Avaliação", "q": "O que são metas funcionais?", "a": "Objetivos relacionados à participação em atividades concretas do cotidiano."}, {"cat": "Avaliação", "q": "Como escolher um instrumento de avaliação?", "a": "Considerar objetivo, contexto, público, evidências e formação necessária."}, {"cat": "Avaliação", "q": "O que é reavaliação?", "a": "Comparação periódica de resultados para ajustar objetivos e intervenções."}, {"cat": "Avaliação", "q": "O que é raciocínio clínico em Terapia Ocupacional?", "a": "Integração de avaliação, evidências, contexto e prioridades da pessoa."}, {"cat": "Intervenção", "q": "O que é graduação da atividade?", "a": "Ajuste da dificuldade ou das demandas de uma atividade para viabilizar a participação."}, {"cat": "Intervenção", "q": "O que é adaptação ambiental?", "a": "Mudança no espaço ou nos objetos para reduzir barreiras e ampliar autonomia."}, {"cat": "Intervenção", "q": "Por que treinar atividades significativas?", "a": "Porque a prática contextualizada favorece a participação no cotidiano."}, {"cat": "Intervenção", "q": "O que é tecnologia assistiva?", "a": "Produtos e estratégias que ampliam funcionalidade e participação de pessoas com deficiência."}, {"cat": "Intervenção", "q": "O que é órtese?", "a": "Dispositivo externo utilizado para apoiar, proteger ou posicionar uma parte do corpo."}, {"cat": "Intervenção", "q": "Como orientar familiares e cuidadores?", "a": "Com estratégias compatíveis com a rotina, autonomia e segurança da pessoa."}, {"cat": "Saúde Mental", "q": "O que é cuidado territorial em saúde mental?", "a": "Atenção articulada à vida cotidiana e às redes de apoio da pessoa."}, {"cat": "Saúde Mental", "q": "Qual o papel do CAPS?", "a": "Oferecer cuidado psicossocial comunitário na Rede de Atenção Psicossocial."}, {"cat": "Saúde Mental", "q": "Como oficinas podem apoiar o cuidado?", "a": "Favorecendo expressão, vínculos, participação e reconstrução de rotinas."}, {"cat": "Saúde Mental", "q": "O que é autonomia no contexto psicossocial?", "a": "Poder fazer escolhas e participar da vida cotidiana com apoios adequados."}, {"cat": "Saúde Mental", "q": "Por que mapear a rotina?", "a": "Para reconhecer atividades, barreiras, interesses e possibilidades de participação."}, {"cat": "Pediatria", "q": "Qual o papel do brincar na infância?", "a": "É uma ocupação central para desenvolvimento, aprendizagem e participação."}, {"cat": "Pediatria", "q": "O que são marcos do desenvolvimento?", "a": "Referências de habilidades que costumam surgir em diferentes fases da infância."}, {"cat": "Pediatria", "q": "Por que envolver a família?", "a": "Para alinhar objetivos e estratégias à rotina e às prioridades da criança."}, {"cat": "Pediatria", "q": "Como adaptar uma brincadeira?", "a": "Ajustar materiais, regras, postura ou ambiente sem perder seu significado."}, {"cat": "Pediatria", "q": "O que é participação escolar?", "a": "Envolvimento da criança nas atividades, relações e rotinas da escola."}, {"cat": "Pediatria", "q": "O que é intervenção no contexto natural?", "a": "Atuação considerando as atividades reais da criança em casa, na escola ou na comunidade."}, {"cat": "Reabilitação", "q": "Como avaliar o uso das mãos?", "a": "Observar preensão, coordenação e desempenho em tarefas relevantes."}, {"cat": "Reabilitação", "q": "O que é conservação de energia?", "a": "Organização de tarefas e pausas para manejar fadiga nas atividades diárias."}, {"cat": "Reabilitação", "q": "O que é treino de AVD?", "a": "Prática orientada de tarefas de autocuidado conforme objetivos da pessoa."}, {"cat": "Reabilitação", "q": "O que é acessibilidade?", "a": "Condição que permite uso de espaços, serviços e informações com autonomia e segurança."}, {"cat": "Reabilitação", "q": "Como prevenir riscos no ambiente doméstico?", "a": "Identificar barreiras e adaptar espaços às necessidades e escolhas da pessoa."}, {"cat": "Gerontologia", "q": "Qual o objetivo da Terapia Ocupacional com idosos?", "a": "Apoiar autonomia, segurança e participação nas ocupações significativas."}, {"cat": "Social", "q": "O que é Terapia Ocupacional Social?", "a": "Campo que atua com participação, direitos e cotidiano em contextos sociais."}, {"cat": "Social", "q": "Por que conhecer o território?", "a": "Para identificar recursos, barreiras, redes e oportunidades de participação."}, {"cat": "Social", "q": "O que é trabalho intersetorial?", "a": "Articulação entre saúde, educação, assistência social e outros setores."}, {"cat": "Social", "q": "O que é inclusão escolar?", "a": "Apoio para participação e aprendizagem de estudantes em diferentes contextos."}, {"cat": "SUS", "q": "O que é atenção primária?", "a": "Porta de entrada e coordenação do cuidado no SUS, próxima do território."}, {"cat": "SUS", "q": "O que é RAPS?", "a": "Rede de Atenção Psicossocial, que articula serviços de cuidado em saúde mental."}, {"cat": "SUS", "q": "O que é cuidado interprofissional?", "a": "Trabalho conjunto de profissionais com objetivos compartilhados com a pessoa."}, {"cat": "SUS", "q": "O que é integralidade no cuidado?", "a": "Consideração das necessidades da pessoa em suas múltiplas dimensões e contextos."}, {"cat": "Ética", "q": "O que é sigilo profissional?", "a": "Dever de proteger informações da pessoa atendida conforme normas éticas e legais."}, {"cat": "Ética", "q": "Qual o papel do CREFITO?", "a": "Fiscalizar e orientar o exercício profissional em sua região."}, {"cat": "Ética", "q": "Por que registrar a evolução?", "a": "Para documentar avaliações, decisões, intervenções e resultados do cuidado."}, {"cat": "Ética", "q": "O que é consentimento informado?", "a": "Participação da pessoa na decisão após receber informações compreensíveis."}, {"cat": "Concursos", "q": "Como organizar a revisão para concursos?", "a": "Combinar edital, questões, legislação, resumos objetivos e revisão espaçada por áreas."}];

/* ============================================================
   COMPONENTS


/* ============================================================
   COMPONENTS
   ============================================================ */

const SectionHeader = ({
  kicker, title, intro, align = "left",
}: { kicker: string; title: React.ReactNode; intro?: string; align?: "left" | "center"; }) => (
  <div className={`max-w-3xl mb-12 md:mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}>
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="h-px w-8 bg-ink" />
      <span className="text-[0.7rem] tracking-[0.25em] uppercase text-ink font-semibold">{kicker}</span>
    </div>
    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.98] tracking-tight text-balance text-ink">
      {title}
    </h2>
    {intro && <p className="mt-5 text-ink-light text-base md:text-lg leading-relaxed text-pretty">{intro}</p>}
  </div>
);

/* ============================================================
   PAGE
   ============================================================ */

const referenciasBibliograficas = [{"area": "Fundamentos", "title": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "citation": "AMERICAN OCCUPATIONAL THERAPY ASSOCIATION. Occupational therapy practice framework: domain and process — fourth edition. American Journal of Occupational Therapy, v. 74, supl. 2, 7412410010, 2020. DOI: 10.5014/ajot.2020.74S2001.", "use": "Consulta aos conceitos de ocupação, contexto, avaliação e processo terapêutico-ocupacional."}, {"area": "Atividades humanas", "title": "Atividades humanas na terapia ocupacional: construção e compromisso", "citation": "CARDINALLI, Isadora; SILVA, Carla Regina. Atividades humanas na terapia ocupacional: construção e compromisso. Cadernos Brasileiros de Terapia Ocupacional, v. 29, e2880, 2021.", "use": "Leitura sobre atividades humanas, conceitos e construção do conhecimento na Terapia Ocupacional brasileira."}, {"area": "Participação social", "title": "Participação social em terapia ocupacional: sobre o que estamos falando?", "citation": "SILVA, Ana Cristina Cardoso; OLIVER, Fátima Correa. Participação social em terapia ocupacional: sobre o que estamos falando? Cadernos Brasileiros de Terapia Ocupacional, v. 27, n. 4, p. 858–872, 2019. DOI: 10.4322/2526-8910.ctoAR1883.", "use": "Comparação de definições e referenciais utilizados para discutir participação social."}, {"area": "Cotidiano", "title": "As estruturas da vida cotidiana e a terapia ocupacional", "citation": "BEZERRA, Waldez Cavalcante; LOPES, Roseli Esquerdo; BASSO, Ana Carolina de Souza. As estruturas da vida cotidiana e a terapia ocupacional: tensionando limites e possibilidades no/do exercício profissional. Cadernos Brasileiros de Terapia Ocupacional, v. 30, e3031, 2022.", "use": "Discussão das dimensões técnicas, éticas e políticas da vida cotidiana e do exercício profissional."}, {"area": "Pesquisa e TCC", "title": "The PRISMA 2020 statement", "citation": "PAGE, Matthew J. et al. The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ, v. 372, n71, 2021. DOI: 10.1136/bmj.n71.", "use": "Diretriz de relato para revisões sistemáticas e organização transparente da seleção de estudos."}, {"area": "Análise da atividade", "title": "A análise de atividade e a construção do olhar do terapeuta ocupacional", "citation": "LIMA, Elizabeth Maria Freire de Araújo. A análise de atividade e a construção do olhar do terapeuta ocupacional. Revista de Terapia Ocupacional da Universidade de São Paulo, v. 15, n. 2, p. 42–48, 2004.", "use": "Leitura para discutir observação, análise de atividades e formação do raciocínio profissional."}];

const Index = () => {
  return (
    <div className="bg-paper min-h-dvh text-ink antialiased selection:bg-ink selection:text-paper">
      {/* Top bar */}
      <header className="border-b border-rule sticky top-0 z-40 bg-paper/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 bg-ink text-paper grid place-items-center font-display text-sm">TO</span>
            <div className="font-display text-lg leading-tight">
              Caderno <span className="italic font-light">de Terapia Ocupacional</span>
            </div>
          </div>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-ink text-paper text-xs tracking-[0.18em] uppercase font-semibold px-5 py-3 hover:bg-flora transition-colors"
          >
            Adquirir caderno
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* HERO */}
        <section className="relative px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center overflow-hidden">
          {/* fundo decorativo */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-vib-amber/30 blur-3xl -z-10" />
          <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-vib-magenta/25 blur-3xl -z-10" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-vib-teal/25 blur-3xl -z-10" />

          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-2.5 w-2.5 bg-vib-coral animate-pulse-soft" />
              <span className="text-[0.7rem] tracking-[0.3em] uppercase font-bold text-ink">Caderno digital · Terapia Ocupacional</span>
            </div>
            <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] leading-[0.95] md:leading-[0.88] tracking-tight text-ink text-balance mb-6 break-words hyphens-auto">
              Acadêmicos de <span className="italic font-light text-vib-magenta">Terapia Ocupacional.</span>
            </h1>
            <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] md:leading-[1.05] tracking-tight text-ink-light text-pretty mb-8">
              Caderno para a faculdade e a <span className="italic text-vib-teal">formação profissional.</span>
            </p>
            <p className="text-ink-light text-base md:text-lg text-pretty leading-relaxed max-w-[60ch] mb-8">
              Reúne, em um único caderno, cronograma de estudos e revisão por assunto, <strong>resumos prontos</strong> de Fundamentos da Terapia Ocupacional, Anatomia, Neuroanatomia, Desenvolvimento Humano, Análise da Atividade, AVD e AIVD, Desempenho Ocupacional, Avaliação Funcional, Integração Sensorial, Pediatria, Saúde Mental, Reabilitação Física, Gerontologia, Tecnologia Assistiva, Saúde Coletiva e Ética Profissional, <strong>flashcards</strong> por disciplina, banco de questões de ENADE, concursos públicos e residências multiprofissionais, diário de estágio com registro de atendimentos supervisionados, relatórios e discussão de casos práticos, TCC, Iniciação Científica, mestrado, doutorado e gestão da carreira para quem já é formado — portfólio, áreas de atuação, ética profissional e educação continuada.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5 mb-8">
              <div>
                <div className="font-display text-4xl md:text-5xl leading-none text-ink">Conteúdo</div>
                <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-ink-light mt-2">Resumos prontos</div>
              </div>
              <div className="h-14 w-px bg-rule hidden md:block" />
              <div>
                <div className="font-display text-4xl md:text-5xl leading-none text-ink">Revisão</div>
                <div className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-ink-light mt-2 max-w-[34ch]">Flashcards para faculdade, estágio e concursos</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                 {l:"Resumos prontos",c:"bg-vib-emerald text-white"},
                 {l:"Flashcards por disciplina",c:"bg-vib-coral text-white"},
                 {l:"Diário de estágio",c:"bg-vib-azure text-white"},
                 {l:"TCC",c:"bg-vib-violet text-white"},
                 {l:"Concursos Públicos",c:"bg-vib-magenta text-white"},
                 {l:"Carreira em Terapia Ocupacional",c:"bg-vib-amber text-ink"},
                 {l:"Fundamentos da Terapia Ocupacional",c:"bg-vib-teal text-white"},
                 {l:"História da Terapia Ocupacional",c:"bg-vib-violet text-white"},
                 {l:"Fisiologia Humana",c:"bg-vib-coral text-white"},
                 {l:"Neuroanatomia",c:"bg-vib-azure text-white"},
                 {l:"Anatomia Humana",c:"bg-vib-rose text-white"},
                 {l:"Análise da Atividade",c:"bg-vib-mustard text-ink"},
                 {l:"Desempenho Ocupacional",c:"bg-vib-magenta text-white"},
                 {l:"Ciclos da Vida",c:"bg-vib-emerald text-white"},
                 {l:"Pediatria",c:"bg-vib-emerald text-white"},
                 {l:"Avaliação Ocupacional",c:"bg-vib-coral text-white"},
                 {l:"AVD e AIVD",c:"bg-vib-azure text-white"},
                 {l:"Perfil Ocupacional",c:"bg-vib-rose text-white"},
                 {l:"Plano Terapêutico",c:"bg-vib-mustard text-ink"},
                 {l:"Reabilitação Física",c:"bg-vib-violet text-white"},
                 {l:"Terapia Ocupacional no Hospital",c:"bg-vib-coral text-white"},
                 {l:"Tecnologia Assistiva",c:"bg-vib-azure text-white"},
                 {l:"Saúde Mental",c:"bg-vib-rose text-white"},
                 {l:"Integração Sensorial",c:"bg-vib-mustard text-ink"},
                 {l:"Terapia Ocupacional na Infância",c:"bg-vib-magenta text-white"},
                 {l:"Brincar",c:"bg-vib-violet text-white"},
                 {l:"Desenvolvimento Infantil",c:"bg-vib-coral text-white"},
                 {l:"Contexto Escolar",c:"bg-vib-azure text-white"},
                 {l:"Gerontologia",c:"bg-vib-magenta text-white"},
                 {l:"Terapia Ocupacional Social",c:"bg-vib-amber text-ink"},
                 {l:"Acessibilidade",c:"bg-vib-teal text-white"},
                 {l:"Participação Social",c:"bg-vib-violet text-white"},
                 {l:"Adaptação de Atividades",c:"bg-vib-amber text-ink"},
                 {l:"Reabilitação Neurológica",c:"bg-vib-magenta text-white"},
                 {l:"Saúde Coletiva",c:"bg-vib-violet text-white"},
                 {l:"CAPS e RAPS",c:"bg-vib-coral text-white"},
                 {l:"Trabalho em Equipe",c:"bg-vib-azure text-white"},
                 {l:"Atuação no Território",c:"bg-vib-mustard text-ink"},
                 {l:"Ética no Cuidado",c:"bg-vib-magenta text-white"},
                 {l:"SUS",c:"bg-vib-emerald text-white"},
                 {l:"Cuidado Centrado na Pessoa",c:"bg-vib-emerald text-white"},
                 {l:"Atendimento Domiciliar",c:"bg-vib-coral text-white"},
                 {l:"Inclusão",c:"bg-vib-azure text-white"},
                 {l:"Atuação Interprofissional",c:"bg-vib-violet text-white"},
                 {l:"Terapeuta Ocupacional Autônomo",c:"bg-vib-amber text-ink"},
                 {l:"Código de Ética e CREFITO",c:"bg-vib-teal text-white"},
                 {l:"Legislação Profissional",c:"bg-vib-rose text-white"},
                 {l:"Publicações Científicas",c:"bg-vib-mustard text-ink"},
                 {l:"Pesquisa Aplicada",c:"bg-vib-magenta text-white"},
                 {l:"Consultório Próprio",c:"bg-vib-emerald text-white"},
                 {l:"Inclusão Social",c:"bg-vib-violet text-white"},
                 {l:"Reabilitação Cognitiva",c:"bg-vib-amber text-ink"},
                 {l:"Atenção Psicossocial",c:"bg-vib-teal text-white"},
                 {l:"Produção Acadêmica",c:"bg-vib-rose text-white"},
                 {l:"Pós-graduação",c:"bg-vib-magenta text-white"},
                 {l:"Áreas de Atuação",c:"bg-vib-emerald text-white"},
                 {l:"Educação Continuada",c:"bg-vib-emerald text-white"},
                 {l:"Prática Baseada em Evidências",c:"bg-vib-coral text-white"},
                 {l:"Preparação para Concursos",c:"bg-vib-azure text-white"},
                 ].map((t)=> <span key={t.l} className={`text-xs tracking-wider uppercase font-semibold px-3 py-1.5 ${t.c} hover:scale-105 transition-transform cursor-default`}>{t.l}</span>)}
            </div>
          </div>

          {/* Arte do caderno */}
          <div className="lg:col-span-5">
            


            {/* Marquee de tópicos abaixo do hero visual */}
            <div className="mt-8 -mx-5 md:-mx-10 overflow-hidden border-y border-ink/10 bg-ink text-paper py-3">
              <div className="flex gap-8 animate-marquee whitespace-nowrap font-display text-lg">
                {Array.from({length:2}).flatMap((_,k)=>[
                  "Fundamentos","História da Terapia Ocupacional","Fisiologia Humana","Neuroanatomia","TCC","Anatomia","Análise da Atividade",
                  "Avaliação Ocupacional","AVD e AIVD","Desempenho Ocupacional","Reabilitação","Saúde Mental","Pediatria","Tecnologia Assistiva",
                  "Integração Sensorial","Gerontologia","Terapia Ocupacional Social","Terapia Ocupacional Hospitalar","Participação Social","Saúde Pública","SUS",
                  "Portfólio","TCC (Trabalho de Conclusão)","Currículo","ENADE","Concursos","Estágio","Casos Práticos","Ética e CREFITO",
                ].map((w,i)=>(
                  <span key={`${k}-${i}`} className="flex items-center gap-3">
                    <span>{w}</span>
                    <span className="text-vib-coral">•</span>
                  </span>
                )))}
              </div>
            </div>
          </div>
        </section>

        <div dangerouslySetInnerHTML={{ __html: "<style>.nb-scene{max-width:1120px;margin:56px auto;padding:32px 24px;background:radial-gradient(ellipse at center,#f3e9e6,transparent 70%);perspective:1400px}.nb-book{position:relative;display:grid;grid-template-columns:1fr 1fr;max-width:880px;margin:auto;transform:rotate(-2deg);border-radius:14px;background:#be918f;padding:12px;box-shadow:0 24px 38px #51393226;animation:nb-float 7s ease-in-out infinite}.nb-page{position:relative;min-height:350px;padding:36px 36px 38px;background:repeating-linear-gradient(#fffdf8 0px,#fffdf8 30px,#e3ded8 31px,#fffdf8 32px);border-radius:5px;box-shadow:inset -10px 0 18px #6046320c;font-family:Georgia,serif;color:#403835}.nb-page+ .nb-page{border-left:1px solid #ded5cd;box-shadow:inset 10px 0 18px #6046320c}.nb-label{font:10px sans-serif;letter-spacing:3px;text-transform:uppercase;color:#86655e}.nb-page h3{font-size:clamp(20px,3vw,30px);line-height:1.25;margin:16px 0 24px;font-weight:normal}.nb-page h4{font-size:17px;margin:18px 0 7px}.nb-page p{font-size:14px;line-height:1.9;margin:0 0 12px}.nb-page mark{background:#ead3d9;padding:2px 5px;color:inherit}.nb-page .nb-green{background:#d9e6da}.nb-note{background:#f3e6be;padding:12px 16px!important;margin-top:20px!important;transform:rotate(2deg);box-shadow:3px 5px 9px #0000000c;font-style:italic}.nb-rings{position:absolute;left:50%;top:23px;bottom:23px;width:35px;transform:translateX(-50%);display:flex;flex-direction:column;justify-content:space-around;z-index:2}.nb-rings i{display:block;height:14px;border:3px solid #9a9b9d;border-right-color:#55565a;border-bottom-color:#5d5e60;border-radius:50%;box-shadow:0 2px 2px #0004;background:transparent}.nb-tab{position:absolute;right:-16px;top:70px;width:17px;height:48px;border-radius:0 5px 5px 0;background:#b9cfc5}.nb-corner{position:absolute;right:0;bottom:0;width:35px;height:35px;background:linear-gradient(135deg,#ece3d8 49%,#fffdf8 50%);transform-origin:bottom right;animation:nb-corner 7s ease-in-out infinite;border-radius:5px 0 5px 0}@keyframes nb-float{0%,100%{transform:rotate(-2deg) translateY(0)}50%{transform:rotate(-.5deg) translateY(-9px)}}@keyframes nb-corner{0%,65%,100%{transform:scale(1)}80%{transform:scale(1.35)}}@media(max-width:600px){.nb-scene{padding:28px 18px}.nb-book{padding:7px;transform:rotate(-1deg)}.nb-page{padding:22px 17px;min-height:340px}.nb-page h3{font-size:19px;margin:12px 0 20px}.nb-page h4{font-size:14px}.nb-page p{font-size:11px;line-height:1.8}.nb-label{font-size:8px;letter-spacing:1px}.nb-rings{width:23px}.nb-rings i{height:11px;border-width:2px}.nb-note{padding:8px!important}}@media(prefers-reduced-motion:reduce){.nb-book,.nb-corner{animation:none}}</style><div id=\"caderno-terapia\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral animado com resumo de Ocupações do cotidiano\"><div class=\"nb-book\" style=\"background:#be918f;animation-delay:-0s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>Ocupações do cotidiano</h3><h4><mark>Sentido</mark></h4><p>O que a pessoa valoriza em sua rotina.</p><h4><mark>Contexto</mark></h4><p>Onde, quando e com quem a atividade acontece.</p><h4><mark>Participação</mark></h4><p>O envolvimento nas situações da vida.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo · Revisão</span><h3>Pessoa · ambiente · ocupação</h3><h4><mark>Observe a rotina</mark></h4><p>Relacione escolhas, atividades e oportunidades.</p><h4><mark>Para lembrar</mark></h4><p>A mesma tarefa pode ter significados diferentes.</p><p class=\"nb-note\">Que ocupação é importante para a pessoa?</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />
{/* EXEMPLO DE FICHA DE ESTUDO — tabela visual */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule bg-surface">
          <SectionHeader
            kicker="Amostra • Ficha de estudo & revisão"
            title={<>Veja como chega <span className="italic text-vib-magenta">cada ficha de estudo</span> no seu caderno.</>}
            intro="Cada ficha vem pronta, organizada em blocos visuais por etapa do estudo — do conceito à aplicação prática. Role para baixo e veja o que o acadêmico de Terapia Ocupacional recebe."
          />

          {(() => {
            const mk = (headerTone: string, periodo: string, tema: string, titulo: string, palavras: string[], habilidade: string, aplicacao: string, prereq: string) => ({
              headerTone, periodo: `${periodo} • ${tema}`, titulo, unidade: `Tema: ${tema}`,
              palavras,
              materiais: ["Resumo da disciplina","Roteiro de estudo","Caso prático","Quadro comparativo","Questões comentadas"],
              competencias: [["Currículo", `${tema} · estudo por tema.`],["Habilidade", `${habilidade}.`],["Aplicação", `${aplicacao}.`],["Pré-requisito", `${prereq}.`]],
              competenciaExtra: "Conexão com outras disciplinas da graduação em Terapia Ocupacional.",
              etapas: [
                { tone: "bg-vib-azure", label: "Conceito", time: "10 min", desc: `Conceitos fundamentais de ${tema}.` },
                { tone: "bg-vib-violet", label: "Visualização", time: "20 min", desc: "Esquema visual e correlação com a prática profissional." },
                { tone: "bg-vib-rose", label: "Aplicação prática", time: "30 min", desc: `${habilidade} em um caso prático.` },
                { tone: "bg-vib-teal", label: "Treino", time: "15 min", desc: "Questões de revisão e um caso comentado." },
                { tone: "bg-vib-mustard", label: "Resumo", time: "5 min", desc: "Card-resumo e flashcards para revisão espaçada." },
              ],
              atividades: [
                { tone: "bg-vib-coral", num: "01", title: "Análise de caso", desc: `${habilidade} com base em um exemplo prático.` },
                { tone: "bg-vib-violet", num: "02", title: "Quadro de revisão", desc: "Comparar conceitos e etapas do tema estudado." },
                { tone: "bg-vib-emerald", num: "03", title: "Aplicação em Terapia Ocupacional", desc: `Resolver uma situação prática sobre ${tema}.` },
              ],
            });
            const fichas = [
              mk("bg-vib-emerald", "1º período", "Fundamentos da Terapia Ocupacional", "Ocupações, cotidiano e participação", ["ocupação humana", "atividades diárias"], "Compreender a relação entre ocupação e saúde", "Análise de rotina e participação", "Ciências humanas e biologia"),
              mk("bg-vib-azure", "1º período", "História da Terapia Ocupacional", "Da origem da profissão às práticas atuais", ["história profissional", "modelos de prática"], "Reconhecer marcos da profissão", "Comparação entre abordagens", "Sociologia e antropologia"),
              mk("bg-vib-coral", "2º período", "Fisiologia Humana", "Sistemas do corpo e movimento funcional", ["sistemas corporais", "movimento"], "Explicar os processos fisiológicos do corpo", "Análise de atividades do cotidiano", "Anatomia Humana"),
              mk("bg-vib-violet", "2º período", "Neuroanatomia", "Sistema nervoso e participação ocupacional", ["vias motoras", "sensibilidade"], "Relacionar funções neurológicas e desempenho", "Leitura de casos de reabilitação", "Anatomia e fisiologia"),
              mk("bg-vib-rose", "3º período", "Análise da Atividade", "Demandas, etapas e adaptação de tarefas", ["demandas da atividade", "graduação"], "Identificar componentes da atividade", "Análise prática de uma tarefa", "Fundamentos"),
              mk("bg-vib-mustard", "3º período", "Avaliação em Terapia Ocupacional", "Perfil ocupacional, entrevista e observação", ["perfil ocupacional", "observação"], "Avaliar a participação nas atividades diárias", "Entrevista e observação funcional", "Fundamentos e desenvolvimento"),
              mk("bg-vib-teal", "4º período", "Integração Sensorial", "Processamento sensorial e participação", ["modulação sensorial", "respostas sensoriais"], "Reconhecer diferenças no processamento sensorial", "Análise de situações do cotidiano", "Neuroanatomia"),
              mk("bg-vib-emerald", "4º período", "Terapia Ocupacional em Saúde Coletiva", "SUS, território e redes de cuidado", ["atenção primária", "participação social"], "Compreender o cuidado no território", "Intervenção em grupos e redes", "Saúde Pública"),
              mk("bg-vib-azure", "5º período", "Reabilitação Física", "Funcionalidade, movimento e atividades diárias", ["AVC", "membros superiores"], "Relacionar condições físicas às ocupações", "Raciocínio clínico em casos", "Neuroanatomia e avaliação"),
              mk("bg-vib-coral", "5º período", "Saúde Mental", "Cotidiano, vínculo e atenção psicossocial", ["CAPS", "projeto terapêutico"], "Planejar cuidados centrados na pessoa", "Construção de projeto terapêutico", "Saúde Coletiva e fundamentos"),
              mk("bg-vib-violet", "6º período", "Terapia Ocupacional em Pediatria", "Brincar, desenvolvimento e família", ["brincar", "desenvolvimento infantil"], "Apoiar participação nas ocupações da infância", "Orientação no contexto escolar", "Ciclos da Vida"),
              mk("bg-vib-rose", "7º período", "Tecnologia Assistiva e Acessibilidade", "Recursos, adaptações e participação", ["recursos assistivos", "acessibilidade"], "Selecionar recursos com a pessoa atendida", "Análise de barreiras e adaptações", "Avaliação e reabilitação"),
              mk("bg-vib-mustard", "9º período", "Estágio Supervisionado", "UBS, CAPS, hospital e escola", ["estágio", "supervisão e relatório"], "Atuar com supervisão e responsabilidade ética", "Estágio em serviços de saúde e educação", "Disciplinas profissionalizantes"),
              mk("bg-vib-teal", "10º período", "TCC e Carreira", "Pesquisa, metodologia, ética e defesa", ["TCC", "metodologia e ABNT/APA"], "Estruturar e defender o TCC", "Pesquisa e vida profissional", "Disciplinas do ciclo profissional"),
              mk("bg-vib-coral", "1º período", "Anatomia Humana", "Estruturas do corpo e movimentos", ["anatomia funcional", "movimento"], "Identificar estruturas corporais ligadas ao movimento", "Correlação entre estrutura e função", "Biologia"),
              mk("bg-vib-emerald", "1º período", "Biologia e Bioquímica", "Células, tecidos e processos vitais", ["células", "metabolismo"], "Explicar processos biológicos básicos", "Relação entre biologia e saúde", "Ensino médio"),
              mk("bg-vib-azure", "2º período", "Psicologia do Desenvolvimento", "Desenvolvimento humano e ciclos da vida", ["desenvolvimento humano", "ciclos da vida"], "Compreender etapas do desenvolvimento", "Observação de comportamentos no cotidiano", "Ciências humanas"),
              mk("bg-vib-violet", "2º período", "Sociologia e Antropologia", "Cultura, sociedade e cotidiano", ["cultura", "diversidade"], "Analisar contextos sociais e culturais", "Análise de hábitos e costumes", "Ciências humanas"),
              mk("bg-vib-rose", "3º período", "Metodologia Científica", "Pesquisa, métodos e escrita acadêmica", ["pesquisa", "ABNT"], "Planejar e redigir trabalhos acadêmicos", "Fichamento e revisão de literatura", "Redação e leitura crítica"),
              mk("bg-vib-mustard", "3º período", "Processos de Doença e Farmacologia", "Doenças, tratamentos e medicamentos", ["fisiopatologia", "farmacologia"], "Relacionar doenças e efeitos de medicamentos", "Leitura de casos clínicos", "Fisiologia Humana"),
              mk("bg-vib-teal", "4º período", "Ergonomia", "Postura, ambiente de trabalho e prevenção", ["ergonomia", "postura"], "Analisar ambientes e tarefas de trabalho", "Avaliação ergonômica de um posto", "Análise da Atividade"),
              mk("bg-vib-emerald", "5º período", "Terapia Ocupacional Social", "Projetos, comunidades e participação social", ["campo social", "comunidade"], "Planejar intervenções comunitárias", "Projeto em território e comunidade", "Saúde Coletiva"),
              mk("bg-vib-azure", "5º período", "Gerontologia", "Envelhecimento e qualidade de vida", ["envelhecimento", "idosos"], "Compreender o processo de envelhecimento", "Atividades adaptadas para idosos", "Ciclos da Vida"),
              mk("bg-vib-coral", "6º período", "Neuropsicologia e Reabilitação Cognitiva", "Funções cognitivas e reabilitação", ["cognição", "memória"], "Avaliar funções cognitivas na rotina", "Estratégias de estimulação cognitiva", "Neuroanatomia"),
              mk("bg-vib-violet", "6º período", "Terapia Ocupacional em Oncologia", "Cuidado, qualidade de vida e equipe", ["oncologia", "cuidados"], "Apoiar ocupações durante o tratamento", "Planejamento de atividades no hospital", "Reabilitação"),
              mk("bg-vib-rose", "7º período", "Terapia Ocupacional no Trabalho", "Saúde do trabalhador e retorno ao trabalho", ["saúde do trabalhador", "reabilitação profissional"], "Analisar a relação entre trabalho e saúde", "Simulação de retorno ao trabalho", "Ergonomia"),
              mk("bg-vib-mustard", "7º período", "Prática Baseada em Evidências", "Pesquisa aplicada e decisões clínicas", ["evidências", "decisão clínica"], "Fundamentar intervenções em evidências", "Leitura crítica de artigos", "Metodologia Científica"),
              mk("bg-vib-teal", "8º período", "Terapia Ocupacional em UTI", "Cuidados intensivos e funcionalidade", ["UTI", "mobilização precoce"], "Atuar em contextos de alta complexidade", "Protocolos de mobilização precoce", "Reabilitação Física"),
              mk("bg-vib-emerald", "8º período", "Inclusão e Acessibilidade Social", "Barreiras, cultura e participação", ["inclusão", "acessibilidade"], "Promover inclusão em diferentes contextos", "Análise de barreiras no território", "Tecnologia Assistiva"),
              mk("bg-vib-azure", "9º período", "Oficinas, Grupos e Dinâmicas", "Técnicas grupais e atividades terapêuticas", ["grupos", "oficinas"], "Conduzir oficinas e atividades em grupo", "Planejamento de uma oficina", "Análise da Atividade"),
              mk("bg-vib-coral", "9º período", "Gestão e Empreendedorismo", "Consultório, gestão e mercado de trabalho", ["gestão", "empreendedorismo"], "Planejar a carreira e serviços próprios", "Elaboração de plano de negócio", "Ética e legislação"),
              mk("bg-vib-violet", "9º período", "Ética Profissional e CREFITO", "Deveres, direitos e fiscalização", ["ética", "CREFITO"], "Aplicar o Código de Ética na prática", "Análise de dilemas éticos", "Fundamentos e legislação"),
              mk("bg-vib-rose", "10º período", "Cuidados Paliativos", "Conforto, dignidade e apoio à família", ["cuidados paliativos", "qualidade de vida"], "Cuidar de pessoas em fim de vida", "Plano de cuidado individualizado", "Oncologia e gerontologia"),
              mk("bg-vib-mustard", "10º período", "ENADE e Concursos", "Provas, simulados e revisão final", ["ENADE", "concursos"], "Revisar os conteúdos cobrados em provas", "Simulados e banco de questões", "Todas as disciplinas"),
            ];

            return (
              <div className="space-y-12">
                {fichas.map((ficha, idx) => (
                  <div key={idx} className="max-w-3xl mx-auto bg-paper border-2 border-ink rounded-lg overflow-hidden shadow-[8px_8px_0_0_hsl(var(--ink))]">
                    <div className={`${ficha.headerTone} text-paper px-5 py-4 flex items-center justify-between flex-wrap gap-2`}>
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Ficha {String(idx + 1).padStart(2, "0")} • Estudo + Revisão</span>
                      <span className="text-[11px] font-mono bg-paper/20 px-2 py-0.5 rounded">{ficha.periodo}</span>
                    </div>
                    <div className="px-5 py-5 border-b border-rule">
                      <h3 className="font-display text-2xl md:text-3xl leading-tight">{ficha.titulo}</h3>
                      <p className="text-sm text-ink-light mt-1">{ficha.unidade}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] border-b border-rule">
                      <div className="bg-vib-amber text-ink px-4 py-3 text-[11px] font-bold tracking-[0.18em] uppercase flex items-center">Palavras-chave</div>
                      <div className="px-4 py-3 flex flex-wrap gap-1.5">
                        {ficha.palavras.map((p) => (
                          <span key={p} className="text-xs px-2 py-0.5 bg-vib-amber/20 border border-vib-amber/40 rounded">{p}</span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] border-b border-rule">
                      <div className="bg-vib-coral text-paper px-4 py-3 text-[11px] font-bold tracking-[0.18em] uppercase flex items-center">Materiais</div>
                      <div className="px-4 py-3 flex flex-wrap gap-1.5">
                        {ficha.materiais.map((m) => (
                          <span key={m} className="text-xs px-2 py-0.5 bg-vib-coral/15 border border-vib-coral/40 rounded">{m}</span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] border-b border-rule">
                      <div className="bg-vib-emerald text-paper px-4 py-3 text-[11px] font-bold tracking-[0.18em] uppercase flex items-center">DCN/Currículo</div>
                      <div className="px-4 py-3 space-y-2">
                        {ficha.competencias.map(([cod, desc]) => (
                          <div key={cod} className="flex gap-2 text-xs">
                            <span className="font-mono font-bold bg-vib-emerald text-paper px-1.5 py-0.5 rounded shrink-0 h-fit">{cod}</span>
                            <span className="text-ink-light leading-snug">{desc}</span>
                          </div>
                        ))}
                        <p className="text-[11px] text-ink-light italic pt-1">{ficha.competenciaExtra}</p>
                      </div>
                    </div>

                    <div className="px-4 py-4 border-b border-rule bg-surface">
                      <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-ink-light mb-3">Bloco de estudo • ~80 minutos</p>
                      <div className="space-y-2">
                        {ficha.etapas.map((etapa) => (
                          <div key={etapa.label} className="flex items-stretch bg-paper border border-rule rounded overflow-hidden">
                            <div className={`${etapa.tone} w-2 shrink-0`} />
                            <div className="flex-1 px-3 py-2.5 flex flex-col sm:flex-row sm:items-center sm:gap-3">
                              <div className="flex items-center justify-between sm:w-44 sm:shrink-0">
                                <span className="font-bold text-sm">{etapa.label}</span>
                                <span className="text-[10px] font-mono text-ink-light bg-surface px-1.5 py-0.5 rounded">{etapa.time}</span>
                              </div>
                              <p className="text-xs text-ink-light leading-snug mt-1 sm:mt-0">{etapa.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="px-4 py-4">
                      <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-ink-light mb-3">3 atividades práticas (escolha 1)</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {ficha.atividades.map((a) => (
                          <div key={a.num} className="border border-ink rounded p-3 bg-paper">
                            <div className={`${a.tone} text-paper text-[10px] font-bold tracking-widest px-1.5 py-0.5 inline-block rounded`}>ATIV {a.num}</div>
                            <p className="font-display text-base mt-2 leading-tight">{a.title}</p>
                            <p className="text-xs text-ink-light mt-1 leading-snug">{a.desc}</p>
                            <p className="text-[10px] font-mono text-ink-light mt-2">⏱ 40–60 min</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-ink text-paper px-5 py-3 text-[11px] tracking-[0.15em] uppercase flex items-center justify-between flex-wrap gap-2">
                      <span>📓 Caderno de Terapia Ocupacional</span>
                      <span className="opacity-70">+ outras fichas como esta</span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

          <p className="text-center text-sm text-ink-light mt-10 max-w-2xl mx-auto">
            Cada ficha traz <span className="text-ink font-semibold">conceito, materiais, competência curricular, bloco de estudo, atividades práticas e flashcards</span> — pronta para usar na aula, na supervisão, no estágio ou na revisão pré-prova. Existem fichas de Fundamentos, História da Terapia Ocupacional, Fisiologia, Neuroanatomia, Análise da Atividade, Avaliação, Saúde Mental, Reabilitação, Pediatria, Tecnologia Assistiva, Estágio e TCC.
          </p>
        </section>

        {/* TAGS — todas as funcionalidades */}
        <section className="px-5 md:px-10 py-16 md:py-20 border-t border-rule">
          <SectionHeader
            kicker="Tudo que tem dentro"
            title={<>O que está dentro do caderno.</>}
            intro="Áreas e funcionalidades do caderno: estudos, revisão, disciplinas, resumos, flashcards, práticas, estágio, fundamentos, saúde mental e reabilitação, grandes áreas, avaliação acadêmica, seleções e carreira."
          />
          <div className="flex flex-wrap gap-2.5">
            {todasFuncionalidades.map((f) => (
              <span key={f.label} className={`inline-flex items-center px-3.5 py-1.5 text-sm font-medium border ${toneClasses[f.tone]}`}>
                {f.label}
              </span>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 text-xs font-semibold tracking-[0.15em] uppercase text-ink-light">
            {[
              ["Estudos","bg-vib-emerald"],
              ["Disciplinas","bg-vib-coral"],
              ["Revisão","bg-vib-azure"],
              ["Estágio","bg-vib-amber"],
              ["Grandes áreas","bg-vib-violet"],
              ["Avaliação","bg-vib-rose"],
              ["Carreira","bg-vib-magenta"],
            ].map(([n,c]) => (
              <span key={n} className="flex items-center gap-2"><span className={`h-2.5 w-2.5 ${c}`} />{n}</span>
            ))}
          </div>
        </section>

        {/* LISTA DE FUNCIONALIDADES */}
        <section className="px-5 md:px-10 py-16 md:py-20 border-t border-rule">
          <SectionHeader kicker="Lista de funcionalidades" title={<>Lista de funcionalidades.</>} />
          <p className="font-display text-xl md:text-2xl leading-[1.55] text-ink-light text-pretty">
            {funcionalidadesCorridas.map((f, i) => (
              <span key={f}>
                <span className="text-ink">{f}</span>
                {i < funcionalidadesCorridas.length - 1 && <span className="text-vib-coral mx-3">—</span>}
              </span>
            ))}
          </p>
        </section>
<div dangerouslySetInnerHTML={{ __html: "<div id=\"caderno-resumo-1\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral animado com resumo de Análise da atividade\"><div class=\"nb-book\" style=\"background:#a8bdb5;animation-delay:-1s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>Análise da atividade</h3><h4><mark>Sequência</mark></h4><p>Identifique as etapas da tarefa.</p><h4><mark>Demandas</mark></h4><p>Observe materiais, regras e habilidades envolvidas.</p><h4><mark>Ambiente</mark></h4><p>Registre facilitadores e barreiras.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo · Revisão</span><h3>Do começo ao fim</h3><h4><mark>Exemplo de estudo</mark></h4><p>Analise a organização de uma mochila para a faculdade.</p><h4><mark>Compare</mark></h4><p>O que muda quando o espaço ou o tempo muda?</p><p class=\"nb-note\">Descrever a tarefa e observar a pessoa são perspectivas complementares.</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />


        {/* AMOSTRA DO CADERNO */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule bg-surface">
          <SectionHeader
            kicker="Amostra do caderno"
            title={<>Amostra do caderno.</>}
            intro="Exemplos de áreas do caderno para o estudante de Terapia Ocupacional: cronograma, resumos, flashcards, diário de estágio, seleções e TCC. Cada bloco abaixo mostra como a área aparece dentro do caderno."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {amostraTabs.map((t, idx) => {
              const palette = ["bg-vib-emerald","bg-vib-coral","bg-vib-azure","bg-vib-violet","bg-vib-amber","bg-vib-magenta"];
              const accent = palette[idx % palette.length];
              return (
                <div key={t.id} className="border border-ink/15 bg-paper shadow-[0_18px_40px_-22px_hsl(var(--ink)/0.35)]">
                  <div className="flex items-center gap-3 px-5 py-3 border-b border-ink/10 bg-paper">
                    <span className="h-3 w-3 bg-vib-coral" />
                    <span className="h-3 w-3 bg-vib-amber" />
                    <span className="h-3 w-3 bg-vib-emerald" />
                    <span className="ml-3 text-xs text-ink-light">{t.side.toLowerCase().replace(/\s+/g, "-")}</span>
                  </div>
                  <div className="p-5 md:p-7">
                    <div className={`inline-block ${accent} text-white text-[0.65rem] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 mb-3`}>
                      {t.label}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight mb-1">{t.title}</h3>
                    <p className="text-ink-light text-sm mb-5">{t.subtitle}</p>
                    <div className="space-y-2.5">
                      {t.rows.map((r, i) => {
                        const c = palette[(idx + i) % palette.length];
                        return (
                          <div key={r.title} className="border border-ink/10 bg-paper p-3 flex gap-3">
                            <span className={`${c} h-9 w-1 shrink-0`} />
                            <div className="min-w-0 flex-1">
                              <div className="font-medium text-ink text-sm leading-snug">{r.title}</div>
                              <div className="text-xs text-ink-light mt-1">{r.meta}</div>
                            </div>
                            {r.tag && (
                              <span className={`shrink-0 self-start text-[0.6rem] tracking-wider uppercase font-semibold px-2 py-0.5 text-white ${c}`}>
                                {r.tag}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-sm text-ink-light text-center">
            Os registros mostrados são exemplos. Dentro do caderno, cada acadêmico e cada profissional cadastra, edita e consulta os próprios dados.
          </p>
        </section>

        {/* TCC — TRÊS MODELOS PRONTOS */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule">
          <SectionHeader
            kicker="TCC em Terapia Ocupacional"
            title={<>Três modelos de TCC prontos para seguir.</>}
            intro="O caderno traz três modelos de TCC feitos do zero — um para cada tipo de trabalho mais pedido nos cursos de Terapia Ocupacional. Cada modelo vem com tema exemplo, estrutura capítulo a capítulo, metodologia, análise estatística, normas ABNT e roteiro de defesa. Cada modelo orienta a elaboração do trabalho conforme o projeto e as exigências da instituição."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              { num: "Modelo 1", tipo: "Pesquisa quantitativa", tone: "bg-vib-emerald", titulo: "“Participação nas atividades diárias após AVC: estudo com adultos”", cap: [
                ["1. Introdução","Contextualização do tema, problema de pesquisa, hipóteses e relevância."], ["2. Referencial teórico","Desempenho ocupacional, reabilitação neurológica e estudos anteriores."], ["3. Método","Participantes, instrumentos de avaliação funcional, procedimentos e aspectos éticos (CEP)."], ["4. Análise de dados","Estatística descritiva, correlações e testes de comparação."], ["5. Resultados e discussão","Apresentação dos achados e diálogo com a literatura."], ["6. Conclusão e defesa","Limitações, implicações práticas e roteiro da apresentação final."],
              ], extra: "Inclui cronograma, modelo de TCLE, planilha de dados e roteiro de banca." },
              { num: "Modelo 2", tipo: "Pesquisa qualitativa", tone: "bg-vib-azure", titulo: "“Vivências de famílias sobre o brincar de crianças na primeira infância”", cap: [
                ["1. Contextualização","Cenário do tema, justificativa e objetivos da pesquisa."], ["2. Referencial teórico","Brincar, desenvolvimento infantil, família, rede de apoio e participação escolar."], ["3. Método","Entrevistas semiestruturadas, participantes, campo e ética em pesquisa."], ["4. Análise","Análise de conteúdo ou temática: categorias e núcleos de sentido."], ["5. Discussão","Interpretação das categorias à luz da literatura."], ["6. Conclusão","Síntese dos resultados, contribuições e propostas de intervenção."],
              ], extra: "Inclui roteiro de entrevista, matriz de categorias, TCLE e modelo de apresentação." },
              { num: "Modelo 3", tipo: "Revisão de literatura", tone: "bg-vib-violet", titulo: "“Tecnologia assistiva para autonomia nas atividades diárias: revisão integrativa”", cap: [
                ["1. Introdução","Relevância do tema, pergunta norteadora e objetivos."], ["2. Método","Bases de dados, descritores, critérios de inclusão e exclusão."], ["3. Seleção dos estudos","Fluxograma PRISMA e organização da amostra final."], ["4. Resultados","Quadro-síntese dos estudos, recursos assistivos e desfechos de participação."], ["5. Discussão","Comparação dos achados, lacunas e implicações para a prática."], ["6. Redação e defesa","Referências ABNT/APA, conclusão e apresentação à banca."],
              ], extra: "Inclui planilha de busca, fluxograma PRISMA, quadro-síntese e modelo de defesa." },
            ].map((m) => (
              <article key={m.num} className="border border-ink/15 bg-paper shadow-[0_18px_40px_-22px_hsl(var(--ink)/0.35)] flex flex-col">
                <div className={`p-5 ${m.tone} text-white`}>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-[0.65rem] tracking-[0.25em] uppercase font-semibold whitespace-nowrap">{m.num}</span>
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase bg-white/15 px-2 py-0.5">{m.tipo}</span>
                  </div>
                  <h3 className="font-display text-xl leading-snug">{m.titulo}</h3>
                </div>
                <div className="p-5 space-y-3 flex-1">
                  {m.cap.map(([t, d]) => (
                    <div key={t} className="flex gap-3">
                      <span className={`${m.tone} h-full w-1 shrink-0`} />
                      <div>
                        <div className="font-semibold text-ink text-sm leading-snug">{t}</div>
                        <div className="text-xs text-ink-light mt-0.5 leading-relaxed">{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-4 border-t border-ink/10 text-xs text-ink-light leading-relaxed">
                  {m.extra}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 border border-ink/15 bg-paper p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="font-display text-xl md:text-2xl text-ink leading-snug">
              Um roteiro para organizar cada etapa do seu TCC.
            </div>
            <div className="text-sm text-ink-light md:text-right">
              Tema exemplo, estrutura capítulo a capítulo, metodologia, análise de dados, ABNT/APA e defesa em cada um dos três modelos.
            </div>
          </div>
        </section>
<div dangerouslySetInnerHTML={{ __html: "<div id=\"caderno-resumo-2\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral animado com resumo de AVD e AIVD\"><div class=\"nb-book\" style=\"background:#b5aacb;animation-delay:-2s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>AVD e AIVD</h3><h4><mark>Autocuidado</mark></h4><p>Atividades básicas do dia a dia.</p><h4><mark>Vida na comunidade</mark></h4><p>Tarefas que apoiam a rotina em casa e fora dela.</p><h4><mark>Apoios</mark></h4><p>Pessoas, objetos e recursos presentes.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo · Revisão</span><h3>Cotidiano em contexto</h3><h4><mark>Autonomia</mark></h4><p>Possibilidade de decidir e participar das escolhas.</p><h4><mark>Independência</mark></h4><p>Realização de tarefas sem ajuda de outra pessoa.</p><p class=\"nb-note\">Uma pessoa pode ter autonomia e contar com apoio para executar uma tarefa.</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />


        {/* RESUMOS POR GRANDE ÁREA */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule">
          <SectionHeader
            kicker="Conteúdo de Terapia Ocupacional"
            title={<>Grandes áreas da Terapia Ocupacional.</>}
            intro="Resumos desenvolvidos por assunto, com explicação conceitual, exemplo acadêmico, distinções importantes e pergunta de revisão para relacionar teoria e estudo aplicado."
          />

          <div className="space-y-14">
            {resumosTO.map((tema) => (
              <div key={tema.area}>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5">
                  <div>
                    <div className="text-[0.7rem] tracking-[0.25em] uppercase text-ink-light mb-1">Área</div>
                    <h3 className="font-display text-3xl md:text-4xl leading-tight text-ink">{tema.area}</h3>
                    <p className="text-ink-light mt-1">{tema.desc}</p>
                  </div>
                  <span className={`${tema.bg} ${tema.text} text-xs tracking-[0.2em] uppercase font-semibold px-3 py-1.5 self-start md:self-end`}>
                    Cartões de resumo
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {tema.cards.map((c) => (
                    <article key={c.topic} className={`${tema.bg} ${tema.text} p-5 lift border border-ink/5 min-h-[220px] flex flex-col`}>
                      <div className="text-[0.65rem] tracking-[0.25em] uppercase opacity-80 mb-3">
                        Cartão de resumo
                      </div>
                      <h4 className="font-display text-xl leading-tight mb-2">{c.topic}</h4>
                      <div className="space-y-5 text-sm leading-relaxed">
  <div><h5 className="font-semibold text-xs uppercase tracking-wider mb-2">Conceito e explicação</h5><p>{c.resumo}</p></div>
  <div className="border-t border-white/30 pt-4"><h5 className="font-semibold text-xs uppercase tracking-wider mb-2">Exemplo de estudo</h5><p>{c.exemplo}</p></div>
  <div><h5 className="font-semibold text-xs uppercase tracking-wider mb-2">Distinção importante</h5><p>{c.distincao}</p></div>
  <div className="bg-black/10 p-4"><h5 className="font-semibold text-xs uppercase tracking-wider mb-2">Para revisar</h5><p>{c.revisao}</p></div>
  <p className="text-xs border-t border-white/30 pt-3">Leitura relacionada: {c.fonte}. Dados completos na seção de referências.</p>
</div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

<section id="referencias" className="px-5 md:px-10 py-16 md:py-24 border-t border-rule bg-surface">
  <SectionHeader kicker="Bibliografia para estudar e pesquisar" title={<>Referências bibliográficas completas.</>} intro="Obras, artigos e documentos para aprofundar os assuntos do caderno e organizar fichamentos, seminários e TCC. Cada cartão reúne os dados de identificação e a fonte de consulta. A bibliografia é indicada para leitura; não representa distribuição de livros integrais." />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  {referenciasBibliograficas.map((ref,i)=><article key={ref.title} className="bg-paper text-ink border border-ink/15 p-6 md:p-8 flex flex-col lift" data-reference-card="true">
    <span className={`${FC_TONES[i%FC_TONES.length].bg} ${FC_TONES[i%FC_TONES.length].text} text-xs font-semibold uppercase tracking-wider px-3 py-2 self-start mb-5`}>{ref.area}</span>
    <h3 className="font-display text-2xl leading-tight mb-4">{ref.title}</h3>
    <p className="text-sm leading-relaxed break-words" data-citation="true">{ref.citation}</p>
    <div className="mt-5 pt-4 border-t border-ink/10 text-sm text-ink-light leading-relaxed"><span className="block font-semibold text-ink mb-1">Como usar no estudo</span>{ref.use}</div>
    
  </article>)}
  </div>
</section>

        {/* FLASHCARDS INTERATIVOS */}
        <section className="relative px-5 md:px-10 py-16 md:py-24 border-t border-rule bg-surface overflow-hidden">
          <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-vib-amber/25 blur-3xl -z-10" />
          <div className="pointer-events-none absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-vib-teal/20 blur-3xl -z-10" />
          <div className="pointer-events-none absolute -bottom-16 right-1/4 h-56 w-56 rounded-full bg-vib-rose/20 blur-3xl -z-10" />

          <SectionHeader
            kicker="Revisão espaçada"
            title={<>Veja os flashcards.</>}
            intro="Cada cartão traz a pergunta e a resposta prontas, do jeito que aparecem em prova e em seleção — para revisar os temas de Terapia Ocupacional de um jeito leve."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
            {flashcardsTO.map((card, i) => {
              const tone = FC_TONES[i % FC_TONES.length];
              const tilts = [-1.4, 1.2, -0.8, 1.4, -1, 0.9];
              return (
                <div
                  key={i}
                  className={`relative ${i % 2 === 0 ? "animate-float-slow" : "animate-float-slower"} hover:[animation-play-state:paused] will-change-transform`}
                  style={
                    {
                      animationDelay: `${(i % 7) * 0.55}s`,
                      "--tw-rotate": `${tilts[i % tilts.length]}deg`,
                    } as React.CSSProperties
                  }
                >
                  {/* Halo luminoso atrás do cartão */}
                  <div
                    className={`absolute -inset-1.5 rounded-[1.4rem] ${tone.bg} opacity-50 blur-xl animate-pulse-soft`}
                    style={{ animationDelay: `${(i % 5) * 0.8}s` }}
                  />
                  <article
                    className={`group relative h-56 md:h-60 ${tone.bg} ${tone.text} rounded-2xl border-2 border-paper/70 p-4 flex flex-col overflow-hidden shadow-[0_16px_34px_-16px_hsl(var(--ink)/0.55)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.04] cursor-default`}
                  >
                    {/* Textura de bolinhas */}
                    <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(hsl(0_0%_100%/0.2)_1px,transparent_1px)] [background-size:10px_10px]" />
                    {/* Brilho diagonal que acende no hover */}
                    <div className="pointer-events-none absolute -inset-x-10 -top-1/2 h-[200%] rotate-12 [background:linear-gradient(90deg,transparent_35%,hsl(0_0%_100%/0.16)_50%,transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="relative self-start text-[0.55rem] md:text-[0.6rem] tracking-[0.18em] uppercase font-bold px-2.5 py-1 rounded-full bg-paper/90 text-ink shadow-sm">
                      {card.cat}
                    </span>
                    <p className="relative mt-2.5 font-display text-sm md:text-base leading-snug">{card.q}</p>
                    <span className="relative mt-3 mb-1.5 h-px w-10 bg-current opacity-40" />
                    <p className="relative text-[0.66rem] md:text-[0.72rem] leading-snug opacity-95">{card.a}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </section>
<div dangerouslySetInnerHTML={{ __html: "<div id=\"caderno-resumo-3\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral animado com resumo de Perfil ocupacional\"><div class=\"nb-book\" style=\"background:#c5a286;animation-delay:-3s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>Perfil ocupacional</h3><h4><mark>Papéis</mark></h4><p>Estudante, trabalhador, cuidador e outros papéis.</p><h4><mark>Rotinas</mark></h4><p>Como o dia e a semana se organizam.</p><h4><mark>Interesses</mark></h4><p>Atividades que a pessoa valoriza.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo · Revisão</span><h3>História e prioridades</h3><h4><mark>Escuta</mark></h4><p>Registre a prioridade expressa pela própria pessoa.</p><h4><mark>Contexto</mark></h4><p>Relacione demandas e oportunidades reais.</p><p class=\"nb-note\">Pergunte: o que você gostaria de fazer ou retomar?</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />


        {/* DISCIPLINAS DA GRADE */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule">
          <SectionHeader
            kicker="Disciplinas · Terapia Ocupacional"
            title={<>Grade do curso, do 1º ao último período.</>}
            intro="O caderno reúne, em uma única área, as disciplinas da graduação em Terapia Ocupacional por ciclo e área de estudo. Cada disciplina aparece com período, ementa, bibliografia base, principais avaliações e os tópicos mais cobrados em ENADE, concursos públicos e residências multiprofissionais. As disciplinas ficam vinculadas aos resumos e flashcards correspondentes."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
            {[
              {n:"1º ao 4º período",t:"Fundamentos, desenvolvimento e avaliação",d:"Fundamentos da Terapia Ocupacional, História da profissão, Anatomia, Fisiologia, Neuroanatomia e Análise da Atividade — bases da formação.",c:"bg-vib-coral"},
              {n:"5º ao 8º período",t:"Intervenção, saúde mental e áreas aplicadas",d:"Avaliação Ocupacional, Saúde Mental, Pediatria, Reabilitação, Tecnologia Assistiva, Gerontologia e Saúde Coletiva — com práticas e estágios.",c:"bg-vib-azure"},
              {n:"Etapa de conclusão",t:"Estágio, TCC e carreira",d:"Estágios em UBS, CAPS, hospital, escola e reabilitação, TCC, portfólio, revisão ENADE, concursos e preparação para a vida profissional.",c:"bg-vib-emerald"},
            ].map((x) => (
              <article key={x.n} className={`${x.c} text-white p-7 lift border border-ink/5 min-h-[220px] flex flex-col`}>
                <div className="text-[0.65rem] tracking-[0.25em] uppercase opacity-90 mb-3">{x.n}</div>
                <h3 className="font-display text-3xl leading-tight mb-2">{x.t}</h3>
                <p className="text-sm leading-relaxed opacity-95 mt-auto">{x.d}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              ["Disciplinas por período","Grade de Terapia Ocupacional por período"],
              ["Ementas e bibliografia","Para cada disciplina obrigatória"],
              ["Grandes áreas","Fundamentos, Saúde Mental, Pediatria, Reabilitação, Tecnologia Assistiva e Saúde Coletiva"],
              ["Avaliações típicas","Prova, seminário, estudo de caso e relatório de prática"],
              ["Pré-requisitos","O que estudar antes de cada matéria"],
              ["Mais cobrado em prova","ENADE e concursos públicos de Terapia Ocupacional"],
              ["Erros comuns","Confusões clássicas comentadas"],
              ["Trilha integrada","Disciplina → resumo → flashcards → questões"],
            ].map(([t,d]) => (
              <div key={t} className="border border-ink/15 p-4 lift bg-paper">
                <div className="font-semibold text-ink leading-snug">{t}</div>
                <div className="text-sm text-ink-light mt-1">{d}</div>
              </div>
            ))}
          </div>

          {/* Disciplinas mapeadas — amostra extensa */}
          <div className="mt-12">
            <div className="text-[0.7rem] tracking-[0.25em] uppercase font-semibold text-ink-light mb-4">
              Disciplinas mapeadas no caderno (amostra)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {[
                {c:"TO101",d:"Fundamentos da Terapia Ocupacional — ocupações, cotidiano e participação.",t:"1º período · Terapia Ocupacional",tone:"bg-vib-coral"},
                {c:"TO102",d:"História da Terapia Ocupacional — origens, modelos e práticas.",t:"1º período · Terapia Ocupacional",tone:"bg-vib-emerald"},
                {c:"TO103",d:"Anatomia Humana — estruturas do corpo e movimento funcional.",t:"2º período · Terapia Ocupacional",tone:"bg-vib-azure"},
                {c:"TO104",d:"Neuroanatomia — sistema nervoso, vias e funções.",t:"2º período · Terapia Ocupacional",tone:"bg-vib-violet"},
                {c:"TO105",d:"Desenvolvimento Humano — infância, vida adulta e envelhecimento.",t:"3º período · Terapia Ocupacional",tone:"bg-vib-rose"},
                {c:"TO106",d:"Avaliação Ocupacional — entrevista, perfil e observação funcional.",t:"3º período · Terapia Ocupacional",tone:"bg-vib-magenta"},
                {c:"TO107",d:"Análise da Atividade — demandas, etapas e adaptações.",t:"4º período · Terapia Ocupacional",tone:"bg-vib-amber"},
                {c:"TO108",d:"Terapia Ocupacional em Saúde Coletiva — SUS, território e redes.",t:"4º período · Terapia Ocupacional",tone:"bg-vib-teal"},
                {c:"TO109",d:"Integração Sensorial — processamento e participação.",t:"5º período · Terapia Ocupacional",tone:"bg-vib-coral"},
                {c:"TO110",d:"Saúde Mental — cotidiano e atenção psicossocial.",t:"5º período · Terapia Ocupacional",tone:"bg-vib-emerald"},
                {c:"TO111",d:"Pediatria — brincar, família e contexto escolar.",t:"6º período · Terapia Ocupacional",tone:"bg-vib-azure"},
                {c:"TO112",d:"Reabilitação Física — funcionalidade, AVD e autonomia.",t:"6º período · Terapia Ocupacional",tone:"bg-vib-violet"},
                {c:"TO113",d:"Tecnologia Assistiva — recursos, adaptações e acessibilidade.",t:"7º período · Terapia Ocupacional",tone:"bg-vib-rose"},
                {c:"TO114",d:"Ética Profissional — Código de Ética, COFFITO e CREFITO.",t:"8º período · Terapia Ocupacional",tone:"bg-vib-magenta"},
                {c:"TO115",d:"TCC — pesquisa, metodologia, análise de dados e defesa.",t:"10º período · Terapia Ocupacional",tone:"bg-vib-amber"},
                {c:"TO116",d:"Estágio Supervisionado — UBS, CAPS, hospital e escola.",t:"9º ao 10º período · Terapia Ocupacional",tone:"bg-vib-teal"},
              ].map((h) => (
                <div key={h.c} className="border border-ink/15 bg-paper p-3 flex gap-3 lift">
                  <span className={`${h.tone} text-white text-[0.65rem] tracking-wider uppercase font-semibold px-2 py-1 h-fit shrink-0`}>{h.c}</span>
                  <div className="min-w-0">
                    <div className="text-sm text-ink leading-snug">{h.d}</div>
                    <div className="text-[0.65rem] tracking-[0.2em] uppercase text-ink-light mt-1 font-semibold">{h.t}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <SectionHeader kicker="Para quem é" title={<>Para quem é o caderno.</>} />
            </div>
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["Acadêmicos de Terapia Ocupacional (1º ao último período)", "Para organizar cronograma, manter resumos e flashcards, estudar casos práticos e treinar para ENADE e concursos.", "bg-vib-emerald"],
                ["Acadêmicos em práticas e estágio", "Modelos de avaliação ocupacional, plano terapêutico, registro de atendimento, relatório de estágio e plano de supervisão — tudo pronto para compor o portfólio.", "bg-vib-coral"],
                ["Candidatos a concursos públicos de Terapia Ocupacional", "Editais, provas anteriores comentadas, legislação, saúde pública, currículo e cronogramas para revisão das grandes áreas.", "bg-vib-azure"],
                ["Terapeutas ocupacionais formados", "Materiais de revisão, casos práticos, planos de intervenção, documentos, ética e educação continuada para diferentes áreas de atuação.", "bg-vib-violet"],
                ["Mestrandos, doutorandos e pesquisadores", "Áreas para seleção stricto sensu, bolsas, créditos, qualificação, defesa, publicações e pós-doutorado.", "bg-vib-rose"],
                ["Especializandos e profissionais em educação continuada", "Trilhas para Saúde Mental, Pediatria, Reabilitação Física, Gerontologia, Tecnologia Assistiva, Saúde Coletiva e outras áreas.", "bg-vib-amber"],
              ].map(([t,d,c]) => (
                <div key={t} className="border border-ink/10 bg-paper p-5 lift flex gap-4">
                  <span className={`${c} h-12 w-1.5 shrink-0`} />
                  <div>
                    <div className="font-semibold text-ink">{t}</div>
                    <p className="text-sm text-ink-light mt-1 leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOUR VISUAL */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule bg-surface">
          <SectionHeader
            kicker="Por dentro do caderno"
            title={<>Páginas do caderno.</>}
            intro="Páginas do caderno, com descrição do que cada uma permite registrar e consultar."
          />

          <div className="space-y-16 md:space-y-24">
            {tourPaginas.map((p, i) => (
              <article key={p.title} className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>figure]:order-2" : ""}`}>
                <figure className="md:col-span-7 border border-ink/15 bg-paper shadow-[0_24px_60px_-30px_hsl(var(--ink)/0.4)]">
                  <div className="flex items-center gap-3 px-5 py-3 border-b border-ink/10 bg-paper">
                    <span className="h-3 w-3 bg-vib-coral" />
                    <span className="h-3 w-3 bg-vib-amber" />
                    <span className="h-3 w-3 bg-vib-emerald" />
                    <span className="ml-3 text-xs text-ink-light truncate">{p.mock.crumb}</span>
                  </div>
                  <div className="p-5 md:p-7 bg-paper">
                    <div className={`inline-block ${mockToneBg[p.mock.accent]} text-white text-[0.65rem] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 mb-3`}>
                      {p.mock.side}
                    </div>
                    <h4 className="font-display text-2xl md:text-3xl text-ink leading-tight mb-1">{p.mock.title}</h4>
                    <p className="text-ink-light text-sm mb-5">{p.mock.subtitle}</p>
                    <div className="space-y-2.5">
                      {p.mock.rows.map((r, ri) => {
                        const tone = mockTonePalette[(mockTonePalette.indexOf(p.mock.accent) + ri) % mockTonePalette.length];
                        const c = mockToneBg[tone];
                        return (
                          <div key={r.title} className="border border-ink/10 bg-paper p-3 flex gap-3 lift">
                            <span className={`${c} h-9 w-1 shrink-0`} />
                            <div className="min-w-0 flex-1">
                              <div className="font-medium text-ink text-sm leading-snug">{r.title}</div>
                              <div className="text-xs text-ink-light mt-1">{r.meta}</div>
                            </div>
                            {r.tag && (
                              <span className={`shrink-0 self-start text-[0.6rem] tracking-wider uppercase font-semibold px-2 py-0.5 text-white ${c}`}>
                                {r.tag}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <figcaption className="text-right px-5 py-2 border-t border-ink/10 text-[0.7rem] tracking-[0.2em] uppercase text-ink-light font-semibold">
                    {p.kicker}
                  </figcaption>
                </figure>
                <div className="md:col-span-5">
                  <div className="text-[0.7rem] tracking-[0.25em] uppercase text-ink-light font-semibold mb-3">{p.kicker}</div>
                  <h3 className="font-display text-3xl md:text-4xl leading-[1.05] text-ink mb-4 text-balance">{p.title}</h3>
                  <p className="text-ink-light text-base md:text-lg leading-relaxed text-pretty">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
<div dangerouslySetInnerHTML={{ __html: "<div id=\"caderno-resumo-4\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral animado com resumo de Brincar e participação\"><div class=\"nb-book\" style=\"background:#b6bd92;animation-delay:-4s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>Brincar e participação</h3><h4><mark>Interesses</mark></h4><p>Observe escolhas e iniciativas da criança.</p><h4><mark>Materiais</mark></h4><p>Objetos e recursos fazem parte da experiência.</p><h4><mark>Relações</mark></h4><p>Brincar pode envolver outras crianças e adultos.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo · Revisão</span><h3>Ocupações da infância</h3><h4><mark>Ambiente</mark></h4><p>O espaço oferece diferentes oportunidades.</p><h4><mark>Significado</mark></h4><p>A experiência vai além do produto final.</p><p class=\"nb-note\">Compare a mesma brincadeira em casa e na escola.</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />


        {/* BENEFÍCIOS REAIS */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule">
          <SectionHeader kicker="O que muda na sua rotina" title={<>Benefícios práticos no dia a dia.</>} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              ["Centralização","Estudos, disciplinas, grandes áreas, casos práticos, estágio, TCC, portfólio e carreira ficam num único sistema, acessível pelo navegador.","bg-vib-emerald"],
              ["Estudo guiado por revisão espaçada","Flashcards e resumos prontos, com algoritmo SM-2 que programa o que revisar e quando — você não monta o material do zero.","bg-vib-coral"],
              ["Estágio sem bagunça","Diário por estágio, registro de atendimentos, supervisões, relatório, feedback do supervisor e portfólio — modelos editáveis e reutilizáveis.","bg-vib-azure"],
              ["Treino para Concursos e ENADE","Provas anteriores comentadas, simulados por instituição e conteúdo programático mapeado por grande área e edital.","bg-vib-violet"],
              ["Conteúdo de Terapia Ocupacional organizado","Fundamentos, Neuroanatomia, Análise da Atividade, Reabilitação, Saúde Mental, Tecnologia Assistiva e Ética com resumo e erros comuns.","bg-vib-rose"],
              ["Carreira registrada","Áreas para Iniciação Científica, TCC, portfólio, concursos, mestrado, doutorado, publicações, áreas de atuação e educação continuada.","bg-vib-amber"],
            ].map(([t,d,c]) => (
              <article key={t} className="bg-paper border border-ink/10 p-6 lift">
                <span className={`${c} text-white text-xs tracking-[0.2em] uppercase font-semibold px-2.5 py-1 inline-block mb-4`}>{t.split(" ")[0]}</span>
                <h3 className="font-display text-2xl text-ink leading-tight mb-2">{t}</h3>
                <p className="text-ink-light leading-relaxed">{d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ESTUDO PARA CONCURSOS & CARREIRA */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule bg-surface">
          <SectionHeader
            kicker="Concursos & Carreira"
            title={<>Organização para concursos públicos de Terapia Ocupacional e ENADE.</>}
            intro="Áreas do caderno voltadas para quem está se preparando para concursos de prefeituras, hospitais e órgãos públicos, residências multiprofissionais, ENADE ou pós-graduação: análise de edital, conteúdo programático, simulados por instituição, casos práticos e currículo organizado."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
            {[
              {n:"01",t:"Análise de edital",d:"Editais de prefeituras, hospitais, tribunais e órgãos públicos, com grandes áreas, pesos, etapas e bibliografia mapeados.",c:"bg-vib-magenta"},
              {n:"02",t:"Provas anteriores",d:"Questões comentadas de Fundamentos, Avaliação Ocupacional, Saúde Mental, Reabilitação, Legislação e Ética.",c:"bg-vib-coral"},
              {n:"03",t:"Conteúdo programático",d:"Grandes áreas com resumos, temas mais cobrados, diretrizes essenciais e erros frequentes — no mesmo formato dos cartões de resumo.",c:"bg-vib-emerald"},
              {n:"04",t:"Banco de questões",d:"Questões objetivas e casos práticos indexados por instituição e tema, com gabarito comentado.",c:"bg-vib-azure"},
              {n:"05",t:"Cronograma de estudos",d:"Trilha semanal por edital, com revisão espaçada, caderno de erros e marcação de tópicos dominados.",c:"bg-vib-violet"},
              {n:"06",t:"Currículo & entrevista",d:"Currículo organizado, checklist de documentos e roteiro para entrevistas e análise curricular.",c:"bg-vib-amber"},
            ].map((x) => (
              <article key={x.n} className="bg-paper border border-ink/10 p-6 lift">
                <div className={`${x.c} text-white inline-block text-[0.65rem] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 mb-3`}>{x.n}</div>
                <h3 className="font-display text-2xl text-ink leading-tight mb-2">{x.t}</h3>
                <p className="text-sm text-ink-light leading-relaxed">{x.d}</p>
              </article>
            ))}
          </div>

          {/* Demo: estudo de caso */}
          <div className="border border-ink/15 bg-paper shadow-[0_24px_60px_-30px_hsl(var(--ink)/0.4)]">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-ink/10 bg-surface"><span className="h-3 w-3 bg-vib-coral" /><span className="h-3 w-3 bg-vib-amber" /><span className="h-3 w-3 bg-vib-emerald" /><span className="ml-3 text-xs text-ink-light">concursos · caso-prático · reabilitação</span></div>
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><div className="text-[0.65rem] tracking-[0.25em] uppercase text-ink-light mb-2">Estudo de caso</div><h4 className="font-display text-2xl mb-3">Pessoa após AVC com dificuldade para realizar atividades de autocuidado</h4><ul className="text-sm text-ink-light space-y-2"><li><strong className="text-ink">Disciplinas:</strong> Neuroanatomia + Reabilitação Física</li><li><strong className="text-ink">Pessoa:</strong> adulto de 52 anos com fraqueza em um lado do corpo e dificuldade para vestir-se</li><li><strong className="text-ink">Demandas:</strong> retomar o autocuidado com segurança e participação da família</li><li><strong className="text-ink">Pré-requisitos:</strong> entrevista ocupacional, análise da atividade e ética profissional</li></ul></div>
              <div><div className="text-[0.65rem] tracking-[0.25em] uppercase text-ink-light mb-2">Solução esperada</div><ol className="text-sm space-y-2 list-decimal pl-5 text-ink-light"><li><strong className="text-ink">Acolhimento:</strong> escutar prioridades da pessoa e de sua família, identificando ocupações significativas.</li><li><strong className="text-ink">Avaliação:</strong> observar o desempenho nas AVD, capacidades e barreiras do ambiente.</li><li><strong className="text-ink">Intervenção:</strong> construir metas de autocuidado e adaptar tarefas e recursos conforme a necessidade.</li><li><strong className="text-ink">Documentação:</strong> registrar avaliação, plano terapêutico e evolução conforme o Código de Ética.</li></ol></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule bg-surface">
          <SectionHeader
            kicker="Perguntas frequentes"
            title={<>Perguntas frequentes.</>}
            intro="Respostas sobre o que é o caderno, como funciona, para quem serve, o que está incluído, formas de acesso, suporte e reembolso."
          />
          <Accordion type="single" collapsible className="border-t border-ink/15 bg-paper">
            {faqItems.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="border-b border-ink/10 px-5">
                <AccordionTrigger className="font-display text-xl md:text-2xl text-ink text-left py-6 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink-light text-base md:text-lg leading-relaxed text-pretty pb-6 pr-8">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
        </section>
<div dangerouslySetInnerHTML={{ __html: "<div id=\"caderno-resumo-5\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral animado com resumo de Acessibilidade\"><div class=\"nb-book\" style=\"background:#a6bacb;animation-delay:-5s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>Acessibilidade</h3><h4><mark>Espaço</mark></h4><p>Percursos e organização do ambiente.</p><h4><mark>Informação</mark></h4><p>Clareza e possibilidades de comunicação.</p><h4><mark>Atividade</mark></h4><p>Materiais, regras e formas de participação.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo · Revisão</span><h3>Barreiras e facilitadores</h3><h4><mark>Olhar para o contexto</mark></h4><p>Uma dificuldade não pertence necessariamente apenas à pessoa.</p><h4><mark>Participação</mark></h4><p>Estar presente e participar são situações diferentes.</p><p class=\"nb-note\">Que barreira pode ser identificada em um exemplo de rotina universitária?</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />


        <div dangerouslySetInnerHTML={{ __html: "<div id=\"caderno-resumo-6\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral animado com resumo de Diário de estágio\"><div class=\"nb-book\" style=\"background:#be918f;animation-delay:-6s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>Diário de estágio</h3><h4><mark>Contexto</mark></h4><p>Onde ocorreu a atividade acompanhada.</p><h4><mark>Participação</mark></h4><p>O que foi observado e o que foi realizado.</p><h4><mark>Aprendizagem</mark></h4><p>Relação com o conteúdo da disciplina.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo · Revisão</span><h3>Registro e reflexão</h3><h4><mark>Supervisão</mark></h4><p>Registre dúvidas e devolutivas discutidas.</p><h4><mark>Escrita objetiva</mark></h4><p>Separe relato, observação e interpretação.</p><p class=\"nb-note\">Finalize: o que aprendi e o que preciso estudar mais?</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />
{/* CHECKOUT */}
        <section className="px-5 md:px-10 py-20 md:py-28 border-t border-rule bg-flora-deep text-paper">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-px w-8 bg-paper" />
                <span className="text-[0.7rem] tracking-[0.25em] uppercase font-semibold">Resumo da entrega</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.98] tracking-tight text-balance mb-3">
                Tudo que está dentro do caderno.
              </h2>
              <p className="text-paper/70 text-base md:text-lg leading-relaxed mb-8">
                O que o acadêmico e o profissional formado recebem ao adquirir o caderno, organizado por tópico. Acesso enviado ao e-mail logo após a confirmação do pagamento.
              </p>

              <div className="space-y-7">
                  {[
                    { bullet: "01", color: "bg-vib-emerald", title: "Estudos e revisão", items: ["Cronograma semestral, semanal e calendário acadêmico", "Sistema de revisão espaçada (revisão por tema)", "Flashcards prontos por disciplina", "Resumos por disciplina", "Mapas mentais e mapas conceituais", "Pomodoro, bloco de foco e diário de estudos", "Trilha do ciclo básico ao estágio"] },
                    { bullet: "02", color: "bg-vib-coral", title: "Disciplinas (Terapia Ocupacional)", items: ["Grade do 1º ao 10º período com ementas e bibliografia", "Fundamentos, História da Terapia Ocupacional, Anatomia e Neuroanatomia", "Análise da Atividade, Desenvolvimento Humano e Avaliação Ocupacional", "Saúde Mental, Reabilitação Física, Pediatria e Tecnologia Assistiva", "Pré-requisitos, avaliações e tópicos mais cobrados"] },
                    { bullet: "03", color: "bg-vib-azure", title: "Práticas e estágio em Terapia Ocupacional", items: ["Diário de UBS, CAPS, hospital, reabilitação e escola", "Roteiros de entrevista ocupacional e plano terapêutico", "Planos de estágio, supervisões e plano de aprendizagem", "Feedback do supervisor e relatório final", "Casos práticos comentados por área", "Portfólio acadêmico organizado"] },
                    { bullet: "04", color: "bg-vib-violet", title: "Grandes áreas da Terapia Ocupacional", items: ["Fundamentos — ocupação, desempenho e atividades da vida diária", "Neuroanatomia e Reabilitação — funcionalidade e adaptação de tarefas", "Avaliação — perfil ocupacional, observação e objetivos", "Tecnologia Assistiva — recursos, acessibilidade e autonomia", "Saúde Mental, Pediatria, Gerontologia e contexto escolar", "Saúde Coletiva, SUS, CAPS e Ética"] },
                    { bullet: "05", color: "bg-vib-rose", title: "Avaliação acadêmica", items: ["Banco de questões ENADE, concursos públicos e residências multiprofissionais", "Indexação por disciplina, tema, grande área e instituição", "Gabaritos comentados e simulados completos", "Treino de raciocínio terapêutico-ocupacional com casos comentados"] },
                    { bullet: "06", color: "bg-vib-amber", title: "Profissional formado", items: ["Revisão e atualização por área de atuação", "Modelos de atendimento, registros e educação continuada", "Prática baseada em evidências e tomada de decisão centrada na pessoa", "Ética profissional e resoluções do COFFITO e CREFITO", "Planejamento de carreira, portfólio e consultório"] },
                    { bullet: "07", color: "bg-vib-magenta", title: "Pesquisa e carreira acadêmica", items: ["TCC em Terapia Ocupacional (cronograma, ABNT/APA e metodologia)", "Iniciação Científica, monitorias, grupos de pesquisa e extensão", "Mestrado, doutorado, bolsas e publicações", "Pós-doutorado e intercâmbio acadêmico", "Áreas de atuação e educação continuada", "Concursos públicos, portfólio e currículo"] },
                  ].map((b) => (
                  <div key={b.bullet} className="border-l-2 border-paper/15 pl-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`${b.color} text-white text-[0.65rem] tracking-[0.2em] uppercase font-semibold px-2.5 py-1`}>{b.bullet}</span>
                      <h3 className="font-display text-2xl md:text-3xl text-paper leading-tight">{b.title}</h3>
                    </div>
                    <ul className="text-paper/75 text-sm md:text-base space-y-1.5 mt-2">
                      {b.items.map((it) => (
                        <li key={it} className="flex gap-2 leading-relaxed">
                          <span className="text-vib-emerald shrink-0">›</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="bg-paper text-ink p-5 sm:p-6 md:p-8 shadow-[0_30px_80px_-30px_hsl(0_0%_0%/0.6)]">
                <div className="text-[0.6rem] md:text-[0.65rem] tracking-[0.16em] md:tracking-[0.25em] uppercase font-semibold text-ink-light mb-3">Caderno completo · pagamento único</div>
                <h3 className="font-display text-2xl md:text-3xl leading-tight mb-1">Caderno de Terapia Ocupacional</h3>
                <p className="text-ink-light text-xs md:text-sm leading-relaxed mb-5 md:mb-6">Acesso enviado ao seu e-mail após a confirmação do pagamento.</p>

                <div className="border border-ink/15 bg-ink/5 px-4 py-4 md:px-6 md:py-5 my-2">
                  <div className="flex items-end justify-between gap-3">
                    <span className="font-display text-[2.1rem] sm:text-5xl md:text-6xl leading-none text-ink">R$ 29,99</span>
                    <span className="shrink-0 text-[0.58rem] md:text-[0.65rem] uppercase tracking-[0.14em] md:tracking-[0.2em] font-semibold text-ink-light border border-ink/20 px-2 py-1">à vista</span>
                  </div>
                  <div className="mt-3 text-[0.7rem] md:text-sm leading-relaxed text-ink-light text-balance">Pagamento único · sem mensalidade · sem renovação automática</div>
                </div>

                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-vib-azure text-white font-semibold uppercase tracking-[0.1em] md:tracking-[0.12em] text-[0.8rem] md:text-sm px-4 py-4 md:px-6 md:py-5 hover:opacity-90 transition-opacity mt-5 md:mt-6 lift"
                >
                  Comprar agora · R$ 29,99
                </a>

                <div className="mt-4 md:mt-5 grid grid-cols-3 gap-1.5 md:gap-2 text-[0.55rem] md:text-[0.6rem] uppercase font-semibold tracking-[0.1em] md:tracking-[0.18em] text-ink-light">
                  <span className="border border-ink/15 px-1 py-1.5 md:py-2 text-center">Pix</span>
                  <span className="border border-ink/15 px-1 py-1.5 md:py-2 text-center">Cartão</span>
                  <span className="border border-ink/15 px-1 py-1.5 md:py-2 text-center">Boleto</span>
                </div>

                <ul className="mt-5 md:mt-6 space-y-2 md:space-y-2.5 text-[0.78rem] md:text-sm text-ink-light">
                  <li className="flex gap-2"><span className="text-vib-emerald shrink-0">✓</span><span className="text-balance">Acesso ao caderno em celular, tablet ou computador</span></li>
                  <li className="flex gap-2"><span className="text-vib-emerald shrink-0">✓</span><span className="text-balance">Envio dos dados de acesso ao e-mail informado</span></li>
                  <li className="flex gap-2"><span className="text-vib-emerald shrink-0">✓</span><span className="text-balance">7 dias para pedir reembolso, sem precisar justificar</span></li>
                  <li className="flex gap-2"><span className="text-vib-emerald shrink-0">✓</span><span className="text-balance">Atendimento em até 24 horas em dias úteis</span></li>
                </ul>

                <div className="mt-5 pt-4 border-t border-ink/10 text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.14em] md:tracking-[0.18em] text-ink-light text-center">
                  Pagamento processado pela Cakto
                </div>
              </div>
            </aside>
          </div>
        </section>


        {/* FOOTER */}
        <footer className="px-5 md:px-10 py-5 border-t border-rule bg-ink text-paper text-xs tracking-[0.18em] uppercase text-paper/70">
          <div>Caderno de Terapia Ocupacional · © {new Date().getFullYear()}</div>
        </footer>
      </main>
    </div>
  );
};

export default Index;



