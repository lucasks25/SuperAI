import Link from "next/link";

export const metadata = {
  title: "Política de Cookies | SuperAI",
  description: "Nossa Política de Cookies",
};

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 py-20 px-4">
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
        <p className="text-sm text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto que um site, quando visitado, coloca no computador do usuário ou no 
              seu dispositivo móvel, através do navegador de internet (browser). A colocação de cookies ajudará o site a reconhecer o 
              seu dispositivo na próxima vez que o visitar.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Para que servem os Cookies?</h2>
            <p>
              Os cookies são usados para ajudar a determinar a utilidade, interesse e o número de utilizações dos sites, 
              permitindo uma navegação mais rápida e eficiente e eliminando a necessidade de introduzir repetidamente as mesmas informações.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Que tipos de Cookies utilizamos?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies Estritamente Necessários:</strong> Permitem a navegação no site e utilização das aplicações, bem como acessar áreas seguras. Sem estes cookies, os serviços requeridos não podem ser prestados.</li>
              <li><strong>Cookies Analíticos:</strong> São utilizados anonimamente para efeitos de criação e análise de estatísticas, no sentido de melhorar o funcionamento do site (ex: Google Analytics).</li>
              <li><strong>Cookies de Funcionalidade:</strong> Guardam as preferências do usuário relativamente à utilização do site, para que não seja necessário voltar a configurá-lo cada vez que o visita.</li>
              <li><strong>Cookies de Marketing:</strong> Direcionam a publicidade em função dos interesses de cada usuário, por forma a direcionar as campanhas publicitárias (ex: Meta Pixel).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Como gerenciar os Cookies?</h2>
            <p>
              Todos os browsers permitem ao usuário aceitar, recusar ou apagar cookies, nomeadamente através da seleção 
              das definições apropriadas no respetivo navegador. Pode configurar os cookies no menu "opções" ou "preferências" do seu browser.
              No entanto, ao desativar cookies, pode impedir que alguns serviços da web funcionem corretamente.
            </p>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link href="/" className="text-blue-600 hover:text-blue-500 font-medium">
            &larr; Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
