import Image from 'next/image';
import Link from 'next/link';

export default function TermsOfService() {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">使用条款</h1>
            <p className="text-xl text-muted-foreground">
              小红书 AI 小帮手服务条款
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              最后更新：2025 年 8 月 20 日
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            {/* 第1条 - 接受条款 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. 接受条款</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  {`欢迎使用小红书 AI 小帮手（以下简称"本扩展"）。通过安装、访问或使用本扩展，您表示同意遵守本使用条款。如果您不同意这些条款，请不要使用本扩展。`}
                </p>
                <p>
                  本扩展是一款免费的开源 Chrome 浏览器扩展，旨在为小红书内容创作者提供 AI 驱动的创作辅助功能。
                </p>
              </div>
            </section>

            {/* 第2条 - 服务描述 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. 服务描述</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>本扩展提供以下主要功能：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>基于图片内容智能生成小红书文案和标题</li>
                  <li>AI 驱动的评论生成和优化建议</li>
                  <li>支持多种 AI 模型（OpenAI GPT、Claude、通义千问等）</li>
                  <li>一键将生成内容应用到小红书编辑页面</li>
                  <li>侧边栏界面，不干扰原有浏览体验</li>
                </ul>
                <p>
                  本服务依赖于第三方 AI 服务提供商，您需要自行配置相应的 API 密钥。
                </p>
              </div>
            </section>

            {/* 第3条 - 用户责任 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. 用户责任</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <h3 className="text-lg font-medium text-foreground">3.1 合法使用</h3>
                <p>您同意：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>仅将本扩展用于合法目的</li>
                  <li>不得使用本扩展创建违法、有害、误导性或侵权的内容</li>
                  <li>遵守小红书平台的使用条款和社区规范</li>
                  <li>对您使用本扩展生成的内容承担全部责任</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6">3.2 API 密钥管理</h3>
                <p>您需要：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>妥善保管您的 AI 服务 API 密钥</li>
                  <li>承担因 API 使用产生的费用</li>
                  <li>遵守 AI 服务提供商的使用条款</li>
                  <li>及时更新或撤销泄露的 API 密钥</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6">3.3 内容责任</h3>
                <p>您理解并同意：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI 生成的内容仅供参考，可能包含错误或不准确信息</li>
                  <li>您有责任审核和编辑生成的内容</li>
                  <li>最终发布的内容由您完全负责</li>
                  <li>不得将生成的内容用于侵犯他人权利的目的</li>
                </ul>
              </div>
            </section>

            {/* 第4条 - 知识产权 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. 知识产权</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <h3 className="text-lg font-medium text-foreground">4.1 开源许可</h3>
                <p>
                  本扩展基于开源许可发布，您可以在遵守相应开源协议的前提下自由使用、修改和分发。
                </p>

                <h3 className="text-lg font-medium text-foreground mt-4">4.2 生成内容</h3>
                <p>
                  AI 生成的内容归您所有，但您需要确保该内容不侵犯他人的知识产权。
                </p>

                <h3 className="text-lg font-medium text-foreground mt-4">4.3 商标权</h3>
                <p>
                  {`"小红书"是北京小红书科技有限公司的商标。本扩展与小红书官方无关。`}
                </p>
              </div>
            </section>

            {/* 第5条 - 免责声明 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. 免责声明</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <h3 className="text-lg font-medium text-foreground">5.1 服务可用性</h3>
                <p>
                  {`本扩展按"现状"提供，我们不保证：`}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>服务的连续性或可用性</li>
                  <li>AI 生成内容的准确性或适用性</li>
                  <li>与所有浏览器版本或设备的兼容性</li>
                  <li>免于错误或安全漏洞</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6">5.2 责任限制</h3>
                <p>
                  在法律允许的最大范围内，我们不对以下情况承担责任：
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>因使用本扩展导致的任何直接或间接损失</li>
                  <li>第三方 AI 服务的中断或错误</li>
                  <li>因生成内容导致的法律问题</li>
                  <li>数据丢失或泄露（除因我们重大过错导致）</li>
                </ul>
              </div>
            </section>

            {/* 第6条 - 数据和隐私 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. 数据和隐私</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  我们重视您的隐私。关于数据收集、使用和保护的详细信息，请参阅我们的
                  <Link href="/privacy-policy" className="text-secondary hover:underline">
                    隐私政策
                  </Link>
                  。
                </p>
                <p>主要原则：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>最小化数据收集</li>
                  <li>本地数据存储</li>
                  <li>用户完全控制</li>
                  <li>透明的数据处理</li>
                </ul>
              </div>
            </section>

            {/* 第7条 - 服务变更和终止 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. 服务变更和终止</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <h3 className="text-lg font-medium text-foreground">7.1 服务更新</h3>
                <p>
                  我们可能会定期更新本扩展以改进功能、修复错误或增强安全性。重大变更将通过扩展更新或相关渠道通知用户。
                </p>

                <h3 className="text-lg font-medium text-foreground mt-4">7.2 服务终止</h3>
                <p>
                  您可以随时卸载本扩展以终止使用。我们也保留在必要时停止提供服务的权利，但会尽可能提前通知。
                </p>
              </div>
            </section>

            {/* 第8条 - 争议解决 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. 争议解决</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  因使用本扩展产生的争议，应首先通过友好协商解决。如协商不成，争议应提交至开发者所在地有管辖权的人民法院解决。
                </p>
              </div>
            </section>

            {/* 第9条 - 其他条款 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. 其他条款</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <h3 className="text-lg font-medium text-foreground">9.1 条款变更</h3>
                <p>
                  我们可能会更新本使用条款。重大变更将通过扩展更新或网站公告的方式通知用户。继续使用本扩展即表示接受更新后的条款。
                </p>

                <h3 className="text-lg font-medium text-foreground mt-4">9.2 可分割性</h3>
                <p>
                  如本条款的任何部分被认定为无效或不可执行，其余部分仍然有效。
                </p>

                <h3 className="text-lg font-medium text-foreground mt-4">9.3 完整协议</h3>
                <p>
                  本使用条款构成您与我们之间关于本扩展使用的完整协议。
                </p>
              </div>
            </section>

            {/* 联系信息 */}
            <section className="space-y-4 border-t border-border pt-8">
              <h2 className="text-2xl font-semibold text-foreground">联系我们</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>如果您对这些使用条款有任何疑问，请通过以下方式联系我们：</p>
                <ul className="list-none space-y-2">
                  <li>📧 邮箱：<a href="mailto:wallace.w.x.r@gmail.com" className="text-secondary hover:underline">wallace.w.x.r@gmail.com</a></li>
                  <li>🔗 GitHub：<a href="https://github.com/XiaoruiWang-SH/xhs-ai-tool" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/XiaoruiWang-SH/xhs-ai-tool</a></li>
                  <li>🐛 问题反馈：<a href="https://github.com/XiaoruiWang-SH/xhs-ai-tool/issues" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">GitHub Issues</a></li>
                </ul>
              </div>
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