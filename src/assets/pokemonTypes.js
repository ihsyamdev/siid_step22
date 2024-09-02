export const pokemonTypes =
[
  {
    "number": 1,
    "englishName": "normal",
    "japaneseName": "ノーマル"
  },
  {
    "number": 2,
    "englishName": "fighting",
    "japaneseName": "かくとう"
  },
  {
    "number": 3,
    "englishName": "flying",
    "japaneseName": "ひこう"
  },
  {
    "number": 4,
    "englishName": "poison",
    "japaneseName": "どく"
  },
  {
    "number": 5,
    "englishName": "ground",
    "japaneseName": "じめん"
  },
  {
    "number": 6,
    "englishName": "rock",
    "japaneseName": "いわ"
  },
  {
    "number": 7,
    "englishName": "bug",
    "japaneseName": "むし"
  },
  {
    "number": 8,
    "englishName": "ghost",
    "japaneseName": "ゴースト"
  },
  {
    "number": 9,
    "englishName": "steel",
    "japaneseName": "はがね"
  },
  {
    "number": 10,
    "englishName": "fire",
    "japaneseName": "ほのお"
  },
  {
    "number": 11,
    "englishName": "water",
    "japaneseName": "みず"
  },
  {
    "number": 12,
    "englishName": "grass",
    "japaneseName": "くさ"
  },
  {
    "number": 13,
    "englishName": "electric",
    "japaneseName": "でんき"
  },
  {
    "number": 14,
    "englishName": "psychic",
    "japaneseName": "エスパー"
  },
  {
    "number": 15,
    "englishName": "ice",
    "japaneseName": "こおり"
  },
  {
    "number": 16,
    "englishName": "dragon",
    "japaneseName": "ドラゴン"
  },
  {
    "number": 17,
    "englishName": "dark",
    "japaneseName": "あく"
  },
  {
    "number": 18,
    "englishName": "fairy",
    "japaneseName": "フェアリー"
  },
  {
    "number": 19,
    "englishName": "stellar",
    "japaneseName": "ステラ"
  }
]

export function getTypeFromEnglishName(englishName) {
  return pokemonTypes.find(type => type.englishName === englishName).japaneseName;
}
