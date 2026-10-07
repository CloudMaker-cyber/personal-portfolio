import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';

/**
 * App —— 站点根组件
 *
 * 这里就是整个网站的"目录"：从上到下依次排列六个区块，组成一个单页长滚动站点。
 * 不使用 React Router，因为 PRD 只需要一页；页面间跳转靠锚点（#about 等）完成。
 *
 * 想调整某个区块的位置，直接上下移动对应的标签即可。
 */
function App() {
  return (
    <div className="min-h-[100dvh] bg-canvas text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
