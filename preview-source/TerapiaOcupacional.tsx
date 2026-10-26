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
  cards: { topic: string; resumo: string; exemplo: string; distincao: string; revisao: string; fonte: string; pergunta: string; disciplina: string }[];
}[] = [{"area": "Fundamentos, ocupação e cotidiano", "desc": "Textos da biblioteca sobre significado, identidade, rotina e análise da atividade.", "bg": "bg-vib-emerald", "text": "text-paper", "cards": [{"topic": "Ocupação, atividade e participação", "resumo": "Ocupação corresponde às atividades cotidianas significativas que organizam a vida: autocuidado, trabalho, estudo, brincar, lazer e participação social. Não é sinônimo restrito de profissão ou emprego.", "exemplo": "Na biblioteca, o preparo de refeições aparece como ocupação ligada ao autocuidado, à organização doméstica e à convivência. A atividade de cozinhar mantém exigências materiais, mas seu significado também depende de história, escolhas e relações familiares.", "distincao": "A mesma tarefa pode ter sentidos diferentes conforme identidade, contexto, papéis, história de vida e escolha da pessoa. Distinguir atividade executada de participação efetivamente desejada evita avaliar desempenho apenas por velocidade ou independência.", "revisao": "Uma atividade é uma ação ou conjunto de ações; sua condição de ocupação depende do sentido, papel, contexto e participação atribuídos pela pessoa.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "Por que atividade e ocupação não são equivalentes?", "disciplina": "Fundamentos de Terapia Ocupacional"}, {"topic": "Domínio e processo terapêutico ocupacional", "resumo": "O OTPF-4 organiza o domínio em ocupações, contextos, padrões de desempenho, habilidades de desempenho e fatores do cliente. O processo reúne avaliação, intervenção e resultados.", "exemplo": "No processo terapêutico-ocupacional, a avaliação reúne perfil e análise do desempenho. A intervenção se relaciona às prioridades identificadas; os resultados mostram a participação alcançada e orientam a continuidade do acompanhamento.", "distincao": "O raciocínio terapêutico parte das prioridades ocupacionais, identifica facilitadores e barreiras, negocia objetivos relevantes e reavalia resultados no ambiente concreto; diagnósticos isolados não descrevem a participação.", "revisao": "Avaliação, intervenção e resultados, conduzidos de modo centrado na pessoa e na participação ocupacional.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "Quais são as três etapas gerais do processo no OTPF-4?", "disciplina": "Fundamentos de Terapia Ocupacional"}, {"topic": "Ocupação e identidade", "resumo": "Ocupações dão continuidade à identidade por meio de papéis, escolhas e reconhecimento social; sua importância não pode ser inferida apenas pelo tempo gasto.", "exemplo": "Uma pessoa que deixou de cozinhar após mudar de casa pode ter perdido um ritual familiar, não apenas uma tarefa doméstica. O significado da ocupação inclui continuidade da identidade e reconhecimento de seu papel nas relações.", "distincao": "Atividades escolhidas e obrigações ocupam posições diferentes na história da pessoa. Mudanças de casa, trabalho ou relações podem modificar papéis e interromper ocupações valorizadas.", "revisao": "O relato da pessoa sobre valores, identidade e participação, interpretado no contexto.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "Qual dado mostra que a ocupação é significativa?", "disciplina": "Introdução à Ciência Ocupacional e Cotidiano"}, {"topic": "Padrões de desempenho e rituais", "resumo": "Hábitos, rotinas, papéis e rituais estruturam desempenho; um ritual carrega significado cultural que não se reduz à repetição.", "exemplo": "Uma refeição dominical é simultaneamente preparo de alimento e evento de pertencimento. A repetição semanal é parte da rotina; a reunião da família acrescenta valor simbólico ao ritual.", "distincao": "Horários e repetição descrevem parte da rotina. Participantes, contexto social, previsibilidade e sentido cultural ajudam a distinguir um ritual de uma sequência habitual.", "revisao": "O hábito é tendência de realização adquirida; o ritual costuma carregar simbolismo e sentido sociocultural.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "Como diferenciar hábito e ritual?", "disciplina": "Introdução à Ciência Ocupacional e Cotidiano"}, {"topic": "Análise crítica da atividade significativa", "resumo": "Uma atividade pode ter demandas motoras, cognitivas e sociais semelhantes em pessoas diferentes, mas significado e prioridades não são intercambiáveis.", "exemplo": "O artesanato pode constituir renda, lazer, vínculo familiar ou obrigação institucional. Demandas semelhantes de coordenação e atenção não tornam equivalentes os objetivos e significados dessas experiências.", "distincao": "A análise das exigências da tarefa e o perfil ocupacional se complementam: uma explica demandas; o outro relaciona essas demandas à história e às prioridades da pessoa.", "revisao": "A compreensão conjunta das exigências da tarefa e dos objetivos que a tornam relevante.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "O que conecta análise de atividade e perfil ocupacional?", "disciplina": "Introdução à Ciência Ocupacional e Cotidiano"}]}, {"area": "Neuroanatomia, movimento e reabilitação", "desc": "Estruturas, funções e demandas das atividades relacionadas ao desempenho ocupacional.", "bg": "bg-vib-violet", "text": "text-paper", "cards": [{"topic": "Membro superior e preensão funcional", "resumo": "Cintura escapular, ombro, cotovelo, punho e mão funcionam como cadeia para alcance, estabilização, manipulação e destreza. Preensões de força e de precisão exigem combinações específicas de posicionamento e controle.", "exemplo": "Abotoar uma camisa envolve estabilização do tronco e da cintura escapular, posicionamento do braço, pinça e oposição do polegar. O tamanho e a resistência do botão também modificam a exigência da tarefa.", "distincao": "A observação precisa considerar amplitude, coordenação, dor, fadiga, sensibilidade, força e compensações durante uma ocupação, evitando atribuir limitação a uma única articulação.", "revisao": "Porque controle escapular e do tronco favorece posicionamento eficiente do membro superior e manipulação distal.", "fonte": "Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF)", "pergunta": "Por que a estabilização proximal importa para a destreza manual?", "disciplina": "Anatomia Humana Funcional"}, {"topic": "Sistema nervoso e controle do movimento", "resumo": "Sistemas motor, sensorial e perceptivo participam de planejamento, iniciação, execução e ajuste dos movimentos. Feedback tátil e proprioceptivo informa força, posição e precisão.", "exemplo": "Na passagem da cadeira para o leito, o resultado final não descreve sozinho o desempenho. A sequência do movimento, o ajuste postural e as informações sensoriais fazem parte da ação e de sua interpretação funcional.", "distincao": "O desempenho depende da integração entre exigência da tarefa, capacidade da pessoa e características do ambiente. Diferenciar dificuldades de planejamento, fraqueza ou processamento sensorial muda a interpretação.", "revisao": "Fornece informações sobre posição e movimento corporal, necessárias ao ajuste e à coordenação motora.", "fonte": "Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF)", "pergunta": "Como informação proprioceptiva contribui para a ação?", "disciplina": "Anatomia Humana Funcional"}, {"topic": "Cognição, atenção e funções executivas", "resumo": "Atenção, memória operacional, flexibilidade, planejamento e inibição contribuem para iniciar, sequenciar e concluir tarefas com segurança.", "exemplo": "Na organização de materiais para uma aula, a pessoa mantém o objetivo em memória, seleciona itens, acompanha a sequência e confere o resultado. A possibilidade de movimentar os objetos não elimina dificuldades de planejamento ou monitoramento.", "distincao": "Resultados de testes precisam ser interpretados junto de observação ocupacional e fatores como sono, humor, escolarização, linguagem e características da tarefa.", "revisao": "Problemas para planejar, alternar etapas, monitorar erros ou ajustar uma estratégia apesar de habilidades motoras suficientes.", "fonte": "Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF)", "pergunta": "Que indicador mostra dificuldade executiva em uma tarefa?", "disciplina": "Neuroanatomia e Neurofisiologia"}, {"topic": "Movimento funcional e análise de tarefa", "resumo": "Movimentos articulares e forças biomecânicas interagem com postura, objetos e superfícies durante atividades. Exigências mudam conforme altura, peso, repetição e duração.", "exemplo": "Um objeto colocado na prateleira mais alta exige maior alcance do que o mesmo objeto em uma superfície próxima. Altura, distância e apoio alteram a demanda biomecânica mesmo sem mudança nas características da pessoa.", "distincao": "Análise de tarefa identifica onde surgem esforço, dor, instabilidade ou fadiga e permite modificar componentes ambientais sem pressupor fortalecimento como única resposta.", "revisao": "Altura, peso, distância, apoio e arranjo espacial alteram amplitude, força e controle postural necessários.", "fonte": "Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF)", "pergunta": "Como ambiente modifica demanda biomecânica?", "disciplina": "Cinesiologia e Biomecânica"}, {"topic": "AVC e desempenho ocupacional", "resumo": "Alterações motoras, sensitivas, cognitivas, perceptivas e comunicacionais após AVC podem afetar autocuidado e papéis sociais.", "exemplo": "Após AVC, dificuldades na alimentação podem envolver componentes motores, sensitivos, perceptivos e cognitivos. Por isso, recuperação de um movimento isolado e participação na refeição são desfechos relacionados, mas distintos.", "distincao": "Avaliação contextual, metas negociadas e colaboração da equipe fundamentam a intervenção centrada em ocupações. Uma técnica isolada não descreve todo o processo de recuperação e participação.", "revisao": "Porque melhoria de componente não garante transferência para ocupação contextualizada.", "fonte": "Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF)", "pergunta": "Por que o treino isolado de movimento é insuficiente?", "disciplina": "Terapia Ocupacional em Neurologia"}]}, {"area": "Avaliação, AVD e tecnologia assistiva", "desc": "Perfil ocupacional, medidas, autocuidado e recursos conectados ao contexto.", "bg": "bg-vib-coral", "text": "text-paper", "cards": [{"topic": "Entrevista e perfil ocupacional", "resumo": "O perfil ocupacional reúne história, valores, interesses, papéis, rotinas, experiências e prioridades da pessoa. É construído por escuta e observação, não por checklist isolado.", "exemplo": "O desejo de voltar a cozinhar reúne uma atividade concreta e um projeto de autonomia. Frequência, tipo de refeição, espaço disponível e apoios compõem o perfil, junto da definição de sucesso expressa pela pessoa.", "distincao": "É preciso separar o que a equipe considera importante do que a pessoa deseja transformar e investigar discrepância entre capacidade em teste e desempenho no cotidiano.", "revisao": "Ser relevante para a pessoa, observável, contextualizada, negociada e passível de acompanhamento.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "O que caracteriza uma boa meta ocupacional?", "disciplina": "Avaliação em Terapia Ocupacional"}, {"topic": "Instrumentos, validade e escolha de medidas", "resumo": "Instrumentos padronizados oferecem informação estruturada, mas escolha depende de população, idioma, validade, finalidade, treinamento necessário e condições de aplicação.", "exemplo": "Um escore obtido em situação padronizada acrescenta informação à avaliação. Seu significado depende da versão utilizada, do público para o qual foi estudada e das condições de aplicação, além das observações do cotidiano.", "distincao": "Escores dependem do manual, do contexto cultural e das condições de avaliação. A interpretação combina medida estruturada e evidências do cotidiano.", "revisao": "Validade, confiabilidade, aplicabilidade, finalidade, população, idioma, treinamento e pertinência ocupacional.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "Quais critérios precedem escolha de um instrumento?", "disciplina": "Avaliação em Terapia Ocupacional"}, {"topic": "AVD: autocuidado e autonomia", "resumo": "Atividades de vida diária abrangem tarefas básicas como alimentação, higiene, vestir e mobilidade funcional. Independência física não equivale automaticamente a autonomia para escolher como receber ajuda.", "exemplo": "Uma pessoa pode decidir quando e como receber ajuda no banho e, ao mesmo tempo, necessitar de assistência física para uma etapa. A ajuda na execução não elimina sua autonomia nas escolhas.", "distincao": "Avaliar sequência, segurança, fadiga, privacidade e desempenho no ambiente habitual permite estabelecer estratégias que respeitem preferências, cultura e consentimento.", "revisao": "Autonomia é decidir sobre a própria vida; independência refere-se ao grau de execução sem assistência.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "Como autonomia difere de independência?", "disciplina": "Atividades de Vida Diária e Instrumentais"}, {"topic": "AIVD: gestão do cotidiano", "resumo": "Atividades instrumentais incluem preparo de refeições, manejo doméstico, finanças, compras, comunicação, transporte e gestão de saúde, conforme classificações utilizadas.", "exemplo": "Uma compra envolve lista, orçamento, deslocamento, localização de produtos, comunicação e pagamento. Barreiras no transporte ou no estabelecimento podem interferir mesmo quando o planejamento da tarefa está preservado.", "distincao": "São tarefas com demandas cognitivas, motoras, sociais e ambientais combinadas; avaliá-las apenas em ambiente artificial pode ocultar obstáculos do território.", "revisao": "Porque recursos, transporte, tecnologia, normas sociais e características do domicílio alteram desempenho.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "Por que AIVD requer avaliação contextual?", "disciplina": "Atividades de Vida Diária e Instrumentais"}, {"topic": "Tecnologia assistiva e escolha compartilhada", "resumo": "Tecnologia assistiva inclui produtos, recursos, metodologias, estratégias e serviços que ampliam funcionalidade e participação. O recurso adequado depende da tarefa, do ambiente, da pessoa e da manutenção.", "exemplo": "Um engrossador de cabo modifica a relação entre mão e utensílio. A adequação do recurso depende de uso na tarefa, preferência, higiene, conforto e acompanhamento; sua simples presença não comprova benefício.", "distincao": "Conforto, aprendizagem de uso, custo, preferência e acompanhamento participam da adequação de um recurso. Seu abandono pode estar associado à incompatibilidade com a tarefa ou com o contexto.", "revisao": "Objetivo ocupacional, contexto de uso, preferência, eficácia, segurança, acesso e possibilidade de acompanhamento.", "fonte": "Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF)", "pergunta": "O que deve orientar seleção de tecnologia assistiva?", "disciplina": "Tecnologia Assistiva I"}]}, {"area": "Infância, saúde mental e participação social", "desc": "Brincar, escola, território e projetos de vida em textos desenvolvidos.", "bg": "bg-vib-azure", "text": "text-paper", "cards": [{"topic": "Brincar como ocupação infantil", "resumo": "Brincar é uma ocupação central na infância e envolve exploração, prazer, imaginação, iniciativa, relações e aprendizagem. A forma de brincar varia culturalmente e ao longo do desenvolvimento.", "exemplo": "No parque, participação no brincar compreende escolher uma brincadeira, acessar os materiais e interagir. A atividade não se resume ao desempenho motor, pois inclui prazer, iniciativa e relações com outras crianças.", "distincao": "Uma atividade estruturada pelo adulto não substitui necessariamente brincadeira escolhida pela criança. Observar espontaneidade, oportunidades e barreiras enriquece o raciocínio.", "revisao": "Porque o brincar tem dimensão de escolha, significado, contexto social e acesso a oportunidades.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "Por que avaliar participação no brincar, e não só habilidades isoladas?", "disciplina": "Desenvolvimento Infantil e Brincar"}, {"topic": "Participação infantil em casa e na escola", "resumo": "O cuidado pediátrico orientado à ocupação integra interesses da criança, participação familiar, brincadeira, autocuidado e demandas escolares.", "exemplo": "Na rotina escolar, cadeira, materiais, tempo disponível, recreio e formas de responder às propostas influenciam a participação. A análise inclui atividade e ambiente, além das características da criança.", "distincao": "É essencial analisar pessoa, atividade e ambiente, construindo estratégias com criança, responsáveis e equipe educacional, em vez de propor treino descontextualizado.", "revisao": "A participação da criança em ocupações significativas e nos ambientes reais.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "Qual é a unidade central de análise em TO pediátrica?", "disciplina": "Terapia Ocupacional em Pediatria"}, {"topic": "Projetos de vida e cotidiano em saúde mental", "resumo": "Intervenções podem ampliar participação em autocuidado, vínculos, trabalho, estudo e lazer, reconhecendo desejos, recursos e dificuldades concretas.", "exemplo": "Um projeto de circulação no território conecta interesses, vínculos, acesso a espaços e possibilidades de escolha. O cuidado orientado à recuperação considera o projeto de vida, sem reduzir o acompanhamento à produtividade.", "distincao": "Cuidado orientado à recuperação não equivale a exigir produtividade ou normalização de rotinas; prioriza autonomia, direitos, pertencimento e escolhas.", "revisao": "A valorização de projetos próprios, autonomia, direitos e participação, e não apenas redução de sintomas.", "fonte": "Biblioteca do caderno — Terapia Ocupacional em Saúde Mental", "pergunta": "O que distingue uma intervenção centrada em recuperação?", "disciplina": "Terapia Ocupacional em Saúde Mental"}, {"topic": "Território, vulnerabilidade e direitos", "resumo": "A Terapia Ocupacional social analisa participação, cotidiano e acesso a direitos diante de desigualdades, redes de proteção e conflitos sociais.", "exemplo": "Um projeto com jovens articula mobilidade, acesso à cultura, formação e participação pública. Barreiras de renda, transporte e acesso a equipamentos são condições sociais; não correspondem a falhas individuais de motivação.", "distincao": "Projetos coletivos precisam evitar individualizar problemas estruturais; escuta, articulação intersetorial e pactuação com comunidades são centrais.", "revisao": "Porque inclui relações, recursos, conflitos, instituições e oportunidades efetivas de participação.", "fonte": "Biblioteca do caderno — Terapia Ocupacional Social e Comunitária", "pergunta": "Por que território vai além de localização geográfica?", "disciplina": "Terapia Ocupacional Social e Comunitária"}, {"topic": "Participação no currículo e ambiente escolar", "resumo": "Inclusão escolar exige acesso ao currículo, interações, brincadeiras, comunicação e participação nas atividades da escola.", "exemplo": "Uma atividade de escrita pode permitir demonstração de conhecimento por diferentes meios. Material, tempo, comunicação e organização da sala compõem o contexto de participação no currículo.", "distincao": "Propostas devem ser construídas com estudante, professores, família e equipe, evitando retirada desnecessária da convivência e redução da intervenção a treinos individuais.", "revisao": "Porque participação implica aprender, interagir, escolher e utilizar plenamente oportunidades escolares.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "Por que inclusão vai além de estar matriculado?", "disciplina": "Terapia Ocupacional e Inclusão Escolar"}]}, {"area": "Envelhecimento, estágio e documentação", "desc": "Participação ao longo da vida, supervisão, planejamento e registros profissionais.", "bg": "bg-vib-rose", "text": "text-paper", "cards": [{"topic": "Envelhecimento, papéis e participação", "resumo": "Envelhecimento é heterogêneo. A avaliação considera história ocupacional, redes sociais, barreiras ambientais, saúde e oportunidades de escolha.", "exemplo": "O cultivo de um jardim pode manter vínculo com a casa, lazer e identidade de uma pessoa idosa. A idade cronológica, isoladamente, não descreve suas prioridades nem determina quais apoios são pertinentes.", "distincao": "O envelhecimento não equivale à incapacidade. História ocupacional, redes, ambiente e prioridades individuais explicam necessidades e oportunidades de participação.", "revisao": "Escuta da pessoa, individualização, respeito à autonomia e recusa de estereótipos baseados em idade.", "fonte": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "pergunta": "O que combate o idadismo na prática?", "disciplina": "Terapia Ocupacional em Gerontologia"}, {"topic": "Observação e raciocínio de campo", "resumo": "O campo supervisionado articula contexto institucional, demandas, ocupações, avaliação e decisões da equipe, respeitando as atribuições do estudante.", "exemplo": "O diário de estágio separa três camadas: o fato observado, a interpretação discutida e a aprendizagem decorrente da supervisão. O registro torna explícito o papel do estudante e preserva a confidencialidade.", "distincao": "Registro reflexivo diferencia descrição de fatos, hipóteses e decisões supervisionadas. Privacidade deve ser preservada integralmente.", "revisao": "Observação objetiva, interpretação provisória e aprendizado elaborado com supervisão.", "fonte": "Biblioteca do caderno — Estágio Supervisionado", "pergunta": "O que um diário reflexivo deve distinguir?", "disciplina": "Estágio Supervisionado I"}, {"topic": "Planejamento compartilhado de intervenção", "resumo": "No estágio avançado, estudante sob supervisão integra avaliação, escolha de ocupações prioritárias, objetivos, plano e acompanhamento de resultados.", "exemplo": "O planejamento compartilhado vincula ocupação prioritária, informações de avaliação, objetivo e acompanhamento. A decisão registrada se relaciona ao contexto e à supervisão, em lugar de repetir uma conduta apenas pelo diagnóstico.", "distincao": "O plano documenta a relação entre avaliação, objetivos e acompanhamento. Revisões e decisões supervisionadas explicitam o raciocínio e o papel do estudante.", "revisao": "Prioridades ocupacionais da pessoa, avaliação contextual, evidências e supervisão.", "fonte": "Biblioteca do caderno — Estágio Supervisionado", "pergunta": "Qual é a base do planejamento compartilhado?", "disciplina": "Estágio Supervisionado II"}, {"topic": "Ética de estágio e confidencialidade", "resumo": "O registro reflexivo do estágio deve distinguir fatos, interpretações e decisões supervisionadas, sem divulgar dados identificáveis.", "exemplo": "A retirada do nome não garante anonimato quando detalhes de local, data, condição ou relações permitem identificar alguém. Um registro acadêmico utiliza apenas informações pertinentes ao objetivo da discussão.", "distincao": "Competências do estudante e autorizações institucionais delimitam o que pode ser feito.", "revisao": "Outros detalhes combinados podem identificar uma pessoa.", "fonte": "Biblioteca do caderno — Pesquisa Avançada e Prática Supervisionada", "pergunta": "Por que anonimização de nome pode ser insuficiente?", "disciplina": "Pesquisa Avançada e Prática Supervisionada"}, {"topic": "Registros ocupacionais e proteção de dados", "resumo": "Documentação útil descreve objetivos, observações pertinentes, decisões, evolução e encaminhamentos com linguagem clara e respeito à privacidade.", "exemplo": "Um registro sobre vestir-se descreve a etapa realizada, o apoio utilizado e a barreira observada. Expressões como “sem interesse” ou “não colabora” não substituem a descrição factual do que ocorreu.", "distincao": "Linguagem objetiva e dados pertinentes tornam o registro compreensível. Julgamentos morais, adjetivos vagos e informações excessivas prejudicam a qualidade da documentação.", "revisao": "Ele é factual, pertinente, claro, proporcional e protege informações pessoais.", "fonte": "Biblioteca do caderno — Ética e Documentação Profissional", "pergunta": "Como distinguir um registro de qualidade?", "disciplina": "Ética e Documentação Profissional"}]}];

// Amostra interativa do caderno
const amostraTabs: {
  id: string; label: string; side: string; title: string; subtitle: string;
  rows: { title: string; meta: string; tag?: string }[];
}[] = [{"id": "resumo", "label": "Resumo pronto", "side": "Biblioteca de resumos", "title": "AVD: autocuidado e autonomia", "subtitle": "Conteúdo do acesso · Atividades de Vida Diária e Instrumentais", "rows": [{"title": "Conceito", "meta": "Atividades de vida diária abrangem tarefas básicas como alimentação, higiene, vestir e mobilidade funcional. Independência física não equivale automaticamente a autonomia para escolher como receber ajuda."}, {"title": "Explicação", "meta": "Avaliar sequência, segurança, fadiga, privacidade e desempenho no ambiente habitual permite estabelecer estratégias que respeitem preferências, cultura e consentimento."}, {"title": "Aplicação comentada", "meta": "Uma pessoa pode decidir quando e como receber ajuda no banho e, ao mesmo tempo, necessitar de assistência física para uma etapa. A ajuda na execução não elimina sua autonomia nas escolhas."}, {"title": "Como autonomia difere de independência?", "meta": "Autonomia é decidir sobre a própria vida; independência refere-se ao grau de execução sem assistência."}]}, {"id": "estagio", "label": "Relatório preenchido", "side": "Estágio supervisionado", "title": "Relatório de estágio · oficina e território", "subtitle": "Documento preenchido de caso didático · conteúdo acadêmico, sem dados de pessoas atendidas", "rows": [{"title": "Contextualização do campo", "meta": "Prática supervisionada em Terapia Ocupacional comunitária, com foco no cotidiano, na circulação pelo território e na participação social. O registro reúne uma oficina grupal e a discussão realizada em supervisão.", "tag": "Campo"}, {"title": "Objetivo da atividade", "meta": "A oficina abordou ocupações de interesse do grupo e as condições de acesso a espaços culturais. O objetivo foi reconhecer facilitadores e barreiras presentes nos percursos cotidianos.", "tag": "Objetivo"}, {"title": "Atividade acompanhada", "meta": "O grupo elaborou um mapa coletivo com locais de convivência, trajetos e recursos do bairro. Os participantes escolheram os lugares que desejavam representar e compartilharam experiências de circulação.", "tag": "Registro"}, {"title": "Observações registradas", "meta": "Durante a elaboração do mapa, apareceram diferenças de acesso ao transporte, disponibilidade de companhia e conhecimento dos equipamentos culturais. O mesmo local foi descrito como acessível por alguns participantes e difícil de alcançar por outros.", "tag": "Observação"}, {"title": "Análise terapêutico-ocupacional", "meta": "A participação não foi interpretada apenas como presença em uma atividade. As falas relacionaram escolhas, vínculos, mobilidade e acesso a oportunidades. O território foi compreendido como rede de relações e recursos, além de sua dimensão geográfica.", "tag": "Análise"}, {"title": "Discussão em supervisão", "meta": "A supervisão distinguiu barreiras relatadas pelos participantes de hipóteses da equipe. Também discutiu como a escolha dos locais pelo próprio grupo preservou autoria e tornou visíveis interesses que não apareciam na proposta inicial.", "tag": "Supervisão"}, {"title": "Síntese da aprendizagem", "meta": "O registro evidenciou a relação entre ocupação, ambiente e participação social. A aprendizagem central foi a diferença entre oferecer uma atividade e construir, com os participantes, condições para que ela tenha significado no cotidiano.", "tag": "Síntese"}, {"title": "Fundamentação", "meta": "Conceitos de ocupação e contexto do OTPF-4; participação social discutida por Silva e Oliver (2019); cotidiano e exercício profissional discutidos por Bezerra, Lopes e Basso (2022).", "tag": "Fontes"}]}, {"id": "atividade", "label": "Análise preenchida", "side": "Análise da atividade", "title": "Preparo de uma refeição e significado ocupacional", "subtitle": "Ocupação, atividade e participação · conteúdo comentado", "rows": [{"title": "Ocupação em foco", "meta": "O preparo da refeição integra a organização doméstica e também a convivência. Seu sentido depende da história da pessoa e de quem participa da refeição."}, {"title": "Demandas da atividade", "meta": "Seleção de ingredientes, organização de utensílios, sequência de etapas, monitoramento do tempo e coordenação das ações."}, {"title": "Condições do ambiente", "meta": "Altura das superfícies, localização dos objetos, disponibilidade de espaço e apoio de outras pessoas modificam a realização."}, {"title": "Interpretação", "meta": "Concluir a tarefa não descreve sozinho a participação desejada. Autonomia nas escolhas, significado e contexto completam a análise ocupacional."}]}, {"id": "flashcards", "label": "Perguntas e respostas", "side": "Flashcards do caderno", "title": "Revisão de avaliação e ocupações", "subtitle": "Frente e resposta já preenchidas", "rows": [{"title": "O que é perfil ocupacional?", "meta": "O perfil ocupacional reúne história, valores, interesses, papéis, rotinas, experiências e prioridades da pessoa. É construído por escuta e observação, não por checklist isolado."}, {"title": "Como autonomia difere de independência?", "meta": "Autonomia é decidir sobre a própria vida; independência refere-se ao grau de execução sem assistência."}, {"title": "Por que AIVD requer avaliação contextual?", "meta": "Porque recursos, transporte, tecnologia, normas sociais e características do domicílio alteram desempenho."}]}];

// Tour visual: páginas do caderno
type MockRow = { title: string; meta: string; tag?: string };
type MockTone = "emerald" | "coral" | "azure" | "violet" | "amber" | "rose" | "magenta" | "teal" | "lime" | "mustard";
const r = (titles: string[]): MockRow[] => titles.map((title) => ({ title, meta: "Conteúdo organizado por assunto", tag: "TO" }));
const tourPaginas: {
  kicker: string; title: string; desc: string;
  mock: { crumb: string; side: string; title: string; subtitle: string; rows: MockRow[]; accent: MockTone };
}[] = [{"kicker": "Resumo pronto", "title": "AVD: autocuidado e autonomia", "desc": "Texto desenvolvido com explicação do conceito, raciocínio ocupacional e resposta de revisão.", "mock": {"crumb": "caderno · terapia ocupacional", "side": "Biblioteca de resumos", "title": "AVD: autocuidado e autonomia", "subtitle": "Conteúdo do acesso · Atividades de Vida Diária e Instrumentais", "rows": [{"title": "Conceito", "meta": "Atividades de vida diária abrangem tarefas básicas como alimentação, higiene, vestir e mobilidade funcional. Independência física não equivale automaticamente a autonomia para escolher como receber ajuda."}, {"title": "Explicação", "meta": "Avaliar sequência, segurança, fadiga, privacidade e desempenho no ambiente habitual permite estabelecer estratégias que respeitem preferências, cultura e consentimento."}, {"title": "Aplicação comentada", "meta": "Uma pessoa pode decidir quando e como receber ajuda no banho e, ao mesmo tempo, necessitar de assistência física para uma etapa. A ajuda na execução não elimina sua autonomia nas escolhas."}, {"title": "Como autonomia difere de independência?", "meta": "Autonomia é decidir sobre a própria vida; independência refere-se ao grau de execução sem assistência."}], "accent": "emerald"}}, {"kicker": "Relatório preenchido", "title": "Relatório de estágio · oficina e território", "desc": "Documento acadêmico preenchido com contexto, objetivo, atividade, observações, análise e discussão de supervisão.", "mock": {"crumb": "caderno · terapia ocupacional", "side": "Estágio supervisionado", "title": "Relatório de estágio · oficina e território", "subtitle": "Documento preenchido de caso didático · conteúdo acadêmico, sem dados de pessoas atendidas", "rows": [{"title": "Contextualização do campo", "meta": "Prática supervisionada em Terapia Ocupacional comunitária, com foco no cotidiano, na circulação pelo território e na participação social. O registro reúne uma oficina grupal e a discussão realizada em supervisão.", "tag": "Campo"}, {"title": "Objetivo da atividade", "meta": "A oficina abordou ocupações de interesse do grupo e as condições de acesso a espaços culturais. O objetivo foi reconhecer facilitadores e barreiras presentes nos percursos cotidianos.", "tag": "Objetivo"}, {"title": "Atividade acompanhada", "meta": "O grupo elaborou um mapa coletivo com locais de convivência, trajetos e recursos do bairro. Os participantes escolheram os lugares que desejavam representar e compartilharam experiências de circulação.", "tag": "Registro"}, {"title": "Observações registradas", "meta": "Durante a elaboração do mapa, apareceram diferenças de acesso ao transporte, disponibilidade de companhia e conhecimento dos equipamentos culturais. O mesmo local foi descrito como acessível por alguns participantes e difícil de alcançar por outros.", "tag": "Observação"}], "accent": "violet"}}, {"kicker": "Análise preenchida", "title": "Preparo de uma refeição e significado ocupacional", "desc": "Análise escrita que relaciona demandas da tarefa, contexto e significado da ocupação.", "mock": {"crumb": "caderno · terapia ocupacional", "side": "Análise da atividade", "title": "Preparo de uma refeição e significado ocupacional", "subtitle": "Ocupação, atividade e participação · conteúdo comentado", "rows": [{"title": "Ocupação em foco", "meta": "O preparo da refeição integra a organização doméstica e também a convivência. Seu sentido depende da história da pessoa e de quem participa da refeição."}, {"title": "Demandas da atividade", "meta": "Seleção de ingredientes, organização de utensílios, sequência de etapas, monitoramento do tempo e coordenação das ações."}, {"title": "Condições do ambiente", "meta": "Altura das superfícies, localização dos objetos, disponibilidade de espaço e apoio de outras pessoas modificam a realização."}, {"title": "Interpretação", "meta": "Concluir a tarefa não descreve sozinho a participação desejada. Autonomia nas escolhas, significado e contexto completam a análise ocupacional."}], "accent": "coral"}}, {"kicker": "Perguntas e respostas", "title": "Revisão de avaliação e ocupações", "desc": "Perguntas e respostas já disponíveis para leitura e revisão.", "mock": {"crumb": "caderno · terapia ocupacional", "side": "Flashcards do caderno", "title": "Revisão de avaliação e ocupações", "subtitle": "Frente e resposta já preenchidas", "rows": [{"title": "O que é perfil ocupacional?", "meta": "O perfil ocupacional reúne história, valores, interesses, papéis, rotinas, experiências e prioridades da pessoa. É construído por escuta e observação, não por checklist isolado."}, {"title": "Como autonomia difere de independência?", "meta": "Autonomia é decidir sobre a própria vida; independência refere-se ao grau de execução sem assistência."}, {"title": "Por que AIVD requer avaliação contextual?", "meta": "Porque recursos, transporte, tecnologia, normas sociais e características do domicílio alteram desempenho."}], "accent": "teal"}}];

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

const referenciasBibliograficas = [{"area": "Fundamentos", "title": "Occupational Therapy Practice Framework: Domain and Process — Fourth Edition", "citation": "AMERICAN OCCUPATIONAL THERAPY ASSOCIATION. Occupational therapy practice framework: domain and process — fourth edition. American Journal of Occupational Therapy, v. 74, supl. 2, 7412410010, 2020. DOI: 10.5014/ajot.2020.74S2001.", "use": "Consulta aos conceitos de ocupação, contexto, avaliação e processo terapêutico-ocupacional."}, {"area": "Atividades humanas", "title": "Atividades humanas na terapia ocupacional: construção e compromisso", "citation": "CARDINALLI, Isadora; SILVA, Carla Regina. Atividades humanas na terapia ocupacional: construção e compromisso. Cadernos Brasileiros de Terapia Ocupacional, v. 29, e2880, 2021.", "use": "Leitura sobre atividades humanas, conceitos e construção do conhecimento na Terapia Ocupacional brasileira."}, {"area": "Participação social", "title": "Participação social em terapia ocupacional: sobre o que estamos falando?", "citation": "SILVA, Ana Cristina Cardoso; OLIVER, Fátima Correa. Participação social em terapia ocupacional: sobre o que estamos falando? Cadernos Brasileiros de Terapia Ocupacional, v. 27, n. 4, p. 858–872, 2019. DOI: 10.4322/2526-8910.ctoAR1883.", "use": "Comparação de definições e referenciais utilizados para discutir participação social."}, {"area": "Cotidiano", "title": "As estruturas da vida cotidiana e a terapia ocupacional", "citation": "BEZERRA, Waldez Cavalcante; LOPES, Roseli Esquerdo; BASSO, Ana Carolina de Souza. As estruturas da vida cotidiana e a terapia ocupacional: tensionando limites e possibilidades no/do exercício profissional. Cadernos Brasileiros de Terapia Ocupacional, v. 30, e3031, 2022.", "use": "Discussão das dimensões técnicas, éticas e políticas da vida cotidiana e do exercício profissional."}, {"area": "Pesquisa e TCC", "title": "The PRISMA 2020 statement", "citation": "PAGE, Matthew J. et al. The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ, v. 372, n71, 2021. DOI: 10.1136/bmj.n71.", "use": "Diretriz de relato para revisões sistemáticas e organização transparente da seleção de estudos."}, {"area": "Análise da atividade", "title": "A análise de atividade e a construção do olhar do terapeuta ocupacional", "citation": "LIMA, Elizabeth Maria Freire de Araújo. A análise de atividade e a construção do olhar do terapeuta ocupacional. Revista de Terapia Ocupacional da Universidade de São Paulo, v. 15, n. 2, p. 42–48, 2004.", "use": "Leitura para discutir observação, análise de atividades e formação do raciocínio profissional."}, {"area": "Funcionalidade e contexto", "title": "Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF)", "citation": "WORLD HEALTH ORGANIZATION. International classification of functioning, disability and health: ICF. Geneva: World Health Organization, 2001.", "use": "Organização dos conceitos de funções e estruturas do corpo, atividade, participação e fatores ambientais."}];

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
            <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.6rem] leading-[0.95] md:leading-[0.88] tracking-tight text-ink text-balance mb-6 break-words">
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

        <div dangerouslySetInnerHTML={{ __html: "<style>.nb-scene{max-width:1120px;margin:56px auto;padding:32px 24px;background:radial-gradient(ellipse at center,#f3e9e6,transparent 70%);perspective:1400px}.nb-book{position:relative;display:grid;grid-template-columns:1fr 1fr;max-width:880px;margin:auto;transform:rotate(-2deg);border-radius:14px;background:#be918f;padding:12px;box-shadow:0 24px 38px #51393226;animation:nb-float 7s ease-in-out infinite}.nb-page{position:relative;min-height:350px;padding:36px 36px 38px;background:repeating-linear-gradient(#fffdf8 0px,#fffdf8 30px,#e3ded8 31px,#fffdf8 32px);border-radius:5px;box-shadow:inset -10px 0 18px #6046320c;font-family:Georgia,serif;color:#403835}.nb-page+ .nb-page{border-left:1px solid #ded5cd;box-shadow:inset 10px 0 18px #6046320c}.nb-label{font:10px sans-serif;letter-spacing:3px;text-transform:uppercase;color:#86655e}.nb-page h3{font-size:clamp(20px,3vw,30px);line-height:1.25;margin:16px 0 24px;font-weight:normal}.nb-page h4{font-size:17px;margin:18px 0 7px}.nb-page p{font-size:14px;line-height:1.9;margin:0 0 12px}.nb-page mark{background:#ead3d9;padding:2px 5px;color:inherit}.nb-page .nb-green{background:#d9e6da}.nb-note{background:#f3e6be;padding:12px 16px!important;margin-top:20px!important;transform:rotate(2deg);box-shadow:3px 5px 9px #0000000c;font-style:italic}.nb-rings{position:absolute;left:50%;top:23px;bottom:23px;width:35px;transform:translateX(-50%);display:flex;flex-direction:column;justify-content:space-around;z-index:2}.nb-rings i{display:block;height:14px;border:3px solid #9a9b9d;border-right-color:#55565a;border-bottom-color:#5d5e60;border-radius:50%;box-shadow:0 2px 2px #0004;background:transparent}.nb-tab{position:absolute;right:-16px;top:70px;width:17px;height:48px;border-radius:0 5px 5px 0;background:#b9cfc5}.nb-corner{position:absolute;right:0;bottom:0;width:35px;height:35px;background:linear-gradient(135deg,#ece3d8 49%,#fffdf8 50%);transform-origin:bottom right;animation:nb-corner 7s ease-in-out infinite;border-radius:5px 0 5px 0}@keyframes nb-float{0%,100%{transform:rotate(-2deg) translateY(0)}50%{transform:rotate(-.5deg) translateY(-9px)}}@keyframes nb-corner{0%,65%,100%{transform:scale(1)}80%{transform:scale(1.35)}}@media(max-width:600px){.nb-scene{padding:28px 18px}.nb-book{padding:7px;transform:rotate(-1deg)}.nb-page{padding:22px 17px;min-height:340px}.nb-page h3{font-size:19px;margin:12px 0 20px}.nb-page h4{font-size:14px}.nb-page p{font-size:11px;line-height:1.8}.nb-label{font-size:8px;letter-spacing:1px}.nb-rings{width:23px}.nb-rings i{height:11px;border-width:2px}.nb-note{padding:8px!important}}@media(prefers-reduced-motion:reduce){.nb-book,.nb-corner{animation:none}}</style><div id=\"caderno-terapia\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral com resumo pronto de Ocupação e participação\"><div class=\"nb-book\" style=\"background:#be918f;animation-delay:-0s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>Ocupação e participação</h3><h4><mark>Ocupação</mark></h4><p>Atividades cotidianas significativas que organizam a vida.</p><h4><mark>Atividade</mark></h4><p>Ação ou conjunto de ações que compõem uma tarefa.</p><h4><mark>Participação</mark></h4><p>Envolvimento nas situações da vida.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo pronto</span><h3>Significado no cotidiano</h3><h4><mark>Contexto</mark></h4><p>História, papéis, cultura e ambiente influenciam o significado.</p><h4><mark>Síntese</mark></h4><p>Ocupação não é sinônimo restrito de emprego.</p><p class=\"nb-note\">O preparo de uma refeição pode reunir autocuidado, convivência e identidade.</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />
{/* EXEMPLO DE FICHA DE ESTUDO — tabela visual */}
        <section id="conteudo-pronto" className="px-5 md:px-10 py-16 md:py-24 border-t border-rule bg-surface">
<SectionHeader kicker="Por dentro do acesso" title={<>O resumo já está escrito.</>} intro="Estas páginas mostram o conteúdo desenvolvido da biblioteca: conceito, explicação e resposta pronta. O estudante encontra o texto para ler e revisar." />
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{resumosTO.flatMap(a=>a.cards).filter((_,i)=>[0,10,12,15].includes(i)).map((c,i)=><article key={c.topic} className="border border-ink/15 bg-paper shadow-[0_18px_40px_-22px_hsl(var(--ink)/0.35)]" data-ready-summary="true">
<div className={`${FC_TONES[i].bg} ${FC_TONES[i].text} px-6 py-4 text-xs font-semibold uppercase tracking-wider`}>Caderno · Resumos prontos</div>
<div className="p-6 md:p-8 space-y-5"><div><p className="text-xs uppercase tracking-wider text-ink-light mb-3">{c.disciplina}</p><h3 className="font-display text-3xl leading-tight">{c.topic}</h3></div>
<div><h4 className="font-semibold mb-2">Conceito</h4><p className="text-sm leading-relaxed text-ink-light">{c.resumo}</p></div>
<div><h4 className="font-semibold mb-2">Raciocínio ocupacional</h4><p className="text-sm leading-relaxed text-ink-light">{c.distincao}</p></div>
<div className="border-t border-ink/10 pt-5"><h4 className="font-semibold mb-2">Aplicação comentada</h4><p className="text-sm leading-relaxed text-ink-light">{c.exemplo}</p></div>
<div className="bg-surface p-4 text-sm leading-relaxed"><h4 className="font-semibold mb-2">{c.pergunta}</h4><p>{c.revisao}</p></div>
<p className="text-xs text-ink-light">Biblioteca do acesso · {c.fonte}</p></div></article>)}
</div></section>

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
<div dangerouslySetInnerHTML={{ __html: "<div id=\"caderno-resumo-1\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral com resumo pronto de Análise da atividade\"><div class=\"nb-book\" style=\"background:#a8bdb5;animation-delay:-1s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>Análise da atividade</h3><h4><mark>Sequência</mark></h4><p>Etapas, materiais e organização da tarefa.</p><h4><mark>Demandas</mark></h4><p>Componentes motores, cognitivos, sensoriais e sociais.</p><h4><mark>Significado</mark></h4><p>O valor da atividade depende de quem a realiza.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo pronto</span><h3>Demandas e significado</h3><h4><mark>Pessoa e contexto</mark></h4><p>Exigências semelhantes podem ter objetivos diferentes.</p><h4><mark>Conteúdo aplicado</mark></h4><p>Artesanato pode ser renda, lazer ou vínculo familiar.</p><p class=\"nb-note\">A análise da tarefa e o perfil ocupacional são perspectivas complementares.</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />


        {/* AMOSTRA DO CADERNO */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule bg-surface">
          <SectionHeader
            kicker="Amostra do caderno"
            title={<>Conteúdo preenchido, como uma página aberta.</>}
            intro="Resumos da biblioteca, análise de atividade comentada, perguntas respondidas e relatório de estágio preenchido. O conteúdo fica visível por inteiro, sem campos aguardando preenchimento."
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
            Os resumos e respostas vêm da biblioteca do acesso. O relatório preenchido apresenta um caso didático e mostra a organização do documento; os registros pessoais do estágio permanecem editáveis no sistema.
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
<div dangerouslySetInnerHTML={{ __html: "<div id=\"caderno-resumo-2\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral com resumo pronto de AVD e AIVD\"><div class=\"nb-book\" style=\"background:#b5aacb;animation-delay:-2s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>AVD e AIVD</h3><h4><mark>AVD</mark></h4><p>Alimentação, higiene, vestir e mobilidade funcional.</p><h4><mark>AIVD</mark></h4><p>Compras, comunicação, transporte e manejo doméstico.</p><h4><mark>Contexto</mark></h4><p>Objetos, espaço e apoios alteram a execução.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo pronto</span><h3>Autonomia e apoio</h3><h4><mark>Autonomia</mark></h4><p>Possibilidade de decidir sobre a própria vida.</p><h4><mark>Independência</mark></h4><p>Grau de realização sem assistência de outra pessoa.</p><p class=\"nb-note\">Receber ajuda em uma etapa não elimina a autonomia nas escolhas.</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />


        {/* RESUMOS POR GRANDE ÁREA */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule">
          <SectionHeader
            kicker="Conteúdo de Terapia Ocupacional"
            title={<>Grandes áreas da Terapia Ocupacional.</>}
            intro="Resumos prontos extraídos da biblioteca do caderno de acesso, com conteúdo desenvolvido, raciocínio ocupacional, aplicação comentada e respostas de revisão."
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
                        Resumo do caderno
                      </div>
                      <h4 className="font-display text-xl leading-tight mb-2">{c.topic}</h4>
                      <div className="space-y-5 text-sm leading-relaxed">
  <div><h5 className="font-semibold text-xs uppercase tracking-wider mb-2">Resumo pronto</h5><p>{c.resumo}</p></div>
  <div className="border-t border-white/30 pt-4"><h5 className="font-semibold text-xs uppercase tracking-wider mb-2">Aplicação comentada</h5><p>{c.exemplo}</p></div>
  <div><h5 className="font-semibold text-xs uppercase tracking-wider mb-2">Raciocínio ocupacional</h5><p>{c.distincao}</p></div>
  <div className="bg-black/10 p-4"><h5 className="font-semibold text-xs uppercase tracking-wider mb-2">Pergunta e resposta</h5><p className="font-semibold mb-2">{c.pergunta}</p><p>{c.revisao}</p></div>
  <p className="text-xs border-t border-white/30 pt-3">Leitura relacionada: {c.fonte}. </p>
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
    <div className="mt-5 pt-4 border-t border-ink/10 text-sm text-ink-light leading-relaxed"><span className="block font-semibold text-ink mb-1">Conteúdo relacionado</span>{ref.use}</div>
    
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
<div dangerouslySetInnerHTML={{ __html: "<div id=\"caderno-resumo-3\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral com resumo pronto de Perfil ocupacional\"><div class=\"nb-book\" style=\"background:#c5a286;animation-delay:-3s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>Perfil ocupacional</h3><h4><mark>História</mark></h4><p>Experiências, papéis e rotina da pessoa.</p><h4><mark>Valores</mark></h4><p>Interesses e ocupações reconhecidas como importantes.</p><h4><mark>Prioridades</mark></h4><p>Mudanças desejadas pela própria pessoa.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo pronto</span><h3>História e prioridades</h3><h4><mark>Escuta e observação</mark></h4><p>O perfil não se resume a um checklist.</p><h4><mark>Meta ocupacional</mark></h4><p>Relevante, contextualizada e passível de acompanhamento.</p><p class=\"nb-note\">Voltar a cozinhar pode representar autonomia, convivência e continuidade de um papel.</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />


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
            intro="Páginas preenchidas com texto desenvolvido, respostas e documentos organizados por assunto."
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
<div dangerouslySetInnerHTML={{ __html: "<div id=\"caderno-resumo-4\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral com resumo pronto de Brincar e participação\"><div class=\"nb-book\" style=\"background:#b6bd92;animation-delay:-4s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>Brincar e participação</h3><h4><mark>Brincar</mark></h4><p>Exploração, prazer, imaginação e iniciativa.</p><h4><mark>Relações</mark></h4><p>Interação com outras crianças e adultos.</p><h4><mark>Oportunidades</mark></h4><p>Acesso a espaços, materiais e escolhas.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo pronto</span><h3>Ocupações da infância</h3><h4><mark>Contexto cultural</mark></h4><p>As formas de brincar variam entre grupos e fases da vida.</p><h4><mark>Participação</mark></h4><p>A experiência vai além de uma habilidade isolada.</p><p class=\"nb-note\">No parque, acesso aos brinquedos e convivência fazem parte da mesma experiência.</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />


        {/* BENEFÍCIOS REAIS */}
        <section className="px-5 md:px-10 py-16 md:py-24 border-t border-rule">
          <SectionHeader kicker="O que muda na sua rotina" title={<>Benefícios práticos no dia a dia.</>} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              ["Centralização","Estudos, disciplinas, grandes áreas, casos práticos, estágio, TCC, portfólio e carreira ficam num único sistema, acessível pelo navegador.","bg-vib-emerald"],
              ["Estudo guiado por revisão espaçada","Flashcards e resumos prontos, com organização por tema e retomadas programadas — você não monta o material do zero.","bg-vib-coral"],
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
              <div><div className="text-[0.65rem] tracking-[0.25em] uppercase text-ink-light mb-2">Análise comentada</div><ol className="text-sm space-y-2 list-decimal pl-5 text-ink-light"><li><strong className="text-ink">Acolhimento:</strong> a prioridade apresentada é retomar o vestir-se; a escolha se relaciona ao autocuidado e à identidade da pessoa.</li><li><strong className="text-ink">Avaliação:</strong> desempenho motor, sequência da tarefa, características da roupa e organização do ambiente são dimensões complementares da avaliação.</li><li><strong className="text-ink">Intervenção:</strong> o objetivo de participação orienta a discussão de tarefas, recursos e apoios; o diagnóstico isolado não determina uma conduta única.</li><li><strong className="text-ink">Documentação:</strong> o registro relaciona prioridade, observações e decisões supervisionadas, distinguindo fatos de interpretações.</li></ol></div>
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
<div dangerouslySetInnerHTML={{ __html: "<div id=\"caderno-resumo-5\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral com resumo pronto de Acessibilidade\"><div class=\"nb-book\" style=\"background:#a6bacb;animation-delay:-5s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>Acessibilidade</h3><h4><mark>Ambiente</mark></h4><p>Percursos, objetos, comunicação e relações.</p><h4><mark>Barreira</mark></h4><p>Condição que restringe acesso ou participação.</p><h4><mark>Facilitador</mark></h4><p>Condição que apoia a realização da ocupação.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo pronto</span><h3>Contexto e ocupação</h3><h4><mark>Participação escolar</mark></h4><p>Aprender, interagir e escolher integram a inclusão.</p><h4><mark>Tecnologia assistiva</mark></h4><p>A adequação depende da pessoa, da tarefa e do contexto.</p><p class=\"nb-note\">Estar matriculado ou presente não resume a participação nas atividades da escola.</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />


        <div dangerouslySetInnerHTML={{ __html: "<div id=\"caderno-resumo-6\" class=\"nb-scene\" role=\"img\" aria-label=\"Caderno espiral com resumo pronto de Registro de estágio\"><div class=\"nb-book\" style=\"background:#be918f;animation-delay:-6s\"><div class=\"nb-page\"><span class=\"nb-label\">Terapia Ocupacional</span><h3>Registro de estágio</h3><h4><mark>Campo</mark></h4><p>Oficina de participação social e território.</p><h4><mark>Atividade</mark></h4><p>Construção coletiva de mapa de locais de convivência.</p><h4><mark>Observação</mark></h4><p>Diferenças de mobilidade e acesso apareceram nos relatos.</p></div><div class=\"nb-page\"><span class=\"nb-label\">Resumo pronto</span><h3>Documento preenchido</h3><h4><mark>Análise</mark></h4><p>Escolhas, vínculos e ambiente influenciaram a participação.</p><h4><mark>Supervisão</mark></h4><p>Fatos observados foram separados de hipóteses da equipe.</p><p class=\"nb-note\">Caso didático: síntese escrita de uma prática supervisionada, com análise e fundamentação.</p><span class=\"nb-corner\"></span></div><div class=\"nb-rings\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class=\"nb-tab\" aria-hidden=\"true\"></span></div></div>" }} />
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




