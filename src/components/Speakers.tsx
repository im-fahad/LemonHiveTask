"use client"
import {Fragment} from "react";
import Image from "next/image";
import Link from "next/link";

export default function Speakers() {

    const speakers = [
        {
            name: "Ronald Richards",
            desc: "Lorem ipsum dolor sit amet, con sec tetur ad.",
            image: "/images/conference/2.svg",
            social: [
                "/images/conference/icons/SocialIcon.svg",
                "/images/conference/icons/SocialIcon-1.svg",
                "/images/conference/icons/SocialIcon-2.svg",
                "/images/conference/icons/SocialIcon-3.svg",
            ]
        },
        {
            name: "Jenny Wilson",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
            image: "/images/conference/5.svg",
            social: [
                "/images/conference/icons/SocialIcon.svg",
                "/images/conference/icons/SocialIcon-1.svg",
                "/images/conference/icons/SocialIcon-2.svg",
                "/images/conference/icons/SocialIcon-3.svg",
            ]
        },
        {
            name: "Cameron Williamson",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
            image: "/images/conference/8.svg",
            social: [
                "/images/conference/icons/SocialIcon.svg",
                "/images/conference/icons/SocialIcon-1.svg",
                "/images/conference/icons/SocialIcon-2.svg",
                "/images/conference/icons/SocialIcon-3.svg",
            ]
        },
    ]

    return (
        <Fragment>
            {speakers.map((speaker: any, key: number) => (
                <div className="lh-conference-card" key={key}>
                    <Image src={speaker?.image} className="conference-card__img"
                           alt={speaker?.name} width={140} height={140}/>
                    <div className="lh-conference-card__inner">
                        <div className="flex items-center justify-between gap-5">
                            <h3 className="lh-conference-card__title">{speaker?.name}</h3>

                            <div className="lh-conference-card__social">
                                {speaker?.social.map((item: string, key: number) => (
                                    <Link href="/" className="lh-conference-card__social-link">
                                        <Image src={item} alt={item} width={20} height={20}/>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <p className="lh-conference-card__desc">{speaker?.desc}</p>
                    </div>
                </div>
            ))}
        </Fragment>
    );
}
