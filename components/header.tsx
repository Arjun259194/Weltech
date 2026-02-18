import Link from "next/link";

async function Header() {
  return (
    <header className="flex justify-between px-1 py-5 w-11/12 mx-auto">
      <span className="text-2xl font-semibold"><Link href="/">Weltech</Link></span>
      <nav>
        <ul className="flex space-x-10">
          <li className="hover:underline hover:underline-offset-2">
            <a href="/">Home</a>
          </li>
          <li className="hover:underline hover:underline-offset-2">
            <a href="/about">About</a>
          </li>
          <li className="hover:underline hover:underline-offset-2">
            <a href="/plan">Plan</a>
          </li>
          <li className="hover:underline hover:underline-offset-2">
            <a href="/admission">Admission</a>
          </li>
          <li className="hover:underline hover:underline-offset-2">
            <a href="/materiels">Materiels</a>
          </li>
          <li className="hover:underline hover:underline-offset-2">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
