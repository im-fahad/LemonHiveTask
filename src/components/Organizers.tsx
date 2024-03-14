"use client"
import {Fragment} from "react";
import Image from "next/image";

export default function Organizers() {

    const organizers = [
        {
            name: "Siddhartha",
            desc: "Lorem ipsum dolor sit amet, con sec tetur ad.",
            image: "/images/conference/1.svg"
        },
        {
            name: "Candide",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
            image: "/images/conference/4.svg"
        },
        {
            name: "The Little Prince",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
            image: "/images/conference/7.svg"
        },
    ]

    return (
        <Fragment>
            {organizers.map((organizer: any, key: number) => (
                <div className="lh-conference-card" key={key}>
                    <Image src={organizer?.image} className="conference-card__img"
                           alt={organizer?.name} width={140} height={140}/>
                    <div className="lh-conference-card__inner">
                        <h3 className="lh-conference-card__title">{organizer?.name}</h3>
                        <p className="lh-conference-card__desc">{organizer?.desc}</p>
                    </div>
                </div>
            ))}
        </Fragment>
    );
}
