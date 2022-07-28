const skillList = [
    {
        title: "React",
        subtitle: "Web development framework based on Javascript",
        description: "I enjoy using React due to its speed and the convenience of reusable components. Combined with Typescript, it makes for a great environment during development and testing."
    },
    {
        title: "Django",
        subtitle: "Web development framework based on Python",
        description: "With Python having been my entry point into programming, I naturally had to try one of its most popular frameworks. It has some great features like a user-friendly and configurable admin panel, and tools for functionality like Django Rest Framework for APIs."
    },
    {
        title: "Linux",
        subtitle: "Alternative Operating Systems",
        description: "I've used distros based on Ubuntu and Arch, with Manjaro being my favourite. Linux gives me a much greater development experience than Windows for most languages, due to its customizability. Simply setting up the shell and window manager to your preference already makes a huge difference to productivity."
    },
    {
        title: "Docker",
        subtitle: "Tool for software containerization",
        description: "Working with containers allows for consistency in development across different environments and greater compatibility between different languages. It also has a very cute whale logo."
    },
    {
        title: "Typescript",
        subtitle: "Javascript with Types",
        description: "Typescript adds a lot of features to Javascript. Strong typing greatly improves safety, helping you catch issues you may have missed with vanilla JS. It also works great with VS Code thanks to its excellent tooling."
    },
    {
        title: "CSS",
        subtitle: "Frontend styling language",
        description: "CSS has been around for a long time, but a lot of tools have been created to keep it relevant. Sass and Tailwind, for example, make it very easy to create beautiful designs quickly and efficiently."
    },
    {
        title: "HTML",
        subtitle: "Frontend markup language",
        description: "The basis of web design. Like CSS, a lot has been done to keep this language relevant. React's JSX syntax is very convenient for adding functionality to HTML."
    },
    {
        title: "SQL",
        subtitle: "Query language for database design and management",
        description: "There are a few different SQL variants around and they all have their uses in software development. I prefer Postgres due to its performance, security and compatibility with a wide range of languages."
    },
    {
        title: "Python",
        subtitle: "High level programming language",
        description: "Despite being a syntactically simple language, Python has some very impressive applications. It's most notably used for data science and machine learning, and is also popular for web development with frameworks like Flask and Django."
    },
    {
        title: "Java",
        subtitle: "Object Oriented Programming language",
        description: "Java is useful as a tool to learn the fundamentals of object oriented programming. Java is the basis for languages like Kotlin and Scala, making it useful in mobile, desktop, and web development."
    },
    
]

const experienceList = [
    {
        role: "Software Specialist",
        company: "Modena Computers High Performance Systems",
        date: ["09/2020", "present"],
        tasks: [
            "Develop and maintain company website and other software tools",
            "Research and document resource consumption of popular software used by industry professionals",
            "Consult with industry professionals to determine ideal workstation specification for unique applications",
            "Create content for social media (photography, videography, graphic design)",
        ]
    },
    {
        role: "Freelance Web Developer",
        company: "Self-employed",
        date: ["11/2019", "present"],
        tasks: [
            "Design and create fast single page apps for artists and small businesses",
            "Use React and Tailwind for UI",
            "Use GIT for version control",
        ]
    },
    {
        role: "Freelance Programming Tutor",
        company: "Self-employed",
        date: ["11/2019", "present"],
        tasks: [
            "Teach programming to students age 7-35",
            "Introduce new students to programming with concepts such as data types, loops and functions",
            "Develop intermediate students' understanding of the fundamentals of OOP and algorithm complexity",
            "Explain useful concepts including IDE setup, version control and working with Linux",
        ]
    },
    {
        role: "Web Developer",
        company: "Coded-19",
        date: ["01/2020", "01/2021"],
        tasks: [
            "Create an online platform for developers to share projects during the 2020 Covid-19 lockdown",
            "Develop a blog using Django with functionality for posts, likes, comments, and user authentication",
            "Create REST API for CRUD functionality",
            "Deploy to Linux server with Nginx",
        ]
    },

]

const educationList = [
    {
        certification: "Full Stack Software Engineering Certificate",
        date: ["10/2019", "01/2020"],
        institution: "HyperionDev",
        summary: "3-Month Bootcamp covering topics such as data structures and algorithms, the fundamentals of OOP, and development in an agile environment"
    },
    {
        certification: "Bachelor of Arts Honors",
        date: ["01/2014", "11/2014"],
        institution: "University of KwaZulu-Natal",
        summary: "Honors Degree in Media and Cultural Studies, covering topics such as Critical Research Methodology and Cinema Studies"
    },
    {
        certification: "Bachelor of Social Sciences",
        date: ["06/2011", "11/2013"],
        institution: "University of KwaZulu-Natal",
        summary: "Bachelors Degree with 3 majors in Marketing, Media & Cultural Studies, and Italian"
    },
]

export { skillList, educationList, experienceList }