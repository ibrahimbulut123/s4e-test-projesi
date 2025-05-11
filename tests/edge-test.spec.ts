import { test, expect } from '@playwright/test';

test.describe('Edge Case Tests for S4E.io Free Security Tools', () => {

  test('Edge Case 1 - JavaScript devre dışı bırakıldığında sayfa nasıl davranıyor?', async ({ page }) => {
    javaScriptEnabled: false;// JavaScript'i devre dışı bırak
    await page.goto('https://s4e.io/free-security-tools');
    
    const title = await page.title();
    expect(title).toBe('Online Free Security Tools | S4E'); // Sayfa başlığı doğru olmalı
    
    // Sayfa içeriğini kontrol et
    const pageContent = await page.textContent('body');
    expect(pageContent).toContain('Security Tool');  // Sayfa içeriği yine yüklenmeli
  });

  

  test('Edge Case 2 - Sayfa boyutu değiştirildiğinde içerik uygun şekilde düzenleniyor mu?', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools');
    
    // Mobil görünüm simülasyonu yap
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone X
    
    const mobileContent = await page.textContent('body');
    expect(mobileContent).toContain('Security Tool');  // Sayfa içerikleri düzgün yüklenmeli
    
    // Masaüstü görünüm simülasyonu
    await page.setViewportSize({ width: 1280, height: 800 });
    const desktopContent = await page.textContent('body');
    expect(desktopContent).toContain('Security Tool');  // Sayfa içerikleri yine düzgün yüklenmeli
  });

  test('Edge Case 3 - Sayfa hızlıca kapanıp açıldığında oturum nasıl davranıyor?', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools');
    
    // Sayfayı hızlıca yenile ve kontrol et
    await page.reload();
    const contentAfterReload = await page.textContent('body');
    expect(contentAfterReload).toContain('Security Tool');
  });
  test('Edge Case 4 - Sayfa çok düşük bağlantı hızında yükleniyor mu?', async ({ page, context }) => {
    // Ağ koşullarını simüle et (yavaş 3G)
    await context.route('**/*', async route => {
      await new Promise(r => setTimeout(r, 1000)); // Gecikme ekle
      route.continue();
    });

    await page.goto('https://s4e.io/free-security-tools');
    const content = await page.textContent('body');
    expect(content).toContain('Security Tool'); // Sayfa sonunda doğru yüklenmeli
  });

  test('Edge Case 5 - Kullanıcı URL’ye geçersiz parametre eklerse sayfa çökmemeli', async ({ page }) => {
    await page.goto('https://s4e.io/free-security-tools?tool=undefined&x=999');
    const title = await page.title();
    expect(title).toBe('Online Free Security Tools | S4E');
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Security Tool'); // Sayfa düzgün render edilmeli
  });

  test('Edge Case 6 - Sayfa birden çok sekmede açıldığında davranış tutarlı mı?', async ({ context }) => {
    const page1 = await context.newPage();
    await page1.goto('https://s4e.io/free-security-tools');
    
    const page2 = await context.newPage();
    await page2.goto('https://s4e.io/free-security-tools');

    const content1 = await page1.textContent('body');
    const content2 = await page2.textContent('body');

    expect(content1).toContain('Security Tool');
    expect(content2).toContain('Security Tool');
  });


});
