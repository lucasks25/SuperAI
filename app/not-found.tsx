import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          404
        </h1>
        <h2 className="text-2xl font-semibold">Página não encontrada</h2>
        <p className="text-gray-400">
          Ops! Parece que o agente de IA responsável por esta página tirou uma folga. O link pode estar quebrado ou a página não existe mais.
        </p>
        <div className="pt-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Voltar para o Início
          </Link>
        </div>
      </div>
    </div>
  );
}
