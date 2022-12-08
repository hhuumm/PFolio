export interface PortfolioData {
  projectName: string;
  projectUrl: string;
  github: string;
  projectTechnologies: string[];
  description: string;
  iconPhotoURL: string;
  fontColor: string;
  id: number;
}

const portfolioData: PortfolioData[] = [
  {
    projectName: "HoopN",
    projectUrl: "https://hoop-n.herokuapp.com/",
    github: "https://github.com/hhuumm/HoopN",
    projectTechnologies: [
      "MongoDB",
      "Express",
      "React",
      "NodeJS",
      "HTML",
      "CSS",
      "Heroku",
    ],
    description:
      "Hoop'n is a full 'MERN' (MongoDB, Express, React, Node) stack application that makes full use of CRUD (Create, Read, Update, Delete) data operations. This application was designed to give basketball enthusiasts easier access to pick-up games in their local area. Using the Google Maps Places API, the app allows users to use their geolocation to find pick-up games and parks in their area, and provides real-time weather information from the OpenWeatherMap API. Users can also create their own events, and leave reviews for events they have participated in. This application was designed using a mobile-first approach and is fully responsive for use on mobile phones or PC/Mac web browsers. Hoop'n was created during the third unit of General Assembly's Software Engineering Immersive program. The initial version was planned, developed and deployed over the course of two weeks. It was created from scratch using technologies in the ‘MERN’ stack, including MongoDB, Mongoose, Express, React and Node.",
    iconPhotoURL: "https://i.ibb.co/3CqX4Sq/slider1.jpg",
    fontColor: "White",
    id: 1,
  },
  {
    projectName: "CompCreator",
    projectUrl: "https://compcreator.herokuapp.com/",
    github: "https://github.com/hhuumm/compcreator",
    projectTechnologies: [
      "Django",
      "Python",
      "PostGres",
      "HTML",
      "CSS",
      "Heroku",
    ],
    description:
      "The project Idea was to create an application where the user could choose and budget a computer, without worrying about compatibility between the components. The meat and potatoes of this application was managing the data. With Django' built in admin portal, I was able to add data manually into the database from Amazon, and advertise them based on the specs of the computer that was being built. Each computer Idea inside the database consited of references to product, and the user that created the Idea. The project shows that I am capable of using a relational database within a python program to serve web applications",
    iconPhotoURL: "https://techguided.com/wp-content/uploads/2018/08/Save-Money-When-Building-A-PC.jpg",
    fontColor: "Black",
    id: 2,
  },
  {
    projectName: "ProjectPlanner",
    projectUrl: "https://projplanr.herokuapp.com/",
    github: "https://github.com/hhuumm/ProjectPlanner",
    projectTechnologies: [
      "MongoDB",
      "Express",
      "NodeJS",
      "HTML",
      "CSS",
      "Heroku",
    ],
    description:
      "The Idea is that every project consists of tasks, and each task can be broken down into more tasks, Projects and tasks are picked up by other users, and any one task can only be complete when it's children tasks are also complete. The big idea behind this project was to demonstrate understanding of recursion, data relation, Authorization and Authentication. The ability to create, yet not lead a tasks allows for other users to inherit task authority which gives them options to edit or delete the tasks they are responsible for.",
    iconPhotoURL:
      "https://previews.123rf.com/images/gbuglok/gbuglok1203/gbuglok120300011/12758539-colored-fineliners-on-architectural-project-background.jpg",
    fontColor: "Black",
    id: 3,
  },
  {
    projectName: "QandA",
    projectUrl: "https://qunda.azurewebsites.net/",
    github: "https://github.com/hhuumm/QandA",
    projectTechnologies: [
      "SQL",
      "ASPNET",
      "Typescript",
      "React",
      "HTML",
      "CSS",
      "Azure",
    ],
    description:
      "This is a basic question and answer app, listing unanswered questions for the users to then attempt to answer. This app demonstrates the ability to work with enterprise driven technologies like Azure and C#. It also demonstrates my general understanding of web development, and being able to express that understanding across many different technology stacks. Having originally learned programming through an object oriented lens, being able to code the backend with C# ",
    iconPhotoURL:
      "https://www.netclipart.com/pp/m/96-965213_transparent-answer-question-questions-and-answers-logo.png",
    fontColor: "Grey",
    id: 4,
  },
  {
    projectName: "ECommerce",
    projectUrl: "https://hamecommerce.azurewebsites.net/",
    github: "https://github.com/hhuumm/EShop",
    projectTechnologies: [
      "Firebase",
      "Javascript",
      "React",
      "HTML",
      "CSS",
      "Azure",
      "Blob Bucket",
    ],
    description:
      "This is an Ecommerce storefront using Firebase as the blob/data storage as well as authentication.",
    iconPhotoURL: "https://i.imgur.com/z1ybEZ6.png",
    fontColor: "Black",
    id: 5,
  },
  {
    projectName: "Saatva",
    projectUrl: "https://www.saatva.com/",
    github: "---",
    projectTechnologies: [
      "Magento",
      "Javascript",
      "PHP",
      "HTML",
      "CSS",
      "Jenkins",
      "Docker",
    ],
    description:
      "Saatva is a company that sells luxary bedding products",
    iconPhotoURL: "https://content.mattressadvisor.com/wp-content/uploads/2018/09/saatva-mattress-new-e1586527946280.jpg",
    fontColor: "Black",
    id: 6,
  },
  {
    projectName:"CleanBuilds",
    projectUrl: "https://www.cleanbuilds.io",
    github: "https://github.com/CleanBuilds/Website",
    projectTechnologies: [
      "NextJS",
      "Sanity",
      "Stripe",
      "Javascript",
      "React",
      "Canvas"

    ],
    description: "This project was made to showcase computers for online sale.",
    iconPhotoURL: "https://imgur.com/a/LGgOz0w",
    fontColor: "Black",
    id: 7,
  }
];

export const getPortfolioData = (): PortfolioData[] => {
  return portfolioData;
};
