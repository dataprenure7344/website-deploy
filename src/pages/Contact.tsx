import { Mail, Phone, MapPin, Send, Zap, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@dataprenure.com',
      description: 'We usually respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98765 43210',
      description: 'Available Monday to Friday, 9 AM - 6 PM IST',
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      value: 'Bengaluru, India',
      description: 'Visit us to see our team and facilities',
    },
  ];

  const offices = [
    { city: 'Bengaluru', country: 'India', address: 'Tech Park, Indiranagar' },
    { city: 'Mumbai', country: 'India', address: 'Business Bay, Bandra' },
    { city: 'Hyderabad', country: 'India', address: 'HITEC City, Madhapur' },
    { city: 'Pune', country: 'India', address: 'IT Park, Hinjewadi' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 bg-gradient-to-br from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <MessageCircle className="w-32 h-32" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Zap className="w-32 h-32" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-[#03a9dc]"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#03a9dc] to-[#027fa4] flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-[#028eb8] font-semibold mb-2">{method.value}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#028eb8] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#028eb8] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Course Inquiry"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#028eb8] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#028eb8] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#03a9dc] to-[#027fa4] text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-[#f4f4f4] to-white rounded-2xl p-6 border-l-4 border-[#03a9dc] hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{office.city}</h3>
                    <p className="text-[#028eb8] font-semibold mb-2">{office.country}</p>
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#03a9dc]/10 to-[#027fa4]/10 rounded-2xl border border-[#03a9dc]/20">
                <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM IST
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM IST
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-12">
            Check out our support page for more common questions and answers
          </p>
          <button className="bg-white text-[#028eb8] px-8 py-3 rounded-lg font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
            Go to Support
          </button>
        </div>
      </section>
    </main>
  );
};

export default Contact;
