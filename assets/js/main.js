var mb_search_opener = document.querySelector(".mobile_menu__search_opener");
var mb_search_input = document.querySelector("#mobile_menu__search");
var mb_search_closer = document.querySelector(".mobile_menu__search_closer");
var mb_sarch_results = document.querySelector(".mobile_menu__results");

function open_mobile_search(){
    mb_search_input.style.display = 'block';
    mb_search_closer.style.display = "block";
    mb_search_opener.style.display = "none";
    mb_sarch_results.style.display = "block";
}

function close_mobile_search(){
    mb_search_input.style.display = 'none';
    mb_search_closer.style.display = "none";
    mb_search_opener.style.display = "block";
    mb_sarch_results.style.display = "none";
}

mb_search_opener.addEventListener('click', function () {
  open_mobile_search();
});

mb_search_closer.addEventListener('click', function(){
    close_mobile_search();
})