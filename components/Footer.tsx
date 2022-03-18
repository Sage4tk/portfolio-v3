import Image from "next/image";

//images
import github from '../img/github.svg';
import insta from '../img/insta.svg';
import linkedin from '../img/Linkedin.svg';
import yt from '../img/yt.svg';

const Footer: React.FC<any> = () => {
    return (
        <footer>
            <div className="footer-socials">
                <a href="https://github.com/Sage4tk" target="_blank">
                    <Image src={github} alt="github logo" width={30} height={30} />
                </a>
                <a href="https://www.instagram.com/cactusz4ck/" target="_blank">
                    <Image src={insta} alt="instagram logo" width={30} height={30} />
                </a>
                <a href="https://www.youtube.com/channel/UCgi6Sg30QgNz40RlgUAr82w" target="_blank">
                    <Image src={yt} alt="youtube logo" width={30} height={30} />
                </a>
                <a href="https://www.linkedin.com/in/timothy-zack-timbol-90b5271b6/" target="_blank">
                    <Image src={linkedin} alt="linkedin logo" width={30} height={30} />
                </a>
            </div>
            <p>Timothy Timbol || Web Developer</p>
        </footer>
    )
}

export default Footer;