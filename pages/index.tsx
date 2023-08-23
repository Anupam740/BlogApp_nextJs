import Link from "next/link";
import { BiSolidMessageAdd } from 'react-icons/bi';
import Format from "../layout/Format";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

export default function Home() {
  return (
    <div >
      <Format> 
        
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      </Format>
      <div style={{ position: "fixed", zIndex:"11",alignItems:"center", bottom: "20px", right: "20px", width: "60px", height: "50px" }}>
  <Link href="/create-post">
    <div className="bg-orange-400 hover:bg-orange-600 text-white p-2 rounded-full cursor-pointer">
      <BiSolidMessageAdd style={{ width: '38px', height: '38px'  }} />
    </div> 
  </Link>
</div>

    </div>
  )
}
