"use client"
import Image from "next/image";
import {Fragment} from "react";

export default function Header() {
    return (
        <Fragment>
            <header className="lh-hero">
                <div className="lh-hero__inner">
                    <Image src="/images/line.svg" className="lh-hero__line z-10" alt="hero Image" width={940}
                           height={832}/>
                    <div className="grid grid-flow-row grid-cols-5">
                        <div className="col-span-5 xl:col-span-3 z-20">
                            <div className="lh-hero__top">
                                <h1 className="lh-hero__title">
                                    <Image className="lh-hero__title-icon" src="/images/highlight-bling-line-2.svg"
                                           alt="Bling Line" width={85} height={82}/>
                                    React
                                </h1>
                                <h1 className="lh-hero__title">
                                    Conference
                                </h1>
                                <div className="xl:hidden w-full text-center flex flex-col items-center justify-center">
                                    <p className="lh-hero__content-desc mt-4">
                                        Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
                                        fermentum..id
                                        fermentum.In quis diam turpis quam id fermentum.
                                    </p>
                                    <button className="lh-hero__content-button !mt-5">
                                        Buy Tickets
                                        <Image src="/images/icons/arrow-up-right.svg" alt="Arrow Icon" width={15}
                                               height={15}/>
                                    </button>
                                </div>
                            </div>
                            <div className="lh-hero__content">
                                <Image src="/images/banner-2.svg" className="lh-hero__content-img" alt="hero Image"
                                       width={399} height={502}/>
                                <div className="flex-1">
                                    <p className="lh-hero__content-desc">
                                        Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
                                        fermentum..id
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
                        <div className="col-span-5 xl:col-span-2 z-20">
                            <Image src="/images/hero-image1.svg" className="lh-hero__image-right" alt="hero Image"
                                   width={628} height={648}/>
                        </div>
                    </div>
                    <div className="lh-hero__scroll">
                        <button className="lh-hero__scroll-button">
                            <Image src="/images/scroll_down.svg" className="lh-hero__scroll-button-icon"
                                   alt="Scroll Icon"
                                   width={16} height={16}/>
                            Scroll Down
                        </button>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}
