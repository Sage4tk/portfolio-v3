import Link from "next/link";
import { useState } from "react";

interface Props {
    page: string
}

const Nav: React.FC<Props> = ({ page }) => {

    //for mobile toggle of navbar
    const [navBar, setNavBar] = useState(false);

    return(
        <nav>
            <div className="burger" onClick={() => {setNavBar(!navBar)}}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={navBar ? "nav_links active":"nav_links"}>
                <Link href="/" >
                    <a className={page === "home" ? "nav_active":""}>Home</a>
                </Link>
                <Link href="/works">
                    <a className={page === "works" ? "nav_active":""}>Works</a>
                </Link>
                <Link href="/contact">
                    <a className={page === "contact" ? "nav_active":""}>Contact</a>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;