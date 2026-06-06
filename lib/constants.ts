// ─── Brand ──────────────────────────────────────────────────────────────────
export const BRAND_NAME = "SuperAI"
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
  { label: "Planos", href: "#planos" },
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
    title: "Mapeamento",
    text: "Entendemos seu atendimento, perguntas frequentes, serviços, horários e regras.",
  },
  {
    number: "02",
    title: "Treinamento",
    text: "Criamos a base de conhecimento e definimos o tom de voz do agente.",
  },
  {
    number: "03",
    title: "Integração",
    text: "Conectamos WhatsApp, agenda, CRM, banco de dados ou automações necessárias.",
  },
  {
    number: "04",
    title: "Otimização",
    text: "Acompanhamos conversas reais e melhoramos o agente com base nos atendimentos.",
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
    q: "A IA substitui minha equipe?",
    a: "Não necessariamente. Ela reduz atendimentos repetitivos, organiza informações e chama o humano quando necessário.",
  },
  {
    q: "Funciona com WhatsApp?",
    a: "Sim. O foco principal é atendimento via WhatsApp, com possibilidade de integrar agenda, CRM e automações.",
  },
  {
    q: "A IA consegue ouvir áudios?",
    a: "Sim. O agente pode interpretar mensagens de voz e responder em texto ou áudio, dependendo da configuração.",
  },
  {
    q: "Posso treinar a IA para o meu negócio?",
    a: "Sim. Cada empresa pode ter sua própria base de conhecimento, tom de voz, regras e fluxos.",
  },
  {
    q: "Dá para pausar a IA e assumir manualmente?",
    a: "Sim. Quando o atendimento humano é ativado, a IA para de responder aquela conversa.",
  },
  {
    q: "Vocês fazem integrações personalizadas?",
    a: "Sim. Podemos conectar com agenda, CRM, banco de dados, planilhas, webhooks e outras ferramentas.",
  },
  {
    q: "Tem planos com preço fixo?",
    a: "Os projetos podem variar conforme integrações, volume e complexidade. Por isso, o ideal é solicitar uma proposta.",
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
