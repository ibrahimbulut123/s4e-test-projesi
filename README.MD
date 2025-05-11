# S4E.io Free Security Tools Sayfası - Otomasyon Test Projesi

Bu proje, [S4E.io](https://s4e.io/free-security-tools) adresinde yer alan **Free Security Tools** sayfasının fonksiyonel doğrulamasını ve temel kullanıcı senaryolarını test etmek amacıyla hazırlanmıştır. Testler, modern web otomasyon aracı olan **Playwright** kullanılarak yazılmıştır.

## İçerik

- [Gereksinimler](#gereksinimler)
- [Kurulum](#kurulum)
- [Testleri Çalıştırma](#testleri-çalıştırma)
- [Test Senaryoları](#test-senaryoları)
- [Notlar](#notlar)

## Gereksinimler

Aşağıdaki teknolojilerin sisteminizde kurulu olması gerekir:

- [Node.js](https://nodejs.org/) (v16 veya üzeri önerilir)
- Git (isteğe bağlı)
- NPM veya Yarn
- Playwright

## Kurulum

Projeyi başlatmak için şu adımları takip edebilirsiniz:

```bash
# 1. Projeyi klonlayın (ya da zip olarak indirin)
git clone https://github.com/kullaniciadi/s4e-free-security-tools-tests.git
cd s4e-test2-project

# 2. Gerekli bağımlılıkları yükleyin
npm install

# 3. Playwright için gerekli tarayıcıları yükleyin
npx playwright install

# 4. Tüm testleri çalıştırabilmek için
npx playwright test

# 5. Belirli bir test senaryosunu çalıştırmak için (örneğin "TC05"):
npx playwright test tests/function-test.spec.ts --grep "TC05"

# 6. Testleri mobil görünümde çalıştırmak için (örnek: iPhone X):
npx playwright test --project=Mobile
