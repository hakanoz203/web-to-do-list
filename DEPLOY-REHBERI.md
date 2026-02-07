# Okyanus İzin Özel Yapılacaklar Listesi – Ücretsiz Yayınlama Rehberi

Bu uygulama **statik** bir web sitesidir (HTML, CSS, JavaScript). Vercel veya Netlify ile **ücretsiz** ve **kalıcı** olarak internette yayınlayabilirsin.

---

## Ön hazırlık: GitHub’a yükleme

Her iki platform da projeyi GitHub üzerinden alır. Önce kodu GitHub’a koyman gerekir.

### 1. GitHub hesabı

- [github.com](https://github.com) adresine git.
- Hesabın yoksa **Sign up** ile ücretsiz hesap aç.

### 2. Yeni depo (repository) oluştur

- Sağ üstten **+** → **New repository**.
- **Repository name:** `okyanus-yapilacaklar` (veya istediğin isim).
- **Public** seçili kalsın.
- **Create repository**’e tıkla (README ekleme, .gitignore ekleme işaretleme).

### 3. Projeyi bilgisayardan GitHub’a gönderme

Bilgisayarında **PowerShell** veya **Komut İpromptu** aç. Aşağıdaki komutları **sırayla** yaz (yol kendi bilgisayarına göre değişebilir):

```bash
cd c:\cursorprojects\todo-list
git init
git add index.html styles.css app.js
git commit -m "Ilk yukleme - Okyanus yapilacaklar listesi"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/okyanus-yapilacaklar.git
git push -u origin main
```

- `KULLANICI_ADIN` yerine kendi GitHub kullanıcı adını yaz.
- İlk `git push`’ta GitHub kullanıcı adı ve şifre (veya Personal Access Token) isteyebilir; gir.

Git yüklü değilse: [git-scm.com](https://git-scm.com) adresinden Windows için Git’i indirip kur, sonra bu adımları tekrarla.

---

## Seçenek A: Vercel ile yayınlama (önerilen)

1. [vercel.com](https://vercel.com) adresine git, **Sign Up** ile GitHub hesabınla giriş yap.
2. **Add New…** → **Project**.
3. **Import** kısmında `okyanus-yapilacaklar` (veya verdiğin isim) deposunu görüp **Import**’a tıkla.
4. **Root Directory:** Boş bırak (zaten proje dosyaları deponun kökünde olacak). Eğer depoda sadece `todo-list` klasörü varsa, **Edit** deyip `todo-list` yaz.
5. **Deploy**’a tıkla.
6. Birkaç saniye sonra **Visit** ile siteni aç. Adres şöyle olur: `https://okyanus-yapilacaklar-xxx.vercel.app`

**Not:** Sonradan GitHub’a yeni commit atıp `git push` yaptığında Vercel otomatik yeniden yayınlar.

---

## Seçenek B: Netlify ile yayınlama

1. [netlify.com](https://www.netlify.com) adresine git, **Sign up** ile GitHub hesabınla giriş yap.
2. **Add new site** → **Import an existing project**.
3. **Deploy with GitHub**’ı seç, GitHub’ı yetkilendir.
4. **Pick a repository**’den `okyanus-yapilacaklar` (veya verdiğin isim) deposunu seç.
5. **Build settings:**  
   - **Branch:** main  
   - **Build command:** Boş bırak.  
   - **Publish directory:** Boş bırak (veya depoda sadece `todo-list` varsa `todo-list` yaz).
6. **Deploy site**’a tıkla.
7. Birkaç saniye sonra **Open production deploy** veya **Site overview** → adresine tıklayarak siteni aç. Adres şöyle olur: `https://rastgele-isim.netlify.app`

**Not:** Sonradan GitHub’a `git push` yaptığında Netlify da otomatik yeniden yayınlar.

---

## Özet

| Adım | Ne yapıyorsun? |
|------|-----------------|
| 1 | GitHub’da yeni repo oluştur |
| 2 | `c:\cursorprojects\todo-list` içinde `git init`, `git add`, `git commit`, `git remote`, `git push` ile kodu GitHub’a at |
| 3 | Vercel veya Netlify’da “Import from GitHub” deyip bu repoyu seç |
| 4 | Deploy’a tıkla; birkaç saniye sonra siten canlı olur |

İstersen sadece Vercel veya sadece Netlify kullan; ikisi de ücretsiz ve bu proje için yeterli.

---

## Depoda sadece todo-list klasörü varsa

Eğer GitHub’a `c:\cursorprojects` klasörünü (içinde `todo-list` ile) attıysan:

- **Vercel:** Project → **Settings** → **General** → **Root Directory** → `todo-list` yaz, **Save**.
- **Netlify:** Site **Settings** → **Build & deploy** → **Build settings** → **Base directory** → `todo-list` yaz, **Save** → **Trigger deploy**.

Bu sayede yayınlanan site, `todo-list` içindeki `index.html` ile açılır.
