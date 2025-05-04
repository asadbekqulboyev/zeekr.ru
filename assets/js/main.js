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
    $(".models .select_header").on("click", function () {
      const $parent = $(this).closest(".models .custom_select");
      $(".models .custom_select").not($parent).removeClass("open");
      $parent.toggleClass("open");
    });
    $(".models .select_item").on("click", function (e) {
      e.preventDefault();

      const selected = $(this).text();
      const $select = $(this).closest(".models .custom_select");

      $select.find(".models .select_item").removeClass("active");
      $(this).addClass("active");

      $select.find(".models .select_current").text(selected);
      $select.removeClass("open");
    });

    $(document).on("click", function (e) {
      if (!$(e.target).closest(".models .custom_select").length) {
        $(".models .custom_select").removeClass("open");
      }
    });
    $(".models .models_filter_reset").on("click", function () {
      $(".models .custom_select").each(function () {
        const $select = $(this);
        const $firstItem = $select.find(".models .select_item").first();

        // Matnni qaytarish
        $select.find(".models .select_current").text($firstItem.text());

        // Active ni tozalash va birinchi elementga qo'yish
        $select.find(".models .select_item").removeClass("active");
        $firstItem.addClass("active");
      });
    });
  }
  customSelect();
  function initCustomSelect() {
    $(".forms .select_header")
      .off("click")
      .on("click", function () {
        $(this).css("color", "#0D0D0D");
        const $select = $(this).closest(".forms .custom-select");
        $(".forms .custom-select")
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
        const $select = $this.closest(".forms .custom-select");
        const inputId = $select.data("input-id");

        $select.find(".forms .select-trigger").text(label);
        $select.find(".forms .option").removeClass("selected");
        $this.addClass("selected");
        $select.removeClass("open");
        $select.find(".options").hide();

        $("#" + inputId).val(value);
      });

    $(document)
      .off("click.selectClose")
      .on("click.selectClose", function (e) {
        if (!$(e.target).closest(".forms .custom-select").length) {
          $(".forms .custom-select").removeClass("open");
          $(".forms .options").hide();
        }
      });
  }
  $('input[type="tel"]').mask("+7 (999) 999-99-99");
  $(document).ready(function () {
    initCustomSelect();
  });
});
