/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Benjamin Farhi",
  title: "Hi I'm Benjamin, Software Engineer",
  subTitle: emoji(
    "Computer Science, 2026 at University at Buffalo" ),
  
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bdfarhi/",
  linkedin: "https://www.linkedin.com/in/benjamin-farhi1/",
  gmail: "bdfarhi@buffalo.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University at Buffalo",
      logo: require("./assets/images/UB.webp"),
      subHeader: "Bachelor of Science in Computer Science",
      subheade: "Masters in Computer Science",
      duration: "September 2022 - May 2026",
      desc: "Relevant Coursework: Object-Oriented Programming, Data Structures and Algorithms, Probability Theory, Discrete Mathematics, Web Applications, Software Engineering, Machine Learning, Operating Systems, User Experience/ User Interface",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python | 3 Years", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "HTML/CSS/JS | 3 Years",
      progressPercentage: "100%"
    },
    {
      Stack: "Java | 2 Years",
      progressPercentage: "60%"
    },
    {
      Stack: "C | 2 Years",
      progressPercentage: "60%"
    },
    {
      Stack: "SQL | 1.5 Years",
      progressPercentage: "50%"
    },
    {
      Stack: "PHP | 1 Year",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Woyage AI",
      companylogo: require("./assets/images/woyageAI_logo.jpg"),
      date: "Jan 2025 – Present",
      descBullets: [
        "Conducting rigorous testing and debugging processes on multiple Django modules, resulting in a reduction of critical bugs by 25% and improving overall software reliability for deployment across three different platforms.",
        "Developing and executing a comprehensive UI and API automation testing pipeline utilizing Cypress and PyTest, enhancing test coverage by 60% across multiple applications, resulting in a 30% reduction in production defects."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Y STEM and Chess Inc.",
      companylogo: require("./assets/images/ystem.jpg"),
      date: "Jan 2025 – Present",
     descBullets: [
        "Conducting rigorous testing and debugging processes on multiple Django modules, resulting in a reduction of critical bugs by 25% and improving overall software reliability for deployment across three different platforms.",
        "Collaborating with teams to streamline the bug-fixing process, resulting in a decrease in critical issue resolution time."
      ]
    },
    {
      role: "Software Developer",
      company: "Dart Collective",
      companylogo: require("./assets/images/dartpic.jpg"),
      date: "Sep 2024 – Jan 2025",
      descBullets: [
        "Developed a NextJS application with a focus on optimizing deployment through AWS, resulting in a 20% increase in application scalability and reducing loading times by about 10%.",
        "Spearheaded the development of an interactive UI component library which accelerated the design and deployment process, reducing time-to-market for new features and improving overall team productivity by approximately 20%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Portfolio",
  projects: [
    {
      image: require("./assets/images/bufmao.jpg"),
      projectName: "Bills of Trials",
      projectDesc: "HTML, CSS, Django, Python, PostgreSQL, Docker, WebSocket’s",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://billsoftrails.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cam.jpg"),
      projectName: "Campus Maps",
      projectDesc: "ReactJS, PHP, MySQL",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/cse442-at-ub/fa24-project-fearfullfive"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/aiweb.png"),
      projectName: "AI Web Scraper",
      projectDesc: "Python, Selenium, Ollama",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/bdfarhi/AIWebScraper"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bbb.jpg"),
      projectName: "Baseball Game Predictor",
      projectDesc: "Python, Sci-kit learn, Pandas",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/bdfarhi/baseball_game_predictor"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Sign Language Tra",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "bdfarhi@buffalo.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};