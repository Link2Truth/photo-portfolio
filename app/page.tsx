import { Suspense } from "react";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { PhotoGallery } from "@/components/bento-gallery";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { AuthButton } from "@/components/auth-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav
        authSlot={
          <Suspense>
            <AuthButton />
          </Suspense>
        }
      />
      <Hero />
      <PhotoGallery />
      <About />
      <Contact />
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  );
}
