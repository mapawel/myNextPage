import loggerMain from 'public/images/projects/logger/loggerMockup.png';
import logger1 from 'public/images/projects/logger/logger5.jpg';
import logger2 from 'public/images/projects/logger/logger2.jpg';
import logger3 from 'public/images/projects/logger/logger3.jpg';
import logger4 from 'public/images/projects/logger/logger4.jpg';
import logger5 from 'public/images/projects/logger/logger3.jpg';

const logger = {
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
          pl: ['pl Single Page App with CMS abd Blog, Responsive Web Design.'],
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
          pl: ['pl Single Page App with CMS abd Blog, Responsive Web Design.'],
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
};

export default logger;
