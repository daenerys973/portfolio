import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  var year = date.getFullYear();
  return (
    <section className="animate-fade-up">
      <div className="py-3 text-center">
        <div className="flex justify-center space-x-2  pt-4 text-sm">
          <p className="text-gray-500">Made with</p>

          <div className="flex space-x-2">
            <AiFillHeart aria-label="heart" className="text-xl text-red-400" />
            <p className="text-gray-500">
              <Link href="https://nextjs.org/" target="_blank">
                in El Salvador.
              </Link>
            </p>
          </div>
        </div>

        <div className="pt-3">
          <p className="text-xs  text-gray-500">
            Decodehud | Copyright {year} All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
