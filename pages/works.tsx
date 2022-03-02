import { NextPage } from "next";

//components
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect } from "react";

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
    useEffect(() => {
        console.log(projects)
    })
    return (
        <div className="works-page">
            <Nav page="works" />
            <h1>Works</h1>
            <section className="works-container">
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
        <div className="works-card">
            <img src={data.imgUrl} alt={data.title} />
            <div>
                <p>{data.title}</p>
                <p>{data.technology}</p>
                <p>{data.websiteDescription}</p>
            </div>
        </div>
    )
}

export default Works;