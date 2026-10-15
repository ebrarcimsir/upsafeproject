document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);

      // İlgili içeriği göster, diğerlerini gizle
      sections.forEach(sec => {
        if (sec.id === targetId) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });

      // Menü düğmelerinin aktiflik durumunu güncelle
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Telefonda menüye tıklandığında sayfayı yumuşakca en üste kaydır
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
