import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from '@docusaurus/theme-common/internal'
import Giscus from "@giscus/react";

export default function BlogPostItemWrapper(props) {
  const { metadata } = useBlogPost();
  const { frontMatter } = metadata;
  const { comments  } = frontMatter;

  return (
    <>
      <BlogPostItem {...props} />
      {comments && (
      <Giscus
        id="comments"
        repo="Roveeb/novo-site"
        repoId="R_kgDOHI-Q9A"
        category="Site"
        categoryId="DIC_kwDOHI-Q9M4CRA1Q"
        mapping="pathname"
        term="Comments"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="top"
        theme="dark_dimmed"
        lang="pt"
        loading="lazy"
      />
      )}
    </>
  );
}
