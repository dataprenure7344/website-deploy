import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="space-y-4 text-gray-700">
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-[#028eb8]" />
            support@dataprenure.com
          </p>

          <p className="flex items-center gap-3">
            <FaPhone className="text-[#028eb8]" />
            +91 98765 43210
          </p>

          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#028eb8]" />
            Head Office: Bengaluru, India
          </p>

          <div>
            <h2 className="font-semibold mt-6 mb-2">Our Branches</h2>
            <ul className="list-disc ml-6 text-sm text-gray-600">
              <li>Mumbai</li>
              <li>Hyderabad</li>
              <li>Pune</li>
              <li>Delhi</li>
            </ul>
          </div>
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
