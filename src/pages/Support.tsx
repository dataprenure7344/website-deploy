import { useState } from "react";
import {
  FaLifeRing,
  FaShieldAlt,
  FaFileContract,
  FaQuestionCircle,
} from "react-icons/fa";

interface FAQ {
  question: string;
  answer: string;
}

const Support: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How can I contact support?",
      answer: "You can contact us via email or phone available on the contact page.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we follow industry-standard security practices.",
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Yes, please contact our sales team for enterprise plans.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Support</h1>

      {/* Info Sections */}
      <div className="space-y-6 mb-10">
        <Info
          icon={<FaLifeRing />}
          title="Help Center"
          text="Get help with accounts, courses, and technical issues."
        />

        <Info
          icon={<FaShieldAlt />}
          title="Privacy Policy"
          text="Your data is protected and never shared without consent."
        />

        <Info
          icon={<FaFileContract />}
          title="Terms of Service"
          text="By using our platform, you agree to our terms and conditions."
        />
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <FaQuestionCircle className="text-[#028eb8]" />
          FAQs
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-3">
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="font-medium w-full text-left"
            >
              {faq.question}
            </button>

            {openIndex === index && (
              <p className="text-gray-600 text-sm mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

interface InfoProps {
  icon: JSX.Element;
  title: string;
  text: string;
}

const Info: React.FC<InfoProps> = ({ icon, title, text }) => (
  <div className="bg-white rounded-xl shadow p-6 flex gap-4">
    <div className="text-[#028eb8] text-2xl">{icon}</div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  </div>
);

export default Support;
