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
      en: 'Company home page with blog integrated with CMS.',
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
            'creating a complete graphic design with logo, colours, font selection, graphic elements',
            'selection of production technology, taking into account client hosting',
            'SEO optimization',
            'connecting with backend / CMS and proposing a solution for backend / CMS taking into account project maintenance costs',
            'CMS launch',
            "project deploy on the customer's hosting",
            'connecting to Google Search Console',
          ],
          pl: [
            'stworzenie kompletnego projektu graficznego z logo, kolorami, doborem fontów, elementami graficznymi',
            'dobór technologii produkcji z uwzględnieniem hostingu klienta',
            'optymalizacja SEO',
            'połączenie z backendem / CMS i zaproponowanie rozwiązania dla backendu / CMS z uwzględnieniem kosztów utrzymania projektu',
            'Uruchomienie CMS',
            'wdrożenie projektu na hostingu klienta',
            'połączenie z Google Search Console',
          ],
        },
      },
      descriptionsForProject: [
        {
          id: 'descbluechip1',
          title: {
            en: 'type',
            pl: 'rodzaj',
          },
          description: {
            en: ['Company website with a blog integrated with CMS.'],
            pl: ['Strona firmowa z blogiem zarządzana przez CMS.'],
          },
        },
        {
          id: 'descbluechip2',
          title: {
            en: 'goal',
            pl: 'cel',
          },
          description: {
            en: [
              'Creating a clear and neat corporate website containing a blog. The content of the website must be fully manageable due to the quick development of the company and the need of frequent changes on the website. Possibility to add new blog articles.',
            ],
            pl: [
              'Stworzenie przejrzystej i nowoczesnej strony firmowej z blogiem. Ze względu na szybki rozwój firmy i konieczność częstych zmian na stronie, zawartość strony musi być w pełni zarządzalna. Konieczność zapewnienia dynamicznego dodawania nowych artykułów do bloga.',
            ],
          },
        },
        {
          id: 'descbluechip3',
          title: {
            en: 'solutions',
            pl: 'rozwiązania',
          },
          description: {
            en: [
              "The website is connected to Graph CMS providing the data and images for the website. Thanks to this, it's possible dynamically manage not only the content, but also images and even the appearance of subpages and sections. When the content is modified in Graph CMS, new text blocks, citations, articles can be added. This gives the possibility of full flexibility for a new developing company, the possibility of always up-to-date data with just a few clicks without generating additional costs with each modification.",
              'Subtle animations have been added for visual dynamics.',
              'RWD (display on large screens as well as tablets or mobile phones).',
            ],
            pl: [
              'Stronę podłączono z Graph CMS stanowiącym zaplecze danych i obrazów dla strony. Dzięki temu można zarządzać dynamicznie nie tylko treścią ale również obrazami a nawet samym wyglądem podstron i sekcji. W momencie modyfikacji treści w Graph CMS można dodawać nowe bloki tekstu, cytaty, artykuły. Daje to możliwość pełnej elastyki dla nowej rozwijającej się firmy, możliwość posiadania zawsze aktualnych danych kilkoma kliknięciami bez generowania dodatkowych kosztów przy każdej modyfikacji.',
              'Dodano subtelne animacje nadające dynamiki wizualnej.',
              'Design responsywny (dostosowany do wyświetlania na dużych ekranach oraz tabletach lub telefonach komórkowych).',
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
          id: 'techbluechip1',
          title: { en: 'technicals', pl: 'technikalia' },
          description: {
            en: [
              "Website's front was created with use of React what gave static files after project build which can be hosted on customer's hosting. The use of React Router gave the website speed. GSAP was used for animations giving some dynamic experience on the website. All components are cusom ones (even the accordion in the offer view and pagination in the blog view) - Styled Components was used to prepare them. The website uses underneath Redux which collects data from CMS / data-base. Redux gets the data using Axios, Thunk, GraphQL. Special hook was added to prevent multiple data fetch when data is present while novidating (to save API Calls).",
              'For backend / CMS the GraphCMS and their free plan was used. It gives rapid text changing possibility, adding new information in all sections and views, new cards, new elements by puting just some text in GraphCMS Content. Also design of some elements can be easily change in CMS by some meta-data change. Customer have a possibility of adding blog posts in CMS, deleting old posts etc.',
            ],
            pl: [
              'Front strony został stworzony przy użyciu Reacta, który po zbudowaniu projektu dał statyczne pliki, które można hostować na hostingu klienta. Zastosowanie React Routera dodało stronie szybkości. GSAP został wykorzystany do animacji dających trochę dynamiki na stronie. Wszystkie komponenty są szyte na miarę, stylowane indywidualnie (nawet akordeon w widoku oferty i paginacja w widoku bloga) - do ich przygotowania użyto Styled Components. Strona korzysta z Redux, który agreguje dane z CMS/bazy danych. Redux pobiera dane za pomocą Axios, Thunk, GraphQL. Dodano hook zapobiegający wielokrotnemu pobieraniu danych podczas nawigacji, gdy dane są już obecne dla danej podstorny (aby zaoszczędzić koszt zapytań do CMS).',
              'Do backendu / CMS wykorzystano GraphCMS i ich darmowy plan. Daje możliwość szybkiej zmiany tekstu, dodawania nowych informacji we wszystkich sekcjach i widokach, nowych kart, nowych elementów poprzez umieszczenie tylko fragmentu tekstu w GraphCMS. Również projekt niektórych elementów można łatwo zmienić w CMS poprzez zmianę metadanych. Klient ma możliwość dodawania postów na blogu w CMS, usuwania starych postów itp.',
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
        en: 'Quiz Game - full stack SSR with auth and database',
        pl: 'Quiz - gra webowa, aplikacja serwerowa z obsługą bazy danych',
      },
      scopeList: {
        listTitle: {
          en: 'Project scope:',
          pl: 'Zakres projektu:',
        },
        scopeTxts: {
          en: [
            'full design with a selection of fonts, colors, illustrations',
            'creating graphic components - e.g. an animated clock',
            'design templates for front of the application',
            'creating a server application that connects to the database and provides data in templates to the front',
            'authentication and authorization system',
            'creating a user zone with data management',
            'creating game logic, actions, scoring, timing',
            'creating statistics and rankings',
            'launching the application on the cheapest possible hosting to present the operation',
            'application for further development after finding a commercial use',
          ],
          pl: [
            'pełny design z doborem fontów, kolorów, ilustracji',
            'stworzenie komponentów graficznych - np. animowanego zegara',
            'zaprojektowanie szablonów do wyświetlania na froncie aplikacji',
            'stworzenie aplikacji serwerowej łączącej się z bazą danych oraz dostarczającej dane w szablonach na front',
            'system autentykacji i autoryzacji',
            'stworzenie strefy użytkownika z możliwością zarządzania danymi',
            'stworzenie logiki gry, akcji, punktowania, odmierzania czasu',
            'steworzenie statystyk i rankingów',
            'uruchomienie aplikacji na najtańszym możliwym hostingu celem prezentacji działania',
            'aplikacja do dalszego rozwoju po znalezieniu wykorzystania komercyjnego',
          ],
        },
      },
      descriptionsForProject: [
        {
          id: 'descquiz1',
          title: {
            en: 'type',
            pl: 'type',
          },
          description: {
            en: [
              'A server-side rendered web game displayed in a browser.',
              'RWD (display on large screens as well as tablets or mobile phones).',
            ],
            pl: [
              'Gra webowa renderowana po stronie serwera, wyświetlana w przeglądarce (SSR).',
              'Aplikacja responsywna (dostosowana do wyświetlania na dużych ekranach oraz tabletach lub telefonach komórkowych).',
            ],
          },
        },
        {
          id: 'descquiz2',
          title: {
            en: 'goal',
            pl: 'goal',
          },
          description: {
            en: [
              'Creation of an MVP to present a working example of a quiz game using various technologies. App for further development after finding a commercial use.',
            ],
            pl: [
              'Stworzenie MVP aby zaprezentować działający szablon gry typu quiz przy wykorzystaniu różnych technologii. Projekt do dalszego rozwoju po znalezieniu wykorzystania komerycjnego.',
            ],
          },
        },
        {
          id: 'descquiz3',
          title: {
            en: 'design',
            pl: 'design',
          },
          description: {
            en: [
              "The design wasn't the most important point here so components library was used to make the work faster however it's clear and universal. Ilustrations were used to create more attractive views. Some custom components - e.g. an animated clock. The app's views are dynamically generated on server.",
            ],
            pl: [
              'Grafika nie była tu najważniejszy, więc wykorzystano bibliotekę gotowych komponentów, aby przyspieszyć pracę, jednak jest ona przejrzysta i uniwersalna. Wykorzystano ilustracje, aby uatrakcyjnić widoki. Część komponentów jest autorskich tworzonych od zera - m.in. animowany zegar. Widoki aplikacji są generowane dynamicznie na serwerze.',
            ],
          },
        },
        {
          id: 'descquiz4',
          title: {
            en: 'statistics, cheating possibility',
            pl: 'statystyki, możliwość oszustwa',
          },
          description: {
            en: [
              'All registered users can build game results history and have acces to statistics view where basic game data are displaied. You can also play the game as a Guest user and if you make registration later you can merge your guest data to your account.',
              'The app is cheating proof - no data about right answer is sent to front-end before giving the answer by user. User cannot see the same question two times if he knows the answer from previous game play...',
            ],
            pl: [
              'Zarejestrowani użytkownicy mogą budować historię wyników i mieć dostęp do widoku statystyk, w którym wyświetlane są podstawowe dane gry. Można również zagrać jako użytkownik typu Gość, a jeśli potem dokona się rejestracji, można połączyć dane z konta Gościa ze swoim nowym kontem.',
              'Aplikacja jest odporna na proste oszustwa - żadne dane o prawidłowej odpowiedzi nie są wysyłane do front-endu przed udzieleniem odpowiedzi przez użytkownika. Użytkownik nie może zobaczyć też dwa razy tego samego pytania, a zna odpowiedź, bo grał wcześniej...',
            ],
          },
        },
      ],
      mainImage: quizMain,
    },
    technicalDetailsView: {
      techStact: {
        en: [
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
        pl: [
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
      techDescriptions: [
        {
          id: 'techquiz1',
          title: { en: 'technicals', pl: 'technikalia' },
          description: {
            en: [
              "Whole App coded in JS on Node.js with use of Express.js. Server with Node generates html files which are displied in user's web browser - they are custom and depend on user's behaving. Also static JS files are served what is important to give the game smooth run (time lapse effect). App uses Mongo DB to store users' data and game data and express-session and cookies to keep user logged in, to log out etc.",
              'The application includes a fairly extensive auth module with full data validation and authentication via mail - Nodemailer used. User account editing and deletion possible. Validation on the server is possible due to use of Express Validator, Photos (Avatars) can be hadled by Multer.',
            ],
            pl: [
              'Aplikacja zakodowana w JavaScript w Node.js z wykorzystaniem Express.js. Serwer z Node generuje pliki html oraz js oraz dostarcza pozostałe pliki, które są wyświetlane w przeglądarce internetowej użytkownika - są one niestandardowe i zależą od zachowania użytkownika. Obsługa statycznych plików JS, co jest ważne dla zapewnienia płynne działanie gry (efekt upływu czasu, zegar). Aplikacja używa bazy nierelacyjnej Mongo DB do przechowywania i szybkiej obsługi danych użytkowników i danych gry oraz sesji. Wykorzystano pliki cookie, aby utrzymać użytkownika w stanie zalogowania, wymieniać dane gry itp.',
              'Aplikacja zawiera dość rozbudowany moduł uwierzytelniania z pełną walidacją danych i uwierzytelnianiem za pośrednictwem poczty – wykorzystany Nodemailer. Możliwość edycji i usunięcia konta użytkownika. Walidacja na serwerze jest możliwa dzięki wykorzystaniu Express Validator, Zdjęcia (Avatary) można ładować dzięki Multer.',
            ],
          },
        },
      ],
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
        en: 'front-end for app to expensess management',
        pl: 'front-end użytkowej aplikacji do zarządzania wydatkami',
      },
      scopeList: {
        listTitle: {
          en: 'Project scope:',
          pl: 'Zakres projektu:',
        },
        scopeTxts: {
          en: [
            'complete graphic design, a selection of colors, fonts, graphic elements',
            'projecting a business logic, data flow from the front, data display',
            'creating views and components - e.g. calendar view with notes',
            'providing functionalities for the app presentation without a database - locale storage',
            'project for further development after finding a commercial use',
          ],
          pl: [
            'kompletny projekt graficzny, dobór kolorów, fontów, elementów graficznych',
            'zaprojektowanie logiki beznesowej, przepływu danych z frontu, wyświetlania danych',
            'stworzenie widoków i komponentów - np. widok kalendarza z notatkami',
            'zapewnieni funkcjonalności do prezentacji działania bez bazy danych - locale storage',
            'projekt do dalszego rozwoju po znalezeniu zastosowania komercyjnego',
          ],
        },
      },
      descriptionsForProject: [
        {
          id: 'descexpensive1',
          title: {
            en: 'type',
            pl: 'type',
          },
          description: {
            en: [
              'Front-end of the expense management application. Application rendered in the browser.',
            ],
            pl: [
              'Front użytkowej aplikacji do zarządzania wydatkami. Aplikacja renderowana w przeglądarce.',
            ],
          },
        },
        {
          id: 'descexpensive2',
          title: {
            en: 'goal',
            pl: 'goal',
          },
          description: {
            en: [
              'Creation of a usable, simple but functional application that will help users to plan expenses, remind about payments so that the user will always be up to date - just check.',
              'Application to develope, contains font rendered in the browser so far  with data display logic and data flow. A server layer to be added, what at this stage will be easy to implement if the decision to produce is made. ',
            ],
            pl: [
              'Stworzenie użytkowej, prostej, ale zawierającej niezbędne funkcje aplikacji, która pomoże użytkownikom zaplanować wydatki, przypomni o płatnościach dzięki czemu użytkownik zawsze będzie na bieżąco - wystarczy sprawdzić.',
              'Aplikacja do rozwoju, na razie zawiera font renderowany w przeglądarce wraz z logiką wyświetlania i przepływu danych. Do dodania warstwa serwerowa, co na tym etapie jest proste do wdrożenia jeśli zapadnie decyzja o produkcji.',
            ],
          },
        },
        {
          id: 'descexpensive3',
          title: {
            en: 'design',
            pl: 'design',
          },
          description: {
            en: [
              'The design is based on cards. Simplicity is broken by a wave that smoothly separates the sections on the dashboard view. One main color plus white and grey give clarity. Depending the view, there is white or blue backgroud shown for easier navigation on the app.',
              'Pretty interesting menu bar coded with icons and color indentation in the bar when active.',
            ],
            pl: [
              'Projekt oparty na kartach z danymi. Prostotę przełamuje fala, która płynnie rozdziela sekcje na widoku deski rozdzielczej. Jeden kolor główny plus biały i szary nadają wyrazistości. W zależności od widoku wyświetlane jest białe lub niebieskie tło dla łatwiejszej nawigacji po aplikacji.',
              'Całkiem ciekawy pasek menu z ikonami i kolorowymi wcięciami na pasku, gdy dany widok jest aktywny.',
            ],
          },
        },
        {
          id: 'descexpensive4',
          title: {
            en: 'actions',
            pl: 'działanie',
          },
          description: {
            en: [
              'Calendar view shows day-by-day payments, payment status, amount to be paid or already paid. If there are more payments during the day, it automatically displays the total amount as an abbreviated version of the information. You can use the calendar to go to payment, view details. ',
              'The user can add individual payments or entire payment cycles (paid weekly, monthly etc.). Then, after making the payment, the user can change the status, amount and add a note to each payment. The user can modify his records. ',
              'All information can also be displayed by month or day in separate views. Brief user information is available on the total spend for the entire month. ',
            ],
            pl: [
              'Kalendarz pokazuje płatności dzień po dniu, status płatności, kwotę do zapłaty lub zapłaconej. Jeśli w ciągu dnia jest więcej płatności niż można wyświetlić, automatycznie wyświetla całkowitą kwotę jako skróconą wersję wyświetlanych informacji. Można użyć kalendarza, aby przejść do płatności, zobaczyć szczegóły.',
              'Użytkownik może dodać pojedyncze płatności lub całe cykle płatności (płatne co tydzień, miesiąc itp.). Następnie po dokonaniu płatności użytkownik może zmienić status, kwotę oraz dodać notatkę do każdej płatności. Użytkownik może modyfikować swoje rekordy.',
              'Wszystkie informacje mogą być wyświetlane także w widoku miesiąca lub dnia. Dostępne są krótkie informacje dla użytkownika o całkowitych wydatkach za cały miesiąc.',
            ],
          },
        },
      ],
      mainImage: expensesMain,
    },
    technicalDetailsView: {
      techStact: {
        en: [
          'React',
          'Redux',
          'React Router',
          'Styled Components',
          'Formik',
          'Moment',
        ],
        pl: [
          'React',
          'Redux',
          'React Router',
          'Styled Components',
          'Formik',
          'Moment',
        ],
      },
      techDescriptions: [
        {
          id: 'techquiz1',
          title: { en: 'technicals', pl: 'technikalia' },
          description: {
            en: [
              'React SPA, RWD.',
              'React Router used for rapid views changing. Redux used to collect and store data - for now locale storage used, however the app can be easly connected to the API with data-base.',
              'Callender view is fully custom component which renders day cards in Grid',
              'Front-end validation obtained by Formik. All elements are styled by Styled Components. Atomic Design attitude used.',
            ],
            pl: [
              'Aplikacja React typu SPA z RWD.',
              'Został użyty React Router do szybkiej zmiany widoków. Redux służy do zbierania i przechowywania danych - na razie używana pamięć lokalna, jednak aplikację można łatwo połączyć z API i bazą danych.',
              'Widok kalendarza jest w pełni niestandardowym komponentem, renderowane karty dni w Grid.',
              'Frontowa walidacja danych w Formik. Wszystkie elementy są stylowane w Styled Components. Zastosowano podejście Atomic Design.',
            ],
          },
        },
      ],
    },
  },
];
