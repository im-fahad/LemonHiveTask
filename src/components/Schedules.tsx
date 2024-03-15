"use client"
import {Fragment} from "react";

export default function Schedules() {

    const schedules = [
        {
            date: "February 11, 2014",
            day: "Wednesday",
            schedule: [
                {
                    title: "Registration",
                    duration: "05:00-06:00"
                },
                {
                    title: "Design systems for beginners",
                    duration: "06:00-13:30"
                },
                {
                    title: "Lunch",
                    duration: "13:30-15:00"
                },
                {
                    title: "Break",
                    duration: "05:00-06:00"
                },
            ]
        },
        {
            date: "October 31, 2017",
            day: "Wednesday",
            schedule: [
                {
                    title: "Registration",
                    duration: "05:00-06:00"
                },
                {
                    title: "Design systems for beginners",
                    duration: "06:00-13:30"
                },
                {
                    title: "Lunch",
                    duration: "13:30-15:00"
                },
                {
                    title: "Break",
                    duration: "05:00-06:00"
                },
            ]
        },
    ]

    return (
        <Fragment>
            {schedules.map((schedule: any, key: number) => (
                <div className="lh-schedule-card" key={key}>
                    <div className="flex items-center justify-between gap-5 mb-4">
                        <h2 className="lh-schedule-card__date">{schedule.date}</h2>
                        <p className="lh-schedule-card__day">{schedule.day}</p>
                    </div>
                    <div className="lh-conference-card__inner">
                        {schedule.schedule.map((item: any, i: number) => (
                            <div className="" key={i}>
                                <p>
                                    Duration: {item.duration}
                                </p>
                                <ul className="list-disc list-inside pl-5">
                                    <li>{item.title}</li>
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>
            ))}
        </Fragment>
    );
}
