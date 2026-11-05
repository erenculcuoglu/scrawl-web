# Scrawl ürün sitesi

Türkçe B2B SaaS ürün sitesi. Bağımlılıksız HTML, CSS ve JavaScript. `dist/` herhangi bir statik HTTPS sunucusunda yayımlanabilir.

## Yerel çalıştırma

```sh
python3 -m http.server 4173 --directory dist
```

## Sayfalar ve işlevler

- `index.html`: ürün anlatısı, temsili ürün arayüzü, Desktop/Server bağlantı seçici, kullanım senaryoları, karşılaştırma, SSS.
- `docs.html`: kalıcı yardım merkezi, bağlantı modeli, kurulum hazırlığı, yetki ve otomasyon açıklaması, doğrulama promptları ve sorun giderme.
- `basla.html`: sürüm seçimi ve kurulum rehberlerine yönlendirme.
- `assets/site.js`: klavye destekli sekmeler, mobil menü, SSS için native details, dokümantasyon takip bağlantıları ve prompt kopyalama.

Uygulamadaki Help düğmesi `docs.html` sayfasına; bağlama özel yardım, ilgili bölüm kimliğine yönlendirilebilir (ör. `docs.html#desktop`).

## Bilgi doğrulama ve yayın durumu

5 Kasım 2026 tarihinde Scrawl MCP üzerinden `spaces`, `tree`, `search` ve örnek bir not için `read` çağrılarıyla keşif yapıldı. Erişim sağlanan OzBI alanında ayrı bir Scrawl ürün briefi bulunmadı. Notlar, görevler, panolar, koleksiyonlar, uygulama şablonları ve araç kimliği destekleri MCP araçları ve rehberiyle görüldü. Desktop/Server ayrımı, eşzamanlı düzenleme ve gelişmiş yetkilendirme ürün iddiaları kullanıcının briefine dayanıyor; canlı collaboration testi yapılmadı.

Pazarlama arayüzlerindeki kişi, müşteri ve veriler tamamen örnektir. Scrawl alanındaki özel içerik siteye taşınmadı. Grafik gerçek bir performans iddiası değildir.

## Üretim yayını öncesinde tamamlanacak bilgiler

1. Resmî Desktop dağıtım URL’leri, desteklenen işletim sistemleri, sürüm ve paket bilgileri.
2. Server dağıtım kaynağı, çalışma ortamı, gerçek MCP adresi, kimlik doğrulama yöntemi, örnek konfigürasyon ve işletim yönergesi.
3. Lokal eklenti kurulum dosyası ve istemci sürümlerine göre doğrulanmış adımlar.
4. İzin modeli ve Server özelliklerinin sürüme göre ürün ekibince teyidi.
5. Kamuya açık nihai alan adı, canonical, sitemap ve sosyal paylaşım görseli. İnceleme sürümünde noindex/nofollow bilinçli olarak açık.
6. İstenirse İngilizce içerik, fiyatlandırma ve kurumsal iletişim bilgileri.

Bu bilgiler gelene kadar sahte indirme, kayıt, fiyatlandırma veya çalıştırma komutu yoktur. Taslak site sahibi erişimiyle yayımlanır.

## Bu çalışmadaki doğrulama sonucu

- JavaScript sözdizimi: `node --check dist/assets/site.js` başarılı.
- Üç HTML sayfasındaki yerel dosyalar, yönlendirme hedefleri, bölüm bağlantıları ve benzersiz kimlikler kontrol edildi; hata bulunmadı.
- Yerel HTTP sunucusu ortamın ağ bağlama kısıtı nedeniyle başlatılamadı.
- Kaynak yayımlama yardımcısı, Git sunucusunun adresini çözemediği için push ve paketleme aşamasını tamamlayamadı. Site kaydı oluşturuldu, sürüm yayımlanmadı.
- Yerel HTML dosyasını tarayıcıda açma isteği tarayıcının URL güvenlik politikası tarafından engellendi; görsel ve etkileşimli tarayıcı QA tamamlanamadı. Bu kısıt aşılmadı.

## Tasarım

Kırık beyaz zemin, koyu orman yeşili, soluk lime vurgular; Manrope ve DM Sans (Google Fonts, sistem fontu yedeği). Ürün görselleri erişilebilir HTML/CSS ve SVG ile oluşturuldu. Haricî fontlar yüklenmese de site çalışır. Analitik, form, çerez veya canlı MCP arayüzü eklenmedi.
