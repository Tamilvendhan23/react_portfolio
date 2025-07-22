import { FaCode, FaChartBar, FaLaptopCode } from 'react-icons/fa';

export const experiences = [
  {
    title: 'Frontend Web Developer',
    company: 'Brainwave Matrix Solutions',
    period: 'June 2025 - Present',
    location: 'Noida, Uttar Pradesh, India (Remote)',
    description: [
      'Currently pursuing a Web Development Internship at Brainwave Matrix Solutions under the internship program ID JN17.2.',
      'Building and optimizing responsive user-facing features using modern JavaScript frameworks.',
      'Collaborating with team members to develop scalable and maintainable web applications.',
      'Applying best practices in frontend development with technologies like React.js, Vite, and Node.js.'
    ],
    icon: <FaLaptopCode className="text-blue-500 dark:text-blue-400" size={24} />
  },
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
  }
  
];
