var flag_sign = 0;
var flag_dd = 0;
$(function () {
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
    if($(window).scrollTop() >= 44 && flag_sign == 0) {
      flag_sign = 1;
      $(".sign_2").toggleClass("open");
    }
    else if($(window).scrollTop() < 44 && flag_sign == 1) {
      flag_sign = 0;
      $(".sign_2").toggleClass("open");
    }
  });

  $(".selector_table_dd").on("click", ".dd_dropdown", (e) => {
    if(flag_dd == 0) {
      flag_dd = 1;
      $(".dd_container").show();
    }
    else {
      flag_dd = 0;
      $(".dd_container").hide();
    }
  });

});
