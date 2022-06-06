import bluechip1Img from 'public/bluechip1.jpg';
import bluechip2Img from 'public/bluechip2.jpg';
import bluechip3Img from '/public/bluechip3.jpg';
import bluechip4Img from 'public/bluechip4.jpg';
import bluechip5Img from 'public/bluechip5.jpg';
import bluechipMain from 'public/bluechipMainBig.png';

import quiz1Img from 'public/quiz1.jpg';
import quiz2Img from 'public/quiz2.jpg';
import quiz3Img from 'public/quiz3.jpg';
import quiz4Img from 'public/quiz4.jpg';
import quiz5Img from 'public/quiz5.jpg';
import quizMain from 'public/quizMainBig.png';

import expenses1Img from 'public/expenses1.jpg';
import expenses2Img from 'public/expenses2.jpg';
import expenses3Img from 'public/expenses3.jpg';
import expenses4Img from 'public/expenses4.jpg';
import expenses5Img from 'public/expenses5.jpg';
import expensesMain from 'public/expensesMainBig.png';

export const projects = [
  {
    slug: 'bluechip',
    title: 'bluechip',
    description:
      'Company home page with blog, CMS. React, Redux, many custom components, SPA, RWD.',
    code: 'https://github.com/mapawel/bluechip',
    live: 'https://i-bluechip.pl/',
    creationDate: '2021-04-30',
    images: [
      {
        id: 'bluechip1',
        img: bluechip1Img,
      },
      {
        id: 'bluechip2',
        img: bluechip2Img,
      },
      {
        id: 'bluechip3',
        img: bluechip3Img,
      },
      {
        id: 'bluechip4',
        img: bluechip4Img,
      },
      {
        id: 'bluechip5',
        img: bluechip5Img,
      },
    ],
    detailProjectView: {
      title: 'bluechip corporate website - page with CMS',
      techUsedList: {
        listTitle: 'App tech stack:',
        techNames: [
          'React',
          'React Router',
          'Redux with Thunk',
          'Styled Components',
          'GSAP',
          'Moment',
          'Swiper',
          'GraphCMS',
          'Axios & GraphQL',
        ],
      },
      descriptionsForProject: [
        {
          id: 'ckp49iww072ud0b04f98tikrs',
          title: 'type',
          description: [
            'Single Page App with CMS abd Blog, Responsive Web Design.',
          ],
        },
        {
          id: 'ckp48gnko6q580b031ubaqso6',
          title: 'goal',
          description: [
            'Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
          ],
        },
        {
          id: 'ckp48ms946rwn0c54zjijwfc6',
          title: 'scope',
          description: [
            'creating a complete graphic design with logo, colors, fonts, graphic elements, style... (A-Z)',
            'selection of production technology, taking into account client hosting',
            'SEO optimization',
            'connecting with backend / CMS and proposing a solution for backend / CMS taking into account project maintenance costs',
            'CMS launch',
            "project deploy on the customer's hosting",
          ],
        },
        {
          id: 'ckp49s7rk776y0c53z1ky78s7',
          title: 'design',
          description: [
            'Clear and transparent, classic, giving a sense of trust. Glassomorphism elements was used.',
          ],
        },
        {
          id: 'ckp49fahk71nt0b03v7a2janq',
          title: 'solutions',
          description: [
            "Website's front was created with use of React what gave static files after project build which can be hosted on customer's hosting. \nThe use of React Router gave the website speed. GSAP was used for animations giving some dynamic experience on the website. All components are cusom ones (even the accordion in the offer view and pagination in the blog view) - Styled Components was used to prepare them. The website uses underneath Redux which collects data from CMS / data-base. Redux gets the data using Axios, Thunk, GraphQL and prevents multiple data fetch when data is present (to save API Calls).",
            'For backend / CMS the GraphCMS and their free plan was used. It gives rapid text changing possibility, adding new information in all sections and views, new cards, new elements by puting just some text in GraphCMS Content. Also design of some elements can be easily change in CMS by some meta-data change.',
            'Customer have a possibility of adding blog posts in CMS, deleting old posts etc.',
          ],
        },
      ],
      mainImage: bluechipMain,
    },
  },
  {
    slug: 'quizgame',
    title: 'Quiz Game',
    description:
      'Game app with custom auth, database with users and game results, Server Side Rendering, Express.js, MongoDB, RWD',
    code: 'https://github.com/mapawel/quiz-game---full-stack-app',
    live: 'https://warm-harbor-74468.herokuapp.com/',
    creationDate: '2021-01-31',
    images: [
      {
        id: 'quiz1',
        img: quiz1Img,
      },
      {
        id: 'quiz2',
        img: quiz2Img,
      },
      {
        id: 'quiz3',
        img: quiz3Img,
      },
      {
        id: 'quiz4',
        img: quiz4Img,
      },
      {
        id: 'quiz5',
        img: quiz5Img,
      },
 
    ],
    detailProjectView: {
      title: 'Quiz Game - fulll stack SSR with auth and database',
      techUsedList: {
        listTitle: 'App tech stack:',
        techNames: [
          'Node.js -> Express.js',
          'MongoDB -> Mongoose',
          'Express React Views',
          'Nodemailer',
          'Bcryptjs',
          'Express Flash Message',
          'Express Validator',
          'Multer',
          'Moment',
        ],
      },
      descriptionsForProject: [
        {
          id: 'ckp49zw0075v60c54iu1zp6l7',
          title: 'type',
          description: [
            'Server Side Rendering App, Responsive Web Design, full stack with data base, auth.',
          ],
        },
        {
          id: 'ckp4ac0q878yi0c543omb2pus',
          title: 'goal',
          description: [
            'The goal was to present a Server-Side Rendering App and compare its way of operation to SPA. Cookies, auth module, server validation... all is here.',
          ],
        },
        {
          id: 'ckp4aj4wg79zp0c55bxbp6i98',
          title: 'design',
          description: [
            "The design wasn't the most important point here so Bulma library was used to make the work faster however it's clear and universal, ilustrations were used to create more attractive views.",
            "The app's views are dynamically generated on server - for creating these views Express React Views library was used.",
          ],
        },
        {
          id: 'ckp4az4io7e3n0c55ui8ahuf0',
          title: 'solutions',
          description: [
            "Whole App coded in JS on Node.js with use of Express.js. Server with Node generates html files which are displied in user's web browser - they are custom and depend on user's behaving. Also static JS files are served what is important to give the game smooth run (time lapse effect). App uses Mongo DB to store users' data and game data and express-session and cookies to keep user logged in, to log out etc.",
            'The application includes a fairly extensive auth module with full data validation and authentication via mail - Nodemailer used. User account editing and deletion possible. Validation on the server is possible due to use of Express Validator, Photos (Avatars) can be hadled by Multer.',
          ],
        },
        {
          id: 'ckp4bov7s7lnt0b03xsi2rges',
          title: 'statistics, cheating',
          description: [
            'All registered users can build game results history and have acces to statistics view where basic game data are displaied. You can also play the game as a Guest user and if you make registration later you can merge your guest data to your account.',
            'The app is cheating proof - no data about right answer is sent to front-end before giving the answer by user. User cannot see the same question two times if he knows the answer...',
          ],
        },
        {
          id: 'ckp4brtp47j4n0c5419jhr96e',
          title: 'custom clock',
          description: [
            'The clock component is coded from scratch. It shows time available for answer but final time is additionally measured by server to prevent cheating by stoping JS in the browser.',
          ],
        },
      ],
      mainImage: quizMain,
    },
  },
  {
    slug: 'expensesplanner',
    title: 'expenses planner',
    description:
      'React, Redux, React Router, Styled Components, Formik, my own calendar project, SPA, RWD',
    code: 'https://github.com/mapawel/react-expenses-planner',
    live: 'https://stoic-leavitt-bd046f.netlify.app/dashboard',
    creationDate: '2020-11-01',
    images: [
      {
        id: 'expenses1',
        img: expenses1Img,
      },
      {
        id: 'expenses2',
        img: expenses2Img,
      },
      {
        id: 'expenses3',
        img: expenses3Img,
      },
      {
        id: 'expenses4',
        img: expenses4Img,
      },
      {
        id: 'expenses5',
        img: expenses5Img,
      },

    ],
    detailProjectView: {
      title: 'Expenses Planner - front-end for web app',
      techUsedList: {
        listTitle: 'App tech stack:',
        techNames: [
          'React',
          'Redux',
          'React Router',
          'Styled Components',
          'Formik',
          'Moment',
        ],
      },
      descriptionsForProject: [
        {
          id: 'ckp4c5nds7qf70b03hybcoyml',
          title: 'type',
          description: [
            'Single Page Aplication, Responsive Web Design, Front End only.',
          ],
        },
        {
          id: 'ckp4ce7947pua0b06t7ed2gep',
          title: 'goal',
          description: [
            "The goal here was to create a front-end for a new app. The app still requires to add a backend however to make possible app's frontend test it uses local starage.",
            'The App will help users to plan their expenses, will remind about payments and will help to keep all up to date - just check.',
          ],
        },
        {
          id: 'ckp4hpfig99w30c55gt518bjf',
          title: 'design',
          description: [
            'The design is based on cards. Simplicity is broken by a wave that smoothly separates the sections on the dashboard view. One main color plus white and grey give clarity. Depending the view, there is white or blue backgroud shown for easier navigation on the app.',
            'Pretty interesting menu bar coded with icons and color indentation in the bar when active.',
          ],
        },
        {
          id: 'ckp4i8s9s9ems0c558pv6sm0t',
          title: 'solutions',
          description: [
            'React Router used for rapid views changing. Redux used to collect and store data - for now locale storage used, however the app can be easly connected to the API with data-base.',
            'Callender view is fully custom component. It shows payments day by day, status of the payment, ammount to pay or paid. If there is more payment any day than could be displayed it automatically shows total ammount as a short version of the information displayed. You can use callender to navigate to payments to see details.',
            'User can add single payment or whole payments cycles (paid every week, month etc.). Then after paying, user can change status, ammount and add a note for each payment. User can modify his records. All information can be displayed by month, by day and day by day on callendar view. Short information for user about his total spendings for whole month are available.',
            'Front-end validation obtained by Formik. All elements are styled by Styled Components. Atomic Design attitude used.',
          ],
        },
      ],
      mainImage: expensesMain,
    },
  },

  // {
  //   id: 'ckh9h680800j80b54bhz5nh8i',
  //   title: 'positive thinker',
  //   description:
  //     'React, Material UI, Firestore, Firebase storage, Authentication, Formik, Toastify, SPA, RWD',
  //   code: 'https://github.com/mapawel/react-positive-thinker',
  //   live: 'https://zealous-mccarthy-a4e6d9.netlify.app/',
  //   creationDate: '2020-10-01',
  //   images: [
  //     {
  //       id: 'ckorhiii8k19w0c57usnhkwrk',
  //       small: {
  //         url: 'https://media.graphassets.com/vraP1j9LRXCb2NCeZpUi',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/MmROePZSTGTUiT0xykCh',
  //       },
  //     },
  //     {
  //       id: 'ckorhk908jza70a01w9kv3nyg',
  //       small: {
  //         url: 'https://media.graphassets.com/UfNb1AkkQzyQmnPuUtew',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/AEdobo79R2i7fRv7un2J',
  //       },
  //     },
  //     {
  //       id: 'ckorhltc0k27o0c5729up4p82',
  //       small: {
  //         url: 'https://media.graphassets.com/RKKs1V7SFaUQHdgyB9g6',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/mjOaS8nS0dkbDO0Jjxcw',
  //       },
  //     },
  //     {
  //       id: 'ckorhmexsk3100d47sdnhf0w2',
  //       small: {
  //         url: 'https://media.graphassets.com/XG6uegItQP2t3Qu6axLM',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/pyPwt9EWSIR7XbCfb2PQ',
  //       },
  //     },
  //     {
  //       id: 'ckorhn4egk03k0a0138oji7c1',
  //       small: {
  //         url: 'https://media.graphassets.com/blFHZh8wRaKtFGcIkJtu',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/9bMPWwLuTjehESLtU5VQ',
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 'ckh9hamyg00ro0c55vmfzb9bb',
  //   title: 'meal searcher',
  //   description: 'JavaScript, HTML, CSS/SASS, Public API, RWD',
  //   code: 'https://github.com/mapawel/meal-searcher',
  //   live: 'https://mapawel.github.io/meal-searcher/',
  //   creationDate: '2020-09-01',
  //   images: [
  //     {
  //       id: 'ckorj6ww0kaev0d12cxhs83wv',
  //       small: {
  //         url: 'https://media.graphassets.com/pWdWYHyQSO8srkNp6l2D',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/1X3RH2pYRgWr7e0yq2VO',
  //       },
  //     },
  //     {
  //       id: 'ckorj7k1ckdze0b55awn7o38y',
  //       small: {
  //         url: 'https://media.graphassets.com/9fSKomkcSyqSmVc54c1p',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/0rMLup2USh2MFwRs7yGV',
  //       },
  //     },
  //     {
  //       id: 'ckorja6y0kb6w0a011yaxjh6i',
  //       small: {
  //         url: 'https://media.graphassets.com/xkYbD1JZSGyEmG8AABKF',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/iT6QdXXHQnam0nAdN17h',
  //       },
  //     },
  //     {
  //       id: 'ckorjaoowkdtk0c576nser1ex',
  //       small: {
  //         url: 'https://media.graphassets.com/08MRoEp4QYS6aWc33os3',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/mkgKawezQfkhbA5bTNFv',
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 'ckh9h9wq001d90a57x2jcbj7e',
  //   title: 'myMemo',
  //   description:
  //     'JavaScript, CSS, WebComponents (Custom elements, Shadow DOM), local storage, RWD',
  //   code: 'https://github.com/mapawel/myMemo',
  //   live: 'https://mapawel.github.io/myMemo/',
  //   creationDate: '2020-08-01',
  //   images: [
  //     {
  //       id: 'ckorjbmn4kdt00c09p3i83sq5',
  //       small: {
  //         url: 'https://media.graphassets.com/iyswBa1qQ6eDykWwfpwx',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/XhP0DPnDQrGs712tZCF6',
  //       },
  //     },
  //     {
  //       id: 'ckorjc55skbhz0d12zyypytlv',
  //       small: {
  //         url: 'https://media.graphassets.com/gqvpSKVRieZ4iHvyZjIV',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/nOpAYlprROWoR7eEUaaN',
  //       },
  //     },
  //     {
  //       id: 'ckorjcklckbkc0d12pz9g9zr3',
  //       small: {
  //         url: 'https://media.graphassets.com/Rj1xQUjTZWcecZIQBRjf',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/y09Q2i6RSZOAgVgQOf8o',
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 'ckh9hc47400s00956k9bsh8u4',
  //   title: 'active menu',
  //   description:
  //     'JavaScript responsive menu for mobile and desktop with scroll spy, magic line, animated burger, animated. Element to use on web pages',
  //   code: 'https://github.com/mapawel/full-active-js-menu',
  //   live: 'https://full-active-js-menu.now.sh/',
  //   creationDate: '2020-07-01',
  //   images: [
  //     {
  //       id: 'ckorjdfggkbqd0a01p737sq43',
  //       small: {
  //         url: 'https://media.graphassets.com/Ch8LiIuXRWnoNDgWT0bq',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/GUfWcdHTTJ63kH95pkw3',
  //       },
  //     },
  //     {
  //       id: 'ckorjdziokbu10a01su0wv4qt',
  //       small: {
  //         url: 'https://media.graphassets.com/hx7pruwSDKUwJPQfLAGu',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/C34CJQnzS7mV6stqMabY',
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 'ckh9hbfi800t30b54pis9r2ah',
  //   title: 'takiStyl',
  //   description:
  //     'HTML, CSS/SASS, RWD, Bootstrap elements, JavaScript, Slick, RWD, example of a standard web page',
  //   code: 'https://github.com/mapawel/takiSTYL',
  //   live: 'https://mapawel.github.io/takiSTYL/',
  //   creationDate: '2020-06-01',
  //   images: [
  //     {
  //       id: 'ckorjf7i0keh60c0936kbbqui',
  //       small: {
  //         url: 'https://media.graphassets.com/prAqF9sBRhezlrkt1yqw',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/r8wDUX63SdmKI2bafV62',
  //       },
  //     },
  //     {
  //       id: 'ckorjfqsgkemz0c09rqeqhm9l',
  //       small: {
  //         url: 'https://media.graphassets.com/9Y9sKrF6Soij5kqvWkXO',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/LVg8grqUS2mYxklyt3ie',
  //       },
  //     },
  //     {
  //       id: 'ckorjgepkkcb20a019xmqjyfq',
  //       small: {
  //         url: 'https://media.graphassets.com/BPkYAftnSLGj5mnb1X4L',
  //       },
  //       big: {
  //         url: 'https://media.graphassets.com/xQEac5PuRAi4Q31fhlGy',
  //       },
  //     },
  //   ],
  // },
];
