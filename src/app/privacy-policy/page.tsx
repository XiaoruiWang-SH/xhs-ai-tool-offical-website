import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                className="relative bottom-1"
                src="/redNote_icon.svg"
                width={60}
                height={60}
                alt="小红书 AI 小帮手"
              />
              <span className="ml-2 text-lg font-semibold">AI 小帮手</span>
            </Link>
            <Link 
              href="/" 
              className="hover:text-secondary transition-colors"
            >
              返回首页
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">隐私政策</h1>
            <p className="text-xl text-muted-foreground">
              小红书 AI 小帮手隐私保护说明
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              最后更新：2025 年 8 月 20 日
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            {/* 概述 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">概述</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  小红书 AI 小帮手（以下简称&ldquo;本扩展&rdquo;）致力于保护用户隐私。本隐私政策说明我们如何收集、使用和保护您的信息。
                </p>
                <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
                  <p className="font-medium text-foreground mb-2">🔒 隐私承诺</p>
                  <p>我们承诺最小化数据收集，优先保护用户隐私，所有敏感数据仅存储在您的本地设备。</p>
                </div>
              </div>
            </section>

            {/* 信息收集 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">信息收集</h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">✅ 我们收集的信息</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 border border-green-200 dark:bg-green-950/20 dark:border-green-800/30">
                      <span className="text-green-600 mt-0.5">📄</span>
                      <div>
                        <div className="font-medium text-foreground">页面内容</div>
                        <div className="text-sm">仅在您主动使用 AI 功能时，临时读取小红书页面的标题、文本内容和图片</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 border border-blue-200 dark:bg-blue-950/20 dark:border-blue-800/30">
                      <span className="text-blue-600 mt-0.5">⚙️</span>
                      <div>
                        <div className="font-medium text-foreground">用户配置</div>
                        <div className="text-sm">AI 服务配置信息（API 密钥等），存储在 Chrome 浏览器本地存储中</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">❌ 我们不收集的信息</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2 text-red-600">
                      <span>✗</span>
                      <span>个人身份信息</span>
                    </div>
                    <div className="flex items-center space-x-2 text-red-600">
                      <span>✗</span>
                      <span>浏览历史</span>
                    </div>
                    <div className="flex items-center space-x-2 text-red-600">
                      <span>✗</span>
                      <span>账户凭据</span>
                    </div>
                    <div className="flex items-center space-x-2 text-red-600">
                      <span>✗</span>
                      <span>设备信息</span>
                    </div>
                    <div className="flex items-center space-x-2 text-red-600">
                      <span>✗</span>
                      <span>位置信息</span>
                    </div>
                    <div className="flex items-center space-x-2 text-red-600">
                      <span>✗</span>
                      <span>使用统计数据</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 数据使用 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">数据使用</h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">🏠 数据处理方式</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-secondary mt-1">🔒</span>
                      <div>
                        <div className="font-medium text-foreground">本地处理</div>
                        <div>所有数据处理均在您的设备本地进行</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-secondary mt-1">⏱️</span>
                      <div>
                        <div className="font-medium text-foreground">临时性</div>
                        <div>页面内容仅在 AI 处理过程中临时使用，不存储</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-secondary mt-1">👤</span>
                      <div>
                        <div className="font-medium text-foreground">用户控制</div>
                        <div>您完全控制何时使用 AI 功能和数据处理</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">🤖 AI 服务集成</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>仅在您主动请求时，将内容发送至您配置的 AI 服务（OpenAI 或 Anthropic Claude）</li>
                    <li>遵循相应 AI 服务提供商的隐私政策</li>
                    <li>不存储 AI 服务的响应内容</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 权限说明 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">权限说明</h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">🌐 主机权限</h3>
                  <div className="space-y-3">
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                      <div className="font-medium text-foreground mb-2">小红书域名访问</div>
                      <div className="text-sm space-y-1">
                        <div>• <code className="bg-muted px-2 py-1 rounded text-xs">https://creator.xiaohongshu.com/*</code></div>
                        <div>• <code className="bg-muted px-2 py-1 rounded text-xs">https://www.xiaohongshu.com/*</code></div>
                      </div>
                      <div className="mt-2 text-sm">
                        <strong>用途：</strong>读取页面元素，提供 AI 创作辅助功能<br/>
                        <strong>限制：</strong>仅在用户主动使用扩展功能时访问
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">🔧 Chrome 扩展权限</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3 border border-border rounded-lg">
                      <div className="font-medium text-foreground">sidePanel</div>
                      <div className="text-sm">显示扩展界面</div>
                    </div>
                    <div className="p-3 border border-border rounded-lg">
                      <div className="font-medium text-foreground">activeTab</div>
                      <div className="text-sm">获取当前标签页信息</div>
                    </div>
                    <div className="p-3 border border-border rounded-lg">
                      <div className="font-medium text-foreground">storage</div>
                      <div className="text-sm">本地存储用户配置</div>
                    </div>
                    <div className="p-3 border border-border rounded-lg">
                      <div className="font-medium text-foreground">tabs</div>
                      <div className="text-sm">管理标签页状态</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 数据安全 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">数据安全</h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">🛡️ 安全措施</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>所有敏感信息（如 API 密钥）使用 Chrome 安全存储 API</li>
                    <li>不传输或存储用户的小红书账户信息</li>
                    <li>不使用远程代码或第三方脚本</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">📦 数据保留</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent mt-1">⚙️</span>
                      <div>
                        <div className="font-medium text-foreground">配置信息</div>
                        <div>存储在本地，直到用户卸载扩展或手动删除</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent mt-1">📄</span>
                      <div>
                        <div className="font-medium text-foreground">页面内容</div>
                        <div>不存储，仅临时处理</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent mt-1">💾</span>
                      <div>
                        <div className="font-medium text-foreground">缓存数据</div>
                        <div>无持久缓存</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第三方服务 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">第三方服务</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <h3 className="text-lg font-medium text-foreground">🤖 AI 服务提供商</h3>
                <p>本扩展可能向以下服务发送数据（仅在用户主动使用时）：</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="font-medium text-foreground mb-2">OpenAI</div>
                    <div className="text-sm mb-3">GPT 模型服务</div>
                    <Link 
                      href="https://openai.com/privacy/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline text-sm"
                    >
                      查看隐私政策 →
                    </Link>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="font-medium text-foreground mb-2">Anthropic</div>
                    <div className="text-sm mb-3">Claude 模型服务</div>
                    <Link 
                      href="https://www.anthropic.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline text-sm"
                    >
                      查看隐私政策 →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* 用户权利 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">用户权利</h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">👤 您的控制权</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3 p-3 rounded-lg border border-border">
                      <span className="text-secondary mt-1">🎛️</span>
                      <div>
                        <div className="font-medium text-foreground">功能控制</div>
                        <div className="text-sm">完全控制何时使用 AI 功能</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg border border-border">
                      <span className="text-secondary mt-1">🗑️</span>
                      <div>
                        <div className="font-medium text-foreground">数据删除</div>
                        <div className="text-sm">可随时删除存储的配置信息</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg border border-border">
                      <span className="text-secondary mt-1">📱</span>
                      <div>
                        <div className="font-medium text-foreground">扩展卸载</div>
                        <div className="text-sm">卸载扩展将删除所有本地存储数据</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg border border-border">
                      <span className="text-secondary mt-1">👁️</span>
                      <div>
                        <div className="font-medium text-foreground">数据访问</div>
                        <div className="text-sm">所有数据都在您的本地设备上</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 儿童隐私 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">儿童隐私</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p>
                  本扩展不专门针对 13 岁以下儿童设计，我们不会故意收集儿童的个人信息。
                </p>
              </div>
            </section>

            {/* 隐私政策变更 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">隐私政策变更</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p>
                  我们可能会更新本隐私政策。重大变更将通过扩展更新通知用户。建议定期查看本政策。
                </p>
              </div>
            </section>

            {/* 合规声明 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">合规声明</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p>本扩展设计遵循以下原则：</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                    <span className="text-secondary">📏</span>
                    <span className="font-medium">数据最小化原则</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                    <span className="text-secondary">✅</span>
                    <span className="font-medium">用户知情同意原则</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                    <span className="text-secondary">🔍</span>
                    <span className="font-medium">透明度原则</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                    <span className="text-secondary">🛡️</span>
                    <span className="font-medium">安全保障原则</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 联系信息 */}
            <section className="space-y-4 border-t border-border pt-8">
              <h2 className="text-2xl font-semibold text-foreground">联系我们</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>如有隐私相关问题，请通过以下方式联系：</p>
                <ul className="list-none space-y-2">
                  <li>📧 邮箱：<a href="mailto:wallace.w.x.r@gmail.com" className="text-secondary hover:underline">wallace.w.x.r@gmail.com</a></li>
                  <li>🔗 GitHub：<a href="https://github.com/XiaoruiWang-SH/xhs-ai-tool" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/XiaoruiWang-SH/xhs-ai-tool</a></li>
                  <li>🐛 问题反馈：<a href="https://github.com/XiaoruiWang-SH/xhs-ai-tool/issues" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">GitHub Issues</a></li>
                </ul>
              </div>
            </section>

            {/* 重要提醒 */}
            <section className="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">📋 重要提醒</h3>
              <p className="text-muted-foreground">
                使用本扩展即表示您已阅读并同意本隐私政策。如不同意，请勿使用本扩展。
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 小红书 AI 工具小帮手. 专为小红书创作者设计的 AI 助手.
          </p>
        </div>
      </footer>
    </div>
  );
}