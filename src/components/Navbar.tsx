import Link from 'next/link';
import { useRouter } from 'next/router';
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="sticky top-0 z-10 bg-gray-900 text-white px-4 py-2">
      <div className="flex justify-between items-center">
        <Link href="/about" passHref>
          <a>
            <img
              src="/icon.png"
              alt="Your Name"
              className="w-8 h-8 rounded-full"
            />
          </a>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" passHref>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" passHref>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/skills" passHref>
              Skills
            </Link>
          </li>
          <li>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Contact & Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
