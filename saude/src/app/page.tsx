import style from '@/app/style/inicio.module.css'
import Image from 'next/image'
import Button from '../../components/button'

export default function Inicio() {
  return (
    <main  >
    <div className={style.hea}>
    <div className='contain'>
    <div className={style.ajusta}>
    <h1>Saúde do corpo e da mente</h1>
      <h3>Determinação e satisfação em oferecer o melhor para nossos paciêntes</h3>
      <div className={style.but}>
        <Button texto={'Agende um Horário'}/>
        <Button texto={'Saiba Mais'}/>
    </div>
      </div>
    </div>
    </div>
    </main>
  )
}
