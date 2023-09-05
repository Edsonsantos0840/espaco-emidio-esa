import Image from 'next/image'
import Link from 'next/link'
import logo from '@/app/image/l2.png'
import style from '@/app/style/header.module.css'


export default function Header() {
  return (
    <div className={style.container}>
       <div className={style.logo} >
       <Link id='logo' href={'/'}><Image src={logo} alt='logo' width={150} height={120}/></Link>
       
       <div className={style.marca}>
        <h1>Espaço <span>Emídio & Sá</span></h1>
       <p>CUIDANDO DE SUA SAÚDE</p>
       </div>
       </div>
        
      
       <nav>
        <Link href={'/'}>Início</Link>
        <Link href={'/massoterapia'}>Massoterapia</Link>
        <Link href={'/pisicologia'}>Pisicologia</Link>
        <Link href={'/sobre'}>Sobre Nós</Link>
        <Link href={'/contato'}>Contato</Link>
       </nav>
    </div>
  )
}
