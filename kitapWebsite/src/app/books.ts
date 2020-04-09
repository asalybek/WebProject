export interface Book {
  id: number;
  name: string;
  author: string;
  imagesLinks: string;
}

export const books: Book[] = [
  {
    id: 5,
    name: 'Антология современной казахской поэзии',
    author: 'Белгісіз автор',
    imagesLinks: 'https://cdn.kitap.kz/storage/book/16b5dbcb5e6cef4338f9892b262845a6.png',
  },
  {
    id: 6,
    name: 'Ұлы даланың көне сарындары. 1-том',
    author: 'Белгісіз автор',
    imagesLinks: 'https://cdn.kitap.kz/storage/book/07025f07c701e0427db8e491e64a0bd4.png',
  },
  {
    id: 7,
    name: 'Қазақ халқының эпикалық жырлары, мифтері, ертегілері, аңыз әңгімелері',
    author: 'Әлкей Марғұлан',
    imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/1887/Img_book.jpg',
  },
  {
    id: 8,
    name: 'Нарынқұм зауалы',
    author: 'Мұхтар Шаханов',
    imagesLinks: 'https://cdn.kitap.kz/storage//uploads/books/2208/Img_book.jpg',
  },
];
