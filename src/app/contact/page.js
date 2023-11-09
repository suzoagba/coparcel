import Link from 'next/link'
import Navbar from "../../components/Navbar"
export default function Home() {
  return (
    <div>
        <Navbar />
    <h1>Contact Page</h1>
    <Link href={"/"}>
        Go back to home page
    </Link>
    <Link href={"/about"}>
        Go to About Aage
    </Link>
    </div>
    
  )
}
