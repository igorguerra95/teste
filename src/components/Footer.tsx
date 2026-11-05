import React from 'react';
import { COMPANY_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050811] border-t border-white/10 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-lg font-bold text-white tracking-tight block">
              {COMPANY_INFO.name}
            </span>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Loja de produtos importados 100% originais com garantia e assistência técnica especializada para celulares, MacBooks e computadores.
            </p>
            <div className="text-[11px] text-slate-500 font-mono pt-1">
              Produtos Homologados · Peças Originais · Garantia de 90 Dias
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
              Navegação
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleNavClick(e, '#inicio')}
                  className="hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#importados"
                  onClick={(e) => handleNavClick(e, '#importados')}
                  className="hover:text-white transition-colors text-blue-300"
                >
                  Produtos Importados
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleNavClick(e, '#servicos')}
                  className="hover:text-white transition-colors"
                >
                  Assistência Técnica
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleNavClick(e, '#sobre')}
                  className="hover:text-white transition-colors"
                >
                  Sobre a Loja
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                  className="hover:text-white transition-colors"
                >
                  Contato & Orçamentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and address */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
              Unidade de Atendimento
            </span>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="text-white font-medium">{COMPANY_INFO.address}</p>
              <p>Telefone: <span className="text-slate-300 font-mono">{COMPANY_INFO.phone}</span></p>
              <p>Horário: <span className="text-slate-300 font-mono">{COMPANY_INFO.hours}</span></p>
              <p className="pt-2 text-[11px] text-slate-500">
                Atendimento presencial com pronta entrega e assistência técnica com garantia.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Produtos Originais Garantidos</span>
            <span>Garantia de 90 Dias</span>
            <span>Brasil</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
