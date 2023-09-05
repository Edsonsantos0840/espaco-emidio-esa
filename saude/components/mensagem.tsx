//css
import style from '@/app/style/mensagem.module.css'
//modulos


const Mensagem = ({ mens}:{
  mens: string
 
}) => {

  return (
    <div className={style.mens} >{mens}</div>
  )
}

export default Mensagem