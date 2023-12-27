const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://pramodsuthar.com',
  title: 'Pramod Suthar',
  firstName: 'Pramod',
  lastName: 'Suthar',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pramod Suthar',
  role: 'FullStack Software Developer',
  social: {
    twitter: 'https://www.twitter.com/Prmd96',
    linkedin: 'https://www.linkedin.com/in/pramodsuthar',
    github: 'https://www.github.com/PramodSuthar',
  },
  about:
    "Greetings! 👋 I'm a seasoned full-stack developer, specializing in crafting cutting-edge websites and applications. Beyond coding, I dominate the gaming realm 🎮, immerse myself in cinematic experiences 🎦, and delve into impactful non-fiction/self-improvement books 📚. If you share a passion for code, football, or just chilling like me, Let's connect! 🚀",
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Moviepedia',
    description:
      'Developed the perfect Encylopedia for movie and tv shows lovers: Moviepedia. Search for new Movies and TV Shows adn have a look at the trailer on the go.',
    stack: ['React', 'SASS', 'TMDB API'],
    sourceCode: 'https://github.com/PramodSuthar/moviepedia',
    livePreview: 'https://movieepedia.netlify.app/',
  },
  {
    name: "Let's Chat",
    description:
      'Just a fully fledged Chat Application built in React which allows the users to send text, emojis, gif and share files in real time.',
    stack: ['React', 'Stream API', 'React Chat Engine'],
    sourceCode: 'https://github.com/PramodSuthar/letschat',
    livePreview: 'https://https://letschatwp.netlify.app/',
  },

  {
    name: 'LinkedIn v2',
    description:
      'Curated a perfect clone for the LinkedIn, which is a replica of the famous social media platform for Business Professionals.',
    stack: ['React', 'Redux', 'Firebase'],
    sourceCode: 'https://github.com/PramodSuthar/linkedinv2',
    livePreview: 'https://linkedinv2.web.app/',
  },
  {
    name: 'Gmail Clone',
    description:
      'Developed a clone for the most popular mail service in the World, Gmail!, fitted with the Google Auth, firebase firestore and firebase hosting.',
    stack: ['React', 'Redux', 'Firebase'],
    sourceCode: 'https://github.com/PramodSuthar/gmail-clone-react',
    livePreview: 'https://clone-649b9.web.app/',
  },

  {
    name: 'Portfolio',
    description:
      'Created this beautiful Portfolio which highlights all my work and accomplishments done so far.',
    stack: ['React', 'JS', 'CSS'],
    sourceCode: 'https://github.com/PramodSuthar/portfolio',
    livePreview: 'https://pramodsuthar.netlify.app',
  },
  {
    name: 'Calculator',
    description:
      'Developed this beautiful Calculator web app in React which showcases my skills in the front end department.',
    stack: ['', 'React', ''],
    sourceCode: 'https://github.com/PramodSuthar/calculator-react',
    livePreview: 'https://online-calculator-react.netlify.app/',
  },
  {
    name: 'Flexi Pay',
    description:
      'Flexi Pay is a web app landing page for any website with a goal. Powered with Firebase Auth and Firebase Realtime Database.',
    stack: ['React', 'Redux', 'Firebase'],
    sourceCode: 'https://github.com/PramodSuthar/flexipay',
    livePreview: 'https://flexipay.netlify.app/',
  },
  {
    name: 'Chicken Saga',
    description:
      'A clone of very popular game Crossy Road built by Hipster Whale in 2014 in which Chicken has to cross the roads, water and trains and survive.',
    stack: ['', 'Unreal Engine', ''],
    sourceCode: 'https://github.com/PramodSuthar/Chicken-Saga',
  },
  {
    name: 'Pacman',
    description:
      'Developed a Remake of the classic arcade game Pacman where the character, Pacman will find paths through his maze world.',
    stack: [' Unreal Engine', '', 'C++'],
    sourceCode: 'https://github.com/PramodSuthar/PacMan',
  },
  {
    name: 'Meteor Shooter',
    description:
      'An Asteroid Shooting 2D Arcade Game.  The aim is to shoot the asteroids using the Space Ship. The user has 3 lives to destroy as much Meteors as possible.',
    stack: ['', 'Unreal Engine', ''],
    sourceCode: 'https://github.com/PramodSuthar/Meteor-Shooter',
  },
  {
    name: 'Brick Breaker',
    description:
      'A classic game of Brick Breaker built on Unreal Engine ver 4.25 using Blueprints and C++.',
    stack: ['Unreal Engine', '', 'C++'],
    sourceCode: 'https://github.com/PramodSuthar/BrickBreaker',
  },
  {
    name: 'Sudoku',
    description:
      "A classic chalenging game of sudoku built in Python. Provides user with 4 levels of difficulty and fetches a new sudoku from the internet, for someone who doesn't give up easily!",
    stack: ['Python', 'Pygame', 'Beautiful Soup'],
    sourceCode: 'https://github.com/PramodSuthar/sudoku-Python',
  },
  {
    name: 'Flash Chat',
    description:
      'A real-time text chat application built in Swift that has built-in authentication which provides user authentication as well as cloud storage.',
    stack: ['Swift', '', 'Firebase'],
    sourceCode: 'https://github.com/PramodSuthar/FlashChat-iOS',
  },

  {
    name: 'TodoApp',
    description:
      'A smart to-do list app for iOS devices. Allows user to create a do list which will display items on a beautiful gradient going pattern. All of the data in the list will be saved and persisted locally on your device.',
    stack: ['Swift', '', 'Realm'],
    sourceCode: 'https://github.com/PramodSuthar?tab=repositories',
  },
  {
    name: 'QuizApp',
    description:
      "What's more fun than getting hands-on with the trivia game.Created for iOS devices using Swift programming language, QuizApp is a fun app for geeks and for those who are always up for a new challenge.",
    stack: ['', 'Swift', ''],
    sourceCode: 'https://github.com/PramodSuthar/QuizApp-iOS',
  },
  {
    name: 'ABC Bank',
    description:
      "Written in Java, Bank is a comprehensive console application that deals with everyday functioning of the Bank, dealing with the transactions, deposits and the customer's accounts.",
    stack: ['', 'Java', ''],
    sourceCode: 'https://github.com/PramodSuthar/Bank-Java',
  },
  {
    name: 'Xylophone',
    description:
      'For any music fans out there, this is an iOS app built on Swift. Understanding and using the concept of AVFoundation and AVAudioPlayer, Xylophone is a colorful music app that plays Xylophone sounds. Useful for the next Mozart! ;)',
    stack: ['', 'Swift', ''],
    sourceCode: 'https://github.com/PramodSuthar/Xylophone-iOS',
  },
  {
    name: 'MyBike',
    description:
      'MyBike is a C# application that provides the users with the functionality of a typical bike store, providing the essential functionalities and the user experience.  It allows the user to add, update, delete the record of the customer, or purchase the bike.',
    stack: ['C#', '', 'MVC'],
    sourceCode: 'https://github.com/PramodSuthar/BikeStore',
  },
  {
    name: 'Calculator',
    description:
      'A simple calculator app built using the MVC model, the Calculator is an iOS app, which provides the same but essential features any calculator should suffice.',
    stack: ['', 'Swift', ''],
    sourceCode: 'https://github.com/PramodSuthar/Calculator-iOS',
  },
  {
    name: 'BookStore',
    description:
      'Similar to the Bike Store, the BookStore is an application built in C#, implementing the MVC architecture. It provides all the features that a BookStore might need: Adding a Book, Searching the Book stock, removing a book, updating the book. ',
    stack: ['C#', 'MVC', 'MySQL'],
    sourceCode: 'https://github.com/PramodSuthar/BookStore',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'ExpressJS',
  'NodeJS',
  'Redux',
  'MongoDB',
  'Bootstrap',
  'Tailwind CSS',
  'C#',
  'C++',
  'Java',
  'React Native',
  'Python',
  'Swift',
  'MongoDB',
  'MySQL',
  'SQLite',
  'Oracle DB',
  'Firebase',
  'Prisma ORM',
  'Styled Components',
  'Git',
  'Perforce',
  'GitHub',
  'TeamCity',
  'Jira',
  'Confluence',
  'Github Actions',
  'Docker',
  'AWS',
]

const coursework = [
  'Fundamentals of Computer Programming',
  'Object-Oriented Programming',
  'Principles of Software Development',
  'Design and Analysis of Algorithms',
  'Basic Organization of Computer Systems',
  'Mobile Application Development',
  'File and Database Management',
  'Advanced Web Technologies',
  'Advanced Mobile App Development',
  'Fundamentals of Machine Learning',
  'Cross Platform Application Development',
  'Introduction to Game Development',
  'Full Stack Web Development',
]

const contact = {
  email: 'sutharpramod@outlook.com',
}

export { header, about, projects, skills, contact, coursework }
