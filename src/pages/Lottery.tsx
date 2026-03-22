import { useState, useRef } from "react";

const TOTAL = 30;

function buildNumbers() {
  return Array.from({ length: TOTAL }, (_, i) => i + 1);
}

export default function Lottery() {
  const [remaining, setRemaining] = useState<number[]>(buildNumbers());
  const [drawn, setDrawn] = useState<number[]>([]);
  const [current, setCurrent] = useState<number | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [displayNum, setDisplayNum] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const draw = () => {
    if (remaining.length === 0 || spinning) return;

    setSpinning(true);
    let ticks = 0;
    const totalTicks = 20;

    intervalRef.current = setInterval(() => {
      const rand = Math.floor(Math.random() * remaining.length);
      setDisplayNum(remaining[rand]);
      ticks++;

      if (ticks >= totalTicks) {
        clearInterval(intervalRef.current!);
        const finalIdx = Math.floor(Math.random() * remaining.length);
        const winner = remaining[finalIdx];
        const newRemaining = remaining.filter((_, i) => i !== finalIdx);

        setRemaining(newRemaining);
        setDrawn((prev) => [winner, ...prev]);
        setCurrent(winner);
        setDisplayNum(winner);
        setSpinning(false);
      }
    }, 60);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRemaining(buildNumbers());
    setDrawn([]);
    setCurrent(null);
    setDisplayNum(null);
    setSpinning(false);
  };

  return (
    <div className="min-h-screen bg-stone-900 flex flex-col items-center justify-start pt-16 pb-16 px-4">
      <h1 className="text-white text-3xl font-bold uppercase tracking-widest mb-2">
        Лотерея
      </h1>
      <p className="text-stone-400 text-sm mb-10">
        Числа от 1 до 30 · без повторов
      </p>

      {/* Барабан */}
      <div
        className={`w-52 h-52 rounded-full flex items-center justify-center mb-8 border-4 transition-all duration-300 select-none
          ${spinning ? "border-amber-400 shadow-[0_0_60px_10px_rgba(251,191,36,0.4)] animate-pulse" : current ? "border-amber-500 shadow-[0_0_40px_6px_rgba(251,191,36,0.25)]" : "border-stone-600"}`}
        style={{ background: "radial-gradient(circle at 40% 35%, #44403c, #1c1917)" }}
      >
        <span
          className={`font-bold tabular-nums transition-all duration-100
            ${spinning ? "text-amber-300 text-6xl" : current ? "text-amber-400 text-7xl" : "text-stone-500 text-4xl"}`}
        >
          {displayNum ?? "?"}
        </span>
      </div>

      {/* Кнопки */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={draw}
          disabled={spinning || remaining.length === 0}
          className="px-8 py-3 bg-amber-400 hover:bg-amber-300 disabled:bg-stone-600 disabled:text-stone-400 text-stone-900 font-bold uppercase tracking-wide rounded transition-colors duration-200"
        >
          {remaining.length === 0 ? "Все числа разыграны" : spinning ? "Крутим..." : "Вытянуть число"}
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 border border-stone-600 hover:border-stone-400 text-stone-400 hover:text-white uppercase tracking-wide text-sm rounded transition-colors duration-200"
        >
          Сброс
        </button>
      </div>

      {/* Прогресс */}
      <div className="w-full max-w-md mb-6">
        <div className="flex justify-between text-stone-500 text-xs mb-1 uppercase tracking-wide">
          <span>Разыграно: {drawn.length}</span>
          <span>Осталось: {remaining.length}</span>
        </div>
        <div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-400 rounded-full transition-all duration-500"
            style={{ width: `${(drawn.length / TOTAL) * 100}%` }}
          />
        </div>
      </div>

      {/* История */}
      {drawn.length > 0 && (
        <div className="w-full max-w-md">
          <p className="text-stone-500 text-xs uppercase tracking-wide mb-3">
            История розыгрыша
          </p>
          <div className="flex flex-wrap gap-2">
            {drawn.map((n, i) => (
              <div
                key={n}
                className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm
                  ${i === 0 ? "bg-amber-400 text-stone-900" : "bg-stone-700 text-stone-300"}`}
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
