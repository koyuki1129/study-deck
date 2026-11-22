const main = document.getElementById('mainContent');
const navButtons = [...document.querySelectorAll('.nav-item')];
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');

const views = {
  home: () => `<section class="welcome"><h2>学習を、積み重ねる。</h2><p>カードを整理して、自分だけの学習シートで反復学習。</p><button class="welcome-action" data-go="sheets">学習シートを開く　→</button></section><h1>ホーム</h1><p class="subtitle">何をしますか？</p><div class="tiles"><button class="tile" data-go="cards"><span class="tile-icon">▤</span><span><h2>カード管理</h2><p>カードの作成・編集・分類</p></span></button><button class="tile" data-go="sheets"><span class="tile-icon">▣</span><span><h2>学習シート</h2><p>シートの作成・学習開始</p></span></button><button class="tile" data-go="history"><span class="tile-icon">▥</span><span><h2>学習履歴</h2><p>過去の学習結果を確認</p></span></button><button class="tile" data-go="data"><span class="tile-icon">⚙</span><span><h2>データ管理</h2><p>バックアップ・復元</p></span></button></div>`,
  cards: () => `<h1>カード管理</h1><p class="subtitle">カードの登録・編集・分類を行う場所です。</p><div class="panel empty-state"><div class="placeholder-icon">▤</div><h2>カード管理機能はこれから実装します</h2><p>カード作成、検索、分類、CSV登録などをここに追加していきます。</p></div>`,
  sheets: () => `<h1>学習シート</h1><p class="subtitle">カードをまとめて、自分専用の学習セットを作成します。</p><div class="panel empty-state"><div class="placeholder-icon">▣</div><h2>学習シート機能はこれから実装します</h2><p>自動抽出、手動選択、並べ替えなどをここに追加していきます。</p></div>`,
  history: () => `<h1>学習履歴</h1><p class="subtitle">学習シートごとの直近3回の成績を確認します。</p><div class="panel empty-state"><div class="placeholder-icon">▥</div><h2>学習履歴はまだありません</h2><p>学習機能の実装後、記録がここに表示されます。</p></div>`,
  data: () => `<h1>データ管理</h1><p class="subtitle">データのバックアップと復元を行います。</p><div class="notice">保存機能は現在準備中です。実際のカード登録を始める前に、自動保存とバックアップ・復元機能を実装します。</div>`
};
function showView(view){
  const key = views[view] ? view : 'home';
  main.innerHTML = views[key]();
  navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.view === key));
  sidebar.classList.remove('open');
  main.focus({preventScroll:true});
}
document.addEventListener('click', event => {
  const go = event.target.closest('[data-go]');
  if(go) showView(go.dataset.go);
  const nav = event.target.closest('[data-view]');
  if(nav) showView(nav.dataset.view);
});
menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
showView('home');
