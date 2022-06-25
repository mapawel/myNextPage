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
  slug: 'portal-catalog-api-and-panel',
  title: {
    en: 'CRM & CMS for portal',
    pl: 'CRM & CMS dla portalu',
  },
  description: {
    en: "CRM app and CMS for company's portal with catalog.",
    pl: 'System CRM oraz CMS dla portalu z katalogiem produktowym firmy.',
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
      en: "CRM app and CMS for company's portal with catalog",
      pl: 'system CRM oraz CMS dla portalu z katalogiem produktowym firmy',
    },
    scopeList: {
      listTitle: {
        en: 'Project scope:',
        pl: 'Zakres projektu:',
      },
      scopeTxts: {
        en: [
          "creating a complete CRM and CMS system with an administration panel tailored to the client's needs",
          'creating a browser application admin panel for the administrative operation of the server application',
          'creating views of the CRM and CMS administration panel',
          'full data logic in the panel application and its connection with the server application engine, ensuring the possibility of managing the product catalog, customer notifications, clients, etc.',
          'connecting the server application with the database, designing data models',
          'designing and implementing tools for managing products in the catalog and meta data for displaying portal views',
          'design and implementation of tools for managing customer requests for resale of products',
          'design and implementation of a customer communication tool',
          'creating a tool that optimizes product photos and places them in the cloud (AWS) for further use',
          'taking care of data security, authentication and authorization system',
          'creating data validators and error handling',
          'hosting the server application and admin panel',
        ],
        pl: [
          'stworzenie kompletnego systemu CRM i CMS wraz z panelem administracyjnym pod potrzeby klienta',
          'stworzenie aplikacji przeglądarkowej admin panelu do administracyjnej obsługi aplikacji serwerowej',
          'stworzenie widoków panelu administracyjnego CRM i CMS',
          'pełna logika danych w aplikacji panelu i połączenie jej z silnikiem aplikacji serwerowej, zapewnienie możliwości zarządzania katalogiem produktowym, zgłoszeniami klientów, klientami itp.',
          'połączenie aplikacji serwerowej z bazą danych, zaprojektowanie modeli danych',
          'zaprojektowanie i wykonianie narzędzi zarządzania produktami w katalogu oraz meta danymi wyświetlania widoków poralu',
          'zaprojektowanie i wykonianie narzędzi zarządzania zgłoszeniami klientów odsprzedaży produktów',
          'zaprojektowanie i wykonianie narzędzia komunikacji z klientami',
          'stworzenie narzędzia optymalizującego zdjęcia produktów oraz umieszczającego ich w chmurze (AWS) do dalszego wykorzystania',
          'zadbanie o bezpieczeństwo danych, system autentykacji i autoryzacji',
          'stworzenie walidatorów danych oraz obsługi błędów',
          'hosting aplikacji serwerowej i admin panelu',
        ],
      },
    },
    descriptionsForProject: [
      {
        id: 'descsapanel1',
        title: {
          en: 'type',
          pl: 'typ',
        },
        description: {
          en: [
            'Fullstack application: CRM & CMS as a server application and browser application as an administration panel. The admin panel is responsive.',
          ],
          pl: [
            'Aplikacja fullstack: CRM & CMS jako aplijacje serwerowe oraz aplikacja przeglądarkowa będąca panelem administracyjnym. Admin panej jest responsywny.',
          ],
        },
      },
      {
        id: 'descsapanel2',
        title: {
          en: 'goal',
          pl: 'cel',
        },
        description: {
          en: [
            'Creation of a CRM and CMS system and sharing the API of these systems as a data provider for a portal with a catalog and as an engine for handling communication between portal users and the company. The managing company must have access to the data from the database and be able to clearly display, modify and manage them, which is implemented in a separate browser application - panel admin. The application is to aggregate product data in the product catalog and metadata for the views of the portal for users, thanks to which it is possible to modify the page output, e.g. sliders presenting new products, etc. (CMS). At the same time, the application includes the functionality of communication between users and the company. The administrator can perform all tasks related to communication, product promotion, and the presentation of the offer on the portal in one place. The application must also be a CRM system in which the company can manage customer data, contracts, etc.',
          ],
          pl: [
            'Stworzenie systemu CRM i CMS oraz udostępnienie API tych systemów jako dostawcy danych dla portalu z katalogiem oraz jako silnik obsługi komunikacji użytkowników portalu z firmą. Frima zarządzająca musi mieć dostęp do danych z bazy danych i móc je przejrzyście wyświetlać, modyfikować i nimi zarządzać co realizowane jest w odrębnej aplikacji przeglądarkowej - admin panelu. Aplikacja ma agregowwać dane produktów w katalogu produktowym oraz metadane dla widoków portalu dla użytkowników, dzięki który można modyfikować wydok stron, np. slidery prezentujące nowości itp. (CMS). Jednocześnie apliakcja zawiera funckjonalność komunikacji użytkowników z firmą. Administrator w jednym miejscu może realizować wszystkie zadania związane z komunikacją, promocją produktów, prezentacją oferty na portalu. Aplikacja musi też stanowić system CRM, w którym firma może zarządzać danymi klientów, umowami itp.',
          ],
        },
      },
      {
        id: 'descsapanel3',
        title: {
          en: 'design',
          pl: 'design',
        },
        description: {
          en: [
            'The design of the panel is not the priority here, but the views are neat and clear, focusing on clearly displaying data in tables or tabs. Tables include the possibility of sorting data, as well as searching and sorting them. The panel is responsive.',
          ],
          pl: [
            'Wygląd panelu nie jest tu kluczowy jednak widoki są schludne i czytelne, skupiają się na przejrzystym wyświetlaniu danych w tabelach lub w kartach. Tabele zawierają możliwość sortowania danych oraz ich wyszukiwania i sortowania. Panel jest responsywny.',
          ],
        },
      },
      {
        id: 'descpudlopanel4',
        title: {
          en: 'solutions',
          pl: 'rozwiązania',
        },
        description: {
          en: [
            'The server application communicates with a very fast database located in the cloud, in which all information about products, metadata about displaying pages and customers are stored. Large static files, i.e. photos of products, are stored in the AWS cloud, from which they can then be instantly served to users\' browsers.',
            'Product photos are properly optimized on the server before they go to the cloud. The data passing through the server are fully validated and their correctness is checked. ',
            'The mechanics of the application are proprietary and fully adapted to the client\'s requirements. It includes a number of facilities for the administrator that can be used in the admin panel. ',
            'The panel aggregates and displays data in the following views: dashboard, products, product groups, brands, customers, sets of proposals, news, resale offers, subscribers. In each of these views, the data is displayed in easy-to-read tables, and the landing area can be slightly adapted to your own requirements. Data sorting, filtering and pagination are implemented. An interesting solution is the implementation of collective changes, i.e. the possibility of introducing the same change of the selected parameter, but in many positions at once. ',
            'Customer communication tools have been implemented: a complete mechanism for collecting customer requests for the resale of their products, storing those requests and making decisions to cooperate with those requests. The whole thing is aggregated in one view, where you can manage tickets, search for them, etc. ',
            'The message view, on the other hand, aggregates the correspondence with individual clients in the form of a chat, which contains information about the correspondence and the entire history of the conversation.',
            'An important part of the application is the ability to store customer data and photos / scans of contracts. If you want to display the contract in the CRM panel admin, the contracts are downloaded from the AWS cloud after server authorization and served only to be displayed in the panel, they are private. ',
            'The application also includes a dashboard view in which an alert system for service people has been implemented, which suggests what is currently happening in the area of ​​the portal, products, customers and communication. For example, is there a missing photo for the product added to the catalog, are the sliders in the portal correctly positioned, is there a new correspondence from the client or a proposal for cooperation and decisions should be made. ',
            'The application automatically sends e-mails to clients and to the administrator\'s address, the e-mails are clearly formatted with graphic templates.',
          ],
          pl: [
            'Aplikacja serwerowa komunikuje się z bardzo szybką bazą danych umieszczoną w chmurze, w której przechowywane są wszelkie informacje o produktach, meta dane dot. wyświetlania stron oraz klientów. Duże pliki statyczne, czyli zdjęcia produktów, przechowywane są w chmurze AWS, z której następnie mogą być błyskawicznie serwowane do przeglądarek użytkowników.',
            'Zdjęcia produktów zanim trafią do chmury są odpowiednio optymalizowane na serwerze. Dane przechodzące przez serwer są w pełni walidowane a ich poprawność jest sprawdzana.',
            'Mechanika działania aplikacji jest autorska i w pełni dostosowana do wymogów klient. Zawiera szereg udogodnień dla administratora, z których można korzystać w admin panelu.',
            'Panel agreguje i wyświetla dane w następujących widokach: dashboard, produkty, grupy produktowe, marki, klienci, sety propozycji, wiadomości, oferty odsprzedaży, subskrybenci. W każdym z tych widoków dane wyświetlane są w czytelnych tabelach, k†órych wydląd można nieco dostosować do włąsnych wymogów. Zaimplementowanu sortowanie i filtorwanie danych oraz paginację. Ciekawym rozwiązaniem jest wdrożenie zmian zbiorczych, czyli możliwość wporwadzenia takiej samej zmiany wybranego parametru ale w wielu pozycjach na raz.',
            'Wrożono narzędzia komunikacji z klientami: pełny mechanizm zbierania zgłoszeń klientów odsprzedaży ich produktów, przechowywania tych zgłoszeń i dokonywania decyzji o współpracy w ramach tych zgłoszeń. Całość agregowana jest w jednym widoku, w którym można zarządzać zgłoszeniami, wyszukiwać je itp.',
            'Widok wiadmości natomiast agreguje korespondecje z poszczególnymi klientami w formie czatu, który zawiera informacje czego dotyczy korespondencja i całą historię danej rozmowy.',
            'Istotną częścią aplikacji jest możliwość przechowywania danuch dot. klientów oraz zdjęć/skanów umów. W wypadku chęci wyświetlenia umowy w admin panelu CRM, umowy pobierane są z chmury AWS po autoryzacji serwera i serwowane wyłącznie do wyświetlenia w panelu, są prywatne.',
            'Aplikacja zawiera także widok dashboardu, w którym wdrożono system alertów dla osób obsługujących, które podpowiadają, co aktualnie dzieje się w zakrsie portalu, produktów, klientów, komunikacji. Np. czy brakuje zdjęcia dla dodanego do katalogu produktu, czy slidery w poratlu są prawidłowo ustawione, czy pojawiła się nowa korespondencja od klienta lub propozycja współpracy i należy podjąć decyzje.',
            'Aplikacja automatycznie wysyłam maile do klientów oraz na adres administratora, maile są czytelnie sformatowane ne szablonach graficznych.',
          ],
        },
      },
    ],
    mainImage: sapanelMain,
  },
  technicalDetailsView: {
    techStact: {
      en: [
        'SERVER: node.js -> Express',
        'SERVER: MongoDB -> Mongoose',
        'SERVER: Nodemailer',
        'SERVER: aws-sdk',
        'SERVER: multer',
        'SERVER: sharp',
        'SERVER: jsonwebtoken',
        'SERVER: Express validator',
        'SERVER: mjml',
        'React',
        'Redux & Thunk',
        'Axios',
        'React Router',
        'Material-UI',
        'Formik',
        'Styled Components',
      ],
      pl: [
        'SERVER: node.js -> Express',
        'SERVER: MongoDB -> Mongoose',
        'SERVER: Nodemailer',
        'SERVER: aws-sdk',
        'SERVER: multer',
        'SERVER: sharp',
        'SERVER: jsonwebtoken',
        'SERVER: Express validator',
        'SERVER: mjml',
        'React',
        'Redux & Thunk',
        'Axios',
        'React Router',
        'Material-UI',
        'Formik',
        'Styled Components',
      ],
    },
    techDescriptions: [
      {
        id: 'techsapanel1',
        title: { en: 'technicals', pl: 'technikalia' },
        description: {
          en: [
            'The CRM and CMS app is a full-stack project. It includes the Node.js / Express.js application on the server side and the front-end application in React which is the administration panel. To speed up the work in the panel views, Material-UI components were used, but mostly heavily modified. All data is stored in the MongoDB cloud database, static graphic files are processed by the server during the upload using Sharp and after optimization they are loaded into the AWS cloud in several resolutions, so that they can be served from there in a resolution appropriate for a given device, improving the speed of loading views.' ,
            'All data is validated on the server. Authentication and authorization system for the administrator was made, both data and views on the front were dependent on the level of authorization. ',
            'Data from the database via API on the server are sent to the panel and stored in Redux. The panel admin views are always updated with the current data from the server. ',
            'All activities of managing products, clients, photos, etc. are related to asynchronous actions that change data on the server, always give full feedback and are connected with error handling, the user is not left without information while performing operations in the panel.',
            'Nodemailer and MJML were used to handle e-mail messages.',
            'Some interesting solutions - e.g. collective change of object parameters described on the general page of this project and alerts in the dashboard view to help the administrator understand the status of products and help keep up to date with customer issues.',
          ],
          pl: [
            'Aplikajca CRM i CMS jest projektem typu fullstack. Zawiera aplikację Node.js / Express.js po stronie serwera oraz fronotową aplikację w React będącą panelem administracyjnym. Dla przyśpieszenia prac w widokach panelu wykorzystano komponenty Material-UI jednak w większości mocno zmodyfikowane. Wszelkie dane przechowywane są w chmurowej bazie MongoDB, statyczne pliki graficzne podczas uploadu obrabiane są przez serwer za pomocą Sharp i po optymalizacji ładowane do chmury AWS w kilku rozdzielczościach, aby potem stamtąd mogły być serwowane w odpowiedniej dla danego urządzenia rozdzielczości poprawiając prędkość ładowania widoków.',
            'Wszelkie dane są walidowane na serwerze. Wykonano system autentykacji i autoryzacji dla administratora, zarówno dane jak i widoki na froncie uzależniono od poziomu uprawnień.',
            'Dane z bazy poprzez API na serwerze przesyłane są do panelu a w nim przechowywane w Redux. Widoki admin panelu zawsze uaktualniane są o bieżące dane z serwera.',
            'Wszystkie działania zarządzania produktami, klientami, zdjęciami itd. powiązane są z asynchronicznymi akcjami zmieniającymi dane na serwerze, dają zawsze pełny feedback oraz połączone są z obsługą błędów, użytkownik nie jest pozostawiony bez informacji podczas wykonywania operacji w panelu.',
            'Do obsługi wiadomości mailowych wykorzystano Nodemailera oraz MJML.',
            'Kilka ciekawych rozwiązań - np. zbiorcza zmiana parametrów obiektu opisana na stronie ogólnej tego projektu oraz alerty w widoku dashboard ułatwiające administratorowi zrozumienie statusu produktów i pomagające w byciu na bieżąco ze sprawami klientów.',
          ],
        },
      },
    ],
  },
};

export default sapanel;
