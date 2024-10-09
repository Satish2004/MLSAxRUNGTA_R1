import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const TeamCard = () => {
  return (
    <div>
      {/* Card Section */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-5"
      >
        {/* Card 1 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Sayan Karmakar.jpg"
              alt="member1"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Sayan Karmakar</h2>
            <p className="text-gray-300">MLSA Campus Ambassador</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/sayan-karmakar-01239a242/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com/Sayan-dev731"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/code_it884/
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Shubham.jpg"
              alt="member2"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Shubham Kumar</h2>
            <p className="text-gray-300">Tech Lead </p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/shubham-yadav-07199a24b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>
              <a
                href="https://github.com/Shubham66020"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/ya_shuw_?igsh=N3JlejFtZGRod3p2
/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Satish Chandra.jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Satish Chandra</h2>
            <p className="text-gray-300">Web Developer</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/satish-chandra-9844b5250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com/Satish2004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/i_am_sa30_?igsh=bXAyNTR6aDN4ZzFq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card extra Tech */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Md Shahanwaz.jpg"
              alt="member1"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Md Shahanwaz</h2>
            <p className="text-gray-300">Tech Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/md-shahanwaz-/
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com/Shahanwaz0011
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/aviothic_sam?igsh=cjgxaG9qeDUzMWR5

"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Kamalneet Kaur.jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Kamalneet Kaur</h2>
            <p className="text-gray-300">Tech Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://in.linkedin.com/in/kamalneet-kaur-7015a3320
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com/kamalneetkaur666
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/rapper_mcq/profilecard/?igsh=emJtdGxtM3VhMWoz
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Ankur kumar.jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Ankur Kumar</h2>
            <p className="text-gray-300">Graphics and Designing</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/ankur-kumar-11377430b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com/Ankur72kumar
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/a.n.k.u.r___25?igsh=MWZzdWx3a25lNjFpNA==
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/manshi verma.jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Manshi Verma</h2>
            <p className="text-gray-300">Outreach and Connection Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="Yes	www.linkedin.com/in/manshi-verma
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com/manshiiv
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/manshiiiv/
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src=""
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Tisha Jeswani</h2>
            <p className="text-gray-300">Outreach and Connection Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/tisha-jeswani-551384328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/tisha-jeswani-551384328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Ishwara Sinha (2).jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Ishwara Sinha</h2>
            <p className="text-gray-300">Outreach and Connection Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/ishwara-sinha-668693280/
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/ishwara-sinha-668693280/
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/ishwarasinha
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 9 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Anand Mohan.jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Anand Mohan</h2>
            <p className="text-gray-300">Social Media Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/anand-mohan-299638294/
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com/anand-mohan-code
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/anannd_mohan/
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 10 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Bhavya Bhavya Priyadarshani.jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Bhavya Priyadarshani</h2>
            <p className="text-gray-300">Social Media Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/bhavya-priyadarshani-ab127928a
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com/05bhavs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/its_.bhavs/
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 11 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src=""
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Rudra Prakash Sahu</h2>
            <p className="text-gray-300">Social Media Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/rudra-prakash-sahu-981b90315/
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/rudra_prakash005/profilecard/?igsh=eTR4aXkxc3VpeWVz
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 12 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Umang Kumar bhasin.jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Umang Kumar bhasin</h2>
            <p className="text-gray-300">Social Media Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 13 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Niraj Kumar Sharma (1).jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Niraj Kumar Sharma</h2>
            <p className="text-gray-300">Social Media Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/niraj-kumar-sharma-3770b1213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com/nikush1
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/nirajsharma_08?igsh=MXRnM2dqa3I5bmpjeQ==
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 14 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Raju kumar.png"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Raju Kumar</h2>
            <p className="text-gray-300">Logistics and Planning Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/raju-kumar8863
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com/rajukumar654
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/rajureflects/profilecard/?igsh=bDdxaTJyZG55N29n
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 15 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Samriddhi Chandak.jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Samriddhi Chandak</h2>
            <p className="text-gray-300">Logistics and Planning Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/samriddhi-chandak-19b40430b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="samriddhiie._

"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 16 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Pranav Raj.jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Pranav Raj</h2>
            <p className="text-gray-300">Logistics and Planning Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/pranav-raj-77121a251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com/Pranav092
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/pranavraj556/profilecard/?igsh=MXBsbXZ5ZzVmY3J4Zw==
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 17 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Avinash Kumar Bareth (2).jpg"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Avinash Kumar Bareth</h2>
            <p className="text-gray-300">Logistics and Planning Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/avinash-bareth-02a836329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://github.com/hackavinash
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/_avinash_748?igsh=MXZwZ2liN2c5Zmg1cg==
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Card 18 */}
        <div className="rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <div className="w-40 h-40">
            <img
              src="/Anushriya sahu (1).JPG"
              alt="member3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-xl font-semibold mb-2">Anushriya sahu</h2>
            <p className="text-gray-300">Logistics and Planning Team</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/anushriya-sahu-51b774331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-zinc-300 text-2xl"
                />
              </a>

              <a
                href="https://www.instagram.com/_anushriiiya?igsh=MW5tbjA4dWNseHlwMA==
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-zinc-300 text-2xl"
                />
              </a>
            </div>
          </div>
        </div>

       
      </motion.div>
    </div>
  );
};

export default TeamCard;
