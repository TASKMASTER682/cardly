import Header from "@/components/Header";
import CardStudio from "@/components/CardStudio";
import SeoContent from "@/components/SeoContent";
import FaqAccordion from "@/components/FaqAccordion";

// Single route: hero + tool in one fold (server-rendered shell), with the
// interactive editor as a client island and crawlable SEO content below.
export default function HomePage() {
  return (
    <main>
      <Header />
      <CardStudio />
      <SeoContent />
      <FaqAccordion />
    </main>
  );
}
