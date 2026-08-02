import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-silver-dark">
        Erro 404
      </p>
      <h1 className="mt-2 font-heading text-3xl font-bold">
        Essa página não existe
      </h1>
      <p className="mt-3 text-ink/70">
        O endereço pode ter mudado ou sido digitado errado. O catálogo completo
        continua no lugar de sempre.
      </p>
      <Link
        href="/"
        className="mt-8 flex h-11 items-center rounded-md bg-navy px-6 font-semibold text-white transition-opacity hover:opacity-90"
      >
        Ver catálogo
      </Link>
    </main>
  );
}
