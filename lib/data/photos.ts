export interface Photo {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  aspectRatio: "landscape" | "portrait";
}

export const photos: Photo[] = [
  {
    id: 1,
    title: "午后的光",
    category: "人像",
    description: "阳光洒进窗户的那个下午",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 2,
    title: "山顶的云",
    category: "风光",
    description: "爬了三个小时才看到的风景",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 3,
    title: "和朋友们",
    category: "日常",
    description: "那顿吃了很久的火锅",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 4,
    title: "东京的巷子",
    category: "街拍",
    description: "迷路时发现的小店",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 5,
    title: "猫咪",
    category: "日常",
    description: "楼下偶遇的流浪猫",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 6,
    title: "海边黄昏",
    category: "风光",
    description: "等了很久终于等到的晚霞",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 7,
    title: "咖啡馆",
    category: "人像",
    description: "朋友在咖啡馆发呆的样子",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 8,
    title: "雨天的街",
    category: "街拍",
    description: "下雨天的霓虹倒影",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&h=600&fit=crop&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 9,
    title: "雾中森林",
    category: "风光",
    description: "清晨的薄雾穿过树林",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=800&fit=crop&q=80",
    aspectRatio: "portrait",
  },
  {
    id: 10,
    title: "极简建筑",
    category: "街拍",
    description: "干净的线条和几何",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=800&fit=crop&q=80",
    aspectRatio: "portrait",
  },
  {
    id: 11,
    title: "秋日落叶",
    category: "风光",
    description: "满地金黄的那个公园",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
    aspectRatio: "landscape",
  },
  {
    id: 12,
    title: "午后咖啡",
    category: "人像",
    description: "阳光下的侧脸",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop&q=80",
    aspectRatio: "portrait",
  },
  {
    id: 13,
    title: "夜市灯火",
    category: "街拍",
    description: "热闹的人间烟火气",
    image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=600&h=800&fit=crop&q=80",
    aspectRatio: "portrait",
  },
  {
    id: 14,
    title: "窗边阅读",
    category: "日常",
    description: "安静的周末下午",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=800&fit=crop&q=80",
    aspectRatio: "portrait",
  },
];

export const categories = ["全部", "人像", "风光", "日常", "街拍"] as const;
export type Category = (typeof categories)[number];
