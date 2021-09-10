$(document).ready(function () {
  let ms = 0;
  let scnd = 0;
  let minute = 0;
  let add;
  $(".record").prop("disabled", true);
  $("img.refresh").hide();
  const UpdateTime = () => {
    setInterval(() => {
      $(".clHour").text(new Date().getHours() + " : ");
      $(".clMinute").text(new Date().getMinutes() + " : ");
      $(".clSecond").text(new Date().getSeconds());
    }, 1000);
  };
  function startStopWacth() {
    add = setInterval(() => {
      if (ms < 100) {
        ms++;
        $(".stMlSecond").text(ms);
      } else if (ms >= 100) {
        ms = "00";
        scnd++;
        if (scnd > 59) {
          scnd = "00";
          minute++;
          $(".stMlSecond").text(ms);
          $(".stSecond").text(scnd);
          $(".stMinute").text(minute);
        } else {
          $(".stMlSecond").text(ms);
          $(".stSecond").text(scnd);
        }
      }
    }, 10);
  }
  function stopStopWatch() {
    $(".start").text("Start");
    clearInterval(add);
  }
  function reset() {
    ms = "00";
    scnd = "00";
    minute = "00";
    if ($(".start").text() == "Stop") {
      $(".start").text("Start");
    }
    $(".rcMinute").text(minute);
    $(".rcSecond").text(scnd);
    $(".rcMlSecond").text(ms);
    $(".stMlSecond").text(ms);
    $(".stSecond").text(scnd);
    $(".stMinute").text(minute);
    $(".record").prop("disabled", false);
    clearInterval(add);
  }
  $(".start").click(function () {
    if ($(this).text() == "Start") {
      $(this).text("Stop");
      startStopWacth();
      $(".record").prop("disabled", false);
    } else if ($(this).text() == "Stop") {
      stopStopWatch();
    }
  });
  $(".reset").click(function () {
    $("img.refresh").hide();
    $(".record").prop("disabled", true);
    reset();
  });
  $(".record").click(function (e) {
    $(this).siblings(".rcTimer").children(".rcMinute").text($(".stMinute").text());
    $(this).siblings(".rcTimer").children(".rcSecond").text($(".stSecond").text());
    $(this).siblings(".rcTimer").children(".rcMlSecond").text($(".stMlSecond").text());
    $(this).siblings(".refresh").show();
    $(this).prop("disabled", true);
    if ($(this).hasClass("end")) {
      stopStopWatch();
    }
  });
  $(".refresh").click(function () {
    $(this).css({ transform: "rotate(360deg)" });
    $(this).siblings(".rcTimer").children(".rcMinute").text("00");
    $(this).siblings(".rcTimer").children(".rcSecond").text("00");
    $(this).siblings(".rcTimer").children(".rcMlSecond").text("00");
    $(this).siblings(".record").prop("disabled", false);
    setTimeout(() => {
      $(this).hide();
      $(this).css({ transform: "rotate(-360deg)" });
    }, 1000);
  });

  UpdateTime();
});
