"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, MapPin, CheckCircle2 } from "lucide-react";
import { MallService } from "@/data/data";

interface Props {
  service: MallService | null;
  onClose: () => void;
}

export default function ServiceModal({
  service,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Backdrop */}

          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal */}

          <div className="fixed inset-0 z-[60] overflow-y-auto">
            <div className="flex min-h-full items-center justify-center px-6 py-20">

              <motion.div
                layoutId={`service-card-${service.id}`}
                onClick={(e) => e.stopPropagation()}
                className="
                  relative
                  w-full
                  max-w-4xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-brand-dark
                "
              >
                {/* Image */}
                <motion.div
                  layoutId={`service-image-${service.id}`}
                  className="relative aspect-[16/8]"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                </motion.div>

                {/* Close */}

                <button
                  onClick={onClose}
                  className="
                    absolute
                    right-6
                    top-6
                    z-20
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    border
                    border-white/20
                    bg-black/30
                    backdrop-blur
                    transition
                    hover:border-brand-gold
                    hover:text-brand-gold
                  "
                >
                  <X size={22} />
                </button>

                {/* Content */}

                <div className="space-y-10 p-10 md:p-14">

                  <div>

                    <motion.h2
                      layoutId={`service-title-${service.id}`}
                      className="font-display text-5xl text-brand-sand"
                    >
                      {service.title}
                    </motion.h2>

                    <p className="mt-6 max-w-3xl leading-8 text-white/70">
                      {service.details}
                    </p>

                  </div>

                  {/* Location */}

                  <div className="border-t border-white/10 pt-8">

                    <div className="flex items-center gap-3 text-brand-gold">

                      <MapPin size={20} />

                      <span className="uppercase tracking-[0.2em] text-xs">
                        Location
                      </span>

                    </div>

                    <p className="mt-3 text-lg">
                      {service.location}
                    </p>

                  </div>

                  {/* Instructions */}

                  {service.instructions?.length ? (

                    <div className="border-t border-white/10 pt-8">

                      <h3 className="mb-6 text-sm uppercase tracking-[0.2em] text-white/50">
                        Information
                      </h3>

                      <ul className="space-y-4">

                        {service.instructions.map((instruction) => (

                          <li
                            key={instruction}
                            className="flex items-start gap-4"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-1 shrink-0 text-brand-gold"
                            />

                            <span className="leading-7 text-white/70">
                              {instruction}
                            </span>

                          </li>

                        ))}

                      </ul>

                    </div>

                  ) : null}

                </div>

              </motion.div>

            </div>

          </div>
        </>
      )}
    </AnimatePresence>
  );
}