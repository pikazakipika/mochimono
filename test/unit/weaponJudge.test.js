console.log('test loaded');
const assert = require('assert');
const { getWeapon } = require('../../weaponJudge');

describe('getWeapon', () => {
  const characters = ['ヒーロー', 'ねこ', 'ロボット', 'おばけ'];
  const foods = ['りんご', 'ハンバーガー', 'さかな', 'ケーキ'];
  const expected = {
    'ねこ_りんご': { name: 'ソード', emoji: '⚔️' },
    'ロボット_さかな': { name: 'ボム', emoji: '💣' }
  };
  characters.forEach(char => {
    foods.forEach(food => {
      const key = `${char}_${food}`;
      const want = expected[key] || { name: 'シールド', emoji: '🛡️' };
      it(`キャラクター「${char}」と食べ物「${food}」の組み合わせの場合、武器「${want.name}」が返ること`, function() {
        // Arrange: キャラクターと食べ物を用意
        // Act: getWeaponで武器を取得
        const result = getWeapon(char, food);
        // Assert: 期待される武器オブジェクトと一致すること
        assert.deepStrictEqual(result, want);
      });
    });
  });
});
