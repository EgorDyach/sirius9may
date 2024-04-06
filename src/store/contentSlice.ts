import { createSlice } from '@reduxjs/toolkit';
import Img1 from '../assets/heroSlides/slide1.jpg'
import Img2 from '../assets/heroSlides/slide2.jpg'
import Img3 from '../assets/heroSlides/slide2.jpg'
import Img4 from '../assets/heroSlides/slide1.jpg'
import gal1 from '../assets/gallary/gal1.jpg'
import gal2 from '../assets/gallary/gal2.jpg'
import gal3 from '../assets/gallary/gal3.jpg'
import gal4 from '../assets/gallary/gal4.jpg'
import gal5 from '../assets/gallary/gal5.jpg'

export type HeroSlideType = {
    img: string,
    name: string,
    dateOfLife: string;
}

export type GallaryItemType = {
    img: string,
    text?: string,
    published: Date
}

export type RootState = {
    counter: {
        contentForApp: {
            mainPage: {
                heroSlides: HeroSlideType[]
            },
            gallaryPage: {
                gallaryItems: GallaryItemType[]
            }
        }
    }
}

// const initialState = {
//     contentForApp: {
//         mainPage: {
//             heroSlides: [
//                 {
//                     img: Img1,
//                     name: "Федотов Владимир Сергеевич",
//                     dateOfLife: "(1924-2001)"
//                 },
//                 {
//                     img: Img2,
//                     name: "Бойков Дмитрий Валерьевич",
//                     dateOfLife: "(1915-1944)"
//                 },
//                 {
//                     img: Img3,
//                     name: "Орлов Семен Александрович",
//                     dateOfLife: "(1932-1999)"
//                 },
//                 {
//                     img: Img4,
//                     name: "Бобров Даниил Анатольевич",
//                     dateOfLife: "(1910-1966)"
//                 },
//             ],
//         },
//         historiesPage: {
//             historiesSlides: [
//                 {
//                     img: Img1,
//                     name: 'Федетов Семён Игоревич',
//                     dateOfLife: '1924 - 2001)',

//                 }
//             ]
//         },
//         gallaryPage: {
//             gallaryItems: [
//                 {
//                     img: gal4,
//                     text: 'qeqweqwe',
//                     published: new Date(22, 6, 2007),
//                 },
//                 {
//                     img: gal5,
//                     text: '',
//                     published: new Date(9, 2, 2008),
//                 },
//                 {
//                     img: gal1,
//                     text: '',
//                     published: new Date(7, 3, 2022),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal3,
//                     text: '',
//                     published: new Date(8, 4, 2024),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal1,
//                     text: '',
//                     published: new Date(7, 3, 2022),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal3,
//                     text: '',
//                     published: new Date(8, 4, 2024),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal1,
//                     text: '',
//                     published: new Date(7, 3, 2022),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal3,
//                     text: '',
//                     published: new Date(8, 4, 2024),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal1,
//                     text: '',
//                     published: new Date(7, 3, 2022),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal3,
//                     text: '',
//                     published: new Date(8, 4, 2024),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal1,
//                     text: '',
//                     published: new Date(7, 3, 2022),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal3,
//                     text: '',
//                     published: new Date(8, 4, 2024),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal1,
//                     text: '',
//                     published: new Date(7, 3, 2022),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal3,
//                     text: '',
//                     published: new Date(8, 4, 2024),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal1,
//                     text: '',
//                     published: new Date(7, 3, 2022),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal3,
//                     text: '',
//                     published: new Date(8, 4, 2024),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal1,
//                     text: '',
//                     published: new Date(7, 3, 2022),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//                 {
//                     img: gal3,
//                     text: '',
//                     published: new Date(8, 4, 2024),
//                 },
//                 {
//                     img: gal2,
//                     text: 'qweqweqweq',
//                     published: new Date(9, 6, 2022),
//                 },
//             ]
//         }
//     }
// };

const initialState = {
    contentForApp: {
        mainPage: {
            heroSlides: [
                {
                    img: Img1,
                    name: "Федотов Владимир Сергеевич",
                    dateOfLife: "(1924-2001)"
                },
                {
                    img: Img2,
                    name: "Бойков Дмитрий Валерьевич",
                    dateOfLife: "(1915-1944)"
                },
                {
                    img: Img3,
                    name: "Орлов Семен Александрович",
                    dateOfLife: "(1932-1999)"
                },
                {
                    img: Img4,
                    name: "Бобров Даниил Анатольевич",
                    dateOfLife: "(1910-1966)"
                },
            ],
        },
        historiesPage: {
            historiesSlides: [
                {
                    img: Img1,
                    name: 'Федетов Семён Игоревич',
                    dateOfLife: '1924 - 2001)',

                }
            ]
        },
        gallaryPage: {
            gallaryItems: [
                {
                    img: gal4,
                    text: 'qeqweqwe',
                    published: new Date(22, 6, 2007),
                },
                {
                    img: gal5,
                    text: '',
                    published: new Date(9, 2, 2008),
                },
                {
                    img: gal1,
                    text: '',
                    published: new Date(7, 3, 2022),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal3,
                    text: '',
                    published: new Date(8, 4, 2024),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal1,
                    text: '',
                    published: new Date(7, 3, 2022),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal3,
                    text: '',
                    published: new Date(8, 4, 2024),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal1,
                    text: '',
                    published: new Date(7, 3, 2022),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal3,
                    text: '',
                    published: new Date(8, 4, 2024),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal1,
                    text: '',
                    published: new Date(7, 3, 2022),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal3,
                    text: '',
                    published: new Date(8, 4, 2024),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal1,
                    text: '',
                    published: new Date(7, 3, 2022),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal3,
                    text: '',
                    published: new Date(8, 4, 2024),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal1,
                    text: '',
                    published: new Date(7, 3, 2022),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal3,
                    text: '',
                    published: new Date(8, 4, 2024),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal1,
                    text: '',
                    published: new Date(7, 3, 2022),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal3,
                    text: '',
                    published: new Date(8, 4, 2024),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal1,
                    text: '',
                    published: new Date(7, 3, 2022),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
                {
                    img: gal3,
                    text: '',
                    published: new Date(8, 4, 2024),
                },
                {
                    img: gal2,
                    text: 'qweqweqweq',
                    published: new Date(9, 6, 2022),
                },
            ]
        }
    }
};


const ContentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        }
});

  
  export default ContentSlice.reducer
  