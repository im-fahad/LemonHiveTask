import {Fragment} from "react";
import Conferences from "@/components/Conferences";
import SponsorsSection from "@/components/SponsorsSection";
import Header from "@/components/Header";

export default function Home() {
    return (
        <Fragment>
            <Header/>

            <Conferences/>

            <SponsorsSection/>
        </Fragment>
    );
}
