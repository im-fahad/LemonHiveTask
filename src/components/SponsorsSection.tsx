"use client"
import Image from "next/image";
import {Fragment} from "react";

interface sponsorsTypes {
    label: string,
    images: string[],
}

export default function SponsorsSection() {
    const sponsors: sponsorsTypes[] = [
        {
            label: "🥇 Gold Sponsor",
            images: [
                "/images/sponsors/gold-1.svg",
                "/images/sponsors/gold-2.svg",
            ],
        },
        {
            label: "🥈Silver SponsorsSection",
            images: [
                "/images/sponsors/silver-1.svg",
                "/images/sponsors/silver-2.svg",
                "/images/sponsors/silver-3.svg",
            ],
        },
        {
            label: "🥉Bronze SponsorsSection",
            images: [
                "/images/sponsors/bronze-1.svg",
                "/images/sponsors/bronze-2.svg",
                "/images/sponsors/bronze-3.svg",
                "/images/sponsors/bronze-4.svg",
            ],
        },
    ]
    return (
        <Fragment>
            <section className="lh-section bg-grayLight">
                <div className="lh-main__inner">
                    <div className="lh-container">
                        <h2 className="lh-section__title">
                            Our Sponsor
                        </h2>

                        <div className="sponsors">
                            {sponsors.map((sponsor: sponsorsTypes, key: number) => (
                                <div className="sponsors__item" key={key}>
                                    <h5 className="sponsors__label">
                                        {sponsor?.label}
                                    </h5>
                                    <div className="sponsors__images">
                                        {sponsor?.images.map((image, i) => (
                                            <Image className="sponsors__img" src={image} alt={image} width={218}
                                                   height={65} key={i}/>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
