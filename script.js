document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Tıklanan linkin hedef ID'sini al (örn: #Home -> Home)
      const targetId = link.getAttribute('href').substring(1);

      // Tüm section'lardan active sınıfını kaldır ve sadece hedefe ekle
      sections.forEach(sec => {
        if (sec.id === targetId) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });

      // Menü linklerinin aktiflik durumunu güncelle
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Glitch ve titremeye sebep olan animasyonlu kaydırma kaldırıldı, direkt en üste alınıyor
      window.scrollTo(0, 0);
    });
  });
});
