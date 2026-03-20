"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";

const categories = ["全部", "人像", "风光", "日常", "街拍"];

const photos = [
  {
    id: 1,
    title: "午后的光",
    category: "人像",
    description: "阳光洒进窗户的那个下午",
    image: "/placeholder-1.jpg",
  },
  {
    id: 2,
    title: "山顶的云",
    category: "风光",
    description: "爬了三个小时才看到的风景",
    image: "/placeholder-2.jpg",
  },
  {
    id: 3,
    title: "和朋友们",
    category: "日常",
    description: "那顿吃了很久的火锅",
    image: "/placeholder-3.jpg",
  },
  {
    id: 4,
    title: "东京的巷子",
    category: "街拍",
    description: "迷路时发现的小店",
    image: "/placeholder-4.jpg",
  },
  {
    id: 5,
    title: "猫咪",
    category: "日常",
    description: "楼下偶遇的流浪猫",
    image: "/placeholder-5.jpg",
  },
  {
    id: 6,
    title: "海边黄昏",
    category: "风光",
    description: "等了很久终于等到的晚霞",
    image: "/placeholder-6.jpg",
  },
  {
    id: 7,
    title: "咖啡馆",
    category: "人像",
    description: "朋友在咖啡馆发呆的样子",
    image: "/placeholder-7.jpg",
  },
  {
    id: 8,
    title: "雨天的街",
    category: "街拍",
    description: "下雨天的霓虹倒影",
    image: "/placeholder-8.jpg",
  },
];

export function PhotoGallery() {
  const [activeTab, setActiveTab] = useState("全部");

  const filteredPhotos =
    activeTab === "全部"
      ? photos
      : photos.filter((photo) => photo.category === activeTab);

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            作品
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            每一张照片背后都有一个故事，或开心，或平淡，但都是我想留住的瞬间。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
              }}
            >
              <Card
                className="group overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <span className="text-sm">{photo.title}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Badge variant="secondary" className="mb-2">
                        {photo.category}
                      </Badge>
                      <h3 className="font-semibold">{photo.title}</h3>
                      <p className="text-sm text-white/80">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
