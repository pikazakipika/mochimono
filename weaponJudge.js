// weaponJudge.js
// キャラクターと食べ物の組み合わせから武器を返す関数
function getWeapon(selectedChar, selectedFood) {
  if (selectedChar === 'ねこ' && selectedFood === 'りんご') {
    return { name: 'ソード', emoji: '⚔️' };
  } else if (selectedChar === 'ロボット' && selectedFood === 'さかな') {
    return { name: 'ボム', emoji: '💣' };
  } else {
    return { name: 'シールド', emoji: '🛡️' };
  }
}

// Node.jsやブラウザでテスト用にエクスポート
if (typeof module !== 'undefined') {
  module.exports = { getWeapon };
}
