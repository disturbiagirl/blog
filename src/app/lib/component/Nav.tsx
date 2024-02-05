import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-11/12 mx-auto md:w-10/12 lg:w-9/12">
      <nav className="flex flex-wrap items-center justify-between p-6 bg-white pb-9">
        <Link href="/" className="text-5xl font-bold">
          Blogtopia.
        </Link>
        <p className="pt-3 text-gray-500">
          your go to place for the most interesting blogs sourced from around
          the world
        </p>
      </nav>
    </div>
  );
};

export default Nav;
