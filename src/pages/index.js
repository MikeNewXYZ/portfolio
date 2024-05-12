import Background from "@/components/background/background";
import ContactButton from "@/components/contact-button/contact-button";
import Hero from "@/components/hero/hero";
import ContextProviderWrapper from "@/context/context-provider-wrapper";

export default function HomePage() {
  return (
    <ContextProviderWrapper>
      <main className="container mx-auto overflow-hidden"><Hero /></main>

      <ContactButton href="/contact" />

      <Background />
    </ContextProviderWrapper>

  );
}
