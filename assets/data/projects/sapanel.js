import sapanelMain from 'public/images/projects/sapanel/saPanelMockup.png';
import sapanel1 from 'public/images/projects/sapanel/sapanel1.jpg';
import sapanel2 from 'public/images/projects/sapanel/sapanel2.jpg';
import sapanel3 from 'public/images/projects/sapanel/sapanel3.jpg';
import sapanel4 from 'public/images/projects/sapanel/sapanel4.jpg';
import sapanel5 from 'public/images/projects/sapanel/sapanel5.jpg';
import sapanel6 from 'public/images/projects/sapanel/sapanel6.jpg';
import sapanel7 from 'public/images/projects/sapanel/sapanel7.jpg';
import sapanel8 from 'public/images/projects/sapanel/sapanel8.jpg';

const sapanel = {
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
};

export default sapanel;
