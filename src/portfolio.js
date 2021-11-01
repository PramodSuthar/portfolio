const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://pramodsuthar.netlify.app/',
  title: 'Pramod Suthar',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pramod Suthar',
  role: 'Software Developer',
  description:
    'Welcome to my Portfolio.',
  social: {
    twitter: 'https://www.twitter.com/Prmd96',
    linkedin: 'https://www.linkedin.com/in/pramodsuthar',
    github: 'https://www.github.com/PramodSuthar',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Flexi Pay',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'Redux', 'Firebase'],
    sourceCode: 'https://github.com/PramodSuthar/flexipay',
    livePreview: 'https://flexipay-react.herokuapp.com/',
  },
  {
    name: 'LinkedIn Clone',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'Redux', 'Firebase'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Gmail Clone',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'Redux', 'Firebase'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Slack',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'Styled Components', 'Firebase'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Snapchat v2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'Redux', 'Firebase'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },

  {
    name: 'Portfolio',
    description:
      'Created this beautiful Portfolio which highlights ',
    stack: ['React', 'JS', 'CSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com/PramodSuthar/portfolio',
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
    sourceCode: 'https://github.com',
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
  'React',
  'Redux',
  'Express',
  'MongoDB',
  'Firebase',
  'Java',
  'Swift',
  'Python',
  'C#',
  'C++',
  'MySQL',
  'Oracle DB',
  'SQLite',
  'Realm',
  'GitHub',
  'Perforce',
  'CI/CD',
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
  'Full Stack Web Development'
]

const contact = {
  email: 'pramodsuthar@mail.com',
}

export { header, about, projects, skills, contact, coursework }
