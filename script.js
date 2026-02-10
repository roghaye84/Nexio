// JavaScript برای منوی موبایل، هدر پویا، و انیمیشن‌های اسکرول

// منوی موبایل toggle
// JavaScript برای منوی موبایل

// منوی موبایل toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

// باز کردن منو با آیکون همبرگری
menuToggle.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// بستن منو با دکمه ضربدر
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// بستن منو با کلیک روی لینک‌ها
const sidebarLinks = sidebar.querySelectorAll('a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});



// برای دکه های قسمت محصولات که میتونیم روش کلیکلک نیم و دسته محصولات رو میاره
// عملکرد تب‌ها
const tabButtons = document.querySelectorAll('.tab-btn');
const productCards = document.querySelectorAll('.product-card');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // حذف کلاس active از همه تب‌ها
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // اضافه کردن کلاس active به تب کلیک‌شده
        button.classList.add('active');

        const selectedTab = button.getAttribute('data-tab');

        // نمایش/پنهان کردن کارت‌ها بر اساس دسته
        productCards.forEach(card => {
            if (card.getAttribute('data-category') === selectedTab) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// عملکرد کلیک روی کارت‌ها (اسکرول به products-page)
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productsPage = document.querySelector('.products-page');
        productsPage.scrollIntoView({ behavior: 'smooth' });
        // اگر می‌خواهید به صفحه جداگانه بروید، تغییر دهید: window.location.href = 'product-detail.html';
    });
});
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

if (productId) {
  // اینجا کد لود محصول از JSON
  // مثلا:
  fetch('products.json')
    .then(res => res.json())
    .then(data => {
      const product = data.find(p => p.id == productId);
      // نمایش محصول
    });
}
