const categoryStyles: Record<string, { badge: string; bullet: string }> = {
	'AI/ML': {
		badge: 'bg-pink-100 text-pink-600',
		bullet: 'text-pink-600',
	},
	'Data Science': {
		badge: 'bg-yellow-100 text-yellow-600',
		bullet: 'text-yellow-600',
	},
	'Cloud Engineering': {
		badge: 'bg-purple-100 text-purple-600',
		bullet: 'text-purple-600',
	},
	'SDE / Frontend': {
		badge: 'bg-blue-100 text-blue-600',
		bullet: 'text-blue-600',
	},
};


import React from 'react';
import Image from 'next/image';

interface Project {
	title: string;
	category: string;
	description: string;
	techDetails: string[];
	techIcons: { name: string; logo: string }[];
	highlights: string[];
	image: string;
	link: string;
}

export const ProjectsSection: React.FC = () => {
	const projects: Project[] = [

		{
			title: 'Infrastructure Scaling in Video Streaming Platforms',
			category: 'Data Science',
			description: 'LSTM-based demand forecasting and auto-scaling simulator for video viewership peaks.',
			techDetails: ['Python', 'AWS', 'LSTM', 'ARIMA'],
			techIcons: [
				{ name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
				{ name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg' },
			],
			highlights: [
				'Integrated LSTM & ARIMA models',
				'SageMaker deployment + metrics dashboard',
				'Scaled server resources with prediction triggers',
			],
			image: '/Video.jpg',
			link: 'https://github.com/animated-boi/Infrastructure-Scaling-in-Video-Streaming-Platforms',
		},
		{
			title: 'Advanced Data Mining Lab Series',
			category: 'Data Science',
			description: 'Series of ML labs with clustering, classification, association mining using Scikit-learn.',
			techDetails: ['Python', 'Pandas', 'Scikit-learn'],
			techIcons: [
				{ name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
				{ name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg' },
			],
			highlights: [
				'K-Means, DBSCAN, Decision Trees',
				'Preprocessing & visualization included',
				'Applied to real-world datasets',
			],
			image: '/DMalgo.jpg',
			link: 'https://github.com/animated-boi/Advanced-Data-Mining-Lab-Series',
		},
		{
			title: 'Cloud Computing Basics',
			category: 'Cloud Engineering',
			description: 'Practice lab covering AWS basics: EC2, S3, IAM, CLI, DynamoDB, including IaC and Python-based automations.',
			techDetails: ['Python', 'AWS CLI', 'CloudFormation'],
			techIcons: [
				{ name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
				{ name: 'AWS CLI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg' },
			],
			highlights: [
				'Hands-on labs using AWS free tier',
				'Automated resources with IaC',
				'CLI & Python SDK examples included',
			],
			image: '/Cloud.jpg',
			link: 'https://github.com/animated-boi/Cloud-Computing-Basics',
		},
		{
			title: 'Elastic Face Recognition System on AWS',
			category: 'Cloud Engineering',
			description: 'Elastic face detection system using AWS Lambda, Rekognition, and DynamoDB for scalable identity verification.',
			techDetails: ['Python', 'AWS Lambda', 'Rekognition'],
			techIcons: [
				{ name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
				{ name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg' },
			],
			highlights: [
				'Serverless image pipeline with Rekognition',
				'Dynamic face match thresholding',
				'Logged events to DynamoDB and S3',
			],
			image: '/ElasticFace.jpg',
			link: 'https://github.com/animated-boi/Elastic-Face-Recognition-System-on-AWS-',
		},
		{
			title: 'Serverless Video Facial Recognition PaaS',
			category: 'Cloud Engineering',
			description: 'Built serverless video processing app with facial recognition using API Gateway and Lambda.',
			techDetails: ['Python', 'AWS', 'API Gateway'],
			techIcons: [
				{ name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
				{ name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg' },
			],
			highlights: [
				'Real-time frame processing pipeline',
				'Face indexing using Rekognition',
				'Serverless async processing queue',
			],
			image: '/VideoFace.jpg',
			link: 'https://github.com/animated-boi/Serverless-Video-Facial-Recognition-PaaS-',
		},
		{
			title: 'COVID-19 Scrollytelling Visualization',
			category: 'SDE / Frontend',
			description: 'Scroll-driven storytelling dashboard visualizing COVID-19 cases using OWID datasets.',
			techDetails: ['JavaScript', 'D3.js'],
			techIcons: [
				{ name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
				{ name: 'D3.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg' },
			],
			highlights: [
				'Scrollama.js-based animation logic',
				'Visualized global trends with D3.js',
				'Responsive design with progressive loading',
			],
			image: '/Covid.jpg',
			link: 'https://github.com/animated-boi/COVID-19-Scrollytelling-Visualization-Platform',
		},
		{
			title: 'Data Visualization Series',
			category: 'SDE / Frontend',
			description: 'Series of interactive charts and graphs using D3.js with reusable modules and transitions.',
			techDetails: ['JavaScript', 'D3.js'],
			techIcons: [
				{ name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
				{ name: 'D3.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg' },
			],
			highlights: [
				'Created reusable D3 visual templates',
				'Implemented bar, line, radial, and scatter plots',
				'Responsive and animated transitions',
			],
			image: '/Dataviz.jpg',
			link: 'https://github.com/animated-boi/Data-Visualization-Series',
		},
		{
			title: 'Apple.com Frontend Engineering Prototype',
			category: 'SDE / Frontend',
			description: 'Pixel-perfect Apple.com clone built with semantic HTML, CSS Grid, and prototyped in Axure RP.',
			techDetails: ['HTML5', 'CSS3', 'Axure RP'],
			techIcons: [
				{ name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
				{ name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
				{ name: 'Axure RP', logo: 'https://img.icons8.com/color/48/axure-rp.png' },
			],
			highlights: [
				'Responsive layout mimicking Apple.com design',
				'Used semantic HTML and CSS3 Grid',
				'High-fidelity prototype interactions in Axure',
			],
			image: '/Apple.jpg',
			link: 'https://github.com/animated-boi/Apple.com-Frontend-Engineering-Prototype-',
		},
		{
			title: 'Homebase UK eCommerce Redesign',
			category: 'SDE / Frontend',
			description: 'UI/UX redesign for a UK-based e-commerce platform. Focus on clean layout, navigation and visual clarity.',
			techDetails: ['HTML5', 'CSS3'],
			techIcons: [
				{ name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
				{ name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
			],
			highlights: [
				'Conducted UX audit and created wireframes',
				'Modernized layout and visual hierarchy',
				'Improved accessibility and responsive design',
			],
			image: '/Homebase.jpg',
			link: 'https://github.com/animated-boi/Homebase-UK-eCommerce-Redesign',
		},
		{
			title: 'AI-Generated Text Detection (NeurIPS Kaggle)',
			category: 'AI/ML',
			description: 'Transformer-based NLP model to classify AI vs human-written essays using prompt-tuning and data augmentation.',
			techDetails: ['Python', 'HuggingFace', 'PyTorch'],
			techIcons: [
				{ name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
				{ name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
				{ name: 'HuggingFace', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
			],
			highlights: [
				'98.84% F1 on AI-generated text',
				'Used DistilBERT, ALBERT, DeBERTaV3',
				'Detailed analysis with confusion matrix',
			],
			image: '/Handwritten.jpg',
			link: 'https://github.com/animated-boi/AI-Generated-Text-Detection-NeurIPS-Kaggle-',
		},
		{
			title: 'Neural Network Modeling for Digit Classification',
			category: 'AI/ML',
			description: 'Digit classifier trained on MNIST dataset using fully connected and CNN architectures.',
			techDetails: ['Python', 'TensorFlow', 'Keras'],
			techIcons: [
				{ name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
				{ name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
				{ name: 'Keras', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
			],
			highlights: [
				'Achieved 99.1% accuracy on MNIST',
				'Used dropout and regularization',
				'Built both MLP and CNN variants',
			],
			image: '/digit.jpg',
			link: 'https://github.com/animated-boi/Neural-Network-Modeling-for-Digit-Classification-',
		},
		{
			title: 'Autonomous Multi-Robot Planning for Warehouse',
			category: 'AI/ML',
			description: 'Simulated task planning in warehouses using Answer Set Programming (ASP) for collaborative robot movement.',
			techDetails: ['Python', 'ASP', 'AI Planning'],
			techIcons: [
				{ name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
				{ name: 'ASP', logo: 'https://img.icons8.com/color/48/artificial-intelligence.png' },
			],
			highlights: [
				'Used Clingo for ASP formulation',
				'Multi-agent coordination & planning',
				'Simulated pick/place tasks with constraints',
			],
			image: '/Warehouse.jpg',
			link: 'https://github.com/animated-boi/Autonomous-Multi-Robot-Planning-for-Warehouse',
		}

	];

	return (
		<section
			id="work"
			className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
		>
			{/* 🟪 gradient only on the heading bar */}
			<h2
				className="
          sticky top-0 z-10
          bg-gradient-to-br from-purple-50 to-blue-50
          py-4 text-center text-2xl sm:text-3xl font-bold text-gray-900
          border-b
        "
			>
				Featured Projects
			</h2>

			{projects.map((p) => (
				<section
					key={p.title}
					className="snap-start min-h-screen flex items-center px-4 sm:px-8 bg-white"
				>
					<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						{/* Image */}
						<div className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg">
							<Image
								src={p.image}
								alt={p.title}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>

						{/* Info */}
						<div className="space-y-6">
							{/* Category badge */}
							<span className={`inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${categoryStyles[p.category].badge}`}>
								{p.category}
							</span>

							<h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
								{p.title}
							</h3>
							<p className="text-sm sm:text-base text-gray-600">
								{p.description}
							</p>

							{/* Tech pills */}
							<div className="flex flex-wrap items-center gap-2">
								{p.techIcons.map((t) => (
									<span
										key={t.name}
										className="
                      flex items-center gap-2
                      px-3 py-1.5 bg-white rounded-full
                      text-sm font-medium text-gray-700
                      border border-gray-200 hover:border-gray-400
                      transition
                    "
									>
										<img src={t.logo} alt={`${t.name} logo`} className="w-4 h-4" />
										{t.name}
									</span>
								))}
							</div>

							{/* Highlights */}
							<ul className="list-none pl-0 space-y-2 text-sm text-gray-700">
								{p.highlights.map((pt, i) => (
									<li key={i} className="flex items-start gap-2">
										<span className={`${categoryStyles[p.category].bullet} mt-1 font-bold`}>★</span>
										<span>{pt}</span>
									</li>
								))}
							</ul>

							{/* GitHub link */}
							<a
								href={p.link}
								target="_blank"
								rel="noopener noreferrer"
								className="
                  inline-block mt-4
                  px-5 py-2 rounded-full
                  bg-gray-900 text-white text-sm
                  hover:bg-gray-700 transition
                "
							>
								View on GitHub →
							</a>
						</div>
					</div>
				</section>
			))}
		</section>
	);
};


