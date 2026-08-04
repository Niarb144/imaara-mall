import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
    return(
        <div className="pt-10 pb-10 text-center flex flex-col items-center justify-center bg-white">
            <Link href="/explore" className="mt-6 bg-white border border-black px-6 py-3 text-xs tracking-[0.15em] uppercase text-neutral-900 transition-colors hover:bg-brand-lime cursor-pointer">
                <motion.span
                className="inline-block"
                variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Explore the Mall
              </motion.span>
            </Link>
        </div>
    );
}