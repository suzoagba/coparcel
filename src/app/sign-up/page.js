import Image from 'next/image'
import Link from 'next/link'
import Navbar from "../../components/Navbar"
import SignUp from '@/components/Sign-up'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <div>
        <Navbar />
    <SignUp />
    <Footer />
    </div>
    
  )
}
