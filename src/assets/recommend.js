import { pokemonNames } from "../assets/pokemonNames.js";

export function setupRecommend() {
  const searchInput = document.getElementById('search-text');
  const recommendationList = document.getElementById('recommendation-list');

  if (!searchInput || !recommendationList) {
    console.error('DOM要素が見つかりません')
    return;
  }

  // 入力に合わせて日本語名をフィルタリング
  searchInput.addEventListener('input', function() {
    const query = searchInput.value;
    const filteredNames = pokemonNames.filter(pokemon => pokemon.japaneseName.includes(query));

    const fragment = document.createDocumentFragment();

    if (query && filteredNames.length > 0) {
      filteredNames.forEach(name => {
        const listItem = document.createElement('div');
        listItem.textContent = name.japaneseName;
        listItem.className = 'p-2 cursor-pointer hover:bg-gray-200';

        listItem.addEventListener('click', function() {
          searchInput.value = name.japaneseName;
          recommendationList.classList.add('hidden');
        });

        fragment.appendChild(listItem);
      });

      recommendationList.innerHTML = '';
      recommendationList.appendChild(fragment);
      recommendationList.classList.remove('hidden');
    } else {
      recommendationList.classList.add('hidden');
    }
  });
}
