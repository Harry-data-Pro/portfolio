import Image from 'next/image';
const AboutMe = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto p-4 pt-6 pb-12 flex flex-col items-center">
        <h2 className="text-lg font-medium text-gray-600 mb-2">About Me</h2>
        <p className="text-lg font-medium text-gray-600">
          As a passionate Machine Learning Engineer, I've always been fascinated by the potential of AI to
transform industries and revolutionize the way we live.
        </p>
        <p className="text-lg font-medium text-gray-600 mb-4">
          With a strong background in computer science and mathematics, I've spent years honing my skills in ML
and data science. My current focus is on developing intelligent systems that solve real-world problems.
        </p>
      </div>
    </section>
  );
};
export default AboutMe;
