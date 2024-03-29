import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Button from "@/components/mdx/Button";
import remarkGfm from "remark-gfm";
import YouTube from "@/components/mdx/YouTube";
import rehypeHighlight from "rehype-highlight";
import "@/styles/highlight-js/github-dark.css";
import Table from "@/components/mdx/Table";

const options: any = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto max-w-screen-lg">
      <h1>{props.frontMatter.title}</h1>

      <MDXRemote
        source={props.content}
        components={{ Button, YouTube, Table }}
        options={options}
      />
    </article>
  );
}

export async function generateMetadata({ params }: any) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}
