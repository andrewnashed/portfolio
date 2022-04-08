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
  paragraphOne: "Hi, I am Andrew, a Full-Stack web developer with an eye for design and a sales and civil engineering background. I am open to hearing from companies hiring for Front-end, Back-end, and Full-Stack developer roles.",
  paragraphTwo: 'I enjoy building Websites and Web applications with Next.js, React.js, Flask, PostgreSQL, and Docker.',
  paragraphThree: 'A graduate of Obour High Institute for Engineering and Technology with a BEng in Civil Engineering, I am currently freelancing and writing technical articles on Medium.',
  resume: 'https://drive.google.com/file/d/1OW6oScUpz5ja27vDuWLjhQhQ8DndEKbr/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id:nanoid(),
    img: 'amournoir1.png',
    title: 'Amournoir.art E-Commerce',
    info: 'E-Commerce that shows unique brand identity and allows customers to add items to cart and checkout.',
    info2: 'Technologies: JavaScript, React, NextJs and CSS',
    url:'https://skinfly-nextjs-commercejs.vercel.app',
    repo: '',
  },  {
    id:nanoid(),
    img: 'Mhr.png',
    title: 'MHR Homes',
    info: 'Real-estate website that allows client to check latest listings, sign up and submit reviews',
    info2: 'Technologies: JavaScript, React, NextJs, Python, Flask ',
    url:'https://mhr-nextjs.vercel.app/',
    repo: '',
  },
  {
    id:nanoid(),
    img: 'skinfly.png',
    title: 'Online E-Commerce Shop for Skincare company',
    info: 'E-Commerce that shows unique brand identity and allows customers to add items to cart and checkout.',
    info2: 'Technologies: JavaScript, React, NextJs, Commerce.js(Headless CMS)',
    url:'https://skinfly-nextjs-commercejs.vercel.app',
    repo: 'https://github.com/andrewnashed/skinfly-nextjs-commercejs',
  },
  {
    id: nanoid(),
    img: 'Phantatech.png',
    title: 'Phantatech Online Store',
    info: 'Online Store web application that allows users to create an account, add items to Cart and Checkout.',
    info2: 'Technologies: Flask, PostgreSQl and Stripe API',
    url: 'https://phantatech.herokuapp.com/',
    repo: 'https://github.com/andrewnashed/estore', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'farm.jpg',
  //   title: 'Todo App',
  //   info: 'Todo app that allows user to add a todo and delete it',
  //   info2: 'Technologies: FastAPI, React and MongoDB',
  //   url: '',
  //   repo: 'https://github.com/andrewnashed/todoapp-FARM', // if no repo, the button will not show up
  // },
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
  email: 'andrewnashed.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
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
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/andrewtries',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@nashedandrew5',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/codingpharoh/',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCTi93-fwwQr1B-j_NnnQ4fw',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
