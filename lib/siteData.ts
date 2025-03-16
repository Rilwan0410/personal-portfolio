import HeroAvatar from "@/public/images/hero-avatar.jpg";
import PortfolioImg from "@/public/images/portfolio-img.png";
import MainImage from "@/public/images/portfolio-single.png";
import TestimonialAvatar from "@/public/images/testimonial-avatar.jpg";
import Logo from "@/public/images/client-logo.png";
import PostImage from "@/public/images/blog-img.png";
import Image from "@/public/images/blog-single.png";

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
    jobTitle: "Web Content Editor & Email Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    yearsOfExperience: "3",
    hoursOfWorking: "20",
    projectsDone: "90",
    typewriter: ["Hi There! 👋", "I'm Rilwan"],
  },
  skills: [
    {
      id: 1,
      name: "Shopify",
      percent: "",
      icon: "bi bi-file-earmark-code-fill",
    },
    {
      id: 4,
      name: "HubSpot",
      percent: "",
      icon: "bi bi-file-earmark-code-fill",
    },
    {
      id: 5,
      name: "Wordpress",
      percent: "",
      icon: "bi bi-wordpress",
    },
    {
      id: 6,
      name: "Contentful",
      percent: "",
      icon: "bi bi-file-earmark-code-fill",
    },
    {
      id: 3,
      name: "SEO",
      percent: "",
      icon: "bi bi-search",
    },
    {
      id: 7,
      name: "HTML",
      percent: "",
      icon: "bi bi-filetype-html",
    },
    {
      id: 8,
      name: "CSS",
      percent: "",
      icon: "bi bi-filetype-css",
    },
    {
      id: 9,
      name: "JavaScript",
      percent: "",
      icon: "bi bi-filetype-js",
    },
    {
      id: 2,
      name: "Tailwind",
      percent: "",
      icon: "bi bi-code-slash",
    },
  ],
};

export const portfolioData = {
  mainData: {
    title: "Portfolio",
    title2: "My Latest Works",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
  filterCategories: ["Show All", "First", "Second"],
  projects: [
    {
      projectTitle: "Project Title 1",
      slug: "first",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      keywords: "key1, key2, key3",
      category: "First",
      services: "Branding, Photoshoot",
      client: "FlaTheme",
      duration: "104 hours",
      mainImage: PortfolioImg,
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
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
    },
    {
      projectTitle: "Project Title 2",
      slug: "second",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      keywords: "key1, key2, key3",
      category: "Second",
      services: "Branding, Photoshoot",
      client: "FlaTheme",
      duration: "104 hours",
      mainImage: PortfolioImg,
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
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
    },
    {
      projectTitle: "Project Title 3",
      slug: "first-1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      keywords: "key1, key2, key3",
      category: "First",
      services: "Branding, Photoshoot",
      client: "FlaTheme",
      duration: "104 hours",
      mainImage: PortfolioImg,
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
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
      ],
    },
    {
      projectTitle: "Project Title 4",
      slug: "second-1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      keywords: "key1, key2, key3",
      category: "Second",
      services: "Branding, Photoshoot",
      client: "FlaTheme",
      duration: "104 hours",
      mainImage: PortfolioImg,
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
      categories: [
        { name: "Category" },
        { name: "Category" },
        { name: "Category" },
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
    title2: "Education & Experience",
    description:
      ""
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
