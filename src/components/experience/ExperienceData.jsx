import { FaCode, FaChartBar } from 'react-icons/fa';

export const experiences = [
  {
    title: 'Web Developer Intern',
    company: 'Big Bucks Innovation Company',
    period: 'June 2024 - Aug 2024',
    location: 'Remote',
    description: [
      'Gained hands-on experience in HTML, CSS, and JavaScript, developing responsive web applications.',
      'Collaborated with the development team to improve UI/UX designs.',
      'Applied problem-solving skills to optimize code for efficiency and enhance application performance.'
    ],
    icon: <FaCode className="text-blue-500 dark:text-blue-400" size={24} />
  },
  {
    title: 'Data Analytics Intern',
    company: 'Hotech Company',
    period: 'Jan 2024 - Apr 2024',
    location: 'Chennai',
    description: [
      'Analyzed large datasets using Python and SQL to derive meaningful insights.',
      'Created interactive dashboards using Power BI for data visualization.',
      'Implemented machine learning models for predictive analytics.',
      'Collaborated with cross-functional teams to optimize business processes.'
    ],
    icon: <FaChartBar className="text-purple-500 dark:text-purple-400" size={24} />
  }
];