"use client"
import {Fragment} from "react";
import Image from "next/image";

export default function Sponsors() {

    const sponsors = [
        {
            name: "Louis Vuitton",
            desc: "Lorem ipsum dolor sit amet, con sec tetur ad.",
            image: "/images/conference/3.svg"
        },
        {
            name: "MasterCard",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
            image: "/images/conference/6.svg"
        },
        {
            name: "The Walt Disney Company",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
            image: "/images/conference/9.svg"
        },
    ]

    return (
        <Fragment>
            {sponsors.map((sponsor: any, key: number) => (
                <div className="lh-conference-card" key={key}>
                    <Image src={sponsor?.image} className="conference-card__img"
                           alt={sponsor?.name} width={140} height={140}/>
                    <div className="lh-conference-card__inner">
                        <h3 className="lh-conference-card__title">{sponsor?.name}</h3>
                        <p className="lh-conference-card__desc">{sponsor?.desc}</p>
                    </div>
                </div>
            ))}
        </Fragment>
    );
}
