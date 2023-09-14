import style from '@/app/style/pisicologia.module.css'
import Button from '../../../components/button'
import Button2 from '../../../components/button2'
import Card2 from '../../../components/card2'


import im8 from '../image/prblemas de sono.png'
import im18 from '../image/prblemas de sono2.png'
import im27 from '../image/Transtornos de Ansiedade.png'
import im28 from '../image/Transtornos de Ansiedade2.png'
import im29 from '../image/Transtornos do Humor.png'
import im31 from '../image/Transtornos do Humor2.png'
import im30 from '../image/Transtornos do Humor3.png'
import im33 from '../image/ranstornos do Comportamento Alimentar.png'
import im34 from '../image/ranstornos do Comportamento Alimentar2.png'
import im35 from '../image/Transtornos do Controle dos Impulsos.png'
import im36 from '../image/Transtornos do Controle dos Impulsos2.png'
import im37 from '../image/Transtornos do Controle dos Impulsos3.png'
import im38 from '../image/Relacionados ao Uso de Substâncias.png'
import im39 from '../image/Relacionados ao Uso de Substâncias2.png'
import im40 from '../image/Transtornos de Personalidade.png'
import im41 from '../image/Transtornos de Personalidade2.png'
import im42 from '../image/Estresse e Trauma.png'
import im43 from '../image/Estresse e Trauma2.png'
import im44 from '../image/Problemas de Relacionamento.png'
import im45 from '../image/Problemas de Relacionamento2.png'
import im46 from '../image/Problemas de Autoestima.png'
import im47 from '../image/Questões de Identidade e Orientação Sexua.png'
import im48 from '../image/Problemas de Saúde Mental Infantil e Adolescente.png'
import im49 from '../image/Problemas de Saúde Mental Infantil e Adolescente2.png'
import im50 from '../image/Problemas de Saúde Mental no Idoso.png'
import im51 from '../image/Estresse no Trabalho e Burnout.png'
import im52 from '../image/Luto e Perda.png'
import im53 from '../image/Luto e Perda2.png'
import im54 from '../image/Transtornos Sexuais.png'
import im55 from '../image/Desenvolvimento Pessoal.png'

export default function pisicologia() {
  return (
    <div className={style.hea}>
      <div className={style.ajusta}>
        <h1>Saúde do corpo e da mente</h1>
        <h3>Determinação e satisfação em oferecer <br /> o melhor para nossos paciêntes</h3>
        <div className={style.but}>
          <Button texto={'Agende um Horário'} />
          <Button2 texto={'Saiba Mais'} />
        </div>

      </div>
      <br />
        <div className={style.informações}>
        <div className={style.apresentação} >
        <h2>O que é Psicologia?.</h2>
        <h4>A psicologia é a ciência que estuda o comportamento humano e os processos mentais. Ela busca compreender como as pessoas pensam, sentem e se comportam, bem como as interações entre os aspectos biológicos, emocionais, cognitivos e sociais que influenciam o funcionamento mental e comportamental. <br /> A psicologia abrange uma ampla gama de áreas de pesquisa e aplicação, incluindo psicologia clínica, psicologia educacional, psicologia organizacional, psicologia do desenvolvimento, psicologia social, entre outras. <br /> Ela utiliza métodos científicos para investigar questões relacionadas à mente, ao cérebro, ao comportamento individual e coletivo, e busca contribuir para o entendimento e a melhoria da qualidade de vida das pessoas.</h4>
          
        </div>
      </div>
      <div className={style.divisor}>

        <h2 >Tratamentos da Psicologia</h2>

      </div>
      <div className={style.mod1}>
        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Problemas relacionados a Sono' imagem={im8} />
            <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Problemas relacionados a Sono</h2>
              <p>Os problemas de sono são bastante comuns e podem ter várias causas, muitas das quais estão relacionadas à psicologia. Aqui estão alguns problemas de sono comuns que têm uma base psicológica:</p>
              <ul>
                <li>Insônia: A insônia é caracterizada pela dificuldade em iniciar ou manter o sono, resultando em sono de má qualidade. Fatores psicológicos, como estresse, ansiedade, depressão e preocupações excessivas, podem desempenhar um papel significativo na insônia..</li>
                <li>Pesadelos e Terrores Noturnos: Distúrbios de sono como pesadelos e terrores noturnos podem ser desencadeados por estresse, traumas passados ​​ou ansiedade. Eles podem causar despertares frequentes durante a noite.</li>
                <li>Sonambulismo: O sonambulismo envolve atividades motoras durante o sono, como andar ou falar. Fatores psicológicos, como ansiedade e estresse, podem contribuir para episódios de sonambulismo.</li>
                <li> Bruxismo: O bruxismo é o ranger ou apertar os dentes durante o sono. O estresse e a ansiedade podem desencadear ou piorar esse hábito.</li>
                <li> Síndrome de Fadiga Crônica: Embora a relação entre a síndrome de fadiga crônica e os problemas de sono seja complexa, muitos indivíduos com essa condição enfrentam distúrbios de sono, como insônia e sono não reparador. Questões psicológicas, como depressão e ansiedade, também estão frequentemente associadas a essa síndrome.</li>


              </ul>
            </div>
          </div>

        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
          <Card2 titulo='Problemas com o sono ' imagem={im18} />
          <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Problemas com o sono</h2>
              <p>É importante abordar os problemas de sono com uma abordagem holística, considerando tanto os fatores físicos quanto os psicológicos. Se você tiver problemas de sono, é aconselhável nos procurar, para avaliar suas preocupações e desenvolver um plano de tratamento adequado.</p>
              <ul>
                <li>Mudanças de horário e Jet Lag: A adaptação a novos fusos horários pode ser difícil devido a desregulações no ritmo circadiano. Fatores psicológicos, como a adaptação emocional a um novo ambiente, também podem afetar o sono durante as mudanças de horário.
                </li>
                <li>Higiene do Sono Inadequada: Comportamentos e hábitos inadequados antes de dormir podem resultar em dificuldades para adormecer. Fatores psicológicos, como estresse e ansiedade, podem influenciar esses comportamentos.</li>
                <li>Ronco e Apneia do Sono: Embora esses problemas estejam mais relacionados a questões físicas, eles também podem ser agravados por fatores psicológicos, como excesso de peso, estresse e ansiedade.</li>
                <li>  A massoterapia pode auxiliar na mobilização do tecido cicatricial, ajudando a prevenir a formação de aderências e promovendo a regeneração saudável dos tecidos.</li>
                <li>  Excesso de Estresse e Ansiedade: A ansiedade e o estresse psicológico podem afetar diretamente a qualidade do sono, tornando difícil relaxar e adormecer.</li>
                <li> Depressão e Sono: A depressão pode depender tanto da qualidade quanto do padrão de sono. Algumas pessoas experimentam insônia, enquanto outras podem dormir tranquilamente. Alterações nos níveis de neurotransmissores no cérebro relacionadas ao humor também podem afetar os ritmos circadianos e a regulação do sono.</li>
              </ul>
            </div>
            
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Transtornos de Ansiedade ' imagem={im27} />
            <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Sintomas.</h2>
              <p>Os transtornos de ansiedade são um grupo de condições de saúde mental caracterizadas por sentimentos intensos e persistentes de ansiedade, medo ou preocupação que podem interferir significativamente na vida diária de uma pessoa. Esses transtornos podem variar em gravidade, sintomas e impacto, mas todos eles envolvem uma resposta de ansiedade que é desproporcional às situações ou eventos que a desencadeiam. Aqui estão alguns dos transtornos de ansiedade mais comuns: </p>
              <ul>
                <li>Transtorno de Ansiedade Generalizada (TAG)**: Caracterizado por preocupações excessivas e persistentes sobre várias áreas da vida, como saúde, trabalho, relacionamentos, entre outros, por pelo menos seis meses. 2</li>

                <li>Transtorno de Ansiedade Social (Fobia Social)**: Caracteriza-se por medo intenso e persistente de situações sociais ou de desempenho, devido ao medo de ser julgado, humilhado ou envergonhado. </li>
                <li>   Transtorno de Ansiedade de Separação**: Mais comum em crianças, mas também pode afetar adultos, envolve um medo excessivo de se separar</li>
                <li> Transtorno de Ansiedade de Status : Envolver a preocupação excessivamente com situações de avaliação ou julgamento social, como falar em público ou conhecer pessoas novas.</li>
                <li> Transtorno de Ansiedade de Especulação (Tricotilomania) : Caracterizado pela compulsão de arrancar os próprios cabelos, resultando em perda significativa de cabelo e, frequentemente, causando angústia.</li>

              </ul>
            </div>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
          <Card2 titulo='Transtornos de Ansiedade' imagem={im28} />
          <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Transtornos de Ansiedade</h2>
              <p>O tratamento para transtornos de ansiedade pode envolver uma combinação de terapia . Nós podemos te ajudar em cada uma dessas situações.</p>
              <ul>
                <li>Transtorno do Pânico**: Envolve ataques de pânico inesperados e recorrentes, acompanhados de sintomas físicos e emocionais, como batimentos cardíacos acelerados, sudorese, tremores e uma sensação iminente de perigo. </li>
                <li>   Transtorno de Ansiedade de Performance</li>

                <li> Transtorno de Ansiedade de Saúde (Hipocondria) : Envolve preocupação excessiva com a saúde e a crença persistente de ter uma doença grave, mesmo quando não há evidências médicas para sustentá-la</li>
                <li> Transtorno de Ansiedade Seletiva (TAS) : Também conhecido como Mutismo Seletivo, é mais comum em crianças. Envolver uma incapacidade persistente de falar em determinadas situações sociais</li>
                <li> Agorafobia : Este transtorno envolve ansiedade intensa em situações ou lugares nos quais uma pessoa sente que escapar ou obter ajuda seria difícil ou embaraçoso, caso ocorra um ataque de pânico ou sintomas semelhantes.</li>
                <li> Transtorno de Ansiedade Noturna (Pesadelos e Terrores Noturnos) : Caracterizado por pesadelos frequentes ou episódios de terror noturno que podem perturbar ou dormir e causar ansiedade.</li>



              </ul>
            </div>
           
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Transtornos do Humor' imagem={im29} />
            <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Transtornos do Humor</h2>
              <p>Os transtornos do humor, também conhecidos como transtornos afetivos, são condições psiquiátricas que afetam a maneira como uma pessoa sente emoções e lida com elas. Eles podem influenciar a forma como alguém experimenta o humor, a energia, os pensamentos e o comportamento. Dois dos transtornos de humor mais conhecidos são a depressão e o transtorno bipolar. Vou explicar um pouco sobre cada um deles:</p>
              <ul>
                <li> Transtorno Depressivo Maior (Depressão) : A depressão é caracterizada por sentimentos persistentes de tristeza, perda de interesse ou prazer em atividades que costumavam ser planejadas, alterações no apetite e no sono, fadiga, dificuldade de concentração, sentimentos de culpa ou inutilidade e, em casos mais graves, pensamentos de morte ou suicídio. A depressão pode ser desencadeada por fatores genéticos, químicos e ambientais.</li>
                <li> Transtorno Bipolar : O transtorno bipolar envolve oscilações extremas no humor, que vão desde episódios de depressão profunda até episódios de mania ou hipomania. Durante uma fase</li>

                <li> Transtorno Depressivo Persistente (Distimia) : A distimia é um tipo de depressão crônica de baixo grau que persiste por longos períodos de tempo, geralmente por mais de dois anos. Os sintomas são semelhantes aos da depressão maior, mas menos intensos. Pode ser difícil para uma pessoa reconhecer que está deprimida, pois os sintomas são menos graves e mais persistentes.</li>


              </ul>
            </div>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
          <Card2 titulo='Transtornos do Humor' imagem={im30} />
          <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Transtornos do Humor</h2>
              <p>É importante lembrar que esses transtornos podem ser tratados com sucesso com terapia, medicação ou uma combinação de ambos. Se você ou alguém que você conhece está apresentando sintomas consistentes com um transtorno de humor, é aconselhável nos procurar  para avaliação e tratamento adequado.</p>
              <ul>
                <li> Transtorno Desafiador Opositivo (TDO) : Embora não seja um transtorno de humor, o TDO é um transtorno comportamental que pode estar associado a alterações de humor. Envolver um padrão persistente de comportamento, hostil e desobediente em crianças e adolescentes. Pode incluir irritabilidade intensa e explosões de raiva desproporcionais.</li>
                <li> Transtorno Disfórico Pré-Menstrual (TDPM) : O TDPM é caracterizado por mudanças de humor acentuadas e sintomas físicos que ocorrem durante o ciclo menstrual. Esses sintomas podem incluir irritabilidade, tensão, fadiga, alterações no sono e no apetite. É mais grave que os sintomas normais associados à menstruação.</li>
                <li> Transtorno de Humor Induzido por Substância : O uso ou abuso de substância, como álcool, drogas ilícitas ou certos medicamentos, pode levar a alterações significativas no humor. Por exemplo, o uso excessivo de álcool pode contribuir para a depressão, enquanto algumas drogas estimulantes podem desencadear episódios de mania.</li>
                <li> Transtorno do Humor devido a uma Condição Médica : Certas condições médicas, como distúrbios da tireoide, doenças neurológicas ou outras condições de saúde, podem causar alterações no humor. Quando os sintomas de humor são diretamente atribuíveis a uma condição médica, é revelado um transtorno de humor devido a uma condição médica.</li>

              </ul>
            </div>
            
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Transtorno Alimentar.' imagem={im33} />
            <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Transtorno Alimentar</h2>
              <p>Os Transtornos do Comportamento Alimentar (TCA) são condições psicológicas que envolvem padrões anormais de alimentação e pensamentos perturbados em relação à alimentação, peso, corpo e imagem corporal. Esses transtornos podem ter sérias implicações para a saúde física e mental das pessoas afetadas. Alguns dos transtornos
                Aqui estão algumas informações sobre esses transtornos:</p>
              <ul>
                <li>Anorexia Nervosa: Pessoas com anorexia nervosa têm uma preocupação intensa em perder peso e uma percepção distorcida de seu próprio corpo, geralmente acreditando que estão acima do peso, mesmo que estejam abaixo do peso saudável. Eles tendem a restringir severamente a ingestão de alimentos, o que pode levar a uma desnutrição grave e outros problemas de saúde.</li>
                <li> Bulimia Nervosa: Indivíduos com bulimia nervosa apresentam episódios de compulsão alimentar, nos quais consomem grandes quantidades de alimentos em um curto período de tempo,</li>

                <li>Transtorno da Compulsão Alimentar Periódica: Nesse transtorno, ocorrência de episódios de compulsão alimentar sem os comportamentos compensatórios observados na bulimia nervosa. Pessoas com esse transtorno vêm em excesso de forma descontrolada e, muitas vezes, sentem vergonha e culpa após esses</li>
                <li> É importante destacar que o TCA não se ressente

                  O tratamento para os TCA geralmente envolve uma abordagem multidisciplinar

                  Se você ou alguém que você conhece está lutando com um Transtorno do Comportamento Alimentar,proucure ajuda profissional o mais rápido possível.</li>


              </ul>
            </div>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
          <Card2 titulo='Transtornos do Comportamento Alimentar' imagem={im34} />
          <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Transtornos do Comportamento Alimentar.</h2>
              <p>É importante destacar que, embora possa haver sobreposições e nuances entre esses transtornos, cada um tem suas próprias características específicas e critérios diagnósticos. O diagnóstico e tratamento adequados devem ser feitos por profissionais de saúde mental e médicos especializados.</p>
              <ul>
                <li>Transtorno de Evitação/Restrição da Ingestão de Alimentos: Este é um transtorno menos conhecido, no qual uma pessoa evita certos alimentos ou grupos de alimentos devido a sensações alimentares percebidas, aversões sensoriais ou preocupações com consequências negativas na saúde ou no peso.</li>
                <li> Transtorno de Ruminação: Esse transtorno envolve regurgitação repetida de alimentos após as refeições, seguida de remastigação, ressalva ou descarte de alimentos. Geralmente não está associado a uma condição médica específica e pode afetar crianças e adultos.</li>

                <li>Ortorexia: Embora ainda não seja oficialmente reconhecida como um transtorno alimentar nos manuais diagnósticos, a ortorexia envolve uma obsessão por comer alimentos considerados saudáveis. Pessoas com ortorexia podem evitar certos grupos de alimentos e se preocupar com a pureza e a qualidade dos alimentos que consomem.</li>
                <li> Transtorno da Alimentação Noturna: Pessoas com esse transtorno têm um padrão de consumo alimentar significativo durante a noite, muitas vezes acordando para comer e consumindo a maioria das calorias nesse período. Esse padrão está associado a problemas de sono e alterações no metabolismo.</li>


              </ul>
            </div>
            
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Transtornos do Controle dos Impulsos' imagem={im37} />
            <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Transtornos do Controle dos Impulsos</h2>
              <p>Os Transtornos do Controle dos Impulsos são um grupo de condições psiquiátricas descritas pela dificuldade em resistir a impulsos ou desejos irresistíveis, levando a comportamentos repetitivos e muitas vezes agressivos. Esse
                Aqui estão alguns exemplos de Transtornos do Controle dos Impulsos:</p>
              <ul>

                <li> Transtorno de Jogo: Também conhecido como jogo patológico, é caracterizado por um padrão persistente e recorrente de comportamento de jogo, apesar das consequências adversárias. Pode levar a problemas financeiros, emocionais e sociais graves.</li>
                <li> Transtorno Explosivo Intermitente: Envolve episódios de agressão verbal ou física desproporcional em relação à situação, desencadeados por um estresse mínimo. Pessoas com esse transtorno têm dificuldade em controlar sua raiva.</li>
                <li> Cleptomania: Caracteriza-se pelo impulso irresistível de roubar objetos desnecessários, geralmente sem valor monetário, mesmo quando não há motivo financeiro para fazê-lo. Uma pessoa pode experimentar tensão antes de cometer o roubo e quebrar temporariamente após.</li>
                <li>Transtorno da Compulsão Alimentar Periódica: Envolve episódios recorrentes de compulsão alimentar, onde uma grande quantidade de comida é consumida em um curto período, acompanhada de uma sensação de falta de controle. Diferencia-se da bulimia nervosa porque não é seguida por comportamentos compensatórios,</li>
                <li>Transtorno de Compra Compulsiva: Caracteriza-se por compras excessivas e impulsivas que resultam em estresse financeiro ou acúmulo excessivo de objetos.</li>

              </ul>
            </div>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
          <Card2 titulo='Transtornos do Controle dos Impulsos' imagem={im35} />
          <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Transtornos do Controle dos Impulsos</h2>
              <p>É importante observar que o diagnóstico de Transtornos do Controle dos Impulsos é realizado por profissionais de saúde mental com base em critérios específicos em diagnósticos manuais, como o DSM-5 (Manual Diagnóstico e Estatístico de Transt

                O tratamento desses transtornos pode variar de pessoa para pessoa, dependendo da gravidade e da necessidade</p>
              <ul>
                <li>Transtorno de Dermatilomania (ou Escoriação Compulsiva): Nesse transtorno, a pessoa sente a necessidade irresistível de coçar, beliscar, cutucar ou espremer a pele repetidamente, muitas vezes resultando em lesões na pele. Isso ocorre frequentemente como uma resposta à ansiedade.</li>
                <li> Transtorno de Impulsividade: Embora não seja um diagnóstico formal, a impulsividade excessiva pode ser um sintoma subjacente em muitos transtornos mentais, como Transtorno de Déficit de Atenção</li>

                <li> Transtorno de Internet e Tecnologia: À medida que a tecnologia se torna mais central em nossas vidas, algumas pessoas podem desenvolver padrões de uso compulsivos</li>


              </ul>
            </div>
          
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Relacionados ao Uso de Substâncias' imagem={im38} />
            <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Relacionados ao Uso de Substâncias</h2>
              <p>Os Transtornos Relacionados ao Uso de Substâncias (TRUS), também conhecidos como Transtornos Relacionados ao Uso de Drogas, são um grupo de condições de saúde mental que envolve o uso prejudicial ou problemático de substâncias psicoativas, como álcool, tabaco, cannabis, cocaína, opioides</p>
              <ul>
                <li> Transtorno pelo Uso de Álcool: Envolve o consumo excessivo e problemático de álcool, causando dificuldades sociais, profissionais, de saúde e legais.</li>
                <li> Transtorno pelo Uso de Substâncias Psicoativas: Isso inclui o uso problemático de uma variedade de drogas, como maconha, cocaína, anfetaminas, alucinógenos, entre outras.</li>

                <li> Transtorno pelo Uso de Opioides: Envolve o uso problemático de opioides, incluindo substâncias como heroína e analgésicos prescritos.</li>
                <li>  Transtorno pelo Uso de Estimulantes: Relacionado ao uso excessivo de estimulantes, como cocaína e anfetaminas, com consequências adversas.</li>
                <li>  Transtorno pelo uso de sedativos/hipnóticos/ansiolíticos: Isso se refere ao uso problemático de substâncias como benzodiazepínicos, que são frequentemente prescritos para ansiedade e insônia.</li>
                <li> É importante notar que o diagnóstico de um TRUS leva em consideração critérios específicos específicos nos sistemas de classificação (CID-10, DSM-5) e requer a avaliação de um profissional de saúde mental qualificado. O tratamento para os TRUS pode incluir terapia comportamental, terapia cognitivo-comportamental, programas de reabilitação, suporte social e, em alguns casos, medicamentos.</li>

              </ul>
            </div>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
          <Card2 titulo='Transtorno de personalidade' imagem={im40} />
          <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Transtorno de personalidade</h2>
              <p>
                Os transtornos de personalidade são padrões persistentes e inflexíveis de pensamento, comportamento e emoções que alteram significativamente as expectativas culturais e interferem no funcionamento social, ocupacional ou pessoal de um indivíduo. Esses padrões geralmente começam a se manifestar na adolescência ou no início da idade adulta e tendem a ser resultantes ao longo do tempo.</p>
              <ul>
                <li> Cluster A - Transtornos excêntricos ou bizarros:

                  Transtorno de Personalidade Paranóide: Caracterizado por desconfiança excessiva, suspeitas infundadas e interpretações distorcidas dos interesses dos outros.
                  Transtorno de Personalidade Esquizoide: Indivíduos com esse transtorno tendem a ser isolados socialmente, têm dificuldade em expressar emoções e mostram pouco interesse em relacionamentos interpessoais.
                  Transtorno de Personalidade Esquizotípica: Caracterizado por padrões de pensamento e comportamento estranhos, aparentemente excêntricos e desconforto social.</li>
                <p>Cluster B - Transtornos dramáticos, emocionais ou imprevisíveis:

                  Transtorno de Personalidade Antissocial: Pessoas com esse transtorno têm pouco respeito pelas normas sociais, podem ser manipuladoras, impulsivas e frequentemente têm histórico de comportamento violento.
                  Transtorno de Personalidade Borderline: Caracterizado por instabilidade emocional intensa, relacionamentos tumultuados, impulsividade e autoimagem instável.
                  Transtorno de Personalidade Histriônica: Indivíduos com esse transtorno buscam constantemente atenção e um desejo excessivo de serem o centro das atenções. Seu comportamento pode ser teatral e emocionalmente superficial.
                  Transtorno de Personalidade Narcisista: Caracterizado por um senso inflado de importância pessoal, falta de empatia e busca constante por admiração.</p>


              </ul>
            </div>
           
          </div>
        </div>



        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Transtorno de Personalidade' imagem={im41} />
            <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Transtorno de Personalidade</h2>
              <p>Vale ressaltar que o diagnóstico de transtornos de personalidade deve ser feito por profissionais de saúde mental específicos, após uma avaliação cuidadosa do histórico do indivíduo e de seus sintomas. O tratamento pode envolver terapia individual, terapia de grupo e, em alguns casos, medicamentos para tratar sintomas específicos, como depressão ou ansiedade associada a transtornos de personalidade.</p>
              <ul>
                <li>Cluster C - Transtornos ansiosos ou temerosos:

                  Transtorno de Personalidade Evitativa: Pessoas com esse transtorno tendem a evitar situações sociais devido a sentimentos de inadequação e medo de infecção.
                  Transtorno de Personalidade Dependente: Caracterizado por uma necessidade excessiva de ser cuidado e apoiado pelos outros, levando a comportamentos submissos e dificuldade em tomar decisões.
                  Transtorno de Personalidade Obsessivo-Compulsiva: Pessoas com esse transtorno são preocupadas com a ordem, perfeccionismo e controle, o que pode interferir em seu funcionamento cotidiano.</li>


              </ul>
            </div>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
          <Card2 titulo='Estresse  Traumático' imagem={im42} />
          <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Estresse  Traumático</h2>
              <p>O estresse é uma resposta do organismo a qualquer demanda ou pressão que exija ajustes. Pode ser causado por eventos positivos ou negativos e é uma parte natural da vida. No entanto, quando o estresse se torna excessivo ou persistente, pode levar a problemas de saúde física e mental.</p>
              <ul>
                <li> O estresse traumático, por sua vez, refere-se a uma forma mais intensa e de tensão de estresse, geralmente causada por eventos traumáticos. Um evento traumático é algo que ameaça a integridade física ou psicológica de uma pessoa, causando reações emocionais e psicológicas intensas. Alguns exemplos de eventos traumáticos incluem acidentes graves, abuso físico ou sexual, desastres naturais, violência, guerra e outros eventos extremamente perturbadores.

                  O Transtorno de Estresse Pós-Traumático (TEPT) é um diagnóstico psiquiátrico que se aplica a pessoas que experimentaram eventos traumáticos e começaram a sofrer de estresse intenso após o evento. Os sintomas do TEPT incluem flashbacks perturbadores.</li>
                <p>É importante procurar ajuda profissional se você acredita que está sofrendo de estresse traumático ou TEPT, pois esses transtornos podem afetar significativamente a qualidade de vida e a necessidade de tratamento adequado. A terapia, como a terapia cognitivo-comportamental (TCC), e, em alguns casos, a medicação pode ser usada para ajudar as pessoas a lidar com os efeitos do estresse traumático.</p>

              </ul>
            </div>
           
          </div>
        </div>



        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Problemas de Relacionamento' imagem={im45} />
            <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Problemas de Relacionamento</h2>
              <p>É normal enfrentar problemas de relacionamento em diversas áreas da vida, seja em relacionamentos amorosos, familiares, de amizade ou no ambiente de trabalho. Aqui estão alguns problemas comuns que as pessoas enfrentam em seus relacionamentos, juntamente com algumas orientações sobre como lidar com eles:</p>
              <ul>
                <li> Falta de Comunicação: A comunicação deficiente é um dos principais problemas. Isso pode incluir não expressar sentimentos, não compartilhar informações importantes ou não ouvir atentamente o outro. Para lidar com isso, é fundamental praticar a escuta ativa, expressar suas próprias necessidades de maneira clara e estar aberto a ouvir o que o outro tem a dizer.</li>
                <li> Desentendimentos e Conflitos: Os conflitos são naturais, mas quando não são resolvidos deliberadamente, podem causar problemas duradouros. Aprenda a abordar os conflitos de maneira construtiva, focando em soluções e compromissos, em vez de culpar ou acusar.</li>

                <li> Falta de Confiança: A confiança é essencial em qualquer relacionamento. Se a confiança foi quebrada, é importante ter conversas honestas sobre o que aconteceu, demonstrar mudança de comportamento e dar ritmo para que a confiança seja reconstruída gradualmente.</li>
                <li> Diferenças de Opinião e Valores: As pessoas têm opiniões e valores diferentes, o que pode levar a discordâncias. É importante aprender a respeitar as diferenças e encontrar maneiras de compromisso, quando possível, ou concordar em discordar sem dificuldades no relacionamento </li>
                <li>
                  Insegurança e Ciúmes: Sentimentos de insegurança e ciúmes podem surgir devido a questões internas ou externas ao relacionamento. Trabalhe na construção da autoestima e na comunicação aberta para abordar esses sentimentos de forma saudável.</li>

              </ul>
            </div>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
          <Card2 titulo='Problemas de Saúde Mental Infantil e Adolescente' imagem={im49} />
          <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Problemas de Saúde Mental Infantil e Adolescente</h2>
              <p>Os problemas de saúde mental em crianças e adolescentes têm recebido cada vez mais atenção nos últimos anos, à medida que se confirma a importância de identificar e tratar essas questões precocemente. Alguns dos problemas de saúde mental mais comuns em crianças e adolescentes incluem:</p>
              <ul>
                <li> Transtornos de Ansiedade: Isso inclui transtorno de ansiedade generalizada, fobias específicas, transtorno de pânico e transtorno de ansiedade social. Crianças e adolescentes podem apresentar preocupações excessivas, medos irracionais e sintomas físicos de ansiedade.</li>
                <p>Transtorno do Déficit de Atenção e Hiperatividade (TDAH): Caracteriza-se por dificuldades em manter a atenção, hiperatividade e impulsividade. Isso pode impactar o desempenho escolar, a interação social e <br />

                  Depressão: Crianças e adolescentes também podem experimentar sintomas de depressão, incluindo tristeza persistente, perda de interesse pelas atividades, mudanças no sono e no apetite e sentimentos de desesperança.</p>
                <li> Transtornos do Espectro Autista (TEA): Embora seja um transtorno de desenvolvimento mais amplo, muitas vezes está associado a desafios na comunicação, interação social e comportamentos repetitivos.</li>
                <li> Automutilação e Suicídio: Infelizmente, muitos adolescentes enfrentam pensamentos suicidas e podem se envolver em automutilação como uma forma de lidar com suas emoções.</li>
                <li> Transtornos de Conduta: Crianças e adolescentes com esses transtornos frequentemente exibem comportamentos desafiadores, agressivos e antissociais, como mentir, roubar, brigar e desrespeitar regras.</li>


              </ul>
            </div>
           
          </div>
        </div>



        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Problemas de Saúde Mental no Idoso' imagem={im50} />
            <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Problemas de Saúde Mental no Idoso</h2>
              <p>Os problemas de saúde mental no idoso são uma preocupação significativa, uma vez que a população idosa está em constante crescimento em muitas partes do mundo. Várias questões podem contribuir para o surgimento e agravamento desses problemas, incluindo </p>
              <ul>
                <li> Depressão: A depressão é uma condição grave que pode afetar qualquer faixa etária, mas os idosos estão em risco particular devido a fatores como perda de entes queridos, isolamento social, problemas de saúde psicológicos e alterações hormonais. A depressão pode se manifestar de maneiras diferentes nos idosos, muitas vezes com queixas físicas em vez de sintomas emocionais.</li>
                <li> Ansiedade: A ansiedade é outra condição comum em idosos. Preocupações com a saúde, solidão, finanças e outras questões podem contribuir para o desenvolvimento de transtornos de ansiedade. A ansiedade também pode ser resultado de condições médicas subjacentes.</li>

                <li> Transtornos Cognitivos: Isso inclui condições como a demência e a doença de Alzheimer. Esses transtornos afetam a memória, o raciocínio e a capacidade de realizar atividades diárias. O envelhecimento natural também pode resultar em diminuição da cognição</li>
                <li>Isolamento Social: Muitos idosos enfrentam isolamento social devido a fatores como perda de amigos e familiares, atraso e dificuldade de locomoção. O isolamento social pode levar à solidão, depressão e outros problemas de saúde mental. </li>
                <li> Mudanças na Identidade e Autoestima: A transição para a aposentadoria e as mudanças no papel social podem afetar a identidade e a autoestima dos idosos, levando a problemas emocionais.</li>

              </ul>
            </div>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
          <Card2 titulo='Estresse no Trabalho e Burnout' imagem={im51} />
          <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Estresse no Trabalho e Burnout</h2>
              <p>O estresse no trabalho e o burnout são conceitos relacionados que se referem a problemas de saúde mental que podem ocorrer devido a condições desafiadoras no ambiente de trabalho. Embora compartilhem algumas semelhanças, eles têm características distintas.</p>
              <ul>
                <li> Estresse no Trabalho:
                  O estresse no trabalho é uma resposta natural do corpo às demandas e pressões excessivas no ambiente profissional. Ele pode ser causado por uma variedade de fatores, como prazos apertados, carga de trabalho elevada, conflitos interpessoais, falta de controle sobre as tarefas, falta de apoio da equipe ou superiores, entre outros. Um nível moderado de estresse pode até ser benéfico, pois pode motivar as pessoas a se esforçarem e alcançarem metas. No entanto, quando o estresse se torna constante e opressivo, pode levar a problemas de saúde física e mental, afetando o bem-estar geral da pessoa.</li>
                <p>Burnout:
                  O burnout é um estado de exaustão emocional, mental e física resultante de um estresse prolongado e não gerenciado no ambiente de trabalho. Foi inicialmente descrito no contexto profissional da área</p>
                <li> Diferenças entre Estresse e Burnout: <br />

                  O estresse é uma consequência de pressão ou demandas, enquanto o burnout é um estado de exaustão resultante do estresse prolongado.
                  O estresse é geralmente acompanhado por sentimentos de ansiedade e sobrecarga, enquanto o burnout envolve sentimentos de desesperança, apatia e desânimo.
                  O estresse está mais relacionado a uma resposta aguda a situações desafiadoras, enquanto o burnout é um processo gradual que se desenvolve ao longo do tempo.
                  O estresse pode diminuir quando as condições no ambiente de trabalho melhoram, enquanto o burnout muitas vezes requer intervenção mais intensiva para ser superado.</li>


              </ul>
            </div>
          
          </div>
        </div>



        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Luto e Perda' imagem={im53} />
            <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Luto e Perda</h2>
              <p>Luto é uma resposta emocional à perda de algo significativo, como a morte de um ente querido, o fim de um relacionamento, a perda de um emprego, uma mudança drástica na vida ou até mesmo a perda de um animal de estimação. É um processo complexo e pessoal que envolve uma ampla gama de emoções, pensamentos e reações físicas.</p>
              <ul>
                <li> Negação : Uma pessoa pode ter dificuldade em aceitar a realidade da perda. Pode sentir-se entorpecido, como se aquilo não estivesse realmente acontecendo.</li>
                <li> Raiva : Surge uma sensação de injustiça e frustração. Uma pessoa pode se sentir zangada consigo mesma, com uma pessoa falecida, com os outros ou até mesmo com o mundo em geral</li>

                <li> Negociação : Nesta fase, uma pessoa pode tentar negociar ou fazer acordos para reverter a situação. Isso pode envolver pensamentos como se ao menos tivesse feito algo de forma diferente.</li>
                <li> Depressão : Uma profunda tristeza e desânimo podem se instalar. Uma pessoa pode sentir-se cansada, solitária e sem esperança. É importante notar que isso não é necessariamente um transtorno de depressão clínica, mas uma parte normal do processo de luto. </li>
                <li>  Aceitação : eventualmente, a pessoa começa a aceitar a realidade da perda. Isso não significa que a tristeza desapareça completamente, mas ela começa a encontrar uma maneira de lidar com a nova realidade.</li>

              </ul>
            </div>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
          <Card2 titulo='Transtorno do Comportamento Sexual' imagem={im54} />
          <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Transtorno do Comportamento Sexual</h2>
              <p>Transtornos sexuais, também conhecidos como distúrbios sexuais ou disfunções sexuais, referem-se a uma ampla gama de dificuldades ou problemas persistentes que os indivíduos podem enfrentar relacionados à função sexual, desejo, excitação ou satisfação. Essas dificuldades podem causar sofrimento significativo e impactar negativamente a qualidade de vida e os relacionamentos de uma pessoa. É importante observar que enfrentar desafios sexuais ocasionais é comum e não necessariamente indicativo de um distúrbio. Contudo, quando essas dificuldades se tornam persistentes e angustiantes, podem ser classificadas como distúrbios sexuais.

                Aqui estão alguns exemplos de distúrbios sexuais comuns:</p>
              <ul>
                <li> Disfunção erétil (DE) : envolve dificuldade em alcançar ou manter uma ereção suficiente para a relação sexual. Pode ter causas físicas, psicológicas ou mistas.

                  Ejaculação Precoce : Caracteriza-se por ejacular antes ou logo após a penetração, muitas vezes antes que a pessoa deseje. Isso pode levar à insatisfação de ambos os parceiros.

                  Ejaculação retardada : Neste caso, a pessoa tem dificuldade em ejacular, mesmo com estimulação sexual suficiente. Isso pode tornar a atividade sexual difícil ou insatisfatória.</li>
                <p>Transtorno de interesse/excitação sexual feminino : envolve falta de interesse ou excitação reduzida durante a atividade sexual em mulheres, levando ao sofrimento.

                  Transtorno do Desejo Sexual Hipoativo Masculino : Caracteriza-se por um desejo sexual persistentemente baixo ou ausente nos homens, causando angústia ou dificuldades interpessoais.</p>
                <li> Distúrbios orgásmicos : incluem condições em que um indivíduo tem dificuldade em atingir o orgasmo ou experimenta orgasmos significativamente retardados, causando sofrimento.

                  Distúrbios da dor sexual : Condições como vaginismo (contração involuntária dos músculos vaginais) ou dispareunia (dor durante a relação sexual) se enquadram nesta categoria.

                  Transtorno de Aversão Sexual : envolve extrema aversão e evitação de todo ou quase todo contato sexual genital com um parceiro sexual.</li>


              </ul>
            </div>
            
          </div>
        </div>



        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Problemas de Autoestima' imagem={im46} />
            <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Problemas de Autoestima</h2>
              <p>Problemas de autoestima referem-se a sentimentos persistentes e negativos em relação a si mesmo, resultando em uma visão desvalorizada ou centrada em suas próprias habilidades, aparência, valor pessoal e potencial. A autoestima desempenha um papel crucial em nossa saúde mental e bem-estar emocional, pois afeta a forma como nos relacionamos com os outros, enfrentamos desafios e nos envolvemos com o mundo ao nosso redor.

                Abaixo estão algumas questões comuns relacionadas a problemas de autoestima</p>
              <ul>
                <li> Autocrítica excessiva: Pessoas com baixa autoestima tendem a se criticar severamente por seus erros ou falhas, muitas vezes superestimando esses aspectos negativos e subestimando suas realizações positivas.</li>
                <li> Comparação constante: Comparar constantemente com os outros pode levar a sentimentos de inadequação, especialmente em uma era de redes sociais, onde as pessoas mostram frequentemente suas melhores conquistas e aparências.</li>

                <li> Perfeccionismo: Buscar constantemente a perfeição pode levar a padrões inatingíveis, resultando em autoavaliação negativa quando esses padrões não forem atendidos.</li>
                <li> Basear a autoestima exclusivamente nas opiniões e aprovação dos outros pode levar a um ciclo de busca constante por validação externa. </li>
                <li> O medo do fracasso pode levar a evitar desafios e novas experiências, pois uma pessoa teme não ser capaz de lidar com eles, o que perpetua a crença de sua própria inadequação.</li>
                <li> Pessoas com baixa autoestima muitas vezes têm dificuldade em acreditar ou aceitar elogios genuínos, descontando-os como falsos ou insignificantes.</li>

              </ul>
            </div>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
          <Card2 titulo='Desenvolvimento pessoal' imagem={im55} />
          <h5 >Saiba Mais</h5>
            <div className={style.texto}>
              <h2>Desenvolvimento pessoal</h2>
              <p>Desenvolvimento pessoal refere-se ao processo contínuo de autodescoberta, aprimoramento de habilidades, crescimento emocional e evolução pessoal que uma pessoa busca ao longo de sua vida. Envolver o investimento consciente e ativo no próprio crescimento, tanto em termos de habilidades práticas quanto de desenvolvimento emocional e mental.

                Aqui estão alguns aspectos importantes do desenvolvimento pessoal:</p>
              <ul>
                <li> Autoconhecimento: Compreender quem você é, quais são seus valores, interesses, pontos fortes e áreas de melhoria. Isso ajuda a tomar decisões alinhadas com suas metas pessoais.</li>
                <p>Metas claras: Definir metas específicas e mensuráveis ​​para diferentes áreas da vida, como carreira, relacionamentos, saúde e desenvolvimento pessoal.</p>
                <li> Aprendizado contínuo: Busque constantemente novos conhecimentos, adquira novas habilidades e se atualize em sua área de interesse.</li>
                <p>Habilidades interpessoais: Desenvolver habilidades de comunicação eficaz, empatia, resolução de conflitos e construção de relacionamentos saudáveis.</p>
                <li> Gestão do tempo: Aprenda a gerenciar seu tempo de forma eficaz para equilibrar as diversas demandas da vida, incluindo trabalho, lazer e autocuidado.</li>
                <p>Autoconfiança: Trabalhar para construir uma autoimagem positiva e acreditar em suas capacidades para lidar com desafios e alcançar objetivos.</p>
                <li> Resiliência: Desenvolver a capacidade de lidar com adversidades, superar obstáculos e recuperar-se de falhas.</li>


              </ul>
            </div>
            
          </div>
        </div>

      </div>
      <div className={style.mod2}>
        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Problemas relacionados a Sono' imagem={im8} />

            <div className={style.texto}>
              <h2>Problemas relacionados a Sono</h2>
              <p>Os problemas de sono são bastante comuns e podem ter várias causas, muitas das quais estão relacionadas à psicologia. Aqui estão alguns problemas de sono comuns que têm uma base psicológica:</p>
             
            </div>
          </div>
          <ul>
                <li>Insônia: A insônia é caracterizada pela dificuldade em iniciar ou manter o sono, resultando em sono de má qualidade. Fatores psicológicos, como estresse, ansiedade, depressão e preocupações excessivas, podem desempenhar um papel significativo na insônia..</li>
                <li>Pesadelos e Terrores Noturnos: Distúrbios de sono como pesadelos e terrores noturnos podem ser desencadeados por estresse, traumas passados ​​ou ansiedade. Eles podem causar despertares frequentes durante a noite.</li>
                <li>Sonambulismo: O sonambulismo envolve atividades motoras durante o sono, como andar ou falar. Fatores psicológicos, como ansiedade e estresse, podem contribuir para episódios de sonambulismo.</li>
                <li> Bruxismo: O bruxismo é o ranger ou apertar os dentes durante o sono. O estresse e a ansiedade podem desencadear ou piorar esse hábito.</li>
                <li> Síndrome de Fadiga Crônica: Embora a relação entre a síndrome de fadiga crônica e os problemas de sono seja complexa, muitos indivíduos com essa condição enfrentam distúrbios de sono, como insônia e sono não reparador. Questões psicológicas, como depressão e ansiedade, também estão frequentemente associadas a essa síndrome.</li>


              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <div className={style.texto}>
              <h2>Problemas com o sono</h2>
              <p>É importante abordar os problemas de sono com uma abordagem holística, considerando tanto os fatores físicos quanto os psicológicos. Se você tiver problemas de sono, é aconselhável nos procurar, para avaliar suas preocupações e desenvolver um plano de tratamento adequado.</p>
             
            </div>
            <Card2 titulo='Problemas com o sono ' imagem={im18} />
          </div>
          <ul>
                <li>Mudanças de horário e Jet Lag: A adaptação a novos fusos horários pode ser difícil devido a desregulações no ritmo circadiano. Fatores psicológicos, como a adaptação emocional a um novo ambiente, também podem afetar o sono durante as mudanças de horário.
                </li>
                <li>Higiene do Sono Inadequada: Comportamentos e hábitos inadequados antes de dormir podem resultar em dificuldades para adormecer. Fatores psicológicos, como estresse e ansiedade, podem influenciar esses comportamentos.</li>
                <li>Ronco e Apneia do Sono: Embora esses problemas estejam mais relacionados a questões físicas, eles também podem ser agravados por fatores psicológicos, como excesso de peso, estresse e ansiedade.</li>
                <li>  A massoterapia pode auxiliar na mobilização do tecido cicatricial, ajudando a prevenir a formação de aderências e promovendo a regeneração saudável dos tecidos.</li>
                <li>  Excesso de Estresse e Ansiedade: A ansiedade e o estresse psicológico podem afetar diretamente a qualidade do sono, tornando difícil relaxar e adormecer.</li>
                <li> Depressão e Sono: A depressão pode depender tanto da qualidade quanto do padrão de sono. Algumas pessoas experimentam insônia, enquanto outras podem dormir tranquilamente. Alterações nos níveis de neurotransmissores no cérebro relacionadas ao humor também podem afetar os ritmos circadianos e a regulação do sono.</li>
              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Transtornos de Ansiedade ' imagem={im27} />
            <div className={style.texto}>
              <h2>Sintomas.</h2>
              <p>Os transtornos de ansiedade são um grupo de condições de saúde mental caracterizadas por sentimentos intensos e persistentes de ansiedade, medo ou preocupação que podem interferir significativamente na vida diária de uma pessoa. Esses transtornos podem variar em gravidade, sintomas e impacto, mas todos eles envolvem uma resposta de ansiedade que é desproporcional às situações ou eventos que a desencadeiam. Aqui estão alguns dos transtornos de ansiedade mais comuns: </p>
              
            </div>
          </div>
          <ul>
                <li>Transtorno de Ansiedade Generalizada (TAG)**: Caracterizado por preocupações excessivas e persistentes sobre várias áreas da vida, como saúde, trabalho, relacionamentos, entre outros, por pelo menos seis meses. 2</li>

                <li>Transtorno de Ansiedade Social (Fobia Social)**: Caracteriza-se por medo intenso e persistente de situações sociais ou de desempenho, devido ao medo de ser julgado, humilhado ou envergonhado. </li>
                <li>   Transtorno de Ansiedade de Separação**: Mais comum em crianças, mas também pode afetar adultos, envolve um medo excessivo de se separar</li>
                <li> Transtorno de Ansiedade de Status : Envolver a preocupação excessivamente com situações de avaliação ou julgamento social, como falar em público ou conhecer pessoas novas.</li>
                <li> Transtorno de Ansiedade de Especulação (Tricotilomania) : Caracterizado pela compulsão de arrancar os próprios cabelos, resultando em perda significativa de cabelo e, frequentemente, causando angústia.</li>

              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <div className={style.texto}>
              <h2>Transtornos de Ansiedade</h2>
              <p>O tratamento para transtornos de ansiedade pode envolver uma combinação de terapia . Nós podemos te ajudar em cada uma dessas situações.</p>
             
            </div>
            <Card2 titulo='Transtornos de Ansiedade' imagem={im28} />
          </div>
          <ul>
                <li>Transtorno do Pânico**: Envolve ataques de pânico inesperados e recorrentes, acompanhados de sintomas físicos e emocionais, como batimentos cardíacos acelerados, sudorese, tremores e uma sensação iminente de perigo. </li>
                <li>   Transtorno de Ansiedade de Performance</li>

                <li> Transtorno de Ansiedade de Saúde (Hipocondria) : Envolve preocupação excessiva com a saúde e a crença persistente de ter uma doença grave, mesmo quando não há evidências médicas para sustentá-la</li>
                <li> Transtorno de Ansiedade Seletiva (TAS) : Também conhecido como Mutismo Seletivo, é mais comum em crianças. Envolver uma incapacidade persistente de falar em determinadas situações sociais</li>
                <li> Agorafobia : Este transtorno envolve ansiedade intensa em situações ou lugares nos quais uma pessoa sente que escapar ou obter ajuda seria difícil ou embaraçoso, caso ocorra um ataque de pânico ou sintomas semelhantes.</li>
                <li> Transtorno de Ansiedade Noturna (Pesadelos e Terrores Noturnos) : Caracterizado por pesadelos frequentes ou episódios de terror noturno que podem perturbar ou dormir e causar ansiedade.</li>



              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Transtornos do Humor' imagem={im29} />
            <div className={style.texto}>
              <h2>Transtornos do Humor</h2>
              <p>Os transtornos do humor, também conhecidos como transtornos afetivos, são condições psiquiátricas que afetam a maneira como uma pessoa sente emoções e lida com elas. Eles podem influenciar a forma como alguém experimenta o humor, a energia, os pensamentos e o comportamento. Dois dos transtornos de humor mais conhecidos são a depressão e o transtorno bipolar. Vou explicar um pouco sobre cada um deles:</p>
             
            </div>
          </div>
          <ul>
                <li> Transtorno Depressivo Maior (Depressão) : A depressão é caracterizada por sentimentos persistentes de tristeza, perda de interesse ou prazer em atividades que costumavam ser planejadas, alterações no apetite e no sono, fadiga, dificuldade de concentração, sentimentos de culpa ou inutilidade e, em casos mais graves, pensamentos de morte ou suicídio. A depressão pode ser desencadeada por fatores genéticos, químicos e ambientais.</li>
                <li> Transtorno Bipolar : O transtorno bipolar envolve oscilações extremas no humor, que vão desde episódios de depressão profunda até episódios de mania ou hipomania. Durante uma fase</li>

                <li> Transtorno Depressivo Persistente (Distimia) : A distimia é um tipo de depressão crônica de baixo grau que persiste por longos períodos de tempo, geralmente por mais de dois anos. Os sintomas são semelhantes aos da depressão maior, mas menos intensos. Pode ser difícil para uma pessoa reconhecer que está deprimida, pois os sintomas são menos graves e mais persistentes.</li>


              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <div className={style.texto}>
              <h2>Transtornos do Humor</h2>
              <p>É importante lembrar que esses transtornos podem ser tratados com sucesso com terapia, medicação ou uma combinação de ambos. Se você ou alguém que você conhece está apresentando sintomas consistentes com um transtorno de humor, é aconselhável nos procurar  para avaliação e tratamento adequado.</p>
             
            </div>
            <Card2 titulo='Transtornos do Humor' imagem={im30} />
          </div>
          <ul>
                <li> Transtorno Desafiador Opositivo (TDO) : Embora não seja um transtorno de humor, o TDO é um transtorno comportamental que pode estar associado a alterações de humor. Envolver um padrão persistente de comportamento, hostil e desobediente em crianças e adolescentes. Pode incluir irritabilidade intensa e explosões de raiva desproporcionais.</li>
                <li> Transtorno Disfórico Pré-Menstrual (TDPM) : O TDPM é caracterizado por mudanças de humor acentuadas e sintomas físicos que ocorrem durante o ciclo menstrual. Esses sintomas podem incluir irritabilidade, tensão, fadiga, alterações no sono e no apetite. É mais grave que os sintomas normais associados à menstruação.</li>
                <li> Transtorno de Humor Induzido por Substância : O uso ou abuso de substância, como álcool, drogas ilícitas ou certos medicamentos, pode levar a alterações significativas no humor. Por exemplo, o uso excessivo de álcool pode contribuir para a depressão, enquanto algumas drogas estimulantes podem desencadear episódios de mania.</li>
                <li> Transtorno do Humor devido a uma Condição Médica : Certas condições médicas, como distúrbios da tireoide, doenças neurológicas ou outras condições de saúde, podem causar alterações no humor. Quando os sintomas de humor são diretamente atribuíveis a uma condição médica, é revelado um transtorno de humor devido a uma condição médica.</li>

              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Transtorno Alimentar.' imagem={im33} />
            <div className={style.texto}>
              <h2>Transtorno Alimentar</h2>
              <p>Os Transtornos do Comportamento Alimentar (TCA) são condições psicológicas que envolvem padrões anormais de alimentação e pensamentos perturbados em relação à alimentação, peso, corpo e imagem corporal. Esses transtornos podem ter sérias implicações para a saúde física e mental das pessoas afetadas. Alguns dos transtornos
                Aqui estão algumas informações sobre esses transtornos:</p>
              
            </div>
          </div>
          <ul>
                <li>Anorexia Nervosa: Pessoas com anorexia nervosa têm uma preocupação intensa em perder peso e uma percepção distorcida de seu próprio corpo, geralmente acreditando que estão acima do peso, mesmo que estejam abaixo do peso saudável. Eles tendem a restringir severamente a ingestão de alimentos, o que pode levar a uma desnutrição grave e outros problemas de saúde.</li>
                <li> Bulimia Nervosa: Indivíduos com bulimia nervosa apresentam episódios de compulsão alimentar, nos quais consomem grandes quantidades de alimentos em um curto período de tempo,</li>

                <li>Transtorno da Compulsão Alimentar Periódica: Nesse transtorno, ocorrência de episódios de compulsão alimentar sem os comportamentos compensatórios observados na bulimia nervosa. Pessoas com esse transtorno vêm em excesso de forma descontrolada e, muitas vezes, sentem vergonha e culpa após esses</li>
                <li> É importante destacar que o TCA não se ressente

                  O tratamento para os TCA geralmente envolve uma abordagem multidisciplinar

                  Se você ou alguém que você conhece está lutando com um Transtorno do Comportamento Alimentar,proucure ajuda profissional o mais rápido possível.</li>


              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <div className={style.texto}>
              <h2>Transtornos do Comportamento Alimentar.</h2>
              <p>É importante destacar que, embora possa haver sobreposições e nuances entre esses transtornos, cada um tem suas próprias características específicas e critérios diagnósticos. O diagnóstico e tratamento adequados devem ser feitos por profissionais de saúde mental e médicos especializados.</p>
              <ul>
                <li>Transtorno de Evitação/Restrição da Ingestão de Alimentos: Este é um transtorno menos conhecido, no qual uma pessoa evita certos alimentos ou grupos de alimentos devido a sensações alimentares percebidas, aversões sensoriais ou preocupações com consequências negativas na saúde ou no peso.</li>
                <li> Transtorno de Ruminação: Esse transtorno envolve regurgitação repetida de alimentos após as refeições, seguida de remastigação, ressalva ou descarte de alimentos. Geralmente não está associado a uma condição médica específica e pode afetar crianças e adultos.</li>

                <li>Ortorexia: Embora ainda não seja oficialmente reconhecida como um transtorno alimentar nos manuais diagnósticos, a ortorexia envolve uma obsessão por comer alimentos considerados saudáveis. Pessoas com ortorexia podem evitar certos grupos de alimentos e se preocupar com a pureza e a qualidade dos alimentos que consomem.</li>
                <li> Transtorno da Alimentação Noturna: Pessoas com esse transtorno têm um padrão de consumo alimentar significativo durante a noite, muitas vezes acordando para comer e consumindo a maioria das calorias nesse período. Esse padrão está associado a problemas de sono e alterações no metabolismo.</li>


              </ul>
            </div>
            <Card2 titulo='Transtornos do Comportamento Alimentar' imagem={im34} />
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Transtornos do Controle dos Impulsos' imagem={im37} />
            <div className={style.texto}>
              <h2>Transtornos do Controle dos Impulsos</h2>
              <p>Os Transtornos do Controle dos Impulsos são um grupo de condições psiquiátricas descritas pela dificuldade em resistir a impulsos ou desejos irresistíveis, levando a comportamentos repetitivos e muitas vezes agressivos. Esse
                Aqui estão alguns exemplos de Transtornos do Controle dos Impulsos:</p>
             
            </div>
          </div>
          <ul>

<li> Transtorno de Jogo: Também conhecido como jogo patológico, é caracterizado por um padrão persistente e recorrente de comportamento de jogo, apesar das consequências adversárias. Pode levar a problemas financeiros, emocionais e sociais graves.</li>
<li> Transtorno Explosivo Intermitente: Envolve episódios de agressão verbal ou física desproporcional em relação à situação, desencadeados por um estresse mínimo. Pessoas com esse transtorno têm dificuldade em controlar sua raiva.</li>
<li> Cleptomania: Caracteriza-se pelo impulso irresistível de roubar objetos desnecessários, geralmente sem valor monetário, mesmo quando não há motivo financeiro para fazê-lo. Uma pessoa pode experimentar tensão antes de cometer o roubo e quebrar temporariamente após.</li>
<li>Transtorno da Compulsão Alimentar Periódica: Envolve episódios recorrentes de compulsão alimentar, onde uma grande quantidade de comida é consumida em um curto período, acompanhada de uma sensação de falta de controle. Diferencia-se da bulimia nervosa porque não é seguida por comportamentos compensatórios,</li>
<li>Transtorno de Compra Compulsiva: Caracteriza-se por compras excessivas e impulsivas que resultam em estresse financeiro ou acúmulo excessivo de objetos.</li>

</ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <div className={style.texto}>
              <h2>Transtornos do Controle dos Impulsos</h2>
              <p>É importante observar que o diagnóstico de Transtornos do Controle dos Impulsos é realizado por profissionais de saúde mental com base em critérios específicos em diagnósticos manuais, como o DSM-5 (Manual Diagnóstico e Estatístico de Transt

                O tratamento desses transtornos pode variar de pessoa para pessoa, dependendo da gravidade e da necessidade</p>
             
            </div>
            <Card2 titulo='Transtornos do Controle dos Impulsos' imagem={im35} />
          </div>
          <ul>
                <li>Transtorno de Dermatilomania (ou Escoriação Compulsiva): Nesse transtorno, a pessoa sente a necessidade irresistível de coçar, beliscar, cutucar ou espremer a pele repetidamente, muitas vezes resultando em lesões na pele. Isso ocorre frequentemente como uma resposta à ansiedade.</li>
                <li> Transtorno de Impulsividade: Embora não seja um diagnóstico formal, a impulsividade excessiva pode ser um sintoma subjacente em muitos transtornos mentais, como Transtorno de Déficit de Atenção</li>

                <li> Transtorno de Internet e Tecnologia: À medida que a tecnologia se torna mais central em nossas vidas, algumas pessoas podem desenvolver padrões de uso compulsivos</li>


              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Relacionados ao Uso de Substâncias' imagem={im38} />
            <div className={style.texto}>
              <h2>Relacionados ao Uso de Substâncias</h2>
              <p>Os Transtornos Relacionados ao Uso de Substâncias (TRUS), também conhecidos como Transtornos Relacionados ao Uso de Drogas, são um grupo de condições de saúde mental que envolve o uso prejudicial ou problemático de substâncias psicoativas, como álcool, tabaco, cannabis, cocaína, opioides</p>
             
            </div>
          </div>
          <ul>
                <li> Transtorno pelo Uso de Álcool: Envolve o consumo excessivo e problemático de álcool, causando dificuldades sociais, profissionais, de saúde e legais.</li>
                <li> Transtorno pelo Uso de Substâncias Psicoativas: Isso inclui o uso problemático de uma variedade de drogas, como maconha, cocaína, anfetaminas, alucinógenos, entre outras.</li>

                <li> Transtorno pelo Uso de Opioides: Envolve o uso problemático de opioides, incluindo substâncias como heroína e analgésicos prescritos.</li>
                <li>  Transtorno pelo Uso de Estimulantes: Relacionado ao uso excessivo de estimulantes, como cocaína e anfetaminas, com consequências adversas.</li>
                <li>  Transtorno pelo uso de sedativos/hipnóticos/ansiolíticos: Isso se refere ao uso problemático de substâncias como benzodiazepínicos, que são frequentemente prescritos para ansiedade e insônia.</li>
                <li> É importante notar que o diagnóstico de um TRUS leva em consideração critérios específicos específicos nos sistemas de classificação (CID-10, DSM-5) e requer a avaliação de um profissional de saúde mental qualificado. O tratamento para os TRUS pode incluir terapia comportamental, terapia cognitivo-comportamental, programas de reabilitação, suporte social e, em alguns casos, medicamentos.</li>

              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <div className={style.texto}>
              <h2>Transtorno de personalidade</h2>
              <p>
                Os transtornos de personalidade são padrões persistentes e inflexíveis de pensamento, comportamento e emoções que alteram significativamente as expectativas culturais e interferem no funcionamento social, ocupacional ou pessoal de um indivíduo. Esses padrões geralmente começam a se manifestar na adolescência ou no início da idade adulta e tendem a ser resultantes ao longo do tempo.</p>
             
            </div>
            <Card2 titulo='Transtorno de personalidade' imagem={im40} />
          </div>
          <ul>
                <li> Cluster A - Transtornos excêntricos ou bizarros:

                  Transtorno de Personalidade Paranóide: Caracterizado por desconfiança excessiva, suspeitas infundadas e interpretações distorcidas dos interesses dos outros.
                  Transtorno de Personalidade Esquizoide: Indivíduos com esse transtorno tendem a ser isolados socialmente, têm dificuldade em expressar emoções e mostram pouco interesse em relacionamentos interpessoais.
                  Transtorno de Personalidade Esquizotípica: Caracterizado por padrões de pensamento e comportamento estranhos, aparentemente excêntricos e desconforto social.</li>
                <p>Cluster B - Transtornos dramáticos, emocionais ou imprevisíveis:

                  Transtorno de Personalidade Antissocial: Pessoas com esse transtorno têm pouco respeito pelas normas sociais, podem ser manipuladoras, impulsivas e frequentemente têm histórico de comportamento violento.
                  Transtorno de Personalidade Borderline: Caracterizado por instabilidade emocional intensa, relacionamentos tumultuados, impulsividade e autoimagem instável.
                  Transtorno de Personalidade Histriônica: Indivíduos com esse transtorno buscam constantemente atenção e um desejo excessivo de serem o centro das atenções. Seu comportamento pode ser teatral e emocionalmente superficial.
                  Transtorno de Personalidade Narcisista: Caracterizado por um senso inflado de importância pessoal, falta de empatia e busca constante por admiração.</p>


              </ul>
        </div>



        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Transtorno de Personalidade' imagem={im41} />
            <div className={style.texto}>
              <h2>Transtorno de Personalidade</h2>
              <p>Vale ressaltar que o diagnóstico de transtornos de personalidade deve ser feito por profissionais de saúde mental específicos, após uma avaliação cuidadosa do histórico do indivíduo e de seus sintomas. O tratamento pode envolver terapia individual, terapia de grupo e, em alguns casos, medicamentos para tratar sintomas específicos, como depressão ou ansiedade associada a transtornos de personalidade.</p>
            
            </div>
          </div>
          <ul>
                <li>Cluster C - Transtornos ansiosos ou temerosos:

                  Transtorno de Personalidade Evitativa: Pessoas com esse transtorno tendem a evitar situações sociais devido a sentimentos de inadequação e medo de infecção.
                  Transtorno de Personalidade Dependente: Caracterizado por uma necessidade excessiva de ser cuidado e apoiado pelos outros, levando a comportamentos submissos e dificuldade em tomar decisões.
                  Transtorno de Personalidade Obsessivo-Compulsiva: Pessoas com esse transtorno são preocupadas com a ordem, perfeccionismo e controle, o que pode interferir em seu funcionamento cotidiano.</li>


              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <div className={style.texto}>
              <h2>Estresse  Traumático</h2>
              <p>O estresse é uma resposta do organismo a qualquer demanda ou pressão que exija ajustes. Pode ser causado por eventos positivos ou negativos e é uma parte natural da vida. No entanto, quando o estresse se torna excessivo ou persistente, pode levar a problemas de saúde física e mental.</p>
             
            </div>
            <Card2 titulo='Estresse  Traumático' imagem={im42} />
          </div>
          <ul>
                <li> O estresse traumático, por sua vez, refere-se a uma forma mais intensa e de tensão de estresse, geralmente causada por eventos traumáticos. Um evento traumático é algo que ameaça a integridade física ou psicológica de uma pessoa, causando reações emocionais e psicológicas intensas. Alguns exemplos de eventos traumáticos incluem acidentes graves, abuso físico ou sexual, desastres naturais, violência, guerra e outros eventos extremamente perturbadores.

                  O Transtorno de Estresse Pós-Traumático (TEPT) é um diagnóstico psiquiátrico que se aplica a pessoas que experimentaram eventos traumáticos e começaram a sofrer de estresse intenso após o evento. Os sintomas do TEPT incluem flashbacks perturbadores.</li>
                <p>É importante procurar ajuda profissional se você acredita que está sofrendo de estresse traumático ou TEPT, pois esses transtornos podem afetar significativamente a qualidade de vida e a necessidade de tratamento adequado. A terapia, como a terapia cognitivo-comportamental (TCC), e, em alguns casos, a medicação pode ser usada para ajudar as pessoas a lidar com os efeitos do estresse traumático.</p>

              </ul>
        </div>



        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Problemas de Relacionamento' imagem={im45} />
            <div className={style.texto}>
              <h2>Problemas de Relacionamento</h2>
              <p>É normal enfrentar problemas de relacionamento em diversas áreas da vida, seja em relacionamentos amorosos, familiares, de amizade ou no ambiente de trabalho. Aqui estão alguns problemas comuns que as pessoas enfrentam em seus relacionamentos, juntamente com algumas orientações sobre como lidar com eles:</p>
              
            </div>
          </div>
          <ul>
                <li> Falta de Comunicação: A comunicação deficiente é um dos principais problemas. Isso pode incluir não expressar sentimentos, não compartilhar informações importantes ou não ouvir atentamente o outro. Para lidar com isso, é fundamental praticar a escuta ativa, expressar suas próprias necessidades de maneira clara e estar aberto a ouvir o que o outro tem a dizer.</li>
                <li> Desentendimentos e Conflitos: Os conflitos são naturais, mas quando não são resolvidos deliberadamente, podem causar problemas duradouros. Aprenda a abordar os conflitos de maneira construtiva, focando em soluções e compromissos, em vez de culpar ou acusar.</li>

                <li> Falta de Confiança: A confiança é essencial em qualquer relacionamento. Se a confiança foi quebrada, é importante ter conversas honestas sobre o que aconteceu, demonstrar mudança de comportamento e dar ritmo para que a confiança seja reconstruída gradualmente.</li>
                <li> Diferenças de Opinião e Valores: As pessoas têm opiniões e valores diferentes, o que pode levar a discordâncias. É importante aprender a respeitar as diferenças e encontrar maneiras de compromisso, quando possível, ou concordar em discordar sem dificuldades no relacionamento </li>
                <li>
                  Insegurança e Ciúmes: Sentimentos de insegurança e ciúmes podem surgir devido a questões internas ou externas ao relacionamento. Trabalhe na construção da autoestima e na comunicação aberta para abordar esses sentimentos de forma saudável.</li>

              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <div className={style.texto}>
              <h2>Problemas de Saúde Mental Infantil e Adolescente</h2>
              <p>Os problemas de saúde mental em crianças e adolescentes têm recebido cada vez mais atenção nos últimos anos, à medida que se confirma a importância de identificar e tratar essas questões precocemente. Alguns dos problemas de saúde mental mais comuns em crianças e adolescentes incluem:</p>
             
            </div>
            <Card2 titulo='Problemas de Saúde Mental Infantil e Adolescente' imagem={im49} />
          </div>
          <ul>
                <li> Transtornos de Ansiedade: Isso inclui transtorno de ansiedade generalizada, fobias específicas, transtorno de pânico e transtorno de ansiedade social. Crianças e adolescentes podem apresentar preocupações excessivas, medos irracionais e sintomas físicos de ansiedade.</li>
                <p>Transtorno do Déficit de Atenção e Hiperatividade (TDAH): Caracteriza-se por dificuldades em manter a atenção, hiperatividade e impulsividade. Isso pode impactar o desempenho escolar, a interação social e <br />

                  Depressão: Crianças e adolescentes também podem experimentar sintomas de depressão, incluindo tristeza persistente, perda de interesse pelas atividades, mudanças no sono e no apetite e sentimentos de desesperança.</p>
                <li> Transtornos do Espectro Autista (TEA): Embora seja um transtorno de desenvolvimento mais amplo, muitas vezes está associado a desafios na comunicação, interação social e comportamentos repetitivos.</li>
                <li> Automutilação e Suicídio: Infelizmente, muitos adolescentes enfrentam pensamentos suicidas e podem se envolver em automutilação como uma forma de lidar com suas emoções.</li>
                <li> Transtornos de Conduta: Crianças e adolescentes com esses transtornos frequentemente exibem comportamentos desafiadores, agressivos e antissociais, como mentir, roubar, brigar e desrespeitar regras.</li>


              </ul>
        </div>



        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Problemas de Saúde Mental no Idoso' imagem={im50} />
            <div className={style.texto}>
              <h2>Problemas de Saúde Mental no Idoso</h2>
              <p>Os problemas de saúde mental no idoso são uma preocupação significativa, uma vez que a população idosa está em constante crescimento em muitas partes do mundo. Várias questões podem contribuir para o surgimento e agravamento desses problemas, incluindo </p>
             
            </div>
          </div>
          <ul>
                <li> Depressão: A depressão é uma condição grave que pode afetar qualquer faixa etária, mas os idosos estão em risco particular devido a fatores como perda de entes queridos, isolamento social, problemas de saúde psicológicos e alterações hormonais. A depressão pode se manifestar de maneiras diferentes nos idosos, muitas vezes com queixas físicas em vez de sintomas emocionais.</li>
                <li> Ansiedade: A ansiedade é outra condição comum em idosos. Preocupações com a saúde, solidão, finanças e outras questões podem contribuir para o desenvolvimento de transtornos de ansiedade. A ansiedade também pode ser resultado de condições médicas subjacentes.</li>

                <li> Transtornos Cognitivos: Isso inclui condições como a demência e a doença de Alzheimer. Esses transtornos afetam a memória, o raciocínio e a capacidade de realizar atividades diárias. O envelhecimento natural também pode resultar em diminuição da cognição</li>
                <li>Isolamento Social: Muitos idosos enfrentam isolamento social devido a fatores como perda de amigos e familiares, atraso e dificuldade de locomoção. O isolamento social pode levar à solidão, depressão e outros problemas de saúde mental. </li>
                <li> Mudanças na Identidade e Autoestima: A transição para a aposentadoria e as mudanças no papel social podem afetar a identidade e a autoestima dos idosos, levando a problemas emocionais.</li>

              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <div className={style.texto}>
              <h2>Estresse no Trabalho e Burnout</h2>
              <p>O estresse no trabalho e o burnout são conceitos relacionados que se referem a problemas de saúde mental que podem ocorrer devido a condições desafiadoras no ambiente de trabalho. Embora compartilhem algumas semelhanças, eles têm características distintas.</p>
            
            </div>
            <Card2 titulo='Estresse no Trabalho e Burnout' imagem={im51} />
          </div>
          <ul>
                <li> Estresse no Trabalho:
                  O estresse no trabalho é uma resposta natural do corpo às demandas e pressões excessivas no ambiente profissional. Ele pode ser causado por uma variedade de fatores, como prazos apertados, carga de trabalho elevada, conflitos interpessoais, falta de controle sobre as tarefas, falta de apoio da equipe ou superiores, entre outros. Um nível moderado de estresse pode até ser benéfico, pois pode motivar as pessoas a se esforçarem e alcançarem metas. No entanto, quando o estresse se torna constante e opressivo, pode levar a problemas de saúde física e mental, afetando o bem-estar geral da pessoa.</li>
                <p>Burnout:
                  O burnout é um estado de exaustão emocional, mental e física resultante de um estresse prolongado e não gerenciado no ambiente de trabalho. Foi inicialmente descrito no contexto profissional da área</p>
                <li> Diferenças entre Estresse e Burnout: <br />

                  O estresse é uma consequência de pressão ou demandas, enquanto o burnout é um estado de exaustão resultante do estresse prolongado.
                  O estresse é geralmente acompanhado por sentimentos de ansiedade e sobrecarga, enquanto o burnout envolve sentimentos de desesperança, apatia e desânimo.
                  O estresse está mais relacionado a uma resposta aguda a situações desafiadoras, enquanto o burnout é um processo gradual que se desenvolve ao longo do tempo.
                  O estresse pode diminuir quando as condições no ambiente de trabalho melhoram, enquanto o burnout muitas vezes requer intervenção mais intensiva para ser superado.</li>


              </ul>
        </div>



        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Luto e Perda' imagem={im53} />
            <div className={style.texto}>
              <h2>Luto e Perda</h2>
              <p>Luto é uma resposta emocional à perda de algo significativo, como a morte de um ente querido, o fim de um relacionamento, a perda de um emprego, uma mudança drástica na vida ou até mesmo a perda de um animal de estimação. É um processo complexo e pessoal que envolve uma ampla gama de emoções, pensamentos e reações físicas.</p>
             
            </div>
          </div>
          <ul>
                <li> Negação : Uma pessoa pode ter dificuldade em aceitar a realidade da perda. Pode sentir-se entorpecido, como se aquilo não estivesse realmente acontecendo.</li>
                <li> Raiva : Surge uma sensação de injustiça e frustração. Uma pessoa pode se sentir zangada consigo mesma, com uma pessoa falecida, com os outros ou até mesmo com o mundo em geral</li>

                <li> Negociação : Nesta fase, uma pessoa pode tentar negociar ou fazer acordos para reverter a situação. Isso pode envolver pensamentos como se ao menos tivesse feito algo de forma diferente.</li>
                <li> Depressão : Uma profunda tristeza e desânimo podem se instalar. Uma pessoa pode sentir-se cansada, solitária e sem esperança. É importante notar que isso não é necessariamente um transtorno de depressão clínica, mas uma parte normal do processo de luto. </li>
                <li>  Aceitação : eventualmente, a pessoa começa a aceitar a realidade da perda. Isso não significa que a tristeza desapareça completamente, mas ela começa a encontrar uma maneira de lidar com a nova realidade.</li>

              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <div className={style.texto}>
              <h2>Transtorno do Comportamento Sexual</h2>
              <p>Transtornos sexuais, também conhecidos como distúrbios sexuais ou disfunções sexuais, referem-se a uma ampla gama de dificuldades ou problemas persistentes que os indivíduos podem enfrentar relacionados à função sexual, desejo, excitação ou satisfação. Essas dificuldades podem causar sofrimento significativo e impactar negativamente a qualidade de vida e os relacionamentos de uma pessoa. É importante observar que enfrentar desafios sexuais ocasionais é comum e não necessariamente indicativo de um distúrbio. Contudo, quando essas dificuldades se tornam persistentes e angustiantes, podem ser classificadas como distúrbios sexuais.

                Aqui estão alguns exemplos de distúrbios sexuais comuns:</p>
             
            </div>
            <Card2 titulo='Transtorno do Comportamento Sexual' imagem={im54} />
          </div>
          <ul>
                <li> Disfunção erétil (DE) : envolve dificuldade em alcançar ou manter uma ereção suficiente para a relação sexual. Pode ter causas físicas, psicológicas ou mistas.

                  Ejaculação Precoce : Caracteriza-se por ejacular antes ou logo após a penetração, muitas vezes antes que a pessoa deseje. Isso pode levar à insatisfação de ambos os parceiros.

                  Ejaculação retardada : Neste caso, a pessoa tem dificuldade em ejacular, mesmo com estimulação sexual suficiente. Isso pode tornar a atividade sexual difícil ou insatisfatória.</li>
                <p>Transtorno de interesse/excitação sexual feminino : envolve falta de interesse ou excitação reduzida durante a atividade sexual em mulheres, levando ao sofrimento.

                  Transtorno do Desejo Sexual Hipoativo Masculino : Caracteriza-se por um desejo sexual persistentemente baixo ou ausente nos homens, causando angústia ou dificuldades interpessoais.</p>
                <li> Distúrbios orgásmicos : incluem condições em que um indivíduo tem dificuldade em atingir o orgasmo ou experimenta orgasmos significativamente retardados, causando sofrimento.

                  Distúrbios da dor sexual : Condições como vaginismo (contração involuntária dos músculos vaginais) ou dispareunia (dor durante a relação sexual) se enquadram nesta categoria.

                  Transtorno de Aversão Sexual : envolve extrema aversão e evitação de todo ou quase todo contato sexual genital com um parceiro sexual.</li>


              </ul>
        </div>



        <div className={style.cards}>
          <div className={style.organiza}>
            <Card2 titulo='Problemas de Autoestima' imagem={im46} />
            <div className={style.texto}>
              <h2>Problemas de Autoestima</h2>
              <p>Problemas de autoestima referem-se a sentimentos persistentes e negativos em relação a si mesmo, resultando em uma visão desvalorizada ou centrada em suas próprias habilidades, aparência, valor pessoal e potencial. A autoestima desempenha um papel crucial em nossa saúde mental e bem-estar emocional, pois afeta a forma como nos relacionamos com os outros, enfrentamos desafios e nos envolvemos com o mundo ao nosso redor.

                Abaixo estão algumas questões comuns relacionadas a problemas de autoestima</p>
            
            </div>
          </div>
          <ul>
                <li> Autocrítica excessiva: Pessoas com baixa autoestima tendem a se criticar severamente por seus erros ou falhas, muitas vezes superestimando esses aspectos negativos e subestimando suas realizações positivas.</li>
                <li> Comparação constante: Comparar constantemente com os outros pode levar a sentimentos de inadequação, especialmente em uma era de redes sociais, onde as pessoas mostram frequentemente suas melhores conquistas e aparências.</li>

                <li> Perfeccionismo: Buscar constantemente a perfeição pode levar a padrões inatingíveis, resultando em autoavaliação negativa quando esses padrões não forem atendidos.</li>
                <li> Basear a autoestima exclusivamente nas opiniões e aprovação dos outros pode levar a um ciclo de busca constante por validação externa. </li>
                <li> O medo do fracasso pode levar a evitar desafios e novas experiências, pois uma pessoa teme não ser capaz de lidar com eles, o que perpetua a crença de sua própria inadequação.</li>
                <li> Pessoas com baixa autoestima muitas vezes têm dificuldade em acreditar ou aceitar elogios genuínos, descontando-os como falsos ou insignificantes.</li>

              </ul>
        </div>
        <div className={style.cards}>
          <div className={style.organiza}>
            <div className={style.texto}>
              <h2>Desenvolvimento pessoal</h2>
              <p>Desenvolvimento pessoal refere-se ao processo contínuo de autodescoberta, aprimoramento de habilidades, crescimento emocional e evolução pessoal que uma pessoa busca ao longo de sua vida. Envolver o investimento consciente e ativo no próprio crescimento, tanto em termos de habilidades práticas quanto de desenvolvimento emocional e mental.

                Aqui estão alguns aspectos importantes do desenvolvimento pessoal:</p>
              
            </div>
            <Card2 titulo='Desenvolvimento pessoal' imagem={im55} />
          </div>
        </div>
        <ul>
                <li> Autoconhecimento: Compreender quem você é, quais são seus valores, interesses, pontos fortes e áreas de melhoria. Isso ajuda a tomar decisões alinhadas com suas metas pessoais.</li>
                <p>Metas claras: Definir metas específicas e mensuráveis ​​para diferentes áreas da vida, como carreira, relacionamentos, saúde e desenvolvimento pessoal.</p>
                <li> Aprendizado contínuo: Busque constantemente novos conhecimentos, adquira novas habilidades e se atualize em sua área de interesse.</li>
                <p>Habilidades interpessoais: Desenvolver habilidades de comunicação eficaz, empatia, resolução de conflitos e construção de relacionamentos saudáveis.</p>
                <li> Gestão do tempo: Aprenda a gerenciar seu tempo de forma eficaz para equilibrar as diversas demandas da vida, incluindo trabalho, lazer e autocuidado.</li>
                <p>Autoconfiança: Trabalhar para construir uma autoimagem positiva e acreditar em suas capacidades para lidar com desafios e alcançar objetivos.</p>
                <li> Resiliência: Desenvolver a capacidade de lidar com adversidades, superar obstáculos e recuperar-se de falhas.</li>


              </ul>
      </div>



    </div>

  )
}
