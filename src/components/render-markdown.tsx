import React from "react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

function Markdown({
  content,
}: {
  content: TinaMarkdownContent | TinaMarkdownContent[];
}) {
  return (
    <div className="w-full h-full tina-markdown">
      <TinaMarkdown content={content} />
    </div>
  );
}

export default Markdown;
