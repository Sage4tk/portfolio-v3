import { NextPage } from "next";
import Head from "next/head";

//components
import Nav from "../components/Nav";

//css
import styles from "../styles/Contacts.module.scss";

const Contacts: NextPage = () => {
    return (
        <div className="contact-page">
            <Head>
                <title>Timothy Timbol | Contacts</title>
            </Head>
            <Nav page="contact" />
            <h1>Contact me!</h1>
            <div className="contact-card">
                <div>
                    <p>GitHub:</p>
                    <p>https://github.com/Sage4tk</p>
                </div>
                <div>
                    <p>Linked-In:</p>
                    <p>https://www.linkedin.com/in/timothy-zack-timbol-90b5271b6/</p>
                </div>
                <div>
                    <p>Phone:</p>
                    <p>+971 50 595 7395</p>
                </div>
            </div>
        </div>
    )
}

export default Contacts;