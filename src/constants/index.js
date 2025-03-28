import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
export const HERO_CONTENT = `Hello! I'm Chetan Chunduru, a Full Stack Developer and a graduate of UNC-Charlotte. With expertise in Java, Spring Boot, React.js, GraphQL, and AWS, I specialize in building scalable, high-performance web and mobile applications. I have hands-on experience in RESTful API development, microservices architecture, database optimization (PostgreSQL, MySQL, MongoDB), and cloud deployment using AWS (EC2, Lambda, S3, CloudWatch). As I actively seek new opportunities in Full Stack Development or Software Engineering roles, I'm eager to bring my technical expertise, problem-solving skills, and innovative mindset to a dynamic team. If you have any questions or know of job roles that align with my skill set, please feel free to reach out—I’d love to connect and explore new opportunities! You can find my contact details below—I look forward to hearing from you!`;

export const ABOUT_TEXT = `I have a strong foundation in full-stack development, with expertise in React.js, Redux, TypeScript, and JavaScript, creating high-performance, user-friendly web and mobile applications. I have successfully built scalable and impactful platforms for healthcare and e-commerce, delivering seamless experiences across various devices. With deep experience in REST APIs, GraphQL, Websockets, AWS, Docker, and Jenkins, I develop cloud-based solutions that are secure, efficient, and optimized for performance. I am passionate about innovation and staying ahead of industry trends, continuously refining my skills to build cutting-edge applications. My projects showcase my expertise and are available on my GitHub. If you're looking for a developer who can drive results and build robust, scalable solutions, let’s connect!`;

export const EXPERIENCES = [
  {
    year: "September 2023 - Present",
    role: "Java Full Stack Developer",
    company: "CitiusTech",
    description: `I developed the Smart Health Insurance Reimbursement System to automate claim submissions, eligibility verification, and fraud detection, making insurance processing more efficient for patients and providers. Using React.js, Spring Boot, PostgreSQL, and AWS (EC2, S3, RDS, Lambda, API Gateway), I ensured scalability, HIPAA compliance, and real-time data processing, reducing claim processing time and improving transparency.

    `,
    technologies: ["React", "Spring Boot","GraphQL", "AWS", "postgreSQL","Microservices"]
  },
  {
    year: "January 2020 - July 2022",
    role: "Software Engineer, Full Stack",
    company: "Intex Technologies",
    description: `I developed the Intex app as a customer support and ticketing system for both web and mobile, allowing users to easily log product issues, and service requests while ensuring seamless tracking and resolution. To ensure scalability and high availability, I used Spring Boot for backend APIs, React.js with Redux for frontend state management, and AWS services like EC2, S3, IAM, RDS, SNS, and CloudWatch,optimizing customer support operations.`,
    technologies: ["React", "Spring Boot","RESTful","MYSQL","Jenkins","Docker","JUnit", "Mockito"],
  },
  
 
];

export const PROJECTS = [
  
  {
    title: "Expense Tracker",
    image: project2,
    description:
      "The Expense Tracker application allows users to perform operations on individual expenses, enabling them to add, update, delete, and edit their expenses while tracking them by month and year for easy comparison between actual and budgeted spending.",
    technologies: ["HTML", "CSS", "React", "Spring Boot", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "GitHub Pages", "React.js", "TailwindCSS"],
  },
  {
    title: "Game Trading Platform",
    image: project4,
    description:
      "A platform for sending messages simultaneously, with features like sending emohjis, reacting on messages, instant message receiving, and user login.",
    technologies: ["HTML", "CSS", "React.js", "Spring Boot", "GraphQL"],
  },
  {
    title: "Event Booking System",
    image: project5,
    description:
      "A website for playing single player sudoku online",
    technologies: ["Redux", "Typescript", "React.js", "CSS", "Spring Boot","RESTful","MYSQL"],
  }
];

export const CONTACT = {
  address: "Seattle, Washington",
  phoneNo: "+1 980-371-9678 ",
  email: "chetansubhashc@gmail.com",
};
