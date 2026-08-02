/**
 * Domínio ainda não definido (pendência administrativa do briefing).
 * No deploy, configurar NEXT_PUBLIC_SITE_URL com o domínio final —
 * o fallback mantém preview/local funcionando normalmente.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
