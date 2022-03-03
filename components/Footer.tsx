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
                <a href="" target="_blank">
                    <Image src={github} alt="github logo" width={30} height={30} />
                </a>
                <a href="" target="_blank">
                    <Image src={insta} alt="instagram logo" width={30} height={30} />
                </a>
                <a href="" target="_blank">
                    <Image src={yt} alt="youtube logo" width={30} height={30} />
                </a>
                <a href="" target="_blank">
                    <Image src={linkedin} alt="linkedin logo" width={30} height={30} />
                </a>
            </div>
            <p>Timothy Timbol || Web Developer</p>
        </footer>
    )
}

export default Footer;