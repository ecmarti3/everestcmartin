import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full z-40 py-4 px-7 flex justify-between items-center">
      <Link href="/" className="flex items-center">
        <img src="/whitePC.png" alt="Home" className="w-40 object-contain cursor-pointer hover:opacity-60 transition" />
      </Link>
      <nav className="flex gap-6 text-w font-geo">
        <button  href="#about" className="cursor-pointer hover:bg-b2/60 transition duration-300 px-3 py-1 rounded-md">About</button>
        <button  href="#projects" className="cursor-pointer hover:bg-b2/60 transition duration-300 px-3 py-1 rounded-md">Projects</button>
        <button  href="#models" className="cursor-pointer hover:bg-b2/60 transition duration-300 px-3 py-1 rounded-md">Models</button>
        <button  href="#resume" className="cursor-pointer hover:bg-b2/60 transition duration-300 px-3 py-1 rounded-md">Resume</button>
        <button  href="#contact" className="cursor-pointer hover:bg-b2/60 transition duration-300 px-3 py-1 rounded-md">Contact</button>
      </nav>
    </header>
  );
} 