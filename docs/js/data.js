// Vanden Intranet - Embedded Data for GitHub Pages

const appData = {
  employees: [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@vanden.com',
      phone: '+1 (555) 123-4567',
      title: 'Senior Developer',
      department: 'Engineering',
      initials: 'JD'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@vanden.com',
      phone: '+1 (555) 123-4568',
      title: 'Product Manager',
      department: 'Product',
      initials: 'SJ'
    },
    {
      id: '3',
      name: 'Michael Chen',
      email: 'michael.chen@vanden.com',
      phone: '+1 (555) 123-4569',
      title: 'UX Designer',
      department: 'Design',
      initials: 'MC'
    },
    {
      id: '4',
      name: 'Emma Wilson',
      email: 'emma.wilson@vanden.com',
      phone: '+1 (555) 123-4570',
      title: 'HR Manager',
      department: 'Human Resources',
      initials: 'EW'
    },
    {
      id: '5',
      name: 'David Martinez',
      email: 'david.martinez@vanden.com',
      phone: '+1 (555) 123-4571',
      title: 'QA Engineer',
      department: 'Quality Assurance',
      initials: 'DM'
    },
    {
      id: '6',
      name: 'Lisa Anderson',
      email: 'lisa.anderson@vanden.com',
      phone: '+1 (555) 123-4572',
      title: 'Finance Director',
      department: 'Finance',
      initials: 'LA'
    },
    {
      id: '7',
      name: 'James Thompson',
      email: 'james.thompson@vanden.com',
      phone: '+1 (555) 123-4573',
      title: 'DevOps Engineer',
      department: 'Engineering',
      initials: 'JT'
    },
    {
      id: '8',
      name: 'Rachel Green',
      email: 'rachel.green@vanden.com',
      phone: '+1 (555) 123-4574',
      title: 'Marketing Manager',
      department: 'Marketing',
      initials: 'RG'
    },
    {
      id: '9',
      name: 'Christopher Lee',
      email: 'christopher.lee@vanden.com',
      phone: '+1 (555) 123-4575',
      title: 'Backend Developer',
      department: 'Engineering',
      initials: 'CL'
    },
    {
      id: '10',
      name: 'Nicole Davis',
      email: 'nicole.davis@vanden.com',
      phone: '+1 (555) 123-4576',
      title: 'Sales Director',
      department: 'Sales',
      initials: 'ND'
    }
  ],
  news: [
    {
      id: '1',
      title: 'Q3 Results Announcement',
      description: 'Vanden Company achieved record-breaking growth in Q3 with a 25% revenue increase year-over-year. Join us for the company-wide meeting to discuss future initiatives.',
      date: '2026-07-15',
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'New Employee Onboarding Program',
      description: 'We are excited to launch our new comprehensive onboarding program designed to help new team members succeed. The program includes mentorship and training modules.',
      date: '2026-07-10',
      author: 'Emma Wilson'
    },
    {
      id: '3',
      title: 'Summer Team Building Event',
      description: 'Save the date! Our annual summer team building event will be held on August 5th at the central office. Activities include games, food, and networking opportunities.',
      date: '2026-07-05',
      author: 'Rachel Green'
    },
    {
      id: '4',
      title: 'Updated Benefits Package',
      description: 'Starting next quarter, Vanden is offering enhanced health benefits, expanded remote work options, and additional paid time off.',
      date: '2026-06-28',
      author: 'Emma Wilson'
    },
    {
      id: '5',
      title: 'Product Launch - Version 2.0',
      description: 'Our flagship product has been redesigned with new features based on customer feedback. Version 2.0 launches next month with improved performance and user experience.',
      date: '2026-06-20',
      author: 'Sarah Johnson'
    },
    {
      id: '6',
      title: 'Office Renovation Complete',
      description: 'The renovation of our main office is finally complete! The new space features collaborative work areas, improved cafeteria, and updated meeting rooms.',
      date: '2026-06-15',
      author: 'John Doe'
    }
  ],
  documents: [
    {
      id: '1',
      name: 'Employee Handbook 2026',
      type: 'pdf',
      size: 2048576,
      date: '2026-01-15'
    },
    {
      id: '2',
      name: 'Code of Conduct',
      type: 'pdf',
      size: 1048576,
      date: '2026-01-10'
    },
    {
      id: '3',
      name: 'Financial Report Q2',
      type: 'xls',
      size: 3145728,
      date: '2026-07-01'
    },
    {
      id: '4',
      name: 'Marketing Strategy Presentation',
      type: 'ppt',
      size: 5242880,
      date: '2026-06-20'
    },
    {
      id: '5',
      name: 'Product Roadmap 2026',
      type: 'doc',
      size: 1572864,
      date: '2026-07-10'
    },
    {
      id: '6',
      name: 'IT Security Guidelines',
      type: 'pdf',
      size: 786432,
      date: '2026-03-15'
    },
    {
      id: '7',
      name: 'Meeting Minutes - July',
      type: 'doc',
      size: 524288,
      date: '2026-07-12'
    },
    {
      id: '8',
      name: 'Company Policy Updates',
      type: 'pdf',
      size: 2097152,
      date: '2026-07-08'
    },
    {
      id: '9',
      name: 'Training Materials',
      type: 'folder',
      size: 10485760,
      date: '2026-06-30'
    },
    {
      id: '10',
      name: 'Brand Guidelines',
      type: 'pdf',
      size: 4194304,
      date: '2026-02-01'
    }
  ],
  teams: [
    {
      id: '1',
      name: 'Engineering Team',
      lead: 'John Doe',
      members: 12,
      description: 'Responsible for developing and maintaining core products. Focuses on scalability, performance, and reliability.'
    },
    {
      id: '2',
      name: 'Product Team',
      lead: 'Sarah Johnson',
      members: 8,
      description: 'Defines product direction and strategy. Works closely with engineering and design to deliver customer value.'
    },
    {
      id: '3',
      name: 'Design Team',
      lead: 'Michael Chen',
      members: 6,
      description: 'Creates intuitive and beautiful user experiences. Owns UI/UX and visual design across all products.'
    },
    {
      id: '4',
      name: 'Sales Team',
      lead: 'Nicole Davis',
      members: 15,
      description: 'Drives revenue growth and customer relationships. Manages accounts and identifies new business opportunities.'
    },
    {
      id: '5',
      name: 'Marketing Team',
      lead: 'Rachel Green',
      members: 8,
      description: 'Builds brand awareness and demand. Manages campaigns, content, and market research.'
    },
    {
      id: '6',
      name: 'Finance Team',
      lead: 'Lisa Anderson',
      members: 7,
      description: 'Manages company finances, budgeting, and financial planning. Ensures compliance and transparency.'
    }
  ],
  events: [
    {
      id: '1',
      name: 'Company All-Hands Meeting',
      date: '2026-07-20',
      time: '10:00 AM',
      location: 'Main Conference Room',
      description: 'Quarterly company update with leadership presentations and Q&A session.'
    },
    {
      id: '2',
      name: 'Summer Team Building',
      date: '2026-08-05',
      time: '2:00 PM',
      location: 'Central Office Courtyard',
      description: 'Annual summer event with games, food, and team activities. All employees invited!'
    },
    {
      id: '3',
      name: 'Product Launch Celebration',
      date: '2026-08-15',
      time: '4:00 PM',
      location: 'Downtown Convention Center',
      description: 'Celebrate the launch of our new product v2.0 with the team and special guests.'
    },
    {
      id: '4',
      name: 'Engineering Workshop',
      date: '2026-07-25',
      time: '9:00 AM',
      location: 'Engineering Lab',
      description: 'Technical workshop on new development practices and tools. For engineering team.'
    },
    {
      id: '5',
      name: 'Professional Development Seminar',
      date: '2026-08-10',
      time: '1:00 PM',
      location: 'Training Center',
      description: 'Leadership development seminar featuring external speakers and breakout sessions.'
    },
    {
      id: '6',
      name: 'Department Lunch & Learn',
      date: '2026-07-22',
      time: '12:00 PM',
      location: 'Employee Cafeteria',
      description: 'Informal lunch session with team members sharing expertise and ideas.'
    }
  ]
};
