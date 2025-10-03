import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchPostDetail } from "../features/postsSlice";
import Loading from "./Loading";
import ErrorBox from "./ErrorBox";

function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail, comments, loading, error } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostDetail(id));
  }, [dispatch, id]);

  if (loading) return <Loading />;
  if (error) return <ErrorBox message={error} />;

  if (!detail) return <p>No post found</p>;

  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6"
      >
        ⬅ Back to Posts
      </Link>

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">{detail.title}</h2>
        <p className="text-gray-700 leading-relaxed">{detail.body}</p>
      </div>

      <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">💬 Comments</h3>
      <div className="space-y-4">
        {comments.map((c) => (
          <div
            key={c.id}
            className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
          >
            <p className="font-medium text-gray-800">{c.name}</p>
            <p className="text-gray-600 text-sm">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostDetail;
