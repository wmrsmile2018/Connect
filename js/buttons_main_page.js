var flag_sign = 0;
var flag_dd = 0;
var flag_mm = 0;
var flag_yyyy = 0;
var flag_modal_sign = 0;
var month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
$(function() {

  function create_Li(class1, class2, class3, par_el, index, text) {
    var li;
    li = document.createElement("li");
    if (!index) {
      $(li).addClass(class1 + " " + class2 + index).text(par_el);
    } else {
      $(li).addClass(class1 + " " + class2 + index).text(text);
    }
    $(li).data("index", index);
    $("." + class3).append(li);
  }

  function day_Li() {
    for (var i = 0; i < 32; i += 1) {
      create_Li("day_el", "del", "list_dd", "День", i, i)
    }
  }

  function month_Li() {
    for (var i = 1; i < 13; i += 1) {
      create_Li("month_el", "mel", "list_mm", "Месяц", i, month[i - 1]);
    }
  }

  function years_Li() {
    for (var i = 519; i > 0; i -= 1) {
      create_Li("years_el", "yel", "list_yyyy", "Год", i, i + 1500);
    }
  }

  function sign_but_2 () {
    if ($(window).scrollTop() >= 44 && flag_sign == 0) {
      flag_sign = 1;
      $(".sign_2").toggleClass("open");
      return 1;
    } else if ($(window).scrollTop() < 44 && flag_sign == 1) {
      flag_sign = 0;
      $(".sign_2").toggleClass("open");
      return 0;
    }
  }

  years_Li();
  day_Li();
  month_Li();
  sign_but_2();

  $(".text_8").on("mouseover", ".h_inf", (e) => {
    $(".but_inf").css("fill", "#0e94ff");
  });
  $(".text_8").on("mouseover", ".but_inf", (e) => {
    $(".but_inf").css("fill", "#0e94ff");
  });
  $(".text_8").on("mouseout", ".h_inf", (e) => {
    $(".but_inf").css("fill", "none");
  });
  $(".text_8").on("mouseout", ".but_inf", (e) => {
    $(".but_inf").css("fill", "none");
  });

  $(".sign_2").on("mouseover", ".but_sign_in_2", (e) => {
    $(".but_sign_in_2").css("fill", "#0e94ff");
  });
  $(".sign_2").on("mouseover", ".h_sign_in_2", (e) => {
    $(".but_sign_in_2").css("fill", "#0e94ff");
  });
  $(".sign_2").on("mouseout", ".but_sign_in_2", (e) => {
    $(".but_sign_in_2").css("fill", "none");
  });
  $(".sign_2").on("mouseout", ".h_sign_in_2", (e) => {
    $(".but_sign_in_2").css("fill", "none");
  });

  $(".sign_2").on("mouseover", ".but_sign_up_2", (e) => {
    $(".but_sign_up_2").css("fill", "#0e94ff");
  });
  $(".sign_2").on("mouseover", ".h_sign_up_2", (e) => {
    $(".but_sign_up_2").css("fill", "#0e94ff");
  });
  $(".sign_2").on("mouseout", ".but_sign_up_2", (e) => {
    $(".but_sign_up_2").css("fill", "none");
  });
  $(".sign_2").on("mouseout", ".h_sign_up_2", (e) => {
    $(".but_sign_up_2").css("fill", "none");
  });

  $(".sign_1").on("mouseover", ".but_sign_in_1", (e) => {
    $(".but_sign_in_1").css("fill", "#0e94ff");
  });
  $(".sign_1").on("mouseover", ".h_sign_in_1", (e) => {
    $(".but_sign_in_1").css("fill", "#0e94ff");
  });
  $(".sign_1").on("mouseout", ".but_sign_in_1", (e) => {
    $(".but_sign_in_1").css("fill", "none");
  });
  $(".sign_1").on("mouseout", ".h_sign_in_1", (e) => {
    $(".but_sign_in_1").css("fill", "none");
  });

  $(".sign_1").on("mouseover", ".but_sign_up_1", (e) => {
    $(".but_sign_up_1").css("fill", "#0e94ff");
  });
  $(".sign_1").on("mouseover", ".h_sign_up_1", (e) => {
    $(".but_sign_up_1").css("fill", "#0e94ff");
  });
  $(".sign_1").on("mouseout", ".but_sign_up_1", (e) => {
    $(".but_sign_up_1").css("fill", "none");
  });
  $(".sign_1").on("mouseout", ".h_sign_up_1", (e) => {
    $(".but_sign_up_1").css("fill", "none");
  });

  $(window).scroll((e) => {
    sign_but_2();
  });

  $(window).click((e) => {
    var svg1 = $(".but_sign_up_1");
    var svg2 = $(".but_sign_up_2");
    var pol1 = $(".but_sign_up_1 polygon");
    var pol2 = $(".but_sign_up_2 polygon");
    var h1 = $(".h_sign_up_1");
    var h2 = $(".h_sign_up_2");

    if(((svg1.is(e.target) || svg2.is(e.target)) ||
        (pol1.is(e.target) || pol2.is(e.target)) ||
        (h1.is(e.target) || h2.is(e.target)) && flag_modal_sign == 0) ) {
      console.log("hello1");
      flag_modal_sign = 1;
      $(".sign_window").toggleClass("open");
      if($(window).scrollTop() >= 44) {
        flag_sign = 0;
        $(".sign_2").toggleClass("open");
      }
    }
  });

  $(document).mouseup(function(e) {
    var div = $(".sign_window");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0 && flag_modal_sign == 1) {
      flag_modal_sign = 0;
      div.toggleClass("open");
      if($(window).scrollTop() >= 44) {
        flag_sign = 1;
        $(".sign_2").toggleClass("open");
      }
    }
  });

  $(".selector_table_dd").click((e) => {
    if (flag_dd == 0) {
      flag_dd = 1;
      flag_yyyy = 0;
      flag_mm = 0;
      $(".dd_container").show();
      $(".svg_cont_dd").show();
    } else {
      flag_yyyy = 0;
      flag_dd = 0;
      flag_mm = 0;
      $(".dd_container").hide();
      $(".svg_cont_dd").hide();
    }
  });

  $(document).mouseup(function(e) {
    var div = $(".dd_container");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      div.hide();
      $(".svg_cont_dd").hide();
    }
  });

  $(".list_dd li").hover(function() {
    $(this).addClass("day_el_hover");
  }, function() {
    $(this).removeClass("day_el_hover");
  });
  $(".day_el").click((e) => {
    var index = $(e.currentTarget).data("index");
    if (index) {
      $(".selector_input_dd").val(index);
    } else {
      $(".selector_input_dd").val("");
    }
    $(".dd_container").hide();
    $(".svg_cont_dd").hide();
  });

  $(".selector_table_mm").click((e) => {
    if (flag_mm == 0) {
      flag_mm = 1;
      flag_yyyy = 0;
      flag_dd = 0;
      $(".mm_container").show();
      $(".svg_cont_mm").show();
    } else {
      flag_yyyy = 0;
      flag_dd = 0;
      flag_mm = 0;
      $(".mm_container").hide();
      $(".svg_cont_mm").hide();
    }
  });

  $(document).mouseup(function(e) {
    var div = $(".mm_container");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      div.hide();
      $(".svg_cont_mm").hide();
    }
  });

  $(".list_mm li").hover(function() {
    $(this).addClass("month_el_hover");
  }, function() {
    $(this).removeClass("month_el_hover");
  });
  $(".month_el").click((e) => {
    var index = $(e.currentTarget).data("index");
    if (index) {
      $(".selector_input_mm").val(month[index - 1]);
    } else {
      $(".selector_input_mm").val("");
    }
    $(".mm_container").hide();
    $(".svg_cont_mm").hide();
  });

  $(".selector_table_yyyy").click((e) => {
    if (flag_yyyy == 0) {
      flag_yyyy = 1;
      flag_dd = 0;
      flag_mm = 0;
      $(".yyyy_container").show();
      $(".svg_cont_yyyy").show();
    } else {
      flag_yyyy = 0;
      flag_dd = 0;
      flag_mm = 0;
      $(".yyyy_container").hide();
      $(".svg_cont_yyyy").hide();
    }
  });

  $(document).mouseup(function(e) {
    var div = $(".yyyy_container");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      div.hide();
      $(".svg_cont_yyyy").hide();
    }

  });

  $(".list_yyyy li").hover(function() {
    $(this).addClass("years_el_hover");
  }, function() {
    $(this).removeClass("years_el_hover");
  });
  $(".years_el").click((e) => {
    var index = $(e.currentTarget).data("index");
    if (index) {
      $(".selector_input_yyyy").val(index + 1500);
    } else {
      $(".selector_input_yyyy").val("");
    }
    $(".yyyy_container").hide();
    $(".svg_cont_yyyy").hide();
  });
});
