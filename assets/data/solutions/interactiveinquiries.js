import interactive1 from 'public/images/solutions/interactive-handling/solution-interactive1.jpg';
import interactive2 from 'public/images/solutions/interactive-handling/solution-interactive2.jpg';
import interactive3 from 'public/images/solutions/interactive-handling/solution-interactive3.jpg';

const interactiveinquiries = {
  slug: 'interactive-handling-of-customer-inquiries',
  title: {
    en: 'Interactive handling of customer inquiries',
    pl: 'Interaktywna obsługa zapytań klienta',
  },
  movie: 'https://www.youtube.com/embed/zU54-g1UKek?start=0&autoplay=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3',
  shortDescription: {
    en: 'We have created a tool in which customers can submit sales proposals for their products. The operating company received a panel for managing inquiries so application can be filtered in one place, accepted or rejected in relation to each product. Customer automatically receives e-mail information with the status of his application and instructions and, if it is necessary, also automatically a cooperation agreement.',
    pl: 'Stworzyliśmy narzędzie, w którym klienci mogą zgłaszać propozycje sprzedaży swoich produktów. Firma obsługująca otrzymała panel do zarządzania zgłoszeniami. Zgłoszenia w jednym miejscu można filtrować, akceptować lub odrzucać w odniesieniu do każdego produktu. Klient otrzymuje automatycznie informacje mailowe ze statusem swojego zgłoszenia i instrukcjami oraz, jeśli firma uzna to za zasadne, również automatycznie umowę o współpracy.',
  },
  live: {
    message: {
      en: [
        'NOTE, the project is in production on the final domain and with the customers product data. However, you can view it on the test server with the test database attached.',
        'Due to the hosting of the trial version in the free plan, after the first entry into the project, you should wait up to 30 seconds until everything is built and the data is fully fetched.',
      ],
      pl: [
        'UWAGA, projekt w trakcie produkcji na finalnej domenie i z danymi produktowymi klienta. Możesz go jednak obejrzeć na serwerze testowym i z podpiętą testową bazą danych.',
        'Ze względu na hostowanie wersji testowej w darmowym planie, po pierwszym wejściu w projekt należy odczekać do 30 sekund aż wszystko zostanie zbudowane a dane w pełni wyświetlone.',
      ],
    },
    url: 'https://sa-ten.vercel.app/',
  },
  creationDate: '2022-05-31',
  images: [
    {
      id: 'tredfg543',
      img: interactive3,
    },
    {
      id: 'dfgtre543',
      img: interactive2,
    },
    {
      id: 'jhgert735',
      img: interactive1,
    },
  ],
  detailSolutionView: {
    bulletsList: {
      listTitle: {
        en: 'brief:',
        pl: 'w skrócie:',
      },
      listed: {
        en: [
          'user interface for inquiries in the browser',
          'management interface in the browser',
          'the main application works on the server side',
          'accepts data, validates, saves in the database',
          'photos from reports stored in the cloud',
          'optimization of photos on the server before uploading to the cloud',
          'preview of photos for the user during preparing an inquiry',
          'possibility to add many products on one application',
          'form with validation in the browser',
          'data validation on the server',
          'automatic e-mails with status summaries',
          'ability to manage notifications for individual products',
          'the possibility of placing an encrypted link to download the contract in response to the user',
        ],
        pl: [
          'interfejs do zgłoszeń w przeglądarce dla użytkownika',
          'interfejs do zarządzania w przeglądarce dla zarządzającego',
          'aplikacja właściwa działa po stronie serwera',
          'przyjmuje dane, waliduje, zapisuje w bazie danych',
          'zdjęcia ze zgłoszeń przechowywane w chmurze',
          'optymalizacja zdjęć na serwerze przez uploadem do chmury',
          'podgląd zdjęć dla użytkownika podczas uploadu',
          'możliwość dodania wielu produktów na jednym zgłoszeniu',
          'formularz z walidacją w przeglądarce',
          'walidacja danych na serwerze',
          'automatyczne e-maile z podsumowaniami statusów',
          'możliwość zarządzania zgłoszeniami w odniesieniu do poszczególnych produktów',
          'możliwość umieszczenia w odpowiedzi dla użytkownika zaszyfrowanego linka do pobrania umowy',
        ],
      },
    },
    longDescription: {
      en: [
        'Our client had a need to improve communication with his clients in terms of their products for resale. The aim was to obtain uniform and complete information in each application with photos of products and the possibility of storing the applications in one place, providing them with their statuses and reducing the response time to each new application. ',
        'We have created a tool where users can submit sales applications for their products through the customer portal. The necessary information on each product should be added. Several products can be placed on a single entry. The company handling the applications received a panel to manage them. They can filter, accept, or decline applications in one place for each of the products. Responses are generated automatically. The customer receives e-mail information with the status of his application and instructions and, if it is necessary, also automatically a cooperation agreement. The contract can be downloaded for a limited time at an encrypted link. ',
      ],
      pl: [
        'Nasz klient miał potrzebę usprawnienia komunikacji ze swoimi klientami w zakresie zgłąszania przez nich produktów do dalszej odsprzedaży. Celem było uzyskanie jednolitych i pełnych informacji w każdym zgłoszeniu wraz ze zdjęciami produktów oraz możliwość przechowywania zgłoszeń w jednym miejscu, opatrzenie ich statusami oraz skrócenie czasu odpowidzi na każde nowe zgłoszenie.',
        'Stworzyliśmy narzędzie, w którym użytkownicy mogą zgłaszać propozycje sprzedaży swoich produktów przez portal klienta. Do każdego zgłoszenia należy dodać niezbędne informacje dotyczące zgłaszanych produków. Na pojedyńczym zgłoszeniu można umieścić kilka produktów. Firma obsługująca zgłoszenia otrzymała panel do zarządzania nimi. Zgłoszenia w jednym miejscu można filtrować, akceptować lub odrzucać w odniesieniu do każdego z produktów. Odpowiedzi generowane są automatycznie. Klient otrzymuje informacje mailowe ze statusem swojego zgłoszenia i instrukcjami oraz, jeśli firma uzna to za zasadne, również automatycznie umowę o współpracy. Umowa jest możliwa do pobrania w limitowanym czasie pod zaszyfrowanym linkiem.',
      ],
    },
  },
};

export default interactiveinquiries;
