import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
      <footer className="flex items-center justify-between flex-wrap bg-white p-6 pb-9">
        <h3>Blogtopia 2024 ©</h3>
        <Link href="/privacy" className="hover:text-sky-700">
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
