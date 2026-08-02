/**
 * Domínio ainda não definido (pendência administrativa do briefing).
 * Na Vercel, VERCEL_PROJECT_PRODUCTION_URL aponta pro domínio de produção
 * do projeto (inclusive quando o domínio final for adicionado) — só usada
 * em código server-side (metadata, sitemap, robots), não precisa de
 * prefixo NEXT_PUBLIC. O fallback mantém o ambiente local funcionando.
 */
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
