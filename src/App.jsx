import { useTheme } from './context/ThemeContext';
import { motion } from 'framer-motion';

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Rushikesh More Patil</div>
            <div className="flex items-center space-x-4">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Backend / Full-Stack Developer building production-ready MERN systems.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Node.js • Express • MongoDB • React • REST APIs • Docker
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg">
              View Projects
            </a>
            <a href="/resume.pdf" download className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg">
              Download Resume
            </a>
            <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg">
              Hire Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/20 dark:border-gray-600/20"
          >
            <p className="text-lg leading-relaxed">
              I am a Full-Stack / Backend Developer with strong production experience in building scalable MERN stack applications using Node.js, Express, MongoDB and React.
              I work on live production systems, APIs, databases, authentication, performance optimization and system scalability.
              I also have strong academic and project background in AI, Machine Learning and Data Science.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Skills
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 dark:border-gray-600/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Backend & Full-Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT', 'Docker', 'SQL', 'React'].map(skill => (
                  <span key={skill} className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-200 dark:border-blue-800">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 dark:border-gray-600/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">AI / Data</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Pandas', 'TensorFlow'].map(skill => (
                  <span key={skill} className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm border border-green-200 dark:border-green-800">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 dark:border-gray-600/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Postman', 'Vercel'].map(skill => (
                  <span key={skill} className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-200 dark:border-purple-800">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 dark:border-gray-600/20 hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Production Backend System</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Enterprise backend APIs for company platform</p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                <li>• MongoDB schema design</li>
                <li>• JWT authentication & RBAC</li>
                <li>• Performance optimization</li>
                <li>• Live production system</li>
              </ul>
            </motion.div>
            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 dark:border-gray-600/20 hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">FieldX – Expense Tracker SaaS</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">MERN SaaS system for expense tracking</p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                <li>• GPS journey tracking</li>
                <li>• Approval workflow</li>
                <li>• Reporting dashboards</li>
                <li>• AI-ready architecture</li>
              </ul>
            </motion.div>
            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 dark:border-gray-600/20 hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">Lumia Gifts – E-Commerce</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Full shopping system for client</p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                <li>• Live client project</li>
                <li>• Admin panel</li>
                <li>• Checkout & orders</li>
                <li>• <a href="https://gift-lumia-saurabh.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Live Link</a></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Experience
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 dark:border-gray-600/20"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Backend / Full-Stack Developer</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">Ajinkya Creatiion Pvt Ltd</p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Production APIs development</li>
                <li>• MongoDB optimization</li>
                <li>• JWT authentication & RBAC implementation</li>
                <li>• Performance & scalability improvements</li>
                <li>• React integration for frontend</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Get In Touch
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-white/20 dark:border-gray-600/20"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 mb-6"
              ></textarea>
              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg">
                  Send Message
                </button>
                <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg">
                  Download Resume
                </button>
              </div>
            </motion.form>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center space-x-6 mt-8"
            >
              <a href="https://linkedin.com/in/rushikesh-more-patil" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 transform">💼 LinkedIn</a>
              <a href="https://wa.me/9689327237" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-600 dark:hover:text-green-400 transition-colors hover:scale-110 transform">📱 WhatsApp</a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
