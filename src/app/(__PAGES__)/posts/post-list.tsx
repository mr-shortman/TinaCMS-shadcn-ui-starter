import Image from "next/image";
import Link from "next/link";

export default function PostList(props) {
  return (
    <>
      <h1 className="font-bold text-3xl">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {props.data.postConnection.edges.map((post) => (
          <Link key={post.node.id} href={`/posts/${post.node._sys.filename}`}>
            <div className="space-y-2 border rounded-xl overflow-hidden group">
              <div className="w-full h-48 relative bg-muted overflow-hidden">
                {post.node.image?.length ? (
                  <Image
                    alt="post-image"
                    src={post.node.image}
                    fill
                    className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-all duration-300"
                  />
                ) : null}
              </div>
              <div className="p-4 pt-2">
                <span className="text-lg font-medium">
                  {post.node._sys.filename}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
