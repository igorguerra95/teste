import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMPORTED_PRODUCTS } from '../data/mockData';
import { ImportedProduct } from '../types';
import { ArrowUpRight, Check, Sparkles, Shield, Tag } from 'lucide-react';

interface ImportedProductsProps {
  onSelectProduct: (product: ImportedProduct) => void;
}

export const ImportedProductsSection: React.FC<ImportedProductsProps> = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Importados' },
    { id: 'apple', label: 'Linha Apple' },
    { id: 'smartphones', label: 'Smartphones & Semi-Novos' },
    { id: 'audio', label: 'Áudio & Fones' },
    { id: 'notebooks', label: 'Notebooks' },
    { id: 'acessorios', label: 'Consoles & Acessórios' },
  ];

  const filtered = activeTab === 'all'
    ? IMPORTED_PRODUCTS
    : IMPORTED_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="importados" className="py-24 bg-[#0a0f1d] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
            <span>Catálogo Exclusivo</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Importação Direta & Homologada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
            Produtos importados 100% originais com garantia e suporte.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Trabalhamos com os melhores lançamentos do mercado internacional a pronta entrega. Aparelhos novos lacrados com garantia global ou semi-novos Grade A+ criteriosamente inspecionados.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#080d1a] hairline-border rounded-lg max-w-fit mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-all duration-150 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#1E3A8A] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="glass-card glass-card-hover rounded-xl p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Top card metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-3 border-b border-white/5">
                    <span className="font-mono text-[11px] text-blue-400 font-semibold uppercase">
                      {product.condition}
                    </span>
                    <span className="font-mono text-[11px] text-emerald-400">
                      {product.availability}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {product.name}
                  </h3>

                  {/* Highlight */}
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {product.highlight}
                  </p>

                  {/* Specs list */}
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer and CTA */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="text-[11px] text-slate-400 mb-3">
                    <span className="text-slate-500 block mb-0.5 font-medium">Garantia:</span>
                    <span className="text-slate-200 block font-mono text-[11px]">{product.warranty}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-[#1E3A8A] active:scale-[0.98] hairline-border rounded-md transition-all duration-200 flex items-center justify-center gap-1.5 group-hover:bg-[#1E3A8A]"
                  >
                    <span>Consultar Preço & Estoque</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Trade-in footnote */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900/60 hairline-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            <span className="text-white font-bold block text-sm">
              Aceitamos seu usado como parte do pagamento!
            </span>
            <span className="text-slate-400">
              Traga seu iPhone, smartphone ou notebook antigo para avaliação na hora e saia com seu importado novo.
            </span>
          </div>
          <button
            type="button"
            onClick={() => onSelectProduct({
              id: 'trade-in',
              name: 'Avaliação de Aparelho Usado na Troca',
              category: 'smartphones',
              condition: 'Semi-Novo Grade A+',
              highlight: 'Avaliação justa e rápida do seu dispositivo para entrada em um produto novo.',
              specs: ['Avaliação técnica presencial', 'Desconto imediato na compra', 'Transferência segura de dados'],
              warranty: 'Suporte completo',
              availability: 'Pronta Entrega'
            })}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-blue-700 rounded-md transition-all whitespace-nowrap shrink-0 shadow-md shadow-blue-900/40"
          >
            Avaliar meu usado
          </button>
        </div>

      </div>
    </section>
  );
};
