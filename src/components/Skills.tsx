import { useState } from 'react';
const Skills = () => {
  const [skills, setSkills] = useState([
    { name: 'PyTorch', badgeClass: 'bg-orange-500' },
    { name: 'TensorFlow', badgeClass: 'bg-green-500' },
    { name: 'Scikit-learn', badgeClass: 'bg-blue-500' },
    { name: 'Hugging Face', badgeClass: 'bg-yellow-500' },
  ]);
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto p-4 pt-6 pb-12 flex flex-col items-center">
        <h2 className="text-lg font-medium text-gray-600 mb-2">Skills</h2>
        <ul className="flex space-x-4">
          {skills.map((skill, index) => (
            <li key={index}>
              <div
                className={`flex justify-between items-center ${skill.badgeClass}`}
              >
                <span>{skill.name}</span>
                <div className="rounded-full bg-gray-200 shadow-md p-2">
                  {/* Skill badge */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Skills;
