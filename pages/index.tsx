import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

//css
import styles from "../styles/Index.module.scss";

//components
import Nav from '../components/Nav'
import Footer from '../components/Footer'

//images
import front from '../img/frontend.jpg';
import back from '../img/backend.jpg';

//get projects from api
export const getStaticProps = async () => {
  const res = await fetch("https://zackpersonalapi.herokuapp.com/api/portfolio");
  const data = await res.json();

  return {
    props: {
      projects: data
    }
  }
}

const Home: NextPage<any> = ({ projects }) => {

  const dlLink = "https://tttimboltestbucket.s3.ap-south-1.amazonaws.com/Timothy_Timbol_Resume.pdf";

  return (
    <div className="main-page">
      <Head>
        <title>Timothy Timbol | Portfolio</title>
        <meta name="description" content="Timoty Timbol's portfolio website that showcases front-end development works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav page="home"/>
      <section className={styles.landing_wrapper}>
        <div>
          <h1>Hello World, I am Timothy,<br/>a Front-End Developer</h1>
          <p>An aspiring developer from the Philippines and a life-long learner. I've coded for years and my mastery on front-end stacks will help solve problems. I wish not to limit myself and strive to learn new things everyday from coding to a better life.</p>
          <button onClick={() => {window.open(dlLink, "_blank")}}>Download Resume</button>
        </div>
      </section>
      <section className={styles.main_projects}>
        <div className={styles.main_projects_upper}>
          <p>Recent Posts</p>
          <Link href="/works">
            <a>View all</a>
          </Link>
        </div>
        <div className={styles.main_projects_container}>
        {projects && projects.map((e:object, i:number) => {
          if (i === projects.length - 1|| i === projects.length - 2) return <ProjectCards data={e} key={i} />
        })}
        </div>
      </section>
      <section className={styles.landing_about}>
        <h2>Stacks</h2>
        <div className={styles.stack_container}>
          <div className={styles.landing_img_holder}>
            <Image src={front} />
          </div>
          <div className={styles.stack_exp}>
            <p>Front-end Languages</p>
            <p>Expert</p>
            <p>My main profeciency is with front-end web technologies with HTML5, CSS3, and JavaScript. With CSS, I use SASS css preprocessor to ensure cross browser compatibility and easier workflow. With JavaScript, I'm profecient with Vanilla JS but my main front-end framework is with ReactJS and NextJS if the project requires alot of functionality. I'm not limited to these languanges and are always open to learn.</p>
          </div>
        </div>
        <div className={styles.stack_container}>
          <div className={styles.landing_img_holder}>
            <Image src={back} />
          </div>
          <div className={styles.stack_exp}>
            <p>Back-end Languages</p>
            <p>Advance</p>
            <p>I've learned backend development to help understand how the web works and how it adds backbone to the front end spectrum. I have moderate knowledge in PHP and Pyhthon with backend frameworks like Django, HTTP methods to further help business logics in the online world. Furthermore, I've worked with database from relational databases and non-relations ones like MySql and MongoDB</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

interface ProjectCardProps {
  key: Number,
  data: Object
}

const ProjectCards: React.FC<ProjectCardProps> = (props:any) => {
  return (
    <div className={styles.main_projects_cards}>
      <p>{props.data.title}</p>
      <p>{props.data.technology}</p>
      <p>{props.data.websiteDescription}</p>
    </div>
  )
}

export default Home