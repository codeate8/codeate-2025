import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Coming Soon 🚧
      </h1>


      <img
        src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
        alt="Under Construction"
        className="w-64 md:w-80 mb-6"
      />

      
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition">
        Go Back Home
      </Link>
    </div>
  );
}
