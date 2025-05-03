'use client'

import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    company: 'Goldman Sachs',
    position: 'Software Development Engineer',
    location: 'Salt Lake City, UT',
    duration: 'Sep 2021 – Oct 2024',
    achievements: [
      'Built and maintained scalable, low-latency microservices in a high-volume trading environment using Java, Dropwizard, and Spring Boot',
      'Led migration of legacy systems to microservices architecture on RHEL7+, reducing deployment time and increasing maintainability',
      'Developed performant backend APIs integrated with React.js and Node.js, improving internal tools used across trading operations',
      'Engineered a Kafka queue integration with a downstream application to automate expiry reporting, saving 2 hours of daily manual work',
      'Facilitated the transition of backend services to be more robust, fault-tolerant, and cloud-ready'
    ]
  },
  {
    company: 'Infosys Limited',
    position: 'Systems Engineer',
    location: 'Austin, TX',
    duration: 'Jun 2021 – Sep 2021',
    achievements: [
      'Contributed to backend systems for Visa by developing microservices using Java and SQL',
      'Wrote comprehensive unit tests, improving test coverage and overall code reliability',
      'Resolved production incidents using log analysis tools like Splunk, reducing mean time to resolution'
    ]
  },
  {
    company: 'Vitosha Inc.',
    position: 'Software Engineer',
    location: 'King of Prussia, PA',
    duration: 'Dec 2020 – Jun 2021',
    achievements: [
      'Diagnosed and fixed backend performance issues in real-time transaction systems',
      'Collaborated with QA teams to automate detection of recurring bugs',
      'Enhanced system performance by 10x through optimization of data transmission'
    ]
  },
  {
    company: 'Drexel University',
    position: 'Research Assistant',
    location: 'Philadelphia, PA',
    duration: 'Oct 2020 – Dec 2020',
    achievements: [
      'Assisted in building coursework material in the field of Agile Development and TDD for undergrad students',
      'Collaborated with my professor to test and track the projects of students and their weekly sprints',
      'Integrated new features in the existing project: Gloom using CI/CD method'
    ]
  },
  {
    company: 'Load Control Technologies',
    position: 'Software Engineer in Research and Development',
    location: 'King of Prussia, PA',
    duration: 'Jun 2019 – Dec 2019',
    achievements: [
      'Enhanced system performance by 10x by optimizing data transmission in real-time applications',
      'Developed Android apps in C, improving communication reliability'
    ]
  }
]

const projects = [
  {
    title: 'Project 1',
    description: 'Description of your first project.',
    imageUrl: '/project1.jpg',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Project 2',
    description: 'Description of your second project.',
    imageUrl: '/project2.jpg',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Project 3',
    description: 'Description of your third project.',
    imageUrl: '/project3.jpg',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    githubUrl: '#',
    liveUrl: '#'
  }
]

const Home = () => {
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" })
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" })

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Romit Nahar</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Software Development Engineer at Goldman Sachs
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <a
                href="#experience"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                View Experience
              </a>
              <a
                href="https://www.linkedin.com/in/romit-nahar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isExperienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12"
            >
              Work Experience
            </motion.h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isExperienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                      <p>{exp.location}</p>
                      <p>{exp.duration}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8"
            >
              Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="mailto:romitnahar.rn@outlook.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-center"
              >
                Email Me
              </a>
              <a
                href="tel:+14842738848"
                className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-center"
              >
                Call Me
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
