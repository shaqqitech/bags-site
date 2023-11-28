import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { roboto_slab } from '../fonts';

const Footer = () => {
  return (
    <footer className=" py-8 border-t-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h2 className={`text-2xl font-bold tracking-wide text-center ${roboto_slab.className}`}>EXERY</h2>
          <p className="mt-2 text-sm">Your one-stop destination for everything.</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><Link href={"/"} className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href={"/"} className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href={"/"} className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href={"/"} className="text-gray-400 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">FAQs</h3>
            <ul className="text-sm">
              <li><Link href={'/'} className="text-gray-400 hover:text-white">Shipping & Delivery</Link></li>
              <li><Link href={'/'} className="text-gray-400 hover:text-white">Returns</Link></li>
              <li><Link href={'/'} className="text-gray-400 hover:text-white">Payment Options</Link></li>
              <li><Link href={'/'} className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-sm text-gray-400">
              1234 Example Street,<br />
              City, State ZIP<br />
              Country
            </p>
          </div>
          <div className='flex flex-col justify-start items-center space-y-3'>
            <p className='font-bold'>Our Social Links</p>
          <ul className="space-x-4 flex">
          <li>
            <Link href={"/"} className="text-gray-400 hover:text-white">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-gray-400 hover:text-white">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-gray-400 hover:text-white">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-gray-400 hover:text-white">
              <FaWhatsapp />
            </Link>
          </li>
        </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 py-4">
        <div className="container mx-auto text-sm text-center">
          &copy; {new Date().getFullYear()} EXERY. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
