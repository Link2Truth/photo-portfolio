"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <motion.p
            className="text-muted-foreground text-sm md:text-base tracking-[0.3em] mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            一个热爱摄影的人
          </motion.p>

          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            光影之间
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-light text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            记录生活的美好
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            不是专业摄影师，只是喜欢用镜头记录生活中的点点滴滴。
            这里是我收集的那些打动我的瞬间。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Button size="lg" asChild className="rounded-full px-8">
              <Link href="#portfolio">
                查看作品
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8">
              <Link href="#about">了解更多</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="relative z-10 pb-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <Link
          href="#portfolio"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <span className="text-xs tracking-widest">向下滚动</span>
          <ChevronDown className="size-4 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
