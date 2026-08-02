const info = [
  {
    label: "Endereço",
    value: "Rua Major Moura Mattos, 1465 — Jardim Dermínio, Franca/SP",
    icon: (
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    ),
  },
  {
    label: "Horário",
    value: "Segunda a sexta, das 7h às 17h",
    icon: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3.5 2" />,
  },
  {
    label: "Contato",
    value: "(16) 99294-9249",
    href: "https://wa.me/5516992949249",
    icon: (
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm-2 5.5 1 2.5-1 1a7 7 0 0 0 3 3l1-1 2.5 1v2a1.5 1.5 0 0 1-1.7 1.4A10.4 10.4 0 0 1 7.1 11a1.5 1.5 0 0 1 1.4-1.7Z" />
    ),
  },
  {
    label: "Retirada",
    value: "Apenas na loja — sem entrega",
    icon: (
      <path d="M4 9h16v11H4V9Zm0 0 2-5h12l2 5M9 13h6" />
    ),
  },
];

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="font-heading text-3xl font-bold">Sobre a Stylos</h2>
          <p className="mt-4 text-ink/70">
            A Stylos vende há mais de 4 anos. Já são milhares de produtos
            catalogados e nota 4.8 de quem já comprou. Aqui, você monta o
            pedido online e retira pessoalmente na loja, em Franca/SP.
          </p>

          <ul className="mt-8 space-y-4">
            {info.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-silver-dark"
                >
                  {item.icon}
                </svg>
                <p className="text-sm">
                  <span className="font-semibold">{item.label}:</span>{" "}
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-silver underline-offset-2 transition-colors hover:text-navy"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-ink/70">{item.value}</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-lg border border-ink/10">
          <iframe
            title="Mapa — Stylos, Rua Major Moura Mattos, 1465, Franca/SP"
            src="https://www.google.com/maps?q=Rua+Major+Moura+Mattos,+1465,+Jardim+Derm%C3%ADnio,+Franca,+SP&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
}
