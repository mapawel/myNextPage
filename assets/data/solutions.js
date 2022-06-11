import bluechip1Img from 'public/images/bluechip/bluechip1.jpg';
import bluechip2Img from 'public/images/bluechip/bluechip2.jpg';
import bluechip3Img from 'public/images/bluechip/bluechip3.jpg';

export const solutions = [
  {
    slug: 'interactive-handling-of-customer-inquiries',
    title: {
      en: 'Interactive handling of customer inquiries',
      pl: 'Interaktywna obsługa zapytań klienta',
    },
    shortDescription: {
      en: 'We have created a tool in which customers can submit sales proposals for their products. The operating company received a panel for managing inquiries so application can be filtered in one place, accepted or rejected in relation to each product. Customer automatically receives e-mail information with the status of his application and instructions and, if it is necessary, also automatically a cooperation agreement.',
      pl: 'Stworzyliśmy narzędzie, w którym klienci mogą zgłaszać propozycje sprzedaży swoich produktów. Firma obsługująca otrzymała panel do zarządzania zgłoszeniami. Zgłoszenia w jednym miejscu można filtrować, akceptować lub odrzucać w odniesieniu do każdego produktu. Klient otrzymuje automatycznie informacje mailowe ze statusem swojego zgłoszenia i instrukcjami oraz, jeśli firma uzna to za zasadne, również automatycznie umowę o współpracy.',
    },
    live: 'https://i-bluechip.pl/',
    creationDate: '2022-05-31',
    images: [
      {
        id: 'tredfg543',
        img: bluechip1Img,
      },
      {
        id: 'dfgtre543',
        img: bluechip2Img,
      },
      {
        id: 'jhgert735',
        img: bluechip3Img,
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
  },
];
