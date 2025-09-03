// core version pagination modules:
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

try{
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        modules: [Pagination],
});
} catch {}


import "/src/sass/style.scss";