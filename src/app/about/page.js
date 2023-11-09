import Image from 'next/image'
import Link from 'next/link'
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Footer />
    <h1 className='text-red'>This is About Page</h1>
    <Link href={"/"}>
        Go back to Home Page
    </Link>
    <Link href={"/contact"}>
        Go to Contact Page
    </Link>
    </div>
    
  )
}
