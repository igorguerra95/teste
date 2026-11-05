import React from 'react';
import { PROCESS_STEPS } from '../data/mockData';
import { ShoppingBag, Search, Wrench, ShieldCheck } from 'lucide-react';

export const Process: React.FC = () => {
  const stepIcons = [ShoppingBag, Search, Wrench, ShieldCheck];

  return (
    <section className="py-20 bg-[#0a0f1d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
            <span>Como Trabalhamos</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Segurança do Início ao Fim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Transparência total na compra e no conserto.
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Seja para escolher seu novo produto importado ou para deixar seu aparelho aos cuidados do nosso time técnico, nosso processo é simples, claro e documentado.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const IconComponent = stepIcons[index % stepIcons.length];
            return (
              <div
                key={step.step}
                className="glass-card rounded-xl p-6 relative flex flex-col justify-between hairline-border hover:border-blue-500/30 transition-all duration-200"
              >
                <div>
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-blue-400 tracking-tight">
                      {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-md bg-blue-950/60 hairline-border-blue flex items-center justify-center text-blue-400">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Protocol footer */}
                <div className="mt-6 pt-3 border-t border-white/5">
                  <span className="text-[11px] font-mono text-slate-400 block leading-tight">
                    {step.protocol}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
