import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Termos de Uso | MoltoChat",
  description: "Nossos Termos de Uso",
};

export default function TermosUso() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto prose prose-gray text-gray-800 prose-headings:text-black prose-strong:text-black prose-a:text-blue-600">
          <h1 className="text-4xl font-bold mb-8 text-black">Termos de Uso</h1>
          <p className="text-sm text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar a plataforma MoltoChat, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
                Se você não concorda com alguma parte destes termos, não deve usar nossos serviços.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Uso da Plataforma</h2>
              <p>
                Você concorda em usar nossa plataforma apenas para fins legais e de maneira que não infrinja os direitos de, 
                restrinja ou iniba o uso e o aproveitamento da plataforma por qualquer terceiro. Comportamentos proibidos incluem, 
                mas não se limitam a:
              </p>
              <ul>
                <li>Uso da IA para gerar conteúdo ilegal, de ódio ou prejudicial;</li>
                <li>Tentativas de contornar limitações de segurança ou uso da plataforma;</li>
                <li>Engenharia reversa dos agentes de IA.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Pagamentos e Assinaturas</h2>
              <p>
                O uso de funcionalidades premium requer o pagamento de uma assinatura. Os pagamentos são processados 
                de forma antecipada para o ciclo de faturamento escolhido. Você pode cancelar sua assinatura a qualquer momento, 
                porém não oferecemos reembolsos para períodos já cobrados.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Disponibilidade do Serviço</h2>
              <p>
                Trabalhamos para garantir que a plataforma esteja sempre disponível. No entanto, o serviço pode sofrer 
                interrupções para manutenção, atualizações ou devido a fatores externos fora de nosso controle (como instabilidades 
                nas APIs de inteligência artificial de terceiros).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Modificações dos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Mudanças significativas 
                serão comunicadas através da plataforma ou por e-mail.
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
