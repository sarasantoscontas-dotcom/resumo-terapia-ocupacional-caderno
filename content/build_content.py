import json,html,re,pathlib
ROOT=pathlib.Path(__file__).resolve().parents[1]
SUMMARIES=[
('infancia','Terapia Ocupacional da criança e do adolescente','Brincar, autonomia, escola e participação no cotidiano',r'''
## O ponto de partida é a vida que a criança vive
A Terapia Ocupacional na infância e na adolescência investiga como a pessoa participa das ocupações importantes para sua vida: brincar, alimentar-se, vestir-se, dormir, aprender, circular, conviver e construir relações. O raciocínio profissional articula características da criança, demandas da atividade e condições do ambiente. Uma dificuldade para escrever, por exemplo, pode envolver coordenação, postura, compreensão da proposta, cansaço, organização dos materiais, acessibilidade e oportunidades de aprendizagem. Identificar somente uma função corporal não explica toda a participação.
O perfil ocupacional começa pelas perguntas da criança ou do adolescente e da família: o que gosta de fazer? O que deseja conseguir? Quais situações geram esforço, desconforto ou exclusão? Como a rotina está organizada? A escuta da escola e de outras pessoas da rede amplia a compreensão, sem substituir a voz do próprio sujeito. O diagnóstico informa o cuidado, mas não determina sozinho interesses, capacidades, necessidades ou objetivos.
> Para guardar: desenvolvimento, desempenho e participação são relacionados, mas não são sinônimos. Conhecer uma habilidade não revela automaticamente como ela é utilizada na vida diária.
## Desenvolvimento: trajetórias, oportunidades e contexto
O desenvolvimento resulta da interação entre processos biológicos, experiências, relações e condições de vida. Aspectos motores, cognitivos, sensoriais, afetivos e sociais se influenciam. A análise deve considerar a história de oportunidades e barreiras: espaço para brincar, tempo disponível, relações de cuidado, recursos materiais e condições de acesso. Comparar uma criança a uma sequência rígida de aquisições pode ocultar diferenças culturais e necessidades de apoio.
Marcos do desenvolvimento ajudam a organizar observações, mas não funcionam como uma avaliação completa. É necessário verificar qualidade do movimento, iniciativa, variedade de estratégias, comunicação, interação e efeito das condições ambientais. Na adolescência, ganham destaque a construção de identidade, a relação com pares, a privacidade, a organização do tempo, os deslocamentos e os projetos de vida. O adolescente participa das decisões e da escolha dos objetivos.
|Dimensão|O que observar|Pergunta ocupacional|
|Motora e postural|Estabilidade, alcance, preensão, coordenação bilateral e resistência|Como organiza o corpo e os objetos para participar da tarefa?|
|Cognitiva e executiva|Atenção, memória, planejamento e flexibilidade|Consegue iniciar, sequenciar e concluir uma atividade significativa?|
|Sensorial|Respostas a sons, luz, toque e movimento em situações reais|Quais condições favorecem conforto e envolvimento?|
|Comunicação e relações|Expressão de escolhas, compreensão, turnos e interação|Como participa das decisões e se comunica com outras pessoas?|
|Ambiente e rotina|Acessibilidade, tempo, apoios, relações e oportunidades|A dificuldade diminui quando a atividade ou o ambiente muda?|
## Brincar é ocupação e experiência de participação
Brincar envolve exploração, imaginação, regras, negociação, autoria e relações com objetos e pessoas. Seu valor não se resume ao treino de uma função. Uma atividade escolhida exclusivamente para exercitar pinça pode perder sentido para a criança; uma brincadeira compartilhada pode mobilizar habilidades semelhantes em uma experiência que ela deseja realizar. Interesses, cultura e possibilidade de escolha devem orientar a proposta.
Ao analisar uma brincadeira, observe quem inicia, como os participantes combinam regras, quais materiais permitem diferentes usos e se todos conseguem participar. A adaptação pode modificar tamanho de peças, apoio postural, duração, quantidade de estímulos ou forma de comunicação. O critério de sucesso inclui envolvimento e participação, não apenas executar a ação conforme um padrão único.
## Autocuidado e autonomia: ajuda também pode ampliar participação
Independência costuma se relacionar ao grau de ajuda na realização; autonomia envolve possibilidades de decisão. Uma pessoa pode precisar de assistência física e, ainda assim, escolher roupas, orientar o cuidado e decidir a sequência da rotina. Avaliar alimentação, higiene e vestuário exige observar preferências, segurança, ambiente e modos de apoio disponíveis.
No vestir, por exemplo, diferencie reconhecer as peças, orientar a roupa no corpo, manter equilíbrio, manipular fechos e organizar a sequência. Em vez de registrar apenas “não consegue vestir-se”, descreva quais etapas realiza, em quais condições e com que ajuda. Gradue uma variável por vez para compreender o efeito da mudança. A família pode experimentar a estratégia em uma rotina possível e trazer suas observações para a reavaliação.
## Escola: participação vai além da tarefa escrita
A participação escolar abrange acesso aos espaços, interação com colegas, compreensão das propostas, comunicação, organização de materiais, recreio, refeições e pertencimento. Apoios devem ser construídos com o estudante, a família e a equipe escolar. O objetivo não é transformar diferenças em falhas individuais, mas compreender as exigências da situação e remover barreiras.
Adaptações podem envolver recursos de escrita, organização visual, mobiliário, tempo, posição dos materiais e formas alternativas de demonstrar aprendizagem. A escolha precisa ser testada no contexto e revista com quem a utiliza. Uma ferramenta que funciona no consultório pode não estar disponível, ser cansativa ou gerar exposição indesejada na escola.
@mapa Participação na infância|Interesses e escolhas|Atividades significativas|Relações e vínculos|Acessibilidade|Rotina e oportunidades|Reavaliação com a rede
## Caso para raciocinar: organizar a mochila
Uma estudante de 12 anos gosta das aulas, mas chega sem materiais e depende de um adulto para organizar a mochila. Antes de concluir que há “falta de atenção”, investigue a quantidade de itens, a compreensão do horário, a rotina em casa, o local de armazenamento e as estratégias já utilizadas. Pergunte o que ela considera difícil e qual apoio aceita experimentar.
Um objetivo acadêmico possível é organizar os materiais necessários para o dia seguinte utilizando uma lista construída com a estudante. A proposta pode separar a tarefa em consultar o horário, localizar os itens, conferir e guardar. A avaliação acompanha quantidade e tipo de ajuda, tempo, esforço percebido e utilização da estratégia em dias diferentes. Se não houver melhora, reveja a hipótese e as condições de uso, em vez de apenas repetir o treino.
## Como transformar observação em objetivo
- Descreva a ocupação e o contexto: preparar o lanche na rotina da escola.
- Registre o ponto de partida: etapas realizadas, apoios e dificuldades observadas.
- Combine um resultado observável com a criança ou adolescente e a família.
- Escolha estratégias vinculadas ao resultado, acompanhando conforto e segurança.
- Reavalie participação, satisfação e necessidade de apoio em situações reais.
? Uma criança completar um teste de destreza significa que participa bem da escola?||Não. O resultado informa um aspecto do desempenho em uma condição específica. A participação escolar precisa ser observada nas atividades, relações e ambientes da escola.
? Autonomia exige realizar tudo sem ajuda?||Não. Autonomia envolve escolha e participação nas decisões. Apoios podem ampliar a autonomia, mesmo quando permanece necessidade de assistência.
? Qual é o erro de escolher uma atividade somente pelo diagnóstico?||Pessoas com o mesmo diagnóstico podem ter interesses, rotinas, habilidades e barreiras diferentes. A escolha precisa se relacionar ao perfil ocupacional e aos objetivos construídos com o sujeito.
## Base de leitura
Case-Smith e O’Brien (2015); American Occupational Therapy Association (2020); Organização Mundial da Saúde (2001); Brasil, Estatuto da Criança e do Adolescente (1990).
'''),
('recursos','Recursos, atividades terapêuticas e relacionamento interpessoal','Análise de atividade, comunicação e construção compartilhada do cuidado',r'''
## Recurso, atividade e ocupação: distinguir para escolher melhor
Um recurso é um meio utilizado na intervenção: material, objeto, tecnologia, organização do espaço ou apoio comunicacional. Atividade é um conjunto de ações com determinada finalidade. Ocupação envolve o fazer situado na vida da pessoa, com significado e relação com seus papéis e contextos. O mesmo material pode integrar experiências muito diferentes. Cozinhar pode ser treino acadêmico, trabalho, cuidado com a família, lazer ou uma ocupação desejada que se tornou difícil.
Nenhum recurso possui, isoladamente, um efeito terapêutico garantido. Sua pertinência depende dos objetivos, do modo de utilização, da relação estabelecida e das condições de participação. Uma oficina de pintura não se justifica apenas porque “estimula a criatividade”. É necessário compreender por que faz sentido para aquelas pessoas, o que poderão escolher, quais demandas mobiliza e como será acompanhado o processo.
> Pergunta que orienta a escolha: o que esta atividade permite à pessoa experimentar, aprender, expressar ou realizar em relação ao que importa em sua vida?
## Análise de atividade: olhar o fazer em camadas
A análise examina a sequência de ações, os objetos, as exigências do espaço, o tempo, as relações e os riscos. Diferencie analisar a atividade em geral de observar o desempenho de uma pessoa. A primeira descreve demandas possíveis; a segunda mostra como alguém realiza a atividade em condições concretas. As duas análises se complementam e precisam considerar o significado atribuído ao fazer.
|Camada|O que investigar|Exemplo: preparar uma refeição|
|Material e espaço|Ferramentas, superfícies, iluminação, alcance e circulação|Onde ficam ingredientes, utensílios e pontos de apoio?|
|Sequência e tempo|Início, etapas, transições, ritmo e pausas|Como organiza preparo, cocção e limpeza?|
|Exigências do desempenho|Movimento, atenção, memória, comunicação e regulação|Que demandas surgem ao acompanhar duas etapas?|
|Relações e cultura|Papéis, escolhas, expectativas e modos de compartilhar|Quem decide o cardápio e como a tarefa é dividida?|
|Segurança e participação|Riscos, apoios, conforto e possibilidade de decisão|Quais mudanças permitem participar com segurança?|
## Graduação e adaptação não são a mesma coisa
Graduar consiste em modificar progressivamente a exigência da atividade de acordo com um objetivo. Pode envolver duração, resistência, número de etapas, complexidade ou quantidade de informação. Adaptar significa ajustar materiais, ambiente ou modo de realizar para favorecer o desempenho e a participação. Uma adaptação pode permanecer como solução útil, sem precisar ser retirada para considerar o cuidado bem-sucedido.
Em uma atividade de escrita, aumentar gradualmente o tempo de produção é diferente de utilizar um engrossador ou um recurso digital. A primeira mudança altera a exigência; as outras podem reorganizar as condições do fazer. As estratégias podem coexistir. O efeito deve ser acompanhado pela participação, pelo esforço e pela satisfação, e não somente pela proximidade com uma execução considerada convencional.
## Atividades expressivas, corporais, lúdicas e cotidianas
Atividades expressivas podem oferecer experiências de criação, elaboração e comunicação. Atividades corporais envolvem percepção do corpo, movimento, presença e relação com o espaço. Propostas lúdicas podem favorecer escolha, negociação e construção de regras. Atividades do cotidiano aproximam o cuidado das situações que a pessoa deseja ou precisa realizar. Essas categorias se cruzam; não são listas de técnicas com resultados automáticos.
Em grupos, analise pertencimento, circulação da palavra, cooperação, conflitos e acesso aos materiais. Um grupo não é apenas várias pessoas executando a mesma tarefa. É uma experiência relacional, atravessada por diferenças, papéis e condições de participação. A coordenação organiza o enquadre, acompanha acontecimentos e negocia mudanças com os participantes.
## Linguagem e comunicação no encontro terapêutico
Comunicar envolve palavras, gestos, expressões, silêncio, escrita, recursos visuais e outras formas de expressão. A dificuldade na fala não permite concluir ausência de compreensão ou de possibilidade de escolha. Pergunte como a pessoa prefere se comunicar e disponibilize tempo e apoios adequados. Recursos de comunicação devem ampliar a expressão, não produzir respostas que apenas confirmem a expectativa do profissional.
Escuta ativa inclui acompanhar o relato, verificar o entendimento e formular perguntas abertas. “O que tornou essa situação difícil?” costuma produzir informações diferentes de “Você ficou nervoso, não foi?”. A validação reconhece uma experiência sem necessariamente concordar com todas as interpretações. A devolutiva pode relacionar o que foi observado, a hipótese construída e os próximos passos que serão combinados.
## Uso terapêutico de si e limites profissionais
O profissional utiliza sua presença, sua escuta e suas formas de comunicação de maneira intencional. Isso exige perceber como valores, expectativas e reações pessoais influenciam o encontro. Disponibilidade não significa ausência de limites. Horários, objetivos, confidencialidade e formas de contato fazem parte de um enquadre que protege a relação e permite compreender o cuidado.
No Modelo de Relacionamento Intencional, Taylor apresenta modos de interação como colaboração, empatia, incentivo, instrução, resolução de problemas e defesa de direitos. Eles não funcionam como personalidades fixas do terapeuta. A escolha precisa considerar a situação, as preferências da pessoa e o efeito da interação. Um excesso de instruções pode reduzir iniciativa; uma colaboração bem negociada pode abrir espaço para decisões.
@mapa Escolha terapêutica|Significado da ocupação|Demandas da atividade|Recursos e acessibilidade|Comunicação|Relação e enquadre|Resultado acompanhado
## Caso comentado: a oficina que perdeu participantes
Uma oficina de artesanato registra pouca participação. A primeira hipótese da equipe é “falta de motivação”. Uma análise mais ampla pergunta se a proposta foi escolhida com o grupo, se os materiais são acessíveis, se há custos de transporte, se os horários conflitam com outras responsabilidades e se as pessoas desejam produzir aqueles objetos. A ausência pode expressar uma barreira do serviço, e não uma característica individual.
Uma revisão possível é ouvir os participantes, apresentar diferentes propostas e negociar finalidade, materiais e organização. Acompanhamento pode incluir frequência, iniciativa, escolhas, cooperação e avaliação dos participantes. Produzir mais peças não é o único resultado relevante. Participar de uma decisão, reconstruir um vínculo ou retomar uma ocupação também pode fazer parte dos objetivos.
## Registro que sustenta o raciocínio
- Contexto: quem participou, qual proposta foi realizada e em quais condições.
- Objetivo: qual questão ocupacional orientou a atividade.
- Observações: ações, escolhas, apoios, respostas e acontecimentos relevantes.
- Análise: relações entre a proposta, o desempenho e a participação.
- Continuidade: mudanças combinadas e aspectos que serão reavaliados.
? Uma atividade artesanal é terapêutica por natureza?||Não. Sua contribuição depende do sentido para a pessoa, dos objetivos, da análise da atividade, da relação e das condições de participação.
? Adaptar uma atividade significa desistir de desenvolver habilidades?||Não. A adaptação pode ampliar acesso, autonomia e participação enquanto outras capacidades são trabalhadas. A necessidade de apoio não invalida o resultado.
? O que diferencia escuta de uma entrevista que só confirma hipóteses?||A escuta permite que a pessoa introduza informações e sentidos não previstos. O profissional verifica o entendimento e revê hipóteses com base no encontro.
## Base de leitura
Cavalcanti e Galvão (2007); Hagedorn (2003); Taylor (2008; 2017); American Occupational Therapy Association (2020).
'''),
('biosseguranca','Biossegurança e primeiros socorros','Prevenção de riscos, segurança do cuidado e resposta inicial às urgências',r'''
## Biossegurança começa antes da atividade
Biossegurança reúne medidas para prevenir e reduzir riscos às pessoas, aos trabalhadores e ao ambiente. Na Terapia Ocupacional, envolve materiais compartilhados, contato com superfícies, atividades com alimentos, equipamentos, circulação e organização do espaço. A avaliação deve antecipar o que pode acontecer e quais medidas reduzem a exposição. Observar apenas a existência de luvas ou de álcool não caracteriza um ambiente seguro.
Os riscos podem ser biológicos, químicos, físicos, ergonômicos e relacionados a acidentes. Uma proposta de culinária, por exemplo, reúne contato com alimentos, utensílios cortantes, superfícies quentes, possíveis alergias e exigências posturais. O planejamento considera o perfil dos participantes, a acessibilidade, a supervisão e as condições do serviço. A escolha do recurso precisa incluir uma análise de segurança.
## Precauções-padrão e higiene das mãos
Precauções-padrão orientam o cuidado com todas as pessoas, conforme a exposição prevista. Incluem higiene das mãos, utilização de equipamentos de proteção quando indicados, manejo seguro de materiais e cuidados com superfícies e resíduos. Luvas não substituem a higiene das mãos e não devem circular entre tarefas, pessoas ou superfícies como se permanecessem limpas.
Os cinco momentos organizam a higiene das mãos: antes de tocar a pessoa, antes de procedimento limpo ou asséptico, após risco de exposição a fluidos, após tocar a pessoa e após tocar superfícies próximas. A escolha entre preparação alcoólica e água e sabonete considera a situação e o protocolo do serviço; sujidade visível exige lavagem. A técnica precisa alcançar todas as superfícies das mãos.
|Situação|Risco a considerar|Raciocínio preventivo|
|Brinquedos e recursos compartilhados|Transmissão por mãos e superfícies|Selecionar materiais compatíveis com limpeza e organizar o fluxo de uso|
|Atividade de culinária|Cortes, queimaduras, contaminação e alergias|Planejar utensílios, higiene, ingredientes e supervisão|
|Transferências e mobilidade|Quedas e sobrecarga de participantes e trabalhadores|Avaliar ambiente, capacidade de participação, recursos e ajuda necessária|
|Material perfurocortante|Exposição e acidente ocupacional|Utilizar o fluxo institucional de descarte e nunca improvisar recipientes|
|Produtos de limpeza|Contato químico e mistura incompatível|Respeitar rótulo, diluição, armazenamento e orientação institucional|
## Limpeza, desinfecção e organização do material
Limpeza remove sujidade e matéria orgânica; desinfecção reduz ou elimina microrganismos em condições definidas; esterilização tem finalidade e exigências próprias. Os processos não são intercambiáveis. A seleção depende do material, do uso e do risco. Produtos devem ser utilizados segundo indicação, compatibilidade, concentração e tempo de contato, sem misturas improvisadas.
Em recursos artesanais, avalie superfícies porosas, partes pequenas, conservação e possibilidade de higienização. Materiais difíceis de limpar podem precisar de uso individual ou de outra solução prevista pelo serviço. Separar materiais limpos dos utilizados, identificar responsabilidades e registrar intercorrências contribui para um fluxo seguro.
## Primeiros socorros: reconhecer, acionar e proteger
A resposta inicial começa pela segurança da cena. Antes de se aproximar, identifique riscos de trânsito, eletricidade, fogo, violência, produtos químicos ou estruturas instáveis. Acione o serviço de emergência, como o SAMU 192, descrevendo local, ocorrência e condição da pessoa. Solicite ajuda e siga as orientações da central. Em atividades acadêmicas e práticas supervisionadas, comunique imediatamente a equipe responsável.
Avalie responsividade e respiração. Em adulto inconsciente que não respira normalmente ou apresenta apenas respiração agônica, deve-se suspeitar de parada cardiorrespiratória e iniciar o atendimento de suporte básico, com acionamento da emergência e obtenção de desfibrilador externo automático. Não confunda movimentos respiratórios agônicos com respiração normal. As condutas precisam corresponder ao treinamento de quem atende e às orientações do serviço de emergência.
## Suporte básico de vida no adulto: pontos de revisão
Compressões de qualidade no adulto utilizam frequência de 100 a 120 por minuto, profundidade de pelo menos 5 cm, evitando ultrapassar 6 cm, retorno completo do tórax e interrupções mínimas. O desfibrilador deve ser utilizado assim que disponível, seguindo seus comandos e garantindo que ninguém toque a pessoa durante análise e choque. As orientações de ventilação dependem do treinamento do socorrista e da situação; o estudo dos parâmetros deve ser acompanhado de prática supervisionada em manequim.
Este quadro trata do adulto. Crianças e lactentes têm particularidades de reconhecimento, técnica e ventilação, estudadas em protocolos pediátricos específicos. Não se deve transferir automaticamente profundidades e formas de compressão entre faixas etárias. A revisão escrita organiza conceitos; o desempenho de habilidades é desenvolvido no treinamento prático.
## Situações frequentes: o que lembrar
- Sangramento externo: proteja-se e faça pressão direta no local com material apropriado, acionando ajuda quando necessário. Não retire objetos encravados.
- Crise convulsiva: afaste objetos perigosos, proteja a cabeça sem conter os movimentos, marque o tempo e não coloque objetos ou líquidos na boca. Após os movimentos, acompanhe respiração e recuperação e acione ajuda conforme a situação.
- Queimadura térmica: interrompa a exposição com segurança e resfrie a área com água corrente limpa. Não aplique gelo, pasta de dente ou outras substâncias caseiras; não rompa bolhas.
- Queda com suspeita de trauma: evite movimentação desnecessária e solicite atendimento. Mover a pessoa só se justifica diante de perigo imediato ou necessidade de medida vital.
- Obstrução de via aérea: diferencie tosse eficaz de incapacidade de falar ou respirar. Acione ajuda e utilize o protocolo correspondente à faixa etária e ao seu treinamento; não faça varredura cega na boca.
@mapa Segurança do atendimento|Cena segura|Reconhecimento|Acionamento da emergência|Medidas conforme treinamento|Comunicação com a equipe|Registro e prevenção
## Caso para revisar: tontura durante uma atividade
Uma pessoa relata tontura durante uma atividade em pé. Interrompa a tarefa, previna a queda e chame a equipe. Observe o estado de consciência e a respiração, pergunte sobre sintomas e evite concluir o diagnóstico sem avaliação. Oferecer alimento, bebida ou medicamento de forma automática pode ser inadequado. A resposta depende da condição da pessoa e do protocolo assistencial. Depois do atendimento, registre a ocorrência e reavalie organização, pausas e riscos da atividade.
? Usar luvas permite atender duas pessoas sem higienizar as mãos?||Não. As luvas podem se contaminar e não substituem higiene das mãos nem a troca entre situações indicadas.
? Limpeza e desinfecção são equivalentes?||Não. A limpeza remove sujidade; a desinfecção utiliza um processo específico contra microrganismos, conforme risco e material.
? Respiração agônica é um sinal de respiração normal?||Não. Em pessoa inconsciente, a respiração agônica deve ser reconhecida como possível sinal de parada cardiorrespiratória.
## Base de leitura
Agência Nacional de Vigilância Sanitária (2009); Norma Regulamentadora nº 32; American Heart Association (2025); protocolos institucionais de segurança e de resposta às urgências.
'''),
('politicas','Políticas públicas, epidemiologia e saúde','SUS, território, redes de cuidado e leitura dos indicadores',r'''
## Saúde como direito e produção social
Pensar saúde pública exige relacionar condições de vida, acesso a direitos e organização dos serviços. Trabalho, renda, moradia, alimentação, educação, transporte, relações sociais, racismo, gênero e acessibilidade influenciam as possibilidades de viver e participar. A intervenção não se limita à condição de saúde individual: considera como políticas e ambientes produzem proteção ou barreiras.
A Constituição de 1988 reconhece a saúde como direito de todos e dever do Estado. A Lei nº 8.080/1990 organiza o SUS e a Lei nº 8.142/1990 trata da participação da comunidade e das transferências intergovernamentais de recursos. Para a Terapia Ocupacional, esse conjunto permite analisar necessidades de cuidado e participação articuladas ao território, aos serviços e aos direitos.
## Princípios do SUS: compreender a aplicação
Universalidade significa reconhecer o direito de acesso para todas as pessoas. Integralidade envolve considerar necessidades e articular ações de promoção, prevenção, tratamento e reabilitação, evitando reduzir alguém a um diagnóstico. Equidade orienta a resposta às diferenças de necessidades e às desigualdades. Não significa oferecer exatamente o mesmo recurso a todos, independentemente das condições de acesso.
|Princípio ou diretriz|Ideia central|Exemplo para raciocinar|
|Universalidade|Direito de acesso de todas as pessoas|A condição de emprego não define quem pode utilizar o SUS|
|Integralidade|Cuidado articulado às necessidades|Uma demanda envolve saúde, rotina, vínculos e continuidade do acompanhamento|
|Equidade|Respostas proporcionais às necessidades e barreiras|Organizar acessibilidade e busca ativa para grupos com acesso reduzido|
|Descentralização|Responsabilidades entre esferas de gestão|Ações e recursos são organizados com atribuições dos entes federativos|
|Regionalização e hierarquização|Articulação territorial dos serviços|O percurso do cuidado conecta pontos de atenção e referências|
|Participação da comunidade|Controle social na política de saúde|Conselhos e conferências participam da discussão e acompanhamento das políticas|
## Atenção primária e redes de atenção
A atenção primária é uma porta de entrada preferencial e exerce papel de coordenação do cuidado. Longitudinalidade não é apenas repetir consultas: envolve construir acompanhamento ao longo do tempo. Coordenação exige compartilhar informações e articular ações, inclusive quando a pessoa utiliza outros pontos da rede. Encaminhar não encerra automaticamente a responsabilidade pelo acompanhamento.
As redes articulam serviços com diferentes densidades tecnológicas e formas de cuidado. Maior densidade tecnológica não significa maior importância de um serviço em todos os casos. A resposta depende da necessidade. Atenção domiciliar, reabilitação, saúde mental e cuidado hospitalar precisam se relacionar ao cotidiano, às condições de acesso e à continuidade após transições.
## Território e trabalho da Terapia Ocupacional
Território não é somente uma área desenhada no mapa. Inclui circulação, relações, equipamentos, conflitos, recursos, pertencimentos e formas de utilização dos espaços. O mapeamento pode identificar escolas, serviços, transporte, associações, espaços de lazer e barreiras físicas e sociais. Uma necessidade de participação pode permanecer mesmo quando existe um serviço próximo, se o trajeto ou o acolhimento forem inacessíveis.
A Terapia Ocupacional pode contribuir com análise de rotinas, atividades, redes de suporte e barreiras à participação. O planejamento compartilhado considera o que a pessoa deseja realizar e como as ações dos diferentes serviços se conectam. Um projeto terapêutico não é apenas uma lista de atendimentos: explicita necessidades, objetivos, responsabilidades e acompanhamento.
## Epidemiologia: perguntas sobre a distribuição dos eventos
A epidemiologia investiga a distribuição e os determinantes de eventos relacionados à saúde em populações e utiliza esse conhecimento para orientar ações. As perguntas clássicas sobre pessoa, tempo e lugar ajudam a descrever padrões. Contudo, os números dependem da qualidade dos registros, das definições adotadas e da população considerada.
Antes de interpretar um indicador, identifique numerador, denominador, período, local e critério de definição. Um aumento de casos registrados pode refletir maior ocorrência, melhor detecção ou mudança na notificação. Comparar municípios sem considerar composição etária ou condições de registro pode gerar conclusões inadequadas.
## Incidência, prevalência e medidas de frequência
Incidência se refere à ocorrência de casos novos em uma população em risco ao longo de um período. A incidência acumulada relaciona casos novos à população inicialmente sob risco; a densidade de incidência utiliza pessoa-tempo. Prevalência expressa a proporção de pessoas com uma condição em um ponto ou período, conforme a definição. Uma condição de longa duração pode apresentar prevalência elevada mesmo com poucos casos novos.
Em um exemplo didático, um território tem 1.000 pessoas avaliadas e 80 apresentam determinada condição: a prevalência pontual é 80/1.000, ou 8%. Se, entre 920 pessoas inicialmente sem a condição e acompanhadas integralmente, surgem 23 casos novos no período, a incidência acumulada é 23/920, ou 2,5%. Os denominadores são diferentes porque as perguntas são diferentes.
|Medida|O que responde|Cuidado na interpretação|
|Prevalência|Quantas pessoas apresentam a condição?|Depende da duração e da ocorrência da condição|
|Incidência acumulada|Qual proporção desenvolveu a condição no período?|Exige definir a população inicialmente sob risco|
|Mortalidade|Com que frequência ocorrem mortes na população?|Numerador e denominador devem corresponder ao recorte|
|Letalidade|Qual proporção dos casos morreu pela condição?|Não equivale à mortalidade na população geral|
|Cobertura|Que parcela do público previsto recebeu a ação?|Quantidade de ações não demonstra, sozinha, qualidade ou resultado|
## Desenhos de estudo e leitura crítica
Um estudo transversal observa exposição e desfecho em um recorte e é útil para estimar prevalência; a sequência temporal pode ser difícil de estabelecer. Coortes acompanham grupos e permitem observar ocorrência de desfechos. Estudos caso-controle partem do desfecho e investigam exposições anteriores. Ensaios avaliam intervenções sob condições planejadas. Nenhum delineamento elimina automaticamente todos os vieses.
Associação estatística não prova causalidade. Confundimento ocorre quando outra variável influencia a relação observada. Viés de seleção ou de informação pode distorcer resultados. Para estudar uma pesquisa, pergunte quem participou, como as variáveis foram medidas, quais comparações foram feitas e se a conclusão corresponde aos dados. Um resultado de um grupo não deve ser aplicado a qualquer contexto sem análise.
@mapa Saúde e participação|Direitos e políticas|Condições de vida|Território|Rede de atenção|Indicadores|Planejamento e avaliação
## Caso comentado: baixa participação no grupo do serviço
Uma unidade observa que poucas pessoas com deficiência participam de um grupo. Contar vagas e presenças é um início, mas a análise precisa incluir o público previsto, transporte, acessibilidade, horários, comunicação e pertinência das atividades. Comparar quem acessa com quem fica de fora ajuda a localizar barreiras e orientar mudanças.
O plano pode combinar escuta dos usuários, revisão dos horários, articulação com transporte e propostas construídas com o grupo. A avaliação acompanha acesso, continuidade, satisfação e mudanças na participação, além da quantidade de encontros. Indicadores de processo e resultado respondem a perguntas diferentes e devem ser interpretados em conjunto.
? Equidade significa oferecer exatamente o mesmo atendimento a todos?||Não. Significa considerar necessidades e desigualdades para organizar respostas e reduzir barreiras de acesso e cuidado.
? Prevalência e incidência utilizam sempre o mesmo denominador?||Não. A prevalência considera a população do recorte; a incidência exige definir quem estava sob risco de se tornar um caso novo.
? Uma correlação positiva demonstra que uma exposição causou um desfecho?||Não. É necessário examinar temporalidade, confundimento, vieses, plausibilidade e o conjunto das evidências.
## Base de leitura
Brasil, Constituição Federal (1988), Leis nº 8.080 e nº 8.142 (1990); Ministério da Saúde, Guia de vigilância em saúde (2024); Organização Mundial da Saúde (2001).
'''),
('fundamentos','História, fundamentos e ética da Terapia Ocupacional','Ocupação, modelos de prática, direitos e responsabilidade profissional',r'''
## Uma profissão que se constrói em diferentes contextos
A história da Terapia Ocupacional reúne processos ligados à saúde, à reabilitação, à educação, ao trabalho e às transformações sociais. As práticas não surgem de uma única experiência nem seguem uma evolução linear e universal. Instituições, guerras, políticas públicas, movimentos de pessoas com deficiência, reforma psiquiátrica e debates sobre direitos influenciam a formação e os campos de atuação.
No Brasil, a consolidação profissional dialoga com a organização dos serviços e da formação superior. O Decreto-Lei nº 938/1969 reconhece o exercício das profissões de fisioterapeuta e terapeuta ocupacional; a Lei nº 6.316/1975 cria o sistema COFFITO/CREFITOs. Conhecer esses marcos ajuda a diferenciar reconhecimento profissional, fiscalização, formação e organização do cuidado. Eles não substituem a análise das transformações teóricas e sociais da profissão.
## Ocupação, cotidiano e participação
Ocupações são atividades do cotidiano situadas em contextos e relacionadas a sentidos, necessidades e modos de viver. Autocuidado, educação, trabalho, brincar, lazer, descanso e participação social são exemplos de áreas do fazer. A palavra ocupação não se limita ao emprego. Estudar como alguém ocupa seu tempo exige compreender escolhas possíveis, responsabilidades, vínculos e desigualdades.
Atividade pode ser analisada por suas demandas e etapas; ocupação destaca o fazer vivido por um sujeito em determinado contexto. Essa distinção é útil ao estudo, mas não deve se transformar em uma oposição rígida. Uma mesma ação pode receber sentidos distintos conforme a história e a situação de quem a realiza. Preparar café pode significar obrigação, profissão, cuidado, convivência ou retomada de uma prática desejada.
## Modelo, abordagem, técnica e recurso
Modelo de prática organiza conceitos e relações para compreender situações e orientar avaliação e intervenção. Uma abordagem explicita determinada perspectiva de cuidado. Técnica é um procedimento; recurso é um meio utilizado. Misturar esses níveis dificulta justificar escolhas. Dizer que utiliza um jogo não explica qual questão foi identificada, como ela foi compreendida ou qual resultado será acompanhado.
|Referência conceitual|Foco de análise|Perguntas para o raciocínio|
|Modelo de Ocupação Humana|Volição, habituação, capacidade de desempenho e ambiente|O que mobiliza a pessoa? Como hábitos, papéis e condições influenciam o fazer?|
|Perspectivas pessoa–ambiente–ocupação|Relações entre características pessoais, demandas e contexto|Que ajuste pode favorecer a participação nesta ocupação?|
|Perspectivas biomecânicas e de reabilitação|Demandas funcionais, capacidades e estratégias de desempenho|Como fatores físicos e apoios se relacionam à atividade desejada?|
|Perspectivas psicossociais e territoriais|Vínculos, direitos, redes e condições de vida|Quais barreiras e recursos interferem na circulação e no pertencimento?|
|Classificação Internacional de Funcionalidade|Interação entre condição de saúde, funcionalidade e contexto|Como funções, atividades, participação e fatores ambientais se articulam?|
## A CIF ajuda a organizar informações, mas não é um modelo exclusivo da profissão
A Classificação Internacional de Funcionalidade, Incapacidade e Saúde articula funções e estruturas do corpo, atividades, participação e fatores contextuais. Ela contribui para uma linguagem compartilhada. A análise não deve reduzir a participação a uma consequência automática de uma alteração corporal: ambientes e apoios podem modificar profundamente a experiência.
Capacidade e desempenho respondem a perspectivas diferentes de observação. Uma pessoa pode realizar uma tarefa em condições padronizadas, mas encontrar barreiras no ambiente habitual. A avaliação precisa explicitar as condições em que o resultado foi observado e considerar o cotidiano. Um mesmo diagnóstico pode se relacionar a experiências de funcionalidade muito diferentes.
## Processo profissional: da escuta à reavaliação
A avaliação reúne perfil ocupacional, observação, história, informações da rede e instrumentos pertinentes. A formulação identifica necessidades e constrói hipóteses. O planejamento negocia objetivos e estratégias; a intervenção acompanha o fazer e os contextos; a reavaliação verifica resultados e orienta a continuidade. O processo é dinâmico: novas informações podem exigir rever a hipótese inicial.
Um objetivo precisa explicitar uma mudança que faça sentido para a pessoa. “Melhorar coordenação” pode descrever uma dimensão a ser trabalhada, mas não revela por que ela importa. Relacionar a coordenação à preparação de uma refeição, à escrita ou a uma atividade de trabalho torna a finalidade mais compreensível. Indicadores devem acompanhar o que foi combinado, incluindo necessidade de ajuda, esforço, satisfação e participação.
## Ética no cotidiano: decisões e responsabilidades
O Código de Ética e Deontologia da Terapia Ocupacional, estabelecido pela Resolução COFFITO nº 425/2013 e suas alterações, orienta deveres e responsabilidades. O estudo envolve dignidade, respeito, competência, confidencialidade, informação, responsabilidade e relações profissionais. Ética não se resume a memorizar proibições: exige analisar quem é afetado pela decisão e quais direitos estão em jogo.
Consentimento é um processo de informação e decisão, não apenas uma assinatura. A explicação deve ser compreensível, permitindo perguntas e consideração de alternativas. Na infância e em situações de representação legal, é necessário respeitar as exigências aplicáveis e também buscar a participação da criança ou adolescente de maneira compatível com sua compreensão. Assistência e comunicação acessível favorecem a tomada de decisão.
## Sigilo, registros e comunicação profissional
O registro precisa ser claro, pertinente, identificado e coerente com o que foi realizado. Separe observação de interpretação: “afastou o material e solicitou uma pausa” descreve uma ocorrência; “é resistente” é uma interpretação ampla e pouco informativa. Documentar contexto, intervenção, resposta e continuidade sustenta a comunicação e o acompanhamento.
Compartilhar informações em equipe exige finalidade assistencial e pertinência. Trabalhos acadêmicos e discussões de casos precisam proteger a identidade e os dados. Publicação de imagens, relatos ou resultados envolve regras próprias e não se resolve apenas retirando o nome. A Resolução COFFITO nº 532/2021 modifica disposições sobre divulgação; estudar publicidade profissional requer considerar o texto atualizado, a autorização pertinente e a vedação de promessa de resultado infalível.
## Justiça ocupacional e acesso a direitos
Desigualdades podem restringir a escolha e a participação em ocupações. Falta de transporte, racismo, barreiras arquitetônicas, discriminação e exclusão escolar não são problemas resolvidos apenas pelo treino de uma habilidade. A análise ética considera como serviços, instituições e políticas distribuem oportunidades e responsabilidades.
A atuação pode envolver articulação de rede, acessibilidade, defesa de direitos e construção coletiva de estratégias. Trabalhar com a pessoa não significa atribuir a ela toda a responsabilidade por superar barreiras estruturais. O cuidado deve reconhecer recursos, interesses e possibilidades sem naturalizar desigualdades.
@mapa Raciocínio profissional|História e contexto|Ocupação e cotidiano|Referenciais teóricos|Avaliação e objetivos|Direitos e ética|Registro e reavaliação
## Caso comentado: fotografar uma atividade
Durante uma oficina, um estudante deseja fotografar uma participante para apresentar um trabalho. A participação na atividade não equivale a autorização para registro e divulgação. É necessário verificar regras institucionais, finalidade, informação compreensível e autorizações aplicáveis. Mesmo com autorização, a exposição deve ser pertinente, respeitosa e compatível com a proteção da pessoa. Um trabalho pode utilizar descrição anonimizada ou simulação acadêmica quando o registro real não é necessário.
? A CIF é uma técnica terapêutica específica da Terapia Ocupacional?||Não. É uma classificação internacional que organiza informações sobre funcionalidade, incapacidade e contexto e pode apoiar a comunicação entre áreas.
? Registrar “não colaborou” é suficiente para compreender uma sessão?||Não. É necessário descrever situação, proposta, comunicação, apoios, ações e respostas, diferenciando fatos de interpretações.
? Um recurso bem escolhido substitui a construção de objetivos?||Não. O recurso precisa integrar um raciocínio fundamentado, com objetivos compartilhados, análise do contexto e acompanhamento de resultados.
## Base de leitura
De Carlo e Bartalotti (2001); Cavalcanti e Galvão (2007); Taylor (2017); Organização Mundial da Saúde (2001); Decreto-Lei nº 938/1969; Lei nº 6.316/1975; Resoluções COFFITO nº 425/2013 e nº 532/2021.
''')]

def inline(s):
 s=html.escape(s)
 return re.sub(r'\*\*(.*?)\*\*',r'<strong>\1</strong>',s)
def render(md):
 out=[];ls=False;table=False
 for raw in md.strip().splitlines():
  line=raw.strip()
  if not line:continue
  if not line.startswith('- ') and ls:out.append('</ul>');ls=False
  if not line.startswith('|') and table:out.append('</tbody></table></div>');table=False
  if line.startswith('## '):out.append('<h3>'+inline(line[3:])+'</h3>')
  elif line.startswith('> '):out.append('<aside class="to-highlight">'+inline(line[2:])+'</aside>')
  elif line.startswith('- '):
   if not ls:out.append('<ul class="to-notes">');ls=True
   out.append('<li>'+inline(line[2:])+'</li>')
  elif line.startswith('|'):
   cells=line.strip('|').split('|')
   if not table:out.append('<div class="to-table" role="region" aria-label="Tabela de estudo" tabindex="0"><table><thead><tr>'+''.join('<th scope="col">'+inline(x)+'</th>' for x in cells)+'</tr></thead><tbody>');table=True
   else:out.append('<tr>'+''.join('<td>'+inline(x)+'</td>' for x in cells)+'</tr>')
  elif line.startswith('@mapa '):
   title,*nodes=line[6:].split('|');out.append('<div class="to-mindmap"><strong>'+inline(title)+'</strong><div>'+''.join('<span>'+inline(n)+'</span>' for n in nodes)+'</div></div>')
  elif line.startswith('? '):
   q,a=line[2:].split('||');out.append('<details class="to-selftest"><summary>'+inline(q)+'</summary><p>'+inline(a)+'</p></details>')
  else:out.append('<p>'+inline(line)+'</p>')
 if ls:out.append('</ul>')
 if table:out.append('</tbody></table></div>')
 return ''.join(out)

data=[]
for i,(sid,title,sub,md) in enumerate(SUMMARIES):
 data.append({'id':sid,'title':title,'subtitle':sub,'body':render(md),'words':len(md.split()),'number':i+1})
(ROOT/'content'/'summaries.json').write_text(json.dumps(data,ensure_ascii=False,indent=2))
print([(x['id'],x['words']) for x in data])
