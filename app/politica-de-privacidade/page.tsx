import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidade | MoltoChat",
  description: "Nossa Política de Privacidade",
};

export default function PoliticaPrivacidade() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto prose prose-gray text-gray-800 prose-headings:text-black prose-strong:text-black prose-a:text-blue-600">
          <h1 className="text-4xl font-bold mb-8 text-black">Política de Privacidade</h1>
          <p className="text-sm text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
              <p>
                A MoltoChat ("nós", "nosso" ou "empresa") respeita a sua privacidade e está comprometida em proteger os seus dados pessoais. 
                Esta política explica como coletamos, usamos e protegemos suas informações ao utilizar nossa plataforma de agentes de IA.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Dados que Coletamos</h2>
              <ul>
                <li><strong>Dados de Identificação:</strong> Nome, e-mail e informações de contato.</li>
                <li><strong>Dados de Uso:</strong> Informações sobre como você interage com nossa plataforma.</li>
                <li><strong>Dados de Pagamento:</strong> Processados de forma segura por nossos parceiros de pagamento (não armazenamos dados do seu cartão de crédito).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Como Usamos seus Dados</h2>
              <p>
                Utilizamos suas informações para:
              </p>
              <ul>
                <li>Fornecer, operar e manter nossa plataforma;</li>
                <li>Melhorar e personalizar a experiência do usuário;</li>
                <li>Processar transações e enviar avisos relacionados;</li>
                <li>Comunicar atualizações, ofertas e suporte ao cliente.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Inteligência Artificial e Terceiros</h2>
              <p>
                Nossa plataforma utiliza APIs de Inteligência Artificial de terceiros (como OpenAI ou Anthropic). 
                Os dados fornecidos aos agentes podem ser processados por estes parceiros exclusivamente para a execução do serviço, respeitando rigorosos padrões de segurança.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Seus Direitos (LGPD)</h2>
              <p>
                Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento. 
                Para exercer seus direitos, entre em contato através do nosso suporte.
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="text-blue-600 hover:text-blue-500 font-medium no-underline">
              &larr; Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
