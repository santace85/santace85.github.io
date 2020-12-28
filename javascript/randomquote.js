$(document).ready(function () {
  var qCounter = 0;

  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  var quotes = [
    [
      "Life isn't about getting and having, it's about giving and being.",
      "Kevin Kruse",
    ],
    [
      "Whatever the mind of man can conceive and believe, it can achieve.",
      "Napoleon Hill",
    ],
    [
      "Strive not to be a success, but rather to be of value.",
      "Albert Einstein",
    ],
    [
      "Two roads diverged in a wood, and I-I took the one less traveled by, And that has made all the difference.",
      "Robert Frost",
    ],
    [
      "I attribute my success to this: I never gave or took any excuse.",
      "Florence Nightingale",
    ],
    ["You miss 100% of the shots you don't take.", "Wayne Gretzky"],
    [
      "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
      "Michael Jordan",
    ],
    [
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
      "Amelia Earhart",
    ],
    ["Every strike brings me closer to the next home run.", "Babe Ruth"],
    [
      "Definiteness of purpose is the starting point of all achievement.",
      "W. Clement Stone",
    ],
  ];

  $("#text").html(quotes[qCounter][0]);
  $("#author").html(quotes[qCounter][1]);
  $("#text").animate({ color: colors[qCounter] });
  $("#author").animate({ color: colors[qCounter] });
  $("#new-quote").animate({ backgroundColor: colors[qCounter] });

  document.getElementById("new-quote").onclick = function () {
    if (qCounter == 9) {
      qCounter = 0;
    } else {
      qCounter++;
    }

    $("#text").text(quotes[qCounter][0]);
    $("#author").html(quotes[qCounter][1]);
    $("#text").animate({ color: colors[qCounter] });
    $("#author").animate({ color: colors[qCounter] });
    $("#new-quote").animate({ backgroundColor: colors[qCounter] });
  };

  document.getElementById("tweet-quote").onclick = function () {
    window.open(
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        '"' +
        encodeURIComponent(quotes[qCounter][0]) +
        '"  ' +
        encodeURIComponent(quotes[qCounter][1])
    );
  };

  document.getElementById("tumblr-quote").onclick = function () {
    window.open(
      "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
        +'"' +
        encodeURIComponent(quotes[qCounter][0]) +
        '" ' +
        encodeURIComponent(quotes[qCounter][1]) +
        "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button",
      "_blank"
    );
  };
});
