/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Khandaker Mahidul Islam",
  logo_name: "K Mahidul Islam",
  
  subTitle:"Full Stack Developer",
  resumeLink:
    "https://drive.google.com/file/d/1M8LfAu8JGKn1AdyThTXSYqtlcHXq0hn3/view?usp=sharing",
  portfolio_repository: "https://github.com/kmahidul17",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/kmahidul17",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/khandaker-mahidul-islam-306034202/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
 
 
  {
    name: "Facebook",
    link: "https://www.facebook.com/mahidul17mi24/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Twitter",
    link: "https://twitter.com/kmahidul17",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },

];

const skills = {
  data: [
   
    {
      title: "Programming Skills",
      fileName: "FullStackImg",
      skills: [
        " Building resposive website front end using React",
    
        "Creating application backend in Node, php",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        
      ],
    },

    {
      title: "Frameworks",
      fileName: "FrameWorksImg",
      skills: [
        " Designing highly attractive user interface for mobile and web applications",
      
        " Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
       
        {
          skillName: "Codeigniter",
          fontAwesomeClassname: "simple-icons:codeigniter",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
       
      ],
    },
    
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        " Designing highly attractive user interface for mobile and web applications",
      
        " Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
       
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
       
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/khandakermahidul",
    },
    {
      siteName: "freecodecamp",
      iconifyClassname: "simple-icons:freecodecamp",
      style: {
        color: "#0A0A23",
      },
      profileLink: "https://www.freecodecamp.org/kmahidul17",
    },
  
   
 
   
  ],
};

const degrees = {
  degrees: [
    {
      title: "Primeasia University",
      subtitle: "Bachelors of Science (BSc.) in Computer Science and Engineering",
      logo_path: "Primeasia_University_Logo-removebg-preview.png",
      alt_name: "Primeasia University",
      duration: "2018 - spring 2022(Expected)",
      descriptions: [
        " To build a top-rated department for quality education, maintain excellent academic environment by producing world class graduates in CSE and contribute in the development of society & nation at large through excellence in teaching, research and innovation.",
        " The mission of Computer Science & Engineering department is to achieve national prominence by providing outstanding education and research training to the undergraduate students for productive careers in industry, academia, and government.",
        
      ],
      website_link: "https://www.primeasia.edu.bd",
    },
    {
      title: "DR. MAHBUBUR RAHMAN MOLLAH COLLEGE",
      subtitle: "Higher Secondary Certificate (H.S.C)",
      logo_path: "icon-logo.png",
      alt_name: "DR. MAHBUBUR RAHMAN MOLLAH COLLEGE",
      duration: "Passing Year : 2017",
      descriptions: [
        "Group : Science",
        "Result : G.P.A. 4.58 (Out of 5 scale)",
        
      ],
      website_link: "https://www.dmrc.edu.bd",
    },
    {
      title: "Shamsul Hoque Khan School & College",
      subtitle: "Secondary School Certificate (S.S.C)",
      logo_path:"download__1_-removebg-preview.png",
      alt_name: "Shamsul Hoque Khan School & College",
      duration: "Passing Year : 2015",
      descriptions: [
        "Group : Science",
        "Result : G.P.A. 5.00 (Out of 5 scale)",
        
      ],
      website_link: "http://www.shksc.edu.bd",
    },
  ],
};

const certifications = {
  certifications: [
   
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship ",
  description:
    "I have worked with many evolving startups as Web Developer, Designer and Software Architect.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
    
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: " TA/RA position",
          company: "Primeasia University",
          company_url: "https://www.primeasia.edu.bd",
          logo_path: "Primeasia_University_Logo-removebg-preview.png",
          duration: "December 2020 - Running",
          location: "Star Tower, Ground Floor, 12 Kemal Ataturk Avenue, Dhaka 1213",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
     
      ],
    },
    
      
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Khandaker_removebg_preview.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },

  addressSection: {
    title: "Address",
    subtitle:
      "H: 170, Block: E, Ward: 02, Shaheb Para, Sanarpar, PS: Siddirganj, Dist: Narayanganj.",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/Niqx7RWZ3oDj6x4T7",
  },
  emailSection: {
    title: "Email",
    subtitle:"kmahidul17@gmail.com",
    
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+8801925691172",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
