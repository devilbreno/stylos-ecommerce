const steps = [
  {
    title: "Escolha o produto",
    description: "Veja a cor e o tamanho certos pra você.",
    icon: (
      <path d="m8 5-5 3 2 3.5 2-1V19h10v-8.5l2 1L21 8l-5-3a4 4 0 0 1-8 0Z" />
    ),
  },
  {
    title: "Monte o carrinho",
    description: "Adicione quantos itens quiser. Sem cadastro, sem mínimo.",
    icon: (
      <path d="M6 7h12l1.5 13.5a1 1 0 0 1-1 1.1h-13a1 1 0 0 1-1-1.1L6 7Zm3 3V6a3 3 0 0 1 6 0v4" />
    ),
  },
  {
    title: "Finalize no WhatsApp",
    description: "Um clique abre a conversa com seu pedido pronto.",
    icon: (
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm-3.5 6.5h.01M12 9.5h.01m3.5 0h.01M8 14s1.5 2 4 2 4-2 4-2" />
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-40 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-heading text-3xl font-bold">
          Comprar aqui é simples assim
        </h2>

        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-lg border border-ink/10 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {step.icon}
                  </svg>
                </span>
                <span className="font-heading text-sm font-bold text-silver-dark">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold">
                {step.title}
              </h3>
              <p className="mt-1 text-sm text-ink/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
