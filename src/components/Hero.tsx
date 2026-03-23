import Image from 'next/image';
const HeroSection = () => {
  return (
    <section className="bg-gray-200 h-screen">
      <div className="container mx-auto p-4 pt-6 pb-12 flex justify-center items-center">
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm Jaspreet Singh</h1>
          <p className="text-lg font-medium text-gray-600 mt-2">
            Machine Learning Engineer | Building intelligent systems that solve real-world problems
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded"
            type="button"
          >
            View My Projects
          </button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
