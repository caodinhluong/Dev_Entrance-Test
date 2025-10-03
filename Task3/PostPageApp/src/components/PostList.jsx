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

  // State cho search
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Fetch posts khi load trang hoặc đổi page
  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);

  // Khi list thay đổi (fetch xong), reset filteredPosts = list
  useEffect(() => {
    setFilteredPosts(list);
  }, [list]);

  // Hàm search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setFilteredPosts(
      list.filter((post) => post.title.toLowerCase().includes(query))
    );
  };

  if (loading) return <Loading />;
  if (error) return <ErrorBox message={error} />;

  // Pagination logic
  const start = (page - 1) * perPage;
  const currentPosts = filteredPosts.slice(start, start + perPage);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-900">📑 Latest Posts</h2>

      <input
        type="text"
        placeholder="🔍 Search posts..."
        onChange={handleSearch}
        className="w-full mb-6 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

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

      <Pagination />
    </div>
  );
}

export default PostList;
