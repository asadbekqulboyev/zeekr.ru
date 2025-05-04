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
  function customSelect() {
    $(".select_header").on("click", function () {
      const $parent = $(this).closest(".custom_select");
      $(".custom_select").not($parent).removeClass("open");
      $parent.toggleClass("open");
    });
    $(".select_item").on("click", function (e) {
      e.preventDefault();

      const selected = $(this).text();
      const $select = $(this).closest(".custom_select");

      $select.find(".select_item").removeClass("active");
      $(this).addClass("active");

      $select.find(".select_current").text(selected);
      $select.removeClass("open");
    });

    $(document).on("click", function (e) {
      if (!$(e.target).closest(".custom_select").length) {
        $(".custom_select").removeClass("open");
      }
    });
    $(".models_filter_reset").on("click", function () {
      $(".custom_select").each(function () {
        const $select = $(this);
        const $firstItem = $select.find(".select_item").first();

        // Matnni qaytarish
        $select.find(".select_current").text($firstItem.text());

        // Active ni tozalash va birinchi elementga qo'yish
        $select.find(".select_item").removeClass("active");
        $firstItem.addClass("active");
      });
    });
  }
  customSelect();
  function initCustomSelect() {
    $(".select_header")
      .off("click")
      .on("click", function () {
        $(this).css("color", "#0D0D0D");
        const $select = $(this).closest(".custom-select");
        $(".custom-select")
          .not($select)
          .removeClass("open")
          .find(".options")
          .hide(); // Boshqalarni yop
        $select.toggleClass("open");
        $select.find(".options").toggle();
      });

    $(".option")
      .off("click")
      .on("click", function () {
        const $this = $(this);
        const value = $this.data("value");
        const label = $this.text();
        $(this).css("color", "#0D0D0D");
        const $select = $this.closest(".custom-select");
        const inputId = $select.data("input-id");

        $select.find(".select-trigger").text(label);
        $select.find(".option").removeClass("selected");
        $this.addClass("selected");
        $select.removeClass("open");
        $select.find(".options").hide();

        $("#" + inputId).val(value);
      });

    $(document)
      .off("click.selectClose")
      .on("click.selectClose", function (e) {
        if (!$(e.target).closest(".custom-select").length) {
          $(".custom-select").removeClass("open");
          $(".options").hide();
        }
      });
  }
  $('input[type="tel"]').mask("+7 (999) 999-99-99");
  $(document).ready(function () {
    initCustomSelect();
  });
});
