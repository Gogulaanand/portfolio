import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between items-center w-full absolute inset-x-0 top-0 mt-4 fade-in-top">
      <h1 className="ml-16 font-semibold">Gogulaanand R</h1>
      <ul className="flex gap-8 mr-16 items-center">
        <Link href="/about" passHref>
          <li className="font-semibold cursor-pointer">About</li>
        </Link>
        <Link href="/#contact" passHref>
          <li className="font-semibold cursor-pointer">Contact</li>
        </Link>
        <li className="align-center px-3 py-2 bg-black text-white rounded-lg font-semibold cursor-pointer">
          View Projects
        </li>
      </ul>
    </div>
  );
}
