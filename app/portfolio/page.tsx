import { Suspense } from "react";
import { Nav } from "@/components/nav";
import { AuthButton } from "@/components/auth-button";
import { MasonryGallery } from "../../components/masonry-gallery";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav
        authSlot={
          <Suspense>
            <AuthButton />
          </Suspense>
        }
      />
      <MasonryGallery />
    </main>
  );
}
