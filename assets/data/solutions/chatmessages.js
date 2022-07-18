import chat1 from 'public/images/solutions/chat/solution-chat1.jpg';
import chat2 from 'public/images/solutions/chat/solution-chat2.jpg';
import chat3 from 'public/images/solutions/chat/solution-chat3.jpg';

const chatmessages = {
  slug: 'chat-messages',
  title: {
    en: 'Interactive handling of customer inquiries',
    pl: 'Sprawne prowadzenie korespondencji z klientami',
  },
  movie: 'https://www.youtube.com/embed/L-0PzSsEDxQ?start=0&autoplay=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3',
  shortDescription: {
    en: "We have implemented a system that improves the company\'s communication with its potential customers. Our client received a panel for tracking correspondence threads and conducting them in an orderly manner. Through the portal, the company\'s customers can quickly create a conversation thread with regard to a specific product or a general topic. Users receive notifications of changes to their thread and can continue a specific conversation in a private dedicated view.",
    pl: 'Wdrożyliśmy system usprawniający komunikację firmy z jej potencjalnymi klientami. Nasz klient otrzymał panel do śledzenia wątków korespondencji i prowadzenia jej w uporządkowany sposób. Klienci firmy poprzez portal mają możliwość szybkiego utworzenia wątku rozmowy w odniesieniu do konkretnego produktu lub też odnośnie tematu ogólnego. Użytkownicy otrzymują powiadomienia o zmianach w swoim wątku i mogą kontynuować konkretną rozmowę w prywatnym dedykowanym widoku.',
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
      id: 'trednn543',
      img: chat1,
    },
    {
      id: 'df44re543',
      img: chat2,
    },
    {
      id: 'jh74rt735',
      img: chat3,
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
          'user interface for initiating correspondence in the browser',
          'interface for managing threads in the browser for the company',
          'the main application works on the server side',
          'accepts messages, validates, saves them in the database',
          'the application sends automatic e-mail notifications',
          'the application generates a private view of a specific correspondence to track it only for user with an individual link',
          'possibility to create a correspondence for each product separately',
          'possibility of creating general correspondence from the portal',
          'information for the company about the status of individual correspondences, automatic notifications about the need to answer',
        ],
        pl: [
          'interfejs do inicjowania korespondencji w przeglądarce dla użytkownika',
          'interfejs do zarządzania wątkami w przeglądarce dla zarządzającego',
          'aplikacja właściwa działa po stronie serwera',
          'przyjmuje wiadomości, waliduje, zapisuje w bazie danych',
          'aplikacja wysyła automatyczne e-maile z potwierdzeniami',
          'aplikacja generuje prywatny widok konkretnej korespondencji do jej śledzenia tylo dla osób posiadających indywidualny link',
          'możliwość utworzenia wątku w odniesieniu do każdego produktu oddzielnie',
          'możliwość utowrzenia ogólnej korespondencji z portalu',
          'informacja dla zarządzającego o statusach poszczególnych wątków, automatyczne powiadomienia o konieczności odpowiedzi',
        ],
      },
    },
    longDescription: {
      en: [
        "We have implemented a system that improves the company\'s communication with its potential customers. Our client received a panel for tracking correspondence threads and conducting them in an orderly manner. Through the portal, the company\'s customers can quickly create a conversation thread with regard to a specific product or a general topic. Users receive notifications of changes to their thread and can continue a specific conversation in a private dedicated view.",
        'Thanks to this, the time of contact initiation by a potential client, and thus the continuation of the thread, is very short, the expenditure of effort is small and the client does not leave the portal or even the view of a specific product that he is interested in. This should encourage contact and the company that owns the tool can then more easily convert the inquiry into a sale. Users do not have to use their own mail box, they do not have to search for the view with contact details in portal.',
        'The message delivered to the company from the client already contains information about the specific product the question concerns. The management company has access to the view in the panel in which all threads are organized, which increases the efficiency of exchanging messages. No question from a potential customer will be missed.',
      ],
      pl: [
        'Wdrożyliśmy system usprawniający komunikację firmy z jej potencjalnymi klientami. Nasz klient otrzymał panel do śledzenia wątków korespondencji i prowadzenia jej w uporządkowany sposób. Klienci firmy poprzez portal mają możliwość szybkiego utworzenia wątku rozmowy w odniesieniu do konkretnego produktu lub też odnośnie tematu ogólnego. Użytkownicy otrzymują powiadomienia o zmianach w swoim wątku i mogą kontynuować konkretną rozmowę w prywatnym dedykowanym widoku.',
        'Dzięki temu czas zainicjowania kontaktu przez potencjalnego klienta a otem dalszego prowadzenia wątku jest bardzo krótki, nakłady siły niewielkie a klient nie opuszcza portalu czy nawet widoku konkretnego produktu, którym jest zainteresowany. To powinno zachęcić do podjęcia kontaktu a firma posiadająca narzędzie może następnie łatwiej doprowadzić do konwersji zapytania w sprzedaż. Użytkownicy nie muszą używać własnej skrzynki nadawczej, nie muszą szukać zakładki z danymi kontaktowymi.',
        'Wiadomość docierająca do firmy od klienta jest już opatrzona informacją, jakiego konkretnie produktu dotyczy pytanie. Firma zarządzająca ma dostęp do widoku w panelu, w którym wszystkie wątki są uporządkowane co zwiększa efektywność prowadzenia wymiany wiadomości. Żadne pytanie od potencjalnego klienta nie zostanie pominięte.',
      ],
    },
  },
};

export default chatmessages;
