import Link from "next/link";


import Format from "../layout/Format"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Section4 from "../components/Section4"

export default function Home() {
  return (
    <div>
      
    
      
     
      <Format> 
      <div className="relative sticky top-0 right-0  mr-4">

            
<Link href="/create-post">
    <div className="bg-orange-400 hover:bg-orange-600 text-white py-2 px-4 rounded-full cursor-pointer absolute top-0 right-0 mt-4 ">
        Create Post
    </div>
</Link>
</div>
      
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        
      </Format>
      
      
    
    </div>
  )
}