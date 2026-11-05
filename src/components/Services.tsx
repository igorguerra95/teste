import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { DeviceCategory, ServiceItem } from '../types';
import { ArrowUpRight, Cpu, Clock, ShieldCheck, Wrench, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Todos os Serviços (8)' },
    { id: 'smartphone', label: 'Celulares & Telas' },
    { id: 'macbook', label: 'MacBooks & Notebooks' },
    { id: 'desktop', label: 'Desktops & Upgrades' },
    { id: 'outro', label: 'Consoles & Outros' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory || (activeCategory === 'macbook' && (s.category === 'macbook' || s.category === 'notebook')));

  return (
    <section id="servicos" className="py-24 bg-[#080d1a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
            <span>Assistência Técnica Especializada</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Reparo Ágil com Peças Originais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
            Conserto profissional para celulares, computadores e consoles.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Seja para uma troca expressa de tela ou bateria no mesmo dia, ou para diagnósticos avançados em placa e recuperação de aparelhos, garantimos serviço transparente com 90 dias de garantia.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0a0f1d] hairline-border rounded-lg max-w-fit mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-all duration-150 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#1E3A8A] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 8 Technical Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover rounded-xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Top card metadata */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-white/5">
                  <span className="font-mono text-blue-400 font-semibold">{service.number}</span>
                  <span className="font-mono text-[11px] text-slate-500">{service.turnaroundTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Technical Bullet Items */}
                <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                  {service.technicalDetails.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer with warranty & Action Button */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="text-[11px] text-slate-400 mb-3">
                  <span className="text-slate-500 block mb-0.5 font-medium">Garantia:</span>
                  <span className="text-slate-200 truncate block font-mono text-[11px]">{service.warranty}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-[#1E3A8A] active:scale-[0.98] hairline-border rounded-md transition-all duration-200 flex items-center justify-center gap-1.5 group-hover:bg-[#1E3A8A]"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <span>Orçamento prévio sem compromisso</span>
          <span aria-hidden="true" className="mx-2">·</span>
          <span>Peças com procedência e padrão original</span>
          <span aria-hidden="true" className="mx-2">·</span>
          <span>Garantia legal e contratual de 90 dias</span>
        </div>

      </div>
    </section>
  );
};
