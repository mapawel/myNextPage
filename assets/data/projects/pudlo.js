import pudlowskaMain from 'public/images/projects/pudlowska/PudlowskaMockup.png';
import pudlowska1 from 'public/images/projects/pudlowska/pudlowska1.jpg';
import pudlowska2 from 'public/images/projects/pudlowska/pudlowska2.jpg';
import pudlowska3 from 'public/images/projects/pudlowska/pudlowska3.jpg';
import pudlowska4 from 'public/images/projects/pudlowska/pudlowska4.jpg';
import pudlowska5 from 'public/images/projects/pudlowska/pudlowska5.jpg';
import pudlowska6 from 'public/images/projects/pudlowska/pudlowska6.jpg';

const pudlo = {
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
};

export default pudlo;
