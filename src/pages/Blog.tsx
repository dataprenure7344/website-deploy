import { TrendingUp, Database, Zap, Code2, Brain, Lightbulb, ChevronRight, Calendar, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  date: string;
  author: string;
  readTime: number;
  image: string;
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Introduction to Data Analytics",
      description:
        "Learn how data analytics helps businesses make informed decisions and unlock hidden insights from raw data.",
      excerpt: "Discover the fundamentals of data analytics and how it transforms business strategy...",
      icon: TrendingUp,
      category: "Analytics",
      date: "Dec 15, 2024",
      author: "Emily Watson",
      readTime: 8,
      image: "https://images.pexels.com/photos/3621845/pexels-photo-3621845.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Big Data vs Data Science",
      description:
        "Understand the differences between big data and data science, and how they work together to drive innovation.",
      excerpt: "Explore the distinct roles and synergies between big data infrastructure and data science...",
      icon: Database,
      category: "Data Science",
      date: "Dec 10, 2024",
      author: "Dr. Rajesh Kumar",
      readTime: 10,
      image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      description:
        "A comprehensive guide to machine learning concepts and how to implement them in real-world applications.",
      excerpt: "Master the basics of machine learning algorithms and their practical applications...",
      icon: Brain,
      category: "ML",
      date: "Dec 5, 2024",
      author: "Michael Chang",
      readTime: 12,
      image: "https://images.pexels.com/photos/8566939/pexels-photo-8566939.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Python for Data Science",
      description:
        "Essential Python libraries and techniques every data scientist should know for data manipulation and analysis.",
      excerpt: "Learn the top Python tools and libraries that power modern data science workflows...",
      icon: Code2,
      category: "Programming",
      date: "Nov 28, 2024",
      author: "Emily Watson",
      readTime: 11,
      image: "https://images.pexels.com/photos/3853817/pexels-photo-3853817.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Data Visualization Best Practices",
      description:
        "Learn how to create compelling data visualizations that tell stories and drive decision-making.",
      excerpt: "Master the art of presenting data in ways that engage and inform your audience...",
      icon: Zap,
      category: "Visualization",
      date: "Nov 20, 2024",
      author: "Dr. Rajesh Kumar",
      readTime: 9,
      image: "https://images.pexels.com/photos/3682670/pexels-photo-3682670.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      title: "Career Growth in Data Science",
      description:
        "Navigate your data science career path with insights on in-demand skills and industry trends for 2025.",
      excerpt: "Discover the best strategies for advancing your data science career and landing top positions...",
      icon: Lightbulb,
      category: "Career",
      date: "Nov 15, 2024",
      author: "Michael Chang",
      readTime: 7,
      image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 bg-gradient-to-br from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <Brain className="w-32 h-32" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Zap className="w-32 h-32" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Data Insights Blog</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Explore industry trends, learning strategies, and expert insights to accelerate your data science journey
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const Icon = post.icon;
              return (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#03a9dc] to-[#027fa4]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#027fa4]/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#028eb8] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Zap className="w-4 h-4" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#03a9dc] to-[#027fa4] flex items-center justify-center text-white text-xs font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-xs text-gray-600">{post.author}</span>
                      </div>
                      <button className="group/btn inline-flex items-center space-x-1 text-[#028eb8] font-semibold hover:text-[#03a9dc] transition-colors">
                        <span>Read</span>
                        <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f4f4f4] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Get weekly insights on data science trends, learning resources, and career tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#028eb8] transition-all"
            />
            <button className="bg-gradient-to-r from-[#03a9dc] to-[#027fa4] text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
