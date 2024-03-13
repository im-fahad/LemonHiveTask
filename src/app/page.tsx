import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="lh-main">
        <div className="lh-main__inner">
            {/*nav*/}
            <nav className="lh-nav lh-container">
                <Link href="/" className="lh-nav__logo">
                    <Image src="/images/React.svg" className="lh-nav__logo-img" alt="Logo" width={117} height={32}/>
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
            </nav>
            <div className="lh-hero">
                <Image src="/images/line.svg" className="lh-hero__line" alt="hero Image" width={940} height={832}/>
                <div className="grid grid-flow-row grid-cols-5 z-20">
                    <div className="col-span-3">
                        <div className="lh-hero__content">
                            <h1 className="lh-hero__title">
                                <Image className="lh-hero__title-icon" src="/images/highlight-bling-line-2.svg" alt="Bling Line" width={85} height={82}/>
                                React
                            </h1>
                            <h1 className="lh-hero__title">
                                Conference
                            </h1>
                        </div>
                        <Image src="/images/banner-2.svg" alt="hero Image" width={399} height={502}/>
                    </div>
                    <div className="col-span-2">
                        <Image src="/images/hero-image1.svg" className="lh-hero__image-right" alt="hero Image" width={628} height={648}/>
                    </div>
                </div>

            </div>
        </div>
    </main>
  );
}
