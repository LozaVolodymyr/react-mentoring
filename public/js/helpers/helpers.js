function getMoviesJSON() {
  const movieArray = [
    {
      id: 412302,
      title: 'Gemini',
      tagline: '',
      vote_average: 10,
      vote_count: 3,
      release_date: '2018-03-30',
      poster_path: 'https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg',
      overview: 'A heinous crime tests the complex relationship between a tenacious personal assistant and her Hollywood starlet boss. As the assistant travels across Los Angeles to unravel the mystery, she must stay one step ahead of a determined policeman and confront her own understanding of friendship, truth and celebrity.',
      budget: 0,
      revenue: 0,
      genres: [
        'Mystery',
        'Thriller',
      ],
      runtime: 92,
    },
    {
      id: 19404,
      title: 'Dilwale Dulhania Le Jayenge',
      tagline: 'Come... Fall in Love',
      vote_average: 9.2,
      vote_count: 1297,
      release_date: '1995-10-20',
      poster_path: 'https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg',
      overview: 'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
      budget: 13200000,
      revenue: 100000000,
      genres: [
        'Comedy',
        'Drama',
        'Romance',
      ],
      runtime: 190,
    },
    {
      id: 425895,
      title: 'Tisay',
      tagline: '',
      vote_average: 9,
      vote_count: 1,
      release_date: '2016-11-14',
      poster_path: 'https://image.tmdb.org/t/p/w500/lt03HzS8tfDg5ipUQcLqIRNs0sC.jpg',
      overview: 'In the world of semi-pro basketball, a beautiful bookie recruits a naïve but promising player to the underworld of game-fixing.',
      budget: 0,
      revenue: 0,
      genres: [
        'Drama',
        'Romance',
      ],
      runtime: 100,
    },
    {
      id: 511679,
      title: 'Héctor El Father: Conocerás la verdad',
      tagline: '',
      vote_average: 8.8,
      vote_count: 5,
      release_date: '2018-03-22',
      poster_path: 'https://image.tmdb.org/t/p/w500/jwJoURyfm4XxtnYRtIOS2pYR9Np.jpg',
      overview: '',
      budget: 0,
      revenue: 0,
      genres: [
        'Drama',
      ],
      runtime: 90,
    },
    {
      id: 278,
      title: 'The Shawshank Redemption',
      tagline: 'Fear can hold you prisoner. Hope can set you free.',
      vote_average: 8.6,
      vote_count: 9868,
      release_date: '1994-09-23',
      poster_path: 'https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
      overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
      budget: 25000000,
      revenue: 28341469,
      genres: [
        'Drama',
        'Crime',
      ],
      runtime: 142,
    },
  ];
  return movieArray;
}

const Helpers = {
  getMoviesJSON,
};

export default Helpers;
