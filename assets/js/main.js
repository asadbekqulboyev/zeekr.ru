$(document).ready(function () {
  $(".header__hamburger").on("click", function () {
    $(".header__hamburger").toggleClass("open");
    $(".header__mobile").toggleClass("open");
  });
  $(".exit_menu").on("click", function () {
    $(".header__hamburger").removeClass("open");
    $(".header__mobile").removeClass("open");
  });
  let swipers = new Swiper(".hero_slider", {
    navigation: {
      prevEl: ".hero-button-next",
      nextEl: ".hero-button-prev",
    },
    pagination: {
      el: ".hero_pagination",
      type: "bullets",
      clickable: true,
    },
  });
  // function customSelect() {
  //   $(".models .select_header").on("click", function () {
  //     const $parent = $(this).closest(".models .custom_select");
  //     $(".models .custom_select").not($parent).removeClass("open");
  //     $parent.toggleClass("open");
  //   });
  //   $(".models .select_item").on("click", function (e) {
  //     e.preventDefault();

  //     const selected = $(this).text();
  //     const $select = $(this).closest(".models .custom_select");

  //     $select.find(".models .select_item").removeClass("active");
  //     $(this).addClass("active");

  //     $select.find(".models .select_current").text(selected);
  //     $select.removeClass("open");
  //   });

  //   $(document).on("click", function (e) {
  //     if (!$(e.target).closest(".models .custom_select").length) {
  //       $(".models .custom_select").removeClass("open");
  //     }
  //   });
  //   $(".models .models_filter_reset").on("click", function () {
  //     $(".models .custom_select").each(function () {
  //       const $select = $(this);
  //       const $firstItem = $select.find(".models .select_item").first();

  //       // Matnni qaytarish
  //       $select.find(".models .select_current").text($firstItem.text());

  //       // Active ni tozalash va birinchi elementga qo'yish
  //       $select.find(".models .select_item").removeClass("active");
  //       $firstItem.addClass("active");
  //     });
  //   });
  // }
  // customSelect();
  // function initCustomSelect() {
  //   $(".forms .select_header")
  //     .off("click")
  //     .on("click", function () {
  //       $(this).css("color", "#0D0D0D");
  //       const $select = $(this).closest(".forms .custom-select");
  //       $(".forms .custom-select")
  //         .not($select)
  //         .removeClass("open")
  //         .find(".options")
  //         .hide(); // Boshqalarni yop
  //       $select.toggleClass("open");
  //       $select.find(".options").toggle();
  //     });

  //   $(".option")
  //     .off("click")
  //     .on("click", function () {
  //       const $this = $(this);
  //       const value = $this.data("value");
  //       const label = $this.text();
  //       $(this).css("color", "#0D0D0D");
  //       const $select = $this.closest(".forms .custom-select");
  //       const inputId = $select.data("input-id");

  //       $select.find(".forms .select-trigger").text(label);
  //       $select.find(".forms .option").removeClass("selected");
  //       $this.addClass("selected");
  //       $select.removeClass("open");
  //       $select.find(".options").hide();

  //       $("#" + inputId).val(value);
  //     });

  //   $(document)
  //     .off("click.selectClose")
  //     .on("click.selectClose", function (e) {
  //       if (!$(e.target).closest(".forms .custom-select").length) {
  //         $(".forms .custom-select").removeClass("open");
  //         $(".forms .options").hide();
  //       }
  //     });
  // }
  function initCustomSelects() {
    // MODELS SELECT
    $(".models .select_header")
      .off("click")
      .on("click", function () {
        const $parent = $(this).closest(".custom_select");
        $(".models .custom_select").not($parent).removeClass("open");
        $parent.toggleClass("open");
      });

    $(".models .select_item")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        const selected = $(this).text();
        const $select = $(this).closest(".custom_select");

        $select.find(".select_item").removeClass("active");
        $(this).addClass("active");

        $select.find(".select_current").text(selected);
        $select.removeClass("open");
      });

    $(".models .models_filter_reset")
      .off("click")
      .on("click", function () {
        $(".models .custom_select").each(function () {
          const $select = $(this);
          const $firstItem = $select.find(".select_item").first();
          $select.find(".select_current").text($firstItem.text());
          $select.find(".select_item").removeClass("active");
          $firstItem.addClass("active");
        });
      });

    // FORMS SELECT
    $(".forms .select_header")
      .off("click")
      .on("click", function () {
        $(this).css("color", "#0D0D0D");
        const $select = $(this).closest(".custom-select");
        $(".forms .custom-select")
          .not($select)
          .removeClass("open")
          .find(".options")
          .hide();
        $select.toggleClass("open");
        $select.find(".options").toggle();
      });

    $(".forms .option")
      .off("click")
      .on("click", function () {
        const $this = $(this);
        const value = $this.data("value");
        const label = $this.text();
        $this.css("color", "#0D0D0D");
        const $select = $this.closest(".custom-select");
        const inputId = $select.data("input-id");

        $select.find(".select-trigger").text(label);
        $select.find(".option").removeClass("selected");
        $this.addClass("selected");
        $select.removeClass("open");
        $select.find(".options").hide();

        $("#" + inputId).val(value);
      });

    // DOCUMENT CLICK – UNIVERSAL YOPISH
    $(document)
      .off("click.globalSelectClose")
      .on("click.globalSelectClose", function (e) {
        if (
          !$(e.target).closest(".models .custom_select, .forms .custom-select")
            .length
        ) {
          $(".models .custom_select").removeClass("open");
          $(".forms .custom-select").removeClass("open");
          $(".forms .options").hide();
        }
      });
  }
  initCustomSelects();
  $('input[type="tel"]').mask("+7 (999) 999-99-99");

  function SlideModels() {
    $(".models_item").each(function () {
      const $this = $(this);

      const isMobile = window.innerWidth < 768;

      // Faqat desktopda thumbs kerak
      let thumbsSwiper = null;
      if (!isMobile) {
        thumbsSwiper = new Swiper($this.find(".modesl_gallery_pagination")[0], {
          spaceBetween: 5,
          slidesPerView: 6,
          freeMode: true,
          watchSlidesProgress: true,
        });
      }

      const mainSwiper = new Swiper($this.find(".models_img")[0], {
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: $this.find(".models_next")[0],
          prevEl: $this.find(".models_prev")[0],
        },
        // Mobilda pagination, desktopda yo‘q
        pagination: isMobile
          ? {
              el: $this.find(".models_pagination")[0],
              clickable: true,
            }
          : false,
        // Desktopda thumbs, mobilda yo‘q
        thumbs:
          !isMobile && thumbsSwiper
            ? {
                swiper: thumbsSwiper,
              }
            : undefined,
        on: {
          init: function () {
            updateContentBtnHref();
          },
          slideChangeTransitionEnd: function () {
            updateContentBtnHref();
          },
        },
      });

      function updateContentBtnHref() {
        const currentSrc = $this
          .find(".models_img .swiper-slide-active img")
          .attr("src");
        $this.find(".content_btn").attr("href", currentSrc);
      }
    });
  }

  SlideModels();

  $(".models_item").each(function () {
    const item = $(this);

    item.find(".info_price").on("click", function () {
      $(".models_item .characteristic_content").fadeOut();
      item.find(".characteristic_content").fadeIn();
    });

    item.find(".exit_caracteristic").on("click", function () {
      item.find(".characteristic_content").fadeOut();
    });
  });

  $(".characteristic_content").each(function () {
    const $block = $(this);

    $block.find(".tab").on("click", function () {
      const selectedTab = $(this).data("tab");

      // Aktiv tabni yangilash
      $block.find(".tab").removeClass("active");
      $(this).addClass("active");

      // Kontentlarni almashtirish
      const $current = $block.find(".tab-content:visible");
      const $target = $block.find(`#${selectedTab}`);

      if (!$target.is(":visible")) {
        $current.fadeOut(200, function () {
          $target.fadeIn(200);
        });
      }
    });

    // Yopish tugmasi
    $block.find(".exit_caracteristic").on("click", function () {
      $block.fadeOut(200);
    });
  });
  $(".close_modal").on("click", function () {
    $(".modal").fadeOut(200);
  });
  $(".modal_1 button").click(function (e) {
    e.preventDefault();
    $(".modal").fadeOut(200);
    $(".modal.thanks.thanks_1").fadeIn(200);
  });

  $(".modal_2 button").click(function (e) {
    e.preventDefault();
    $(".modal").fadeOut(200);
    $(".modal.thanks.thanks_2").fadeIn(200);
  });
  $(".open_modal").click(function () {
    $(".modal_1").fadeIn(200);
  });
  $(".open_modal_2").click(function () {
    $(".modal_2").fadeIn(200);
  });
});
