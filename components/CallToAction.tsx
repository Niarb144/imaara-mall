"use client";

import Link from "next/link";

export default function CallToAction() {
    return(
        <div className="pt-10 pb-10 text-center flex flex-col items-center justify-center bg-white">
            <Link href="/stores" className="mt-6 bg-white border border-black px-6 py-3 text-xs tracking-[0.15em] uppercase text-neutral-900 transition-colors hover:bg-brand-lime cursor-pointer">
            
                Explore the Mall
              
            </Link>
        </div>
    );
}