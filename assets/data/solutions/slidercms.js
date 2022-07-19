import slider1 from 'public/images/solutions/slider/slider1.jpg';
import slider2 from 'public/images/solutions/slider/slider2.jpg';
import slider3 from 'public/images/solutions/slider/slider3.jpg';

const slidercms = {
  slug: 'slider-cms',
  title: {
    en: 'CMS for a slider LIVE',
    pl: 'Zarządzanie treścią slidera LIVE',
  },
  movie:
    'https://www.youtube.com/embed/wbzS0GVPi8Q?start=0&autoplay=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3',
  shortDescription: {
    en: 'We provided our client with an easy-to-use tool for managing the content of the slider on their website. The edition works in live mode - changes in the portal are visible immediately, the user does not even have to refresh the page. The slider contains sets of related product proposals - you can easily add new sets or replace individual products in sets. The dashboard view additionally informs about the status of the slider. ',
    pl: 'Dostarczyliśmy naszemu klientowi proste w obsłudze narzędzie do zarządzania treścią slidera na ich poralu. Edycja działa w trybie live - zmiany w portalu są widoczne natychmiast, użytkownik nie musi nawet odświeżać strony. Slider zawiera sety propozycji powiązanych produktów - można łatwo dodawać nowe sety lub podmieniać poszczególne produkty w zestawach. Widok dashboardu dodatkowo informuje o statusie slidera.',
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
      id: 'tre12n543',
      img: slider1,
    },
    {
      id: 'df4t5e543',
      img: slider2,
    },
    {
      id: 'jh7d5t735',
      img: slider3,
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
          'view for managing the slider content in the browser (in the CMS panel) for the manager',
          'section in the dashboard in the CMS panel informing about the status of the slider',
          'the proper application works on the server side',
          'accepts data on products selected for the slider, validates, saves connections in the database',
          'preview of selected products',
          'slider products are fetched during the portal build and revalidated and additionally revalidated when the portal is used by customers, therefore the slider is always up-to-date and the presented data is the most recent possible',
        ],
        pl: [
          'widok do zarządzania treścią slidera w przeglądarce (w panelu CMS) dla zarządzającego',
          'sekcja w dashboard w panelu CMS informująca o statusie slidera',
          'aplikacja właściwa działa po stronie serwera',
          'przyjmuje dane o wybranych do slidera produktach, waliduje, zapisuje powiązania w bazie danych',
          'podgląd wybranych produków',
          'produkty slidera pobierane są podczas builda portalu oraz rewalidowane a dodatkowo rewalidowane podczas użytkowania portalu przez klientów, dlatego slider jest zawsze aktualny a prezentowane dane są najświeższe z możliwych',
        ],
      },
    },
    longDescription: {
      en: [
        'We provided our client with an easy-to-use tool for managing the content of the slider on their website. The edition works in live mode - changes in the portal are visible immediately, the user does not even have to refresh the page. The slider contains sets of related product proposals - you can easily add new sets or replace individual products in sets. The dashboard view also informs about the status of the slider.',
        'The user of the CMS panel has access to a simple view presenting the current status of each set displayed in the slider. You can easily and quickly add new sets, replace products. Preview of photos of added products improves operations. ',
        'Thanks to this, the slider is very easy and quick to manage and the CMS user can spend time on other business matters.',
        'Slider products to be displayed on the portal are fetched when publishing the portal and revalidated from time to time, but additionally they are always additionally revalidated during the use of the portal by each user. The slider is therefore always as up-to-date as possible. It cannot display out-of-date sets depending on who is viewing the portal and when. ',
      ],
      pl: [
        'Dostarczyliśmy naszemu klientowi proste w obsłudze narzędzie do zarządzania treścią slidera na ich poralu. Edycja działa w trybie live - zmiany w portalu są widoczne natychmiast, użytkownik nie musi nawet odświeżać strony. Slider zawiera sety propozycji powiązanych produktów - można łatwo dodawać nowe sety lub podmieniać poszczególne produkty w zestawach. Widok dashboardu dodatkowo informuje o statusie slidera.',
        'Użytkownik panelu CMS ma dostęp do prostego widoku prezentującego aktualny status każdego setu wyświetlanego w sliderze. Można łatwo i szybko dodawać nowe sety, podmieniać produkty. Podgląd zdjęć dodawanych produktów usprawnia operacje.',
        'Dzięki temu slider jest bardzo łatwo i szybko zarządzalny a użytkownik CMS może poświęcić czas na inne sprawy biznesowe.',
        'Produkty slidera do wyświetlenia w portalu pobierane są podczas publikowania portalu oraz rewalidowane co jakiś czas ale dodatkowo zawsze dodatkowo są rewalidowane podczas użytkowania portalu przez każdego klientów. Slider jest więc zawsze najbardziej aktualny, jak to tylko możliwe. Nie może wyświetlać nieaktualnych setów zależnie od tego kto i kiedy wyświetla portal.',
      ],
    },
  },
};

export default slidercms;
