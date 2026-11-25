import type { Metadata } from "next";
import Link from "next/link";

const title = "yutodev.com";
const description = "uesugiyuuto の個人サイト。作ったアプリの一覧を置いています。";

// layout.tsx の共通設定は AppLibrary（/apps/）の題なので、入口では共有時の題と説明を上書きする。
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: title,
    title,
    description,
    images: [{ url: "/ogp.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/ogp.png"] },
};

/** yutodev.com の入口。個人サイトを作るまでは、サイトの名前とアプリの一覧（/apps/）へのリンクだけを置く。 */
export default function RootPage() {
  return (
    <main className="door">
      <div className="door-inner">
        <h1 className="door-title">yutodev.com</h1>
        <Link className="door-link" href="/apps/">
          <span lang="ja">アプリの一覧へ</span>
          <span className="door-link-en" lang="en">Apps</span>
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </main>
  );
}
