// test/e2e/sword.e2e.spec.js
const { test, expect } = require('@playwright/test');

test('ねことりんごを選ぶとソードがもらえる', async ({ page }) => {
  // サーバーでindex.htmlを開く
  await page.goto('http://localhost:54672/index.html');

  // キャラクター「ねこ」をクリック
  await page.getByText('ねこ', { exact: true }).click();
  // 食べ物「りんご」をクリック
  await page.getByText('りんご', { exact: true }).click();

  // 「これに決めた！」ボタンが見えることを確認してからクリック
  await expect(page.getByRole('button', { name: 'これに決めた！' })).toBeVisible();
  await page.getByRole('button', { name: 'これに決めた！' }).click();

  // 結果に「ソード」と「⚔️」が表示されていることを確認
  await expect(page.getByText('ソード')).toBeVisible();
  await expect(page.getByText('⚔️')).toBeVisible();

  // デバッグ用スクリーンショット
  await page.screenshot({ path: 'debug.png', fullPage: true });
});
