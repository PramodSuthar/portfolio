const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'Pramod Suthar',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pramod Suthar',
  role: 'Software Developer',
  description:
    'A Geek by heart and a Programmer by passion. “Coffee and Coding” is kinda my thing.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Chicken Saga',
    description:
      'A clone of very popular game Crossy Road built by Hipster Whale in 2014 in which Chicken has to cross the roads, water and trains and survive.',
    stack: ['', 'Unreal Engine', ''],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Pacman',
    description:
      'Developed a Remake of the classic arcade game Pacman where the character, Pacman will find paths through his maze world.',
    stack: [' Unreal Engine', '', 'C++'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Meteor Shooter',
    description:
      'An Asteroid Shooting 2D Arcade Game.  The aim is to shoot the asteroids using the Space Ship. The user has 3 lives to destroy as much Meteors as possible.',
    stack: ['', 'Unreal Engine', ''],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Brick Breaker',
    description:
      'A classic game of Brick Breaker built on Unreal Engine ver 4.25 using Blueprints and C++.',
    stack: ['Unreal Engine', '', 'C++'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Sudoku',
    description:
      "A classic chalenging game of sudoku built in Python. Provides user with 4 levels of difficulty and fetches a new sudoku from the internet, for someone who doesn't give up easily!",
    stack: ['Python', 'Pygame', 'Beautiful Soup'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Flash Chat',
    description:
      'A real-time text chat application built in Swift that has built-in authentication which provides user authentication as well as cloud storage.',
    stack: ['Swift', '', 'Firebase'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },

  {
    name: 'TodoApp',
    description:
      'A smart to-do list app for iOS devices. Allows user to create a do list which will display items on a beautiful gradient going pattern. All of the data in the list will be saved and persisted locally on your device.',
    stack: ['Swift', '', 'Realm'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'QuizApp',
    description:
      "What's more fun than getting hands-on with the trivia game.Created for iOS devices using Swift programming language, QuizApp is a fun app for geeks and for those who are always up for a new challenge.",
    stack: ['', 'Swift', ''],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'ABC Bank',
    description:
      "Written in Java, Bank is a comprehensive console application that deals with everyday functioning of the Bank, dealing with the transactions, deposits and the customer's accounts.",
    stack: ['', 'Java', ''],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Xylophone',
    description:
      'For any music fans out there, this is an iOS app built on Swift. Understanding and using the concept of AVFoundation and AVAudioPlayer, Xylophone is a colorful music app that plays Xylophone sounds. Useful for the next Mozart! ;)',
    stack: ['', 'Swift', ''],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'MyBike',
    description:
      'MyBike is a C# application that provides the users with the functionality of a typical bike store, providing the essential functionalities and the user experience.  It allows the user to add, update, delete the record of the customer, or purchase the bike.',
    stack: ['C#', '', 'MVC'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Calculator',
    description:
      'A simple calculator app built using the MVC model, the Calculator is an iOS app, which provides the same but essential features any calculator should suffice.',
    stack: ['Swift', 'TypeScript', 'MVC'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'BookStore',
    description:
      'Similar to the Bike Store, the BookStore is an application built in C#, implementing the MVC architecture. It provides all the features that a BookStore might need: Adding a Book, Searching the Book stock, removing a book, updating the book. ',
    stack: ['C#', 'MVC', 'MySQL'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
  'MySQL',
  'Oracle DB',
  'SQLite',
  'Realm',
  'Git',
  'Perforce',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pramodsuthar@mail.com',
}

export { header, about, projects, skills, contact }
