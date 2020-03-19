module.exports = {
  siteTitle: 'Ganga Chaturvedi | Full Stack Developer',
  siteDescription: 'Ganga Chaturvedi is a full stack developer based in Delhi, India.',
  siteKeywords:
    'Ganga Chaturvedi, Ganga Chatrvedi, Ganga, Chaturvedi, GangaChatrvedi, gangachatrvedi, full stack developer, front-end developer, web developer, javascript, delhi',
  siteUrl: 'https://gangachatrvedi.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Ganga Chaturvedi',
  location: 'Delhi, India',
  email: 'ganga.chaturvedi24@gmail.com',
  github: 'https://github.com/GangaChatrvedi/',
  twitterHandle: '@GangaChatrvedi',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/GangaChatrvedi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/gangachatrvedi/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/gangaChatrvedi/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/GangaChatrvedi',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
