import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

//components
import Nav from '../components/Nav'
import Footer from '../components/Footer'

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
  return (
    <div className="main-page">
      <Head>
        <title>Timothy Timbol | Portfolio</title>
        <meta name="description" content="Timoty Timbol's portfolio website that showcases front-end development works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav page="home"/>
      <section className='landing-wrapper'>
        <h1>Hello World, I am Timothy,<br/>a Front-End Developer</h1>
        <p>An aspiring developer from the Philippines and a life-long learner. I've coded for years and my mastery on front-end stacks will help solve problems. I wish not to limit myself and strive to learn new things everyday from coding to a better life.</p>
        <button>Download Resume</button>
      </section>
      <section className='main-projects'>
        <div className='main-projects_upper'>
          <p>Recent Posts</p>
          <Link href="/works">
            <a>View all</a>
          </Link>
        </div>
        <div className="main-projects_container">
        {projects && projects.map((e:object, i:number) => {
          if (i === projects.length - 1|| i === projects.length - 2) return <ProjectCards data={e} key={i} />
        })}
        </div>
      </section>
      <section className="landing-about">
        <h2>Stacks</h2>
        <div>
          
        </div>
        <div>

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
    <div className='main-projects_cards'>
      <p>{props.data.title}</p>
      <p>{props.data.technology}</p>
      <p>{props.data.websiteDescription}</p>
    </div>
  )
}

export default Home
