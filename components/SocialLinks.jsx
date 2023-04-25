import { getSocialLinks } from "../utils/data";
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import snapchat from '../images/snapchat.svg'

import Image from "next/image";


const SocialLinks = () => {
    const socialLinks = getSocialLinks();
    
console.log(facebook);

        return ( <div className = "flex  space-x-40 justify-center ">
            {socialLinks.map((socialLink) => {
                
            switch (socialLink.title) {
                case 'Facebook':
                    return <a href={socialLink.url}> <Image src={facebook} alt={'Facebook'} height="60" width="60" /> </a>
                case 'Twitter':
                    return <a href={socialLink.url}> <Image src={twitter} alt={'Twitter'} height="60" width="60" /> </a>
                case 'Instagram':
                    return <a href={socialLink.url}> <Image src={instagram} alt={'Instagram'} height="60" width="60" /> </a>
                case 'Snapchat':
                    return <a href={socialLink.url}> <Image src={snapchat} alt={'Snapchat'} height="60" width="60" /> </a>
                default:
                    return <p>Link not found</p>
            }
            })}
             </div>)

};

export default SocialLinks;
