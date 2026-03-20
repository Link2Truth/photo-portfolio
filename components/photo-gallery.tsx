"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const photos = [
  {
    id: 1,
    title: "午后的光",
    category: "人像",
    description: "阳光洒进窗户的那个下午",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 2,
    title: "山顶的云",
    category: "风光",
    description: "爬了三个小时才看到的风景",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 3,
    title: "和朋友们",
    category: "日常",
    description: "那顿吃了很久的火锅",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 4,
    title: "东京的巷子",
    category: "街拍",
    description: "迷路时发现的小店",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 5,
    title: "猫咪",
    category: "日常",
    description: "楼下偶遇的流浪猫",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 6,
    title: "海边黄昏",
    category: "风光",
    description: "等了很久终于等到的晚霞",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 7,
    title: "咖啡馆",
    category: "人像",
    description: "朋友在咖啡馆发呆的样子",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 8,
    title: "雨天的街",
    category: "街拍",
    description: "下雨天的霓虹倒影",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&h=600&fit=crop&q=80",
  },
];

export function PhotoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
      aria-label="摄影作品"
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="relative z-10 text-center pt-16 pb-8 px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            作品
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            每一张照片背后都有一个故事，或开心，或平淡，但都是我想留住的瞬间。
          </motion.p>
        </div>

        {/* Desktop 3D overlapping layout - hidden on mobile */}
        <div className="hidden md:block relative h-[500px] -mb-[220px]">
          <div className="flex -space-x-80 md:-space-x-96 pb-8 pt-40 items-end justify-center">
            {photos.map((photo, index) => {
              const totalImages = photos.length;
              const middle = Math.floor(totalImages / 2);
              const distanceFromMiddle = Math.abs(index - middle);
              const maxHeight = 160;
              const staggerOffset = maxHeight - distanceFromMiddle * 25;
              const zIndex = totalImages - index;

              const isHovered = hoveredIndex === index;
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
              const yOffset = isHovered ? -160 : isOtherHovered ? 0 : -staggerOffset;

              return (
                <motion.div
                  key={photo.id}
                  className="group cursor-pointer flex-shrink-0"
                  style={{ zIndex }}
                  initial={{
                    transform: "perspective(5000px) rotateY(-45deg) translateY(200px)",
                    opacity: 0,
                  }}
                  animate={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(${yOffset}px)`,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <div
                    className="relative aspect-video w-80 md:w-[28rem] lg:w-[32rem] rounded-lg overflow-hidden transition-transform duration-300"
                    style={{
                      boxShadow: `
                        rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                        rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                        rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                        rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                      `,
                    }}
                  >
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile marquee layout */}
        <div className="block md:hidden relative pb-8">
          <div className="group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]">
            {Array(4)
              .fill(0)
              .map((_, repeatIndex) => (
                <div
                  key={repeatIndex}
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
                >
                  {photos.map((photo) => (
                    <div
                      key={`${repeatIndex}-${photo.id}`}
                      className="group cursor-pointer flex-shrink-0"
                    >
                      <div
                        className="relative aspect-video w-64 rounded-lg overflow-hidden transition-transform duration-300"
                        style={{
                          boxShadow: `
                            rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                            rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                            rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                            rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                          `,
                        }}
                      >
                        <Image
                          src={photo.image}
                          alt={photo.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 256px"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                            {photo.category}
                          </span>
                          <h3 className="font-semibold mt-2">{photo.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-16">
        <Button
          variant="default"
          size="lg"
          className="group rounded-full px-8"
        >
          查看所有
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
