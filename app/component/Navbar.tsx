import Link from "next/link";
import { FaBug } from "react-icons/fa";

export default function Navbar(){
    return(
        <>
        <nav className="flex space-x-6 px-5 h-14 mb-5">
      <Link href=""><FaBug /></Link>
      <ul className="flex space-x-6 border-b mb-5">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/issue/new">Issue</Link></li>
      </ul> 
       </nav>
        </>
    )
}