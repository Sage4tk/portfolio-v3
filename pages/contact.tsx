import { NextPage } from "next";
import Head from "next/head";

//components
import Nav from "../components/Nav";

const Contacts: NextPage = () => {
    return (
        <div className="contact-page">
            <Head>
                <title>Timothy Timbol | Contacts</title>
            </Head>
            <Nav page="contact" />
            <h1>ContactPage</h1>
        </div>
    )
}

export default Contacts;