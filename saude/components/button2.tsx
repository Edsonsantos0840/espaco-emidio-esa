import Link from "next/link";

export default function Button2({texto}: any) {
  return (
    <>
     
      <Link href={'/sobre'} ><button >{texto}</button></Link> 
     
    </>
  )
}