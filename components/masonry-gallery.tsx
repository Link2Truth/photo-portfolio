"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { photos, categories, type Photo } from "@/lib/data/photos";
import { Lightbox } from "@/components/lightbox";

export function MasonryGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("全部");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = photos.filter((photo) => {
    const matchesSearch =
      searchQuery === "" ||
      photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "全部" || photo.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="relative max-w-7xl mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜索照片..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 h-11 rounded-full"
          />
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-8"
        >
          <TabsList variant="line" className="gap-2">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            没有找到匹配的照片
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="break-inside-avoid mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div
                    className={
                      photo.aspectRatio === "portrait"
                        ? "relative aspect-[3/4]"
                        : "relative aspect-[4/3]"
                    }
                  >
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                      {photo.category}
                    </span>
                    <h3 className="font-semibold mt-2">{photo.title}</h3>
                    <p className="text-xs text-white/80 mt-1">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Lightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </>
  );
}
