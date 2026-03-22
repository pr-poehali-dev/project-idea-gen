interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-bold">Геометрия Юрты</div>
        <nav className="flex gap-8 items-center">
          <a
            href="#elements"
            className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-sm"
          >
            Элементы
          </a>
          <a
            href="#figures"
            className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-sm"
          >
            Фигуры
          </a>
          <a
            href="/lottery"
            className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-sm"
          >
            Лотерея
          </a>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-900 px-4 py-2 text-xs uppercase tracking-wide font-bold transition-colors duration-300 rounded"
          >
            🖨️ Распечатать
          </button>
        </nav>
      </div>
    </header>
  );
}