"use client"
import {Fragment, useState} from "react";
import Image from "next/image";
import Organizers from "@/components/Organizers";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";

export default function Conference() {
    const tabs = ["Organizer", "Speakers", "Schedule", "Sponsors"];
    const [activeTab, setActiveTab] = useState<string>("Organizer");

    return (
        <Fragment>
            <div className="lh-main__inner">
                <div className="lh-container">
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
                                {activeTab === "Sponsors" && (
                                    <Sponsors/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
