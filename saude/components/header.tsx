'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import logo from '@/app/image/l2.png'
import style from '@/app/style/header.module.css'
import { FaAlignJustify} from "react-icons/fa6";


export default function Header() {
  const [mostra1 ,setMostra1]= useState(false)

  return (
    <div className={style.container}>
    <div className={style.envolveMen} onMouseOver={()=> setMostra1(true ) } onMouseOut={()=> setMostra1(false )}>
    <FaAlignJustify/>
      <div className={mostra1 ? style.menuhamburger : style.esconde } >
        <Link href={'/'}>Início</Link>
        <Link href={'/massoterapia'}>Massoterapia</Link>
        <Link href={'/pisicologia'}>Pisicologia</Link>
        <Link href={'/sobre'}>Sobre Nós</Link>
        <Link href={'/contato'}>Contato</Link>
       </div>
    </div>
       <div className={style.logo} >
       <Link href={'/'}><Image src={logo} alt='logo' width={100} height={100}/></Link>
       
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
