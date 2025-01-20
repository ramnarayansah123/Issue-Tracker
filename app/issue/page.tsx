import { Button } from "@radix-ui/themes";
import Link from "next/link";
import Navbar from "../component/Navbar";
export default function page(){
    return (<>


    <div>
        <Navbar></Navbar>
        <Button><Link href="/issue/new">issue button</Link></Button>
    </div>

    </>)
}