import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShoppingBag, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenQuoteModal: (serviceOrProduct?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080d1a]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-blue-400 transition-colors"
          >
            {COMPANY_INFO.name}
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Início
            </a>
            <a
              href="#importados"
              onClick={(e) => handleNavClick(e, '#importados')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-blue-300 font-semibold"
            >
              Produtos Importados
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleNavClick(e, '#servicos')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Assistência Técnica
            </a>
            <a
              href="#sobre"
              onClick={(e) => handleNavClick(e, '#sobre')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Sobre Nós
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Contato
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-blue-700 active:scale-[0.98] rounded-md transition-all duration-200 shadow-md shadow-blue-900/30 flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-white/10 px-6 pt-4 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="text-slate-200 hover:text-white py-2 text-base font-medium border-b border-white/5"
            >
              Início
            </a>
            <a
              href="#importados"
              onClick={(e) => handleNavClick(e, '#importados')}
              className="text-blue-300 hover:text-white py-2 text-base font-medium border-b border-white/5"
            >
              Produtos Importados
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleNavClick(e, '#servicos')}
              className="text-slate-200 hover:text-white py-2 text-base font-medium border-b border-white/5"
            >
              Assistência Técnica
            </a>
            <a
              href="#sobre"
              onClick={(e) => handleNavClick(e, '#sobre')}
              className="text-slate-200 hover:text-white py-2 text-base font-medium border-b border-white/5"
            >
              Sobre Nós
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="text-slate-200 hover:text-white py-2 text-base font-medium border-b border-white/5"
            >
              Contato
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#1E3A8A] rounded-md shadow-lg shadow-blue-900/40"
              >
                Entrar em contato
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
