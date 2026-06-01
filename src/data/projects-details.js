const yellowGreen = "#9acd32";
const teal = "#6cc7ce";
const darkPink = "#c55164";
const brown = "#b24e07";
const darkOrange = "#d79926";
const darkRed = "#b83131";

export const homemadeProjects = [
  {
    id: "self-taught",
    color: darkOrange,
    showGif: true,
    name: "Landing page project",
    year: "2020",
    technologies: "HTML, CSS, JS, Waypoints",
    summary:
      "A standalone web page, created specifically for an educational organization as well as advertising campaign. It’s where a visitor “lands” when they click on website's link, or ads. Here's a self-taught project I learned to improve my front-end skills, a page which is weirdy also named SelfTaught 📰",
    challenges: ["The first time I dig deep to multiple aspects of HTML, CSS"],
    githubUrl: "https://github.com/thugiang61/self-taught",
    webUrl: "https://thugiang61.github.io/self-taught",
  },
  {
    id: "music-player",
    color: teal,
    showGif: true,
    name: "Simple music player",
    year: "2021",
    technologies: "HTML, CSS, JS",
    summary:
      "A program brings music on your browers, which is simply built on 3 basic elements of a website: HTML, CSS and JS. If you want to listen to Daft Punk or Coldplay, go to this place! It has all general functionalities of a music software. I built this website mainly to explore deeper JS, and it's truly a magical programming language that can make a website highly dynamic 🎧",
    challenges: ["Self learned multiple useful functions of JS"],
    githubUrl: "https://github.com/thugiang61/music-player",
    webUrl: "https://thugiang61.github.io/music-player",
  },
  {
    id: "bulky-book-web",
    color: darkPink,
    showGif: true,
    name: "Bulky book web",
    year: "2021",
    technologies: "C#, MVC, SQL LocalDB, Google OAuth, Azure Portal",
    summary:
      "One thing you must know about me, I love reading book! And I know other people do too! Therefore, I made this website to help a user can manage his/ her favorite books. You can store every books you care about here, along with theirs attributes such as status, price, your ratings, ... This will help your reading becomes a lot easier and more managable 📖",
    challenges: [
      "Self learned newly released .NET version at that time: .NET 6.0",
    ],
    githubUrl: "https://github.com/thugiang61/BulkyBookWeb2",
    webUrl: "https://bulky-book-web-2.azurewebsites.net",
  },
];

export const workProjects = [
  {
    id: "api-customer-order",
    color: brown,
    showGif: false,
    name: "API customer order",
    agency: "LogiVietfrance",
    year: "2022 - now",
    client: "SOGET S.A.",
    role: "Back-end developer",
    technologies: "C#, .NET, SQL, Keycloak, Newtonsoft, FluentValidation,...",
    summary:
      "This platform provides transmission and tracking system for transport orders at every stage of their journey. This solution is accessible either through web access or by directly integrating it with Transportation Management System (TMS) using an API key 🚚",
    challenges: [
      "Complicated business handling that intertwines between applications in TMS ",
      "This is a very broad project that has been developing for more than 2 years and I had to analyze long document as well as wide range of code",
      "Study logistics business and TMS as well as Soget ecosystem ",
      "Working with quite limited tools because of safety reasons",
      "Using an older version of .NET ",
      "As one of the most important project of the company, the application must have a good level of security",
    ],
  },
  {
    id: "customer-order-web",
    color: darkRed,
    showGif: false,
    name: "Customer order web",
    agency: "LogiVietfrance",
    year: "2022 - now",
    client: "SOGET S.A.",
    role: "Front-end developer",
    technologies: "HTML, SCSS, VueJS,  Buefy, Bulma, Keycloak",
    summary:
      "An interactive interface version of API customer order project. Developed collaboratively by SOGET and S2Pweb, two primitive specialists in road and transport tracking, this innovative tool ensures seamless monitoring and management of a cargo throughout its entire route 🤝",
    challenges: [
      "Rebuild a new UI from scratch",
      "Learn VueJS and Buefy on the way",
    ],
  },
  {
    id: "plan-s",
    color: yellowGreen,
    showGif: false,
    name: "Plan-s web",
    agency: "LogiVietfrance",
    year: "2022",
    client: "LogiYonne",
    role: "Full-stack developer",
    technologies:
      "HTML, SCSS, ThreeJS, jsPDF, VueJS,  Buefy, Bulma, Firebase, .NET",
    summary:
      "This application is a tool where you can insert all the cagoes you want in order to analyze and get the most optimal way to load them on a container or a barge. All loading plan will be generated into 3D model and you can interact with it as well as export the solution. This online software will help you organize your logistics stock easily and effectively 📦",
    challenges: [
      "The loading logic is very hard and requires advanced mathematics calculation",
      "Learning TheeJS ro render models on the fly",
      "Main front-end developer of this project",
    ],
  },
];

export const allProjects = homemadeProjects.concat(workProjects);
