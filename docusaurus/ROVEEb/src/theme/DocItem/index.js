import React from 'react';
import DocItem from '@theme-original/DocItem';
import Giscus from "@giscus/react";

export default function DocItemWrapper(props) {
  const { content: DocContent } = props;
  const { frontMatter } = DocContent;
  const { comments } = frontMatter;

  return (
    <>
      <DocItem {...props} />
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
