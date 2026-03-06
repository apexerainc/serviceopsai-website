import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card
      variant="elevated"
      padding="none"
      className="feature-card flex flex-col overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <Badge>{post.category}</Badge>
          <span className="text-xs text-text-secondary">{post.readTime}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-foreground leading-snug">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-text-secondary leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs text-text-secondary">{post.date}</span>
          <span className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover cursor-pointer">
            Read more <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </div>
      </div>
    </Card>
  );
}
