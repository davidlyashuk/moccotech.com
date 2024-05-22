import FooterLink from './FooterLink';
import Logo from '../Logo';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import SocialIconsRow from './SocialIconsRow';

function FooterBottom() {
  let date = new Date().getFullYear();
  return (
    <div className="py-5 px-4 md:px-12 bg-gray-50">
      <div className="flex flex-col gap-4 sm:flex sm:flex-row sm:justify-between mb-5">
        <ul className="flex flex-col gap-2 sm:flex-row sm:gap-5 items-center text-gray-600">
          <li>
            <FooterLink href="/about">About us</FooterLink>
          </li>
          <li>
            <FooterLink href="/projects">Latest Projects</FooterLink>
          </li>
          <li>
            <FooterLink href="/services">Services</FooterLink>
          </li>
          <li>
            <FooterLink href="/contact">Contact us</FooterLink>
          </li>
          <li>
            <FooterLink href="/blog">Blog</FooterLink>
          </li>
        </ul>
        <SocialIconsRow />
      </div>
      <div className="font-body flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-between">
        <Logo />
        <p className="text-gray-600 justify-self-end">© Copyright {date}</p>
      </div>
    </div>
  );
}

export default FooterBottom;
