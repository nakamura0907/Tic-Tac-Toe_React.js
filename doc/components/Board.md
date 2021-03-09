# Board

ゲームのメインとなる場を表示する

## 関数

- handleClick
  - 各セルをクリックで発火する
- checkWon
  - 勝利条件の確認
- createBoard
  - セルの生成

## props

- turnA
  - プレイヤー A のターンかどうか
- won
  - 勝利しているかどうか
- changeTurn
  - ターンを交代する
- changeWon
  - 勝敗の決定

## state

- points
  - プレイヤーのポイント
  - [0]がプレイヤー A で、[1]がプレイヤー B
