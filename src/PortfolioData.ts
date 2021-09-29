export interface PortfolioData {
  projectName: string;
  projectUrl: string;
  github: string;
  projectTechnologies: string[];
  description: string;
  iconPhotoURL: string;
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
    iconPhotoURL: "",
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
      "Comp Creator is the go to place for creating your computer ideas without worrying about compatibility between componenets. Go and Try it out!",
    iconPhotoURL: "",
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
      "The Idea is that every project consists of tasks, and each task can be broken down into more tasks, Projects and tasks are picked up by other users, and any one task can only be complete when it's children tasks are also complete",
    iconPhotoURL: "",
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
      "This is a basic question and answer app, listing unanswered questions for the users to then attempt to answer. This app is demonstrating the marriage of the technologies listed above. Deployed using Microsoft Azure",
    iconPhotoURL: "",
  },
];

export const getPortfolioData = (): PortfolioData[] => {
  return portfolioData;
};
