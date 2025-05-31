import { motion } from 'framer-motion'

export const ProjectSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-8">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                🔍 Search Engine for Public Construction Bid Opportunities
              </motion.h3>
              <motion.span 
                variants={itemVariants}
                className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
              >
                Full-Stack Developer & Project Lead
              </motion.span>
            </motion.div>

            <motion.div 
              className="mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex flex-wrap gap-2 mb-4"
                variants={containerVariants}
              >
                {['Spring Boot', 'React.js', 'PostgreSQL (AWS RDS)', 'AWS ECS', 'AWS Lambda', 
                  'Elasticsearch', 'AWS Cognito', 'CloudWatch', 'CI/CD'].map((tech, index) => (
                  <motion.span 
                    key={tech}
                    variants={techVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Overview</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Designed and led the development of a cloud-based internal search engine to streamline the discovery of public construction bid opportunities from multiple data sources via APIs. This system replaced a manual and fragmented workflow with a centralized, real-time platform accessible across the organization.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                <motion.ul 
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  variants={containerVariants}
                >
                  {[
                    '🔄 Real-time data ingestion from 10+ public APIs',
                    '🔎 Advanced search and filtering using Elasticsearch',
                    '☁️ AWS-powered infrastructure with ECS, RDS, Lambda, Cognito',
                    '🔐 Secure access controls with role-based authentication',
                    '📈 Monitoring and logging with CloudWatch and X-Ray',
                    '🚀 Auto-scalable backend deployed via AWS Fargate'
                  ].map((feature) => (
                    <motion.li 
                      key={feature} 
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start text-gray-600 dark:text-gray-300 transition-colors duration-300"
                    >
                      <span className="mr-2">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">My Contributions</h4>
                <motion.ul 
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  variants={containerVariants}
                >
                  {[
                    '📐 Designed system architecture using AWS best practices',
                    '👨‍💻 Developed backend services in Spring Boot for data ingestion and search',
                    '🎨 Built frontend in React.js for intuitive search and filter UX',
                    '🛠️ Implemented CI/CD pipeline with AWS CodePipeline',
                    '🔄 Orchestrated scheduled data refresh via Lambda + EventBridge',
                    '🧪 Led QA and deployment across environments'
                  ].map((contribution) => (
                    <motion.li 
                      key={contribution} 
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start text-gray-600 dark:text-gray-300 transition-colors duration-300"
                    >
                      <span className="mr-2">{contribution}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Impact</h4>
                <motion.ul 
                  className="space-y-2"
                  variants={containerVariants}
                >
                  {[
                    '⏱ Reduced time spent finding bid opportunities by 75%',
                    '🌍 Enabled 100+ internal users to search bid data securely',
                    '🔧 Set foundation for future integrations like AI-based bid scoring and subcontractor matching'
                  ].map((impact) => (
                    <motion.li 
                      key={impact} 
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start text-gray-600 dark:text-gray-300 transition-colors duration-300"
                    >
                      <span className="mr-2">{impact}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectSection 