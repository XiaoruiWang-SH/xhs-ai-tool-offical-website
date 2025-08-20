export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-yellow-400">🤖</span>
              <span className="ml-2 text-lg font-semibold">小红书 AI 小帮手</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-yellow-400 transition-colors">功能特色</a>
              <a href="#demo" className="hover:text-yellow-400 transition-colors">演示视频</a>
              <a href="#download" className="hover:text-yellow-400 transition-colors">立即下载</a>
            </div>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-300 transition-colors">
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
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                  <span className="text-yellow-400 text-sm font-medium">⚡ 由 GPT-4 驱动</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  创建<span className="text-yellow-400">爆款</span>
                  <br />小红书内容
                  <br />一键搞定
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  专业的 AI 内容创作助手，智能生成高质量文案、标题和评论。
                  集成 OpenAI GPT、Claude、通义千问等主流 AI 大模型，让内容创作变得简单高效。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors">
                  🚀 免费安装扩展
                </button>
                <button className="border border-gray-600 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-500 transition-colors">
                  📺 观看演示
                </button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500"></div>
                </div>
                <span>已有 <span className="text-white font-semibold">10,000+</span> 创作者在使用</span>
              </div>
            </div>

            <div className="relative">
              <video
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-800"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/postNote.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm">
                ✨ AI 智能生成
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              让小红书内容创作<span className="text-yellow-400">前所未有</span>的简单
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              从图片分析到文案生成，从标题优化到评论互动，AI 驱动的完整内容创作解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-colors group">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">智能文案创作</h3>
              <p className="text-gray-300 leading-relaxed">
                基于图片内容和用户输入，自动生成吸引眼球的小红书标题和正文，让你的内容脱颖而出
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-colors group">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI 评论助手</h3>
              <p className="text-gray-300 leading-relaxed">
                智能分析小红书笔记内容，生成个性化、有价值的互动评论，提升社交互动效果
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-colors group">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">一键应用</h3>
              <p className="text-gray-300 leading-relaxed">
                AI 生成内容可直接插入小红书编辑页面，无需复制粘贴，提升创作效率
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-colors group">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">多模型支持</h3>
              <p className="text-gray-300 leading-relaxed">
                支持 OpenAI GPT、Claude、通义千问等主流 AI 模型，选择最适合的 AI 助手
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-colors group">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">侧边栏集成</h3>
              <p className="text-gray-300 leading-relaxed">
                Chrome 侧边栏设计，不干扰原有浏览体验，随时随地使用 AI 助手功能
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-colors group">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">隐私安全</h3>
              <p className="text-gray-300 leading-relaxed">
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
              看看 AI 如何<span className="text-yellow-400">改变</span>内容创作
            </h2>
            <p className="text-xl text-gray-300">
              从内容生成到手机展示，完整的创作流程演示
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content Generation Demo */}
            <div className="space-y-6">
              <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">📝</span>
                  智能内容生成
                </h3>
                <p className="text-gray-300 mb-6">
                  上传图片，AI 自动分析并生成吸引人的标题和文案内容
                </p>
                <video
                  className="w-full h-auto rounded-xl border border-gray-600"
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
              <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">📱</span>
                  手机端完美展示
                </h3>
                <p className="text-gray-300 mb-6">
                  发布成功后在手机端的真实展示效果，确保内容质量
                </p>
                <video
                  className="w-full h-auto rounded-xl border border-gray-600"
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
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400/10 to-orange-400/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            立即开始你的 AI 创作之旅
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            免费安装，立即体验 AI 驱动的内容创作革命
          </p>

          <div className="space-y-6">
            <button className="bg-yellow-400 text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-yellow-300 transition-colors shadow-2xl">
              🚀 免费安装 Chrome 扩展
            </button>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                完全免费使用
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                无需注册账号
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                支持多种 AI 模型
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-xl font-bold text-yellow-400">🤖</span>
              <span className="ml-2 text-lg font-semibold">小红书 AI 小帮手</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">使用条款</a>
              <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="hover:text-white transition-colors">联系我们</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© 2024 小红书 AI 工具小帮手. 专为小红书创作者设计的 AI 助手.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
