import Link from "next/link";

interface Props {
    page: string
}

const Nav: React.FC<Props> = ({ page }) => {
    return(
        <nav>
            <div>
                <Link href="/" >
                    <a className={page === "home" ? "nav-active":""}>Home</a>
                </Link>
                <Link href="/works">
                    <a className={page === "works" ? "nav-active":""}>Works</a>
                </Link>
                <Link href="/contact">
                    <a className={page === "contact" ? "nav-active":""}>Contact</a>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;