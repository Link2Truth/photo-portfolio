"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";

const tags = [
  "富士 X-T5",
  "Lightroom",
  "城市漫步",
  "猫咪",
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          关于我
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 左侧：头像和标签 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="size-48 mb-8">
              <AvatarImage src="/avatar.jpg" alt="头像" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>

            <p className="text-sm text-muted-foreground mb-4">我常用的</p>
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
                hidden: {},
              }}
            >
              {tags.map((tag) => (
                <motion.div
                  key={tag}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                  }}
                >
                  <Badge variant="outline">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 右侧：文字部分 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              嗨，我是一个普通的摄影爱好者。没有专业背景，也没有商业拍摄，
              只是单纯喜欢用相机和手机记录生活中那些打动我的瞬间。
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              也许是某个傍晚的晚霞，也许是街角偶遇的小猫，
              也许是朋友不经意的笑容——这些平凡的画面，对我来说都很珍贵。
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              记录着那些我想留住的时光。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
