'use client'
import style from '@/app/style/contato.module.css'
//componentes
import Mensagem from '../../../components/mensagem';
import logo from '../image/l1.png'
import { BsCalendarDate, BsFacebook,BsInstagram, BsWhatsapp} from "react-icons/bs"
import {FaLinkedin,  FaPhoneAlt, FaUserAlt, FaEnvelope, FaCommentAlt, FaMedkit } from "react-icons/fa";
//modulos
import emailjs from '@emailjs/browser'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';




export default function Contato(){

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [fone, setFone] = useState('')
  const [esp, setEsp] = useState('')
  const [datas, setDatas] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [recado, setRecado] = useState('')
  // const [tipo, setTipo] = useState('')

  // validação simples do formulário
  function captura(e:Event | any) {
    e.preventDefault()
    if (nome === '' || email === '' || fone === '' || esp === '' || datas === '') {
      setRecado('Todos os campos com asterisco são obrigatórios!!!')
      // setTipo('erro')
    } else if (nome.length < 3) {
      setRecado('Digite pelo menos 4 letras')
      // setTipo('erro')
    } else if (email.length < 3) {
      setRecado('Digite pelo menos 4 letras')
      // setTipo('erro')
    } else if (fone.length < 8) {
      setRecado('Digite pelo menos 8 numeros')
      // setTipo('erro')
    } else {
      setRecado('Cadastro enviado com sucesso!!!')
      // setTipo('sucesso')
      var templateParams = {
        from_name: nome,
        email: email,
        telefone: fone,
        especialidade: esp,
        data: datas,
        message: mensagem
      }
      //envio do formulário
      emailjs.send("service_hu18d74", "template_ucy9zs2", templateParams, "ztQRtw8wb5D7bN5oO")
        .then((res) => {
          console.log("EMAIL ENVIADO COM SUCESSO", res.status, res.text)
          setNome('')
          setEmail('')
          setFone('')
          setEsp('')
          setDatas('')
          setMensagem('')
        }, (err) => {
          console.log("ERRO:", err)
        }
        )
    }
  }

  return (
    <div className={style.container}>
     <div className={style.sombra}>
      <div className={style.social}>
      <Link id='logo' href={'/'}><Image src={logo} alt='logo' width={350} height={300}/></Link>
        <div className={style.marca}>
        <h1>Espaço <span>Emídio & Sá</span></h1>
       </div>
        <div className={style.icone}>
        <Link  href={'https://www.facebook.com/profile.php?id=100095584324495&mibextid=LQQJ4d'} target='blank'><span><BsFacebook/></span></Link>
        <Link  href={'https://www.instagram.com/espaco_emidiosa.sx/'} target='blank'> <span><BsInstagram/></span> </Link>
        <Link  href={'https://wa.me/5519991062455?text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento.'} target='blank'> <span><BsWhatsapp/></span> </Link>
        <Link  href={'/'}><span><FaLinkedin/></span> </Link> 
        </div>

      </div>
     <form className={style.form} onSubmit={captura} >
          <h1>Peça um orçamento</h1>
        <label>
         <div className={style.ong} >
          <span><FaUserAlt className={style.icons} /></span> <span>*Nome:</span>
         </div>
            <input  type="text" placeholder='Digite seu nome' value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
   <label>
          <div className={style.ong}>
            <span><FaEnvelope className={style.icons} /></span><span>*E-mail:</span>
          </div>
            <input type="email" placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
         <div className={style.ong}>
           <span><FaPhoneAlt className={style.icons} /></span><span>*Telefone:</span>
           </div>
            <input type="fone" placeholder='Digite seu telefone' value={fone} onChange={(e) => setFone(e.target.value)} />
        </label>
        <label>
         <div className={style.ong}>
           <span><BsCalendarDate className={style.icons} /></span><span>*Data:</span>
           </div>
            <input type="date"  value={datas} onChange={(e) => setDatas(e.target.value)} />
        </label>
        <label>
         <div className={style.ong}>
           <span><FaMedkit className={style.icons} /></span><span>*Especialidade:</span>
           </div>
           <select name="Especialidades" id="Especialidades" value={esp} onChange={(e) => setEsp(e.target.value)}>
           <option value=" ">--------Selecione--------</option>
           <option value="Massoterapia">Massoterapia</option>
            <option value="Psicologia">Psicologia</option>
           </select>
        </label>
        <label>
          <div className={style.ong}>
            <span> <FaCommentAlt className={style.icons}
              id='mens' /></span><span>Deixe sua mensagem</span>
          </div>
          <div>
            <textarea  value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
          </div>
        </label>
        <button >Enviar</button>
        <Mensagem  mens={recado}  />
        </form>

     </div>
    </div>
  )
}