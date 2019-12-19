interface IExperience {
  role: string;
  company: string;
  description?: string;
  technologies?: string[];
  from?: string;
  to?: string;
  current?: boolean;
  location?: "Remote" | "Location";
}

const experience: IExperience[] = [
  {
    role: "Software Developer Intern",
    company: "Daxxel Sistemas e Comércio LTDA",
    description: `This was my first job as a developer. I created new features and gave customer support on a ERP system for industrial, distribution, retail and services. The stack was VB.NET (Windows Forms) and SQL Server.`,
    technologies: ["SQL Server", "VB.NET"],
    location: "Location"
  },
  {
    role: "Software Developer Intern",
    company: "Arcnet Desenvolvimento de Software LTDA",
    technologies: ["C#", "ASP.NET MVC", "Angular.js", "Knockout.js", "MongoDB"],
    location: "Location"
  },
  {
    role: "Software Developer",
    company: "NFE.io",
    technologies: ["C#", "ASP.NET API", "SOAP"],
    from: "Dez 2014",
    to: "Aug, 2015",
    location: "Remote"
  },
  {
    role: "Software Developer",
    company: "FazINOVA",
    technologies: ["Ruby on Rails", "Postgres", "Meteor"],
    from: "Aug 2015",
    to: "Nov, 2015",
    location: "Location"
  },
  {
    role: "Software Engineer",
    company: "Dobox",
    technologies: ["Meteor", "React", "CircleCI", "MongoDB"],
    location: "Remote"
  },
  {
    role: "Core Developer",
    company: "Envisioning",
    technologies: ["Meteor", "React", "ElasticSearch", "MongoDB", "CircleCI"],
    current: true,
    location: "Remote"
  },
  {
    role: "Software Engineer",
    company: "Toptal",
    technologies: ["Meteor", "React", "MongoDB"],
    location: "Remote"
  },
  {
    role: "Mentor",
    company: "Codementor",
    location: "Remote"
  },
  {
    role: "Co-Founder",
    company: "CodeChang LLC",
    location: "Remote"
  }
];

export default {
  routes: {
    index: "/",
    uses: "/uses",
    experience: "/experience"
  },
  socialLinks: {
    github: "https://github.com/lnmunhoz",
    twitter: "http://twitter.com/lnmunhoz",
    linkedin: "https://www.linkedin.com/in/lucasnmunhoz/"
  },

  technologies: [
    "TypeScript",
    "React",
    "React Native",
    "MongoDB",
    "Redis",
    "Node.js"
  ],
  uses: [
    {
      name: "VSCode",
      tag: "Development"
    },
    {
      name: "iTerm",
      tag: "Development"
    },

    {
      name: "Alfred",
      tag: "Productivity"
    },
    {
      name: "Dynalist",
      tag: "Productivity"
    },
    {
      name: "Slate",
      tag: "Productivity"
    },
    {
      name: "Karabiner Elements",
      tag: "Productivity"
    },
    {
      name: "Flux",
      tag: "Apps"
    },
    {
      name: "RoboMongo",
      tag: "Database Management"
    },
    {
      name: "Kap",
      tag: "Apps"
    },
    {
      name: "Brave",
      tag: "Browsing"
    },
    {
      name: "Slack",
      tag: "Communication"
    },
    {
      name: "Telegram",
      tag: "Communication"
    },
    {
      name: "Spotify",
      tag: "Music"
    },
    {
      name: "Figma",
      tag: "Design"
    },
    {
      name: "Git",
      tag: "Version Control"
    },
    {
      name: "Github",
      tag: "Version Control"
    },
    {
      name: "Gitlab",
      tag: "Version Control"
    },
    {
      name: "CircleCI",
      tag: "CI/DC"
    }
  ],
  experience
};
