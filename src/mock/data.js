import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lewys | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Lewys | Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Lewys',
  subtitle: "I'm a Junior developer.",
  cta: 'Tell me more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a Junior Front End Developer from Cardiff, Wales.",
  paragraphTwo:
    "When I'm not on the computer pushing pixels you can find me frequently taking off on(usually an impulse) adventure somewhere. Be it local or afar I love to travel to new places and experience all things new and different.",
  paragraphThree:
    'I think that the type of person I am, especially my love of making things more effecient and my approach to problem solving, will allow me to thrive on making the web a better place.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'weatherApp.png',
    title: 'Weather app',
    info: 'A basic react weather app that shows min-max temperature from a city or country name search from openweatherAPI',
    info2:
      "I'll be coming back to this. I want to use data to focus the weather forecast for users planning motorbike/bicycle routes who need to plan out routes with extended wind and rain predictions. ",
    url: 'https://reactweatherapp-adec5.web.app/',
    repo: 'https://github.com/LCN-GH/weatherApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'greatQuotes.png',
    title: 'Quote app',
    info: 'A basic react app which allows any user to view and add quotes as well as comments. This was a project that I built as part of a Udemy react course.',
    info2: '',
    url: 'https://react-http-81a80.web.app/',
    repo: 'https://github.com/LCN-GH/QuoteApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rps.png',
    title: 'Rock Paper Scissors',
    info: 'This was a game clone challenge from "Frontend Mentor"',
    info2:
      "Was fun to make and taught me a lot at the time. I'd love to come back to it and buiod it with react as well as add in lizard, spock logic. Not currently set up for viewing on a mobile.",
    url: 'https://rockpaperscissors-24d06.web.app/',
    repo: 'https://github.com/LCN-GH/rockPaperScissors', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/LCN-GH',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
