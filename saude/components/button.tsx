import Link from "next/link";

export default function Button({texto}: any) {
  return (
    <>
     
      <Link href={'/contato'} ><button >{texto}</button></Link> 
     
    </>
  )
}
