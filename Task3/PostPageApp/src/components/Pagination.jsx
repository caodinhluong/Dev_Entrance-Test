import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/postsSlice";

function Pagination({ total, totalPages }) {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.posts);

  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      dispatch(fetchPosts(newPage));
    }
  };

  return (
    <div className="flex justify-center items-center space-x-3 mt-8">
      <button
        className="px-4 py-2 rounded-lg border bg-white shadow-sm 
                   hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => changePage(page - 1)}
        disabled={page === 1}
      >
        ⬅ Prev
      </button>

      <span className="px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded-lg">
        Page {page} / {totalPages}
      </span>

      <button
        className="px-4 py-2 rounded-lg border bg-white shadow-sm 
                   hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => changePage(page + 1)}
        disabled={page === totalPages}
      >
        Next ➡
      </button>
    </div>
  );
}

export default Pagination;
