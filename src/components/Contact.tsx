import { useState } from 'react';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to API here
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white py-12">
      <div className="container mx-auto p-4 pt-6 pb-12 flex flex-col items-center">
        <h2 className="text-lg font-medium text-gray-600 mb-2">Get in Touch</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full p-2 pl-12 border-b-2 border-gray-400"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-2 pl-12 border-b-2 border-gray-400"
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={4}
            cols={20}
            className="w-full p-2 pl-12 border-b-2 border-gray-400"
          />
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
