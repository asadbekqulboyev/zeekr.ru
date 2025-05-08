window.addEventListener("load", () => {
  // header
  document
    .querySelector(".header__hamburger")
    .addEventListener("click", function () {
      document.querySelector(".header__hamburger").classList.toggle("open");
      document.querySelector(".header__mobile").classList.toggle("open");
      document.querySelector(".exit_menu").classList.toggle("open");
    });

  document.querySelector(".exit_menu").addEventListener("click", function () {
    document.querySelector(".header__hamburger").classList.remove("open");
    document.querySelector(".header__mobile").classList.remove("open");
    document.querySelector(".exit_menu").classList.remove("open");
  });
  // hero
  let swipers = new Swiper(".hero_slider", {
    navigation: {
      prevEl: document.querySelector(".hero-button-next"),
      nextEl: document.querySelector(".hero-button-prev"),
    },
    pagination: {
      el: document.querySelector(".hero_pagination"),
      type: "bullets",
      clickable: true,
    },
  });
  // mask
  const telInputs = document.querySelectorAll('input[type="tel"]');
  telInputs.forEach(function (input) {
    $(input).mask("+7 (999) 999-99-99");
  });
  // Обработка кнопок закрытия модального окна
  document.querySelectorAll(".close_modal").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // предотвращает переход по ссылке
      document.querySelectorAll(".modal").forEach((modal) => {
        fadeOut(modal, 200); // скрыть все модальные окна
      });
    });
  });

  // Обработка кнопок отправки в modal_1
  document.querySelectorAll(".modal_1 button, .modal_1 a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault(); // предотвращает действие по умолчанию
      document
        .querySelectorAll(".modal")
        .forEach((modal) => fadeOut(modal, 200)); // скрыть все модальные окна
      const thanks1 = document.querySelector(".modal.thanks.thanks_1");
      if (thanks1) fadeIn(thanks1, 200); // показать окно благодарности 1
    });
  });

  // Обработка кнопок отправки в modal_2
  document.querySelectorAll(".modal_2 button, .modal_2 a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelectorAll(".modal")
        .forEach((modal) => fadeOut(modal, 200));
      const thanks2 = document.querySelector(".modal.thanks.thanks_2");
      if (thanks2) fadeIn(thanks2, 200); // показать окно благодарности 2
    });
  });

  // Открытие modal_1
  document.querySelectorAll(".open_modal").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const modal1 = document.querySelector(".modal_1");
      if (modal1) fadeIn(modal1, 200); // показать modal_1
    });
  });

  // Открытие modal_2
  document.querySelectorAll(".open_modal_2").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const modal2 = document.querySelector(".modal_2");
      if (modal2) fadeIn(modal2, 200); // показать modal_2
    });
  });

  // models
  function SlideModels() {
    const modelItems = document.querySelectorAll(".models_item");

    modelItems.forEach((item) => {
      const isMobile = window.innerWidth < 768;

      const thumbsEl = item.querySelector(".models_gallery_pagination");
      let thumbsSwiper = null;

      if (!isMobile && thumbsEl) {
        thumbsSwiper = new Swiper(thumbsEl, {
          spaceBetween: 5,
          slidesPerView: 6,
          freeMode: true,
          watchSlidesProgress: true,
        });
      }

      const mainSwiperEl = item.querySelector(".models_img");
      const nextEl = item.querySelector(".models_next");
      const prevEl = item.querySelector(".models_prev");
      const paginationEl = item.querySelector(".models_pagination");
      const contentBtn = item.querySelector(".content_btn");

      // Swiper yaratishni kechiktirib, thumbsSwiper tayyor bo‘lganidan keyin bajariladi
      setTimeout(() => {
        const mainSwiper = new Swiper(mainSwiperEl, {
          spaceBetween: 10,
          loop: true,
          navigation: {
            nextEl: nextEl,
            prevEl: prevEl,
          },
          pagination:
            isMobile && paginationEl
              ? {
                  el: paginationEl,
                  clickable: true,
                }
              : false,
          thumbs:
            !isMobile && thumbsSwiper
              ? {
                  swiper: thumbsSwiper,
                }
              : undefined,
          on: {
            init: updateContentBtnHref,
            slideChangeTransitionEnd: updateContentBtnHref,
          },
        });

        function updateContentBtnHref() {
          const activeImg = item.querySelector(
            ".models_img .swiper-slide-active img"
          );
          if (activeImg && contentBtn) {
            const src = activeImg.getAttribute("src");
            contentBtn.setAttribute("href", src);
          }
        }
      }, 0); // Keyingi callstackda bajariladi
    });
  }
  SlideModels();

  // Функция для плавного появления элемента (fadeIn)
  function fadeIn(element, duration = 200) {
    element.style.opacity = 0;
    element.style.display = "block";

    let startTime = performance.now();

    function animate(time) {
      let elapsed = time - startTime;
      let progress = Math.min(elapsed / duration, 1);
      element.style.opacity = progress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  // Функция для плавного скрытия элемента (fadeOut)
  function fadeOut(element, duration = 200) {
    let startOpacity = 1;
    let startTime = performance.now();

    function animate(time) {
      let elapsed = time - startTime;
      let progress = Math.min(elapsed / duration, 1);
      element.style.opacity = startOpacity - progress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.display = "none";
      }
    }

    requestAnimationFrame(animate);
  }

  // Обработка кнопок закрытия модального окна
  document.querySelectorAll(".close_modal").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // предотвращает переход по ссылке
      document.querySelectorAll(".modal").forEach((modal) => {
        fadeOut(modal, 200); // скрыть все модальные окна
      });
    });
  });

  // Обработка кнопок отправки в modal_1
  document.querySelectorAll(".modal_1 button, .modal_1 a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault(); // предотвращает действие по умолчанию
      document
        .querySelectorAll(".modal")
        .forEach((modal) => fadeOut(modal, 200)); // скрыть все модальные окна
      const thanks1 = document.querySelector(".modal.thanks.thanks_1");
      if (thanks1) fadeIn(thanks1, 200); // показать окно благодарности 1
    });
  });

  // Обработка кнопок отправки в modal_2
  document.querySelectorAll(".modal_2 button, .modal_2 a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelectorAll(".modal")
        .forEach((modal) => fadeOut(modal, 200));
      const thanks2 = document.querySelector(".modal.thanks.thanks_2");
      if (thanks2) fadeIn(thanks2, 200); // показать окно благодарности 2
    });
  });

  // Открытие modal_1
  document.querySelectorAll(".open_modal").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const modal1 = document.querySelector(".modal_1");
      if (modal1) fadeIn(modal1, 200); // показать modal_1
    });
  });

  // Открытие modal_2
  document.querySelectorAll(".open_modal_2").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const modal2 = document.querySelector(".modal_2");
      if (modal2) fadeIn(modal2, 200); // показать modal_2
    });
  });

  // models item open
  let models_item_btn = document.querySelector(".all_content");
  models_item_btn.addEventListener("click", function (e) {
    e.preventDefault();
    this.style.display = "none";
    document.querySelectorAll(".models_item").forEach((item) => {
      item.style.display = "block";
    });
  });
  //
  document.querySelectorAll(".models_item").forEach(function (item) {
    const infoPrice = item.querySelector(".info_price");
    const exitBtn = item.querySelector(".exit_caracteristic");
    const content = item.querySelector(".characteristic_content");

    if (infoPrice) {
      infoPrice.addEventListener("click", function () {
        // Boshqa barcha .characteristic_content'larni yopamiz
        document
          .querySelectorAll(".models_item .characteristic_content")
          .forEach(function (el) {
            if (el !== content) fadeOut(el);
          });

        // Agar content allaqachon ochiq bo‘lmasa, ochamiz
        if (content.style.display !== "block") {
          fadeIn(content);
        }
      });
    }

    if (exitBtn) {
      exitBtn.addEventListener("click", function () {
        fadeOut(content);
      });
    }
  });

  // Tabs
  document
    .querySelectorAll(".characteristic_content")
    .forEach(function (block) {
      const tabs = block.querySelectorAll(".tab");
      const contents = block.querySelectorAll(".tab-content");
      const exitBtn = block.querySelector(".exit_caracteristic");

      tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
          const selectedId = tab.dataset.tab;
          const target = block.querySelector(`#${selectedId}`);

          // Aktiv tabni yangilaymiz
          tabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");

          // Kontentlarni almashtiramiz
          contents.forEach(function (content) {
            if (content === target) {
              fadeIn(content);
            } else {
              fadeOut(content);
            }
          });
        });
      });
      if (exitBtn) {
        exitBtn.addEventListener("click", function () {
          fadeOut(block);
        });
      }
    });

  document.querySelectorAll(".car_select").forEach((selectEl) => {
    const slim = new SlimSelect({
      select: selectEl,
    });
    const wrapper = selectEl.closest(".custom-select-wrapper");
    const rightEl = wrapper.querySelector(".select_header_right");
    rightEl.addEventListener("click", (e) => {
      e.stopPropagation();
      slim.dropdown.isOpen ? slim.close() : slim.open();
    });
  });

  const slimSelects = [];

  document.querySelectorAll(".filter_select").forEach((el) => {
    const instance = new SlimSelect({ select: el });
    slimSelects.push(instance);
  });
  document
    .querySelector(".models_filter_reset")
    .addEventListener("click", function () {
      slimSelects.forEach((slim) => {
        slim.setSelected(""); // yoki `slim.set('default_value')`
      });
    });
});
