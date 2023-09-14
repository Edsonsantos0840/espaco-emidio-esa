import style from '@/app/style/sobre.module.css'
import im1 from '../../app/image/60.png'
import im2 from '../../app/image/61.png'
import Image from 'next/image'
import Button from '../../../components/button'
export default function pisicologia() {
  return (
    <div className={style.container}>
       <div className={style.historia}>
       <div className={style.marca}>
        <h1>Espaço <span>Emídio & Sá</span></h1>
        <p>Bem-vindos ao Espaço Emídio e Sà - O Equilíbrio para o Corpo e Mente!</p>
       </div>
      
       
       </div>
       <div className={style.cont}>
        <div className={style.car}>
          <h2>Psicologia</h2>
           <Image src={im1} alt='psicólogo' width={200} height={200}/>
          <p> Nossa psicóloga está aqui para oferecer orientação, apoio emocional para lidar com desafios pessoais e emocionais. temos sessões individuais e terapias focadas em ajudar você a explorar seus pensamentos, sentimentos e comportamentos, promovendo o autoconhecimento e o crescimento pessoal.</p> 
          <Button texto={'Agende um Horário'} />
        </div>
        <div className={style.car}>
          <h2>Massoterapia</h2>
           <Image src={im2} alt='massoterapeuta' width={200} height={200}/>
          <p>Nosso terapeuta altamente especializado oferece uma variedade de técnicas de massagem destinadas a aliviar a tensão muscular, melhorar a circulação e promover o relaxamento profundo. Dores físicas muitas.</p> 
          <Button texto={'Agende um Horário'} />
        </div>
       
       </div>
    </div>
  )
  }
