import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

export default function Navbar() {
    return (
        <nav className="lh-nav">
            <Container>
                <div className="lh-nav__inner">
                    <Link href="/" className="lh-nav__logo">
                        <Image src="/images/React.svg" className="lh-nav__logo-img" alt="Logo" width={117}
                               height={32}/>
                    </Link>

                    <div className="lh-nav__menu">
                        <Link href="/" className="lh-nav__menu-link">
                            About us
                        </Link>
                        <Link href="/" className="lh-nav__menu-link">
                            What We do
                        </Link>
                        <Link href="/" className="lh-nav__menu-link">
                            Our work
                        </Link>
                        <Link href="/" className="lh-nav__menu-link">
                            Blog
                        </Link>
                        <Link href="/" className="lh-nav__menu-link">
                            Say hi
                        </Link>
                    </div>

                    <button className="lh-nav__toggle">
                        <Image src="/images/quill_hamburger.svg" className="lh-nav__toggle-icon" alt="Menue Toggle"
                               width={20} height={20}/>
                    </button>
                </div>
            </Container>
        </nav>
    );
}
