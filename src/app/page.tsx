'use client'

import Navbar from '@/components/Navbar'
import ProjectSection from '@/components/ProjectSection'
import SkillCards from '@/components/SkillCards'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    company: 'Goldman Sachs',
    position: 'Software Development Engineer',
    location: 'Salt Lake City, UT',
    duration: 'Sep 2021 – Oct 2024',
    achievements: [
      "Led key initiatives on Marquee, Goldman Sachs' flagship product, migrating futures and options business from legacy UI and monolithic backend to interactive React frontend and microservices architecture, improving performance by 50% and reducing backend load by 35% through optimized jQuery querying",
      'Led migration of mission-critical legacy system to microservices architecture using Dropwizard and Spring Boot, resulting in 35% reduced deployment time and improved system reliability',
      'Orchestrated containerization of applications using Docker and Kubernetes, enabling seamless scaling and reducing infrastructure costs by approximately 25%',
      'Implemented comprehensive monitoring using Grafana dashboards for daily reporting systems, identifying and resolving performance bottlenecks in legacy systems that improved transaction processing speed by 40%',
      'Implemented cloud-native solutions leveraging AWS services (EC2, S3, RDS) to optimize application performance and enhance disaster recovery capabilities',
      'Collaborated with business stakeholders to translate complex requirements into technical solutions using Java, Python, and SQL, improving client satisfaction metrics by 40%',
      'Developed responsive front-end components using React and integrated with backend systems via RESTful APIs using Node.js',
      'Automated deployment workflows through CI/CD pipelines, reducing release cycles from weeks to days',
      'Spearheaded the migration of legacy applications from RHEL6 to RHEL7+, resulting in enhanced security compliance and 20% performance improvement',
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
      'Developed Android apps in C, improving communication reliability for embedded hardware systems',
      'Integrated RTX64 real-time OS to accelerate serial data processing'
    ]
  }
]

const Home = () => {
  const experienceRef = useRef(null)
  const contactRef = useRef(null)

  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" })
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Romit</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Software Development Engineer
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

        {/* Summary Section */}
        <section className="flex justify-center mt-[-4rem] mb-12 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl w-full bg-white/90 dark:bg-gray-800/90 shadow-xl rounded-xl px-8 py-8 border border-blue-100 dark:border-blue-900 text-left"
          >
            <span className="block text-lg text-gray-700 dark:text-gray-300 mb-2 text-justify">
              Results-driven Software Development Engineer with 4+ years of experience designing and implementing scalable, high-performance applications across financial services and technology sectors.
            </span>
            <span className="block text-lg text-gray-700 dark:text-gray-300 mb-2 text-justify">
              Expert in <span className="font-bold text-blue-600 dark:text-blue-400">cloud-native architectures</span> using AWS, Docker, and Kubernetes with strong proficiency in full-stack development (<span className="font-bold">Java, Python, React</span>).
            </span>
            <span className="block text-lg text-gray-700 dark:text-gray-300 mb-2 text-justify">
              Proven track record in transforming legacy systems to microservices, implementing robust monitoring solutions, and delivering data-driven performance optimizations.
            </span>
            <span className="block text-lg text-gray-700 dark:text-gray-300 text-justify">
              Consistently delivers solutions that enhance <span className="font-bold text-blue-600 dark:text-blue-400">business efficiency, system reliability, and user experience</span> in fast-paced enterprise environments.
            </span>
          </motion.div>
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

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Technical Skills
            </h2>
            <SkillCards />
          </motion.div>
        </section>

        {/* Projects Section */}
        <ProjectSection />

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
    </div>
  )
}

export default Home
