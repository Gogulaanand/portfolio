import { ArrowRightIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeMenu() {
  return (
    <div className="flex w-full justify-center gap-4 my-48">
      <Link href="https://gogulaanand-blog.vercel.app" passHref>
        <motion.div className="mr-2 bg-gradient-to-tr w-1/3 h-96 rounded-large from-purple-400 via-pink-500 to-red-500 relative flex cursor-pointer">
          <motion.div
            className="absolute bottom-0 left-0 pl-12 pb-12 text-white text-6xl font-bold flex"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              target="_blank"
              rel="noopener"
              href="https://gogulaanand-blog.vercel.app"
            >
              Blogs
            </a>
            <motion.div>
              <ArrowRightIcon className="w-16 h-16 -rotate-45" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Link>
      <motion.div className="mr-2 bg-gradient-to-tr w-1/3 h-96 rounded-large from-green-400 to-blue-500 relative flex cursor-pointer">
        <motion.div
          className="absolute bottom-0 left-0 pl-12 pb-12 text-white text-6xl font-bold flex"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Projects
          <motion.div>
            <ArrowRightIcon className="w-16 h-16 -rotate-45" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
