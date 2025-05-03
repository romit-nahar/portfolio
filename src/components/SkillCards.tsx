'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skills = [
  {
    name: 'Java',
    icon: '☕',
    proficiency: 90,
    description: 'Backend Development, Microservices, Spring Boot',
    experience: '4+ years',
    projects: ['Goldman Sachs Trading Systems', 'Visa Backend Services']
  },
  {
    name: 'React',
    icon: '⚛️',
    proficiency: 85,
    description: 'Frontend Development, Next.js, TypeScript',
    experience: '3+ years',
    projects: ['Portfolio Website', 'Trading Tools UI']
  },
  {
    name: 'Python',
    icon: '🐍',
    proficiency: 80,
    description: 'Data Processing, Automation, Scripting',
    experience: '3+ years',
    projects: ['Data Analysis Tools', 'Automation Scripts']
  },
  {
    name: 'AWS',
    icon: '☁️',
    proficiency: 75,
    description: 'Cloud Services, Infrastructure, DevOps',
    experience: '2+ years',
    projects: ['Cloud Migration', 'Infrastructure Setup']
  },
  {
    name: 'SQL',
    icon: '🗄️',
    proficiency: 85,
    description: 'Database Design, Query Optimization',
    experience: '4+ years',
    projects: ['Data Warehousing', 'Transaction Systems']
  }
]

const SkillCards = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          onHoverStart={() => setHoveredSkill(skill.name)}
          onHoverEnd={() => setHoveredSkill(null)}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{skill.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">{skill.experience}</span>
          </div>

          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
            <motion.div
              className="h-full bg-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${skill.proficiency}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: hoveredSkill === skill.name ? 1 : 0,
              height: hoveredSkill === skill.name ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-2">{skill.description}</p>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Key Projects:</p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                {skill.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default SkillCards 