import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    angular,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    cicada,
    freelancer
} from "../assets/icons";

import ichat from "../assets/icons/ichat.png"
import vidTube from "../assets/icons/vidTube.png"
import noteWhril from "../assets/icons/noteWhril.png"
import newsApp from "../assets/icons/newsApp.png"

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Animation",
    },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Internship",
        company_name: "Cicada Green Consultants",
        icon: cicada,
        iconBg: "#a2eb9d",
        date: "April 2021 - July 2021",
        points: [
            "Developing and maintaining web applications using Javascript and other related technologies.",
            "Collaborating with other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full-stack Developer",
        company_name: "Cicada Green Consultants",
        icon: cicada,
        iconBg: "#fbc3bc",
        date: "July 2021 - May 2023",
        points: [
            "Developing and maintaining web applications using Javascript, Angular, Node.js, SQL and other related technologies.",
            "Collaborating with other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Freelancer",
    //     company_name: "",
    //     icon: freelancer,
    //     iconBg: "#a2d2ff",
    //     date: "May 2023 - Present",
    //     points: [
    //         "Developing and maintaining CI/CD integrated web applications using React.js and other related technologies.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Getting feedback from client.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ShradhaChauhan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shradhac',
    }
];

export const projects = [
    {
        iconUrl: ichat,
        theme: 'btn-back-blue',
        name: 'Ichat',
        description: 'Developed a A real-time, secure and scalable chat app designed for users to connect with each other.',
        link: 'https://github.com/ShradhaChauhan/ichat',
    },
    {
        iconUrl: vidTube,
        theme: 'btn-back-red',
        name: 'VidTube',
        description: 'Created a full-stack replica of the popular platform "YouTube," enabling users to post and engage in online content.',
        link: 'https://github.com/ShradhaChauhan/youtube-clone',
    },
    {
        iconUrl: noteWhril,
        theme: 'btn-back-pink',
        name: 'NoteWhril',
        description: 'A tool designed for users to capture, organize and store information in the form of notes.',
        link: 'https://github.com/ShradhaChauhan/notewhril',
    },
    {
        iconUrl: newsApp,
        theme: 'btn-back-green',
        name: 'News App',
        description: 'Read daily news online using our E-Paper hassle free on your device.',
        link: 'https://github.com/ShradhaChauhan/news_app',
    }
];