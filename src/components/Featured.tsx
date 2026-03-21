import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const figures = [
  {
    emoji: "⭕",
    name: "Круг",
    element: "Шанырак",
    description: "Круглое отверстие в куполе юрты — символ солнца и вселенной. Идеальная окружность диаметром около 1,5 метра.",
  },
  {
    emoji: "🔺",
    name: "Треугольник",
    element: "Уык",
    description: "Жерди купола образуют треугольные секции. Именно треугольник придаёт юрте устойчивость и прочность.",
  },
  {
    emoji: "⬡",
    name: "Шестиугольник",
    element: "Кереге",
    description: "Решётчатые стены юрты образуют правильные шестиугольники — один из самых прочных геометрических узоров.",
  },
  {
    emoji: "▭",
    name: "Прямоугольник",
    element: "Есик",
    description: "Дверной проём юрты — классический прямоугольник, пропорции которого подчинены законам золотого сечения.",
  },
];

export default function Featured() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="elements" className="min-h-screen bg-stone-50 px-6 py-20 lg:py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.4em] text-amber-600 text-sm mb-4">Элементы юрты</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight">
            Геометрия<br />в каждой детали
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 lg:sticky lg:top-20">
            <img
              src="https://cdn.poehali.dev/projects/8b055338-b3bc-43b3-bc49-a923aebdd4c3/files/c5955398-8858-47c2-9d8d-5b047cbac1c9.jpg"
              alt="Геометрия купола юрты"
              className="w-full aspect-square object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div id="figures" className="flex-1 flex flex-col gap-6">
            {figures.map((fig, i) => (
              <motion.div
                key={fig.name}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:border-amber-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{fig.emoji}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-neutral-900">{fig.name}</h3>
                      <span className="text-xs uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                        {fig.element}
                      </span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">{fig.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
