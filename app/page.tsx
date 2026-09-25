import Header from "@/components/Header";
import CardStudio from "@/components/CardStudio";
import SeoContent from "@/components/SeoContent";
import FaqList from "@/components/FaqList";
import { FAQS } from "@/lib/faqs";

// Single route: hero + tool in one fold (server-rendered shell), with the
// interactive editor as a client island and crawlable SEO content below.
// The FAQ uses native <details> (FaqList) instead of a client-side accordion
// so every answer ships in the static HTML for crawlers — zero JS required.
export default function HomePage() {
  return (
    <main>
      <Header />
      <CardStudio />
      <SeoContent />
      <FaqList items={FAQS} />
    </main>
  );
}
