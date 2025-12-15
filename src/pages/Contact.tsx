import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            support@datacorp.com
          </p>

          <p className="flex items-center gap-3">
            <FaPhone className="text-blue-600" />
            +91 98765 43210
          </p>

          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-600" />
            Head Office: Bengaluru, India
          </p>

          <h2 className="text-xl font-semibold mt-4">Branches</h2>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Mumbai</li>
            <li>Hyderabad</li>
            <li>Pune</li>
            <li>Delhi</li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="w-full h-[350px] rounded-lg overflow-hidden shadow">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Bengaluru,India&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
