const stats = [
  {
    value: "+1,9 mil",
    label: "produtos catalogados",
    icon: (
      <path d="M21 8.2 12 3 3 8.2v7.6L12 21l9-5.2V8.2ZM12 3v9m0 9v-9m9-3.8-9 3.8m-9-3.8 9 3.8" />
    ),
  },
  {
    value: "+1,5 mil",
    label: "seguidores",
    icon: (
      <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19m16 0v-1.5a3.5 3.5 0 0 0-2.5-3.35M14.5 5.15a3.5 3.5 0 0 1 0 6.7M13.5 8.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    ),
  },
  {
    value: "4.8 ★",
    label: "+14,7 mil avaliações",
    icon: (
      <path d="m12 3.5 2.5 5.3 5.5.8-4 4 1 5.9-5-2.8-5 2.8 1-5.9-4-4 5.5-.8L12 3.5Z" />
    ),
  },
  {
    value: "+4 anos",
    label: "de mercado",
    icon: (
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3.5 2" />
    ),
  },
];

function Stat({ stat }: { stat: (typeof stats)[number] }) {
  return (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-white">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {stat.icon}
        </svg>
      </span>
      <p className="text-sm leading-tight">
        <strong className="font-semibold">{stat.value}</strong>{" "}
        <span className="text-ink/60">{stat.label}</span>
      </p>
    </>
  );
}

export default function TrustBar() {
  return (
    <div className="border-b border-ink/10 bg-surface">
      {/* Mobile: faixa rolante em loop contínuo — some se o aparelho
          pedir menos movimento (a versão estática assume no lugar) */}
      <div className="overflow-hidden py-3 md:hidden motion-reduce:hidden">
        <ul className="flex w-max animate-[trust-marquee_28s_linear_infinite]">
          {[...stats, ...stats].map((stat, index) => (
            <li
              key={`${stat.label}-${index}`}
              aria-hidden={index >= stats.length}
              className="flex items-center gap-2.5 pr-10 whitespace-nowrap"
            >
              <Stat stat={stat} />
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: 4 colunas estáticas; no mobile só com reduced motion */}
      <ul className="mx-auto hidden max-w-6xl grid-cols-2 gap-x-4 gap-y-3 px-4 py-3 sm:px-6 md:grid md:grid-cols-4 motion-reduce:grid">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="flex min-w-0 items-center gap-2.5 md:justify-center"
          >
            <Stat stat={stat} />
          </li>
        ))}
      </ul>
    </div>
  );
}
