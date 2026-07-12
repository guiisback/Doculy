// ===== DADOS DOS MODELOS =====
const modelos = [
  // POR ESTRUTURA
{
    id: 1,
    tipo: 'estrutura',
    emoji: '📝',
    titulo: 'Modelo ENEM Clássico',
    desc: 'Estrutura tradicional de 5 parágrafos usada no ENEM.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
[Contextualização do tema] No Brasil contemporâneo, [tema] configura-se como um dos principais desafios enfrentados pela sociedade. Esse problema, que atravessa gerações e afeta milhões de brasileiros, revela as profundas contradições de um país marcado por desigualdades históricas. Diante desse cenário preocupante, torna-se imprescindível analisar os fatores que contribuem para tal situação, bem como suas consequências para o desenvolvimento social e econômico do país.

DESENVOLVIMENTO 1:
Em primeiro lugar, é fundamental compreender que [primeiro argumento]. Esse fator, frequentemente negligenciado pelo poder público, impacta diretamente a vida de [grupo afetado], que se vê sem alternativas diante de um sistema que falha em garantir direitos básicos. Segundo [autor ou instituição], "[dado ou fato relevante]", o que evidencia a gravidade e a urgência do problema. Além disso, estudos apontam que [dado complementar], reforçando a necessidade de ações imediatas. Dessa forma, fica claro que [conclusão do parágrafo], e que a omissão do Estado apenas agrava uma realidade já bastante crítica.

DESENVOLVIMENTO 2:
Em segundo lugar, não se pode ignorar que [segundo argumento]. Esse aspecto, intimamente ligado ao primeiro, demonstra como o problema possui raízes profundas e multifacetadas, exigindo uma abordagem integrada para sua superação. De acordo com estudos recentes, [dado estatístico ou fato], demonstrando que [impacto do problema] vai muito além do que os números oficiais conseguem capturar. A população mais vulnerável é, invariavelmente, a mais afetada, o que torna ainda mais urgente a adoção de políticas públicas eficazes e duradouras. Assim sendo, [conclusão do parágrafo], evidenciando que a inércia governamental tem um custo social altíssimo.

CONCLUSÃO:
Portanto, conclui-se que [retomada da tese] representa um desafio que não pode ser adiado. Para reverter esse cenário, é necessário que [agente 1], como [ação concreta], por meio de [mecanismo], com a finalidade de [objetivo]. Além disso, cabe à sociedade civil e às instituições educacionais promover a conscientização sobre o tema, formando cidadãos críticos e engajados na construção de um Brasil mais justo e igualitário para todos.`,
    campos: [
      { id: 'tema', label: 'Qual é o tema da redação?', tipo: 'input' },
      { id: 'tese', label: 'Qual é a sua tese (ideia central)?', tipo: 'input' },
      { id: 'grupo', label: 'Qual grupo é mais afetado?', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Quem deve agir na proposta de intervenção?', tipo: 'input' },
      { id: 'acao', label: 'Qual ação deve ser tomada?', tipo: 'input' },
      { id: 'mecanismo', label: 'Por meio de qual mecanismo?', tipo: 'input' },
      { id: 'finalidade', label: 'Qual a finalidade da ação?', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
No Brasil contemporâneo, ${c.tema} configura-se como um dos principais desafios enfrentados pela sociedade. Esse problema, que atravessa gerações e afeta especialmente ${c.grupo}, revela as profundas contradições de um país marcado por desigualdades históricas. Diante desse cenário, defende-se que ${c.tese}.

DESENVOLVIMENTO 1:
Em primeiro lugar, é fundamental compreender que ${c.arg1}. Esse fator impacta diretamente a vida de ${c.grupo}, que se vê sem alternativas diante de um sistema que falha em garantir direitos básicos. Dessa forma, fica claro que a omissão do Estado apenas agrava uma realidade já bastante crítica.

DESENVOLVIMENTO 2:
Em segundo lugar, não se pode ignorar que ${c.arg2}. Esse aspecto demonstra como o problema possui raízes profundas e multifacetadas, exigindo uma abordagem integrada para sua superação. A população mais vulnerável é, invariavelmente, a mais afetada, tornando ainda mais urgente a adoção de políticas públicas eficazes.

CONCLUSÃO:
Portanto, conclui-se que ${c.tese}. Para reverter esse cenário, é necessário que ${c.agente} implemente ${c.acao}, por meio de ${c.mecanismo}, com a finalidade de ${c.finalidade}. Além disso, cabe à sociedade civil promover a conscientização sobre o tema, formando cidadãos críticos e engajados na construção de um Brasil mais justo.`
  },

{
    id: 2,
    tipo: 'estrutura',
    emoji: '📊',
    titulo: 'Modelo com Dados Estatísticos',
    desc: 'Usa dados e pesquisas para embasar os argumentos.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
Segundo dados do [fonte], [dado estatístico impactante]. Esse número, por si só, já seria suficiente para evidenciar a gravidade do problema. No entanto, quando analisado em conjunto com outros indicadores sociais, revela um cenário ainda mais alarmante. [Tema] representa, portanto, um problema estrutural na sociedade brasileira, que exige atenção imediata do poder público, da iniciativa privada e de toda a sociedade civil.

DESENVOLVIMENTO 1:
De acordo com [instituição ou pesquisa], [dado 1], o que demonstra [conclusão detalhada]. Tal realidade impacta diretamente [grupo afetado], que enfrenta no cotidiano as consequências de décadas de negligência e subinvestimento em políticas públicas eficazes. É importante ressaltar que esses números não representam apenas estatísticas frias — por trás de cada dado, há histórias de famílias que vivem à margem de direitos fundamentais garantidos pela Constituição Federal de 1988. Além disso, [dado complementar relacionado], reforçando a urgência de intervenções concretas e duradouras.

DESENVOLVIMENTO 2:
Além disso, pesquisas recentes apontam que [dado 2]. Esse número é ainda mais alarmante quando consideramos que [contexto adicional que agrava o problema], revelando que as políticas adotadas até então se mostram insuficientes para reverter o quadro. O impacto econômico também é significativo: estima-se que [consequência econômica do problema], o que demonstra que investir na solução desse problema não é apenas uma questão de justiça social, mas também de desenvolvimento nacional. Pesquisadores da área alertam que, sem medidas eficazes, a tendência é de agravamento progressivo da situação nas próximas décadas.

CONCLUSÃO:
Diante dos dados apresentados, é inegável que [retomada da tese] exige uma resposta urgente e coordenada. Cabe ao [agente] implementar [ação concreta], por meio de [mecanismo específico], a fim de [objetivo claro e mensurável]. Paralelamente, é fundamental que haja transparência na aplicação dos recursos públicos e monitoramento constante dos resultados, garantindo que as políticas implementadas alcancem de fato os mais vulneráveis e promovam mudanças estruturais duradouras.`,
    campos: [
      { id: 'tema', label: 'Tema da redação', tipo: 'input' },
      { id: 'fonte', label: 'Fonte do dado (ex: IBGE, OMS)', tipo: 'input' },
      { id: 'dado1', label: 'Primeiro dado estatístico', tipo: 'textarea' },
      { id: 'dado2', label: 'Segundo dado estatístico', tipo: 'textarea' },
      { id: 'grupo', label: 'Grupo mais afetado', tipo: 'input' },
      { id: 'agente', label: 'Agente da proposta de intervenção', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
      { id: 'objetivo', label: 'Objetivo da ação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
Segundo dados do ${c.fonte}, ${c.dado1}. Esse número, quando analisado em conjunto com outros indicadores sociais, revela um cenário alarmante. ${c.tema} representa, portanto, um problema estrutural na sociedade brasileira que exige atenção imediata do poder público e de toda a sociedade civil.

DESENVOLVIMENTO 1:
De acordo com ${c.fonte}, ${c.dado1}, o que demonstra o impacto direto sobre ${c.grupo}. É importante ressaltar que esses números não representam apenas estatísticas — por trás de cada dado, há histórias de famílias que vivem à margem de direitos fundamentais garantidos pela Constituição Federal de 1988.

DESENVOLVIMENTO 2:
Além disso, pesquisas recentes apontam que ${c.dado2}. Esse número é ainda mais alarmante quando consideramos o contexto de desigualdade estrutural do país. Pesquisadores alertam que, sem medidas eficazes, a tendência é de agravamento progressivo da situação nas próximas décadas.

CONCLUSÃO:
Diante dos dados apresentados, é inegável que ${c.tema} exige resposta urgente. Cabe ao ${c.agente} implementar ${c.acao}, por meio de ${c.mecanismo}, a fim de ${c.objetivo}. É fundamental ainda que haja transparência na aplicação dos recursos e monitoramento constante dos resultados, garantindo que as políticas alcancem os mais vulneráveis.`
  },

{
    id: 3,
    tipo: 'estrutura',
    emoji: '💬',
    titulo: 'Modelo com Citação de Autor',
    desc: 'Abre com citação de filósofo, escritor ou pensador.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
"[Citação relevante e impactante]", afirmou [autor], [breve descrição do autor — ex: filósofo grego, escritor brasileiro]. Essa reflexão, embora produzida em outro contexto histórico, aplica-se com precisão ao cenário atual, no qual [tema] tornou-se um dos maiores desafios da sociedade contemporânea. No Brasil, essa realidade assume contornos ainda mais graves, dado o histórico de desigualdades sociais e a fragilidade das instituições responsáveis por garantir direitos fundamentais à população.

DESENVOLVIMENTO 1:
Sob essa perspectiva, [primeiro argumento detalhado]. Esse fator, amplamente documentado por pesquisadores e organizações da sociedade civil, evidencia como [tema] não é um problema isolado, mas reflexo de uma estrutura social que historicamente marginaliza os mais vulneráveis. Conforme defendido por [autor 2 ou instituição], [ideia complementar que reforça o argumento], o que demonstra que enfrentar esse desafio exige muito mais do que soluções pontuais — requer uma transformação profunda nas políticas públicas e na mentalidade coletiva da sociedade brasileira.

DESENVOLVIMENTO 2:
Ademais, [segundo argumento detalhado]. Tal fato evidencia que [impacto amplo do problema na sociedade], demonstrando como [tema] afeta diretamente não apenas [grupo primário], mas também compromete o desenvolvimento econômico, a coesão social e a própria democracia brasileira. É fundamental reconhecer que a perpetuação desse problema representa um retrocesso civilizatório, contrariando os princípios fundamentais da dignidade humana e da justiça social que deveriam nortear qualquer sociedade democrática.

CONCLUSÃO:
Logo, retomando as palavras de [autor], [paráfrase que conecta a citação inicial com a conclusão]. Para transformar essa realidade, cabe ao [agente] implementar [ação concreta e detalhada], por meio de [mecanismo específico], a fim de [objetivo]. É igualmente necessário que a sociedade civil assuma seu papel de fiscalizadora e promotora de mudanças, pressionando por políticas que coloquem o ser humano no centro das decisões e garantam um futuro mais digno para todos os brasileiros.`,
    campos: [
      { id: 'tema', label: 'Tema da redação', tipo: 'input' },
      { id: 'citacao', label: 'Citação do autor', tipo: 'textarea' },
      { id: 'autor', label: 'Nome e descrição do autor (ex: Aristóteles, filósofo grego)', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'grupo', label: 'Grupo mais afetado', tipo: 'input' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
"${c.citacao}", afirmou ${c.autor}. Essa reflexão aplica-se com precisão ao cenário atual, no qual ${c.tema} tornou-se um dos maiores desafios da sociedade contemporânea. No Brasil, essa realidade assume contornos ainda mais graves, dado o histórico de desigualdades sociais e a fragilidade das instituições responsáveis por garantir direitos fundamentais.

DESENVOLVIMENTO 1:
Sob essa perspectiva, ${c.arg1}. Esse fator evidencia como ${c.tema} não é um problema isolado, mas reflexo de uma estrutura social que historicamente marginaliza ${c.grupo}. Enfrentar esse desafio exige muito mais do que soluções pontuais — requer uma transformação profunda nas políticas públicas e na mentalidade coletiva da sociedade brasileira.

DESENVOLVIMENTO 2:
Ademais, ${c.arg2}. Tal fato demonstra como ${c.tema} afeta não apenas ${c.grupo}, mas compromete o desenvolvimento econômico, a coesão social e a própria democracia brasileira. A perpetuação desse problema representa um retrocesso civilizatório que contraria os princípios fundamentais da dignidade humana.

CONCLUSÃO:
Logo, retomando as palavras de ${c.autor}, torna-se evidente que enfrentar ${c.tema} é uma necessidade urgente. Cabe ao ${c.agente} implementar ${c.acao}, por meio de ${c.mecanismo}, garantindo que as políticas coloquem o ser humano no centro das decisões e promovam um futuro mais digno para todos os brasileiros.`
  },

{
    id: 4,
    tipo: 'estrutura',
    emoji: '🏛️',
    titulo: 'Modelo com Abordagem Histórica',
    desc: 'Contextualiza o problema a partir de fatos históricos.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
Historicamente, [contexto histórico relevante relacionado ao tema]. Esse processo, que remonta a [período histórico], moldou profundamente a estrutura social, econômica e política do Brasil, cujos reflexos são sentidos até os dias atuais. Não por acaso, [tema] ainda representa um dos maiores desafios da sociedade brasileira contemporânea, evidenciando que as feridas abertas pelo passado não foram devidamente tratadas e que as promessas de igualdade e justiça social permanecem, para muitos, como uma realidade distante.

DESENVOLVIMENTO 1:
Ao longo do tempo, [desenvolvimento histórico detalhado do problema]. Essa herança, consolidada ao longo de séculos, criou estruturas de poder e exclusão que resistiram às transformações políticas e econômicas do país. Mesmo após [marco histórico relevante — ex: a proclamação da República, a Constituição de 1988], os avanços obtidos revelaram-se insuficientes para romper com os padrões históricos de desigualdade. Tal legado reflete-se nos dias atuais por meio de [consequência atual concreta], que atinge de forma desproporcional [grupo mais vulnerável], perpetuando um ciclo de exclusão difícil de romper sem intervenção estrutural do Estado.

DESENVOLVIMENTO 2:
No contexto contemporâneo, [agravamento ou novo desdobramento do problema]. Longe de ser uma questão superada, [tema] ganhou novos contornos com [fator contemporâneo — ex: avanço tecnológico, crise econômica, pandemia], que aprofundou desigualdades já existentes e expôs a fragilidade das políticas públicas implementadas até então. Diante disso, [impacto atual na sociedade], evidenciando que a raiz histórica do problema não apenas persiste, mas se reinventa sob novas formas, exigindo respostas igualmente inovadoras e comprometidas com a transformação social.

CONCLUSÃO:
Portanto, para romper com esse ciclo histórico que perpetua a exclusão e a desigualdade, é imprescindível que [agente] adote [ação concreta e estrutural], por meio de [mecanismo detalhado], com o objetivo de [finalidade]. Mais do que políticas emergenciais, o Brasil necessita de um compromisso de longo prazo com a reparação histórica e a construção de uma sociedade que garanta, de fato, direitos iguais para todos os seus cidadãos, independentemente de sua origem, raça ou condição social.`,
    campos: [
      { id: 'tema', label: 'Tema da redação', tipo: 'input' },
      { id: 'historico', label: 'Contexto histórico relacionado', tipo: 'textarea' },
      { id: 'periodo', label: 'Período histórico (ex: período colonial, século XX)', tipo: 'input' },
      { id: 'marco', label: 'Marco histórico relevante (ex: Constituição de 1988)', tipo: 'input' },
      { id: 'consequencia', label: 'Consequência histórica que persiste hoje', tipo: 'textarea' },
      { id: 'agravamento', label: 'Como o problema se manifesta hoje?', tipo: 'textarea' },
      { id: 'grupo', label: 'Grupo mais afetado', tipo: 'input' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
Historicamente, ${c.historico}. Esse processo, que remonta ao ${c.periodo}, moldou profundamente a estrutura social e econômica do Brasil, cujos reflexos são sentidos até os dias atuais. Não por acaso, ${c.tema} ainda representa um dos maiores desafios da sociedade brasileira contemporânea.

DESENVOLVIMENTO 1:
Ao longo do tempo, essa herança consolidou estruturas de poder e exclusão que resistiram às transformações políticas do país. Mesmo após ${c.marco}, os avanços revelaram-se insuficientes para romper com os padrões históricos de desigualdade. Tal legado reflete-se nos dias atuais por meio de ${c.consequencia}, que atinge de forma desproporcional ${c.grupo}.

DESENVOLVIMENTO 2:
No contexto contemporâneo, ${c.agravamento}. Longe de ser uma questão superada, ${c.tema} ganhou novos contornos, aprofundando desigualdades já existentes e expondo a fragilidade das políticas públicas implementadas até então. A raiz histórica do problema não apenas persiste, mas se reinventa sob novas formas, exigindo respostas igualmente inovadoras.

CONCLUSÃO:
Portanto, para romper com esse ciclo histórico, é imprescindível que ${c.agente} adote ${c.acao}, por meio de ${c.mecanismo}, com o objetivo de garantir direitos iguais para todos os cidadãos, independentemente de sua origem, raça ou condição social.`
  },

{
    id: 5,
    tipo: 'estrutura',
    emoji: '⚡',
    titulo: 'Modelo Causa e Consequência',
    desc: 'Estrutura baseada nas causas e efeitos do problema.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
[Tema] é resultado de um conjunto de fatores históricos, sociais e econômicos que, ao longo do tempo, moldaram uma realidade difícil de reverter sem intervenção estrutural do Estado e da sociedade. A ausência de [fator 1] e a insuficiência de [fator 2] são as principais causas desse problema, que se perpetua de geração em geração, gerando consequências devastadoras para milhões de brasileiros. Compreender essas raízes é o primeiro passo para construir soluções eficazes e duradouras.

DESENVOLVIMENTO 1 — CAUSAS:
As raízes desse problema residem, sobretudo, em [causa principal detalhada]. Esse fator, estrutural e historicamente enraizado na sociedade brasileira, combina-se com [causa secundária], criando um ambiente propício para o agravamento contínuo da situação. É importante destacar que essas causas não surgem de forma isolada — elas se retroalimentam em um ciclo vicioso que afeta especialmente [grupo mais vulnerável], privando-o de oportunidades básicas de desenvolvimento. Além disso, a [causa terciária ou fator agravante] contribui para tornar o problema ainda mais complexo, dificultando a adoção de soluções simples ou imediatas.

DESENVOLVIMENTO 2 — CONSEQUÊNCIAS:
As consequências desse cenário são devastadoras e multidimensionais. No âmbito social, [consequência social detalhada], impactando diretamente a qualidade de vida de [grupo afetado] e comprometendo o tecido social do país. No campo econômico, [consequência econômica], o que representa não apenas um custo humano incalculável, mas também um obstáculo concreto ao desenvolvimento nacional. Estudos indicam que [dado ou projeção sobre as consequências], evidenciando que ignorar esse problema tem um preço alto demais para a sociedade brasileira arcar no longo prazo.

CONCLUSÃO:
Para reverter esse quadro e atacar o problema em suas causas mais profundas, é necessário que [agente] implemente [ação estrutural e detalhada], por meio de [mecanismo específico e viável], a fim de [objetivo claro]. Além disso, é fundamental que [segunda frente de ação — ex: educação, conscientização, legislação], garantindo que as mudanças sejam não apenas imediatas, mas sustentáveis e capazes de transformar definitivamente a realidade de milhões de brasileiros que aguardam por justiça social.`,
    campos: [
      { id: 'tema', label: 'Tema da redação', tipo: 'input' },
      { id: 'causa1', label: 'Causa principal', tipo: 'textarea' },
      { id: 'causa2', label: 'Causa secundária', tipo: 'textarea' },
      { id: 'grupo', label: 'Grupo mais vulnerável', tipo: 'input' },
      { id: 'consequencia1', label: 'Consequência social', tipo: 'textarea' },
      { id: 'consequencia2', label: 'Consequência econômica', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
      { id: 'objetivo', label: 'Objetivo da ação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
${c.tema} é resultado de um conjunto de fatores históricos, sociais e econômicos que moldaram uma realidade difícil de reverter sem intervenção estrutural. A ausência de soluções eficazes para ${c.causa1} e ${c.causa2} perpetua esse problema de geração em geração, gerando consequências devastadoras para milhões de brasileiros.

DESENVOLVIMENTO 1 — CAUSAS:
As raízes desse problema residem em ${c.causa1}. Esse fator combina-se com ${c.causa2}, criando um ciclo vicioso que afeta especialmente ${c.grupo}, privando-o de oportunidades básicas de desenvolvimento e perpetuando a exclusão social.

DESENVOLVIMENTO 2 — CONSEQUÊNCIAS:
As consequências desse cenário são multidimensionais. No âmbito social, ${c.consequencia1}, impactando diretamente a qualidade de vida de ${c.grupo}. No campo econômico, ${c.consequencia2}, representando um obstáculo concreto ao desenvolvimento nacional e um custo humano incalculável para a sociedade brasileira.

CONCLUSÃO:
Para reverter esse quadro, é necessário que ${c.agente} implemente ${c.acao}, por meio de ${c.mecanismo}, a fim de ${c.objetivo}. É fundamental ainda garantir que as mudanças sejam sustentáveis e capazes de transformar definitivamente a realidade de milhões de brasileiros que aguardam por justiça social.`
  },

  {
    id: 6,
    tipo: 'estrutura',
    emoji: '🌍',
    titulo: 'Modelo com Comparação',
    desc: 'Compara a realidade brasileira com outros países para embasar argumentos.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
Enquanto países como [país exemplo] já implementaram políticas eficazes para enfrentar [tema], o Brasil ainda luta para superar desafios estruturais que limitam o desenvolvimento social e econômico de sua população. Essa comparação não é mera curiosidade acadêmica — ela revela que soluções existem e que a persistência do problema no território brasileiro é resultado de escolhas políticas e da ausência de vontade institucional para transformar uma realidade que poderia ser diferente.

DESENVOLVIMENTO 1:
Em primeiro lugar, ao observar a experiência de [país 1], percebe-se que [política ou medida adotada] resultou em [resultado concreto e mensurável]. Esse modelo, aplicado em um contexto de [semelhança com o Brasil], demonstra que é possível enfrentar [tema] de forma eficaz quando há planejamento, investimento e comprometimento político. No Brasil, no entanto, a ausência dessas condições resulta em [contraste com a realidade brasileira], evidenciando o quanto o país ainda precisa avançar para garantir direitos fundamentais a todos os seus cidadãos.

DESENVOLVIMENTO 2:
Em segundo lugar, a experiência de [país 2] também oferece lições valiosas. Por meio de [medida específica], esse país conseguiu [resultado], reduzindo significativamente os impactos de [tema] sobre sua população. A diferença em relação ao Brasil reside, sobretudo, em [fator diferencial — ex: investimento em educação, políticas redistributivas, transparência institucional], o que reforça a tese de que mudanças estruturais são não apenas possíveis, mas necessárias e urgentes.

CONCLUSÃO:
Portanto, inspirando-se em experiências internacionais bem-sucedidas, é fundamental que [agente] implemente [ação], por meio de [mecanismo], com a finalidade de [objetivo]. Adaptar boas práticas globais à realidade brasileira, respeitando suas especificidades culturais e sociais, é um caminho concreto e viável para superar os desafios que ainda impedem o país de garantir dignidade e igualdade de oportunidades para toda a sua população.`,
    campos: [
      { id: 'tema', label: 'Tema da redação', tipo: 'input' },
      { id: 'pais1', label: 'Primeiro país para comparação', tipo: 'input' },
      { id: 'politica1', label: 'Política adotada pelo primeiro país', tipo: 'textarea' },
      { id: 'resultado1', label: 'Resultado obtido pelo primeiro país', tipo: 'textarea' },
      { id: 'pais2', label: 'Segundo país para comparação', tipo: 'input' },
      { id: 'politica2', label: 'Política adotada pelo segundo país', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
      { id: 'objetivo', label: 'Objetivo da ação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
Enquanto países como ${c.pais1} já implementaram políticas eficazes para enfrentar ${c.tema}, o Brasil ainda luta para superar desafios estruturais que limitam o desenvolvimento social e econômico de sua população. Essa comparação revela que soluções existem e que a persistência do problema no território brasileiro é resultado de escolhas políticas e ausência de vontade institucional.

DESENVOLVIMENTO 1:
Em primeiro lugar, ao observar a experiência de ${c.pais1}, percebe-se que ${c.politica1} resultou em ${c.resultado1}. No Brasil, no entanto, a ausência dessas condições perpetua a exclusão social, evidenciando o quanto o país ainda precisa avançar para garantir direitos fundamentais a todos os seus cidadãos.

DESENVOLVIMENTO 2:
Em segundo lugar, a experiência de ${c.pais2} também oferece lições valiosas. Por meio de ${c.politica2}, esse país conseguiu reduzir significativamente os impactos de ${c.tema} sobre sua população, demonstrando que mudanças estruturais são não apenas possíveis, mas necessárias e urgentes.

CONCLUSÃO:
Portanto, inspirando-se em experiências internacionais bem-sucedidas, é fundamental que ${c.agente} implemente ${c.acao}, por meio de ${c.mecanismo}, com a finalidade de ${c.objetivo}. Adaptar boas práticas globais à realidade brasileira é um caminho concreto para superar os desafios que ainda impedem o país de garantir dignidade e igualdade para toda a sua população.`
  },

  {
    id: 7,
    tipo: 'estrutura',
    emoji: '🔄',
    titulo: 'Modelo com Contraponto',
    desc: 'Apresenta e refuta um argumento contrário à sua tese.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
[Tema] é frequentemente apresentado como um problema de difícil solução, levando alguns a defenderem que [argumento contrário à tese]. No entanto, uma análise mais aprofundada da questão revela que essa visão é reducionista e ignora fatores estruturais determinantes. Defende-se, portanto, que [tese principal], e que a superação desse desafio depende de ações concretas e do comprometimento de toda a sociedade brasileira.

DESENVOLVIMENTO 1 — CONTRAPONTO E REFUTAÇÃO:
É verdade que [reconhecimento parcial do argumento contrário], e que avanços importantes foram conquistados nas últimas décadas. No entanto, essa perspectiva ignora que [refutação detalhada e embasada do argumento contrário]. Os dados mostram que [evidência que contradiz o argumento oposto], demonstrando que a visão simplista do problema não resiste a uma análise crítica e aprofundada da realidade brasileira. Reduzir [tema] a [simplificação do argumento contrário] é, portanto, não apenas equivocado, mas perigoso, pois desvia o foco das verdadeiras causas do problema.

DESENVOLVIMENTO 2 — ARGUMENTO FAVORÁVEL À TESE:
Superado o contraponto, é fundamental compreender que [argumento principal que sustenta a tese]. Esse fator, amplamente documentado por pesquisadores e especialistas, evidencia que [tema] possui raízes estruturais que não podem ser resolvidas sem intervenção coordenada do Estado e da sociedade civil. Estudos indicam que [dado ou evidência que reforça a tese], confirmando que a abordagem adequada passa necessariamente por [solução proposta], e não por medidas paliativas que tratam apenas os sintomas sem enfrentar as causas profundas do problema.

CONCLUSÃO:
Portanto, longe de ser um problema insolúvel ou de responsabilidade exclusiva dos indivíduos, [tema] demanda uma resposta coletiva e estrutural. Cabe ao [agente] implementar [ação], por meio de [mecanismo], com a finalidade de [objetivo]. Somente assim será possível superar tanto o problema em si quanto os preconceitos e visões equivocadas que dificultam o avanço de soluções eficazes no Brasil.`,
    campos: [
      { id: 'tema', label: 'Tema da redação', tipo: 'input' },
      { id: 'tese', label: 'Sua tese principal', tipo: 'textarea' },
      { id: 'contraponto', label: 'Argumento contrário que você vai refutar', tipo: 'textarea' },
      { id: 'refutacao', label: 'Como você refuta esse argumento?', tipo: 'textarea' },
      { id: 'arg_favor', label: 'Argumento favorável à sua tese', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
      { id: 'objetivo', label: 'Objetivo da ação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
${c.tema} é frequentemente apresentado como um problema de difícil solução, levando alguns a defenderem que ${c.contraponto}. No entanto, uma análise mais aprofundada revela que essa visão é reducionista. Defende-se, portanto, que ${c.tese}.

DESENVOLVIMENTO 1 — CONTRAPONTO E REFUTAÇÃO:
É verdade que avanços importantes foram conquistados nas últimas décadas. No entanto, essa perspectiva ignora que ${c.refutacao}. Reduzir ${c.tema} ao argumento de que ${c.contraponto} é equivocado e perigoso, pois desvia o foco das verdadeiras causas estruturais do problema.

DESENVOLVIMENTO 2 — ARGUMENTO FAVORÁVEL À TESE:
Superado o contraponto, é fundamental compreender que ${c.arg_favor}. Esse fator evidencia que ${c.tema} possui raízes estruturais que não podem ser resolvidas sem intervenção coordenada do Estado e da sociedade civil, confirmando que a abordagem adequada passa necessariamente por soluções estruturais.

CONCLUSÃO:
Portanto, longe de ser um problema insolúvel, ${c.tema} demanda uma resposta coletiva e estrutural. Cabe ao ${c.agente} implementar ${c.acao}, por meio de ${c.mecanismo}, com a finalidade de ${c.objetivo}. Somente assim será possível superar tanto o problema quanto as visões equivocadas que dificultam soluções eficazes no Brasil.`
  },

  {
    id: 8,
    tipo: 'estrutura',
    emoji: '📰',
    titulo: 'Modelo Jornalístico',
    desc: 'Começa com um fato atual ou notícia para contextualizar o tema.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
Em [mês e ano recente], [fato ou evento atual relacionado ao tema] ganhou destaque nos principais veículos de comunicação do Brasil, reacendendo o debate sobre [tema]. Esse episódio, longe de ser um caso isolado, é apenas o reflexo mais recente de um problema estrutural que afeta milhões de brasileiros há décadas. Diante da repercussão do caso e da urgência da situação, torna-se imperativo analisar as causas profundas desse problema e apontar caminhos concretos para sua superação.

DESENVOLVIMENTO 1:
O episódio mencionado não surgiu do acaso. Em primeiro lugar, [primeiro argumento que explica as causas estruturais do problema]. Esse fator, presente em diversas regiões do país, demonstra que [tema] é uma questão sistêmica, e não um problema pontual que pode ser resolvido com medidas emergenciais. Especialistas alertam que [dado ou análise de especialista], reforçando a necessidade de uma abordagem abrangente que enfrente as raízes do problema com coragem política e comprometimento social.

DESENVOLVIMENTO 2:
Além disso, [segundo argumento que aprofunda a análise]. A cobertura midiática, embora importante para trazer o tema ao debate público, frequentemente trata [tema] de forma superficial, sem contextualizar suas causas históricas e estruturais. É preciso ir além da notícia e compreender que [aprofundamento do problema], o que exige não apenas atenção momentânea da opinião pública, mas políticas públicas consistentes e de longo prazo capazes de gerar transformações reais na vida das pessoas mais afetadas.

CONCLUSÃO:
Portanto, que o caso de [referência ao fato inicial] sirva não apenas como pauta jornalística passageira, mas como catalisador de mudanças estruturais. Cabe ao [agente] implementar [ação], por meio de [mecanismo], com a finalidade de [objetivo]. Somente com ações concretas e vontade política será possível transformar a indignação coletiva em avanços reais para a construção de uma sociedade mais justa e democrática.`,
    campos: [
      { id: 'tema', label: 'Tema da redação', tipo: 'input' },
      { id: 'fato', label: 'Fato atual ou notícia relacionada ao tema', tipo: 'textarea' },
      { id: 'arg1', label: 'Primeiro argumento (causas estruturais)', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento (aprofundamento)', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
      { id: 'objetivo', label: 'Objetivo da ação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
Recentemente, ${c.fato} ganhou destaque nos principais veículos de comunicação do Brasil, reacendendo o debate sobre ${c.tema}. Esse episódio, longe de ser um caso isolado, é o reflexo mais recente de um problema estrutural que afeta milhões de brasileiros há décadas.

DESENVOLVIMENTO 1:
O episódio mencionado não surgiu do acaso. Em primeiro lugar, ${c.arg1}. Especialistas alertam que esse é um problema sistêmico, que exige uma abordagem abrangente e não apenas medidas emergenciais.

DESENVOLVIMENTO 2:
Além disso, ${c.arg2}. É preciso ir além da notícia e compreender que ${c.tema} exige políticas públicas consistentes e de longo prazo, capazes de gerar transformações reais na vida das pessoas mais afetadas.

CONCLUSÃO:
Portanto, que esse episódio sirva como catalisador de mudanças estruturais. Cabe ao ${c.agente} implementar ${c.acao}, por meio de ${c.mecanismo}, com a finalidade de ${c.objetivo}. Somente com ações concretas será possível transformar a indignação coletiva em avanços reais para a construção de uma sociedade mais justa.`
  },

  {
    id: 9,
    tipo: 'estrutura',
    emoji: '🎭',
    titulo: 'Modelo com Analogia',
    desc: 'Usa uma comparação criativa para ilustrar o problema.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
Assim como [analogia criativa e impactante], o Brasil enfrenta [tema] de forma que revela uma contradição fundamental: um país de enormes potencialidades que insiste em perpetuar problemas que poderiam — e deveriam — ter sido superados há muito tempo. Essa metáfora ilustra com precisão a situação atual, na qual a inércia institucional e a falta de prioridade política impedem que soluções conhecidas sejam efetivamente implementadas em benefício da população mais vulnerável.

DESENVOLVIMENTO 1:
Aprofundando essa analogia, [desenvolvimento da comparação aplicada ao primeiro argumento]. Assim como [elemento da analogia] precisa de [condição necessária] para funcionar adequadamente, o enfrentamento de [tema] exige [condição estrutural necessária]. A ausência dessa condição resulta em [consequência concreta], evidenciando que o problema não é falta de conhecimento sobre as soluções, mas sim de vontade política e comprometimento com a implementação efetiva de políticas públicas capazes de transformar a realidade de milhões de brasileiros.

DESENVOLVIMENTO 2:
Da mesma forma que [continuação ou nova analogia], [segundo argumento]. Esse paralelismo revela que [tema] possui características que o tornam particularmente desafiador: [característica 1] e [característica 2] combinam-se para criar um cenário complexo, que exige respostas igualmente sofisticadas e multidimensionais. Reduzir o problema a uma única causa ou propor soluções simplistas seria ignorar a complexidade da realidade brasileira e comprometer a eficácia de qualquer intervenção.

CONCLUSÃO:
Portanto, abandonando a passividade que perpetua o problema, é necessário que [agente] implemente [ação], por meio de [mecanismo], com a finalidade de [objetivo]. Assim como [retomada da analogia inicial com desfecho positivo], o Brasil tem todas as condições para superar [tema] — falta apenas a determinação coletiva para transformar potencial em realidade e promessas em conquistas concretas para toda a população.`,
    campos: [
      { id: 'tema', label: 'Tema da redação', tipo: 'input' },
      { id: 'analogia', label: 'Analogia ou comparação criativa', tipo: 'textarea' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
      { id: 'objetivo', label: 'Objetivo da ação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
Assim como ${c.analogia}, o Brasil enfrenta ${c.tema} de forma que revela uma contradição fundamental: um país de enormes potencialidades que insiste em perpetuar problemas que poderiam ter sido superados há muito tempo.

DESENVOLVIMENTO 1:
Aprofundando essa analogia, ${c.arg1}. A ausência de soluções estruturais resulta em consequências concretas para a população mais vulnerável, evidenciando que o problema não é falta de conhecimento sobre as soluções, mas de vontade política para implementá-las.

DESENVOLVIMENTO 2:
Da mesma forma, ${c.arg2}. Esse cenário revela que ${c.tema} possui características que o tornam particularmente desafiador, exigindo respostas sofisticadas e multidimensionais que vão além de soluções simplistas ou emergenciais.

CONCLUSÃO:
Portanto, é necessário que ${c.agente} implemente ${c.acao}, por meio de ${c.mecanismo}, com a finalidade de ${c.objetivo}. O Brasil tem todas as condições para superar ${c.tema} — falta apenas a determinação coletiva para transformar potencial em realidade e promessas em conquistas concretas.`
  },

  {
    id: 10,
    tipo: 'estrutura',
    emoji: '🧠',
    titulo: 'Modelo Filosófico',
    desc: 'Aborda o tema a partir de conceitos filosóficos e reflexão crítica.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
O filósofo [filósofo] defendia que [conceito filosófico relevante]. Essa perspectiva, desenvolvida em [época ou contexto histórico], ilumina com precisão o debate contemporâneo sobre [tema], revelando que os dilemas enfrentados pela sociedade brasileira não são novos — são, na verdade, manifestações atuais de contradições humanas profundas que atravessam séculos de história e pensamento. Compreender [tema] à luz da filosofia permite ir além dos sintomas e alcançar as raízes do problema.

DESENVOLVIMENTO 1:
Sob a perspectiva filosófica de [corrente ou conceito filosófico], [primeiro argumento desenvolvido com profundidade]. Esse olhar crítico revela que [tema] não é apenas um problema técnico ou administrativo, mas fundamentalmente uma questão ética e política, que envolve escolhas sobre que tipo de sociedade queremos construir e que valores queremos preservar. A ausência de [valor ou princípio filosófico] nas políticas públicas brasileiras resulta em [consequência concreta], evidenciando que a raiz do problema é também moral e filosófica.

DESENVOLVIMENTO 2:
Complementando essa análise, [segundo conceito filosófico ou pensador] nos oferece ferramentas para compreender [segundo argumento]. Essa perspectiva demonstra que [tema] está intrinsecamente ligado a questões de [conceito — ex: justiça, liberdade, dignidade, poder], e que qualquer solução eficaz precisa partir de um compromisso genuíno com esses valores. A história mostra que sociedades que negligenciam [princípio filosófico] inevitavelmente enfrentam [consequência histórica], reforçando a urgência de uma abordagem que coloque o ser humano no centro de todas as decisões.

CONCLUSÃO:
Portanto, retomando o pensamento de [filósofo], [síntese filosófica que conecta o tema à conclusão]. Para transformar essa reflexão em ação concreta, é necessário que [agente] implemente [ação], por meio de [mecanismo], com a finalidade de [objetivo]. Afinal, como nos lembra a tradição filosófica, conhecer o problema sem agir sobre ele é uma forma de cumplicidade — e o Brasil não pode mais se dar ao luxo de contemplar suas contradições sem enfrentá-las com coragem e determinação.`,
    campos: [
      { id: 'tema', label: 'Tema da redação', tipo: 'input' },
      { id: 'filosofo', label: 'Filósofo ou pensador de referência', tipo: 'input' },
      { id: 'conceito', label: 'Conceito filosófico utilizado', tipo: 'textarea' },
      { id: 'arg1', label: 'Primeiro argumento filosófico', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento filosófico', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
      { id: 'objetivo', label: 'Objetivo da ação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
O filósofo ${c.filosofo} defendia que ${c.conceito}. Essa perspectiva ilumina com precisão o debate contemporâneo sobre ${c.tema}, revelando que os dilemas enfrentados pela sociedade brasileira são manifestações atuais de contradições humanas profundas que atravessam séculos de história e pensamento.

DESENVOLVIMENTO 1:
Sob essa perspectiva filosófica, ${c.arg1}. Esse olhar crítico revela que ${c.tema} não é apenas um problema técnico, mas fundamentalmente uma questão ética e política que envolve escolhas sobre que tipo de sociedade queremos construir.

DESENVOLVIMENTO 2:
Complementando essa análise, ${c.arg2}. Essa perspectiva demonstra que ${c.tema} está intrinsecamente ligado a questões de justiça e dignidade humana, e que qualquer solução eficaz precisa partir de um compromisso genuíno com esses valores fundamentais.

CONCLUSÃO:
Portanto, retomando o pensamento de ${c.filosofo}, torna-se evidente que conhecer o problema sem agir é uma forma de cumplicidade. Cabe ao ${c.agente} implementar ${c.acao}, por meio de ${c.mecanismo}, com a finalidade de ${c.objetivo}, colocando o ser humano no centro de todas as decisões e enfrentando as contradições brasileiras com coragem e determinação.`
  },  

  // POR TEMA
  {
    id: 6,
    tipo: 'tema',
    emoji: '🌳',
    titulo: 'Meio Ambiente e Desmatamento',
    desc: 'Modelo focado em degradação ambiental e preservação.',
    pronto: `INTRODUÇÃO:
A destruição do meio ambiente configura-se como um dos maiores desafios do século XXI. No Brasil, o desmatamento acelerado e a degradação dos biomas ameaçam não apenas a biodiversidade, mas também a qualidade de vida de milhões de pessoas.

DESENVOLVIMENTO 1:
Em primeiro lugar, o desmatamento impulsionado pela expansão agropecuária e pela exploração ilegal de madeira tem devastado biomas essenciais, como a Amazônia e o Cerrado. Segundo o INPE, o Brasil perdeu milhares de hectares de floresta nativa nos últimos anos, comprometendo o equilíbrio climático e a preservação de espécies.

DESENVOLVIMENTO 2:
Além disso, as consequências ambientais ultrapassam as fronteiras nacionais. O aumento das emissões de carbono, a escassez hídrica e as mudanças climáticas são reflexos diretos da degradação ambiental, afetando comunidades vulneráveis e povos indígenas que dependem da floresta para sobreviver.

CONCLUSÃO:
Portanto, para frear a destruição ambiental, é necessário que o Estado brasileiro fortaleça a fiscalização e aplique rigorosamente a legislação ambiental, como o Código Florestal, por meio de investimentos em tecnologia de monitoramento, com a finalidade de preservar os biomas e garantir um futuro sustentável para as próximas gerações.`,
    campos: [
      { id: 'bioma', label: 'Bioma ou região específica (ex: Amazônia)', tipo: 'input' },
      { id: 'causa', label: 'Principal causa do desmatamento na sua abordagem', tipo: 'textarea' },
      { id: 'consequencia', label: 'Consequência que você quer destacar', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
A destruição do meio ambiente configura-se como um dos maiores desafios do século XXI. No Brasil, a degradação da ${c.bioma} ameaça não apenas a biodiversidade, mas também a qualidade de vida de milhões de pessoas.

DESENVOLVIMENTO 1:
Em primeiro lugar, ${c.causa} tem devastado biomas essenciais, comprometendo o equilíbrio climático e a preservação de espécies únicas do território brasileiro.

DESENVOLVIMENTO 2:
Além disso, ${c.consequencia}, afetando comunidades vulneráveis e evidenciando que a crise ambiental é também uma crise social.

CONCLUSÃO:
Portanto, é necessário que ${c.agente} implemente ${c.acao}, com a finalidade de preservar os biomas e garantir um futuro sustentável para as próximas gerações.`
  },

  {
    id: 7,
    tipo: 'tema',
    emoji: '📱',
    titulo: 'Tecnologia e Sociedade',
    desc: 'Impactos da tecnologia e redes sociais na vida moderna.',
    pronto: `INTRODUÇÃO:
A revolução tecnológica transformou profundamente as relações humanas no século XXI. Se por um lado a internet e as redes sociais aproximaram pessoas e democratizaram o acesso à informação, por outro, geraram novos desafios, como a disseminação de fake news e o isolamento social.

DESENVOLVIMENTO 1:
Em primeiro lugar, o uso indiscriminado das redes sociais tem contribuído para a propagação de desinformação em larga escala. Algoritmos projetados para maximizar o engajamento acabam priorizando conteúdos sensacionalistas, criando as chamadas "bolhas digitais" e polarizando ainda mais a sociedade.

DESENVOLVIMENTO 2:
Além disso, a dependência tecnológica tem impactado negativamente a saúde mental, especialmente entre jovens. Estudos indicam que o uso excessivo de smartphones está associado ao aumento de casos de ansiedade, depressão e dificuldade de concentração, evidenciando a necessidade de uma relação mais saudável com a tecnologia.

CONCLUSÃO:
Portanto, para que a tecnologia seja um instrumento de progresso e não de retrocesso social, é necessário que o Estado regulamente o uso de plataformas digitais, por meio de legislação específica sobre desinformação, e que as escolas promovam a educação midiática, com a finalidade de formar cidadãos críticos e conscientes.`,
    campos: [
      { id: 'problema', label: 'Problema tecnológico que quer abordar', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
A revolução tecnológica transformou profundamente as relações humanas. Se por um lado aproximou pessoas, por outro gerou desafios como ${c.problema}.

DESENVOLVIMENTO 1:
Em primeiro lugar, ${c.arg1}, evidenciando como o uso inadequado da tecnologia impacta negativamente a sociedade.

DESENVOLVIMENTO 2:
Além disso, ${c.arg2}, demonstrando a necessidade urgente de uma abordagem mais consciente e regulada do ambiente digital.

CONCLUSÃO:
Portanto, é necessário que ${c.agente} implemente ${c.acao}, com a finalidade de garantir que a tecnologia seja um instrumento de progresso social.`
  },

  {
    id: 8,
    tipo: 'tema',
    emoji: '🎓',
    titulo: 'Educação no Brasil',
    desc: 'Desafios e soluções para a educação brasileira.',
    pronto: `INTRODUÇÃO:
A educação é a base do desenvolvimento de qualquer nação. No Brasil, entretanto, profundas desigualdades ainda marcam o sistema educacional, comprometendo o futuro de milhões de crianças e jovens que não têm acesso a um ensino de qualidade.

DESENVOLVIMENTO 1:
Em primeiro lugar, a disparidade entre escolas públicas e privadas revela um sistema educacional dual e excludente. Enquanto estudantes de famílias privilegiadas têm acesso a recursos pedagógicos modernos, alunos da rede pública enfrentam salas superlotadas, falta de professores e infraestrutura precária.

DESENVOLVIMENTO 2:
Ademais, a evasão escolar representa um dos maiores entraves para o desenvolvimento educacional do país. Fatores como a necessidade de trabalhar precocemente, a violência no entorno das escolas e a falta de identificação com o conteúdo ensinado levam muitos jovens a abandonar os estudos antes de concluir o ensino básico.

CONCLUSÃO:
Diante desse cenário, é imprescindível que o governo federal amplie os investimentos em educação pública, por meio de programas de valorização docente e modernização da infraestrutura escolar, com a finalidade de garantir igualdade de oportunidades e reduzir as desigualdades sociais no país.`,
    campos: [
      { id: 'problema', label: 'Problema educacional principal', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
A educação é a base do desenvolvimento de qualquer nação. No Brasil, entretanto, ${c.problema} ainda compromete o futuro de milhões de estudantes.

DESENVOLVIMENTO 1:
Em primeiro lugar, ${c.arg1}, evidenciando as profundas desigualdades que marcam o sistema educacional brasileiro.

DESENVOLVIMENTO 2:
Ademais, ${c.arg2}, demonstrando que superar esses desafios exige investimento e comprometimento do poder público.

CONCLUSÃO:
Diante desse cenário, é imprescindível que ${c.agente} implemente ${c.acao}, com a finalidade de garantir igualdade de oportunidades para todos os estudantes.`
  },

  {
    id: 9,
    tipo: 'tema',
    emoji: '⚖️',
    titulo: 'Desigualdade Social',
    desc: 'Concentração de renda e exclusão social no Brasil.',
    pronto: `INTRODUÇÃO:
O Brasil figura entre os países com maior desigualdade social do mundo. A concentração de renda nas mãos de poucos e a exclusão de grandes parcelas da população do acesso a direitos básicos revelam um problema estrutural que atravessa séculos de história nacional.

DESENVOLVIMENTO 1:
Em primeiro lugar, a herança escravocrata e colonial brasileira criou uma estrutura social profundamente desigual, que persiste até os dias atuais. A ausência de políticas redistributivas eficazes permitiu que a concentração de riqueza se perpetuasse entre gerações, enquanto a maioria da população luta para suprir necessidades básicas como alimentação, moradia e saúde.

DESENVOLVIMENTO 2:
Além disso, a desigualdade social alimenta um ciclo vicioso de pobreza. Crianças nascidas em famílias vulneráveis têm menos acesso à educação de qualidade, o que limita suas oportunidades no mercado de trabalho e perpetua a exclusão social, dificultando qualquer perspectiva de ascensão econômica.

CONCLUSÃO:
Para romper esse ciclo, é fundamental que o Estado brasileiro implemente políticas públicas redistributivas, como a ampliação de programas de transferência de renda e o fortalecimento da educação pública, por meio de maior investimento e fiscalização, com a finalidade de construir uma sociedade mais justa e igualitária.`,
    campos: [
      { id: 'aspecto', label: 'Aspecto da desigualdade que quer abordar', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
O Brasil figura entre os países com maior desigualdade social do mundo. ${c.aspecto} revela um problema estrutural que atravessa séculos de história nacional.

DESENVOLVIMENTO 1:
Em primeiro lugar, ${c.arg1}, evidenciando como a desigualdade se perpetua entre gerações e compromete o desenvolvimento do país.

DESENVOLVIMENTO 2:
Além disso, ${c.arg2}, demonstrando que a exclusão social alimenta um ciclo vicioso difícil de romper sem intervenção do Estado.

CONCLUSÃO:
Para reverter esse cenário, é fundamental que ${c.agente} implemente ${c.acao}, com a finalidade de construir uma sociedade mais justa e igualitária.`
  },

  {
    id: 10,
    tipo: 'tema',
    emoji: '🏥',
    titulo: 'Saúde Pública',
    desc: 'Desafios do sistema de saúde e acesso universal.',
    pronto: `INTRODUÇÃO:
O acesso à saúde de qualidade é um direito garantido pela Constituição Federal de 1988, que criou o Sistema Único de Saúde — o SUS. No entanto, décadas depois, milhões de brasileiros ainda enfrentam longas filas, falta de médicos e infraestrutura precária, evidenciando o abismo entre o direito previsto em lei e a realidade vivida pela população.

DESENVOLVIMENTO 1:
Em primeiro lugar, o subfinanciamento crônico do SUS compromete a qualidade dos serviços prestados. A insuficiência de recursos impede a contratação de profissionais de saúde em número adequado, a compra de equipamentos modernos e a manutenção de unidades de atendimento, sobrecarregando um sistema já fragilizado.

DESENVOLVIMENTO 2:
Ademais, as desigualdades regionais agravam ainda mais a crise na saúde pública. Enquanto grandes centros urbanos concentram hospitais e especialistas, municípios do interior e regiões mais pobres do país carecem até mesmo de atendimento básico, perpetuando um ciclo de exclusão que atinge, sobretudo, populações vulneráveis.

CONCLUSÃO:
Diante desse cenário, é imprescindível que o governo federal amplie o investimento no SUS, por meio da revisão da Emenda Constitucional 95 e do fortalecimento da atenção primária à saúde, com a finalidade de garantir atendimento digno e universal a todos os brasileiros.`,
    campos: [
      { id: 'problema', label: 'Problema de saúde pública que quer abordar', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
O acesso à saúde de qualidade é um direito garantido pela Constituição. No entanto, ${c.problema} evidencia o abismo entre o direito previsto em lei e a realidade da população brasileira.

DESENVOLVIMENTO 1:
Em primeiro lugar, ${c.arg1}, comprometendo a qualidade dos serviços prestados à população mais vulnerável.

DESENVOLVIMENTO 2:
Ademais, ${c.arg2}, perpetuando um ciclo de exclusão que atinge sobretudo as regiões mais pobres do país.

CONCLUSÃO:
Diante desse cenário, é imprescindível que ${c.agente} implemente ${c.acao}, com a finalidade de garantir atendimento digno e universal a todos os brasileiros.`
  },

  {
    id: 11,
    tipo: 'tema',
    emoji: '🔫',
    titulo: 'Violência Urbana',
    desc: 'Segurança pública e suas raízes sociais.',
    pronto: `INTRODUÇÃO:
A violência urbana configura-se como um dos fenômenos mais complexos e devastadores da sociedade brasileira. Muito além de um problema de segurança pública, ela é reflexo de desigualdades sociais históricas, da ausência do Estado em periferias e da falta de oportunidades para jovens em situação de vulnerabilidade.

DESENVOLVIMENTO 1:
Em primeiro lugar, a violência está intimamente ligada à exclusão social. Jovens criados em contextos de pobreza extrema, sem acesso à educação de qualidade e ao mercado de trabalho formal, tornam-se mais suscetíveis ao envolvimento com o crime, não por escolha, mas pela ausência de alternativas.

DESENVOLVIMENTO 2:
Além disso, a militarização das políticas de segurança pública tem se mostrado ineficaz no combate às causas estruturais da violência. O foco exclusivo na repressão, sem investimentos em prevenção social, perpetua um ciclo de violência que vitima, principalmente, jovens negros e periféricos.

CONCLUSÃO:
Para enfrentar a violência urbana de forma eficaz, é necessário que o Estado adote uma abordagem multidimensional, combinando investimentos em educação, cultura e geração de emprego com políticas de segurança humanizadas, com a finalidade de atacar as raízes do problema e garantir o direito à vida e à segurança para todos.`,
    campos: [
      { id: 'aspecto', label: 'Aspecto da violência que quer abordar', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
A violência urbana configura-se como um dos fenômenos mais complexos da sociedade brasileira. ${c.aspecto} revela que esse problema vai muito além da segurança pública.

DESENVOLVIMENTO 1:
Em primeiro lugar, ${c.arg1}, evidenciando como a exclusão social alimenta o ciclo de violência nas periferias brasileiras.

DESENVOLVIMENTO 2:
Além disso, ${c.arg2}, demonstrando que políticas puramente repressivas são insuficientes para enfrentar as raízes do problema.

CONCLUSÃO:
Para enfrentar a violência urbana, é necessário que ${c.agente} implemente ${c.acao}, com a finalidade de garantir o direito à vida e à segurança para todos os cidadãos.`
  },

  {
    id: 12,
    tipo: 'tema',
    emoji: '🤝',
    titulo: 'Direitos Humanos',
    desc: 'Violações e proteção dos direitos fundamentais.',
    pronto: `INTRODUÇÃO:
Os direitos humanos representam conquistas históricas da humanidade, consolidadas após séculos de lutas e sofrimentos. No Brasil, entretanto, a violação desses direitos ainda é uma realidade cotidiana para parcelas significativas da população, especialmente os grupos mais vulneráveis.

DESENVOLVIMENTO 1:
Em primeiro lugar, o racismo estrutural é uma das principais formas de violação dos direitos humanos no país. A população negra é a mais afetada pela violência policial, pelo encarceramento em massa e pela exclusão do mercado de trabalho, evidenciando que a igualdade formal prevista na Constituição está longe de ser uma realidade.

DESENVOLVIMENTO 2:
Além disso, a situação de povos indígenas e comunidades quilombolas expõe outro grave cenário de violação de direitos. A invasão de territórios tradicionais, o desmatamento e a omissão do Estado colocam em risco não apenas o modo de vida dessas comunidades, mas também sua própria sobrevivência.

CONCLUSÃO:
Para garantir a efetividade dos direitos humanos, é imprescindível que o Estado brasileiro fortaleça as instituições de proteção e fiscalização, por meio de políticas afirmativas e de combate à discriminação, com a finalidade de construir uma sociedade verdadeiramente democrática e igualitária.`,
    campos: [
      { id: 'direito', label: 'Direito humano violado que quer abordar', tipo: 'input' },
      { id: 'grupo', label: 'Grupo mais afetado', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
Os direitos humanos representam conquistas históricas da humanidade. No Brasil, entretanto, a violação do ${c.direito} ainda é uma realidade cotidiana, especialmente para ${c.grupo}.

DESENVOLVIMENTO 1:
Em primeiro lugar, ${c.arg1}, evidenciando que a igualdade formal prevista na Constituição está longe de ser uma realidade para todos.

DESENVOLVIMENTO 2:
Além disso, ${c.arg2}, demonstrando que a omissão do Estado perpetua ciclos de exclusão e violência contra os mais vulneráveis.

CONCLUSÃO:
Para garantir a efetividade dos direitos humanos, é imprescindível que ${c.agente} implemente ${c.acao}, com a finalidade de construir uma sociedade verdadeiramente democrática e igualitária.`
  },

  {
    id: 13,
    tipo: 'tema',
    emoji: '✊',
    titulo: 'Racismo e Intolerância',
    desc: 'Discriminação racial e seus impactos na sociedade brasileira.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
O Brasil é frequentemente celebrado como uma nação mestiça e tolerante, berço de uma cultura rica e diversa. No entanto, sob essa narrativa oficial de harmonia racial, esconde-se uma realidade brutalmente diferente: o racismo estrutural ainda determina as oportunidades, os direitos e até a expectativa de vida de milhões de brasileiros negros, que enfrentam cotidianamente as consequências de séculos de escravidão e exclusão sistemática.

DESENVOLVIMENTO 1:
Em primeiro lugar, o racismo estrutural manifesta-se de forma contundente no mercado de trabalho e na distribuição de renda. Segundo o IBGE, trabalhadores negros recebem, em média, salários significativamente menores do que trabalhadores brancos com a mesma escolaridade e função, evidenciando que a discriminação racial vai muito além de atitudes individuais preconceituosas — ela está enraizada nas instituições, nas políticas e nas práticas que organizam a sociedade brasileira. Além disso, a população negra é majoritária entre os mais pobres, os desempregados e os que vivem em condições precárias de moradia e saneamento.

DESENVOLVIMENTO 2:
Ademais, os dados sobre violência expõem a face mais cruel do racismo no Brasil. Relatórios do Atlas da Violência apontam que jovens negros são assassinados em proporção muito maior do que jovens brancos, revelando que o racismo não é apenas uma questão de preconceito social, mas uma questão de vida ou morte. A violência policial, que atinge de forma desproporcional a população negra e periférica, evidencia que o Estado, que deveria proteger todos os cidadãos igualmente, frequentemente reproduz e perpetua as desigualdades raciais que afirmam combater.

CONCLUSÃO:
Portanto, para enfrentar o racismo estrutural em suas múltiplas dimensões, é imprescindível que o Estado brasileiro fortaleça políticas afirmativas, como cotas raciais e programas de inclusão no mercado de trabalho, por meio de legislação antirracista rigorosa e de educação antirracista nas escolas públicas e privadas, com a finalidade de construir uma sociedade que reconheça sua dívida histórica com a população negra e avance concretamente em direção à igualdade racial.`,
    campos: [
      { id: 'aspecto', label: 'Aspecto do racismo que quer abordar', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
O Brasil é frequentemente celebrado como uma nação tolerante. No entanto, sob essa narrativa, esconde-se uma realidade diferente: ${c.aspecto} ainda determina as oportunidades e os direitos de milhões de brasileiros negros, que enfrentam as consequências de séculos de escravidão e exclusão sistemática.

DESENVOLVIMENTO 1:
Em primeiro lugar, ${c.arg1}. Esses dados evidenciam que a discriminação racial vai muito além de atitudes individuais — ela está enraizada nas instituições e nas práticas que organizam a sociedade brasileira, perpetuando desigualdades que comprometem o desenvolvimento do país.

DESENVOLVIMENTO 2:
Ademais, ${c.arg2}. Essa realidade demonstra que o racismo não é apenas uma questão de preconceito social, mas uma questão de vida ou morte para milhões de brasileiros que enfrentam cotidianamente suas consequências mais brutais.

CONCLUSÃO:
Portanto, para enfrentar o racismo estrutural, é imprescindível que ${c.agente} implemente ${c.acao}, por meio de ${c.mecanismo}, com a finalidade de construir uma sociedade que reconheça sua dívida histórica e avance concretamente em direção à igualdade racial.`
  },

  {
    id: 14,
    tipo: 'tema',
    emoji: '👩',
    titulo: 'Violência de Gênero',
    desc: 'Feminismo, machismo e violência contra a mulher no Brasil.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
O Brasil ocupa posições alarmantes nos rankings mundiais de violência contra a mulher, evidenciando que, apesar dos avanços legislativos das últimas décadas, o machismo estrutural ainda representa uma ameaça concreta à vida e à dignidade de milhões de brasileiras. A violência de gênero, que se manifesta de formas físicas, psicológicas, sexuais e patrimoniais, é o reflexo mais brutal de uma cultura que historicamente subordinou a mulher ao domínio masculino e naturalizou práticas que deveriam ser amplamente condenadas.

DESENVOLVIMENTO 1:
Em primeiro lugar, os números do feminicídio no Brasil revelam a dimensão trágica do problema. Segundo o Fórum Brasileiro de Segurança Pública, dezenas de mulheres são assassinadas por semana no país, a maioria por parceiros ou ex-parceiros íntimos, dentro de suas próprias casas — o lugar que deveria ser o mais seguro. Essa realidade expõe as limitações do sistema de proteção às vítimas, que frequentemente enfrentam burocracia, descrença e revitimização ao buscar ajuda nas instituições responsáveis por garantir sua segurança e seus direitos.

DESENVOLVIMENTO 2:
Além disso, a violência de gênero não se restringe às agressões físicas. O assédio, a violência psicológica e a desigualdade no mercado de trabalho são formas igualmente danosas de opressão que afetam a autoestima, a saúde mental e as oportunidades das mulheres brasileiras. Pesquisas indicam que mulheres ganham em média menos do que homens em funções equivalentes e ocupam menos espaços de poder e decisão, evidenciando que a construção de uma sociedade igualitária exige muito mais do que a punição dos agressores — requer uma transformação cultural profunda.

CONCLUSÃO:
Diante desse cenário, é imprescindível que o Estado brasileiro amplie o investimento nas redes de proteção à mulher, fortalecendo as delegacias especializadas e os centros de atendimento às vítimas, por meio da implementação efetiva da Lei Maria da Penha e de programas de educação para igualdade de gênero nas escolas, com a finalidade de erradicar a violência de gênero e garantir que todas as mulheres brasileiras possam viver com dignidade, liberdade e segurança.`,
    campos: [
      { id: 'aspecto', label: 'Aspecto da violência de gênero que quer abordar', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
O Brasil ocupa posições alarmantes nos rankings mundiais de violência contra a mulher. ${c.aspecto} evidencia que, apesar dos avanços legislativos, o machismo estrutural ainda representa uma ameaça concreta à vida e à dignidade de milhões de brasileiras.

DESENVOLVIMENTO 1:
Em primeiro lugar, ${c.arg1}. Essa realidade expõe as limitações do sistema de proteção às vítimas, que frequentemente enfrentam burocracia e revitimização ao buscar ajuda nas instituições responsáveis por garantir sua segurança.

DESENVOLVIMENTO 2:
Além disso, ${c.arg2}. Essa situação evidencia que a construção de uma sociedade igualitária exige muito mais do que a punição dos agressores — requer uma transformação cultural profunda que questione os valores machistas ainda presentes na sociedade brasileira.

CONCLUSÃO:
Diante desse cenário, é imprescindível que ${c.agente} implemente ${c.acao}, por meio de ${c.mecanismo}, com a finalidade de garantir que todas as mulheres brasileiras possam viver com dignidade, liberdade e segurança.`
  },

  {
    id: 15,
    tipo: 'tema',
    emoji: '🌡️',
    titulo: 'Crise Climática Global',
    desc: 'Aquecimento global, mudanças climáticas e sustentabilidade.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
A crise climática global deixou de ser uma previsão científica distante para se tornar uma realidade vivida no cotidiano de populações em todo o mundo. Eventos extremos como secas prolongadas, enchentes devastadoras, ondas de calor recordes e o avanço do nível dos oceanos são manifestações concretas de um processo acelerado pelo modelo de desenvolvimento insustentável adotado pela humanidade desde a Revolução Industrial. O Brasil, como um dos maiores países do mundo e detentor de uma das maiores biodiversidades do planeta, tem papel fundamental — e responsabilidade histórica — no enfrentamento dessa crise.

DESENVOLVIMENTO 1:
Em primeiro lugar, o desmatamento acelerado e a queima de combustíveis fósseis são as principais causas das emissões de gases de efeito estufa que impulsionam o aquecimento global. No Brasil, a destruição da Amazônia e do Cerrado não apenas libera enormes quantidades de carbono na atmosfera, mas também elimina ecossistemas que funcionam como reguladores do clima regional e global. Cientistas do IPCC alertam que, sem uma redução drástica nas emissões nas próximas décadas, os impactos das mudanças climáticas serão irreversíveis, ameaçando a segurança alimentar, hídrica e a sobrevivência de comunidades inteiras.

DESENVOLVIMENTO 2:
Ademais, os impactos da crise climática são profundamente desiguais. As populações mais pobres, que menos contribuem para as emissões globais, são as mais afetadas pelas consequências do aquecimento — enchentes em favelas, secas no semiárido nordestino e perda de meios de vida de comunidades ribeirinhas e indígenas. Essa injustiça climática revela que a crise ambiental é também uma crise social e de direitos humanos, exigindo respostas que combinem a proteção do meio ambiente com políticas de redução das desigualdades.

CONCLUSÃO:
Portanto, para que o Brasil cumpra seu papel no enfrentamento da crise climática, é fundamental que o governo federal implemente uma política ambiental robusta, baseada no desmatamento zero, na transição para energias renováveis e na valorização dos serviços ambientais prestados pelas florestas, por meio de acordos internacionais e de incentivos financeiros à preservação, com a finalidade de garantir um planeta habitável para as gerações futuras e posicionar o Brasil como liderança global na agenda da sustentabilidade.`,
    campos: [
      { id: 'aspecto', label: 'Aspecto da crise climática que quer abordar', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
A crise climática global deixou de ser uma previsão científica para se tornar uma realidade cotidiana. ${c.aspecto} evidencia que o modelo de desenvolvimento insustentável adotado pela humanidade ameaça a sobrevivência de populações em todo o mundo, e o Brasil tem papel fundamental no enfrentamento dessa crise.

DESENVOLVIMENTO 1:
Em primeiro lugar, ${c.arg1}. Cientistas alertam que, sem uma redução drástica nas emissões nas próximas décadas, os impactos das mudanças climáticas serão irreversíveis, ameaçando a segurança alimentar, hídrica e a sobrevivência de comunidades inteiras ao redor do mundo.

DESENVOLVIMENTO 2:
Ademais, ${c.arg2}. Essa injustiça climática revela que a crise ambiental é também uma crise social e de direitos humanos, exigindo respostas que combinem proteção do meio ambiente com políticas de redução das desigualdades.

CONCLUSÃO:
Portanto, é fundamental que ${c.agente} implemente ${c.acao}, por meio de ${c.mecanismo}, com a finalidade de garantir um planeta habitável para as gerações futuras e posicionar o Brasil como liderança global na agenda da sustentabilidade.`
  },

  {
    id: 16,
    tipo: 'tema',
    emoji: '💼',
    titulo: 'Trabalho e Desemprego',
    desc: 'Crise do emprego, precarização e futuro do trabalho no Brasil.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
O trabalho sempre ocupou um papel central na vida humana, sendo não apenas fonte de renda, mas de identidade, pertencimento e dignidade. No Brasil, no entanto, o mercado de trabalho atravessa uma crise profunda, marcada pelo desemprego estrutural, pela informalidade crescente e pela precarização das relações trabalhistas. Esse cenário, agravado pelas transformações tecnológicas e pelas reformas implementadas na última década, coloca em xeque conquistas históricas dos trabalhadores e aprofunda as desigualdades sociais num país já profundamente desigual.

DESENVOLVIMENTO 1:
Em primeiro lugar, o desemprego estrutural representa um dos maiores desafios do mercado de trabalho brasileiro. Segundo dados do IBGE, milhões de brasileiros estão desempregados, subempregados ou desalentados — aqueles que desistiram de procurar emprego por acreditar que não encontrarão uma vaga. Esse contingente, formado majoritariamente por jovens, mulheres negras e trabalhadores de baixa escolaridade, evidencia que o problema não é apenas conjuntural, mas estrutural, ligado a um modelo econômico que não gera empregos suficientes nem oferece qualificação adequada para a população.

DESENVOLVIMENTO 2:
Além disso, a precarização das relações de trabalho aprofunda ainda mais a vulnerabilidade dos trabalhadores brasileiros. A expansão do trabalho informal, dos contratos temporários e das plataformas digitais, embora ofereça flexibilidade, frequentemente priva os trabalhadores de direitos fundamentais como férias remuneradas, décimo terceiro salário, aposentadoria e cobertura previdenciária. Essa uberização do trabalho, longe de representar uma evolução, configura um retrocesso nas condições laborais conquistadas ao longo de décadas de luta dos movimentos sindicais e sociais.

CONCLUSÃO:
Portanto, para enfrentar a crise do trabalho no Brasil, é fundamental que o Estado implemente políticas ativas de emprego e qualificação profissional, por meio de programas de formação técnica alinhados às demandas do mercado e de incentivos fiscais para empresas que gerem empregos formais de qualidade, com a finalidade de reduzir o desemprego, combater a precarização e garantir que o trabalho continue sendo um instrumento de dignidade e desenvolvimento para todos os brasileiros.`,
    campos: [
      { id: 'aspecto', label: 'Aspecto do trabalho/desemprego que quer abordar', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
O trabalho ocupa papel central na vida humana, sendo fonte de renda, identidade e dignidade. No Brasil, no entanto, ${c.aspecto} coloca em xeque conquistas históricas dos trabalhadores e aprofunda as desigualdades sociais num país já profundamente desigual.

DESENVOLVIMENTO 1:
Em primeiro lugar, ${c.arg1}. Esse cenário evidencia que o problema não é apenas conjuntural, mas estrutural, ligado a um modelo econômico que não gera empregos suficientes nem oferece qualificação adequada para toda a população brasileira.

DESENVOLVIMENTO 2:
Além disso, ${c.arg2}. Essa realidade configura um retrocesso nas condições laborais conquistadas ao longo de décadas de luta dos movimentos sindicais e sociais, comprometendo a dignidade e os direitos de milhões de trabalhadores.

CONCLUSÃO:
Portanto, é fundamental que ${c.agente} implemente ${c.acao}, por meio de ${c.mecanismo}, com a finalidade de reduzir o desemprego, combater a precarização e garantir que o trabalho continue sendo um instrumento de dignidade e desenvolvimento para todos os brasileiros.`
  },

  {
    id: 17,
    tipo: 'tema',
    emoji: '📡',
    titulo: 'Fake News e Desinformação',
    desc: 'Desinformação, redes sociais e seus impactos na democracia.',
    pronto: `TÍTULO: [Título da sua redação]

INTRODUÇÃO:
Na era da informação, paradoxalmente, nunca foi tão difícil distinguir a verdade da mentira. A proliferação de fake news e a desinformação em larga escala representam uma das maiores ameaças à democracia, à saúde pública e à coesão social no Brasil e no mundo. Impulsionadas por algoritmos que priorizam o engajamento em detrimento da veracidade, as notícias falsas se espalham de forma viral, moldando percepções, influenciando eleições e colocando em risco vidas humanas — como demonstrou a pandemia de Covid-19, quando a desinformação sobre vacinas e tratamentos contribuiu para milhares de mortes evitáveis.

DESENVOLVIMENTO 1:
Em primeiro lugar, o modelo de negócios das grandes plataformas digitais é um dos principais motores da desinformação. Redes sociais como Facebook, WhatsApp e Twitter foram projetadas para maximizar o tempo de uso e o engajamento dos usuários, o que favorece conteúdos sensacionalistas, emocionalmente carregados e frequentemente falsos. Estudos do MIT indicam que notícias falsas se espalham até seis vezes mais rapidamente do que informações verdadeiras nas redes sociais, evidenciando que o problema não é acidental, mas estrutural ao modelo econômico dessas plataformas.

DESENVOLVIMENTO 2:
Além disso, a desinformação representa uma ameaça direta à democracia brasileira. Eleições contaminadas por mentiras, ataques a instituições com base em informações falsas e a polarização extrema alimentada por narrativas distorcidas comprometem a capacidade dos cidadãos de tomar decisões informadas e de confiar nas instituições democráticas. A chamada infodemia — excesso de informações falsas em circulação — dificulta o debate público qualificado e abre espaço para o avanço de discursos autoritários que se aproveitam da confusão e da desconfiança geradas pela desinformação.

CONCLUSÃO:
Portanto, para enfrentar a epidemia de desinformação, é necessário que o Estado brasileiro regulamente as plataformas digitais, responsabilizando-as pela disseminação de conteúdos falsos comprovadamente prejudiciais, por meio de legislação específica e de mecanismos de transparência algorítmica, com a finalidade de proteger a democracia, garantir o direito à informação de qualidade e formar cidadãos críticos capazes de navegar com responsabilidade no ambiente digital.`,
    campos: [
      { id: 'aspecto', label: 'Aspecto das fake news que quer abordar', tipo: 'input' },
      { id: 'arg1', label: 'Primeiro argumento', tipo: 'textarea' },
      { id: 'arg2', label: 'Segundo argumento', tipo: 'textarea' },
      { id: 'agente', label: 'Agente da proposta', tipo: 'input' },
      { id: 'acao', label: 'Ação proposta', tipo: 'input' },
      { id: 'mecanismo', label: 'Mecanismo de implementação', tipo: 'input' },
    ],
    gerar: (c) => `INTRODUÇÃO:
Na era da informação, paradoxalmente, nunca foi tão difícil distinguir a verdade da mentira. ${c.aspecto} representa uma das maiores ameaças à democracia, à saúde pública e à coesão social no Brasil, colocando em risco conquistas históricas e vidas humanas.

DESENVOLVIMENTO 1:
Em primeiro lugar, ${c.arg1}. Esse cenário evidencia que o problema da desinformação não é acidental, mas estrutural, ligado ao modelo econômico das plataformas digitais que priorizam o engajamento em detrimento da veracidade das informações.

DESENVOLVIMENTO 2:
Além disso, ${c.arg2}. Essa realidade demonstra que a desinformação representa uma ameaça direta à democracia brasileira, comprometendo a capacidade dos cidadãos de tomar decisões informadas e de confiar nas instituições que sustentam o Estado democrático de direito.

CONCLUSÃO:
Portanto, é necessário que ${c.agente} implemente ${c.acao}, por meio de ${c.mecanismo}, com a finalidade de proteger a democracia, garantir o direito à informação de qualidade e formar cidadãos críticos capazes de navegar com responsabilidade no ambiente digital.`
  },
];

// ===== RENDERIZA OS CARDS =====
function renderCards(filter = 'todos') {
  const grid = document.getElementById('modelosGrid');
  grid.innerHTML = '';

  const filtrados = filter === 'todos' ? modelos : modelos.filter(m => m.tipo === filter);

  filtrados.forEach(modelo => {
    const card = document.createElement('div');
    card.className = 'modelo-card';
    card.innerHTML = `
      <span class="card-emoji">${modelo.emoji}</span>
      <span class="card-tag">${modelo.tipo === 'estrutura' ? 'Por Estrutura' : 'Por Tema'}</span>
      <h3>${modelo.titulo}</h3>
      <p>${modelo.desc}</p>
    `;
    card.addEventListener('click', () => abrirModal(modelo));
    grid.appendChild(card);
  });
}

// ===== ABRE O MODAL =====
function abrirModal(modelo) {
  document.getElementById('modalTitle').textContent = `${modelo.emoji} ${modelo.titulo}`;
  document.getElementById('modalDesc').textContent = modelo.desc;
  document.getElementById('modeloTexto').textContent = modelo.pronto;

  // Renderiza formulário guiado
  const form = document.getElementById('guiadoForm');
  form.innerHTML = '';
  modelo.campos.forEach(campo => {
    const group = document.createElement('div');
    group.className = 'form-group';
    const tag = campo.tipo === 'textarea' ? 'textarea' : 'input';
    group.innerHTML = `
      <label for="guiado_${campo.id}">${campo.label}</label>
      <${tag} id="guiado_${campo.id}" placeholder="${campo.label}" ${campo.tipo === 'textarea' ? 'rows="3"' : ''}></${tag}>
    `;
    form.appendChild(group);
  });

  // Reseta estado
  document.getElementById('guiadoResultado').classList.add('hidden');
  document.getElementById('copyGuiado').classList.add('hidden');
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-tab="pronto"]').classList.add('active');
  document.getElementById('tab-pronto').classList.remove('hidden');
  document.getElementById('tab-guiado').classList.add('hidden');

  // Gerar guiado
  document.getElementById('gerarGuiado').onclick = () => {
    const campos = {};
    modelo.campos.forEach(campo => {
      const el = document.getElementById(`guiado_${campo.id}`);
      campos[campo.id] = el ? el.value.trim() : '';
    });
    const resultado = modelo.gerar(campos);
    const resultadoDiv = document.getElementById('guiadoResultado');
    resultadoDiv.textContent = resultado;
    resultadoDiv.classList.remove('hidden');
    document.getElementById('copyGuiado').classList.remove('hidden');
  };

  document.getElementById('modalOverlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// ===== FECHA O MODAL =====
function fecharModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', fecharModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modalOverlay')) fecharModal();
});

// ===== ABAS =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    document.getElementById(`tab-${tab}`).classList.remove('hidden');
  });
});

// ===== COPIAR =====
document.getElementById('copyModelo').addEventListener('click', () => {
  const text = document.getElementById('modeloTexto').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyModelo');
    btn.textContent = '✅ Copiado!';
    setTimeout(() => btn.textContent = '📋 Copiar modelo', 2000);
  });
});

document.getElementById('copyGuiado').addEventListener('click', () => {
  const text = document.getElementById('guiadoResultado').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyGuiado');
    btn.textContent = '✅ Copiado!';
    setTimeout(() => btn.textContent = '📋 Copiar redação', 2000);
  });
});

// ===== FILTROS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards(btn.dataset.filter);
  });
});

// ===== INICIALIZAÇÃO =====
renderCards();