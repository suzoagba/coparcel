import Link from 'next/link'
import Navbar from "../../components/Navbar"
import Contact from '@/components/Contact'
export default function Contact1() {
  return (
    <div>
        <Navbar />
        <Contact />
    {/* <h1>Contact Page</h1>
    <Link href={"/"}>
        Go back to home page
    </Link>
    <Link href={"/about"}>
        Go to About Aage
    </Link> */}
    </div>
    
  )
}
