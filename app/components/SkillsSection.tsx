import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-gray-100">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-gray-900">Technical Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Programming Languages',
							icon: '📝',
							color: 'from-cyan-500 to-blue-600',
							skills: [
							  { name: 'Python', level: 95 },
							  { name: 'Java', level: 88 },
							  { name: 'C++ / C#', level: 85 },
							  { name: 'SQL', level: 90 },
							],
						},
						{
							category: 'Full-Stack Development',
							icon: '💻',
							color: 'from-blue-400 to-blue-600',
							skills: [
							  { name: 'React & Next.js', level: 95 },
							  { name: 'TypeScript & JS', level: 92 },
							  { name: 'FastAPI & RESTful APIs', level: 90 },
							  { name: 'Modern CSS / D3.js', level: 88 },
							],
						  },
						  {
							category: 'Cloud & DevOps',
							icon: '☁️',
							color: 'from-purple-500 to-indigo-700',
							skills: [
							  { name: 'AWS (EC2, Lambda, S3, SQS, SageMaker)', level: 94 },
							  { name: 'CI/CD & GitHub Actions', level: 90 },
							  { name: 'Docker & IAM', level: 88 },
							  { name: 'Monitoring & Logging', level: 85 },
							],
						  },
						  {
							category: 'AI / Machine Learning',
							icon: '🧠',
							color: 'from-pink-500 to-red-600',
							skills: [
							  { name: 'TensorFlow & PyTorch', level: 92 },
							  { name: 'LSTM / CNN / Transformers', level: 90 },
							  { name: 'NLP & XAI', level: 85 },
							  { name: 'Model Deployment (SageMaker, Docker)', level: 87 },
							],
						  },
						  {
							category: 'Data Engineering & Analytics',
							icon: '📊',
							color: 'from-yellow-400 to-yellow-600',
							skills: [
							  { name: 'Pandas & NumPy', level: 95 },
							  { name: 'SQL & PostgreSQL', level: 92 },
							  { name: 'ETL Pipelines / Airflow', level: 89 },
							  { name: 'BI Dashboards & EDA', level: 75 },
							],
						  },
						  {
							category: 'Testing & Tooling',
							icon: '🧪',
							color: 'from-green-400 to-green-600',
							skills: [
							  { name: 'Jest / Selenium', level: 88 },
							  { name: 'Git, Bitbucket, GitHub', level: 95 },
							  { name: 'Postman & Swagger', level: 90 },
							  { name: 'Chrome DevTools', level: 85 },
							],
						  },
					].map((category) => (
						<div key={category.category} className="bg-white rounded-lg p-6 transform hover:scale-[1.02] transition-all shadow-sm hover:shadow-md">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-1">
											<span className="text-gray-700">{skill.name}</span>
											<span className="text-gray-500">{skill.level}%</span>
										</div>
										<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
											<div className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`} style={{ width: `${skill.level}%` }}></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
