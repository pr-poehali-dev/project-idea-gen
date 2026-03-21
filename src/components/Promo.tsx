import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/8b055338-b3bc-43b3-bc49-a923aebdd4c3/files/aef207d7-36b1-4454-ab83-12fcc61ec075.jpg"
            alt="Геометрические узоры юрты"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-amber-300 uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Математика традиций
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="absolute bottom-12 left-6 right-6 md:right-auto z-10 max-w-2xl"
      >
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug font-light">
          Казахская юрта — это живой учебник геометрии. Каждый изгиб, каждый узор и каждая опора
          следуют точным математическим законам.
        </p>
        <div className="mt-8 flex gap-12">
          {[
            { num: "4", label: "Фигуры" },
            { num: "6", label: "Элементов" },
            { num: "360°", label: "Симметрия" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-amber-300 text-3xl font-bold">{stat.num}</p>
              <p className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
