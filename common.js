/* ============================================================
   建科洁净供应链平台 · 共享脚本
   自动注入顶部导航与页脚，高亮当前页，处理公共交互
   ============================================================ */
(function(){

  /* ---------- 当前页面文件名 ---------- */
  const path = location.pathname.split('/').pop() || 'index.html';

  /* ---------- 导航菜单配置 ---------- */
  const navItems = [
    { href:'index.html',    label:'首页' },
    { href:'value.html',    label:'平台价值' },
    { href:'features.html', label:'核心功能' },
    { href:'category.html', label:'品类矩阵' },
    { href:'serve.html',    label:'服务对象' },
    { href:'data.html',     label:'数据驾驶舱' },
    { href:'finance.html',  label:'供应链金融' },
    { href:'join.html',     label:'入驻流程' }
  ];

  /* ---------- 生成导航 HTML ---------- */
  const navHTML = navItems.map(item => {
    const active = path === item.href ? 'active' : '';
    return `<a href="${item.href}" class="${active}">${item.label}</a>`;
  }).join('');

  /* ---------- 顶部导航 ---------- */
  const headerHTML = `
  <header class="header" id="header">
    <div class="container header-inner">
      <a href="index.html" class="logo">
        <img class="logo-mark" src="logo-jianke.jpg" alt="建科">
        <div class="logo-text">
          <div class="cn">建科供应链平台</div>
          <div class="en">Jianke Clean Supply Chain</div>
        </div>
      </a>
      <nav class="nav" id="nav">${navHTML}</nav>
      <div class="header-actions">
        <a href="join.html" class="btn btn-ghost">供应商入驻</a>
        <a href="https://scm.hbjkjt.com/supplyChain/home" class="btn btn-primary">
          进入工作台
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <button class="menu-toggle" id="menuToggle" aria-label="菜单">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;

  /* ---------- 页脚 ---------- */
  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="logo">
            <img class="logo-mark" src="logo-jianke.jpg" alt="建科">
            <div class="logo-text">
              <div class="cn">建科供应链平台</div>
              <div class="en">Jianke Clean Supply Chain</div>
            </div>
          </div>
          <p>湖北建科科技集团旗下数字信息化子公司打造的洁净工程垂直领域产业互联网平台，以数字化供应链服务赋能洁净工程行业。</p>
          <div class="footer-contact">
            <div><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg><span>400-888-XXXX</span></div>
            <div><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg><span>clean@jianke.com</span></div>
            <div><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span>湖北省武汉市 · 建科科技园</span></div>
          </div>
        </div>
        <div class="footer-col"><h4>平台服务</h4><ul>
          <li><a href="features.html">智能寻源</a></li>
          <li><a href="features.html">电子招投标</a></li>
          <li><a href="category.html">品类目录</a></li>
          <li><a href="features.html">供应商管理</a></li>
          <li><a href="finance.html">供应链金融</a></li>
        </ul></div>
        <div class="footer-col"><h4>覆盖行业</h4><ul>
          <li><a href="serve.html">半导体制造</a></li>
          <li><a href="serve.html">新能源电池</a></li>
          <li><a href="serve.html">生物医药</a></li>
          <li><a href="serve.html">数据中心</a></li>
          <li><a href="serve.html">精密制造</a></li>
        </ul></div>
        <div class="footer-col"><h4>关于我们</h4><ul>
          <li><a href="index.html">平台介绍</a></li>
          <li><a href="value.html">平台价值</a></li>
          <li><a href="join.html">供应商入驻</a></li>
          <li><a href="data.html">数据驾驶舱</a></li>
          <li><a href="finance.html">供应链金融</a></li>
        </ul></div>
      </div>
      <div class="footer-bottom">
        <div>© 2026 湖北建科科技集团 · 建科洁净供应链平台 版权所有</div>
        <div class="links">
          <a href="#">隐私政策</a><a href="#">服务协议</a><a href="#">鄂ICP备XXXXXXXX号</a>
        </div>
      </div>
    </div>
  </footer>`;

  /* ---------- 注入 ---------- */
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ---------- 导航滚动效果 ---------- */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* ---------- 移动端菜单 ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  /* ---------- 滚动渐显 ---------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('active'), i * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold:0.12, rootMargin:'0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ---------- 数字滚动动画 ---------- */
  function animateNumbers(scope=document){
    scope.querySelectorAll('[data-count]').forEach(el => {
      if (el.dataset.done === '1') return;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const isFloat = el.dataset.float === '1';
      const duration = 1400;
      const start = performance.now();
      el.dataset.done = '1';
      function update(now){
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const current = target * eased;
        el.textContent = (isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString()) + suffix;
        if (p < 1) requestAnimationFrame(update);
        else el.textContent = (isFloat ? target.toFixed(1) : target.toLocaleString()) + suffix;
      }
      requestAnimationFrame(update);
    });
  }

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold:0.3 });
  document.querySelectorAll('.hero-stats, .dash-grid, .finance-stats').forEach(el => statObserver.observe(el));

  /* 首屏立即触发 */
  window.addEventListener('load', () => {
    animateNumbers(document.querySelector('.hero-stats') || document);
  });

})();