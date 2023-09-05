import style from '@/app/style/footer.module.css'
import Link from 'next/link'

import {BsFillTelephoneFill, BsFacebook,BsInstagram, BsWhatsapp, BsFillAlarmFill} from "react-icons/bs"
import {FaRegEnvelope , FaLinkedin,  FaPhoneAlt, FaUserAlt, FaEnvelope, FaCommentAlt, FaMapMarked } from "react-icons/fa";

export default function Footer() {
  return (
    <footer >
       <div className={style.container}>
       <div className={style.marca}>
        <h1>Espaço <span>Emídio & Sá</span></h1>
       <p>CUIDANDO DE SUA SAÚDE</p>
       </div>
       <div className={style.icone}>
        <Link  href={'https://www.facebook.com/profile.php?id=100095584324495&mibextid=LQQJ4d'} target='blank'><span><BsFacebook/></span></Link>
        <Link  href={'https://www.instagram.com/espaco_emidiosa.sx/'} target='blank'> <span><BsInstagram/></span> </Link>
        <Link  href={'https://wa.me/5519991062455?text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento.'} target='blank'> <span><BsWhatsapp/></span> </Link>
        <Link  href={'/'}><span><FaLinkedin/></span> </Link> 
        </div>
        <nav>
        <Link href={'/'}>Início</Link>
        <Link href={'/massoterapia'}>Massoterapia</Link>
        <Link href={'/pisicologia'}>Pisicologia</Link>
        <Link href={'/sobre'}>Sobre Nós</Link>
        <Link href={'/contato'}>Contato</Link>
       </nav>
       </div>
       <hr />
       <div className={style.container}>
       <div>
        <h1>Endereço:</h1>
       <div  className={style.icone}>
       <Link  href={'https://goo.gl/maps/ZGWVF4kh82wWjVMX9'} target='blank'><span>< FaMapMarked /> </span></Link>
       <p>Rua Dr. João Mascarenhas Neves, 67 - Jardim Bonfim</p>
       </div>
       </div>
       <div >
        <h1>Telefone:</h1>
       <div className={style.icone}>
       <Link  href={'https://wa.me/5519991062455?text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento.'} target='blank'><span><BsFillTelephoneFill/> </span></Link>
        <p>19 99106-2455</p>
       </div>
       </div>
       <div >
        <h1>Horário de Atendimento:</h1>
        <div className={style.icone}>
        <span><BsFillAlarmFill/>  </span>
        <p>De Segunda  á Sexta, das 9:00 as 19:00</p>
        </div>
       </div>
       </div>
    </footer>
  )
}
