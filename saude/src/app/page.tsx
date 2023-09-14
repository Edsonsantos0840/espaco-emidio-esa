'use client'
import style from '@/app/style/inicio.module.css'
import Image from 'next/image'

import { useState } from 'react'
import Button from '../../components/button'
import Button2 from '../../components/button2'
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
  const [mostra1, setMostra1] = useState(false)
  const [mostra2, setMostra2] = useState(false)
  const [mostra3, setMostra3] = useState(false)
  const [mostra4, setMostra4] = useState(false)
  const [mostra5, setMostra5] = useState(false)
  const [mostra6, setMostra6] = useState(false)
  const [mostra7, setMostra7] = useState(false)



  return (
    <main  >
      <div className={style.hea}>
        <div className={style.textHea}>
          <h1>Saúde do corpo e da mente</h1>
          <h3>Determinação e satisfação em oferecer o melhor para nossos paciêntes</h3>
          <div className={style.but}>
            <Button texto={'Agende um Horário'} />
            <Button2 texto={'Saiba Mais'} />
          </div>
        </div>
      </div>

      <div className={style.divisor}>
        <span>______________</span>
        <h2 className={style.h2}> Áreas que Trabalhamos. </h2>
        <span>______________</span>
      </div>



      <div className={style.divide}>
        <div className={style.contem} onMouseOver={() => setMostra1(true)} onMouseOut={() => setMostra1(false)} >
          <div>
            <Card titulo=' Dores no corpo' imagem={im1} />
            <h5 >Saiba Mais</h5>
          </div>
          <ul className={mostra1 ? style.exibe : style.esconde} >
            <h2>Dores no corpo</h2>

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
            <Button texto={'Agende um Horário'} />
          </ul>
        </div>
        <div className={style.contem} onMouseOver={() => setMostra2(true)} onMouseOut={() => setMostra2(false)} >
          <div>
            <Card titulo='Estresse e Ansiedade' imagem={im2} />
            <h5 >Saiba Mais</h5>
          </div>
          <ul className={mostra2 ? style.exibe : style.esconde} >
            <h2>Estresse e Ansiedade</h2>

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
            <Button texto={'Agende um Horário'} />
          </ul>
        </div>
      </div>

      <div className={style.divide}>
        <div className={style.contem} onMouseOver={() => setMostra3(true)} onMouseOut={() => setMostra3(false)} >
          <div>
            <Card titulo=' Recuperação de Lesões' imagem={im3} />
            <h5 >Saiba Mais</h5>
          </div>
          <ul className={mostra3 ? style.exibe : style.esconde} >
            <h2>Recuperação de Lesões</h2>
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
            <Button texto={'Agende um Horário'} />
          </ul>
        </div>
        <div className={style.contem} onMouseOver={() => setMostra4(true)} onMouseOut={() => setMostra4(false)} >
          <div>
            <Card titulo=' Depressão, Traumas e Transtornos' imagem={im4} />
            <h5 >Saiba Mais</h5>
          </div>
          <ul className={mostra4 ? style.exibe : style.esconde} >
            <h2>Depressão, Traumas e Transtornos</h2>
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
            <Button texto={'Agende um Horário'} />
          </ul>
        </div>
      </div>
      <div className={style.divide}>
        <div className={style.contem} onMouseOver={() => setMostra5(true)} onMouseOut={() => setMostra5(false)} >
          <div>
            <Card titulo='Problemas de circulação sanguínea' imagem={im5} />
            <h5 >Saiba Mais</h5>
          </div>
          <ul className={mostra5 ? style.exibe : style.esconde} >
            <h2>Problemas de circulação sanguínea</h2>
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
            <Button texto={'Agende um Horário'} />
          </ul>
        </div>
        <div className={style.contem} onMouseOver={() => setMostra6(true)} onMouseOut={() => setMostra6(false)} >
          <div>
            <Card titulo=' Reabilitação e recuperação dos movimentos' imagem={im6} />
            <h5 >Saiba Mais</h5>
          </div>
          <ul className={mostra6 ? style.exibe : style.esconde} >
            <h2>Reabilitação e recuperação dos movimentos</h2>
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

            <Button texto={'Agende um Horário'} />
          </ul>
        </div>
      </div>
      <div className={style.divide}>
        <div className={style.contem} onMouseOver={() => setMostra7(true)} onMouseOut={() => setMostra7(false)} >
          <div>
            <Card titulo=' Crescimento pessoal' imagem={im7} />
            <h5 >Saiba Mais</h5>
          </div>
          <ul className={mostra7 ? style.exibe : style.esconde} >
            <h2>Crescimento pessoal</h2>
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

            <Button texto={'Agende um Horário'} />
          </ul>
        </div>
        <div className={style.apresentação} >
          <h2>Você sofre desses males? Podemos te ajudar.</h2>
          <h4>Tanto a massoterapia quanto a psicologia são recursos valiosos para cuidarmos de nós mesmos de maneira integral. <br />Enquanto a massoterapia foca no relaxamento físico, a psicologia nos auxilia a compreender e lidar com as complexidades da mente. <br /> Ao explorar esses espaços, estamos investindo em nosso próprio bem-estar, buscando equilíbrio e qualidade de vida. <br /> <br />

            Lembre-se de que cada indivíduo é único, então encontrar a combinação certa de práticas que funcionem para você é essencial. <br />Obrigado por me ouvirem e lembrem-se de cuidar tanto do corpo quanto da mente!

          </h4>
        </div>
      </div>
      
       
  

    </main >
  )
}
