import { getPokemonNameFromNumber } from "./pokemonNames.js";
import { getTypeFromEnglishName } from "./pokemonTypes.js";

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function getFromPokeAPI(number) {

  // Pokemonエンドポイントから基本データを取得する
  try {
    const response = await fetch(`${API_URL}/${number}`)

    if (response.status !== 200) {
      alert('ポケモンのデータを取得できませんでした');
      return;
    }
    const responseData = await response.json();

    // 番号, たかさ, おもさ, タイプ, 画像, 鳴き声を取得
    const pokemonNumber = responseData.id;
    const pokemonName = getPokemonNameFromNumber(pokemonNumber);
    // メートル単位、キログラム単位に変換
    const pokemonHeight = parseInt(responseData.height) / 10;
    const pokemonWeight = parseInt(responseData.weight) / 10;
    const pokemonTypes = responseData.types.map(type => getTypeFromEnglishName(type.type.name));
    const pokemonImageUrl = responseData.sprites.front_default;
    const pokemonVoiceUrl = responseData.cries.latest;

    // book.htmlのDOM要素の値を更新
    const numberElement = document.getElementById('number');
    const nameElement = document.getElementById('name');
    const heightElement = document.getElementById('height');
    const weightElement = document.getElementById('weight');
    const typeElement = document.getElementById('type');
    const imageElement = document.getElementById('image');
    const voiceElement = document.getElementById('voice');
    numberElement.textContent = pokemonNumber;
    nameElement.textContent = pokemonName;
    heightElement.textContent = pokemonHeight.toFixed(1);
    weightElement.textContent = pokemonWeight.toFixed(1);
    typeElement.textContent = pokemonTypes.join(', ');
    imageElement.src = pokemonImageUrl;
    voiceElement.src = pokemonVoiceUrl;
  } catch (error) {
    alert('ポケモンのデータを取得できませんでした');
    return;
  }
}
