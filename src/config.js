module.exports = {
  siteTitle: 'Abhishek Sharma | Student Developer',
  siteDescription:
    'Abhishek Sharma is an incoming Software Developer, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Abhishek Sharma, Abhishek, Sharma, abhi-up79, software engineer, web developer, javascript, auraiya, rajkiya',
  siteUrl: 'https://abhi-up79.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Abhishek Sharma',
  location: 'Auraiya, India',
  email: 'sharma.abhishek208@gmail.com',
  github: 'https://github.com/abhi-up79',
  twitterHandle: '@abhi_up79',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/abhi-up79',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/abhiup79/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/abhi_up79/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/abhi_up79',
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
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

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
