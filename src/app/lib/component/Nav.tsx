import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 pb-9">
        <Link href="/" className="font-bold text-5xl">
          Blogtopia.
        </Link>
        <p className="text-gray-500 pt-3">
          your go to place for the most interesting blogs sourced from around
          the world
        </p>
      </nav>
    </div>
  );
};

export default Nav;
