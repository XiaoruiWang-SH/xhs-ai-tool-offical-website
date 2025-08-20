import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    '小红书 AI 工具小帮手 | Xiaohongshu AI Content Assistant - Chrome Extension',
  description:
    '专业的小红书内容创作 AI 助手。一款功能强大的 Chrome 浏览器插件/扩展, 专为内容创作者设计。支持一键生成高质量文案, 一键生成评论, 一键发布. 集成 OpenAI GPT、Claude、通义千问等主流 AI 大模型，提升内容创作效率。',
  keywords:
    '小红书, AI 文案生成, Chrome 扩展, 内容创作, 智能写作, GPT, Claude, 通义千问, 社交媒体工具',
  authors: [{ name: 'XHS AI Tool Team' }],
  openGraph: {
    title: '小红书 AI 工具小帮手 | Xiaohongshu AI Content Assistant',
    description:
      '专业的小红书内容创作 AI 助手。一款功能强大的 Chrome 浏览器插件/扩展, 专为内容创作者设计。支持一键生成高质量文案, 一键生成评论, 一键发布. 集成主流 AI 大模型，提升内容创作效率。',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '小红书 AI 工具小帮手',
    description:
      '专业的小红书内容创作 AI 助手。一款功能强大的 Chrome 浏览器插件/扩展, 专为内容创作者设计。支持一键生成高质量文案, 一键生成评论, 一键发布. 集成主流 AI 大模型，提升内容创作效率。',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
