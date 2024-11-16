"use client";
import { useTina } from "tinacms/dist/react";
import { PostQuery } from "@/base/tina/__generated__/types";
import Markdown from "@/components/render-markdown";
import Image from "next/image";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PostQuery;
}

export default function Post(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <>
      <h1 className="text-3xl font-bold">{data.post.title}</h1>
      {data.post.image?.length ? (
        <div className="relative w-full max-w-2xl h-96 overflow-hidden rounded-3xl">
          <Image
            src={data.post.image}
            alt="post-image"
            fill
            className="object-cover"
          />
        </div>
      ) : null}
      <Markdown content={data.post.content} />
    </>
  );
}
