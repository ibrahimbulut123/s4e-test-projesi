import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Test dosyalarının bulunduğu dizin
  timeout: 30000, // Her testin 30 saniye içinde tamamlanmasını bekleriz
  expect: {
    timeout: 5000, // Expect ifadelerinin 5 saniyede tamamlanmasını bekleriz
  },
  retries: 2, // Testler başarısız olursa, her testi 2 kez tekrarlar
  workers: 4, // Paralel çalışacak test sayısı
  reporter: 'html', // Test sonuçlarını HTML formatında raporla
  use: {
    headless: true, // Testlerin headless modda çalışmasını sağlar
    video: 'retain-on-failure', // Sadece başarısız testler için video kaydeder
    screenshot: 'only-on-failure', // Yalnızca başarısız testlerde ekran görüntüsü alır
    baseURL: 'https://s4e.io', // Testlerin temel URL'si
    trace: 'on-first-retry', // İlk başarısızlıkta trace kaydeder
    locale: 'en-US', // Locale ayarı
    geolocation: { longitude: 0, latitude: 0 }, // Testlerin geolokalizasyon ayarları
    permissions: ['geolocation'], // Kullanıcı izinleri
    viewport: { width: 1280, height: 720 }, // Varsayılan görünüm boyutları
  },
  projects: [
    {
      name: 'Functional Tests',
      testMatch: /.*FunctionalTests\.ts/, // Fonksiyonel test dosyaları
      use: {
        ...devices['Desktop Chrome'], // Masaüstü Chrome cihazını kullanır
      },
    },
    {
      name: 'Edge Case Tests',
      testMatch: /.*EdgeCaseTests\.ts/, // Edge case test dosyaları
      use: {
        ...devices['Desktop Chrome'], // Masaüstü Chrome cihazını kullanır
      },
    },
    {
      name: 'Mobile Tests',
      testMatch: /.*MobileTests\.ts/, // Mobil test dosyaları
      use: {
        ...devices['iPhone 11'], // iPhone 11 cihazını kullanır
        viewport: { width: 375, height: 812 }, // Mobil görünüm boyutları
      },
    },
  ],
});
