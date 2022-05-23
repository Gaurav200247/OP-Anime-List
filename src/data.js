import {
  BsFacebook,
  BsTelegram,
  BsDiscord,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const MediaIcons = [
  {
    name: "Instagram",
    icon: <BsInstagram />,
    link: "https://www.instagram.com/?hl=en",
    color: "#de014d",
  },
  {
    name: "FaceBook",
    icon: <BsFacebook />,
    link: "https://www.facebook.com/",
    color: "#4867aa",
  },
  {
    name: "Telegram",
    icon: <BsTelegram />,
    link: "https://telegram.org/",
    color: "#32a9e0",
  },
  {
    name: "Discord",
    icon: <BsDiscord />,
    link: "https://www.discord.com/",
    color: "#5661ea",
  },
  {
    name: "Twitter",
    icon: <BsTwitter />,
    link: "https://www.twitter.com/",
    color: "#1da1f2",
  },
];

const SideBar_links = [
  { name: "Home", path: "/" },
  { name: "Top Manga", path: "/manga" },
  { name: "Manga Recomendations", path: "/mangarecomendations" },
  { name: "Top Anime", path: "/animes" },
  { name: "Anime Recomendations", path: "/animerecomendations" },
  { name: "Top Characters", path: "/characters" },
  { name: "About Me", path: "/about" },
];

const genres = [
  {
    mal_id: 1,
    name: "Action",
    url: "https://myanimelist.net/anime/genre/1/Action",
    count: 4194,
  },
  {
    mal_id: 2,
    name: "Adventure",
    url: "https://myanimelist.net/anime/genre/2/Adventure",
    count: 3314,
  },
  {
    mal_id: 5,
    name: "Avant Garde",
    url: "https://myanimelist.net/anime/genre/5/Avant_Garde",
    count: 585,
  },
  {
    mal_id: 46,
    name: "Award Winning",
    url: "https://myanimelist.net/anime/genre/46/Award_Winning",
    count: 7,
  },
  {
    mal_id: 28,
    name: "Boys Love",
    url: "https://myanimelist.net/anime/genre/28/Boys_Love",
    count: 153,
  },
  {
    mal_id: 4,
    name: "Comedy",
    url: "https://myanimelist.net/anime/genre/4/Comedy",
    count: 6452,
  },
  {
    mal_id: 8,
    name: "Drama",
    url: "https://myanimelist.net/anime/genre/8/Drama",
    count: 2678,
  },
  {
    mal_id: 10,
    name: "Fantasy",
    url: "https://myanimelist.net/anime/genre/10/Fantasy",
    count: 3885,
  },
  {
    mal_id: 26,
    name: "Girls Love",
    url: "https://myanimelist.net/anime/genre/26/Girls_Love",
    count: 116,
  },
  {
    mal_id: 47,
    name: "Gourmet",
    url: "https://myanimelist.net/anime/genre/47/Gourmet",
    count: 108,
  },
  {
    mal_id: 14,
    name: "Horror",
    url: "https://myanimelist.net/anime/genre/14/Horror",
    count: 475,
  },
  {
    mal_id: 7,
    name: "Mystery",
    url: "https://myanimelist.net/anime/genre/7/Mystery",
    count: 755,
  },
  {
    mal_id: 22,
    name: "Romance",
    url: "https://myanimelist.net/anime/genre/22/Romance",
    count: 1973,
  },
  {
    mal_id: 24,
    name: "Sci-Fi",
    url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
    count: 2793,
  },
  {
    mal_id: 36,
    name: "Slice of Life",
    url: "https://myanimelist.net/anime/genre/36/Slice_of_Life",
    count: 1984,
  },
  {
    mal_id: 30,
    name: "Sports",
    url: "https://myanimelist.net/anime/genre/30/Sports",
    count: 684,
  },
  {
    mal_id: 37,
    name: "Supernatural",
    url: "https://myanimelist.net/anime/genre/37/Supernatural",
    count: 1522,
  },
  {
    mal_id: 41,
    name: "Suspense",
    url: "https://myanimelist.net/anime/genre/41/Suspense",
    count: 156,
  },
  {
    mal_id: 48,
    name: "Work Life",
    url: "https://myanimelist.net/anime/genre/48/Work_Life",
    count: 9,
  },
];

const genreColors = [
  "#F5CB5C",
  "#A9E190",
  "#FF331F",
  "#68EDC6",
  "#EF959D",
  "#118AB2",
  "#A06CD5",
  "#F5CB5C",
  "#A9E190",
  "#FF331F",
  "#68EDC6",
  "#EF959D",
  "#118AB2",
  "#A06CD5",
  "#F5CB5C",
  "#A9E190",
  "#FF331F",
  "#68EDC6",
  "#EF959D",
  "#118AB2",
  "#A06CD5",
];

export { MediaIcons, SideBar_links, genres, genreColors };
