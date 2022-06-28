export interface PortfolioData {
  projectName: string;
  projectUrl: string;
  github: string;
  projectTechnologies: string[];
  description: string;
  iconPhotoURL: string;
  fontColor: string;
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
    iconPhotoURL: "data:image/png;base64,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",
    fontColor: "Black",
  },
];

export const getPortfolioData = (): PortfolioData[] => {
  return portfolioData;
};
