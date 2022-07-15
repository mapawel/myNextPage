import quiz1Img from 'public/images/projects/quizgame/quiz1.jpg';
import quiz2Img from 'public/images/projects/quizgame/quiz2.jpg';
import quiz3Img from 'public/images/projects/quizgame/quiz3.jpg';
import quiz4Img from 'public/images/projects/quizgame/quiz4.jpg';
import quiz5Img from 'public/images/projects/quizgame/quiz5.jpg';
import quizMain from 'public/images/projects/quizgame/quizMainBig.png';

const quiz = {
  slug: 'quizgame',
  title: {
    en: 'Quiz Game',
    pl: 'Quiz Game',
  },
  description: {
    en: 'Quiz game app with statistics and users accounts.',
    pl: 'Gra webowa Quiz. Zawiera statystyki i strefy użytkowników.',
  },
  live: {
    message: {
      en: [
        'NOTE, due to the hosting of the trial version in the free plan, after the first entry into the project, you should wait up to 30 seconds until everything is built and the data is fully fetched.',
      ],
      pl: [
        'UWAGA, ze względu na hostowanie wersji testowej w darmowym planie, po pierwszym wejściu w projekt należy odczekać do 30 sekund aż wszystko zostanie zbudowane a dane w pełni wyświetlone.',
      ],
    },
    url: 'https://warm-harbor-74468.herokuapp.com/',
  },
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
};

export default quiz;
