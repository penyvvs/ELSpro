// core version pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


try {
	const tabs = document.querySelectorAll(".schedule__tab");
	const contents = document.querySelectorAll(".schedule__content-item");

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			// Удаляем активный класс у всех табов и контента
			tabs.forEach((t) => t.classList.remove("schedule__tab_active"));
			contents.forEach((c) => (c.style.display = "none"));

			// Добавляем активный класс к нажатому табу и показываем соответствующий контент
			tab.classList.add("schedule__tab_active");
			contents[index].style.display = "block";
		});
	});

	// Показываем первый контент при загрузке
	contents.forEach((c, i) => (c.style.display = i === 0 ? "block" : "none"));
} catch (e) {}


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

try{
    const swiperBattles = new Swiper('.schedule__content-item', {
        slidesPerView: 4,
        spaceBetween: 38,
        simulateTouch: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
        nextEl: ".icon-arrow-right",
        prevEl: ".icon-arrow-left",
        },
        modules: [Pagination, Navigation],
});
} catch {}




import "/src/sass/style.scss";