import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BlogCard } from "@/components/blog/blog-card";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tips, and stories about automating service business operations with AI.",
};

export default function BlogPage() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Latest from the Blog"
          subtitle="Insights and strategies to help you run a smarter service business."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 80}>
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
