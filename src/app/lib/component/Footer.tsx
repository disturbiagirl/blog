import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto md:w-10/12 lg:w-9/12">
      <footer className="flex flex-wrap items-center justify-between p-6 bg-white pb-9">
        <h3>Blogtopia 2024 ©</h3>
        <Link href="/privacy" className="hover:text-sky-700">
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
