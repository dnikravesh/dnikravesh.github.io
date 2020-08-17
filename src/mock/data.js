import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Danny Nikravesh | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Welcome to Danny's Portfolio!", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Danny',
  subtitle: 'I create and develop ... stuff',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Front End Web Developer, that enjoys all things coding. Learning, growing, breaking things, fixing things, bashing keyboard till things work again. You name it.',
  paragraphTwo:
    'Right now I am really digging React, specifically Gatsby.js and Next.js. Outside of Web Dev I enjoy diving into React Native.',
  paragraphThree: 'I like Pizza.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lindseyeatsla.jpg',
    title: 'LindseyeatsLA Blog',
    info: 'Wordpress Website',
    info2: '',
    url: 'https://lindseyeatsla.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'calculator.jpg',
    title: 'Not your Average Calculator',
    info: "It's just an average Calculator. Not just a looker this bad boy works as well.",
    info2: '',
    url: 'https://dnikravesh.github.io/calculator/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'soundofcircles.jpg',
    title: 'Sound of Circles',
    info: 'A game where circles come and go, sounds do too!',
    info2: '',
    url: 'https://dnikravesh.github.io/soundofcircles/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dannynikravesh@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/daniel-nikravesh/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dnikravesh',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
