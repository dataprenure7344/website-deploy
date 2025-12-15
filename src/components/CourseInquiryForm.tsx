import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export function CourseInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: 'Data Analytics with AI',
    experience: 'beginner',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const courses = [
    'Data Analytics with AI',
    'Business Analytics with AI',
    'Data Science with AIML',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          course: 'Data Analytics with AI',
          experience: 'beginner',
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#03a9dc] to-[#027fa4] flex items-center justify-center mx-auto mb-6 animate-scale-in">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Application Submitted!
        </h3>
        <p className="text-gray-600 mb-4">
          Thank you for your interest in DataPrenure. Our team will contact you within 24 hours.
        </p>
        <p className="text-sm text-gray-500">
          Watch your email for enrollment details and special offers.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-sm">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9dc] focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-sm">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9dc] focus:border-transparent outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-sm">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9dc] focus:border-transparent outline-none transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2 text-sm">
            Experience Level *
          </label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9dc] focus:border-transparent outline-none transition-all"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2 text-sm">
          Interested Course *
        </label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9dc] focus:border-transparent outline-none transition-all"
        >
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-[#03a9dc] bg-opacity-10 border border-[#03a9dc] rounded-lg p-4">
        <p className="text-sm text-gray-700">
          By submitting this form, you agree to receive course information and special offers from DataPrenure.
        </p>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-[#03a9dc] via-[#028eb8] to-[#027fa4] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
      >
        {isLoading ? 'Submitting...' : 'Enroll Now'}
      </button>
    </form>
  );
}
