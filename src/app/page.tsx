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
                <Image src="/images/line.svg" className="lh-hero__line z-10" alt="hero Image" width={940} height={832}/>
                <div className="grid grid-flow-row grid-cols-5">
                    <div className="col-span-3 z-20">
                        <div className="lh-hero__top">
                            <h1 className="lh-hero__title">
                                <Image className="lh-hero__title-icon" src="/images/highlight-bling-line-2.svg" alt="Bling Line" width={85} height={82}/>
                                React
                            </h1>
                            <h1 className="lh-hero__title">
                                Conference
                            </h1>
                        </div>
                        <div className="lh-hero__content">
                            <Image src="/images/banner-2.svg" className="lh-hero__content-img" alt="hero Image" width={399} height={502}/>
                            <div className="flex-1">
                                <p className="lh-hero__content-desc">
                                    Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id
                                    fermentum.In quis diam turpis quam id fermentum.
                                </p>

                                <button className="lh-hero__content-button">
                                    Buy Tickets
                                    <Image src="/images/icons/arrow-up-right.svg" alt="Arrow Icon" width={15}
                                           height={15}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 z-20">
                        <Image src="/images/hero-image1.svg" className="lh-hero__image-right" alt="hero Image"
                               width={628} height={648}/>
                    </div>
                </div>
                <div className="lh-hero__scroll">
                    <button className="lh-hero__scroll-button">
                        <Image src="/images/scroll_down.svg" className="lh-hero__scroll-button-icon" alt="Scroll Icon" width={16} height={16}/>
                        Scroll Down
                    </button>
                </div>
            </div>
        </div>
    </main>
  );
}
