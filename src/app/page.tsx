import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                className="relative bottom-1"
                src="/redNote_icon.svg"
                width={60}
                height={60}
                alt="Picture of the author"
              />
              <span className="ml-2 text-lg font-semibold">AI 小帮手</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="hover:text-secondary transition-colors"
              >
                功能特色
              </a>
              <a
                href="#demo"
                className="hover:text-secondary transition-colors"
              >
                演示视频
              </a>
              <a
                href="#download"
                className="hover:text-secondary transition-colors"
              >
                立即下载
              </a>
            </div>
            <button className="bg-secondary text-background px-6 py-2 rounded-full font-medium hover:bg-secondary-hover transition-colors">
              立即安装
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-4xl lg:text-6xl font-bold leading-tight">
                  <div className='flex items-center gap-2.5'>
                    <Image
                      className="relative bottom-2"
                      src="/icon_128x128.png"
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                    <div>
                      创建<span className="text-secondary">爆款</span>
                    </div>
                  </div>
                  <div />
                  小红书内容
                  <div />
                  <div className="flex items-center gap-2.5">
                    <div>一键搞定 </div>
                    <Image
                      src="/aiAuto_icon.svg"
                      width={120}
                      height={120}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  专业的 AI 内容创作助手，智能生成高质量文案、标题和评论。 集成
                  OpenAI GPT、Claude、通义千问等主流 AI
                  大模型，让内容创作变得简单高效。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary-hover transition-colors">
                  🚀 免费安装扩展
                </button>
                <button className="border border-border px-8 py-4 rounded-full font-semibold text-lg hover:border-muted transition-colors">
                  📺 观看演示
                </button>
              </div>
            </div>

            {/* 示例展示区域 - 扇形卡牌展开 */}
            <div className="relative">
              <div className="relative top-5 w-full max-w-4xl mx-auto lg:mx-0 h-96 flex items-center justify-center">
                {/* 第一张卡片 - 左侧 */}
                <div className="absolute transform -rotate-12 -translate-x-42 hover:scale-105 transition-all duration-500 z-10">
                  <div className="bg-white rounded-2xl shadow-xl border border-border/20 overflow-hidden">
                    <Image
                      src="/xhs_note2.jpg"
                      alt="小红书生成文案示例2"
                      width={190 * 1.2}
                      height={412 * 1.2}
                      className="object-contain"
                    />
                    {/* 小红书风格标签 */}
                    <div className="absolute top-0 left-15 bg-accent/90 backdrop-blur-sm text-background px-3 py-1 rounded-full text-sm font-medium">
                      🌟 智能优化
                    </div>
                  </div>
                </div>

                {/* 第二张卡片 - 中间 */}
                <div className="relative transform hover:scale-105 transition-all duration-300 z-20">
                  <div className="bg-white rounded-2xl shadow-2xl border border-border/20 overflow-hidden">
                    <Image
                      src="/xhs_note1.jpg"
                      alt="小红书生成文案示例1"
                      width={190 * 1.2}
                      height={412 * 1.2}
                      className="object-contain"
                    />
                    {/* 小红书风格标签 */}
                    <div className="absolute top-1 left-15 bg-secondary/90 backdrop-blur-sm text-background px-3 py-1 rounded-full text-sm font-medium">
                      ✨ AI生成文案
                    </div>
                  </div>
                </div>

                {/* 第三张卡片 - 右侧 */}
                <div className="absolute transform rotate-12 translate-x-42 hover:scale-105 transition-all duration-500 z-10">
                  <div className="bg-white rounded-2xl shadow-xl border border-border/20 overflow-hidden">
                    <Image
                      src="/xhs_comment.jpg"
                      alt="小红书生成评论示例"
                      width={190 * 1.2}
                      height={412 * 1.2}
                      className="object-contain"
                    />
                    {/* 小红书风格标签 */}
                    <div className="absolute top-1 left-15 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      💬 AI评论
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              看看 AI 如何<span className="text-secondary">改变</span>内容创作
            </h2>
            <p className="text-xl text-muted-foreground">
              AI 驱动的一站式工作流 • 从内容生成到手机展示，完整的创作流程演示
            </p>
          </div>

          <div className="flex gap-8 items-start">
            {/* Content Generation Demo */}
            <div className="flex-[1.25] space-y-6">
              <div className="p-6 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">📝</span>
                  智能内容生成
                </h3>
                <p className="text-muted-foreground mb-6">
                  上传图片，AI 自动分析并生成吸引人的标题和文案内容
                </p>
                <video
                  className="w-full object-contain rounded-xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/postNote.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Mobile Display Demo */}
            <div className="flex-[0.49] space-y-6">
              <div className="p-6 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">📱</span>
                  手机端完美展示
                </h3>
                <p className="text-muted-foreground mb-6">
                  发布成功后在手机端的真实展示效果，确保内容质量
                </p>
                <video
                  className="w-full object-contain rounded-xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/showNoteOnPhone.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              让小红书内容创作<span className="text-secondary">前所未有</span>
              的简单
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              从图片分析到文案生成，从标题优化到评论互动，AI
              驱动的完整内容创作解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border border-border hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">智能文案创作</h3>
              <p className="text-muted-foreground leading-relaxed">
                基于图片内容和用户输入，自动生成吸引眼球的小红书标题和正文，让你的内容脱颖而出
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border border-border hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI 评论助手</h3>
              <p className="text-muted-foreground leading-relaxed">
                智能分析小红书笔记内容，生成个性化、有价值的互动评论，提升社交互动效果
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border border-border hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">一键应用</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI 生成内容可直接插入小红书编辑页面，无需复制粘贴，提升创作效率
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl border border-border hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">多模型支持</h3>
              <p className="text-muted-foreground leading-relaxed">
                支持 OpenAI GPT、Claude、通义千问等主流 AI 模型，选择最适合的 AI
                助手
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-2xl border border-border hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">侧边栏集成</h3>
              <p className="text-muted-foreground leading-relaxed">
                Chrome 侧边栏设计，不干扰原有浏览体验，随时随地使用 AI 助手功能
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-2xl border border-border hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">隐私安全</h3>
              <p className="text-muted-foreground leading-relaxed">
                API 密钥仅存储在本地浏览器，数据隐私得到完全保障，安全可靠
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 px-4 sm:px-6 lg:px-8 from-secondary/10 to-primary/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            立即开始你的 AI 创作之旅
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            免费安装，立即体验 AI 驱动的内容创作革命
          </p>

          <div className="space-y-6">
            <button className="bg-secondary text-background px-12 py-6 rounded-full font-bold text-xl hover:bg-secondary-hover transition-colors shadow-2xl">
              🚀 免费安装 Chrome 扩展
            </button>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                完全免费使用
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                无需注册账号
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                支持多种 AI 模型
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-xl font-bold text-secondary">🤖</span>
              <span className="ml-2 text-lg font-semibold">
                小红书 AI 小帮手
              </span>
            </div>

            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                使用条款
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                隐私政策
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                联系我们
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted">
            <p>© 2024 小红书 AI 工具小帮手. 专为小红书创作者设计的 AI 助手.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
