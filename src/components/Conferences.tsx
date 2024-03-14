"use client"
import Image from "next/image";
import Link from "next/link";
import {Fragment} from "react";

interface conferencesTypes {
    title: string,
    desc: string,
    date: string,
    active: boolean
}

export default function Conferences() {
    const isOdd = (num: number) => num % 2 === 1;
    const conferences: conferencesTypes[] = [
        {
            title: "Freezing Edge 2023",
            desc: "The edge isn't bleeding, it's freezing!",
            date: "02 September, 2023",
            active: true
        },
        {
            title: "Design systems for beginners",
            desc: "The workshop will provide you with all the basics",
            date: "02 September, 2023",
            active: false
        },
        {
            title: "Web Components - Write once & run ",
            desc: "The edge isn't bleeding, it's freezing!",
            date: "02 September, 2023",
            active: false
        },
        {
            title: "Accessibility testing for developers",
            desc: "The workshop is split into several modules.",
            date: "03 September, 2023",
            active: false
        },
        {
            title: "The weird things about React",
            desc: "Conditional rendering issues in JSX, forwardRef",
            date: "03 September, 2023",
            active: false
        },
    ];

    return (
        <Fragment>
            <section className="lh-section">
                <div className="lh-main__inner">
                    <div className="lh-container">
                        <h2 className="lh-section__title">
                            Conferences
                        </h2>

                        <div className="conferences">
                            {conferences.map((conference, key) => (
                                isOdd(key + 1) ? (
                                    <div className={`conferences__item ${conference?.active ? "active" : ""}`}
                                         key={key}>
                                        <div className="conferences__item-left">
                                            <Link href={`/conference/${key + 1}`} className="conference-card">
                                                <Image src="/images/marker.svg" className="conference-card__icon"
                                                       alt="Marker"
                                                       width={16} height={16}/>
                                                <div className="conference-card__inner">
                                                    <h3 className="conference-card__title">
                                                        {conference?.title}
                                                    </h3>
                                                    <p className="conference-card__desc">
                                                        {conference?.desc}
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="conferences__item-center">
                                            <div className="conferences__item-icon">
                                                <svg className="conferences__item-icon-img" width="16" height="24"
                                                     viewBox="0 0 16 24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.9024 10.2969L5.93801 23.7969C5.89151 23.8599 5.83088 23.9111 5.761 23.9463C5.69112 23.9816 5.61394 24 5.53566 24C5.46975 24.0002 5.40448 23.9871 5.34376 23.9615C5.24043 23.9187 5.15448 23.8424 5.09967 23.7449C5.04486 23.6474 5.02438 23.5344 5.04151 23.4239L6.41701 14.5H0.500007C0.407484 14.5 0.316775 14.4743 0.237975 14.4259C0.159174 14.3774 0.095372 14.308 0.0536693 14.2254C0.0119666 14.1428 -0.00600133 14.0502 0.00176464 13.958C0.00953061 13.8658 0.0427261 13.7776 0.0976571 13.7032L10.062 0.203163C10.1284 0.113192 10.223 0.0480689 10.3308 0.0182004C10.4385 -0.0116681 10.5532 -0.00455846 10.6564 0.0383933C10.7596 0.081345 10.8455 0.15766 10.9003 0.255144C10.955 0.352627 10.9755 0.465654 10.9585 0.576163L9.58301 9.50001H15.5C15.5925 9.50001 15.6833 9.52567 15.7621 9.57416C15.8409 9.62265 15.9047 9.69206 15.9464 9.77466C15.9881 9.85726 16.0061 9.94981 15.9983 10.042C15.9905 10.1342 15.9573 10.2225 15.9024 10.2969Z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="conferences__item-right">
                                            <p className="conferences__item-date">
                                                {conference?.date}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={`conferences__item ${conference?.active ? "active" : ""}`}
                                         key={key}>
                                        <div className="conferences__item-left">
                                            <p className="conferences__item-date">
                                                {conference?.date}
                                            </p>
                                        </div>
                                        <div className="conferences__item-center">
                                            <div className="conferences__item-icon">
                                                <svg className="conferences__item-icon-img" width="16" height="24"
                                                     viewBox="0 0 16 24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.9024 10.2969L5.93801 23.7969C5.89151 23.8599 5.83088 23.9111 5.761 23.9463C5.69112 23.9816 5.61394 24 5.53566 24C5.46975 24.0002 5.40448 23.9871 5.34376 23.9615C5.24043 23.9187 5.15448 23.8424 5.09967 23.7449C5.04486 23.6474 5.02438 23.5344 5.04151 23.4239L6.41701 14.5H0.500007C0.407484 14.5 0.316775 14.4743 0.237975 14.4259C0.159174 14.3774 0.095372 14.308 0.0536693 14.2254C0.0119666 14.1428 -0.00600133 14.0502 0.00176464 13.958C0.00953061 13.8658 0.0427261 13.7776 0.0976571 13.7032L10.062 0.203163C10.1284 0.113192 10.223 0.0480689 10.3308 0.0182004C10.4385 -0.0116681 10.5532 -0.00455846 10.6564 0.0383933C10.7596 0.081345 10.8455 0.15766 10.9003 0.255144C10.955 0.352627 10.9755 0.465654 10.9585 0.576163L9.58301 9.50001H15.5C15.5925 9.50001 15.6833 9.52567 15.7621 9.57416C15.8409 9.62265 15.9047 9.69206 15.9464 9.77466C15.9881 9.85726 16.0061 9.94981 15.9983 10.042C15.9905 10.1342 15.9573 10.2225 15.9024 10.2969Z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="conferences__item-right">
                                            <Link href={`/conference/${key + 1}`} className="conference-card">
                                                <Image src="/images/marker.svg" className="conference-card__icon"
                                                       alt="Marker"
                                                       width={16} height={16}/>
                                                <div className="conference-card__inner">
                                                    <h3 className="conference-card__title">
                                                        {conference?.title}
                                                    </h3>
                                                    <p className="conference-card__desc">
                                                        {conference?.desc}
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
