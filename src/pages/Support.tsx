import { useState } from "react";
import {
  FaQuestionCircle,
  FaShieldAlt,
  FaFileContract,
  FaLifeRing,
} from "react-icons/fa";
import { ReactNode } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface SectionProps {
  icon: ReactNode;
  title: string;
  text: string;
}

const Support: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "How can I contact support?",
      answer: "You can contact us via email or phone listed on the contact page.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard security practices to protect your data.",
    },
    {
      question: "Do you provide enterprise solutions?",
      answer:
        "Yes, please reach out to our sales team for enterprise plans.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Support</h1>

      <div className="space-y-6">
        <Section
          icon={<FaLifeRing />}
          title="Help Center"
          text="Get assistance for technical issues, accounts, and services."
        />

        <Section
          icon={<FaShieldAlt />}
          title="Privacy Policy"
          text="Your data is protected and never shared without consent."
        />

        <Section
          icon={<FaFileContract />}
          title="Terms of Service"
          text="Using our platform means you agree to our terms."
        />

        {/* FAQs */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <FaQuestionCircle className="text-blue-600" />
            FAQs
          </h2>

          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-3">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left font-medium"
              >
                {faq.question}
              </button>

              {openIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<SectionProps> = ({ icon, title, text }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex gap-4 items-start">
      <div className="text-blue-600 text-2xl">{icon}</div>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Support;
