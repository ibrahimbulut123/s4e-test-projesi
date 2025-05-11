import { test, expect } from '@playwright/test';

test.describe('Free Security Tools Sayfası Fonksiyonel Testler', () => {

  // TC01 - Sayfa doğru şekilde yükleniyor mu?
  test('TC01 - Sayfa doğru şekilde yükleniyor mu?', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools');
    const title = await page.title();
    expect(title).toBe('Online Free Security Tools | S4E');
  });

  // TC02 - Sayfa başlığı doğru mu?
  test('TC02 - Sayfa başlığı doğru mu?', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools');
    const title = await page.title();
    expect(title).toBe('Online Free Security Tools | S4E');
  });

  // TC03 - Ana başlık (H1) görünüyor mu?
  test('TC03 - Ana başlık (H1) görünüyor mu?', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools');
    const h1 = await page.locator('h1');
    await expect(h1).toBeVisible();
  });

  

  // TC04 - Sayfada herhangi bir 'Security Tool' metni var mı?
  test('TC04 - Sayfada herhangi bir "Security Tool" metni var mı?', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools');
    const pageText = await page.textContent('body');
    expect(pageText).toContain('Security Tool');
  });

  
  // TC05 - Sayfada bir menü (navigasyon) bulunuyor mu?
  test('TC05 - Sayfada bir menü (navigasyon) bulunuyor mu?', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools');
    const navMenu = await page.locator('nav');
    await expect(navMenu).toBeVisible();
  });
  



  // TC06 - Sayfa footer'ı görünüyor mu?
  test('TC06 - Sayfa footer\'ı görünüyor mu?', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools');
    const footer = await page.locator('footer');
    await expect(footer).toBeVisible();
  });

  // TC07 - Sayfa üzerinde herhangi bir "tool" görseli var mı?
  test('TC07 - Sayfa üzerinde herhangi bir "tool" görseli var mı?', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools');
    const images = page.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0); // En az bir görsel olmalı

    // Görsellerin her biri görünür mü?
    for (let i = 0; i < count; i++) {
      const image = images.nth(i);
      await expect(image).toBeVisible();
    }
  });

  

  // TC08 - Sayfada herhangi bir yüklenme animasyonu var mı?
  test('TC08 - Sayfada herhangi bir yüklenme animasyonu var mı?', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools');
    const loader = page.locator('.loading');
    await expect(loader).toBeHidden(); // Yüklenme animasyonu gizlenmiş olmalı
  });

  // TC09 - Sayfa üzerinde kullanıcı etkileşimi sonrası herhangi bir hata mesajı var mı?
  test('TC09 - Sayfa üzerinde kullanıcı etkileşimi sonrası herhangi bir hata mesajı var mı?', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools');
    
    // Örneğin bir arama yapılmışsa veya bir etkileşim olduysa hata mesajlarını kontrol edelim
    const errorMessages = page.locator('.error-message');
    const count = await errorMessages.count();
    expect(count).toBe(0); // Hata mesajı bulunmamalı
  });
  

  // TC10 - Sayfada herhangi bir pop-up penceresi var mı?
  test('TC10 - Sayfada herhangi bir pop-up penceresi var mı?', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools');
    const popup = page.locator('.popup');
    const isPopupVisible = await popup.isVisible();
    expect(isPopupVisible).toBe(false); // Pop-up penceresi olmamalı
  });

  test('TC11 - Sayfa yanıt süresi 3 saniyeden kısa mı?', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('https://s4e.io/free-security-tools');
  const endTime = Date.now();
  const responseTime = endTime - startTime;
  expect(responseTime).toBeLessThan(3000); // 3 saniyeden daha hızlı yüklenmeli
});
  test('TC12 - Sayfa mobil uyumlu mu?', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  await page.setViewportSize({ width: 375, height: 812 }); // iPhone X boyutları
  const title = await page.title();
  expect(title).toBe('Online Free Security Tools | S4E'); // Başlık mobilde de doğru olmalı
});
  


});