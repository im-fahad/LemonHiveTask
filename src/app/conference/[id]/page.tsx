"use client"
import {Fragment, useState} from "react";
import Image from "next/image";
import Organizers from "@/components/Organizers";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Schedules from "@/components/Schedules";
import Container from "@/components/Container";

export default function Conference() {
    const tabs = ["Organizer", "Speakers", "Schedule", "Sponsors"];
    const [activeTab, setActiveTab] = useState<string>("Organizer");

    return (
        <Fragment>
            <Container className="pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[100px]">
                <div className="lh-conference">
                    <div className="lh-conference__head">
                        <h2 className="lh-conference__title">
                            Web Components - Write once & run
                        </h2>
                        <p className="lh-conference__desc">
                            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.
                        </p>
                    </div>
                    <div className="lh-conference__inner">
                        <div className="lh-conference__sidebar">
                            <div className="lh-conference-sidebar">
                                {tabs.map((tab: string, key: number) => (
                                    <button
                                        onClick={() => setActiveTab(tab)}
                                        className={`lh-conference-sidebar__item ${activeTab === tab ? "active" : ""}`}
                                        key={key}>
                                        <div className="lh-conference-sidebar__item-icon">
                                            <Image src="/images/upDown.svg"
                                                   className="lh-conference-sidebar__item-icon-img"
                                                   alt="Up Down Icon"
                                                   width={25} height={22}/>
                                        </div>
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lh-conference__content">
                            {activeTab === "Organizer" && (
                                <Organizers/>
                            )}
                            {activeTab === "Speakers" && (
                                <Speakers/>
                            )}
                            {activeTab === "Schedule" && (
                                <Schedules/>
                            )}
                            {activeTab === "Sponsors" && (
                                <Sponsors/>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}
