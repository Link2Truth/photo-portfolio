"use client";

export function Footer() {
  return (
    <footer className="border-t py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Photo Gallery. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Powered by Next.js, Supabase, and Shadcn UI.
        </p>
      </div>
    </footer>
  );
}
