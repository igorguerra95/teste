/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImportedProductsSection } from './components/ImportedProducts';
import { Services } from './components/Services';
import { DiagnosticTool } from './components/DiagnosticTool';
import { About } from './components/About';
import { Process } from './components/Process';
import { TestimonialsAndFaq } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuoteModal } from './components/QuoteModal';
import { ServiceItem, ImportedProduct } from './types';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState('');
  
  // State for prefilling contact form from the diagnostic tool
  const [prefilledSubject, setPrefilledSubject] = useState('');

  const handleOpenModal = (name?: string) => {
    setSelectedItemName(name || '');
    setIsModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    handleOpenModal(`Serviço: ${service.title}`);
  };

  const handleSelectProduct = (product: ImportedProduct) => {
    handleOpenModal(`Produto Importado: ${product.name}`);
  };

  const handlePreFillContact = (itemOrDevice: string, needType: string) => {
    setPrefilledSubject(itemOrDevice);
    
    // Smooth scroll to contact form
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenModal(itemOrDevice);
    }
  };

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 selection:bg-[#1E3A8A] selection:text-white flex flex-col">
      {/* Fixed Header */}
      <Header onOpenQuoteModal={handleOpenModal} />

      <main className="flex-1">
        {/* 1. Início (Hero Section com Venda de Importados e Assistência) */}
        <Hero onOpenQuoteModal={handleOpenModal} />

        {/* 2. Produtos Importados (Catálogo com Apple, Smartphones, Áudio, Notebooks e Consoles) */}
        <ImportedProductsSection onSelectProduct={handleSelectProduct} />

        {/* 3. Assistência Técnica Especializada (Celulares, Notebooks, MacBooks e Consoles) */}
        <Services onSelectService={handleSelectService} />

        {/* Simulador Interativo: Compra de Importado ou Conserto */}
        <DiagnosticTool onPreFillContact={handlePreFillContact} />

        {/* 4. Sobre Nós (Estrutura, Procedência e Garantia) */}
        <About />

        {/* Como Trabalhamos (4 Etapas Transparentes) */}
        <Process />

        {/* Prova Social & Dúvidas Frequentes */}
        <TestimonialsAndFaq />

        {/* 5. Contato (Formulário Integrado para Compra e Assistência + WhatsApp) */}
        <Contact 
          initialSubject={prefilledSubject}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Fast Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultServiceName={selectedItemName}
      />
    </div>
  );
}
