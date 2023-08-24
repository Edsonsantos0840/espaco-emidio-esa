import style from '@/app/style/massoterapia.module.css'
import Button from '../../../components/button'
import Card2 from '../../../components/card2'

import im1 from '../image/Circulação Sanguínea.png'
import im11 from '../image/Circulação Sanguínea2.png'
import im2 from '../image/Recuperação de Lesões.png'
import im22 from '../image/Recuperação de Lesões 2.png'
import im32 from '../image/Recuperação de Lesões3.png'
import im3 from '../image/Flexibilidade e Amplitude de Movimento.png'
import im13 from '../image/Flexibilidade e Amplitude de Movimento2.png'
import im4 from '../image/sindrome do Túnel do Carpo.png'
import im14 from '../image/sindrome do Túnel do Carpo2.png'
import im5 from '../image/Estresse e Ansiedade.png'
import im15 from '../image/Estresse e Ansiedade2.png'
import im6 from '../image/Dor Muscular e Tensão.png'
import im16 from '../image/Dor Muscular e Tensão2.png'
import im7 from '../image/Dor Crônica.png'
import im17 from '../image/Dor Crônica2.png'
import im8 from '../image/prblemas de sono.png'
import im18 from '../image/prblemas de sono2.png'
import im9 from '../image/Problemas de Postura.png'
import im19 from '../image/Problemas de Postura2.png'
import im10 from '../image/Fibromialgia.png'
import im20 from '../image/Fibromialgia2.png'
import im25 from '../image/tensão Pre-Menstrual .png'
import im26 from '../image/tensão Pre-Menstrual2.png'

export default function Massoterapia() {
  return (
    <div className={style.hea}>
      <div className={style.contain}>
        <div className={style.pos}>
          <div className={style.posi}></div>
          <div className={style.ajusta}>
            <h1>Saúde do corpo e da mente</h1>
            <h3>Determinação e satisfação em oferecer o melhor para nossos paciêntes</h3>
            <div className={style.but}>
              <Button texto={'Agende um Horário'} />
              <Button texto={'Saiba Mais'} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.apresentação} >
        <h2>Afinal, o que é a Massoterapia?.</h2>
        <h4>A massoterapia é uma forma de terapia que envolve a aplicação de diferentes técnicas de massagem com o objetivo de promover o bem-estar físico e mental. <br /> Ela é utilizada para relaxamento, alívio de tensões musculares, redução do estresse, melhoria da circulação sanguínea e aumento da flexibilidade.</h4> <br />
        <div className={style.informações}>
          <h4> <strong>Existem diversas abordagens e técnicas dentro da massoterapia, cada uma com suas  características e objetivos específicos. Algumas das técnicas mais comuns incluem :</strong> </h4>

          <p><span>Massagem Clássica ou Sueca:</span> Uma das formas mais conhecidas de massoterapia, que utiliza movimentos como amassamento, deslizamento, fricção e percussão para relaxar os músculos e melhorar a circulação.

          </p>

          <p> <span>Massagem Terapêutica:</span > Concentra-se em áreas específicas do corpo para tratar dores musculares, lesões e disfunções físicas. Pode envolver técnicas como liberação miofascial, alongamento e pressão profunda.

          </p>

          <p> <span>Massagem Desportiva: </span> Projetada para atletas e pessoas envolvidas em atividades físicas intensas. Ajuda na prevenção e recuperação de lesões, melhorando o desempenho atlético.

          </p>

          <p><span>Massagem Shiatsu:</span> Originária do Japão, utiliza pressão dos dedos em pontos específicos do corpo para equilibrar o fluxo de energia (conhecido como qi ou chi).

          </p>

          <p><span>Massagem Tailandesa:</span> Realizada no chão, com o paciente vestido com roupas confortáveis. Envolve alongamentos passivos e pressões ao longo das linhas de energia do corpo.
          </p>

          <p><span>Massagem de Pedras Quentes: </span> Utiliza pedras aquecidas para massagear o corpo, combinando o calor terapêutico com a pressão das pedras.

          </p>

          <p><span>Massagem Reflexológica:</span> Baseia-se na ideia de que diferentes partes dos pés, mãos e orelhas estão conectadas a órgãos e sistemas do corpo. Estimular essas áreas pode promover o equilíbrio e a cura.

          </p>

          <p><span>Massagem Ayurvédica</span> Originada da Índia, combina técnicas de massagem com os princípios da medicina ayurvédica, visando equilibrar os doshas (energias) do corpo.
          </p><br />
          <h4>
            É importante ressaltar que a massoterapia não é uma substituição para cuidados médicos. Se você tem condições médicas específicas ou está lidando com problemas de saúde, é sempre recomendado consultar um profissional de saúde antes de receber qualquer forma de massagem terapêutica. Além disso, ao escolher um massoterapeuta, certifique-se de que ele seja certificado e tenha treinamento adequado nas técnicas que utiliza.
          </h4>
        </div>
      </div>
      <div className={style.divisor}>
        <span>______________________________________________</span>
        <h2 >Tratamentos da Massoterapia</h2>
        <span>______________________________________________</span>
      </div>


      <div className={style.cards}>
        <div className={style.organiza}>
          <Card2 titulo='Circulação Sanguínea' imagem={im1} />
         
          <div className={style.texto}>
            <h2>Sintomas</h2>
            <p>Os problemas de circulação sanguínea podem ter uma variedade de sintomas, que variam de leves a graves.  Esses sintomas podem ser indicativos de condições médicas subjacentes que afetam a circulação. É importante ressaltar que qualquer pessoa que suspeite ter um problema de circulação deve procurar orientação médica para um diagnóstico adequado e tratamento. Alguns sintomas comuns de problemas de circulação sanguínea incluem:</p>
            <ul>
              <li>dor, sensação de queimação, cãibras ou dormência nas pernas, pés, braços ou mãos.</li>
              <li>A pele nas áreas afetadas pode ficar mais pálida ou até mesmo adquirir uma coloração azulada devido à diminuição do fluxo sanguíneo.</li>
              <li>Edema nas extremidades, especialmente nos tornozelos, pode ser um sinal de má circulação.</li>
              <li> Sensações de formigamento, dormência ou alfinetadas nas extremidades podem indicar problemas circulatórios.</li>
              <li>  Úlceras que não cicatrizam facilmente nas pernas ou pés podem ser causadas por uma circulação deficiente.</li>
              <li>  Sensação de pernas cansadas, pesadas ou doloridas, especialmente após ficar em pé por longos períodos.</li>
              <li> As mãos e os pés podem ficar frios ao toque devido ao fluxo sanguíneo reduzido.</li>
              <li>  A redução da pulsação nas extremidades pode ser um sinal de fluxo sanguíneo comprometido.</li>
              
              <li>    Nos homens, a má circulação sanguínea pode afetar a função erétil.</li>
            </ul>
          </div>
        </div>
       
      </div>
      <div className={style.cards}>
        <div className={style.organiza}>
          <div className={style.texto}>
            <h2>Sintomas</h2>
            <p>A massoterapia, também conhecida como massagem terapêutica, é uma técnica que envolve a manipulação dos tecidos moles do corpo, como músculos, tendões, ligamentos e tecido conjuntivo, com o objetivo de promover o relaxamento, aliviar a dor, melhorar a circulação sanguínea e linfática, e proporcionar uma sensação geral de bem-estar. Ela pode desempenhar um papel importante no tratamento de lesões, mas é importante entender seus benefícios e limitações
              A massoterapia pode ser benéfica no tratamento de lesões de várias maneiras:</p>
            <ul>
              <li>Muitas lesões resultam em tensão muscular e contraturas. A massagem terapêutica pode ajudar a relaxar os músculos tensos, melhorando a amplitude de movimento e reduzindo a dor associada à tensão</li>
              <li>A massagem estimula a circulação sanguínea e linfática, o que pode ajudar na remoção de resíduos metabólicos e na entrega de nutrientes essenciais às áreas lesionadas. Isso pode acelerar o processo de cicatrização.</li>
              <li>A massagem pode estimular a liberação de endorfinas, que são neurotransmissores que atuam como analgésicos naturais. Isso pode ajudar a reduzir a percepção da dor.</li>
              <li>  A massoterapia pode auxiliar na mobilização do tecido cicatricial, ajudando a prevenir a formação de aderências e promovendo a regeneração saudável dos tecidos.</li>
              <li>  Algumas lesões podem causar compressão dos nervos, resultando em dor e desconforto. A massagem pode ajudar a liberar a pressão sobre os nervos, aliviando os sintomas..</li>
            </ul>
          </div>
          <Card2 titulo='Recuperação de Lesões ' imagem={im2} />
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.organiza}>
          <Card2 titulo='Recuperação de Lesões ' imagem={im22} />
          <div className={style.texto}>
            <h2>Dica extra.</h2>
            <p>A recuperação de lesões é um processo que envolve a restauração dos tecidos afetados, a redução da dor, a restauração da função normal e a prevenção de complicações futuras. O tempo e os métodos de recuperação podem variar dependendo do tipo e gravidade da lesão. Aqui estão algumas diretrizes gerais para ajudar na recuperação de lesões:</p>
            <ul>
              <li>Em muitos casos, um período de descanso é necessário para permitir que o corpo se recupere. Isso pode envolver evitar atividades que agravem a lesão e permitir que os tecidos lesionados se curem.</li>
              <li>Para lesões agudas, como entorses, usar a técnica R.I.C.E. (Repouso, Gelo, Compressão, Elevação) pode ser útil para reduzir o inchaço e a inflamação.</li>
              <li>Dependendo da gravidade da lesão, o médico pode prescrever medicamentos para aliviar a dor, reduzir a inflamação ou relaxar os músculos. Tratamentos como fisioterapia, massoterapia e acupuntura podem ser recomendados para auxiliar na recuperação.</li>
              <li>   Conforme a lesão melhora, o profissional de saúde pode recomendar exercícios de fortalecimento e alongamento para gradualmente recuperar a força e a flexibilidade. É importante seguir as orientações para evitar agravar a lesão.</li>
              <li>   Uma dieta equilibrada rica em nutrientes, vitaminas e minerais pode ajudar a apoiar a recuperação e a regeneração dos tecidos..</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.organiza}>
          <div className={style.texto}>
            <h2>Sintomas</h2>
            <p>A massoterapia pode desempenhar um papel importante na recuperação dos movimentos, especialmente após lesões, cirurgias ou condições médicas que afetam a mobilidade e a funcionalidade do corpo. A massoterapia, também conhecida como terapia de massagem, envolve a manipulação dos tecidos moles do corpo, como músculos, tendões e ligamentos, com o objetivo de melhorar a circulação sanguínea, relaxar a musculatura, reduzir a dor e promover a recuperação.
              Aqui estão algumas maneiras pelas quais a massoterapia pode ajudar na recuperação dos movimentos.</p>
            <ul>
              <li>Lesões e tensões podem causar espasmos e tensão muscular. A massagem terapêutica ajuda a relaxar os músculos tensos, melhorando a flexibilidade e a amplitude de movimento.</li>
              <li> A massagem estimula o fluxo sanguíneo para as áreas tratadas, o que pode aumentar o suprimento de nutrientes e oxigênio aos tecidos lesionados, auxiliando na cicatrização e recuperação.</li>

              <li> Após cirurgias ou lesões graves, podem se formar aderências e cicatrizes nos tecidos, limitando a mobilidade. A massoterapia pode ajudar a quebrar essas aderências e tornar os tecidos mais flexíveis.</li>
              <li>  A massagem pode liberar endorfinas, que são substâncias químicas naturais do corpo que reduzem a sensação de dor. Isso pode ser especialmente útil para pessoas que estão lidando com dor crônica resultante de lesões.</li>
              <li>  A massagem pode ajudar a melhorar a drenagem linfática, o que é benéfico para reduzir o inchaço e a retenção de fluidos em áreas afetadas.</li>
              <li>  A recuperação de movimentos muitas vezes é acompanhada por estresse e ansiedade. A massoterapia promove relaxamento e ajuda a reduzir o estresse, o que pode contribuir para a recuperação global.</li>
              <li> : A massagem pode ajudar a pessoa a se tornar mais consciente de sua postura, movimentos e padrões de tensão. Isso pode levar a um uso mais eficiente do corpo, prevenindo futuras lesões.</li>

            </ul>
          </div>
          <Card2 titulo='Flexibilidade e Amplitude de Movimento' imagem={im3} />
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.organiza}>
          <Card2 titulo='Síndrome do Túnel do Carpo ' imagem={im4} />
          <div className={style.texto}>
            <h2>Sintomas</h2>
            <p>A Síndrome do Túnel do Carpo (STC) é uma condição médica que afeta o punho e a mão, causada pela compressão do nervo mediano à medida que ele passa através do túnel do carpo, uma estrutura estreita no pulso. O nervo mediano é responsável por transmitir sinais sensoriais e motores para a maioria dos dedos da mão, exceto o dedo mínimo.
              A compressão do nervo mediano pode ser causada por uma variedade de fatores, incluindo:</p>
            <ul>
              <li> Inchaço dos tecidos circundantes, frequentemente associado a condições como artrite reumatoide.</li>
              <li> Fraturas no pulso, lesões repetitivas ou impactos diretos podem contribuir para a compressão.</li>

              <li> Movimentos frequentes e repetitivos do pulso, como digitação ou uso de ferramentas manuais, podem desempenhar um papel no desenvolvimento da STC.</li>
              <li>  Algumas pessoas podem ter uma anatomia do túnel do carpo que naturalmente torna o nervo mediano mais suscetível à compressão.</li>
              <li>  Mudanças hormonais, como as que ocorrem durante a gravidez, podem afetar os tecidos ao redor do nervo mediano e contribuir para o desenvolvimento da STC.</li>
              <li> Geralmente afetando os dedos polegar, indicador, médio e metade do anelar.</li>
              <li>  Dificuldade em segurar objetos pequenos ou realizar tarefas que envolvam movimentos finos com a mão.</li>

            </ul>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.organiza}>
          <div className={style.texto}>
            <h2>Sintomas</h2>
            <p>Dor muscular e tensão são duas condições frequentemente relacionadas ao sistema musculoesquelético. Vou explicar cada uma delas:</p>
            <ul>
              <li> Dor Muscular:
                A dor muscular é uma sensação desconfortável ou dolorosa que ocorre nos músculos do corpo. Ela pode ser resultado de várias causas, incluindo:</li>
              <li> Exercício Intenso: Após um treino intenso, é comum sentir dor muscular, conhecida como dor muscular de início tardio (DMIT). Ela geralmente ocorre devido a pequenos danos nas fibras musculares durante o exercício.</li>

              <li>Lesões: Lesões como distensões (alongamentos excessivos) ou rupturas de fibras musculares podem causar dor aguda e intensa.</li>
              <li> Postura e Uso Repetitivo: Má postura ou uso repetitivo de certos grupos musculares, como em trabalhos que envolvem movimentos repetitivos, podem levar a dores musculares crônicas.</li>
              <li>  Estresse e Tensão: O estresse emocional pode levar à tensão muscular, causando dor e desconforto.</li>
              <li> A tensão muscular refere-se a uma condição em que os músculos estão contraídos ou enrijecidos de forma excessiva. Isso pode resultar em sensações de rigidez, desconforto e dor. </li>
              <li>  Altos níveis de estresse emocional ou ansiedade podem levar à tensão muscular. A resposta do corpo ao estresse pode causar contração muscular involuntária.</li>

            </ul>
          </div>
          <Card2 titulo='Dor Muscular e Tensão' imagem={im6} />
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.organiza}>
          <Card2 titulo='Dor Crônica' imagem={im7} />
          <div className={style.texto}>
            <h2>Sintomas</h2>
            <p>Dor crônica é um tipo de dor que persiste por um período prolongado, geralmente por mais de três meses, ou mesmo além do tempo de cicatrização esperado para uma lesão ou condição. Ela pode afetar várias áreas do corpo e pode ser causada por uma variedade de fatores. A dor crônica é mais do que apenas uma resposta ao dano físico; muitas vezes, está relacionada a alterações complexas nos sistemas nervoso e musculoesquelético.Alguns exemplos de condições que podem resultar em dor crônica incluem:</p>
            <ul>
              <li>Dor nas Costas Crônica: Pode ser causada por problemas como hérnia de disco, osteoartrite, espondilite anquilosante ou lesões antigas.</li>
              <li> Enxaqueca ou Dor de Cabeça Crônica: Pessoas que sofrem de enxaquecas frequentes podem experimentar dor crônica.</li>

              <li>Síndrome da Dor Regional Complexa (SDRC): Também conhecida como distrofia simpática reflexa, é uma condição que causa dor intensa e mudanças na pele.</li>
              <li> Artrite Reumatoide: Uma doença autoimune que causa inflamação nas articulações e pode levar à dor crônica.</li>
              <li>  Neuropatia Diabética: Danos aos nervos causados pelo diabetes podem resultar em dor crônica, formigamento e dormência.</li>
              <li> Dor Crônica Pós-Cirúrgica: Algumas cirurgias podem levar à dor persistente após o procedimento.</li>
              <li>  Síndrome do Intestino Irritável (SII): Pode causar dor abdominal crônica, inchaço e alterações nos hábitos intestinais.</li>
              <li> A abordagem para o tratamento da dor crônica geralmente é multifacetada e pode envolver uma combinação de métodos, dependendo da causa subjacente da dor</li>

            </ul>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.organiza}>
          <div className={style.texto}>
            <h2>Sintomas</h2>
            <p>Os problemas de sono, também conhecidos como distúrbios do sono, são condições que afetam a qualidade e/ou quantidade do sono de uma pessoa. Existem vários tipos de distúrbios do sono que podem afetar diferentes aspectos do sono, resultando em dificuldades para adormecer, permanecer dormindo ou obter um sono reparador. Alguns dos problemas de sono mais comuns incluem:</p>
            <ul>
              <li>Insônia: É caracterizada pela dificuldade em adormecer ou permanecer dormindo, levando a um sono inadequado e não reparador. Pode ser causada por fatores como estresse, ansiedade, depressão, uso excessivo de dispositivos eletrônicos antes de dormir ou má higiene do sono.</li>
              <li> Apneia do sono: A apneia do sono é um distúrbio em que a pessoa para de respirar temporariamente durante o sono, muitas vezes devido ao colapso das vias respiratórias. Isso pode resultar em despertares frequentes e interrupções no padrão de sono, levando a sonolência diurna, falta de energia e problemas de saúde a longo prazo.</li>

              <li>Síndrome das pernas inquietas: Caracteriza-se por uma sensação desconfortável nas pernas, muitas vezes acompanhada de um impulso irresistível de movê-las. Isso pode interferir no sono, pois as pessoas afetadas frequentemente sentem a necessidade de se mover, o que pode dificultar o adormecimento.</li>
              <li> Distúrbios do ritmo circadiano: O ritmo circadiano é o relógio biológico interno que regula o ciclo de sono-vigília. Distúrbios como o jet lag (resultante de viagens atravessando fusos horários) e o transtorno do ritmo circadiano são exemplos de problemas que podem afetar esse ritmo, levando a dificuldades para dormir nos horários convencionais.</li>


            </ul>
          </div>
          <Card2 titulo='Problemas de Sono' imagem={im8} />
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.organiza}>
          <Card2 titulo='Problemas de Sono' imagem={im18} />
          <div className={style.texto}>
            <h2>Dica Extra</h2>
            <p>Se você está enfrentando problemas de sono persistentes, é recomendado procurar um médico ou especialista em sono. Um diagnóstico adequado pode ajudar a identificar a causa subjacente do seu problema de sono e permitir o desenvolvimento de um plano de tratamento adequado. Em muitos casos, pequenas mudanças nos hábitos de sono e no estilo de vida podem fazer uma grande diferença na qualidade do sono.</p>
            <ul>

              <li> Narcolepsia: É um distúrbio do sono caracterizado por sonolência excessiva durante o dia, ataques de sono repentinos e perda de controle muscular (cataplexia) em resposta a emoções intensas. Pode interferir significativamente na vida diária e nas atividades normais.</li>
              <li> Parassonias: São comportamentos anormais durante o sono, como sonambulismo, terrores noturnos, pesadelos frequentes e até mesmo comportamentos violentos durante o sono</li>
              <li>  Distúrbios do sono relacionados ao trabalho por turnos: Pessoas que trabalham em turnos alternados, noturnos ou irregulares muitas vezes enfrentam problemas de sono devido às mudanças no ritmo circadiano.</li>
              <li> Distúrbios do sono relacionados ao envelhecimento: À medida que envelhecemos, os padrões de sono podem mudar, com tendência a acordar mais cedo e ter dificuldade em adormecer</li>

            </ul>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.organiza}>
          <div className={style.texto}>
            <h2>Sintomas</h2>
            <p>Problemas de postura, também conhecidos como alterações posturais, referem-se às posições inadequadas ou anormais nas quais uma pessoa mantém o seu corpo enquanto está sentada, em pé ou realizando várias atividades. Esses problemas podem ter várias causas, desde fatores genéticos e hábitos diários até condições médicas subjacentes. Alguns dos problemas de postura mais comuns incluem:</p>
            <ul>
              <li>Lordose: Também chamada de curvatura lombar excessiva, a lordose envolve uma curvatura acentuada para dentro na região inferior das costas. Isso pode resultar em uma aparência de bumbum empinado e causar dor na região lombar.</li>
              <li> Cifose: A cifose refere-se à curvatura exagerada para frente da parte superior das costas (região torácica), o que pode levar a uma postura encurvada ou corcunda. Isso muitas vezes está associado a má postura e pode causar desconforto ou dor.</li>

              <li> Escoliose: A escoliose envolve uma curvatura lateral anormal da coluna vertebral. Pode ser leve ou grave e, em alguns casos, pode requerer tratamento médico, como o uso de coletes ou cirurgia.</li>
              <li>  Ombros caídos: Essa postura ocorre quando os ombros estão em uma posição mais baixa do que o normal, o que pode dar uma aparência encurvada e tensa.</li>
              <li>  Cabeça inclinada para a frente: Também conhecida como cabeça à frente, essa postura é caracterizada por projetar a cabeça para frente em relação aos ombros. Isso pode estar relacionado ao uso excessivo de dispositivos eletrônicos e à má ergonomia no local de trabalho.</li>
              <li>  Pé chato: Um pé plano ou arco caído pode afetar o alinhamento de todo o corpo, desde os pés até a coluna vertebral.</li>
              <li> Má postura ao sentar: Sentar-se de maneira incorreta, como se curvar ou não fornecer um bom suporte lombar, pode resultar em tensão e dor nas costas.</li>

            </ul>
          </div>
          <Card2 titulo='Problemas de Postura' imagem={im9} />
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.organiza}>
          <Card2 titulo='Fibromialgia' imagem={im10} />
          <div className={style.texto}>
            <h2>Sintomas</h2>
            <p>A fibromialgia é um distúrbio crônico caracterizado por dor musculoesquelética generalizada, fadiga, distúrbios do sono e pontos sensíveis. É considerada uma condição complexa que afeta a forma como o cérebro processa os sinais de dor. Embora a fibromialgia se manifeste principalmente como dor e desconforto nos músculos, ligamentos e tendões, ela também pode levar a uma variedade de outros sintomas e desafios.
              Principais características da fibromialgia incluem:</p>
            <ul>
              <li> O sintoma principal da fibromialgia é a dor generalizada que persiste por pelo menos três meses. A dor costuma ser descrita como uma sensação constante de dor leve e pode ser sentida em ambos os lados do corpo, acima e abaixo da cintura.</li>
              <li> Pessoas com fibromialgia frequentemente experimentam pontos sensíveis, áreas específicas no corpo que são sensíveis ao toque. A pressão sobre esses pontos pode causar dor.</li>

              <li> A fadiga crônica é comum na fibromialgia. Apesar de dormir o suficiente, indivíduos com fibromialgia muitas vezes acordam se sentindo cansados e sem se sentirem revigorados.</li>
              <li>  Problemas de sono são frequentes na fibromialgia. Isso pode incluir dificuldades para adormecer, permanecer dormindo e ter um sono restaurador.</li>
              <li>  Frequentemente chamado de névoa da fibro, problemas cognitivos como dificuldade de concentração, problemas de memória e processamento cognitivo mais lento podem ocorrer.o.</li>

            </ul>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.organiza}>
          <div className={style.texto}>
            <h2>Dicas Extras</h2>
            <p>A causa exata da fibromialgia não é bem compreendida. Acredita-se que envolva uma combinação de fatores genéticos, ambientais e psicológicos. Fatores de risco para o desenvolvimento da fibromialgia incluem histórico familiar da condição, trauma físico ou emocional, infecções e certas doenças autoimunes.</p>
            <ul>
              <li> O diagnóstico da fibromialgia pode ser desafiador, uma vez que não existem testes laboratoriais específicos ou exames de imagem que possam confirmá-la. O diagnóstico geralmente é baseado nos sintomas relatados pelo paciente e em um exame físico. Médicos frequentemente utilizam critérios estabelecidos por organizações como o Colégio Americano de Reumatologia para diagnosticar a fibromialgia.</li>
              <p>Embora não haja cura para a fibromialgia, o tratamento visa gerenciar os sintomas e melhorar a qualidade de vida do paciente. Isso pode envolver uma combinação de medicamentos (como analgésicos, antidepressivos e auxílios para dormir), fisioterapia, exercícios, técnicas de gerenciamento de estresse e mudanças no estilo de vida. É importante que pessoas com fibromialgia trabalhem em conjunto com um profissional de saúde para desenvolver um plano de tratamento personalizado.</p>
              <li> Se você suspeita que tem fibromialgia ou está experimentando sintomas semelhantes aos descritos acima, é recomendado consultar um profissional médico para uma avaliação adequada e orientação.</li>


            </ul>
          </div>
          <Card2 titulo='Fibromialgia' imagem={im20} />
        </div>
      </div>



      <div className={style.cards}>
        <div className={style.organiza}>
          <Card2 titulo='Tensão Pré-Menstrual (TPM)' imagem={im26} />
          <div className={style.texto}>
            <h2>Sintomas</h2>
            <p>A tensão pré-menstrual (TPM) é um conjunto de sintomas físicos, emocionais e comportamentais que ocorrem em muitas pessoas menstruantes nos dias que antecedem a menstruação. Ela é causada pelas flutuações hormonais que ocorrem durante o ciclo menstrual.
              Os sintomas da TPM podem variar de leves a graves e podem incluir:</p>
            <ul>
              <li> Sintomas físicos: Inchaço abdominal, Dor nos seios, Cólicas menstruais, Fadiga, Dores de cabeça,
                Mudanças no apetite e desejos alimentares</li>
              <li> Sintomas emocionais e psicológicos: Irritabilidade, Mudanças de humor, Ansiedade ,Depressão,Choro fácil, Dificuldade de concentração</li>

              <li> Sintomas comportamentais: Distúrbios do sono, Redução da libido, Dificuldade de lidar com o estresse, Sensação de estar sobrecarregada</li>
              <li> A gravidade e a combinação de sintomas variam de pessoa para pessoa. Algumas pessoas podem ter sintomas leves que não afetam muito sua qualidade de vida, enquanto outras podem experimentar sintomas mais intensos que interferem em suas atividades diárias.
                O tratamento da TPM depende da gravidade dos sintomas e das necessidades individuais. </li>
              <li>  Frequentemente chamado de névoa da fibro, problemas cognitivos como dificuldade de concentração, problemas de memória e processamento cognitivo mais lento podem ocorrer.o.</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
