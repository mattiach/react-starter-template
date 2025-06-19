import { useQuery } from '@tanstack/react-query';
import type { Post } from '@/interfaces/example';
import { fetchPosts } from '@/functions/example';

export default function MyComponent() {
  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className="max-w-4xl p-6 mx-auto">
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900">
              List of Posts
            </h1>
            <p className="py-2 text-lg text-right text-gray-500">
              Total Posts: <span className="font-bold text-gray-700">{data?.length}</span>
            </p>
          </div>

          <div className="grid gap-6">
            {data?.slice(0, 10).map((post) => (
              <div
                key={post.id}
                className="p-6 transition bg-white border border-gray-200 shadow-md rounded-2xl hover:shadow-lg"
              >
                <h2 className="mb-2 text-xl font-semibold text-gray-800">{post.title}</h2>
                <p className="text-gray-600">{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
