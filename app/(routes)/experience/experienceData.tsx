export interface ExperienceData {
    company: string;
    startDate: string;
    endDate?: string;
    position: string;
    location: string;
    responsibilities: string[];
}


export const experiences: ExperienceData[] = [
    {
        position: "Director of Technology",
        company: "Intercollegiate Psychedelics Network",
        startDate: "2022",
        responsibilities: [
            "Orchestrated the design, development, and deployment of a cross-platform application using Flutter and Firebase.",
            "Conceptualized and executed a self-hosted Wordpress site in AWS, reducing organizational costs by 200%.",
            "Engineered automation pipelines to enhance member onboarding and streamline internal communication channels.",
            "Supervise the organization's Wordpress site and backend infrastructure.",
            "Consult with directorial team to ensure seamless integration and efficient operation of diverse tech stacks."
        ],
        location: "N/A"
    },
    {
        position: "Computer Science B.S.",
        company: "Arizona State University",
        startDate: "2020",
        endDate: "2024",
        responsibilities: [
            "Bachelor of Science in Computer Science with a Concentration in Artificial Intelligence."
        ],
        location: "Arizona"
    },
    {
        position: "Freelance Software Developer",
        company: "Freelance",
        startDate: "2019",
        responsibilities: [
            "Offer client-centric web and application development solutions, employing diverse stacks like Headless Wordpress with React, Wordpress, and Django/Python.",
            "Specialize in responsive app development using Flutter and React Native.",
            "Management of various websites for clients, providing routine maintenance, updates, and technical support."
        ],
        location: "N/A"
    },
    {
        position: "Software Developer",
        company: "Pittman Media Group",
        startDate: "2020",
        endDate: "2021",
        responsibilities: [
            "Developed intuitive software solutions, including a GUI for remote camera and camera tracking.",
            "Led the design and implementation of office network infrastructure.",
            "Supported live event production through a secure AWS remote VPN."
        ],
        location: "N/A"
    },
    {
        position: "Web Developer/Operations Lead",
        company: "Dava Oncology",
        startDate: "2018",
        endDate: "2020",
        responsibilities: [
            "Supported COO and CTO in technical and logistical operations.",
            "Established and maintained complex office networks in a multi-floor business environment.",
            "Facilitated the development and deployment of multiple company websites on AWS using Wordpress."
        ],
        location: "N/A"
    },
    {
        position: "Student",
        company: "Coding Dojo",
        startDate: "2018",
        endDate: "2019",
        responsibilities: [
            "Completed a six-month intensive bootcamp learning three full stacks: Django/Python, Ruby on Rails, and MERN."
        ],
        location: "N/A"
    },
    {
        position: "Digital Services Specialist",
        company: "PSAV/Encore",
        startDate: "2014",
        endDate: "2018",
        responsibilities: [
            "Worked closely with clients and internal teams to ensure seamless execution of digital engagement strategies, content management, and mobile applications tailored to each event.",
            "Delivered high-quality digital services in medical conferences, honing skills in remote collaboration, project management, and technical support."
        ],
        location: "N/A"
    },
    {
        position: "Student",
        company: "Musicians Institute",
        startDate: "2012",
        endDate: "2014",
        responsibilities: [
            "Gained valuable knowledge and hands-on experience in various aspects of music production, including recording, mixing, and mastering techniques.",
            "Worked with state-of-the-art equipment and industry-standard software.",
            "Collaborated on numerous projects, honing the ability to work effectively within a creative team."
        ],
        location: "N/A"
    }
];
