type Item = {
  id: number;
  language: string;
  experience: number;
  logo: string;
}[];

export default [
  {
    id: 1,
    language: "JavaScript",
    experience: 5,
    logo: require("./assets/images/JS_logo.png"),
  },
  {
    id: 2,
    language: "PHP",
    experience: 2,
    logo: require("./assets/images/PHP_logo.png"),
  },
  {
    id: 3,
    language: "Go",
    experience: 1,
    logo: require("./assets/images/Go_logo.png"),
  },
  {
    id: 4,
    language: "TypeScript",
    experience: 4,
    logo: require("./assets/images/TS_logo.png"),
  },
  {
    id: 5,
    language: "Python",
    experience: 5,
    logo: require("./assets/images/Python_logo.png"),
  },
] satisfies Item;
