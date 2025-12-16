import { useState } from "react";
import { LifeBuoy, Shield, FileText, HelpCircle, ChevronDown, Zap, MessageSquare, BookOpen, AlertCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

interface SectionProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  link?: string;
}

const Support: React.FC = () => {
  const faqs: FAQ[] = [
    {
      category: "Account & Access",
      question: "How do I reset my password?",
      answer: "Click on the 'Forgot Password' link on the login page. Enter your email address and follow the instructions sent to your inbox to reset your password securely.",
    },
    {
      category: "Account & Access",
      question: "Can I change my email address?",
      answer: "Yes, you can update your email address from your account settings. Go to Settings > Account > Email and follow the verification process.",
    },
    {
      category: "Courses & Learning",
      question: "Can I download course materials?",
      answer: "Most course materials are available for download. You can access downloadable resources within each course. Premium courses offer full downloadable content.",
    },
    {
      category: "Courses & Learning",
      question: "Is there a certificate upon completion?",
      answer: "Yes! Upon completing a course and passing the final assessment, you'll receive a verifiable certificate of completion that you can share on your resume.",
    },
    {
      category: "Billing & Plans",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, digital wallets, and bank transfers. All transactions are secure and encrypted.",
    },
    {
      category: "Billing & Plans",
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with your purchase. No questions asked.",
    },
    {
      category: "Technical Issues",
      question: "What browsers do you support?",
      answer: "DataPrenure works best on Chrome, Firefox, Safari, and Edge. Please ensure your browser is up to date for the best experience.",
    },
    {
      category: "Technical Issues",
      question: "Is there a mobile app?",
      answer: "Yes, DataPrenure is fully responsive on mobile devices. You can also access courses from our iOS and Android apps.",
    },
    {
      category: "Data & Privacy",
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption and security practices. Your data is protected with HTTPS and regular security audits.",
    },
    {
      category: "Data & Privacy",
      question: "How do you use my data?",
      answer: "We only use your data to improve your learning experience and provide better recommendations. We never sell your data to third parties.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));
  const filteredFaqs = selectedCategory
    ? faqs.filter((faq) => faq.category === selectedCategory)
    : faqs;

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 bg-gradient-to-br from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <LifeBuoy className="w-32 h-32" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Zap className="w-32 h-32" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Support & Help Center</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Find answers to common questions and get help from our support team
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <SectionCard
              icon={LifeBuoy}
              title="Help Center"
              text="Browse our comprehensive guides and tutorials"
            />
            <SectionCard
              icon={Shield}
              title="Privacy Policy"
              text="Learn how we protect your data and privacy"
            />
            <SectionCard
              icon={FileText}
              title="Terms of Service"
              text="Understand our terms and conditions"
            />
            <SectionCard
              icon={MessageSquare}
              title="Contact Support"
              text="Reach out to our support team anytime"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f4f4f4] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find quick answers to the most common questions
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === null
                  ? "bg-gradient-to-r from-[#03a9dc] to-[#027fa4] text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#028eb8]"
              }`}
            >
              All Questions
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#03a9dc] to-[#027fa4] text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#028eb8]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left px-6 py-5 flex items-start justify-between hover:bg-[#f9f9f9] transition-colors"
                >
                  <div className="flex items-start space-x-4 flex-grow">
                    <HelpCircle className="w-6 h-6 text-[#028eb8] flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-[#028eb8] flex-shrink-0 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-gradient-to-r from-[#03a9dc]/5 to-[#027fa4]/5 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Can't find what you're looking for?</h2>
              <p className="text-xl opacity-90 mb-8">
                Our support team is here to help you 24/7. Reach out and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#028eb8] px-8 py-3 rounded-lg font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Contact Support
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
                  Schedule a Call
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-sm opacity-90">Available round the clock</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">&lt;1 hr</div>
                <p className="text-sm opacity-90">Average response time</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="text-sm opacity-90">Customer satisfaction</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">5K+</div>
                <p className="text-sm opacity-90">Issues resolved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const SectionCard: React.FC<SectionProps> = ({ icon: Icon, title, text }) => {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-[#03a9dc]">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#03a9dc] to-[#027fa4] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default Support;
