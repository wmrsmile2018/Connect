var flag_sign = 0;
var flag_dd = 0;
var flag_mm = 0;
var flag_yyyy = 0;
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

  years_Li();
  day_Li();
  month_Li();

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
    if ($(window).scrollTop() >= 44 && flag_sign == 0) {
      flag_sign = 1;
      $(".sign_2").toggleClass("open");
    } else if ($(window).scrollTop() < 44 && flag_sign == 1) {
      flag_sign = 0;
      $(".sign_2").toggleClass("open");
    }
  });

  $(".selector_table_dd").on("click", ".dd_dropdown", (e) => {
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
      $(".selector_input_dd").val("День");
    }
    $(".dd_container").hide();
    $(".svg_cont_dd").hide();
  });

  $(".selector_table_mm").on("click", ".mm_dropdown", (e) => {
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
      $(".selector_input_mm").val(index);
    } else {
      $(".selector_input_mm").val("Месяц");
    }
    $(".mm_container").hide();
    $(".svg_cont_mm").hide();
  });

  $(".selector_table_yyyy").on("click", ".yyyy_dropdown", (e) => {
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
  $(".month_el").click((e) => {
    var index = $(e.currentTarget).data("index");
    if (index) {
      $(".selector_input_yyyy").val(index);
    } else {
      $(".selector_input_yyyy").val("Год");
    }
    $(".yyyy_container").hide();
    $(".svg_cont_yyyy").hide();
  });
});
