import expenses1Img from 'public/images/projects/expensesplanner/expenses1.jpg';
import expenses2Img from 'public/images/projects/expensesplanner/expenses2.jpg';
import expenses3Img from 'public/images/projects/expensesplanner/expenses3.jpg';
import expenses4Img from 'public/images/projects/expensesplanner/expenses4.jpg';
import expenses5Img from 'public/images/projects/expensesplanner/expenses5.jpg';
import expensesMain from 'public/images/projects/expensesplanner/expensesMainBig.png';

const expenses = {
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
};

export default expenses;
