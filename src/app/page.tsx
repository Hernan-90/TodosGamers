import Image from "next/image";
import Link from "next/link";
import Logo from '../assets/images/TG-logo.png'
import Texto from '../assets/images/TG-texto.png'

export default function Home() {

  return (
    <main className="home__container">
      <h1 className="home__title">CHALLENGE</h1>
      <Image src={ Logo } alt="TodosGamers Logo" className="home__logo"/>
      <Image src={ Texto } alt="TodosGamers Texto" className="home__texto"/>
      <Link href={'breweries'} className="btn btn__home">Empezar</Link>
    </main>
  );
}
