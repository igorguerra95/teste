import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, ShoppingBag, Wrench, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/images/hero_importados_assistencia_1793878627591.jpg';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else onOpenQuoteModal();
  };

  const scrollToImportados = () => {
    const el = document.getElementById('importados');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.getElementById('servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#080d1a]">
      {/* Background ambient radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] radial-glow pointer-events-none opacity-60" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] radial-glow-secondary pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Copy & Direct Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Clean metadata without pill boxes */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-400 tracking-wide uppercase">
              <span>Produtos Importados 100% Originais</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Assistência Técnica Especializada</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Garantia & Pronta Entrega</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              Venda de produtos importados originais e assistência técnica especializada.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              O seu lugar definitivo em tecnologia: iPhones, MacBooks, consoles e acessórios importados novos e lacrados, além de conserto profissional para celulares e computadores com garantia de 90 dias.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToContact}
                className="px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-blue-700 active:scale-[0.98] rounded-md transition-all duration-200 shadow-xl shadow-blue-950/60 flex items-center gap-2"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToImportados}
                className="px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 hairline-border rounded-md transition-all duration-200 flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-blue-400" />
                <span>Ver Produtos Importados</span>
              </button>

              <button
                onClick={scrollToServices}
                className="px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white hover:underline transition-all duration-200 flex items-center gap-1.5"
              >
                <Wrench className="w-4 h-4 text-slate-400" />
                <span>Serviços de Conserto</span>
              </button>
            </div>

            {/* Technical trust markers */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="text-slate-400 text-xs font-medium">Produtos Originais</div>
                <div className="text-white font-semibold text-lg tracking-tight tabular-nums mt-0.5">100% Genuínos</div>
                <div className="text-slate-500 text-[11px]">lacrados de fábrica</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs font-medium">Garantia Formal</div>
                <div className="text-white font-semibold text-lg tracking-tight tabular-nums mt-0.5">90 Dias</div>
                <div className="text-slate-500 text-[11px]">consertos e semi-novos</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs font-medium">Pronta Entrega</div>
                <div className="text-white font-semibold text-lg tracking-tight tabular-nums mt-0.5">Imediata</div>
                <div className="text-slate-500 text-[11px]">ou envio express</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs font-medium">Conserto Express</div>
                <div className="text-white font-semibold text-lg tracking-tight tabular-nums mt-0.5">40–60 Min</div>
                <div className="text-slate-500 text-[11px]">telas e baterias</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High Quality Asset Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-xl overflow-hidden hairline-border bg-slate-950 shadow-2xl shadow-black/80 group">
              <img
                src={heroImage}
                alt="Showcase de produtos importados e bancada de assistência técnica especializada"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center filter brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              
              {/* Overlay gradient for contrast and high-end feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/20 to-transparent pointer-events-none" />

              {/* Technical Inspection Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#0b1329]/90 backdrop-blur-md hairline-border border-white/10 text-xs text-slate-300">
                <div className="flex items-center justify-between font-mono text-[11px] text-blue-400 mb-1">
                  <span className="font-semibold uppercase tracking-wider">Catálogo Ativo & Bancada</span>
                  <span className="text-emerald-400 font-mono">Disponível</span>
                </div>
                <p className="text-slate-200 text-xs leading-snug">
                  Smartphones importados lacrados a pronta entrega e técnicos qualificados para consertos no mesmo dia com peças de padrão original.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
