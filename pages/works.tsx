import { NextPage } from "next";

//components
import Nav from "../components/Nav";

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
        <div className="works-page">
            <Nav page="works" />
            <h1>Works</h1>
            <section>
                {projects && projects.map((data:object, i:number ) => <ProjectCard data={data} key={i} />)}
            </section>
        </div>
    )
}

interface ProjectProps {
    key: Number,
    data: Object
}

const ProjectCard: React.FC<ProjectProps> = (props) => {
    return (
        <div>
            <h1>TEST</h1>
        </div>
    )
}

export default Works;