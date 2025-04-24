'use client';
import React from 'react';


export const WebCapabilitiesSection = () => {
  const coreCompetencies = [
    {
      title: 'Software Architecture & Systems Design',
      icon: '🏗️',
      features: [
        'Scalable component-based architecture',
        'Design patterns: MVC, Singleton, Observer',
        'API-first & microservices architecture',
        'Frontend/backend decoupling',
        'Accessibility (WCAG) & semantic structure',
      ],
    },
    {
      title: 'Cloud Architecture & DevOps',
      icon: '☁️',
      features: [
        'Serverless design (Lambda, API Gateway)',
        'Infrastructure-as-Code (CloudFormation)',
        'Logging & monitoring (CloudWatch)',
        'Auto-scaling & traffic shaping',
        'Multi-region DR strategy',
      ],
    },
    {
      title: 'AI/ML Operations & Deployment',
      icon: '🧠',
      features: [
        'SageMaker & Docker-based deployment',
        'MLOps pipelines with checkpointing',
        'Explainability (XAI), fairness, and tuning',
        'Evaluation with F1, precision, recall',
        'Model versioning & CI for ML',
      ],
    },
    {
      title: 'Data Engineering & Governance',
      icon: '📊',
      features: [
        'ETL design with Airflow',
        'Real-time ingestion with Kafka & Lambda',
        'Schema validation & metadata lineage',
        'Encrypted pipelines & audit trails',
        'Data integrity monitoring',
      ],
    },
    {
      title: 'Security & Compliance',
      icon: '🔐',
      features: [
        'IAM, RBAC, and principle of least privilege',
        'OAuth2 & JWT-based API access',
        'Compliance (SOC2, GDPR) alignment',
        'Network segmentation and IP restrictions',
        'Secure headers & browser hardening',
      ],
    },
    {
      title: 'Agile Development & Collaboration',
      icon: '🤝',
      features: [
        'Sprint planning, retros, backlog grooming',
        'Git workflows & PR/code reviews',
        'Test-driven development (Jest, Selenium)',
        'CI/CD with GitHub Actions & Jenkins',
        'Cross-functional collaboration (design/dev/QA)',
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Core Competencies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCompetencies.map((block) => (
            <div key={block.title} className="flip-card group">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center">
                  <div className="text-4xl mb-3">{block.icon}</div>
                  <h3 className="text-xl font-bold text-center text-gray-800">{block.title}</h3>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{block.title}</h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    {block.features.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CSS */}
      <style jsx>{`
        .flip-card {
          perspective: 1500px;
          height: 250px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s ease;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 0.75rem;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};
