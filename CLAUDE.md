# Projeto: Stylos

Data: 01/08/2026
Versão: 1.2

> Este briefing segue o formato padrão da skill `squad-briefing`, adaptado de "landing page para profissional liberal"
> para "site de catálogo e-commerce", já que a Stylos é uma loja de produtos (camisetas, chapéus e relógios), não um
> prestador de serviço individual. Estrutura mantida, campos ajustados ao contexto.

---

> ⚠️ **Avisos identificados antes do desenvolvimento:**
> - **Logo diz "Ecommerce · Dropshipping", mas o modelo real é retirada local, sem entrega.** Recomendo não expor
>   o termo "dropshipping" na comunicação do site (gera expectativa de envio para o cliente final) — usar apenas
>   "Stylos" ou "Stylos Ecommerce" na aplicação do logo no site, e reforçar "retirada no local" claramente no
>   header/rodapé/checkout.
> - **Domínio e hospedagem ainda não definidos** — build deve funcionar em preview/local até isso ser resolvido;
>   não há bloqueio técnico, só pendência administrativa a resolver antes do deploy final.

---

## Contexto

Negócio: **Stylos** — catálogo digital de produtos básicos (camisetas, chapéus bucket e relógios), com fechamento
de pedido via WhatsApp e retirada presencial em Franca/SP. A marca já opera com histórico consolidado em duas contas
próprias no Shopee (ver Seção 8), então **não é uma loja nova sem track record** — o site de catálogo é um canal
adicional, não o primeiro contato da marca com o mercado.
Objetivo: Site de catálogo funcional, bonito e responsivo — sem checkout online, sem cadastro, sem cálculo de frete.
Projeto de referência estrutural: Kick Atacado (mesma stack, estrutura similar, identidade visual nova).

---

## Stack

Next.js 15 + App Router + Tailwind v4 + TypeScript
Justificativa: mesma stack usada no projeto de referência (Kick Atacado), já validada e testada pelo estúdio — reduz
retrabalho e mantém consistência técnica entre os projetos.

---

## Design

- Estilo: editorial/clean com acento técnico — o efeito "metal escovado" do logo fica **restrito à logomarca**, não se
  propaga para componentes de UI (ver racional completo na Seção 10)
- Paleta: azul-marinho quase-preto como cor de marca (header, rodapé, hero, CTA) + prateado como accent discreto +
  **fundo geral do site em branco/quase-branco** — para o produto (a variação de cor da camiseta/bucket) ser sempre
  o elemento visual dominante no card, e não competir com um fundo escuro
- Logo: fornecido pelo cliente (arquivo `magnific_SOSmIa6Ub8.png`) — símbolo "S" em metal com sacola de compras, sobre fundo azul-marinho
- Referências: Kick Atacado (estrutura e funcionalidade) — identidade visual 100% nova, direção de arte confirmada (ver Seção 10)

---

## Regras

- Mobile-first sempre
- Sem templates — design original, construído a partir da identidade do logo
- Otimizado para Core Web Vitals
- Catálogo com seletor de variação (cor + tamanho) por produto, incluindo lógica de preço escalonado por quantidade no relógio
- Sem cadastro de usuário, sem checkout de pagamento — carrinho apenas monta o pedido
- Fundo geral do site claro (branco/quase-branco) — azul-marinho reservado a header, rodapé, hero dos banners e CTAs
- Nenhum efeito 3D/bisel metálico fora da logomarca em si (nada de gradiente metálico em botão, card ou texto)
- Sem gatilhos de urgência artificiais (contador regressivo, "últimas unidades") — a prova social real (Shopee) já
  cumpre esse papel de confiança, forçar urgência falsa derruba credibilidade

---

## 1. Identidade da Marca

- **Nome:** Stylos
- **Segmento:** Catálogo/varejo e revenda de vestuário básico e acessórios
- **Localização:** Rua Major Moura Mattos, 1465 — Jardim Dermínio, Franca/SP
- **Logo:** fornecido pelo cliente
- **Perfil analisado:** Briefing direto com o cliente + dados de desempenho das lojas Shopee da marca

---

## 2. Posicionamento e Proposta de Valor Única (PVU)

**Posicionamento:**
Catálogo digital da Stylos — marca já consolidada no Shopee — para escolher e fechar pedido de camisetas básicas,
chapéus bucket e relógios direto pelo WhatsApp, com retirada no local em Franca/SP.

**Proposta de Valor Única:** [PROPOSTO]
Compra simples e sem burocracia, com o respaldo de quem já vende há anos: o cliente monta o carrinho escolhendo cor
e tamanho, vê o preço já calculado (inclusive os descontos por quantidade no relógio) e finaliza com um clique
direto pelo WhatsApp — sem cadastro, sem pedido mínimo, sem enrolação.

---

## 3. Público-Alvo

**Perfil:** Consumidores locais de Franca/SP e região interessados em básicos (camiseta, bucket) e acessórios a
preço competitivo, incluindo revendedores — a faixa de preço por quantidade no relógio (10un e 100un) indica que
parte do público compra para revenda.

**Dores específicas:**
1. Dificuldade de ver o catálogo completo com cores/tamanhos antes de decidir
2. Atrito em ligar ou perguntar preço item por item pelo WhatsApp
3. Falta de clareza sobre desconto por quantidade (revendedor precisa saber o preço final antes de fechar)

**Momento de decisão de compra:**
Cliente já sabe o tipo de produto que quer (básico, sem necessidade de "convencimento") — o que decide a compra é
a velocidade entre ver o produto certo e conseguir fechar o pedido.

---

## 4. Tom de Voz e Personalidade da Marca

- **Tom geral:** Direto e prático, sem enrolação
- **Adjetivos da marca (3-5):** eficiente, confiável, moderno, acessível, direto
- **Linguagem:** Semiformal
- **O que evitar:** jargão de moda rebuscado, tom "influencer", textos longos antes do CTA
- **Referência de voz:** Kick Atacado — tom objetivo de quem já compra e não precisa ser convencido

---

## 5. Diferencial Competitivo

**O que o concorrente médio do nicho entrega:**
Catálogo estático em PDF, ou apenas atendimento via WhatsApp sem organização visual — cliente precisa perguntar
preço e disponibilidade item por item.

**O que a Stylos entrega de diferente:**
1. Catálogo visual completo, com filtro de cor e tamanho por produto
2. Carrinho que já monta o pedido formatado antes de enviar pro WhatsApp
3. Preço com desconto automático por quantidade no relógio, sem precisar perguntar
4. Histórico real de vendas (Shopee) que a maioria dos concorrentes de catálogo local não tem pra mostrar

---

## 6. Objetivo do Site

- **Objetivo principal:** Fechar pedido via WhatsApp
- **CTA principal:** "Finalizar pedido no WhatsApp"
- **CTA secundário:** "Ver catálogo" (scroll para seção de produtos, a partir do hero/banner)
- **O que acontece após o clique:** Abre `wa.me/5516992949249` com mensagem pré-preenchida contendo a lista de itens
  do carrinho (produto, cor, tamanho, quantidade e valor total já calculado)

---

## 7. Produtos e Preços

| Produto | Variações | Preço | Observação |
|---|---|---|---|
| Camiseta básica adulto | 14 cores (preta, verde, roxo, marrom, azul marinho, rosa, azul royal, bege, amarela, vermelha, branca, off white, bordô, cinza) × tamanhos P, M, G, GG | R$ 10,90 | Preço único, sem pedido mínimo |
| Chapéu bucket | 8 cores (preto, azul, vermelho, rosa, roxo, amarelo, verde, branco) — tamanho único 57cm | R$ 8,50 | Preço único, sem pedido mínimo |
| Relógio | Somente preto | R$ 4,00 (1–9 un) / R$ 3,50 (10–99 un) / R$ 3,00 (100+ un) | Preço escalonado por quantidade — requer lógica de cálculo dinâmico no carrinho |

**Serviço/produto âncora:** Relógio — é o único item com lógica de preço por volume, então merece destaque para
revendedores ("compre mais, pague menos").

---

## 8. Prova Social

- **Depoimentos disponíveis:** Não diretamente no site, mas há histórico de avaliações consolidado no Shopee (ver números abaixo)
- **Origem dos dados:** Duas contas Shopee da própria marca (mesma marca, contas/lojas distintas)
  - Loja A: 735 produtos · 787 seguidores · nota 4.8 (4,2 mil avaliações) · taxa de resposta 83% · loja há 4 anos
  - Loja B: 1,2 mil produtos · 725 seguidores · nota 4.8 (10,5 mil avaliações) · taxa de resposta 96% · loja há 24 meses
- **Números combinados para uso no site** (aprovado pelo cliente — exibir como bloco único, sem link para o Shopee):
  - **+1,9 mil produtos** vendidos/catalogados
  - **+1,5 mil seguidores**
  - **4.8 ★** de avaliação geral (**+14,7 mil avaliações**)
  - **+4 anos** de atuação no mercado (idade da loja mais antiga)
  - Resposta rápida ao cliente (poucas horas), consistente nas duas contas
- **Uso recomendado:** bloco de prova social como faixa/trust bar logo abaixo do header (ver Seção 11) e reforço
  na seção "Sobre nós". Não usar como link clicável — apenas números, conforme decisão do cliente.

---

## 9. Referências Visuais

**Estética do nicho:** Catálogos de atacado costumam ser simples, às vezes até genéricos (grade de produtos sem
identidade). A Stylos tem a chance de se diferenciar com um catálogo editorial e limpo, com a marca (azul-marinho +
prata) presente nos pontos certos, sem pesar a navegação.

**Referências positivas:** Kick Atacado (estrutura: header, banners, produtos, sobre nós, carrinho, rodapé)

**Referências negativas (evitar):** visual "de fábrica" genérico, grade de produto sem hierarquia visual, catálogo
que pareça planilha, efeito metálico 3D do logo aplicado em componentes de UI (data rápido, pesa a navegação)

---

## 10. Identidade Visual — Confirmada (squad-diretor-de-arte)

### Análise da identidade existente
O acabamento "metal escovado" do símbolo é um ativo de marca forte e reconhecível, mas é uma estética que remete a
logos de tech/e-sports (~2015–2018) — combina mal se replicado em botões, cards ou textos de um catálogo de
moda/lifestyle. **Decisão:** o efeito 3D fica exclusivo da logomarca; o site em volta é plano, editorial, com o
produto como protagonista visual.

### Paleta de Cores

*Hex extraídos por amostragem direta do arquivo do logo — não são estimativas visuais.*

| Função | Cor | Hex | Uso |
|--------|-----|-----|-----|
| Marca / primária | Azul-marinho quase-preto | `#000C24` | Header, rodapé, hero dos banners, CTAs — **nunca como fundo geral do catálogo** |
| Secundária | Prateado metálico | `#C0C0C0` (variação `#848484`–`#D8D8D8`) | Accent discreto: linha fina, ícone, estado de hover — nunca gradiente 3D em componente de UI |
| Fundo geral do site | Branco / quase-branco | `#FFFFFF` / `#FAFAFA` | Fundo da grade de produtos e do corpo do site — deixa a cor do produto ser o elemento dominante |
| Texto / neutro escuro | Preto | `#0A0A0A` | Texto e UI no fundo claro |
| Destaque (CTA — WhatsApp) | Verde WhatsApp | `#25D366` | Botão "Finalizar no WhatsApp" — reforça reconhecimento imediato |

### Tipografia — confirmada

| Uso | Família | Racional |
|-----|---------|----------|
| Títulos (H1/H2) | **Space Grotesk** | Geométrica, caráter técnico sem cair no lado "gamer" do logo — boa presença em título de categoria |
| Corpo de texto / preços | **Inter** | Padrão de e-commerce por bons motivos: altíssima legibilidade em grade de produto, preço e variação |
| Destaques/CTAs | Inter, peso 600–700 | Reforça o tom direto da marca sem introduzir uma terceira fonte |

---

## 11. Estrutura do Site — Otimizada (squad-diretor-de-arte)

1. **Header** — logo à esquerda, menu de categorias (Camisetas / Bucket / Relógios / Sobre), ícone de carrinho com contador à direita
2. **Trust bar** *(nova)* — faixa fina logo abaixo do header com os números da Seção 8 (+1,9 mil produtos · 4.8★ · +14,7 mil avaliações · +4 anos de mercado), sem link, só ícones + números
3. **Banner único (hero estático)** — não é mais slide/carrossel por enquanto; um asset por breakpoint (`banner-1-desktop`, `banner-1-mobile`), altura enxuta (~45–55vh desktop, ~35vh mobile) para não empurrar o catálogo pra baixo do fold. Estrutura do componente deve deixar aberto adicionar mais banners depois (virar slider), mas sem essa lógica agora — só troca de imagem por breakpoint via `srcset`/`picture`
4. **Catálogo de produtos** — grade de cards por categoria, fundo claro, swatch de cor visível direto no card (sem precisar clicar), seletor de tamanho; preço do relógio recalcula em tempo real conforme quantidade (exibir como stepper/degrau visual, não só texto)
5. **Como funciona** *(nova, 3 passos)* — "Escolha o produto → Monte o carrinho → Finalize no WhatsApp"; necessário porque o fluxo de compra (sem cadastro, sem checkout) é atípico e pode confundir quem nunca comprou assim
6. **Sobre nós** — endereço completo, mapa incorporado, horário de funcionamento (seg–sex, 7h–17h), telefone/WhatsApp
7. **Carrinho** — painel lateral (drawer) ou modal, lista os itens escolhidos com variação e subtotal, botão único "Finalizar no WhatsApp"
8. **Rodapé** — nome da empresa, endereço, horário, contato, aviso de "retirada no local", sem ícones de redes sociais (nenhuma ativa no momento)

**Gatilho de conversão a explorar:** especificidade no preço do relógio (tabela/stepper visual por faixa de quantidade) — é o único produto com esse gancho, vale destaque próprio no card.

---

## 12. Observações para o Claude Code

- Carrinho **não processa pagamento** — apenas monta a mensagem formatada e abre `https://wa.me/5516992949249` com o pedido
- Sem pedido mínimo geral, **exceto** o relógio, que tem 3 faixas de preço por quantidade (1–9un = R$4,00 | 10–99un = R$3,50 | 100+un = R$3,00) — implementar como função de cálculo, não como valor fixo
- **Todas as imagens já estão prontas** em `images/`, nomenclatura já definida pelo cliente:
  - `camiseta-{cor}.png` × 14 (amarela, azul, azul-marinho, bege, bordo, branca, cinza, marrom, offwhite, preta, rosa, roxa, verde, vermelha)
  - `detalhes-{cor}.png` × 14 — mesma lista de cores da camiseta, provavelmente close-up/textura para o modal de produto
  - `chapeu-{cor}.png` × 8 (amarelo, azul, branco, preto, rosa, roxo, verde, vermelho)
  - `relogio.png` (cor única)
  - `banner-1-desktop.jpg`, `banner-1-mobile.jpg` (banner único, ver Seção 11) — **únicos arquivos em JPG**, todos os outros em PNG
  - `logo.png`, `favicon.png`
- Banner é único por enquanto (não slider) — ver Seção 11, ponto 3
- Sem domínio/hospedagem definidos ainda — build deve rodar em ambiente local/preview normalmente
- Sem redes sociais ativas — não incluir ícones de redes no rodapé por enquanto (adicionar campo preparado para o futuro, se fizer sentido)
- Envio: **somente retirada no local** — não incluir cálculo de frete, CEP ou entrega em nenhuma etapa
- Evitar o termo "dropshipping" na comunicação visível do site (ver aviso no topo deste documento)
- **Fundo geral do site em branco/quase-branco** — azul-marinho (`#000C24`) só em header, rodapé, hero e CTAs; nunca como fundo do catálogo
- **Nenhum gradiente/bisel metálico 3D** em botões, cards ou texto — efeito reservado à logomarca
- Trust bar com os números da Seção 8 é **texto simples com ícones**, sem link para o Shopee (decisão do cliente)
- Nova seção "Como funciona" (3 passos) entre o catálogo e o "Sobre nós"

---

## 13. Checklist antes de Codar

- [x] CLAUDE.md revisado
- [x] Logo disponível (fornecido pelo cliente)
- [x] Paleta e tipografia confirmadas com a skill `squad-diretor-de-arte`
- [x] Fotos dos produtos prontas (feitas pelo cliente/Magnific, organizadas em `images/`)
- [x] Banner (desktop + mobile) pronto — versão única, não slider
- [ ] Domínio e hospedagem definidos
- [x] Textos do site (copy) gerados — ver `COPY.md`

---

*Este briefing foi gerado pela skill `squad-briefing`, adaptado de "profissional liberal" para "e-commerce/catálogo".*
*Direção de arte (Seções 10 e 11) confirmada pela skill `squad-diretor-de-arte` em 30/07/2026.*
*Revisar e ajustar antes de iniciar o desenvolvimento.*
