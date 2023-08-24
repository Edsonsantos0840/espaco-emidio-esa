import style from '@/app/style/inicio.module.css'
import Image from 'next/image'
import Button from '../../components/button'
import Card from '../../components/card'
import im1 from './image/fibromialgia.png'
import im2 from './image/estresse e Ansiedade.png'
import im3 from './image/Recuperação de Lesões 2.png'
import im4 from './image/depressão3.png'
import im5 from './image/Circulação Sanguínea.png'
import im6 from './image/Flexibilidade e Amplitude de Movimento.png'
import im7 from './image/desenvolvimento Pessoal.png'
import im8 from './image/10.png'


export default function Inicio() {
  return (
    <main  >
      <div className={style.hea}>
        <div className={style.textHea}>
          <h1>Saúde do corpo e da mente</h1>
          <h3>Determinação e satisfação em oferecer o melhor para nossos paciêntes</h3>
          <div className={style.but}>
            <Button texto={'Agende um Horário'} />
            <Button texto={'Saiba Mais'} />
          </div>
        </div>
      </div>
      
      <div className={style.divisor}>
        <span>______________________________________________</span>
        <h2 className={style.h2}>Áreas que Trabalhamos.</h2>
        <span>______________________________________________</span>
      </div>

      <section className={style.colunas }>
      
     <div className={style.dTela}>
      <div className={style.alinha}>
     <h2>Dor muscular, dor crônica, tensão</h2>
      <div className={style.organiza}>
      <Card titulo=' Dores no corpo' imagem={im1} />
      <ul>
            <li>Limitações na funcionalidade</li>
            <li>Dificuldades no estudos</li>
            <li>Alterações emocionais</li>
            <li>Distúrbios do sono</li>
            <li>pior desempenho no trabalho</li>
            <li>Limitações funcionais</li>
            <li>Uso excessivo de medicamentos</li>
            <li>Impacto na saúde mental</li>
            <li>Comprometimento emocional e relacional</li>
            <li>Isolamento social</li>
          </ul>
      </div>
      <Button texto={'Agende um Horário'} />
     </div>
     <div className={style.alinha} >
     <h2>Estresse e Ansiedade</h2>
      <div className={style.organiza}>
      <Card titulo='Estresse e Ansiedade' imagem={im2} />
      <ul>
            <li>Doenças Cardiovasculares</li>
            <li>Distúrbios Digestivos</li>
            <li>Problemas Imunológicos</li>
            <li>Dores Musculares e Tensão</li>
            <li>Redução do Foco e Concentração</li>
            <li>Conflitos Relacionais</li>
            <li>Qualidade de Vida Geral</li>
            <li>Insônia e Distúrbios do Sono</li>
            <li>Diminuição do Bem-Estar Geral</li>
            <li>Uso Excessivo de Substâncias</li>
          </ul>
      </div>
      <Button texto={'Agende um Horário'} />
     </div>
     </div>
     <hr />
     <div className={style.dTela}>
     <div className={style.alinha}>
     <h2>Recuperação de Lesões</h2>
      <div className={style.organiza}>
      <Card titulo=' Recuperação de Lesões' imagem={im3} />
      <ul>
            <li>Dor e desconforto</li>
            <li>Inflamação</li>
            <li>Debilidade Muscular</li>
            <li>Perda de Função</li>
            <li>Limitações de Mobilidade</li>
            <li>Autoestima reduzida</li>
            <li>Cicatrizes e Aderências</li>
            <li>Limitações funcionais</li>
            <li>Cicatrizes e Aderências</li>
            <li>Complicações a Longo Prazo</li>
          </ul>
      </div>
      <Button texto={'Agende um Horário'} />
     </div>
     <div className={style.alinha} >
     <h2>Depressão, Traumas e Transtornos</h2>
      <div className={style.organiza}>
      <Card titulo=' Depressão, Traumas e Transtornos' imagem={im4} />
      <ul>
            <li>Sofrimento emocional</li>
            <li>Isolamento social</li>
            <li>Dificuldades no trabalho e estudos</li>
            <li>Prejuízos nas relações interpessoais</li>
            <li>Problemas físicos</li>
            <li>Autoestima reduzida</li>
            <li>Comportamentos de risco</li>
            <li>Limitações funcionais</li>
            <li>Custo financeiro</li>
            <li>Efeitos sobre a saúde física</li>
          </ul>
      </div>
      <Button texto={'Agende um Horário'} />
     </div>
     </div>
     <hr />
     <div className={style.dTela}>
     <div className={style.alinha}>
     <h2>Problemas de circulação sanguínea</h2>
      <div className={style.organiza}>
      <Card titulo='Problemas de circulação sanguínea' imagem={im5} />
      <ul>
            <li>Dor ou desconforto nas extremidades</li>
            <li>Pele pálida ou azulada</li>
            <li>Inchaço</li>
            <li>Formigamento ou dormência</li>
            <li>Úlceras de pernas</li>
            <li>Pernas cansadas ou pesadas</li>
            <li>Diminuição da temperatura nas extremidades</li>
            <li>Pulsação fraca</li>
            <li>Dor no peito</li>
            <li>Disfunção erétil</li>
          </ul>
      </div>
      <Button texto={'Agende um Horário'} />
     </div>
     <div className={style.alinha} >
     <h2>Reabilitação e recuperação dos movimentos</h2>
      <div className={style.organiza}>
      <Card titulo=' Reabilitação e recuperação dos movimentos' imagem={im6} />
      <ul>
            <li>Acidente Vascular Cerebral (AVC)</li>
            <li>Esclerose Múltipla (EM)</li>
            <li>Lesão Medular</li>
            <li>Doença de Parkinson</li>
            <li>Esclerose Lateral Amiotrófica (ELA)</li>
            <li>Paralisia Cerebral</li>
            <li>Lesões Nervosas Periféricas</li>
            <li>Miastenia Gravis</li>
            <li>Distúrbios Musculares Hereditários</li>
            <li>oença de Lou Gehrig</li>
          </ul>
      </div>
      <Button texto={'Agende um Horário'} />
     </div>
     </div>
     <hr />
     <div className={style.dTela}>
     <div className={style.alinha} >
     <h2>Crescimento pessoal</h2>
      <div className={style.organiza}>
      <Card titulo=' Crescimento pessoal' imagem={im7} />
      <ul>
            <li>Medo do Fracasso</li>
            <li>Falta de Autodisciplina</li>
            <li>Falta de Recursos</li>
            <li>Ambiente Social não adequado</li>
            <li>Saúde Mental</li>
            <li>Compromissos Externos</li>
            <li>Expectativas Externas</li>
            <li>Falta de Clareza</li>
            <li>Zona de Conforto</li>
            <li>Crenças Limitantes</li>
          </ul>
      </div>
      <Button texto={'Agende um Horário'} />
     </div>
      <div className={style.apresentação} >
     <h2>Você sofre desses males? Podemos te ajudar.</h2>
      <h4>Tanto a massoterapia quanto a psicologia são recursos valiosos para cuidarmos de nós mesmos de maneira integral. <br/>Enquanto a massoterapia foca no relaxamento físico, a psicologia nos auxilia a compreender e lidar com as complexidades da mente. <br/> Ao explorar esses espaços, estamos investindo em nosso próprio bem-estar, buscando equilíbrio e qualidade de vida. <br/> <br/>

Lembre-se de que cada indivíduo é único, então encontrar a combinação certa de práticas que funcionem para você é essencial. <br/>Obrigado por me ouvirem e lembrem-se de cuidar tanto do corpo quanto da mente!

</h4>
     </div>
  </div>
  </section>
  <div className={style.divisor}>
        <span>______________________________________________</span>
        <h2 className={style.h2}>Áreas que Trabalhamos.</h2>
        <span>______________________________________________</span>
      </div>
    </main >
  )
}
