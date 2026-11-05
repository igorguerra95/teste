import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Olá! Gostaria de consultar uma triagem técnica para o meu aparelho na Assistência Técnica.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 bg-[#0b1329]/95 text-xs text-slate-200 rounded-lg hairline-border shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-right-2 duration-300">
          <span>Técnico de plantão disponível</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button with subtle pulse */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-950/80 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Subtle pulse ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-30 animate-ping pointer-events-none" />
        
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
};
