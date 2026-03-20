import { Suspense } from "react";
import { PortfolioNav } from "@/components/nav";
import { HeroSection } from "@/components/hero-section";
import { PhotoGallery } from "@/components/photo-gallery";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { AuthButton } from "@/components/auth-button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PortfolioNav
        authSlot={
          <Suspense>
            <AuthButton />
          </Suspense>
        }
      />
      <HeroSection />
      <Separator />
      <PhotoGallery />
      <Separator />
      <AboutSection />
      <Separator />
      <ContactSection />
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  );
}
