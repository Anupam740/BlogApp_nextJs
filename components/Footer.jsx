import Link from  "next/link";
import Newslatter from "../components/_child/Newslatter"
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im';

export default function Footer(){
    return(
        <footer className="bg-gray-900">
            <Newslatter/>
            <div className="container mx-auto flex justify-center py-12">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                    
            
                        <Link href='https://facebook.com'><span >
                            <ImFacebook color='#888888' />
                            </span></Link>
                        <Link href='https://twitter.com'><span >
                            <ImTwitter color='#888888' />
                            </span></Link>
                        <Link href='https://youtube.com'><span >
                            <ImYoutube color='#888888' />
                            </span></Link>
                            </div>        
                    
                        <p className="py-5 text-gray-400">Copyright © 2023 All rights reserved | This website is developed by Anupam</p>
                        <p className="text-gray-400 text-center" >Terms & Conditions</p>

                    

                </div>

            </div>
        </footer>
    )
}