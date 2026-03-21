import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/8b055338-b3bc-43b3-bc49-a923aebdd4c3/files/5d528071-3071-48e3-a843-43f61aee236c.jpg"
          alt="Казахская юрта в степи"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-amber-300 uppercase tracking-[0.4em] text-sm mb-4">Школьный проект</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
            ЮРТА<br />
            <span className="text-amber-300">&</span> ГЕОМЕТРИЯ
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            Открой геометрические фигуры через элементы традиционной казахской юрты
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-sm uppercase tracking-widest">Исследуй</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-8 bg-amber-300/60"
          />
        </motion.div>
      </div>
    </div>
  );
}
