import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Navigation, NavigationItem } from "../components/Navigation";
import { GoMarkGithub } from "react-icons/go";
import { BiLinkExternal } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import ProjectCard from "../components/ProjectCard";
import { BadgeList } from "../components/Badge";
import LinkButton from "../components/LinkButton";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header className={styles.header}></header> */}

      <main className={styles.main}>
        <div className={styles.about}>
          <span className={styles.name}>
            Labas, aš
            <br /> {process.env.NEXT_PUBLIC_PORTFOLIO_NAME}
          </span>
          <p className={styles.intro}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium sit, consectetur officiis eum, numquam explicabo eius
            aut placeat aliquam sed id deleniti nostrum rerum et assumenda fuga
            quasi debitis quas?
          </p>
          <div className={styles.links}>
            <div className={styles.github_link}>
              <a href="https://github.com/raimax">
                <GoMarkGithub />
                <span className={styles.github_link_text}>GitHub</span>
                <BiLinkExternal />
              </a>
            </div>
            <div className={styles.email}>
              <MdEmail />
              <span className={styles.email_text}>
                {process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.projects}>
          <ProjectCard>
            <div className={styles.project_technologies}>
              <BadgeList badges={["React", "Javascript", "Sass"]} />
            </div>
            <div className={styles.project_title}>Youtube downloader</div>
            <div className={styles.project_description}>
              Youtube vaizdo įrašų parsisiuntimo programa naršyklėje.
            </div>
            <div className={styles.project_buttons}>
              <LinkButton
                content="Demo"
                link="https://yt-dloader.vercel.app/"
              />
              <LinkButton
                content="Kliento kodas"
                link="https://github.com/raimax/YoutubeDownloader-client"
              />
              <LinkButton
                content="Serverio kodas"
                link="https://github.com/raimax/YoutubeDownloader-server"
              />
            </div>
          </ProjectCard>
        </div>
      </main>
    </div>
  );
};

export default Home;
