import { pokemonNames } from "../assets/pokemonNames.js";

export function setupRecommend() {
  const searchInput = document.getElementById('search-text');
  const recommendationList = document.getElementById('recommendation-list');

  // 入力イベントリスナーを追加
  searchInput.addEventListener('input', function() {
    const query = searchInput.value;
    const filteredNames = pokemonNames.filter(pokemon => pokemon.japaneseName.includes(query));

    recommendationList.innerHTML = '';

    if (query && filteredNames.length > 0) {
      filteredNames.forEach(name => {
        const listItem = document.createElement('div');
        listItem.textContent = name.japaneseName;
        listItem.className = 'p-2 cursor-pointer hover:bg-gray-200';

        listItem.addEventListener('click', function() {
          searchInput.value = name.japaneseName;
          recommendationList.classList.add('hidden');
        })

        recommendationList.appendChild(listItem);
      })
      recommendationList.classList.remove('hidden');
    } else {
      recommendationList.classList.add('hidden');
    }
  })

  document.addEventListener('click', function*(e) {
    if (!searchInput.contains(e.target) && !recommendationList.contains(e.target)) {
      recommendationList.classList.add('hidden');
    }
  })
}
