import bluechip1Img from 'public/images/projects/bluechip/bluechip1.jpg';
import bluechip2Img from 'public/images/projects/bluechip/bluechip2.jpg';
import bluechip3Img from 'public/images/projects/bluechip/bluechip3.jpg';
import bluechip4Img from 'public/images/projects/bluechip/bluechip4.jpg';
import bluechip5Img from 'public/images/projects/bluechip/bluechip5.jpg';
import bluechipMain from 'public/images/projects/bluechip/bluechipMainBig.png';

const bluechip = {
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
};

export default bluechip;
