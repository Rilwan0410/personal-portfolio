import HeroAvatar from "@/public/images/hero-avatar.jpg";
import PortfolioImg from "@/public/images/portfolio-img.png";
// import MainImage from "@/public/images/portfolio-single.png";
import TestimonialAvatar from "@/public/images/testimonial-avatar.jpg";
import Logo from "@/public/images/client-logo.png";
import PostImage from "@/public/images/blog-img.png";
import Image from "@/public/images/blog-single.png";
// import HBOClone from "@/public/images/hbo-clone.png";
import hboclone540 from "@/public/images/hboclone540.png"
import hboclone904 from "@/public/images/hboclone904.png"
import hboclone9042 from "@/public/images/hboclone904-2.png"
import hboclone9043 from "@/public/images/hboclone904-3.png"
import VGDA from "@/public/images/video-game-discovery-app.png";
import ITImg from "@/public/images/issueTrackerimg.png";
import issueTrackerImg from "@/public/images/issue-tracker.png";
import vdsar from "@/public/images/vdsar.png";
import vgda3 from "@/public/images/vgda3.png";
import vgda4 from "@/public/images/vgda4.png";
import cet from "@/public/images/cli-employee-tracker2.png";
import cet2 from "@/public/images/cli-employee-tracker.png";


export const headerData = {
  mainData: {
    firstName: "Rilwan",
    secondName: "Etti",
    phone: "(305) 305 2933",
    email: "rilwan410@hotmail.com",
    copywriter: "FlaTheme",
    socialLinks: [
      {
        icon: "bi bi-facebook",
        url: "#",
      },
      {
        icon: "bi bi-twitter-x",
        url: "#",
      },
      {
        icon: "bi bi-instagram",
        url: "#",
      },
    ],
  },
  links: [
    {
      name: "Buy Gray",
      url: "#",
    },
  ],
  socialLinks: [
    {
      name: "FB",
      url: "#",
    },
    {
      name: "TW",
      url: "#",
    },
    {
      name: "IG",
      url: "#",
    },
    {
      name: "IN",
      url: "#",
    },
  ],
};

export const aboutData = {
  mainData: {
    title: "About Me",
    title2: "About Me",
    heroAvatar: HeroAvatar,
    jobTitle: "Full Stack Web Developer",
    description:
      "My name is Rilwan Etti and I am a Full Stack Web Developer based in Pembroke Pines Florida. My passion for Web Development sparked in 2022 when I took a leap and decided to step into this unfamiliar field that I had no prior skillset in. Although I had no prior experience with coding or anything really computer related, I always loved the thought of being handy with computers. As I started to grow in my understanding for software engineering, my passion and interest for it grew much larger. I genuinely love the problem solving aspect of this career field, and the fact that you have to keep learning and staying sharp in order to thrive and continue to grow. I have graduated from a Full-Stack Bootcamp From the University Of Miami.",
    yearsOfExperience: "3",
    hoursOfWorking: "20",
    projectsDone: "90",
    typewriter: ["Hi There!", "I'm Rilwan"],
  },
  skills: [
    {
      id: 1,
      name: "HTML",
      percent: "",
      icon: "fa-brands fa-html5",
    },
    {
      id: 2,
      name: "CSS",
      percent: "",
      icon: "fa-brands fa-css3-alt",
    },
    {
      id: 3,
      name: "JavaScript",
      percent: "",
      icon: "fa-brands fa-js",
    },
    {
      id: 4,
      name: "React",
      percent: "",
      icon: "fa-brands fa-react",
    },
    {
      id: 5,
      name: "Redux",
      percent: "",
      icon: "bi bi-search",
    },
    {
      id: 6,
      name: "Next JS",
      percent: "",
      icon: "bi bi-filetype-jsx",
    },
    {
      id: 7,
      name: "Node JS",
      percent: "",
      icon: "fa-brands fa-node",
    },
    {
      id: 8,
      name: "Express",
      percent: "",
      icon: "bi bi-filetype-js",
    },
    {
      id: 9,
      name: "Git",
      percent: "",
      icon: "bi bi-git",
    },
    {
      id: 10,
      name: "Tailwind CSS",
      percent: "",
      icon: "bi bi-code-slash",
    },
    {
      id: 11,
      name: "MySQL",
      percent: "",
      icon: "bi bi-filetype-sql",
    },
    {
      id: 12,
      name: "Mongo DB",
      percent: "",
      icon: "bi bi-database",
    },
    {
      id: 13,
      name: "Data Structures & Algorithms",
      percent: "",
      icon: "bi bi-bezier2",
    },
  ],
};

export const portfolioData = {
  mainData: {
    title: "Portfolio",
    title2: "My Latest Works",
    description: "",
  },
  filterCategories: ["Show All", "First", "Second"],
  projects: [
    {
      projectTitle: "Video Game Discovery App",
      slug: "video-game-discovery-app",
      description:
        "This is an Game application built using React, React Router, using Chakra UI and Tailwind CSS. This app allows you to look and find valuable information about any game you can think about. Using the Rawg API database, there are over 800,000 video games that you can filter through and find out information about multiple games as well as the platforms they are available for and more.",
      keywords: "key1, key2, key3",
      category: "First",
      services: "Branding, Photoshoot",
      client: "https://video-game-discovery-app-nu.vercel.app/",
      duration: "https://github.com/Rilwan0410/video-game-discovery-app",
      mainImage: vdsar,
      images: [
        {
          image: VGDA,
          alt: "Image Alt",
        },
      ],
      imagesLightbox: {
        image: vgda3,
        alt: "Image Alt",
      },
      video: {
        thumbnail: vgda4,
        url: "https://www.youtube.com/watch?v=T4ZC5rwYJ1I",
      },
      categories: [
        { name: "React" },
        { name: "React Router" },
        { name: "Chakra UI" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      projectTitle: "Issue Tracker",
      slug: "issue-tracker",
      description:
        "This is an issue tracker application that allows you to Create, Edit, Update and Delete issues. This application was built from using NextJS, NextAuth for authentication, Prisma as the ORM, MySQL for the database, tailwind for the styling, as well as Radix for the front-end component library. This app connects to an external database and saves user information, regarding issues, and their login information.",
      keywords: "key1, key2, key3",
      category: "Second",
      services: "Branding, Photoshoot",
      client: "https://issue-tracker-five-iota.vercel.app/",
      duration: "https://github.com/Rilwan0410/issue_tracker",
      mainImage: ITImg,
      images: [
        {
          image: issueTrackerImg,
          alt: "Image Alt",
        },
      ],
      // imagesLightbox: {
      //   image: Image,
      //   alt: "Image Alt",
      // },
      // video: {
      //   thumbnail: Image,
      //   url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      // },
      categories: [
        { name: "Next JS" },
        { name: "Radix UI" },
        { name: "Prisma" },
        { name: "Tailwind CSS" },
        { name: "MySQL" },
        { name: "CRUD" },
      ],
    },
    {
      projectTitle: "HBO Clone",
      slug: "hbo-clone",
      description:
        "This is clone of the popular App HBO, built using NextJS, React and Tailwind CSS. This is one of the first projects I built using NextJS and it taught me a lot about the framework. This application allows you to look up movies and access a thirdy-party API from the movieDB. There are countless movies to search from, and with each movie search, you will have access to valuable information such, as the cast of the movie, the starring roles, of the movies and more",
      keywords: "key1, key2, key3",
      category: "First",
      services: "Branding, Photoshoot",
      client: "https://re-hboclone.netlify.app/create",
      duration: "https://github.com/Rilwan0410/HBO_CLONE",
      mainImage: hboclone540,
      images: [
        {
          image: hboclone904,
          alt: "Image Alt",
        },
      ],
      imagesLightbox: {
        image: hboclone9042,
        alt: "Image Alt",
      },
      video: {
        thumbnail: hboclone9043,
        url: "https://www.youtube.com/watch?v=7cJN5vFju8Y",
      },
      categories: [
        { name: "Next JS" },
        { name: "React" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      projectTitle: "CLI Employee Tracker",
      slug: "cli-employee-tracker",
      description:
        "This is a Node JS application that allows you to create a database for employee information regarding the the name of the employee, their managers, the departments, salary and more. This app was created using inquirer to promot questions in the cli, as well as MySQL to query to a database to save and persist all of the data.",
      keywords: "key1, key2, key3",
      category: "Second",
      services: "Branding, Photoshoot",
      // client: "https://re-hboclone.netlify.app/create",
      duration: "https://github.com/Rilwan0410/cli-employee-tracker",
      mainImage: cet,
      images: [
        {
          image: cet2,
          alt: "Image Alt",
        },
      ],
      // imagesLightbox: {
      //   image: Image,
      //   alt: "Image Alt",
      // },
      video: {
        thumbnail: cet2,
        url: "https://www.youtube.com/watch?v=7HKmDtX5sFw",
      },
      categories: [
        { name: "JavaScript" },
        { name: "Node JS" },
        { name: "MySQL" },
        { name: "CRUD" },
      ],
    },
  ],
};

export const servicesData = {
  mainData: {
    title: "Services",
    title2: "What I Do",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
  services: [
    {
      number: "01",
      icon: "bi bi-code-slash",
      title: "Web & Mobile Development",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      number: "02",
      icon: "bi bi-laptop",
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      number: "03",
      icon: "bi bi-gear",
      title: "Branding & Strategy",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
    },
    {
      number: "04",
      icon: "bi bi-person",
      title: "User Testing & Personas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
  ],
};

export const testimonialData = {
  mainData: {
    title: "Testimonial",
    title2: "What People Say",
  },
  testimonial: [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis",
      name: "Sandra Radford",
      jobTitle: "Project Manager",
      avatar: TestimonialAvatar,
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis",
      name: "Sandra Radford",
      jobTitle: "Project Manager",
      avatar: TestimonialAvatar,
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis",
      name: "Sandra Radford",
      jobTitle: "Project Manager",
      avatar: TestimonialAvatar,
    },
  ],
};

export const resumeData = {
  mainData: {
    title: "Resume",
    title2: "Relevant Education & Experience",
    description: "",
  },
  education: [
    {
      date: "2023 - 2024",
      degree: "Full Stack Developer Certification",
      university: "University of Miami Bootcamp",
    },
    //     {
    //       date: "2018 - 2020",
    //       degree: "Master Degree of Design",
    //       university: "@University of IT",
    //     },
    //     {
    //       date: "2014 - 2018",
    //       degree: "Bachelor Degree of Design",
    //       university: "@University of Design",
    //     },
  ],
  experience: [
    {
      date: "2023 - PRESENT",
      degree: "Freelance Web Develoepr",
      university: "Upwork",
    },
    // {
    //   date: "2018 - 2020",
    //   degree: "Senior Designer",
    //   university: "@FlaTheme",
    // },
    // {
    //   date: "2014 - 2018",
    //   degree: "UI & UX Designer",
    //   university: "@FlaTheme",
    // },
  ],
};

export const clientsData = {
  mainData: {
    title: "Clients",
    title2: "My Awesome Clients",
  },
  clients: [
    {
      lightLogo: Logo,
      darkLogo: Logo,
      url: "#",
    },
    {
      lightLogo: Logo,
      darkLogo: Logo,
      url: "#",
    },
    {
      lightLogo: Logo,
      darkLogo: Logo,
      url: "#",
    },
    {
      lightLogo: Logo,
      darkLogo: Logo,
      url: "#",
    },
    {
      lightLogo: Logo,
      darkLogo: Logo,
      url: "#",
    },
    {
      lightLogo: Logo,
      darkLogo: Logo,
      url: "#",
    },
  ],
};

export const blogData = {
  mainData: {
    title: "Blog",
    title2: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
  posts: [
    {
      title: "Blog Post Title",
      slug: "blog-post-title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      keywords: "key1, key2, key3",
      category: "Category",
      date: "Nov 25",
      postedBy: "admin",
      image: PostImage,
      content:
        '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Medium Heading</h4> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="col-12"> <h4 class="fw-medium">Custom Circle List</h4> <ul class="list-circle"> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li> <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li> </ul> </div></div>',
      images: [
        {
          image: Image,
          alt: "Image Alt",
        },
      ],
      imagesLightbox: {
        image: Image,
        alt: "Image Alt",
      },
      video: {
        thumbnail: Image,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      tags: [{ name: "#Tag1" }, { name: "#Tag2" }, { name: "#Tag3" }],
    },
    {
      title: "Blog Post Title",
      slug: "blog-post-title-1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      keywords: "key1, key2, key3",
      category: "Category",
      date: "Nov 25",
      postedBy: "admin",
      image: PostImage,
      content:
        '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Medium Heading</h4> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="col-12"> <h4 class="fw-medium">Custom Circle List</h4> <ul class="list-circle"> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li> <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li> </ul> </div></div>',
      images: [
        {
          image: Image,
          alt: "Image Alt",
        },
      ],
      imagesLightbox: {
        image: Image,
        alt: "Image Alt",
      },
      video: {
        thumbnail: Image,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      tags: [{ name: "#Tag1" }, { name: "#Tag2" }, { name: "#Tag3" }],
    },
    {
      title: "Blog Post Title",
      slug: "blog-post-title-2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      keywords: "key1, key2, key3",
      category: "Category",
      date: "Nov 25",
      postedBy: "admin",
      image: PostImage,
      content:
        '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Medium Heading</h4> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="col-12"> <h4 class="fw-medium">Custom Circle List</h4> <ul class="list-circle"> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li> <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li> </ul> </div></div>',
      images: [
        {
          image: Image,
          alt: "Image Alt",
        },
      ],
      imagesLightbox: {
        image: Image,
        alt: "Image Alt",
      },
      video: {
        thumbnail: Image,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      tags: [{ name: "#Tag1" }, { name: "#Tag2" }, { name: "#Tag3" }],
    },
  ],
};

export const contactData = {
  mainData: {
    title: "Clients",
    title2: "Get in touch",
    title3: "Let's Connect",
    // description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
    phone: "305-305-2933",
    email: "rilwan410@hotmail.com",
    // address: "121 King St, Melbourne VIC 3000",
  },
};

export const mapData = {
  mainData: {
    lat: -3.745,
    lng: -38.523,
  },
};
