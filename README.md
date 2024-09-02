# siid_step22
SiidのStep22の課題提出用リポジトリ


## 開発するアプリ

### 課題
```
Resoucesの実装例に倣い、PokeAPIを用いたWebアプリケーションを実装しVercelにてデプロイしてください。余裕があればアレンジを加えることは大歓迎です。
```

### 開発する機能
- 簡易ポケモン図鑑
  - ポケモンの日本語名を選択
  - 選択されたポケモンの図鑑を表示
    - 番号
    - 名前
    - 身長
    - 体重
    - タイプ
    - 画像
    - 鳴き声

## 開発に必要な要素
- 検索画面
  - ポケモンの名前を選択
  - 入力値に応じてレコメンド
- 結果画面
  - ポケモンの図鑑を表示
    - 番号
    - 名前
    - 身長
    - 体重
    - タイプ
    - 画像
    - 鳴き声
- ポケモンの日本語名と英語名のマッピング
- タイプの日本語名と英語名のマッピング

## 開発プロセス
- 検索画面を作成
- 結果画面を作成
- ポケモンの日本語名と英語名のマッピングファイルを作成
- タイプの日本語名と英語名のマッピング

## 使用する技術
- HTML
- CSS
  - TailwindCSSを使う
- JavaScript

## ブランチ戦略
- Main
  - 本番用のブランチ
  - ここにマージされると、GitHub ActionsでVercelにデプロイされる
- Feature
  - `feature/{機能名}` というルールで作成する
