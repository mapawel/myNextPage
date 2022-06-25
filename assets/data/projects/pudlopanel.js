import pudpanelMain from 'public/images/projects/pudpanel/pudloPanelMockup.png';
import pudpanel1 from 'public/images/projects/pudpanel/pudlowskapanel1.jpg';
import pudpanel2 from 'public/images/projects/pudpanel/pudlowskapanel2.jpg';
import pudpanel3 from 'public/images/projects/pudpanel/pudlowskapanel3.jpg';
import pudpanel4 from 'public/images/projects/pudpanel/pudlowskapanel4.jpg';
import pudpanel5 from 'public/images/projects/pudpanel/pudlowskapanel5.jpg';

const pudlopanel = {
  slug: 'online-shop-and-panel',
  title: {
    en: 'online shop and panel',
    pl: 'panel i silnik sklepu',
  },
  description: {
    en: 'On-line shop engine and shop administration panel.',
    pl: 'Silnik sklepu internetowego oraz panel administracyjny do jego zarządzania.',
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
      en: 'on-line shop engine and shop administration panel',
      pl: 'silnik sklepu internetowego oraz panel administracyjny do jego zarządzania',
    },
    scopeList: {
      listTitle: {
        en: 'Project scope:',
        pl: 'Zakres projektu:',
      },
      scopeTxts: {
        en: [
          'creating a complete online shop engine as a server application',
          'creating a browser application admin panel for the administration service of the shop',
          'creating administration panel views',
          'full data logic in the panel application and its connection with the shop engine, ensuring the possibility of managing sales and offer',
          'connecting the server application with the database, designing data models',
          'design and implementation of assortment management tools',
          'design and implementation of cart and order management tools',
          'creating a tool that optimizes product photos and places them in the cloud (AWS) for further use',
          'taking care of data security, authentication and authorization system',
          'creating data validators and error handling',
          'hosting of shop and panel applications',
        ],
        pl: [
          'stworzenie kompletnego silnika sklepu internetowego jako aplikacja serwerowa',
          'stworzenie aplikacji przeglądarkowej admin panelu do administracyjnej obsługi sklepu',
          'stworzenie widoków panelu administracyjnego',
          'pełna logika danych w aplikacji panelu i połączenie jej z silnikiem sklepu, zapewnienie możliwości zarządzania sprzedażą i ofertą',
          'połączenie aplikacji serwerowej z bazą danych, zaprojektowanie modeli danych',
          'zaprojektowanie i wykonianie narzędzi zarządzania asortymentem',
          'zaprojektowanie i wykonianie narzędzi zarządzania koszykami i zamówieniami',
          'stworzenie narzędzia optymalizującego zdjęcia produktów oraz umieszczającego ich w chmurze (AWS) do dalszego wykorzystania',
          'zadbanie o bezpieczeństwo danych, system autentykacji i autoryzacji',
          'stworzenie walidatorów danych oraz obsługi błędów',
          'hosting aplikacji sklepu i panelu',
        ],
      },
    },
    descriptionsForProject: [
      {
        id: 'descpudlopanel1',
        title: {
          en: 'type',
          pl: 'typ',
        },
        description: {
          en: [
            'An online shop engine, fullstack application: shop engine as a server application and a browser application that is an administration panel. Admin panel is responsive.',
          ],
          pl: [
            'Autorski silnik sklepu internetowego, aplikacja fullstack: silnik sklepu jako aplijacja serwerowa oraz aplikacja przeglądarkowa będąca panelem administracyjnym. Admin panej jest responsywny.',
          ],
        },
      },
      {
        id: 'descpudlopanel2',
        title: {
          en: 'goal',
          pl: 'cel',
        },
        description: {
          en: [
            'Creation of a complete online shop with an administration panel. The server application of the shop is to be an API for browser applications for users which communicate with it to be able to present the offered products and carry out the sales process. Creating an admin panel of the shop, in which it must be possible to manage the offer, prices, product groups, sales, discounts, carts, orders, order fulfillment statuses.',
          ],
          pl: [
            'Stworzenie kompletnego sklepu internetowego wraz z panelem administracyjnym. Serwerowa aplikacja sklepu ma być API dla przeglądarkowych aplikacji dla użytkowników, które komunikujac się z nią mają mieć możliwość prezentacji oferowanych produktów oraz realizowania procesu sprzedaży. Stworzenie panelu administracyjnego sklepu, w którym musi być możliwość zarządzania ofertą, cenami, grupami towarowymi, wyprzedażami, rabatami, koszykami, zamówieniami, statusami realizacji zamówień.',
          ],
        },
      },
      {
        id: 'descpudlopanel3',
        title: {
          en: 'design',
          pl: 'design',
        },
        description: {
          en: [
            "The design of the panel is not the priority here, but the views are neat and clear, focusing on clearly displaying data in tables or tabs. Tables include the possibility of sorting data, as well as searching and sorting them. The panel is responsive.",
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
            "The store engine communicates with a very fast database located in the cloud, where all information about products, customers, baskets and orders is stored. Large static files, i.e. photos of products, are stored in the AWS cloud, from which they can then be instantly served to users' browsers.",
            'Product photos are properly optimized on the server before they go to the cloud. The data passing through the server are fully validated and their correctness is checked. ',
            "The store engine is proprietary and fully customized to the customer's requirements, but it is so versatile that it can serve as the backbone of other stores after customization. It includes a number of facilities for the administrator that can be used in the admin panel. ",
            'The panel aggregates and displays data in the following views: products, product groups, customers, baskets, orders. In each of these views, the data is displayed in easy-to-read tables, and the landing area can be slightly adapted to your own requirements. There is implemented data sorting and filtering as well as pagination. An interesting solution is the implementation of collective changes, i.e. the possibility of introducing the same change of the selected parameter, but in many positions at once. For example, you can change the order fulfillment status for multiple orders at once instead of each separately. You can also, for example, with a few clicks, change the assignment to a product group of many products at once (e.g. throw 30 products at the same time into a discounted outlet group) instead of making many changes separately. ',
            'Tools for changing the currently existing baskets or orders have also been implemented - the administrator may propose a change of the terms of the contract if necessary (e.g. when there is a lack of a product during the execution of the order or the price was wrong). In such a situation, we will also take care of the customer of the store, who must confirm the acceptance of such changes by clicking on a private link. ',
            'The store engine automatically sends e-mails to customers regarding the status of order fulfillment, etc., and to the administrator in the case of a new order.',
          ],
          pl: [
            'Silnik sklepu komunikuje się z bardzo szybką bazą danych umieszczoną w chmurze, w której przechowywane są wszelkie informacje o produktach, klientach, koszykach i zamówieniach. Duże pliki statyczne, czyli zdjęcia produktów, przechowywane są w chmurze AWS, z której następnie mogą być błyskawicznie serwowane do przeglądarek użytkowników.',
            'Zdjęcia produktów zanim trafią do chmury są odpowiednio optymalizowane na serwerze. Dane przechodzące przez serwer są w pełni walidowane a ich poprawność sprawdzana.',
            'Silnik sklepu jest autorski i w pełni dostosowany do wymogów klient, jest jednak na tyle wszechstronny, że może służyć jako szkielet innych sklepów po dostosowaniu. Zawiera szereg udogodnień dla administratora, z których można korzystać w admin panelu.',
            'Panel agreguje i wyświetla dane w następujących widokach: produkty, grupy produktowe, klienci, koszyki, zamówienia. W każdym z tych widoków dane wyświetlane są w czytelnych tabelach, k†órych wydląd można nieco dostosować do włąsnych wymogów. Zaimplementowanu sortowanie i filtorwanie danych oraz paginację. Ciekawym rozwiązaniem jest wdrożenie zmian zbiorczych, czyli możliwość wporwadzenia takiej samej zmiany wybranego parametru ale w wielu pozycjach na raz. Przykładowo można zmienić status realziacji zamówienia dla wielu zamówień na raz zamiast każdego odzielnie. Można też przykładowo paroma kliknięciami zmienić przypisanie do grupy towarowej wielu produktów na raz (np. wrzucenie 30 produktów jednocześnie do grupy wyprzedażowej z rabatem) zamiast dokonywać wielu zmian oddzielnie.',
            'Wrożono także narzędzia do zmian aktualnie istniejących koszyków lub zamówień - administrator może zaproponować zmianę warunków realizaji zamówienia w razie potrzeby (np. gdy podczas realizacji zamówienia wystąpi brak produktu lub cena była omyłkowa). W takiej sytuacji zadabno też o klienta sklepu, który akceptację takich zmian musi potwierdzoć klikając w prywatny link.',
            'Silnik sklepu automatycznie wysyłam maile do klientów dot. statusów realizacji zamówienia itp. oraz do administratora w wypadku nowego zamówienia.',
          ],
        },
      },
    ],
    mainImage: pudpanelMain,
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
        id: 'techpudlopanel1',
        title: { en: 'technicals', pl: 'technikalia' },
        description: {
          en: [
            'The store engine is a fullstack project. It includes the Node.js / Express.js application on the server side and the front-end application in React which is the administration panel. To speed up the work in the panel views, Material-UI components were used, but mostly heavily modified. All data is stored in the MongoDB cloud database, during the upload static image files are processed by the server using Sharp and, after optimization, uploaded to the AWS cloud in several resolutions, so that they can be served from there in a resolution appropriate for a given device, improving the speed of loading views.',
            'All data is validated on the server. A user and administrator authentication and authorization system was made, both the data and routes on the front were dependent on the level of authorization.',
            'Data from the database via API on the server are sent to the panel and stored in Redux. The panel admin views are always updated with the current data from the server. ',
            'All store management and sales activities in the panel are related to asynchronous actions changing the data on the server, always give full feedback and are connected with error handling, the user is not left without information while performing operations in the panel.',
            'Nodemailer was used to handle e-mail messages.',
            'Some interesting solutions - e.g. collective change of the object parameters described on the general page of this project and e.g. confirmation of the price each time it is to be displayed somewhere in the browser by the server, so that it is always up-to-date about the calculation of discounts resulting from various discount groups and the purpose of its verification.',
          ],
          pl: [
            'Silnik sklepu jest projektem typu fullstack. Zawiera aplikację Node.js / Express.js po stronie serwera oraz fronotową aplikację w React będącą panelem administracyjnym. Dla przyśpieszenia prac w widokach panelu wykorzystano komponenty Material-UI jednak w większości mocno zmodyfikowane. Wszelkie dane przechowywane są w chmurowej bazie MongoDB, statyczne pliki graficzne podczas uploadu obrabiane są przez serwer za pomocą Sharp i po optymalizacji ładowane do chmury AWS w kilku rozdzielczościach, aby potem stamtąd mogły być serwowane w odpowiedniej dla danego urządzenia rozdzielczości poprawiającej prędkość ładowania widoków.',
            'Wszelkie dane są walidowane na serwerze. Wykonano system autentykacji i autoryzacji użytkowników oraz administratora, zarówno dane jak i widoki na froncie uzależniono od poziomu uprawnień.',
            'Dane z bazy poprzez API na serwerze przesyłane są do panelu a w nim przechowywane w Redux. Widoki admin panelu zawsze uaktualniane są o bieżące dane z serwera.',
            'Wszystkie działania zarządzania sklepem i sprzedażą w panelu powiązane są z asynchronicznymi akcjami zmieniającymi dane na serwerze, dają zawsze pełny feedback oraz połączone są z obsługą błędów, użytkownik nie jest pozostawiony bez informacji podczas wykonywania operacji w panelu.',
            'Do obsługi wiadomości mailowych wykorzystano Nodemailera.',
            'Kilka ciekawych rozwiązań - np. zbiorcza zmiana parametrów obiektu opisana na stronie ogólnej tego projektu oraz np. potwierdzanie ceny każdorazowo gdy ma być wyświetlona gdzieś w przeglądarde przez serwer, aby zawsze była aktualne o kalkulacje rabatów wynikających z różnuch grup rabatowych oraz celem jej weryfikacji.',
          ],
        },
      },
    ],
  },
};

export default pudlopanel;
