// сюда не стоит лучше смотреть
// не то чтобы мне стыдно
// но что-то такое последние пару дней таких
// ну
// спокойные дни как в песне хуго уго
// знаешь

var actionButtonSource = '<button class="im-page-action_download-audio-message" data-action="download-audio-message" aria-label="Скачать выделенные аудиосообщения" style="position: relative; display: inline-block; vertical-align: middle; margin: 0; padding: 0; width: 36px; height: 26px; border: 0; opacity: .7; cursor: pointer; border-bottom: 2px solid transparent; background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQuMDAwMDAwMDAwMDAwMDAyIiBoZWlnaHQ9IjE5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPiA8dGl0bGUvPiA8ZGVzYy8+IDxnPiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPiAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjQwMiIgd2lkdGg9IjU4MiIgeT0iLTEiIHg9Ii0xIi8+IDwvZz4gPGc+ICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+ICA8cGF0aCBmaWxsPSIjODI4YTk5IiBpZD0iU2hhcGUiIGQ9Im0xNCw2LjVsLTQsMGwwLC02bC02LDBsMCw2bC00LDBsNyw3bDcsLTdsMCwwem0tMTQsOWwwLDJsMTQsMGwwLC0ybC0xNCwwbDAsMHoiLz4gPC9nPjwvc3ZnPg==) 50% 110% no-repeat;"></button>';

function init() {
  var b = document.createElement('span');
  b.innerHTML = actionButtonSource;
  b.onclick = click;

  var container = document.getElementsByClassName('im-page--mess-actions')[0];
  container.insertBefore(b, document.getElementsByClassName('im-page-action_star')[0]);
}

function click() {
  var selected = document.getElementsByClassName('im-mess_selected');

  for (var i = 0; i < selected.length; i++) {
    var audio = selected[i].getElementsByClassName('audio-msg-track')[0];

    if (audio) {
      download(audio.dataset.mp3, audio.dataset.duration);
    }
  }
}

function download(url, name) {
  var a = document.createElement('a');
  a.download = name;
  a.href = url;
  a.click();

  delete a;
}

if (location.origin == 'https://vk.com' && location.pathname == '/im') {
  init();
}