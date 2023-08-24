import Image from "next/image";
import style from '@/app/style/card.module.css'

export default function Card({titulo, imagem, descrição}: any) {
  return (
    <div className={style.container}>
    <h4>{titulo}</h4>
    <Image src={imagem} alt={titulo} width={500} height={500}/>
    <p>{descrição}</p>
    </div>
  )
}
