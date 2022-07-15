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
  live: {
    url: 'https://www.pudlowska.com',
  },
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
          'creating a graphic design with the selection of a visual style, fonts, component appearance,',
          'creating brand pages',
          'creating websites for an online shop',
          'implementation of the full logic of the online shop',
          'implementation of the shopping cart and order generation system',
          'implementation of an on-line payment system',
          'implementation of a tool for selecting parcel machines',
          'SEO optimization',
          'connection of the front of the shop with the engine of the shop on the server',
          'designing the data flow between the front and backend',
          'all business logic and shop mechanics on the font and backend side',
          'connection with Google Search Console',
          'application hosting, connection with the domain',
          'the project also includes a full API of the shop, application operating on the server side',
          'a separate backend application with database connection, data flow validation, authentication and authorization was created',
          'a separate backend application may be connected as an API to this shop or other shops in the future',
        ],
        pl: [
          'stworzenie projektu graficznego z doborem stylu wizualnego, fontów, wyglądem komponentów,',
          'stworzenie stron marki',
          'stworzenie stron sklepu internetowego',
          'wdrożenie pełnej logiki sklepu internetowego',
          'wdrożenie systemu koszyka i generowania zamówień',
          'wdrożenie systemu płatności on-line',
          'wdrożenie narzędzia wyboru paczkomatów',
          'optymalizacja SEO',
          'połączenie frontu sklepu z silnikiem sklepu na serwerze',
          'zaprojektowanie przepływu danych pamiedzy frontem a backendem',
          'cała logika biznesowa i mechanika sklepu po stronie font i backend',
          'połączenie z Google Search Console',
          'hosting aplikacji, spięcie z domeną',
          'projekt obejmuje również pełne API własnego autorstwa sklepu działające po stronie serwera',
          'stworzono odrębną aplikację backendową z obsługą bazy danych, walidacją przepływu danych, autentykacją i autoryzacją',
          'odrębna aplikacja backendowa może być podpięta jako API do niniejszego sklepu lub innych sklepów w przyszłości',
        ],
      },
    },
    descriptionsForProject: [
      {
        id: 'descpudlo1',
        title: {
          en: 'type',
          pl: 'typ',
        },
        description: {
          en: [
            'An online shop - fullstack app. Shop engine on the server side with a browser application for users and an admin panel for the company. Responsive design.',
          ],
          pl: [
            'Autorski sklep internetowy - fullstack app. Silnik sklepu po stronie serwera wraz z aplikacją przeglądarkową dla użytkowników oraz admin panelem dla zarządzającego. Responsywny design.',
          ],
        },
      },
      {
        id: 'descpudlo2',
        title: {
          en: 'goal',
          pl: 'cel',
        },
        description: {
          en: [
            'Creation of a complete online shop. Providing full functionality of quick and intuitive purchases for both registered regular customers and anonymous users along with the functionality of online payments. Delivering a funcionality of managing the unique projects of the designer in a fair way for the clients.',
          ],
          pl: [
            'Stworzenie kompletnego sklepu internetowego. Zapewnienie pełnej funkcjonalności szybkich i intuicyjnych zakupów zarówno dla zarejestrowanych stałych klientów jak i anonimowych użytkowników wraz z funkcjonalnością płatności on-line. Dostarczenie takiej logiki beznesowej, aby można było zarządzać w uczciwy dla klientów sposób unikatowymi projektami projektantki.',
          ],
        },
      },
      {
        id: 'descpudlo3',
        title: {
          en: 'design',
          pl: 'design',
        },
        description: {
          en: [
            "The look is to be attractive, modern and minimalist. It should not dominate the photos of fashion designs presented in the store. Two separate themes were used depending on the subpage that is displayed - the home page is in a dark tone, the store's sub-site is to emphasize the products, and a light tone was used.",
          ],
          pl: [
            'Wygląd ma być atrakcyjny, nowoczesnym minimalistyczny. Nie powinien dominować nad zdjęciami projektów modowych prezentowanych w sklepie. Zastosowano dwa odrębne motywy zależne od podstrony, która jest wyświetlana - home page jest w tonacji ciemnej, podstorna sklepu ma uwydatniać produkty, zastosowano tonację jasną.',
          ],
        },
      },
      {
        id: 'descpudlo4',
        title: {
          en: 'solutions',
          pl: 'rozwiązania',
        },
        description: {
          en: [
            "The brand's website and the shop's website are rendered in the user's browser, while displaying only the latest data, which is downloaded when the website is opened from the shop's engine located on the server. Due to the uniqueness of the presented products (single projects), the logic of the basket was applied such that the transfer of an article to it by one user makes it unavailable to others, and vice versa when the article or the entire basket is deleted (by the user or administrator).",
            'The logic of the shop for making purchases is intuitive and shortened to the necessary steps, without unnecessary messages, redirection to other products, etc. The user can make a purchase anonymously, provide the necessary data, choose a parcel locker or courier delivery, pay for the order online. - the whole thing may take only a few seconds. After registration, the user also receives access to the purchase history and the status of current orders.',
            'Special cards for "Sale" and "New" products and such product groups were created. These products are presented in a special way to attract the customer\'s attention.',
            'The user will easily find the product they are looking for using the sub-menu / filters of product categories or the quick search engine for articles by part of the name.',
          ],
          pl: [
            'Strona marki oraz strona sklepu renderowane są w przeglądarce użytkownika wyświetlając jednocześnie wyłącznie najświeższe dane, które pobierane są w momencie otwierania strony z silnika sklepu znajdujacego się na serwerze. Ze względu na unikatowość prezentowanych produktów (pojeduńćze egzemplarze), zastosowano taką logikę koszyka, że przucenenie do niego artykułu przez jednego użytkownika sprawia, że jest on już niedostępny dla innych i odwrotnie w momecie skasowania artykułu lub całego koszyka (przez użytkownika lub administratora).',
            'Logika sklepu o dokonywania zakupów jest intuicyjna i skrócona do niezbędnych kroków, bez zbędnych komunikatów, przekierowywania na inne produkty itp. Użytkownik może dokonać zakupu anonimowo, podać niezbędne dane, wybrać paczkomat lub dostawę kurierską, opłacić zamówienie on-line. - całość może trwać nawet tylko kilkanaśice sekund. Po rejestracji użytkownik otrzymuje dodatkowo dostęp do historii zakupów oraz statusu bieżących zamówień.',
            'Stworzono specjalne karty produktów "Sale" oraz "New" oraz takie grupy produktowe. Te produkty prezentowane są w specjalny sposób ziększając uwagę klienta.',
            'Użytkownik łatwo odnajdzie poszukiwany produkt korzystając z submenu / filtrów kategorii produktowych lub szybkiej wyszukiwarki artykułów po fragmencie nazwy.',
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
        'Redux & Thunk',
        'Axios',
        'React Router',
        'Material-UI',
        'Formik',
        'Swiper',
        'GSAP',
        'Styled Components',
        'SERVER: node.js -> Express',
        'SERVER: MongoDB -> Mongoose',
        'SERVER: Nodemailer',
        'SERVER: aws-sdk',
        'SERVER: multer',
        'SERVER: sharp',
        'SERVER: jsonwebtoken',
        'SERVER: Express validator',
      ],
      pl: [
        'React',
        'Redux & Thunk',
        'Axios',
        'React Router',
        'Material-UI',
        'Formik',
        'Swiper',
        'GSAP',
        'Styled Components',
        'SERVER: node.js -> Express',
        'SERVER: MongoDB -> Mongoose',
        'SERVER: Nodemailer',
        'SERVER: aws-sdk',
        'SERVER: multer',
        'SERVER: sharp',
        'SERVER: jsonwebtoken',
        'SERVER: Express validator',
      ],
    },
    techDescriptions: [
      {
        id: 'techsa1',
        title: { en: 'technicals', pl: 'technikalia' },
        description: {
          en: [
            'The complete application consists of 3 large parts: frontend of the shop, backend - API on the server connected to the database and the cloud, and the frontend of the admin panel. Browser applications (shop, admin panel) were created in React using the entire ecosystem such as React Router or Redux. At the moment of opening in the browser, the current data is always fetched from the shop engine on the server.',
            'An important part of the browser application is the state of the application maintained in the Redux store, and the mechanics are a series of asynchronous actions which, communicating with the server, change the state in the Redux store, and thus the operation of the shop.',
            'Shop users receive e-mails with notifications of orders and status changes, as well as links, the calling of which confirms any changes to the order introduced by the administrator.',
            'When placing an order and choosing a delivery, you can choose a parcel locker on the map thanks to the integration of the application with the in-post API',
            'Online payments can be made thanks to integration with Przelewy24.',
            'The application has been carefully managed with errors - the user is never left without information about what is happening in the portal or if something has gone wrong.',
            'API / backend adds full mechanics relevant to data management by the administrator, which is described as a separate project. This application is also the data base for the shop.',
          ],
          pl: [
            'Kompletna aplikacja składa się z 3 dużych części: frontend sklepu, backend - API na serwerze połączone z bazą danych oraz chmurą oraz frontend admin panelu. Aplikacje przeglądarkowe (sklep, admin panel) zostały stworzone w React z użyciem całego wymienionego ekosystemu jak React Router czy Redux. W momencie otwarcia w przeglądarce z silnika sklepu znajdującego się na serwerze zaciągane są zawsze aktualne dane.',
            'Ważną częścią aplikacji przeglądarkowej jest stan aplikacji utrzymywany w storze Redux a mechanikę stanowi szereg akcji asynchronicznych, które komunikując się z serwerem zmieniają stan w storze Redux a przez to i działanie sklepu.',
            'Użytkownicy sklepu otrzymują maile z powiadomieniami zamówień i zmian statusów oraz linki, których wywołanie stanowi potwierdzenie ewentualnych zmian w zamówieniu wprowadzonych przez administratora.',
            'Przy skłądananiu zamówienia i wyborze dostawy można wybrać paczkomat na mapie dzięki integracji aplikacji z API in-post',
            'Płatności on-line można dokonywać dzięki integracji z Przelewy24.',
            'W aplikacji wykonano starannie zarządzanie błędami - użytkownik nigdy nie pozostaje bez informacji o tym, co się dzieje w poratlu lub czy coś poszło nie tak.',
            'API/backend dodaje pełną mechanikę istotną dla zarządzania danymi przez administratora, co jest opisane jako odrębny projekt. Aplikacja ta też stanowi zaplecze danych dla sklepu.',
          ],
        },
      },
    ],
  },
};

export default pudlo;
