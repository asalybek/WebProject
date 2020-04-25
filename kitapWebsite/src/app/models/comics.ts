export interface Comics{
  id: number;
  poster: string;
  name: string;
  category_id: number;
  rating: number;
  content: ComicsContent;
}
export interface ComicsContent{
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  img7: string;
  img8: string;
  img9: string;
  img10: string;
  img11: string;
  img12: string;
  img13: string;
  img14: string;
  img15: string;
  img16: string;
  img17: string;
  img18: string;
}
// export const comicsList: Comics[] = [
//   {   poster: 'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_1-724x1024.jpg',
//     name: 'Айша-бибі',
//     rating: 5,
//     content: ['https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_3-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_4-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_5-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_6-1-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_3-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_7-1-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_8-2-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_9-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_10-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_11-1-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_12-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_13-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_14-1-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_15-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_16-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_17-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/02/Aisha_Bibi_kz_18-724x1024.jpg'],
//     id: 101,
//     comic_category_name: 'Махаббат жыры'
//   },
//   {
//     poster: 'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz-1-724x1024.jpg',
//     name: 'Еңлік-Кебек',
//     rating: 4.5,
//     content: ['https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz1-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz2-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz3-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz4-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz5-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz6-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz7-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz8-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz9-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz10-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz11-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz12-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz13-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz14-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz15-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/ENLIK-KEBEK-kaz16-724x1024.jpg'],
//     id: 102,
//     comic_category_name: 'Махаббат жыры'
//   },
//   {
//     poster: 'https://qazcomics.kz/wp-content/uploads/2019/02/Oblozhka-dlya-komiksa-kaz-724x1024.jpg',
//     name: 'Қозы-к0рпеш Баян-сұлу',
//     rating: 5,
//     content: ['https://qazcomics.kz/wp-content/uploads/2019/02/Stranica1cvet-kaz-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica2cvet-kaz-1-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica3cvet-kaz-1-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica4cvet-kaz-1-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica5cvet-kaz-1-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica6cvet-kaz-1-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica7cvet-kaz-1-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica8cvet-kaz-1-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica9cvet-kaz-1-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica10cvet-kaz-1-724x1024.jpg',
// 'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica11cvet-kaz-1-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica12cvet-kaz-1-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica13cvet-kaz-1-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica14cvet-kaz-1-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica15cvet-kaz-1-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/Stranica16cvet-kaz-1-724x1024.jpg'],
// id: 103,
//   comic_category_name: 'Махаббат жыры'
// },
// { poster: 'https://qazcomics.kz/wp-content/uploads/2019/12/Page_1_kaz-724x1024.jpg',
//   name: 'Ер Төстік',
//   rating: 4.8,
//   content: ['https://qazcomics.kz/wp-content/uploads/2019/12/Page_2_kaz-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/12/Page_3_kaz-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/12/Page_4_kaz-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/12/Page_5_kaz-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/12/Page_6_kaz-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/12/Page_7_kaz-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/12/Page_8_kaz-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/12/Page_9_kaz-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/12/Page_10_kaz-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/12/Page_11_kaz-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/12/Page_12_kaz-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/12/Page_13_kaz-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/12/Page_14_kaz-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/12/Page_15_kaz-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/12/Page_16_kaz-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/12/Page_17_kaz-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/12/Page_18_kaz-724x1024.jpg'],
//   id: 201,
//   comic_category_name: 'Батырлар туралы',
// },
// {   poster: 'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus1-724x1024.jpg',
//   name: 'Алпамыс батыр',
//   rating: 5,
//   content: ['https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus2-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus3-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus4-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus5-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus6-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus7-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus8-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus9-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus10-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus11-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus12-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus13-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus14-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus15-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus16-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus17-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/alpamys_rus18-724x1024.jpg'],
//   id: 202,
//   comic_category_name: 'Батырлар туралы'
// },
// {
//   poster: 'https://qazcomics.kz/wp-content/uploads/2019/10/Page_1-724x1024.jpg',
//   name: 'Естай-Хорлан',
//   rating: 5,
//     content: ['https://qazcomics.kz/wp-content/uploads/2019/10/Page_2-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/10/Page_3-1-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/10/Page_4-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/10/Page_5-724x1024.jpg',
//   'https//qazcomics.kz/wp-content/uploads/2019/10/Page_6-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/10/Page_7-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/10/Page_8-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/10/Page_9-724x1024.jpg',
//     'https://qazcomics.kz/wp-content/uploads/2019/10/Page_10-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/10/Page_11-724x1024.jpg',
//     'https://qazcomics.kz/wp-content/uploads/2019/10/Page_12-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/10/Page_13-724x1024.jpg',
//     'https://qazcomics.kz/wp-content/uploads/2019/10/Page_14-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/10/Page_15-724x1024.jpg',
//     'https://qazcomics.kz/wp-content/uploads/2019/10/Page_16-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/10/Page_17-724x1024.jpg',
//     'https://qazcomics.kz/wp-content/uploads/2019/10/Page_18-724x1024.jpg'],
//   id: 203,
//     comic_category_name: 'Батырлар туралы',
// },
// {   poster: 'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_1-724x1024.jpg',
//   name: 'Балхаш',
//   rating: 5,
//   content: ['https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_2-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_3-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_4-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_5-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_6-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_7-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_8-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_9-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_10-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_11-724x1024.jpg'
//   , 'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_12-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_13-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_14-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_15-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_16-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_17-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2020/01/Balkhash_18-724x1024.jpg'],
//   id: 301,
//   comic_category_name: 'Тарихи орындар'
// },
// {
//   poster: 'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_0-724x1024.jpg',
//   name: 'Жұмбақтас',
//   rating: 5,
//     content: ['https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_1-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_2-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_3-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_4-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_5-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_6-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_7-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_8-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_9-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_10-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_11-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_12-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_13-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_14-724x1024.jpg',
//   'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_15-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/02/jum_kaz_16-724x1024.jpg'],
//   id: 302,
//   comic_category_name: 'Тарихи орындар'
// },
//   {
//     poster: 'https://qazcomics.kz/wp-content/uploads/2019/01/Cover_RUS-724x1024.jpg',
//     name: 'Шайтанкөл',
//     rating: 5,
//     content: ['https://qazcomics.kz/wp-content/uploads/2019/01/Str_1_RUS-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/01/Str_2_RUS-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/01/Str_3_RUS-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/01/Str_4_RUS-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/01/Str_5_RUS-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/01/Str_6_RUS-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/01/Str_7_RUS-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/01/Str_8_RUS-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/01/Str_9_RUS-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/01/Str_10_RUS-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/01/Str_11_RUS-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/01/Str_12_RUS-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/01/Str_13_RUS-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/01/Str_14_RUS-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/01/Str_15_RUS-724x1024.jpg', 'https://qazcomics.kz/wp-content/uploads/2019/01/Str_16_RUS-724x1024.jpg',
//       'https://qazcomics.kz/wp-content/uploads/2019/01/Str_17_RUS-724x1024.jpg'],
//     id: 303,
//     comic_category_name: 'Тарихи орындар'
//   }
// ];

