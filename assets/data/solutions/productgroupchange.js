import groupchange1 from 'public/images/solutions/groupchange/groupchange1.jpg';
import groupchange2 from 'public/images/solutions/groupchange/groupchange2.jpg';
import groupchange3 from 'public/images/solutions/groupchange/groupchange3.jpg';

const productgroupchange = {
  slug: 'shop-panel-collective-products-change',
  title: {
    en: 'Shop panel - collective products change',
    pl: 'Panel sklepu - zbiorcza zmiana parametrów',
  },
  movie:
    'https://www.youtube.com/embed/LTjlR2-6RCY?start=0&autoplay=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3',
  shortDescription: {
    en: 'The panel of our online shop has many improvements that our customers can use. This time, we provided the functionality of collective change of various parameters of many products. Admin can set the same parameter for multiple products at once with one click, instead of editing each product separately. This resulted in time savings and convenience.',
    pl: 'Panel naszego sklepu online kryje wiele usprawnień, z których mogą korzystać nasi klienci. Tym razem dostarczyliśmy funkcjonalność zbiorczej zmiany różnych parametrów wielu produktów. Administrator może ustawić taki sam parametr dla wielu produktów na raz, jednym kliknięciem, zamiast edytować każdy produkt oddzielnie. Dało to oszczędność czasu i wygodę.',
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
  creationDate: '2022-05-31',
  images: [
    {
      id: 'tre12nt43',
      img: groupchange1,
    },
    {
      id: 'df4t5e5u3',
      img: groupchange2,
    },
    {
      id: 'jh7d5t7s5',
      img: groupchange3,
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
          'the functionality is implemented on the side of the shop engine running on the server',
          'shop engine is an API for shop views (for users)',
          'the shop engine is also an API for the panel view',
          'panel (frontend) has implemented functionality delivered by API from the shop engine of the described collective change',
          'the server validates all actions, ensures correctness, provides feedback as to changes taking into account each product',
          "the server makes changes to the parameters of the products, new parameters can be available in the API right away, the shop\'s frontend also has access to them",
          'data stored in a fast database',
        ],
        pl: [
          'funkcjonalność jest wprowadzona po stronie silnika sklepu działającego na serwerze',
          'silnik sklepu jest API dla widoków sklepu (dla użytkowników)',
          'silnik sklepu jest także API dla widoku panelu',
          'panel (frontend) ma zaimplementowaną funkcjonalność wystawioną po API z silnika sklepu opisanej zmiany zbiorczej',
          'serwer waliduje wszelkie akcje, czuwa nad poprawnością, daje informają o zmianach z uwzględnieniem każdego produktu',
          'serwer dokonuje zmian w parametrach produktów, nowe parametry mogą są dostępne w API od razu, frontend slepu ma także do nich dostęp',
          'dane przechowywane w szybkiej bazie danych',
        ],
      },
    },
    longDescription: {
      en: [
        'The panel of our online shop has many improvements that our customers can use. This time, we provided the functionality of collective change of various parameters of many products. Admin can set the same parameter for multiple products at once with one click, instead of editing each product separately. It was time-saving and convenient. ',
        'Just imagine that you have to change, for example, the assignment to a product group for 50 products at a time. In our panel, it is enough that you select these products and change the indicated parameter only once. For example, if you want to put all products from the "winter" collection in the "sale" group, because summer comes, you can easily filter the products from the "winter" group, select them with one click and then in one modal window enter a new parameter for assigning to a new group. The entire task can be completed in seconds. Imagine editing dozens of products and going into each of them separately... ',
        'Our solutions are intuitive, simple and fast. They save customers time and money.',
      ],
      pl: [
        'Panel naszego sklepu online kryje wiele usprawnień, z których mogą korzystać nasi klienci. Tym razem dostarczyliśmy funkcjonalność zbiorczej zmiany różnych parametrów wielu produktów. Administrator może ustawić taki sam parametr dla wielu produktów na raz, jednym kliknięciem, zamiast edytować każdy produkt oddzielnie. Dało to oszczędność czasu i wygodę.',
        'Wystarczy sobie wyobrazić, że musisz zmienić np. przypisanie do grupy towarowej dla 50 produktów na raz. W naszym panelu wystarczy, że zaznaczysz te produkty i tylko raz zmienisz wskazany parametr. Przykładowo jeśli chcesz wszystkie produkty z kolekcji "zima" umieścić w grupie "wyprzedaż", poniważ przyszło lato, możesz wyfiltrować łatwo produkty z grupy "zima", jednym kliknięciem zaznaczyć je a następnie w jednym okienku podać nowy parametr przypisania do nowej grupy. Całość zadania można wykonać w kilka sekund. Wyobraź sobie edycję dziesiątek produktów wchodząc w każdy z nich oddzielnie...',
        'Nasze rozwiązania są intuicyjne, proste i szybkie. Oszczędzają czas i pieniądze klientów.',
      ],
    },
  },
};

export default productgroupchange;
