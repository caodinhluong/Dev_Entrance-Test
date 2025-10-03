import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../features/postsSlice";
import Loading from "./Loading";
import ErrorBox from "./ErrorBox";
import Pagination from "./Pagination";

function PostList() {
  const dispatch = useDispatch();
  const { list, page, perPage, loading, error } = useSelector(
    (state) => state.posts
  );

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);

  if (loading) return <Loading />;
  if (error) return <ErrorBox message={error} />;

  // lọc theo từ khoá
  const filtered = list.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const total = filtered.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const currentPosts = filtered.slice(start, start + perPage);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-900">📑 Latest Posts</h2>

      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search posts..."
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm 
                       hover:shadow-md hover:-translate-y-1 transition duration-200"
          >
            <Link
              to={`/posts/${post.id}`}
              className="text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              {post.title}
            </Link>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {post.body}
            </p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No posts found 🚫</p>
      )}

      {/* pagination */}
      {filtered.length > 0 && (
        <Pagination total={total} totalPages={totalPages} />
      )}
    </div>
  );
}

export default PostList;
