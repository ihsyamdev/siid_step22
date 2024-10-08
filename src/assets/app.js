import { setupRecommend } from './recommend.js';
import { getMaxPokemonNumber } from './pokemonNames.js';
import { getFromPokeAPI } from './pokeApi.js';

// index.htmlでのみ実行
console.log(window.location.pathname)
if (window.location.pathname.endsWith('index.html') || window.location.pathname == '/') {
  document.addEventListener('DOMContentLoaded', function() {
    setupRecommend();
  })

  const button = document.getElementById('search-button');
  button.addEventListener('click', function() {
    const number = document.getElementById('number').value;
    window.location.href = `book.html?number=${number}`;
  })
}

// book.htmlでのみ実行
if (window.location.pathname.endsWith('book.html')) {

  // URLにクエリパラメータが存在しない場合はエラーウインドウを表示
  const urlParams = new URLSearchParams(window.location.search);
  const number = urlParams.get('number');
  // 値が存在しない、数字でない、1未満、最大値より大きい、整数でないものはエラー
  if (!number || isNaN(number) || number < 1 || number > getMaxPokemonNumber() || number % 1 !== 0) {
    alert('存在するポケモンの番号を指定してください');
    window.location.href = 'index.html';
  }
  document.addEventListener('DOMContentLoaded', async function() {
    try {
      await getFromPokeAPI(number);
      const content = document.getElementById('content');
      content.style.display = 'block';
    } catch (error) {
      alert('ポケモンのデータを取得できませんでした');
      window.location.href = 'index.html';
    }
  })
  
  const speakerButton = document.getElementById("speaker");
  const voice = document.getElementById("voice");
  speakerButton.addEventListener("click", function() {
    voice.volume = 0.1;
    voice.play();
  })
}
