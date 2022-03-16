import { NextPage } from "next";
import Head from "next/head";

//components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

//css
import styles from "../styles/Contacts.module.scss";

const Contacts: NextPage = () => {
    return (
        <>
            <Head>
                <title>Timothy Timbol | Contacts</title>
            </Head>
            <Nav page="contact" />
            <div className={styles.contact_page}>
                

                <div className={styles.contact_exp}>
                    <h1>GET IN TOUCH!</h1>
                    <p>I am looking for any job oppurtinities, project colaboration, or any help I can give. If you have any further questions you can reach me with the means presented in this page.</p>
                </div>
                <div className={styles.contact_card}>
                    <div>
                        <p>E-Mail:</p>
                        <p>ttimbol08@gmail.com</p>
                    </div>
                    <div>
                        <p>Linked-In:</p>
                        <a href="https://www.linkedin.com/in/timothy-zack-timbol-90b5271b6/">https://www.linkedin.com/in/timothy-zack-timbol-90b5271b6/</a>
                    </div>
                    <div>
                        <p>Phone:</p>
                        <p>+971 50 595 7395</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
        
    )
}

export default Contacts;