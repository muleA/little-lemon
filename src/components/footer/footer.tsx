import { contacts } from "@libs/utils/contacts";
import Socials from "@libs/utils/social";
import { Key } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#495E57]">
      <footer className="md:mx-36 mx-2 dark:bg-gray-900 text-white">
        <div className="w-full max-w-screen-lg p-4 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  className="col-span-1 h-24 w-24"
                  src={"./assets/logo-white.png"}
                  alt="Little Lemon Logo"
                  loading="lazy"
                />
              </Link>
            </div>

            <div className="col-span-1">
              <p className="text-lg font-semibold mb-4">Contact us</p>
              <address>
                {contacts.map((contact) => (
                  <p
                    key={contact.icon as unknown as Key | null | undefined}
                    className="mb-2 flex items-center"
                  >
                    {contact.icon}{" "}
                    <span className="ml-2" aria-label={contact.info}>
                      {contact.info}
                    </span>
                  </p>
                ))}
              </address>
            </div>
            <div>
              <h2 className="md:mb-6 mb-2 underline text-lg font-semibold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#/" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link
                to="/"
                className="hover:underline"
                aria-label="Little Lemon Homepage"
              >
                Little Lemon™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 text-white sm:justify-center sm:mt-0">
              {Socials.map((social) => (
                <a
                  key={social.name}
                  href={`https://www.${social.name}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-yellow-600"
                  aria-label={`Visit us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
