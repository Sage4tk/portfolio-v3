import { NextPage } from "next";
import Head from "next/head";

//components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

//css
import styles from "../styles/Works.module.scss";

export const getStaticProps = async () => {
    const res = await fetch("https://zackpersonalapi.herokuapp.com/api/portfolio");
    const data = await res.json();
  
    return {
      props: {
        projects: data
      }
    }
}

const Works :NextPage<any> = ({ projects }) => {

    return (
        <div className={styles.works_page}>
            <Head>
                <title>Timothy Timbol | Works</title>
                <meta name="description" content="A list of timothy's web development projects" />
            </Head>
            <Nav page="works" />
            <h1>Works</h1>
            <section className={styles.works_container}>
                {projects && projects.map((data: object, i:number ) => <ProjectCard data={data} key={i} />)}
            </section>
            <Footer />
        </div>
    )
}

interface ProjectProps {
    key: Number,
    data: any
}

const ProjectCard: React.FC<ProjectProps> = ({ data }) => {
    return (
        <div className={styles.works_card}>
            <img src={data.imgUrl} alt={data.title} />
            <div>
                <p className={styles.title}>{data.title}</p>
                <div className={styles.flex}>
                    <p>{data.technology}</p>
                    <a href={data.websiteLink}>Visit</a>
                </div>
                <p>{data.websiteDescription}</p>
            </div>
        </div>
    )
}

export default Works;