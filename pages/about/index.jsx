import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  SiNextdotjs,
  SiPhp,
  SiGo,
  SiPython,
  SiRuby,
  SiTypescript,
  SiJavascript,
  SiSass,
  SiC,
  SiCplusplus,
  SiLess,
  SiReact,
  SiCss3,
  SiHtml5,
  SiWordpress,
  SiAngular,
  SiAngularjs,
  SiVuedotjs,
  SiExpo,
  SiNuxtdotjs,
  SiRedux,
  SiGraphql,
  SiFastapi,
  SiD3Dotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiEmberdotjs,
  SiCodeigniter,
  SiRubyonrails,
  SiDjango,
  SiBootstrap,
  SiTailwindcss,
  SiSvg,
  SiMaterialdesign,
  SiAntdesign,
  SiSemanticuireact,
  SiAmazonaws,
  SiAwslambda,
  SiJasmine,
  SiCypress,
  SiMocha,
  SiDocker,
  SiPytest,
  SiKubernetes,
  SiJest,
  SiJenkins,
  SiChai,
  SiPostman,
  SiGit,
  SiGithub,
  SiGitlab,
  SiSourcetree,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "languages",
        icons: [
          SiHtml5,
          SiCss3,
          SiJavascript,
          SiTypescript,
          SiPhp,
          SiPython,
          SiGo,
          SiRuby,
          SiSass,
          SiC,
          SiCplusplus,
          SiLess,
        ],
      },
      {
        title: "Development",
        icons: [
          SiReact,
          SiNextdotjs,
          SiWordpress,
          SiAngular,
          SiAngularjs,
          SiVuedotjs,
          SiExpo,
          SiNuxtdotjs,
          SiRedux,
          SiGraphql,
          SiFastapi,
          SiD3Dotjs,
          SiNodedotjs,
          SiExpress,
          SiNestjs,
          SiLaravel,
          SiEmberdotjs,
          SiCodeigniter,
          SiRubyonrails,
          SiDjango,
          SiBootstrap,
          SiTailwindcss,
          SiSvg,
          SiMaterialdesign,
          SiAntdesign,
          SiSemanticuireact,
          SiAmazonaws,
          SiAwslambda,
          SiJasmine,
          SiCypress,
          SiMocha,
          SiDocker,
          SiPytest,
          SiKubernetes,
          SiJest,
          SiJenkins,
          SiChai,
          SiPostman,
          SiGit,
          SiGithub,
          SiGitlab,
          SiSourcetree,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Senior Software Engineer - TatvaSoft Company",
        stage: "2022 - 2024",
        description: [
          "Led the development of a web application using React, Next.js, NestJS, ExpressJS, Node.js, GraphQL, and MongoDB, increasing user engagement by 35%",
          "Implemented microservices architecture with Docker and Kubernetes, enhancing application scalability and performance",
          "Developed RESTful APIs to integrate with third-party services, streamlining data exchange and improving functionality",
          "Collaborated with UX/UI designers to create intuitive and responsive interfaces",
          "Automated deployment processes using Jenkins, reducing deployment time by 40%",
        ],
      },
      {
        title: "Full-Stack Software Developer - Cannveya Company",
        stage: "2020 - 2022",
        description: [
          "Developed and maintained web applications using Angular, Vue, PHP, Laravel, MySQL, and PostgreSQL",
          "Participated in the full software development lifecycle, including requirements analysis, design, implementation, testing, and deployment",
          "Improved application performance by optimizing database queries and refactoring code",
          "Worked in an Agile environment, contributing to sprint planning, daily stand-ups, and retrospectives",
          "Embraced senior responsibilities using Jasmine and Mocha, like identifying and acting upon areas for improvement in performance, testing, and development processes, which led to remarkable rendering performance improvement of three to five times.",
        ],
      },
      {
        title: "Frontend Developer - PrenticeWorx Company",
        stage: "2017 - 2020",
        description: [
          "Developed new components for a company in the education sector using the Salesforce CMS and AngularJS. Achievements include reducing unit testing development time by over 80% by migrating component structure to a microservices approach.",
          "Maintained the company website by regularly fixing bugs and adding new functionality including enhancements that improved scrolling and loading performance by over 40%",
          "Migrated a JavaScript bundler from a legacy Grunt build to a new Gulp build that was 40% smaller in configuration size making it easier to maintain—by at least 50% faster—and used current and up-to-date plugins",
        ],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Bachelor of degree in Computer Science",
        where: "University of Central Florida, Orlando, FL",
        stage: "2013 - 2017"
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[300px] max-w-[737px] max-h-[900px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            I am a <span className="text-accent">Senior Software Engineer</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            With 7 years of experience in software development, 
            a strong background in both frontend and backend technologies, 
            and a passion for creating efficient and scalable web applications, 
            I am a talented software engineer.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 xl:items-start" style={{overflowY: "scroll", scrollbarWidth: "none"}}>
            {aboutData[index].info.map((item, itemI) => (
              <div key={itemI}>
                <div
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 text-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>

                  <div className="flex gap-4 flex-wrap">
                    {/* icons */}
                    {item.icons?.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  {item.where}
                  {
                    item.description?.map((desitem, desitemI) => (
                      <div key={desitemI} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 text-white/60">
                        <div className="hidden md:flex">-</div>
                        <div>{desitem}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
