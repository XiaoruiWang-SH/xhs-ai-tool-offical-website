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
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  创建<span className="text-secondary">爆款</span>
                  <br />
                  小红书内容
                  <br />
                  一键搞定
                </h1>
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

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500"></div>
                </div>
                <span>
                  已有{' '}
                  <span className="text-foreground font-semibold">10,000+</span>{' '}
                  创作者在使用
                </span>
              </div>
            </div>

            {/* 示例展示区域 - 扇形卡牌展开 */}
            <div className="relative">
              <div className="relative w-full max-w-4xl mx-auto lg:mx-0 h-96 flex items-center justify-center">
                {/* 第一张卡片 - 左侧 */}
                <div className="absolute transform -rotate-12 -translate-x-48 hover:rotate-0 hover:translate-x-0 transition-all duration-500 z-10">
                  <div className="bg-white rounded-2xl shadow-xl border border-border/20 overflow-hidden">
                    <Image
                      src="/xhs_note1.jpg"
                      alt="小红书生成文案示例1"
                      width={190 * 1.2}
                      height={412 * 1.2}
                      className="object-contain"
                    />
                    {/* 小红书风格标签 */}
                    <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm text-background px-3 py-1 rounded-full text-sm font-medium">
                      ✨ AI生成文案
                    </div>
                  </div>
                </div>

                {/* 第二张卡片 - 中间 */}
                <div className="relative transform hover:scale-105 transition-all duration-300 z-20">
                  <div className="bg-white rounded-2xl shadow-2xl border border-border/20 overflow-hidden">
                    <Image
                      src="/xhs_note2.jpg"
                      alt="小红书生成文案示例2"
                      width={190 * 1.2}
                      height={412 * 1.4}
                      className="object-contain"
                    />
                    {/* 小红书风格标签 */}
                    <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-background px-3 py-1 rounded-full text-sm font-medium">
                      🌟 智能优化
                    </div>
                  </div>
                </div>

                {/* 第三张卡片 - 右侧 */}
                <div className="absolute transform rotate-12 translate-x-48 hover:rotate-0 hover:translate-x-0 transition-all duration-500 z-10">
                  <div className="bg-white rounded-2xl shadow-xl border border-border/20 overflow-hidden">
                    <Image
                      src="/xhs_comment.jpg"
                      alt="小红书生成评论示例"
                      width={190 * 1.2}
                      height={412 * 1.2}
                      className="object-contain"
                    />
                    {/* 小红书风格标签 */}
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      💬 AI评论
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Workflow Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* AI 能力展示区域 */}
          <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl p-8 border border-border/50">
            {/* 工作流程标题 */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3">
                🔄 AI 驱动的一条龙工作流
              </h3>
              <p className="text-muted-foreground">
                从内容创作到发布，无需复制粘贴的智能化体验
              </p>
            </div>

            {/* 三步骤展示 - 两列布局 */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 左列：步骤一和步骤二 */}
              <div className="space-y-6">
                {/* 第一步：文案生成 */}
                <div className="p-6 bg-background/50 rounded-2xl border border-border/30 hover:border-secondary/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <span className="text-xl">📝</span>
                    </div>
                    <h4 className="text-lg font-semibold">
                      步骤一：智能文案生成
                    </h4>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                      一键生成
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    AI 分析图片内容，自动生成吸引眼球的标题和正文
                  </p>
                  <div className="relative overflow-hidden rounded-xl border border-border">
                    <Image
                      src="/xhs-post.png"
                      alt="小红书文案生成界面"
                      width={350}
                      height={180}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* 第二步：评论生成 */}
                <div className="p-6 bg-background/50 rounded-2xl border border-border/30 hover:border-accent/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-xl">💬</span>
                    </div>
                    <h4 className="text-lg font-semibold">
                      步骤二：AI 评论助手
                    </h4>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      智能互动
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    智能分析笔记内容，生成个性化、有价值的互动评论
                  </p>
                  <div className="relative overflow-hidden rounded-xl border border-border">
                    <Image
                      src="/xhs-comment.png"
                      alt="小红书评论生成界面"
                      width={350}
                      height={120}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 右列：步骤三 */}
              <div className="flex items-center">
                <div className="w-full p-6 bg-background/50 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-xl">🚀</span>
                    </div>
                    <h4 className="text-lg font-semibold">
                      步骤三：一键应用发布
                    </h4>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      无缝集成
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Chrome
                    侧边栏设计，内容直接插入编辑页面，告别复制粘贴，流水线式创作体验
                  </p>
                  <div className="relative overflow-hidden rounded-xl border border-border">
                    <Image
                      src="/xhs-extension-page.png"
                      alt="小红书扩展界面"
                      width={400}
                      height={320}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 底部特色标签 */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-secondary/10 text-secondary text-sm rounded-full flex items-center gap-2">
                ⚡ 10倍效率提升
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent text-sm rounded-full flex items-center gap-2">
                🎯 零复制粘贴
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full flex items-center gap-2">
                🤖 多AI模型支持
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
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
            <div className="bg-muted/30 p-8 rounded-2xl border border-border hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">智能文案创作</h3>
              <p className="text-muted-foreground leading-relaxed">
                基于图片内容和用户输入，自动生成吸引眼球的小红书标题和正文，让你的内容脱颖而出
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI 评论助手</h3>
              <p className="text-muted-foreground leading-relaxed">
                智能分析小红书笔记内容，生成个性化、有价值的互动评论，提升社交互动效果
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">一键应用</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI 生成内容可直接插入小红书编辑页面，无需复制粘贴，提升创作效率
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border hover:border-secondary/50 transition-colors group">
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
            <div className="bg-muted/30 p-8 rounded-2xl border border-border hover:border-secondary/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">侧边栏集成</h3>
              <p className="text-muted-foreground leading-relaxed">
                Chrome 侧边栏设计，不干扰原有浏览体验，随时随地使用 AI 助手功能
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border hover:border-secondary/50 transition-colors group">
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

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              看看 AI 如何<span className="text-secondary">改变</span>内容创作
            </h2>
            <p className="text-xl text-muted-foreground">
              从内容生成到手机展示，完整的创作流程演示
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content Generation Demo */}
            <div className="space-y-6">
              <div className="bg-muted/20 p-6 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">📝</span>
                  智能内容生成
                </h3>
                <p className="text-muted-foreground mb-6">
                  上传图片，AI 自动分析并生成吸引人的标题和文案内容
                </p>
                <video
                  className="w-full h-auto rounded-xl border border-border"
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
            <div className="space-y-6">
              <div className="bg-muted/20 p-6 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">📱</span>
                  手机端完美展示
                </h3>
                <p className="text-muted-foreground mb-6">
                  发布成功后在手机端的真实展示效果，确保内容质量
                </p>
                <video
                  className="w-full h-auto rounded-xl border border-border"
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

      {/* Download Section */}
      <section
        id="download"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary/10 to-primary/10"
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
