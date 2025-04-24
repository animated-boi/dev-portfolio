
import React from 'react';

export const HeroSection = () => {
	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Animated Background Grid */}
			<div className="absolute inset-0 grid-background-dark opacity-10">
				<div className="grid-overlay animate-pulse-slow"></div>
			</div>

			{/* Floating Tech Icons */}
			<div className="absolute inset-0 overflow-hidden">
				{[
					{ icon: '⚛️', delay: '0s', position: 'top-20 left-1/4' },              // React.js
					{ icon: '💾', delay: '0.5s', position: 'top-20 right-20' },           // Cloud
					{ icon: '🤖', delay: '1s', position: 'top-[50%] right-[5%]' },        // AI/ML
					{ icon: '📊', delay: '1.5s', position: 'bottom-24 left-1/3' },        // Data/Analytics
				  
					{ icon: '🧠', delay: '2s', position: 'top-[30%] left-[8%]' },         // Deep Learning
					{ icon: '☁️', delay: '2.5s', position: 'bottom-12 right-[15%]' },     // Databases
					{ icon: '📦', delay: '3s', position: 'bottom-[40%] left-[10%]' },     // Containers (Docker)
					{ icon: '🔐', delay: '3.5s', position: 'top-[88%] right-[80%]' },     // Security/IAM
				  
					{ icon: '🖥️', delay: '4s', position: 'top-[70%] right-[30%]' },       // Backend Services
					{ icon: '🌐', delay: '4.5s', position: 'top-[12%] left-[50%]' },      // Web APIs / Full-Stack
					{ icon: '🧪', delay: '5s', position: 'bottom-[10%] right-[40%]' },    // Testing
					{ icon: '🚀', delay: '5.5s', position: 'top-[5%] left-[70%]' },       // DevOps / CI/CD
				].map((item, index) => (
					<div key={index} className={`absolute ${item.position} animate-float opacity-50`} style={{ animationDelay: item.delay }}>
						<span className="text-4xl">{item.icon}</span>
					</div>
				))}
			</div>

			{/* Hero Content */}
			<div className="relative z-10 max-w-5xl mx-auto px-4">
				<div className="text-center space-y-6">
					{/* Name Section */}
					<div className="relative inline-block px-4 sm:px-0">
						<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
						<h1 className="relative text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 pb-2">
							Animesh Chaudhary
						</h1>
					</div>

					{/* Role & Description */}
					<div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-3">
								<span className="h-[1px] w-8 sm:w-40 bg-blue-500"></span>
								<h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-600">Full-Stack Developer | Cloud & AI Engineer</h2>
								<span className="h-[1px] w-8 sm:w-40 bg-blue-500"></span>
							</div>
							<p className="text-base sm:text-lg text-gray-900 dark:text-gray-500 max-w-4xl sm:max-w-6xl px-6 sm:px-12 leading-relaxed">
							I architect clean code, scalable systems, and clever algorithms — and sometimes even pretty pixels. With a Master’s in Computer Science from ASU and industry stints at PwC and Infosys, I merge front-end finesse, backend logic, cloud resilience, and ML intelligence to craft systems that don’t just work — they adapt, learn, and scale.

							If I’m not shipping code, I’m optimizing something — probably a pipeline, definitely the process.
							</p>
						</div>

						{/* Tech Stack Pills */}
						<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0">
						{[
  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg' }, 
  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Apache', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
  { name: 'RESTful APIs', logo: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-api-web-development-flaticons-lineal-color-flat-icons.png' } // fallback/placeholder logo
].map(({ name, logo }) => (
  <span
    key={name}
    className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-gray-800 bg-gray-100 border border-purple-400/30 shadow-[0_0_8px_rgba(124,58,237,0.15)] hover:shadow-purple-400/60 transition"
  >
	
    <img src={logo} alt={`${name} logo`} className="w-4 h-4" />
    {name}
  </span>
))}
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
						<a href="#work" className="group relative inline-flex items-center justify-center">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
							<span className="relative px-6 sm:px-8 py-3 bg-white rounded-full inline-flex items-center justify-center w-full sm:w-auto">
								View My Work
								<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</span>
						</a>
						<a
							href="#contact"
							className="px-6 sm:px-8 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors border border-gray-200 hover:border-gray-300 text-center"
						>
							Get in Touch
						</a>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
					{[
  {
    name: 'GitHub',
    href: 'https://github.com/animated-boi',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/animesh-chaudhary-a98b58125/',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  },
  {
    name: 'Email',
    href: 'mailto:animeshc2596@gmail.com',
    logo: 'https://img.icons8.com/ios-filled/50/000000/email.png',
  },
].map(({ name, href, logo }) => (
  <a
    key={name}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-2 sm:p-3 hover:scale-110 transition-transform"
    aria-label={name}
  >
    <img src={logo} alt={`${name} logo`} className="w-6 h-6 sm:w-7 sm:h-7" />
  </a>
))}
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
				<span className="text-gray-600 text-sm mb-2 text-center">Scroll to explore</span>
				<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</div>
	);
};
