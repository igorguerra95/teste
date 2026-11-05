import React from 'react';
import { motion } from 'motion/react';
import showcaseImage from '../assets/images/showcase_importados_1793878639912.jpg';
import { STATS_DATA, COMPANY_INFO } from '../data/mockData';
import { Shield, Sparkles, Cpu, Award, Zap, CheckCircle2, ShoppingBag, Wrench } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#080d1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story & Showcase Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Showcase photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden hairline-border bg-slate-950 shadow-2xl group">
              <img
                src={showcaseImage}
                alt="Showcase de produtos importados lacrados da Apple e marcas premium"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center filter brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#0b1329]/90 backdrop-blur-md hairline-border border-white/10 text-xs">
                <div className="flex items-center justify-between text-blue-400 font-mono text-[11px] mb-1">
                  <span>SHOWCASE OFICIAL</span>
                  <span className="text-emerald-400">100% GENUÍNO</span>
                </div>
                <p className="text-slate-300 text-xs leading-snug">
                  Produtos novos lacrados com número de série consultável e procedência comprovada para sua total tranquilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Authoritative Story */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase">
              <span>Sobre a Assistência Técnica & Importados</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Qualidade & Procedência</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              O ecossistema completo para quem exige o melhor em tecnologia.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Unimos em um só lugar o que o mercado sempre separou: a comodidade de comprar produtos importados de ponta com garantia real e o suporte de uma assistência técnica qualificada com peças originais e técnicos de bancada.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Aqui você não fica desamparado após a compra. Seja para adquirir seu novo iPhone lacrado, fazer um upgrade veloz no seu notebook ou trocar a tela quebrada do seu aparelho com peças originais, entregamos rapidez, preço justo e garantia formal de 90 dias com certificado.
            </p>

            {/* Core commitments */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 hairline-border">
                <ShoppingBag className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Importados 100% Originais</strong>
                  Aparelhos lacrados com garantia de fábrica e opções semi-novas Grade A+.
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 hairline-border">
                <Wrench className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Assistência Especializada</strong>
                  Conserto no mesmo dia para telas e baterias, além de reparos complexos em placa.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Numerical Stats Bar */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS_DATA.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-mono tabular-nums">
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                <div className="mt-2 text-sm font-semibold text-blue-400">
                  {stat.label}
                </div>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
