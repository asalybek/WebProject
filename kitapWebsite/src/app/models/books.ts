export interface Book {
  id: number;
  name: string;
  author: string;
  image: string;
  rating: number;
  category_id: number;
}

// export const books: Book[] = [
//   {
//     id: 11,
//     name: 'Антология современной казахской поэзии',
//     author: 'Белгісіз автор',
//     imagesLinks: 'https://cdn.kitap.kz/storage/book/16b5dbcb5e6cef4338f9892b262845a6.png',
//     book_category_name: 'Көркем әдебиет'
//   },
//   {
//     id: 12,
//     name: 'Ұлы даланың көне сарындары. 1-том',
//     author: 'Белгісіз автор',
//     imagesLinks: 'https://cdn.kitap.kz/storage/book/07025f07c701e0427db8e491e64a0bd4.png',
//     book_category_name: 'Көркем әдебиет'
//   },
//   {
//     id: 13,
//     name: 'Қазақ халқының эпикалық жырлары, мифтері, ертегілері, аңыз әңгімелері',
//     author: 'Әлкей Марғұлан',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/1887/Img_book.jpg',
//     book_category_name: 'Көркем әдебиет'
//   },
//   {
//     id: 14,
//     name: 'Нарынқұм зауалы',
//     author: 'Мұхтар Шаханов',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/2208/Img_book.jpg',
//     book_category_name: 'Көркем әдебиет'
//   },
//   {
//     id: 15,
//     name: 'Жау тылындағы бала',
//     author: 'Оралхан Бөкей',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/2010/Img_book.jpg',
//     book_category_name: 'Көркем әдебиет'
//   },
//   {
//     id: 16,
//     name: 'Аңыз дастандар',
//     author: 'Мәшһүр Жүсіп Көпейұлы',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/2637/Img_book.jpg',
//     book_category_name: 'Көркем әдебиет'
//   },
//   {
//     id: 17,
//     name: 'Ұлпан',
//     author: 'Ғабит Мүсірепов',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/760/Img_book.jpg',
//     book_category_name: 'Көркем әдебиет'
//   },
//   {
//     id: 18,
//     name: 'Ақиқат пен аңыз',
//     author: 'Әзілхан Нұршайықов',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/2095/Img_book.jpg',
//     book_category_name: 'Көркем әдебиет'
//   },
//   {
//     id: 19,
//     name: 'Қызыл жебе. I кітап',
//     author: 'Шерхан Мұртаза',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/1780/Img_book.jpg',
//     book_category_name: 'Көркем әдебиет'
//   },
//   {
//     id: 110,
//     name: 'Махаббат, қызық мол жылдар',
//     author: 'Әзілхан Нұршайықов',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/2098/Img_book.jpg',
//     book_category_name: 'Көркем әдебиет'
//   },
//   {
//     id: 21,
//     name: 'Жасампаз жандардың 7 дағдысы',
//     author: 'Стивен Р. Кови',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/_6175/Img_book_1565841551.jpg',
//     book_category_name: 'Ғылыми әдебиет'
//   },
//   {
//     id: 22,
//     name: 'Мемлекеттік басқарудың теориясы мен тәжірибесіМемлекеттік басқарудың теориясы мен тәжірибесі',
//     author: 'Мырзагелді Кемел',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4845/Img_book.jpg',
//     book_category_name: 'Ғылыми әдебиет'
//   },
//   {
//     id: 23,
//     name: 'Түркі филологиясына кіріспе (Оқулық)',
//     author: 'Р.А. Авакова, С.Б. Бектемирова',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4522/Img_book.jpg',
//     book_category_name: 'Ғылыми әдебиет'
//   },
//   {
//     id: 24,
//     name: 'Шарль Луи де Монтескьё. Заңдар рухы туралы',
//     author: 'Шарль Луи де Монтескьё',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/928/Img_book.jpg',
//     book_category_name: 'Ғылыми әдебиет'
//   },
//   {
//     id: 25,
//     name: 'Қазақ әдеби тілінің тарихы (ХV-ХІХ ғасырлар)',
//     author: 'Рәбиға Сыздықова',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4702/Img_book.jpg',
//     book_category_name: 'Ғылыми әдебиет'
//   },
//   {
//     id: 26,
//     name: 'Қытай тарихы (Ежелгі және орта ғасырлар кезеңі)',
//     author: 'Нұржамал Алдабек',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4365/Img_book.jpg',
//     book_category_name: 'Ғылыми әдебиет'
//   },
//   {
//     id: 27,
//     name: 'Sapiens: Адамзаттың қысқаша тарихы',
//     author: 'Юваль Ноаһ Харари',
//     imagesLinks: 'https://cdn.kitap.kz/storage/book/5bdb3d245d6b2b64633c16e1f135259b.png',
//     book_category_name: 'Ғылыми әдебиет'
//   },
//   {
//     id: 28,
//     name: '"Қасым ханның қасқа жолы", "Есім ханның ескі жолы" заңдарына арналған пікірлер',
//     author: 'Белгісіз автор',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/1558/Img_book.jpg',
//     book_category_name: 'Ғылыми әдебиет'
//   },
//   {
//     id: 29,
//     name: 'Педагогика',
//     author: 'Мағжан Жұмабаев',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4676/Img_book.jpg',
//     book_category_name: 'Ғылыми әдебиет'
//   },
//   {
//     id: 210,
//     name: 'Өнер тарихы',
//     author: 'Гомбрих Эрнст',
//     imagesLinks: 'https://cdn.kitap.kz/storage/book/06b0de4c7c681f203a2d569f4c8e2d21.jpeg',
//     book_category_name: 'Ғылыми әдебиет'
//   },
//   {
//     id: 31,
//     name: 'Эрэмгий агтыг эмээллэж ("Ереуіл атқа ер салмай". Моңғол тілінде)',
//     author: 'Махамбет Өтемісұлы',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/5564/Img_book_1533699134.png',
//     book_category_name: 'Қазақ әдебиеті шет тілдерде'
//   },
//   {
//     id: 32,
//     name: 'Bauirzhan Momushuly. “Catatan Pegawai Tentera” ("Қолбасшының күнделігі". Бахаса тілінде)',
//     author: 'Бауыржан Момышұлы',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4856/Img_book_1522662019.png',
//     book_category_name: 'Қазақ әдебиеті шет тілдерде'
//   },
//   {
//     id: 33,
//     name: 'Nurlan Onzhanov. "Peacemaker the Syrian conundrum" (" Бітімгер: Сирия түйіні". Ағылшын тілінде)',
//     author: 'Нұрлан Онжанов',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/5298/Img_book_1522661628.png',
//     book_category_name: 'Қазақ әдебиеті шет тілдерде'
//   },
//   {
//     id: 34,
//     name: 'Justo Jorge Padrón. "Antología de la poesía kazaja contemporánea" (Хусто Хорхе Падрон. ' +
//       '"Заманауи қазақ поэзиясының антологиясы". Испан тілінде)',
//     author: 'Justo Jorge Padrón',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/5555/Img_book_1522660483.png',
//     book_category_name: 'Қазақ әдебиеті шет тілдерде'
//   },
//   {
//     id: 35,
//     name: '"Көшпенділер. Алмас қылыш. Бірінші бөлім". Араб тілінде',
//     author: 'Ілияс Есенберлин',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/5582/Img_book_1539164629.jpeg',
//     book_category_name: 'Қазақ әдебиеті шет тілдерде'
//   },
//   {
//     id: 36,
//     name: '"Йолдызлар елый да белә..." (Татар тілінде)',
//     author: 'Нұрлан Оразалин',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/5630/Img_book_1541420276.jpeg',
//     book_category_name: 'Қазақ әдебиеті шет тілдерде'
//   },
//   {
//     id: 37,
//     name: 'Нурсултон Назарбоев. "Роҳи Қазоқистон" ("Қазақстан жолы". Тәжік тілінде)',
//     author: 'Нұрсұлтан Әбішұлы Назарбаев',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/5594/Img_book_1539170338.jpeg',
//     book_category_name: 'Қазақ әдебиеті шет тілдерде'
//   },
//   {
//     id: 38,
//     name: 'Mirjaqip Duwlatuli. "Bahtsiz Jamal" ("Бақытсыз Жамал". Түрік тілінде)',
//     author: 'Мыржақып Дулатов',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/5588/Img_book_1539168869.jpeg',
//     book_category_name: 'Қазақ әдебиеті шет тілдерде'
//   },
//   {
//     id: 39,
//     name: 'Abdi-Zhamil Nurpeisov. "Blod och svett" ("Қан мен тер". Швед тілінде, 2-кітап)',
//     author: 'Әбдіжәмил Нұрпейісов',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/5559/Img_book_1522659428.png',
//     book_category_name: 'Қазақ әдебиеті шет тілдерде'
//   },
//   {
//     id: 310,
//     name: 'Iljas JESENBERLIN. Kočovníci. Začarovaný meč. (Көшпенділер. Алмас қылыш. Чех тілінде, 1-кітап)',
//     author: 'Ілияс Есенберлин',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4857/Img_book.jpg',
//     book_category_name: 'Қазақ әдебиеті шет тілдерде'
//   },
//   {
//     id: 41,
//     name: 'Қиял-ғажайып ертегілер',
//     author: 'Белгісіз автор',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4052/Img_book_1519016464.jpeg',
//     book_category_name: 'Балалар әдебиеті'
//   },
//   {
//     id: 42,
//     name: 'Гулливердің саяхаттары',
//     author: 'Джонатан Свифт',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/1705/Img_book.jpg',
//     book_category_name: 'Балалар әдебиеті'
//   },
//   {
//     id: 43,
//     name: 'Х.К.Андерсеннің ертегілері (аударма)',
//     author: 'Серік Ерғали',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4578/Img_book.jpg',
//     book_category_name: 'Балалар әдебиеті'
//   },
//   {
//     id: 44,
//     name: '"Британ ертегілері" (ағылшын тілінен аударма)',
//     author: 'Кеңесбаева Үрилә',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4858/Img_book.jpg',
//     book_category_name: 'Балалар әдебиеті'
//   },
//   {
//     id: 45,
//     name: 'Қосу мен азайту',
//     author: 'Асқар Жұмаділдаев',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4692/Img_book.jpg',
//     book_category_name: 'Балалар әдебиеті'
//   },
//   {
//     id: 46,
//     name: 'Геометриялық фигуралар',
//     author: 'Асқар Жұмаділдаев',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4695/Img_book.jpg',
//     book_category_name: 'Балалар әдебиеті'
//   },
//   {
//     id: 47,
//     name: '1-том: Жапырақтар: балаларға арналған өлеңдер, мысалдар, жаңылтпаш, жұмбақтар, санамақтар, аудармалар',
//     author: 'Абдрахман Асылбек',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4666/Img_book.jpg',
//     book_category_name: 'Балалар әдебиеті'
//   },
//   {
//     id: 48,
//     name: 'Жабайы алма',
//     author: 'Сайын Мұратбеков',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/1300/Img_book.jpg',
//     book_category_name: 'Балалар әдебиеті'
//   },
//   {
//     id: 49,
//     name: 'Менің атым - Қожа',
//     author: 'Бердібек Соқпақбаев',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/1732/Img_book.jpg',
//     book_category_name: 'Балалар әдебиеті'
//   },
//   {
//     id: 410,
//     name: 'Балалық шаққа саяхат',
//     author: 'Бердібек Соқпақбаев',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/1677/Img_book.jpg',
//     book_category_name: 'Балалар әдебиеті'
//   },
//   {
//     id: 51,
//     name: 'Жолбарыс терісін жамылған батыр',
//     author: 'Шота Руставели',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/3764/Img_book.jpg',
//     book_category_name: 'Әлем әдебиеті'
//   },
//   {
//     id: 52,
//     name: 'Ұсқынсыз үйрек',
//     author: 'Ханс Кристиан Андерсен',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4307/Img_book.jpg',
//     book_category_name: 'Әлем әдебиеті'
//   },
//   {
//     id: 53,
//     name: 'Күйреу',
//     author: 'Рабиндранат Тагор',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4144/Img_book.jpg',
//     book_category_name: 'Әлем әдебиеті'
//   },
//   {
//     id: 54,
//     name: 'Шөл даланы кесіп өту',
//     author: 'Мулуд Маммери',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/3609/Img_book.jpg',
//     book_category_name: 'Әлем әдебиеті'
//   },
//   {
//     id: 55,
//     name: 'Ескерткіш',
//     author: 'Дулат Исабеков',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/_445/Group 12 Copy 11.png',
//     book_category_name: 'Әлем әдебиеті'
//   },
//   {
//     id: 56,
//     name: 'Робинзон Крузо',
//     author: 'Даниэль Дефо',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/_1679/Img_book_1565856661.png',
//     book_category_name: 'Әлем әдебиеті'
//   },
//   {
//     id: 57,
//     name: 'Мартин Иден',
//     author: 'Джек Лондон',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/4663/Img_book.jpg',
//     book_category_name: 'Әлем әдебиеті'
//   },
//   {
//     id: 58,
//     name: 'Бовари ханым',
//     author: 'Гюстав Флобер',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/944/Img_book.jpg',
//     book_category_name: 'Әлем әдебиеті'
//   },
//   {
//     id: 59,
//     name: 'Жолы болғыш үшеу',
//     author: 'Ағайынды Гриммдер',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/439/Img_book.jpg',
//     book_category_name: 'Әлем әдебиеті'
//   },
//   {
//     id: 510,
//     name: 'Спартак',
//     author: 'Рафаэлло Джованьоли',
//     imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/3611/Img_book.jpg',
//     book_category_name: 'Әлем әдебиеті'
//   }
// ];
