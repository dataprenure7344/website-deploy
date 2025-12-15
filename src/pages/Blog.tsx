import { FaDatabase, FaChartLine, FaServer } from "react-icons/fa";
import { ReactElement } from "react";

interface BlogItem {
  title: string;
  description: string;
  icon: ReactElement;
}

const Blog: React.FC = () => {
  const blogs: BlogItem[] = [
    {
      title: "Introduction to Data Analytics",
      description:
        "Learn how data analytics helps businesses make informed decisions.",
      icon: <FaChartLine size={30} />,
    },
    {
      title: "Big Data vs Data Science",
      description:
        "Understand the differences and real-world applications.",
      icon: <FaDatabase size={30} />,
    },
    {
      title: "Careers in Data Engineering",
      description:
        "Explore tools, roles, and career opportunities in data engineering.",
      icon: <FaServer size={30} />,
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Data Insights Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 shadow hover:shadow-xl transition"
          >
            <div className="text-blue-600 mb-4">{blog.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
