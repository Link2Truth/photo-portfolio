"use client";

import { Mail, MapPin, Instagram, Github } from "lucide-react";
import { motion } from "motion/react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            随便聊聊
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto md:whitespace-nowrap">
            如果你也喜欢摄影，或者对某张照片感兴趣，欢迎来找我聊天。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 邮箱 */}
          <motion.a
            href="mailto:hello@example.com"
            className="group flex items-center gap-5 p-6 rounded-2xl bg-background border hover:border-primary/50 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="shrink-0 size-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="size-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">邮箱</p>
              <p className="font-medium group-hover:text-primary transition-colors">
                hello@example.com
              </p>
            </div>
          </motion.a>

          {/* 地点 */}
          <motion.div
            className="flex items-center gap-5 p-6 rounded-2xl bg-background border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="shrink-0 size-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="size-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">位置</p>
              <p className="font-medium">上海</p>
            </div>
          </motion.div>
        </div>

        {/* 社交媒体 */}
        <motion.div
          className="flex justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#"
            aria-label="Instagram"
            className="size-12 rounded-full bg-background border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all"
          >
            <Instagram className="size-5" />
          </a>
          <a
            href="#"
            aria-label="Github"
            className="size-12 rounded-full bg-background border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all"
          >
            <Github className="size-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
