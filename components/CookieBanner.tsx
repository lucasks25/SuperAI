"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user already accepted cookies
    const cookieConsent = localStorage.getItem("cookie_consent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-[#111111] border-t border-gray-200 dark:border-gray-800 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm text-gray-600 dark:text-gray-300">
        Utilizamos cookies essenciais e tecnologias semelhantes para melhorar a sua experiência na SuperAI, 
        analisar o tráfego e personalizar conteúdo. Ao continuar navegando, você concorda com estas condições.{" "}
        <Link href="/politica-de-cookies" className="text-blue-600 dark:text-blue-400 hover:underline">
          Ler Política de Cookies
        </Link>.
      </div>
      <div className="flex-shrink-0 flex gap-3 w-full sm:w-auto">
        <button 
          onClick={acceptCookies}
          className="w-full sm:w-auto px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
        >
          Aceitar e Fechar
        </button>
      </div>
    </div>
  );
}
