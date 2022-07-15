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
    en: "Useful tool for monitoring traffic in clients' applications.",
    pl: 'Przydatne narzędzie do monitorowania ruchu w aplikacjach klientów.',
  },
  live: {
    message: {
      en: [
        'NOTE, for security reasons, we do not provide anonymous users with a test version of this product.',
        'Contact us, we will be happy to arrange an individual presentation.',
      ],
      pl: [
        'UWAGA, ze względów bezpieczeństwa nie udostępniamy aninimowym użytkownikom testowej wersji tego produktu.',
        'Skontaktuj się z nami, z przyjemnością umówimy się na indywidualną prezentację.',
      ],
    },
    url: null,
  },
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
      en: "a tool for monitoring traffic in clients' applications",
      pl: 'narzędzie do monitorowania ruchu w aplikacjach klientów',
    },
    scopeList: {
      listTitle: {
        en: 'Project scope:',
        pl: 'Zakres projektu:',
      },
      scopeTxts: {
        en: [
          'creating a server application',
          'creating views of a browser application for displaying data',
          'designing data models and how to store them',
          'connecting the application with the database',
          'authentication and authorization system',
          'implementation of live preview mode',
          'deploy the application',
        ],
        pl: [
          'stworzenie aplikacji serwerowej',
          'stworzenie widoków aplikacji przeglądarkowej do wyświetlania danych',
          'zaprojektowaniu modeli danych, sposobu ich przechowywania',
          'spięcie aplikacji z bazą danych',
          'system autentykacji i autoryzacji',
          'wdrożenie trybu podglądu live',
          'deploy aplikacji',
        ],
      },
    },
    descriptionsForProject: [
      {
        id: 'desclogger1',
        title: {
          en: 'type',
          pl: 'typ',
        },
        description: {
          en: [
            'A functional server application with a browser part presenting data views.',
          ],
          pl: [
            'Użytkowa aplikajca serwerowa wraz częścią przeglądarkową prezentującą widoki danych.',
          ],
        },
      },
      {
        id: 'desclogger2',
        title: {
          en: 'goal',
          pl: 'cel',
        },
        description: {
          en: [
            "Creating a simple and fast application, which is to intercept requests and API responses from other applications, save them in a fast database and display them in a readable way for the administrator. The application should serve a data view adapted to the user's needs, contain a live trim showing clearly what is happening in other applications from the side of their server.",
          ],
          pl: [
            'Stworzenie prostej i szybkiej aplikacji, które ma przechwytywać requesty i odpowiedzi API innych aplikacji, zapisywać je w szybkiej bazie danych i wyświetlać w czytelny sposób dla administratora. Aplikacja powinna serwować widok danych dostosowany do potrzeb uzytkownika, zawierać trym live prezentujący przejrzyście co w danym momencie dzieje się w innych aplikacjach od strony ich serwera.',
          ],
        },
      },
      {
        id: 'desclogger3',
        title: {
          en: 'design',
          pl: 'design',
        },
        description: {
          en: [
            'The appearance is not the most important here, but the browser page of the application is clear and clearly shows the viewed data. The views are based on the table, some of the columns can be turned off as needed. Rows containing more records are automatically collapsed but can be expanded for preview. The dark mode was used, which did not tire the recovery when analyzing the huge amount of data.',
          ],
          pl: [
            'Wygląd nie jest tu najważniejszy niemniej przeglądarkowa strona aplikacji jest przejrzysta i czytelnie pokazuje przegądane dane. Widoki oparte są na tabeli, których część kolumn można wyłączyć zależnie od potrzeb. Wiersze zawierające z większą objętością zapisów są automatycznie zwojane ale można je rozwijąć celem podglądu. Zastosowano tryb ciemny nie męczący wzrotu przy analizie ogromu danych.',
          ],
        },
      },
      {
        id: 'desclogger4',
        title: {
          en: 'solutions',
          pl: 'rozwiązania',
        },
        description: {
          en: [
            'The Logger application can be connected as a system for intercepting inquiries and responses to other server-based applications. The logger collects server query and response data and saves them in a fast database in an appropriate data template. Then the Logger panel view displays this data with filters and in a table, the appearance of which can be slightly modified. ',
            "The application allows you to view server logs of another application at a specific time and day or throughout the day. The entries are presented in a readable table and contain such information as the user's IP address, query time, response time, response code, query address, query, body. ",
            'Thanks to the application, it is very easy to track errors in the operation of other applications - check on which requests errors appear. You can also detect hacker attacks, see what and how is being attacked and strengthen the application protection systems earlier. ',
            'The application also includes a live witok, which automatically displays the data when anyone interacts with the watched application without having to refresh the browser data.',
            'The next version of the application will include the ability to create your own labels that can be pinned to specific types of queries and thanks to which you will be able to globally observe the use of the observed application and sort queries.',
          ],
          pl: [
            'Aplikację Logger można podłączać jako system przechwytywania zapytań i odpowiedzi do innych aplikacji działających serwerowo. Logger zbiera dane zapytania i odpowiedzi serwera oraz w odpowiednim szablonie danych zapisuje je w szybkiej bazie danych. Następnie widok panelu Loggera wyśwwietla te dane z uwzględnieniem filtrów oraz w tabeli, której wygląd można nieco zmodyfikować.',
            'Aplikacja umożliwia przeglądanie logów serwera innej aplikacji w konkretnej godzinie i dniu lub w całym dniu. Zapisy są prezentowane w czytelnej tabeli i zawierają takie informacje jak adres IP użytkownika, czas zapytania, czas odpowiedzi, kod odpowiedzi, adres zapytania, query, body.',
            'Dzięki aplikacji można bardzo łatwo namierzyć błędy działania inne aplikacji - sprawdzić na jakie zapytanie błędy się pojawiają. Można też wychwycić próby ataków hakerów, rozeznać co i jak jest atakowane i wcześniej wzmocnić systemy ochrony aplikacji.',
            'Aplikacja zawiera też witok live, który bez konieczności odświeżania danych przeglądarki automatycznie wyświetla dane w momencie, gdy ktokolwiek wejdzie w interakcje z obserwowaną aplikacją.',
            'Kolejna wersja aplikacji będzie zawierała możliwość tworzenia własnych etykiet, które będzie można przypinać do konkretnych typów zapytań i dzięki którym globalnie będize można obserwować przebieg użytkowania obserwowanej aplikacji oraz sortowanie zapytań.',
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
        'Styled Components',
        'Material UI',
        'Axios',
        'SWR',
        'Moment',
        'Formik',
        'Socket.IO',
        'SERVER: MongoDB -> Mongoose',
        'SERVER: Node.js => Express',
        'SERVER: Socket.IO',
      ],
      pl: [
        'React',
        'React Router',
        'Styled Components',
        'Material UI',
        'Axios',
        'SWR',
        'Moment',
        'Formik',
        'Socket.IO',
        'SERVER: MongoDB -> Mongoose',
        'SERVER: Node.js => Express',
        'SERVER: Socket.IO',
      ],
    },
    techDescriptions: [
      {
        id: 'techlogger1',
        title: { en: 'technicals', pl: 'technikalia' },
        description: {
          en: [
            'On the side of the application being watched, just implement the Morgan library and add a few lines of code. The Logger application receives logs of this application, saves them in the MongoDB database. It is then an API that serves the saved data to the browser-based React application which is a panel, where you can display this data in the correct form, filter. ',
            'Thanks to Socket.IO, the browser panel can also receive data about new entries in the database in the push (live) mode.',
            'Material UI was used for styling, the components were modified. The form (implemented Formik) of filters contains drop-downs, which are dynamic - the available options depend on the availability of the data (e.g. at what times the queries were made, these hours are presented in the filter so as not to display empty tables).',
            "Tables have modifiable columns and expandable rows when their size is large. The labeling system described on the project's homepage will be implemented soon.",
          ],
          pl: [
            'Po stronie obserwowanej aplikacji wystarczy wdrożyć bibliotekę Morgan i dodać kila linii kodu. Aplikacja Logger otrzymuje logi tej aplikacji, zapisuje je w bazie MongoDB. Stanowi następnie API serwujące zapisane dane do przeglądarkowej aplikacji React będącej panelem, gdzie można wyświetlać te dane we właśiwej formie, filtrować.',
            'Dzięki Socket.IO panel przeglądarkowy może także otrzymywać dane o nowych zapisach w bazie w trypie push (live).',
            'Do stylowania zastowosano Material UI, komponenty zmodyfikowano. Formularz (wdrożony Formik) filtrów zawiera drop-downy, które są dynamiczne - dostępne opcje zależą od dostępności danych (np. w jakich godzinach były zapytania, te godziny są prezentowane we filtrze, aby nie wyświetlać pustych tabel).',
            'Tabele mają modyfikowalen kolumny oraz rozwijalne wiersze, gdy ich objętość jest duża. Niebawem będzie wdrożony system etykiet opisany na stronie głównej projektu.',
          ],
        },
      },
    ],
  },
};

export default logger;
