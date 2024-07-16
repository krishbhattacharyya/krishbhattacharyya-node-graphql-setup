// A map of functions which return data for the schema.
export const posts = [
  {
    id: 1,
    title: 'His mother had always taught him',
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: ['history', 'american', 'crime'],
    reactions: {
      likes: 192,
      dislikes: 25
    },
    views: 305,
    userId: 1
  },
  {
    id: 2,
    title: 'He was an expert but not in a discipline',
    body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
    tags: ['french', 'fiction', 'english'],
    reactions: {
      likes: 859,
      dislikes: 32
    },
    views: 4884,
    userId: 1
  },
  {
    id: 3,
    title: 'Dave watched as the forest burned up on the hill.',
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    tags: ['magical', 'history', 'french'],
    reactions: {
      likes: 1448,
      dislikes: 39
    },
    views: 4152,
    userId: 2
  },
  {
    id: 4,
    title: 'All he wanted was a candy bar.',
    body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
    tags: ['mystery', 'english', 'american'],
    reactions: {
      likes: 359,
      dislikes: 18
    },
    views: 4548,
    userId: 2
  },
  {
    id: 5,
    title: 'Hopes and dreams were dashed that day.',
    body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
    tags: ['crime', 'mystery', 'love'],
    reactions: {
      likes: 119,
      dislikes: 30
    },
    views: 626,
    userId: 3
  }
]

export const users = [
  {
    id: 1,
    firstName: 'Emily',
    lastName: 'Johnson',
    maidenName: 'Smith',
    age: 28,
    gender: 'female',
    email: 'emily.johnson@x.dummyjson.com',
    phone: '+81 965-431-3024',
    username: 'emilys',
    password: 'emilyspass',
    birthDate: '1996-5-30',
    image: 'https://dummyjson.com/icon/emilys/128',
    nationality: 'American',
    role: 'admin',
    posts: [
      {
        id: 5,
        title: 'Hopes and dreams were dashed that day.',
        body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
        tags: ['crime', 'mystery', 'love'],
        reactions: {
          likes: 119,
          dislikes: 30
        },
        views: 626,
        userId: 3
      }
    ],
    friends: [
      {
        id: 3,
        firstName: 'Sophia',
        lastName: 'Brown',
        maidenName: '',
        age: 42,
        gender: 'female',
        email: 'sophia.brown@x.dummyjson.com',
        phone: '+81 210-652-2785',
        username: 'sophiab',
        password: 'sophiabpass',
        birthDate: '1982-11-6',
        image: 'https://dummyjson.com/icon/sophiab/128',
        nationality: 'Indian',
        role: 'admin',
        friends: []
      }
    ]
  },
  {
    id: 2,
    firstName: 'Michael',
    lastName: 'Williams',
    maidenName: '',
    age: 35,
    gender: 'male',
    email: 'michael.williams@x.dummyjson.com',
    phone: '+49 258-627-6644',
    username: 'michaelw',
    password: 'michaelwpass',
    birthDate: '1989-8-10',
    image: 'https://dummyjson.com/icon/michaelw/128',
    nationality: 'American',
    posts: [],
    friends: []
  },
  {
    id: 3,
    firstName: 'Sophia',
    lastName: 'Brown',
    maidenName: '',
    age: 42,
    gender: 'female',
    email: 'sophia.brown@x.dummyjson.com',
    phone: '+81 210-652-2785',
    username: 'sophiab',
    password: 'sophiabpass',
    birthDate: '1982-11-6',
    image: 'https://dummyjson.com/icon/sophiab/128',
    nationality: 'Indian',
    role: 'admin',
    posts: [
      {
        id: 3,
        title: 'Dave watched as the forest burned up on the hill.',
        body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
        tags: ['magical', 'history', 'french'],
        reactions: {
          likes: 1448,
          dislikes: 39
        },
        views: 4152,
        userId: 2
      },
      {
        id: 4,
        title: 'All he wanted was a candy bar.',
        body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
        tags: ['mystery', 'english', 'american'],
        reactions: {
          likes: 359,
          dislikes: 18
        },
        views: 4548,
        userId: 2
      }
    ],
    friends: []
  },
  {
    id: 4,
    firstName: 'Rajesh',
    lastName: 'Barman',
    maidenName: '',
    age: 42,
    gender: 'female',
    email: 'sophia.brown@x.dummyjson.com',
    phone: '+81 210-652-2785',
    username: 'sophiab',
    password: 'sophiabpass',
    birthDate: '1982-11-6',
    image: 'https://dummyjson.com/icon/sophiab/128',
    nationality: 'Indian',
    role: 'admin',
    posts: [],
    friends: [
      {
        id: 5,
        firstName: 'Rohit',
        lastName: 'Bhatta',
        maidenName: '',
        age: 42,
        gender: 'female',
        email: 'sophia.brown@x.dummyjson.com',
        phone: '+81 210-652-2785',
        username: 'sophiab',
        password: 'sophiabpass',
        birthDate: '1982-11-6',
        image: 'https://dummyjson.com/icon/sophiab/128',
        nationality: 'Indian',
        role: 'admin',
        friends: []
      }
    ]
  },
  {
    id: 5,
    firstName: 'Rohit',
    lastName: 'Bhatta',
    maidenName: '',
    age: 42,
    gender: 'female',
    email: 'sophia.brown@x.dummyjson.com',
    phone: '+81 210-652-2785',
    username: 'sophiab',
    password: 'sophiabpass',
    birthDate: '1982-11-6',
    image: 'https://dummyjson.com/icon/sophiab/128',
    nationality: 'Indian',
    role: 'admin',
    posts: [
      {
        id: 1,
        title: 'His mother had always taught him',
        body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        tags: ['history', 'american', 'crime'],
        reactions: {
          likes: 192,
          dislikes: 25
        },
        views: 305,
        userId: 1
      },
      {
        id: 2,
        title: 'He was an expert but not in a discipline',
        body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
        tags: ['french', 'fiction', 'english'],
        reactions: {
          likes: 859,
          dislikes: 32
        },
        views: 4884,
        userId: 1
      }
    ],
    friends: []
  }
]

export const movies = [
  {
    id: 1,
    title: 'Avatar',
    year: '2009',
    rate: 'PG-13',
    released: '18 Dec 2009',
    runtime: '162 min',
    genre: 'Action, Adventure, Fantasy',
    director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '890,617',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True',
    images: [
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
    ]
  },
  {
    id: 2,
    title: 'I Am Legend',
    year: '2007',
    rate: 'PG-13',
    released: '14 Dec 2007',
    runtime: '101 min',
    genre: 'Drama, Horror, Sci-Fi',
    director: 'Francis Lawrence',
    Writer:
      'Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington',
    Actors: 'Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield',
    Plot: 'years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
    Language: 'English',
    country: 'USA',
    Awards: '9 wins & 21 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg',
    Metascore: '65',
    imdbRating: '7.2',
    imdbVotes: '533,874',
    imdbID: 'tt0480249',
    Type: 'movie',
    Response: 'True',
    images: [
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg'
    ]
  },
  {
    id: 3,
    title: '300',
    year: '2006',
    rate: 'R',
    released: '09 Mar 2007',
    runtime: '117 min',
    genre: 'Action, Drama, Fantasy',
    director: 'Zack Snyder',
    Writer:
      'Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)',
    Actors: 'Gerard Butler, Lena Headey, Dominic West, David Wenham',
    Plot: 'King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.',
    Language: 'English',
    country: 'USA',
    Awards: '16 wins & 42 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg',
    Metascore: '52',
    imdbRating: '7.7',
    imdbVotes: '611,046',
    imdbID: 'tt0416449',
    Type: 'movie',
    Response: 'True',
    images: [
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg'
    ]
  },
  {
    id: 4,
    title: 'The Avengers',
    year: '2012',
    rate: 'PG-13',
    released: '04 May 2012',
    runtime: '143 min',
    genre: 'Action, Sci-Fi, Thriller',
    director: 'Joss Whedon',
    Writer: 'Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)',
    Actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
    Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    Language: 'English, Russian',
    country: 'USA',
    Awards: 'Nominated for 1 Oscar. Another 34 wins & 75 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg',
    Metascore: '69',
    imdbRating: '8.1',
    imdbVotes: '1,003,301',
    imdbID: 'tt0848228',
    Type: 'movie',
    Response: 'True',
    images: [
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg'
    ]
  },
  {
    id: 5,
    title: 'The Wolf of Wall Street',
    year: '2013',
    rate: 'R',
    released: '25 Dec 2013',
    runtime: '180 min',
    genre: 'Biography, Comedy, Crime',
    director: 'Martin Scorsese',
    Writer: 'Terence Winter (screenplay), Jordan Belfort (book)',
    Actors: 'Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey',
    Plot: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
    Language: 'English, French',
    country: 'USA',
    Awards: 'Nominated for 5 Oscars. Another 35 wins & 154 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
    Metascore: '75',
    imdbRating: '8.2',
    imdbVotes: '786,985',
    imdbID: 'tt0993846',
    Type: 'movie',
    Response: 'True',
    images: [
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg'
    ]
  },
  {
    id: 6,
    title: 'Interstellar',
    year: '2014',
    rate: 'PG-13',
    released: '07 Nov 2014',
    runtime: '169 min',
    genre: 'Adventure, Drama, Sci-Fi',
    director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 39 wins & 134 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '937,412',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True',
    images: [
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
    ]
  }
]
