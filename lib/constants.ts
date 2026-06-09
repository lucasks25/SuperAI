// ─── Brand ──────────────────────────────────────────────────────────────────
export const BRAND_NAME = "MoltoChat"
export const BRAND_SLOGAN = "Agentes de IA que trabalham como parte da sua equipe"
export const BRAND_DESCRIPTION =
  "Automatize atendimento, vendas e agendamentos com agentes inteligentes treinados para o seu negócio."

// ─── Contact / Links ─────────────────────────────────────────────────────────
export const WHATSAPP_URL = "https://wa.me/5500000000000"
export const DEMO_URL = "#contato"

// ─── Palette (mirrors tailwind.config) ───────────────────────────────────────
export const COLORS = {
  bg: "#F7F9FF",
  bgSecondary: "#EEF3FF",
  text: "#080A12",
  muted: "#5D6475",
  blue: "#2563EB",
  dark: "#0F172A",
  lilac: "#A78BFA",
  cyan: "#67E8F9",
  green: "#22C55E",
  border: "rgba(15,23,42,0.08)",
  cardBg: "rgba(255,255,255,0.72)",
}

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Produto", href: "#produto" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Integrações", href: "#integracoes" },
  { label: "Planos", href: "/planos" },
  { label: "FAQ", href: "#faq" },
]

// ─── Features (Product Suite) ─────────────────────────────────────────────────
export const FEATURES = [
  {
    icon: "MessageCircle",
    title: "Atendimento no WhatsApp",
    text: "Responde clientes de forma natural, com contexto e sem parecer um robô genérico.",
    color: "#22C55E",
  },
  {
    icon: "Target",
    title: "Qualificação de leads",
    text: "Faz as perguntas certas para entender intenção, urgência e perfil do cliente.",
    color: "#2563EB",
  },
  {
    icon: "Calendar",
    title: "Agendamento automático",
    text: "Consulta disponibilidade e confirma horários automaticamente.",
    color: "#A78BFA",
  },
  {
    icon: "Mic",
    title: "Voz humanizada",
    text: "Entende áudios e pode responder com mensagens de voz naturais.",
    color: "#67E8F9",
  },
  {
    icon: "Users",
    title: "Atendimento humano",
    text: "Pausa a IA e transfere a conversa para sua equipe quando necessário.",
    color: "#0F172A",
  },
  {
    icon: "Zap",
    title: "Integrações",
    text: "Conecta WhatsApp, CRM, agenda, banco de dados e automações.",
    color: "#F59E0B",
  },
]

// ─── How it works ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Captura Instântanea",
    text: "Sua IA responde em segundos a qualquer lead que chegue pelo WhatsApp, Instagram ou site, 24 horas por dia.",
  },
  {
    number: "02",
    title: "Qualificação Inteligente",
    text: "O agente conduz uma conversa natural para coletar dados, entender dores e classificar o lead no CRM.",
  },
  {
    number: "03",
    title: "Agendamento & Fechamento",
    text: "Leads qualificados são agendados direto no calendário da sua equipe de vendas ou recebem o link de checkout.",
  },
]

// ─── Pricing ─────────────────────────────────────────────────────────────────
export const PRICING_PLANS = [
  {
    name: "Start",
    description: "Para empresas que querem começar com um agente simples de atendimento.",
    features: [
      "Atendimento via WhatsApp",
      "Perguntas frequentes",
      "Captação de leads",
      "Transferência para humano",
    ],
    cta: "Solicitar proposta",
    highlight: false,
  },
  {
    name: "Growth",
    description: "Para empresas que querem vender, qualificar e agendar automaticamente.",
    features: [
      "Tudo do Start",
      "Qualificação de leads",
      "Agendamento automático",
      "Integração com CRM ou planilhas",
      "Relatórios básicos",
    ],
    cta: "Solicitar proposta",
    highlight: true,
    badge: "Mais escolhido",
  },
  {
    name: "Scale",
    description: "Para operações com múltiplas unidades, times ou empresas.",
    features: [
      "Tudo do Growth",
      "Multiempresa",
      "Dashboard personalizado",
      "Base de conhecimento avançada",
      "Integrações sob medida",
      "Suporte prioritário",
    ],
    cta: "Falar com especialista",
    highlight: false,
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    q: "A IA substitui minha equipe de vendas ou suporte?",
    a: "Não. A IA atua como a linha de frente invisível da sua empresa. Ela qualifica, agenda e tira dúvidas básicas. Casos complexos ou fechamentos high-ticket são passados para sua equipe no momento exato, com todo o contexto.",
  },
  {
    q: "Quão rápido o Agente consegue responder?",
    a: "Em milissegundos. Nossos Agentes garantem tempo de resposta zero (SLA instantâneo), o que reduz as taxas de abandono e aumenta as conversões do WhatsApp.",
  },
  {
    q: "A IA corre o risco de inventar informações (alucinar)?",
    a: "Não. Diferente do ChatGPT comum, utilizamos a arquitetura RAG (Retrieval-Augmented Generation). O Agente só responde com base nos manuais, sites e regras que você aprovou.",
  },
  {
    q: "Como funciona a integração com meu CRM ou Calendário?",
    a: "A integração é nativa. Assim que o Agente qualifica o lead, ele cria o card no CRM (HubSpot, Salesforce, RD Station) e/ou verifica os horários disponíveis da sua equipe no Google Calendar para fazer o agendamento real.",
  },
  {
    q: "É difícil treinar ou implementar?",
    a: "Pelo contrário. Você não precisa saber programar. Nós conectamos sua base de conhecimento e ajustamos os fluxos e integrações iniciais para você começar a operar em dias, não meses.",
  },
  {
    q: "Posso assumir a conversa no meio do atendimento?",
    a: "Sim! A qualquer momento você ou sua equipe podem intervir. O Agente de IA pausa automaticamente quando detecta que um humano assumiu o chat (Human Handoff).",
  },
  {
    q: "Onde o MoltoChat pode ser conectado?",
    a: "Nossos agentes funcionam perfeitamente no WhatsApp Business, Instagram DM, Facebook Messenger e através do Webchat direto no seu site institucional.",
  },
  {
    q: "Qual a diferença do MoltoChat para um Chatbot tradicional de botões?",
    a: "O chatbot antigo força o cliente a digitar números (1 para vendas, 2 para suporte) e é engessado. A nossa IA interpreta áudios, textos longos, entende intenções complexas e conversa de forma idêntica a um humano.",
  },
  {
    q: "O que acontece se a IA não souber a resposta?",
    a: "O Agente é treinado para ser educado e humilde. Se uma pergunta fugir da base de conhecimento que você forneceu, ele diz que não possui a informação no momento e transfere o atendimento para a equipe humana.",
  },
]

// ─── Integrations ─────────────────────────────────────────────────────────────
export const INTEGRATIONS = [
  { name: "WhatsApp", color: "#22C55E", icon: "MessageCircle" },
  { name: "Google Calendar", color: "#4285F4", icon: "Calendar" },
  { name: "PostgreSQL", color: "#336791", icon: "Database" },
  { name: "n8n", color: "#FF6D00", icon: "Zap" },
  { name: "CRM", color: "#A78BFA", icon: "Users" },
  { name: "Evolution API", color: "#0F172A", icon: "Cpu" },
  { name: "Webhooks", color: "#2563EB", icon: "Globe" },
  { name: "Planilhas", color: "#0F9D58", icon: "Table2" },
  { name: "E-mail", color: "#5D6475", icon: "Mail" },
  { name: "Dashboard", color: "#2563EB", icon: "BarChart2" },
]

// ─── Logo cloud segments ──────────────────────────────────────────────────────
export const LOGO_SEGMENTS = [
  "CLÍNICAS",
  "OFICINAS",
  "IMOBILIÁRIAS",
  "ESTÉTICA",
  "EDUCAÇÃO",
  "SERVIÇOS",
  "RESTAURANTES",
  "AGÊNCIAS",
]

// ─── Footer columns ───────────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  produto: {
    title: "Produto",
    links: [
      "Agente WhatsApp",
      "SDR IA",
      "Agendamento",
      "Voz humanizada",
      "Atendimento humano",
      "Plataforma multiempresa",
    ],
  },
  solucoes: {
    title: "Soluções",
    links: [
      "Clínicas",
      "Oficinas",
      "Imobiliárias",
      "Estética",
      "Educação",
      "Restaurantes",
      "Agências",
    ],
  },
  recursos: {
    title: "Recursos",
    links: ["Integrações", "FAQ", "Blog", "Segurança", "Central de ajuda", "Demonstração"],
  },
  empresa: {
    title: "Empresa",
    links: ["Sobre", "Contato", "Planos", "Cases", "Parcerias"],
  },
  legal: {
    title: "Legal",
    links: ["Termos de uso", "Privacidade", "Cookies"],
  },
}
