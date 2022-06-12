import bluechip1Img from 'public/images/bluechip/bluechip1.jpg';
import bluechip2Img from 'public/images/bluechip/bluechip2.jpg';
import bluechip3Img from 'public/images/bluechip/bluechip3.jpg';
import bluechip4Img from 'public/images/bluechip/bluechip4.jpg';
import bluechip5Img from 'public/images/bluechip/bluechip5.jpg';
import bluechipMain from 'public/images/bluechip/bluechipMainBig.png';

import quiz1Img from 'public/images/quizgame/quiz1.jpg';
import quiz2Img from 'public/images/quizgame/quiz2.jpg';
import quiz3Img from 'public/images/quizgame/quiz3.jpg';
import quiz4Img from 'public/images/quizgame/quiz4.jpg';
import quiz5Img from 'public/images/quizgame/quiz5.jpg';
import quizMain from 'public/images/quizgame/quizMainBig.png';

import expenses1Img from 'public/images/expensesplanner/expenses1.jpg';
import expenses2Img from 'public/images/expensesplanner/expenses2.jpg';
import expenses3Img from 'public/images/expensesplanner/expenses3.jpg';
import expenses4Img from 'public/images/expensesplanner/expenses4.jpg';
import expenses5Img from 'public/images/expensesplanner/expenses5.jpg';
import expensesMain from 'public/images/expensesplanner/expensesMainBig.png';

export const projects = [
  {
    slug: 'bluechip',
    title: {
      en: 'bluechip',
      pl: 'bluechip',
    },
    description: {
      en: 'Company home page with blog. CMS included.',
      pl: 'Strona firmowa z blogiem. Zarządzanie z CMS.',
    },
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
      title: {
        en: 'bluechip corporate website - page with blog and CMS integration',
        pl: 'strona firmowa bluechip z blogiem i integracją CMS',
      },
      scopeList: {
        listTitle: {
          en: 'Project scope:',
          pl: 'Zakres projektu:',
        },
        scopeTxts: {
          en: [
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
          pl: [
            'pl React',
            'React Router',
            'Redux with Thunk',
            'Styled Components',
            'GSAP',
            'Moment',
            'Swiper',
            'GraphCMS',
            'pl Axios & GraphQL',
          ],
        },
      },
      descriptionsForProject: [
        {
          id: 'ckp49iww072ud0b04f98tikrs',
          title: {
            en: 'type',
            pl: 'pl type',
          },
          description: {
            en: ['Single Page App with CMS abd Blog, Responsive Web Design.'],
            pl: [
              'pl Single Page App with CMS abd Blog, Responsive Web Design.',
            ],
          },
        },
        {
          id: 'ckp48gnko6q580b031ubaqso6',
          title: {
            en: 'goal',
            pl: 'pl goal',
          },
          description: {
            en: [
              'Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
            pl: [
              'pl Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
          },
        },
        {
          id: 'ckp49iww072ud0bwertf98tikrs',
          title: {
            en: 'type',
            pl: 'pl type',
          },
          description: {
            en: ['Single Page App with CMS abd Blog, Responsive Web Design.'],
            pl: [
              'pl Single Page App with CMS abd Blog, Responsive Web Design.',
            ],
          },
        },
        {
          id: 'ckp48gnko6q543b031ubaqso6',
          title: {
            en: 'goal',
            pl: 'pl goal',
          },
          description: {
            en: [
              'Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
            pl: [
              'pl Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
          },
        },
      ],
      mainImage: bluechipMain,
    },
    technicalDetailsView: {
      techStact: {
        en: [
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
        pl: [
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
      techDescriptions: [
        {
          id: 'ckp49iww072ud0b04f98tikrs',
          title: { en: 'type', pl: 'typ' },
          description: {
            en: ['Single Page App with CMS abd Blog, Responsive Web Design.'],
            pl: ['PLSingle Page App with CMS abd Blog, Responsive Web Design.'],
          },
        },
        {
          id: 'ckp49fahk71nt0b03v7a2janq',
          title: { en: 'solutions', pl: 'rozwiązania' },
          description: {
            en: [
              "Website's front was created with use of React what gave static files after project build which can be hosted on customer's hosting. \nThe use of React Router gave the website speed. GSAP was used for animations giving some dynamic experience on the website. All components are cusom ones (even the accordion in the offer view and pagination in the blog view) - Styled Components was used to prepare them. The website uses underneath Redux which collects data from CMS / data-base. Redux gets the data using Axios, Thunk, GraphQL and prevents multiple data fetch when data is present (to save API Calls).",
              'For backend / CMS the GraphCMS and their free plan was used. It gives rapid text changing possibility, adding new information in all sections and views, new cards, new elements by puting just some text in GraphCMS Content. Also design of some elements can be easily change in CMS by some meta-data change.',
              'Customer have a possibility of adding blog posts in CMS, deleting old posts etc.',
            ],
            pl: [
              "Website's front was created with use of React what gave static files after project build which can be hosted on customer's hosting. \nThe use of React Router gave the website speed. GSAP was used for animations giving some dynamic experience on the website. All components are cusom ones (even the accordion in the offer view and pagination in the blog view) - Styled Components was used to prepare them. The website uses underneath Redux which collects data from CMS / data-base. Redux gets the data using Axios, Thunk, GraphQL and prevents multiple data fetch when data is present (to save API Calls).",
              'For backend / CMS the GraphCMS and their free plan was used. It gives rapid text changing possibility, adding new information in all sections and views, new cards, new elements by puting just some text in GraphCMS Content. Also design of some elements can be easily change in CMS by some meta-data change.',
              'Customer have a possibility of adding blog posts in CMS, deleting old posts etc.',
            ],
          },
        },
      ],
    },
  },
  {
    slug: 'quizgame',
    title: {
      en: 'Quiz Game',
      pl: 'Quiz Game',
    },
    description: {
      en: 'Quiz game app with statistics and users accounts.',
      pl: 'Gra webowa Quiz. Zawiera statystyki i strefy użytkowników.',
    },
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
      title: {
        en: 'Quiz Game - fulll stack SSR with auth and database',
        pl: 'Quiz - gra webowa, aplikacja serwerowa z obsługą bazy danych',
      },
      scopeList: {
        listTitle: {
          en: 'Project scope:',
          pl: 'Zakres projektu:',
        },
        scopeTxts: {
          en: [
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
          pl: [
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
      },
      descriptionsForProject: [
        {
          id: 'ckp49iww072ud0b04f98tikrs',
          title: {
            en: 'type',
            pl: 'type',
          },
          description: {
            en: ['Single Page App with CMS abd Blog, Responsive Web Design.'],
            pl: ['Single Page App with CMS abd Blog, Responsive Web Design.'],
          },
        },
        {
          id: 'ckp48gnko6q580b031ubaqso6',
          title: {
            en: 'goal',
            pl: 'goal',
          },
          description: {
            en: [
              'Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
            pl: [
              'Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
          },
        },
        {
          id: 'ckp49iww072ud0bwertf98tikrs',
          title: {
            en: 'type',
            pl: 'type',
          },
          description: {
            en: ['Single Page App with CMS abd Blog, Responsive Web Design.'],
            pl: ['Single Page App with CMS abd Blog, Responsive Web Design.'],
          },
        },
        {
          id: 'ckp48gnko6q543b031ubaqso6',
          title: {
            en: 'goal',
            pl: 'goal',
          },
          description: {
            en: [
              'Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
            pl: [
              'Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
          },
        },
      ],
      mainImage: quizMain,
    },
  },
  {
    slug: 'expensesplanner',
    title: {
      en: 'Expenses Planner',
      pl: 'Planer Płatności',
    },
    description: {
      en: 'Front-end for app to expensess management.',
      pl: 'Front-end użytkowej aplikacji do zarządzania wydatkami.',
    },
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
      title: {
        en: 'Front-end for app to expensess management.',
        pl: 'Front-end użytkowej aplikacji do zarządzania wydatkami.',
      },
      scopeList: {
        listTitle: {
          en: 'Project scope:',
          pl: 'Zakres projektu:',
        },
        scopeTxts: {
          en: [
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
          pl: [
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
      },
      descriptionsForProject: [
        {
          id: 'ckp49iww072ud0b04f98tikrs',
          title: {
            en: 'type',
            pl: 'type',
          },
          description: {
            en: ['Single Page App with CMS abd Blog, Responsive Web Design.'],
            pl: ['Single Page App with CMS abd Blog, Responsive Web Design.'],
          },
        },
        {
          id: 'ckp48gnko6q580b031ubaqso6',
          title: {
            en: 'goal',
            pl: 'goal',
          },
          description: {
            en: [
              'Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
            pl: [
              'Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
          },
        },
        {
          id: 'ckp49iww072ud0bwertf98tikrs',
          title: {
            en: 'type',
            pl: 'type',
          },
          description: {
            en: ['Single Page App with CMS abd Blog, Responsive Web Design.'],
            pl: ['Single Page App with CMS abd Blog, Responsive Web Design.'],
          },
        },
        {
          id: 'ckp48gnko6q543b031ubaqso6',
          title: {
            en: 'goal',
            pl: 'goal',
          },
          description: {
            en: [
              'Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
            pl: [
              'Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
          },
        },
      ],
      mainImage: expensesMain,
    },
  },
];
