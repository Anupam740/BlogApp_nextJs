import Link from "next/link";
import { BiSolidMessageAdd } from 'react-icons/bi';
import Format from "../layout/Format";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";

import axios from 'axios';

export default function Home({data}) {
    console.log({data},"----------------")
  return (
    <div className="px-1 bg-gradient-to-b from-black to-gray-900" >
      <Format> 
        
        <Section1/>
        <Section5/>
        
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
export async function getServerSideProps(context) {
    const { filename } = context.query;
  
    try {
      const response = await axios.get(`/api/fetch-data/1`);





      const data = response.data;
      return { props: { data } };
    } catch (error) {
      console.error(error);
      return { props: { data: null } };
    }
  }