import bluechip1Img from 'public/images/projects/bluechip/bluechip1.jpg';
import bluechip2Img from 'public/images/projects/bluechip/bluechip2.jpg';
import bluechip3Img from 'public/images/projects/bluechip/bluechip3.jpg';
import bluechip4Img from 'public/images/projects/bluechip/bluechip4.jpg';
import bluechip5Img from 'public/images/projects/bluechip/bluechip5.jpg';
import bluechipMain from 'public/images/projects/bluechip/bluechipMainBig.png';

import quiz1Img from 'public/images/projects/quizgame/quiz1.jpg';
import quiz2Img from 'public/images/projects/quizgame/quiz2.jpg';
import quiz3Img from 'public/images/projects/quizgame/quiz3.jpg';
import quiz4Img from 'public/images/projects/quizgame/quiz4.jpg';
import quiz5Img from 'public/images/projects/quizgame/quiz5.jpg';
import quizMain from 'public/images/projects/quizgame/quizMainBig.png';

import expenses1Img from 'public/images/projects/expensesplanner/expenses1.jpg';
import expenses2Img from 'public/images/projects/expensesplanner/expenses2.jpg';
import expenses3Img from 'public/images/projects/expensesplanner/expenses3.jpg';
import expenses4Img from 'public/images/projects/expensesplanner/expenses4.jpg';
import expenses5Img from 'public/images/projects/expensesplanner/expenses5.jpg';
import expensesMain from 'public/images/projects/expensesplanner/expensesMainBig.png';

import loggerMain from 'public/images/projects/logger/loggerMockup.png';
import logger1 from 'public/images/projects/logger/logger5.jpg';
import logger2 from 'public/images/projects/logger/logger2.jpg';
import logger3 from 'public/images/projects/logger/logger3.jpg';
import logger4 from 'public/images/projects/logger/logger4.jpg';
import logger5 from 'public/images/projects/logger/logger3.jpg';

import pudpanelMain from 'public/images/projects/pudpanel/pudloPanelMockup.png';
import pudpanel1 from 'public/images/projects/pudpanel/pudlowskapanel1.jpg';
import pudpanel2 from 'public/images/projects/pudpanel/pudlowskapanel2.jpg';
import pudpanel3 from 'public/images/projects/pudpanel/pudlowskapanel3.jpg';
import pudpanel4 from 'public/images/projects/pudpanel/pudlowskapanel4.jpg';
import pudpanel5 from 'public/images/projects/pudpanel/pudlowskapanel5.jpg';

import pudlowskaMain from 'public/images/projects/pudlowska/PudlowskaMockup.png';
import pudlowska1 from 'public/images/projects/pudlowska/pudlowska1.jpg';
import pudlowska2 from 'public/images/projects/pudlowska/pudlowska2.jpg';
import pudlowska3 from 'public/images/projects/pudlowska/pudlowska3.jpg';
import pudlowska4 from 'public/images/projects/pudlowska/pudlowska4.jpg';
import pudlowska5 from 'public/images/projects/pudlowska/pudlowska5.jpg';
import pudlowska6 from 'public/images/projects/pudlowska/pudlowska6.jpg';

import sapanelMain from 'public/images/projects/sapanel/saPanelMockup.png';
import sapanel1 from 'public/images/projects/sapanel/sapanel1.jpg';
import sapanel2 from 'public/images/projects/sapanel/sapanel2.jpg';
import sapanel3 from 'public/images/projects/sapanel/sapanel3.jpg';
import sapanel4 from 'public/images/projects/sapanel/sapanel4.jpg';
import sapanel5 from 'public/images/projects/sapanel/sapanel5.jpg';
import sapanel6 from 'public/images/projects/sapanel/sapanel6.jpg';
import sapanel7 from 'public/images/projects/sapanel/sapanel7.jpg';
import sapanel8 from 'public/images/projects/sapanel/sapanel8.jpg';

import saMain from 'public/images/projects/sa/SAMockup.png';
import sa1 from 'public/images/projects/sa/shoutabout1.jpg';
import sa2 from 'public/images/projects/sa/shoutabout2.jpg';
import sa3 from 'public/images/projects/sa/shoutabout3.jpg';
import sa4 from 'public/images/projects/sa/shoutabout4.jpg';
import sa5 from 'public/images/projects/sa/shoutabout5.jpg';
import sa6 from 'public/images/projects/sa/shoutabout6.jpg';
import sa7 from 'public/images/projects/sa/shoutabout7.jpg';
import sa8 from 'public/images/projects/sa/shoutabout8.jpg';
import sa9 from 'public/images/projects/sa/shoutabout9.jpg';
import sa10 from 'public/images/projects/sa/shoutabout10.jpg';

export const projects = [
  {
    slug: 'shoutabout-portal-with-catalog',
    title: {
      en: 'portal with catalog live',
      pl: 'portal z katalogiem',
    },
    description: {
      en: 'SHOUT ABOUT - dynamiczny portal z interaktywnym katalogiem produktowym.',
      pl: 'SHOUT ABOUT - the dynamic portal with the interactive product catalog.',
    },
    live: '',
    creationDate: '2022-06-30',
    images: [
      {
        id: 'sa1',
        img: sa1,
      },
      {
        id: 'sa2',
        img: sa2,
      },
      {
        id: 'sa3',
        img: sa3,
      },
      {
        id: 'sa4',
        img: sa4,
      },
      {
        id: 'sa5',
        img: sa5,
      },
      {
        id: 'sa6',
        img: sa6,
      },
      {
        id: 'sa7',
        img: sa7,
      },
      {
        id: 'sa8',
        img: sa8,
      },
      {
        id: 'sa9',
        img: sa9,
      },
      {
        id: 'sa10',
        img: sa10,
      },
    ],
    detailProjectView: {
      title: {
        en: 'SHOUT ABOUT - dynamiczny portal z interaktywnym katalogiem produktowym',
        pl: 'SHOUT ABOUT - the dynamic portal with the interactive product catalog',
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
      mainImage: saMain,
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
    slug: 'portal-catalog-panel',
    title: {
      en: 'portal & catalog panel',
      pl: 'panel portalu z katalogiem',
    },
    description: {
      en: 'Administration panel for portal with catalog.',
      pl: 'Panel administracyjny portalu z katalogiem.',
    },
    live: '',
    creationDate: '2022-06-30',
    images: [
      {
        id: 'sapanel1',
        img: sapanel1,
      },
      {
        id: 'sapanel2',
        img: sapanel2,
      },
      {
        id: 'sapanel3',
        img: sapanel3,
      },
      {
        id: 'sapanel4',
        img: sapanel4,
      },
      {
        id: 'sapanel5',
        img: sapanel5,
      },
      {
        id: 'sapanel6',
        img: sapanel6,
      },
      {
        id: 'sapanel7',
        img: sapanel7,
      },
      {
        id: 'sapanel8',
        img: sapanel8,
      },
    ],
    detailProjectView: {
      title: {
        en: 'administration panel for online shop',
        pl: 'panel administracyjny do zarządzania sklepem internetowym',
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
      mainImage: sapanelMain,
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
    slug: 'pudlowska-online-shop',
    title: {
      en: 'online shop Pudlowska',
      pl: 'sklep Pudłowska',
    },
    description: {
      en: 'Pudłowska - an online shop with a home page.',
      pl: 'Pudłowska - sklep internetowy z witryną marki.',
    },
    live: 'https://www.pudlowska.com',
    creationDate: '2021-11-30',
    images: [
      {
        id: 'pudlowska1',
        img: pudlowska1,
      },
      {
        id: 'pudlowska2',
        img: pudlowska2,
      },
      {
        id: 'pudlowska3',
        img: pudlowska3,
      },
      {
        id: 'pudlowska4',
        img: pudlowska4,
      },
      {
        id: 'pudlowska5',
        img: pudlowska5,
      },
      {
        id: 'pudlowska6',
        img: pudlowska6,
      },
    ],
    detailProjectView: {
      title: {
        en: 'Pudłowska - an online shop with a home page',
        pl: 'Pudłowska - sklep internetowy z witryną marki',
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
      mainImage: pudlowskaMain,
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
    slug: 'online-shop-panel',
    title: {
      en: 'online shop panel',
      pl: 'panel sklepu',
    },
    description: {
      en: 'Administration panel for online shop.',
      pl: 'Panel administracyjny do zarządzania sklepem internetowym.',
    },
    live: '',
    creationDate: '2021-11-30',
    images: [
      {
        id: 'pudpanel1',
        img: pudpanel1,
      },
      {
        id: 'pudpanel2',
        img: pudpanel2,
      },
      {
        id: 'pudpanel3',
        img: pudpanel3,
      },
      {
        id: 'pudpanel4',
        img: pudpanel4,
      },
      {
        id: 'pudpanel5',
        img: pudpanel5,
      },
    ],
    detailProjectView: {
      title: {
        en: 'administration panel for online shop',
        pl: 'panel administracyjny do zarządzania sklepem internetowym',
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
      mainImage: pudpanelMain,
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
    slug: 'logger',
    title: {
      en: 'logger',
      pl: 'logger',
    },
    description: {
      en: 'Useful tool for monitoring traffic in client applications.',
      pl: 'Przydatne narzędzie do monitorowania ruchu w aplikacjach klienta.',
    },
    live: '',
    creationDate: '2022-05-01',
    images: [
      {
        id: 'logger1',
        img: logger1,
      },
      {
        id: 'logger2',
        img: logger2,
      },
      {
        id: 'logger3',
        img: logger3,
      },
      {
        id: 'logger4',
        img: logger4,
      },
      {
        id: 'logger5',
        img: logger5,
      },
    ],
    detailProjectView: {
      title: {
        en: 'the tool for monitoring traffic in client applications',
        pl: 'narzędzie do monitorowania ruchu w aplikacjach klienta',
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
      mainImage: loggerMain,
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
    slug: 'bluechip-website',
    title: {
      en: 'bluechip website',
      pl: 'witryna bluechip',
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
            'TODO React',
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
            'TODO pl React',
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
          id: 'ckp49iqw0e2ur0b54f98tik62',
          title: {
            en: 'type',
            pl: 'pl type',
          },
          description: {
            en: [
              'TODO Single Page App with CMS abd Blog, Responsive Web Design.',
            ],
            pl: [
              'TODO pl Single Page App with CMS abd Blog, Responsive Web Design.',
            ],
          },
        },
        {
          id: 'ckp48gnyo6q780bd316ba6so6',
          title: {
            en: 'goal',
            pl: 'pl goal',
          },
          description: {
            en: [
              'TODO Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
            pl: [
              'TODO pl Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
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
