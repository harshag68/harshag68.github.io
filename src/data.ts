import { Skill, Experience, Project, Certification, Education } from './types';

export const PERSONAL_INFO = {
  name: "Shriharsha Gandani",
  role: "Data Engineer",
  location: "Austin, TX",
  email: "gandanishriharsha2@gmail.com",
  phone: "+1 (940)-758-2745",
  linkedin: "https://linkedin.com/in/harsha68",
  github: "https://github.com/harshag68",
  summary: "Data Engineer with 5 years of experience building enterprise ETL pipelines, optimizing SQL performance, and integrating structured data across large-scale environments (10M+ records). Skilled in Python, SQL, Azure DevOps, Microsoft SQL Server, and cloud platforms including GCP and AWS. Experienced in multi-agent AI system development, data modeling, and Power BI reporting. Focused on scalable, maintainable data platforms.",
};

export const SKILLS: Skill[] = [
  // Data Engineering
  { name: "ETL Development", category: "Data Engineering", proficiency: 95 },
  { name: "Data Modeling", category: "Data Engineering", proficiency: 90 },
  { name: "Data Integration", category: "Data Engineering", proficiency: 92 },
  { name: "Pipeline Design", category: "Data Engineering", proficiency: 94 },
  { name: "Query Optimization", category: "Data Engineering", proficiency: 95 },
  
  // Programming & Databases
  { name: "Python", category: "Languages & Databases", proficiency: 92 },
  { name: "SQL", category: "Languages & Databases", proficiency: 98 },
  { name: "Microsoft SQL Server", category: "Languages & Databases", proficiency: 95 },
  { name: "BigQuery (GCP)", category: "Languages & Databases", proficiency: 90 },
  { name: "AWS Redshift", category: "Languages & Databases", proficiency: 88 },
  
  // Cloud & AI
  { name: "Google Cloud Platform", category: "Cloud & AI", proficiency: 90 },
  { name: "AWS", category: "Cloud & AI", proficiency: 85 },
  { name: "Vertex AI & Gemini", category: "Cloud & AI", proficiency: 88 },
  { name: "Multi-Agent Systems", category: "Cloud & AI", proficiency: 90 },
  { name: "Prompt Engineering", category: "Cloud & AI", proficiency: 92 },
  { name: "LLM Workflow Design", category: "Cloud & AI", proficiency: 88 },

  // Tools
  { name: "Azure DevOps", category: "Tools & Platforms", proficiency: 90 },
  { name: "Power BI", category: "Tools & Platforms", proficiency: 92 },
  { name: "SSIS", category: "Tools & Platforms", proficiency: 88 },
  { name: "Git", category: "Tools & Platforms", proficiency: 92 },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Tekstar IT Services",
    role: "Data Engineer",
    location: "Austin, TX",
    duration: "Oct 2023 – Jun 2026",
    techStack: ["SQL Server", "Azure DevOps", "SQL Optimization", "ETL Pipelines", "PeopleSoft ERP"],
    bullets: [
      "Implemented ETL workflows integrating PeopleSoft ERP with Azure DevOps using Microsoft SQL Server.",
      "Processed and transformed data exceeding 10 million records.",
      "Optimized SQL performance through indexing and partitioning strategies.",
      "Reviewed peer SQL code to improve query efficiency and maintain data integrity.",
      "Collaborated with business stakeholders to implement mapping-driven transformation logic."
    ]
  },
  {
    company: "Origin Hubs Inc",
    role: "Data Engineer Intern",
    location: "Irving, TX",
    duration: "Aug 2023 – Oct 2023",
    techStack: ["Python", "SQL Server", "Pipeline Design", "Data Quality Verification", "ETL"],
    bullets: [
      "Participated in end-to-end data pipeline development including data acquisition, cleaning, transformation, and validation.",
      "Wrote optimized SQL queries to support analytical requirements.",
      "Contributed to ETL process implementation in collaboration with engineering teams."
    ]
  },
  {
    company: "University of North Texas G. Brint Ryan College of Business",
    role: "Data Analyst Student Assistant",
    location: "Denton, TX",
    duration: "Sep 2021 – Mar 2023",
    techStack: ["SQL", "Python", "Tableau", "Data Analysis", "Predictive Modeling"],
    bullets: [
      "Prepared data for analysis by extracting and cleaning data with SQL programming.",
      "Extracted and synthesized student lifecycle metrics across diverse databases using complex SQL queries to identify and resolve funnel drops.",
      "Engineered predictive models in Python using historical admissions data to optimize scholarship distribution and maximize cohort yield.",
      "Developed interactive Tableau dashboards to track real-time programmatic retention, graduation velocity, and demographic equity gaps."
    ]
  },
  {
    company: "Stigmata Techno Solutions",
    role: "Data Analyst",
    location: "Chennai, India",
    duration: "Jun 2019 – Jun 2021",
    techStack: ["Power BI", "SQL Optimization", "Data Validation", "Relational Databases", "Data Analytics"],
    bullets: [
      "Analyzed large datasets to identify trends and performance insights.",
      "Maintained databases and ensured data accuracy through validation processes.",
      "Created visual reports to support business decision-making."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Atomic OS",
    subtitle: "Gamified Habit Tracker",
    tech: ["React", "TypeScript", "Firebase", "Gemini AI", "Express"],
    bullets: [
      "Built a full-stack habit tracking application using React 18, TypeScript, and Google Firebase (Auth + Firestore) for real-time cloud sync.",
      "Integrated Gemini AI for habit verification and badge generation via a secure server-side Express proxy."
    ],
    github: "https://github.com/harshag68/Atomic_OS"
  },
  {
    title: "Manuel El Manual",
    subtitle: "Multi-Agent AI Platform",
    tech: ["GCP", "Vertex AI", "Python", "Gemini Models", "Cloud Persistence"],
    bullets: [
      "Designed and deployed a multi-agent AI orchestration system on Google Cloud Platform using Vertex AI and Gemini models.",
      "Implemented structured documentation workflows with cloud persistence.",
      "Developed during an AI-focused hackathon with live cloud deployment."
    ],
    github: "https://github.com/harshag68/Manuel-El-Manual"
  },
  {
    title: "Spotify ETL Pipeline",
    subtitle: "Data Pipeline",
    tech: ["Python", "AWS Redshift", "Automated Scheduling", "Data Validation", "API Integration"],
    bullets: [
      "Built an end-to-end ETL pipeline extracting multi-market Spotify data across 20 global markets.",
      "Apply strict data transformation rules and loaded into AWS Redshift with automated scheduling and verification."
    ],
    github: "https://github.com/harshag68/SpotifyETLPipeline"
  },
  {
    title: "TieBreaker",
    subtitle: "Decision-Intelligence AI",
    tech: ["TypeScript", "React", "Gemini AI", "Decision Modeling", "Tailwind CSS"],
    bullets: [
      "Built an AI-powered decision-intelligence assistant to guide users through conflicting choices by objectively evaluating trade-offs and weighting constraints.",
      "Leveraged Gemini AI to deliver highly structured, definitive recommendations to resolve and break complex decision deadlocks."
    ],
    github: "https://github.com/harshag68/TieBreaker"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google AI Professional Certificate",
    issuer: "Google",
    date: "Jun 2026",
  },
  {
    name: "Agentic AI: Multi-Agent Systems",
    issuer: "Google",
    date: "Dec 2025",
  },
  {
    name: "Prompt Engineering - 1 Million Prompters",
    issuer: "Google / Partners",
    date: "2025",
  },
  {
    name: "Microsoft Certified: Azure Data Engineer Associate (DP-203)",
    issuer: "Microsoft",
    date: "May 2023",
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Science, Artificial Intelligence",
    school: "IWU National & Global",
    year: "Jun 2026 – Dec 2027"
  },
  {
    degree: "Master of Science – MS, Business Analytics",
    school: "University of North Texas",
    year: "Aug 2021 – May 2023"
  },
  {
    degree: "Bachelor of Engineering – BE, Computer Science",
    school: "Anna University Chennai",
    year: "Aug 2015 – May 2019"
  }
];

export const PRESET_QA = [
  {
    id: "tech-stack",
    question: "What is your primary tech stack?",
    answer: "My primary tech stack centers around Python, SQL (SQL Server, BigQuery, AWS Redshift), GCP (Vertex AI, Gemini), and Azure DevOps. I specialize in building efficient ETL/ELT pipelines and implementing multi-agent AI workflows!"
  },
  {
    id: "ai-agentic",
    question: "How do you combine Data Engineering and AI?",
    answer: "I believe AI and Data Engineering are deeply intertwined. Quality data is the foundation of any AI system. I leverage Vertex AI, Gemini models, and Multi-Agent Orchestration to design agentic systems that automate data collection, verification, and analysis. For instance, in my project 'Manuel El Manual', I built a GCP-hosted multi-agent documentation system!"
  },
  {
    id: "experience",
    question: "What is your experience scale?",
    answer: "I have 5 years of professional data engineering and analysis experience. At Tekstar IT Services, I've designed and managed high-performance SQL Server pipelines handling upwards of 10 million records. I optimize execution plans, manage partitioned storage, and work closely with stakeholders to ensure data fidelity."
  },
  {
    id: "availability",
    question: "Are you open to relocation?",
    answer: "I am currently based in Austin, TX and highly open to hybrid or onsite opportunities here in Austin, as well as full-remote positions nationwide."
  }
];
