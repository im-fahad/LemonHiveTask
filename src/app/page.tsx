import {Fragment} from "react";
import Conferences from "@/components/Conferences";
import SponsorsSection from "@/components/SponsorsSection";
import Header from "@/components/Header";

export default function Home() {
    return (
        <Fragment>
            <div className="lh-main__inner">
                <Header/>
            </div>

            <Conferences/>

            <SponsorsSection/>
        </Fragment>
    );
}
