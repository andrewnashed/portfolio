import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andrew Nashed', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Andrew Nashed',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatar.jpg',
  paragraphOne: "Hello! My name is Andrew Nashed and I am a full-stack web developer based in New York City. I enjoy building Python and React applictations.",
  paragraphTwo: ' A graduate of Obour High Institute for Engineering and Technology with a BFS in Civil Engineering, I am currently freelancing, as well as working on a project called Addons Matrix.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1OW6oScUpz5ja27vDuWLjhQhQ8DndEKbr/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Phantatech.png',
    title: 'Phantatech Online Store',
    info: 'Online Store web application that allows users to create an account, add items to Cart and Checkout.',
    info2: 'Technologies: Flask, PostgreSQl and Stripe API',
    url: 'https://phantatech.herokuapp.com/',
    repo: 'https://github.com/andrewnashed/estore', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Cryptico.png',
    title: 'Cryptico Blog',
    info: 'Cryptico Blog A Blog web app that allows admin to add post and for users to create an account and to leave comments to the post',
    info2: 'Technologies: Flask and PostgreSQl',
    url: 'https://cryptico-blog.herokuapp.com/',
    repo: 'https://github.com/andrewnashed/Blog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'britney.png',
    title: 'Britney.rest',
    info: 'REST API for random Britney Spears Quotes {RESTney!}',
    info2: 'Technologies: Flask-RESTful, Python(Requests Library) and Docker',
    url: 'https://britney.rest/',
    repo: 'https://github.com/andrewnashed/britney.rest', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'cyberandrew30@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/andrew_nashed_',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andrew-nashed-210161166',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/andrewnashed/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
