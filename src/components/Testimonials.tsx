import React, { useState } from 'react';
import { TESTIMONIALS_DATA, FAQS_DATA } from '../data/mockData';
import { Star, ChevronDown, CheckCircle } from 'lucide-react';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#080d1a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
            <span>Comprovações Reais</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Casos de Alta Complexidade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Quem confiou seu patrimônio tecnológico à nossa bancada.
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Profissionais e empresas que recuperaram seus dados críticos e aparelhos quando o mercado sugeriu a substituição total.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-xl p-6 flex flex-col justify-between hairline-border hover:border-blue-400/30 transition-all duration-200"
            >
              <div>
                {/* Device & Issue context */}
                <div className="p-3 bg-slate-900/90 rounded-lg hairline-border mb-4 text-xs">
                  <div className="text-blue-400 font-semibold font-mono text-[11px] truncate">
                    {t.device}
                  </div>
                  <div className="text-slate-400 text-[11px] mt-1 leading-snug">
                    <span className="text-slate-500 font-medium">Defeito:</span> {t.issue}
                  </div>
                  <div className="text-emerald-400 text-[11px] mt-1 leading-snug">
                    <span className="text-slate-500 font-medium">Solução:</span> {t.solution}
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xs text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white tracking-tight">{t.name}</div>
                  <div className="text-[11px] text-slate-400">{t.role} · {t.company}</div>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded">
                  Laudo Verificado
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto pt-8 border-t border-white/10">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Dúvidas Técnicas Frequentes
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Respostas diretas sobre prazos, peças, garantias e segurança de dados.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg bg-slate-900/60 hairline-border overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
