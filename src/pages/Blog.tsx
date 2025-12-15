import { FaChartLine, FaDatabase, FaServer } from "react-icons/fa";

const Blog: React.FC = () => {
  const blogs = [
    {
      title: "Introduction to Data Analytics",
      description:
        "Data analytics helps organizations make data-driven decisions by identifying patterns and insights.",
      icon: <FaChartLine size={28} />,
    },
    {
      title: "Big Data vs Data Science",
      description:
        "Big Data focuses on data handling while Data Science focuses on extracting meaning from data.",
      icon: <FaDatabase size={28} />,
    },
    {
      title: "Career Paths in Data Engineering",
      description:
        "Data engineers build pipelines and infrastructure that power modern data platforms.",
      icon: <FaServer size={28} />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Blog</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="text-[#028eb8] mb-4">{blog.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 text-sm">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
