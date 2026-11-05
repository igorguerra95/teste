import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, Send, ShieldCheck, Phone, ShoppingBag, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceName?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultServiceName = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [item, setItem] = useState(defaultServiceName || '');
  const [details, setDetails] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [protocol, setProtocol] = useState('');

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);
    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    }
    setPhone(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const code = `AST-${Math.floor(1000 + Math.random() * 9000)}`;
    setProtocol(code);
    setIsSuccess(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Olá! Solicito atendimento na ${COMPANY_INFO.name}.\n\n` +
      `📋 Protocolo: ${protocol}\n` +
      `👤 Nome: ${name}\n` +
      `📱 WhatsApp: ${phone}\n` +
      `📦 Item/Serviço: ${item || defaultServiceName || 'Importados / Assistência'}\n` +
      `📝 Dúvida ou Detalhes: ${details || 'Solicitar informações de valores e disponibilidade'}\n\n` +
      `Aguardo retorno!`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#080d1a] rounded-xl hairline-border shadow-2xl p-6 sm:p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-blue-950/80 hairline-border-blue rounded-full flex items-center justify-center mx-auto text-blue-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 font-mono">
                Protocolo Emitido
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Código: <span className="text-blue-400 font-mono">{protocol}</span>
              </h3>
              <p className="text-xs text-slate-300 mt-2 max-w-sm mx-auto">
                Sua solicitação foi registrada. Clique no botão abaixo para prosseguir com o atendimento imediato no WhatsApp.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Continuar no WhatsApp</span>
              </a>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-300 pt-1"
            >
              Fechar janela
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono mb-1">
                Importados Originais & Assistência Técnica
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Entrar em Contato
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {defaultServiceName ? `Interesse: ${defaultServiceName}` : 'Tire dúvidas sobre estoque, valores de importados ou solicite um orçamento de conserto.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome completo"
                  className="w-full px-3.5 py-2 text-sm rounded-md bg-slate-900 text-white placeholder-slate-500 hairline-border focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  WhatsApp com DDD *
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="(00) 00000-0000"
                  className="w-full px-3.5 py-2 text-sm rounded-md bg-slate-900 text-white placeholder-slate-500 hairline-border focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Produto ou Modelo do Aparelho
                </label>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                  placeholder="Ex: iPhone 16 Pro / Troca de Bateria / MacBook"
                  className="w-full px-3.5 py-2 text-sm rounded-md bg-slate-900 text-white placeholder-slate-500 hairline-border focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Mensagem ou Dúvida
                </label>
                <textarea
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Como podemos te ajudar hoje?"
                  className="w-full px-3.5 py-2 text-sm rounded-md bg-slate-900 text-white placeholder-slate-500 hairline-border focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-blue-700 active:scale-[0.98] rounded-md transition-all shadow-lg shadow-blue-900/40 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Entrar em contato</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center pt-1">
                Garantia de procedência e peças originais · Telefone: {COMPANY_INFO.phone}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
