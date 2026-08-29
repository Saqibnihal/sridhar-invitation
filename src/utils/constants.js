// import brideImage from '';
import groomImage from '../assets/boy.jpeg';
import brideImage from '../assets/girl.jpeg';

// Wedding Data Constants
export const WEDDING_DATA = {
  bride: {
    name: 'Jennifer',
    fullName: 'Jennifer Fatima',
    parents: 'Daughter of Mr. John Damien & Mrs. Lourdu Mercy',
    intro: 'A soul full of grace, kindness, and endless love. Her smile lights up every room she enters.',
    image: brideImage,
  },
  groom: {
    name: 'Sridhar',
    fullName: 'Sridhar Patrick',
    parents: 'Son of Mr. Rajendran & Mrs. Veeramani',
    intro: 'A heart of gold with an unwavering spirit. His love for life is matched only by his love for Jenny.',
    image: groomImage,
  },
  weddingDate: '2026-09-14T10:00:00',
  tagline: 'Two Souls, One Journey',
  quote: '"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."',
  quoteAuthor: '— Maya Angelou',
};

export const STORY_MILESTONES = [
  {
    id: 1,
    title: 'First Meeting',
    date: 'July 10, 2025',
    description:
      'Their paths first crossed at work, where she was an HR professional and he was an employee. What began as a professional connection soon became the beginning of something truly special.',
    icon: 'sparkles',
  },
  {
    id: 2,
    title: 'Friendship Blossomed',
    date: 'July, Aug 2025',
    description:
      'As they got to know each other, conversations became longer, laughter came easier, and a beautiful friendship began to grow. Somewhere along the way, they realized this connection was becoming something more.',
    icon: 'coffee',
  },
  {
    id: 3,
    title: 'The Proposal',
    date: 'September 15, 2025',
    description:
      'What started as a friendship had blossomed into love. On September 15, 2025, they took the next step and promised to walk through life together, beginning their journey toward forever.',
    icon: 'ring',
  },
  {
    id: 4,
    title: 'Families & Friends',
    date: 'February 4, 2026',
    description:
      'The love they shared was ready to become a part of their bigger world. On February 4, 2026, they introduced each other to their family and friends, bringing the people they loved closer together.',
    icon: 'heart',
  },
  {
    id: 5,
    title: 'The Engagement',
    date: 'March 20, 2026',
    description:
      'Surrounded by the love and blessings of their families and friends, they made their commitment official. On March 20, 2026, they celebrated their engagement and took one beautiful step closer to forever.',
    icon: 'heart',
  },
  {
    id: 6,
    title: 'The Wedding',
    date: 'September 14, 2026',
    description:
      'And now, the moment they have been waiting for. On September 14, 2026, two hearts, two families, and two journeys will come together as they begin their forever story as one.',
    icon: 'wedding',
  },
];


export const EVENTS = [
  {
    id: 1,
    name: 'Pre-Wedding Photoshoot',
    date: 'Coming Soon',
    time: 'To Be Announced',
    venue: 'To Be Announced',
    description:
      'A beautiful day capturing the love, laughter, and memories of two hearts before they begin their forever journey together.',
    icon: 'sun',
    color: '#D4AF37',
  },
  {
    id: 2,
    name: 'Wedding Ceremony',
    date: 'September 14, 2026',
    time: '4 PM',
    venue: 'Our Lady of Lourdes Church',
    description:
      'Join us as we exchange our vows and begin our forever together in the presence of our loved ones and God.',
    icon: 'rings',
    color: '#800020',
  },
  {
    id: 3,
    name: 'Reception',
    date: 'September 14, 2026',
    time: '6 PM Onwards',
    venue: 'Vani Palace',
    description:
      'Come celebrate our new beginning with an evening filled with love, laughter, good food, and beautiful memories.',
    icon: 'champagne',
    color: '#D4AF37',
  },
];


export const VENUE = {
  ceremony: {
    name: 'Our Lady of Lourdes Church',
    address: '47, Raja Rajeswari Nagar 3rd Cross St, Ganesh Nagar, Iyappa Nagar, Madipakkam, Chennai, Tambaram, Tamil Nadu 600091',
    date: 'September 14, 2026',
    time: '4:00 PM',
    mapUrl: 'https://maps.app.goo.gl/2o1iFZ525rg9iHu46',
  },
  reception: {
    name: 'Vani Palace',
    address: 'Echankadu Junction HP Bunk, Thiruvin Nagar, Boopathy Nagar, Keelkattalai, Chennai, Tamil Nadu 600117',
    date: 'September 14, 2026',
    time: '6:00 PM Onwards',
    mapUrl: 'https://maps.app.goo.gl/F86kpNa1f7UK4n548',
  },
};

export const SAMPLE_BLESSINGS = [
  {
    id: 1,
    name: 'Team V5',
    relation: 'Friends For Life',
    message: 'May your love story be as beautiful as a thousand sunsets. Wishing you both a lifetime of happiness, laughter, and endless love.',
    avatar: 'PR',
  },
  {
    id: 2,
    name: 'Auntie Rajeshwari',
    relation: 'Family',
    message: 'Watching you both grow together has been the most beautiful thing. May God bless your union with everlasting joy and prosperity.',
    avatar: 'AR',
  },
  {
    id: 3,
    name: 'Seetha',
    relation: 'Gradma',
    message: 'From playground days to this beautiful day — we always knew you two were meant for each other. Here\'s to forever!',
    avatar: 'S',
  }
];

export const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'couple', label: 'Couple' },
  { id: 'events', label: 'Events' },
  { id: 'venue', label: 'Venue' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'blessings', label: 'Blessings' },
];

export const LOVE_QUOTES = [
  '"Whatever our souls are made of, his and mine are the same." — Emily Brontë',
  '"I have found the one whom my soul loves." — Song of Solomon 3:4',
  '"Grow old along with me! The best is yet to be." — Robert Browning',
  '"In all the world, there is no heart for me like yours." — Maya Angelou',
];
