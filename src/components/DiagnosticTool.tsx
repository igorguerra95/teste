import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Activity, Clock, ShieldCheck, AlertCircle, ShoppingBag, Wrench } from 'lucide-react';

interface DiagnosticToolProps {
  onPreFillContact: (itemOrDevice: string, needType: string) => void;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({ onPreFillContact }) => {
  const [mode, setMode] = useState<'compra' | 'conserto'>('compra');
  
  // Compra state
  const [selectedProductType, setSelectedProductType] = useState('iphone');
  const [paymentOption, setPaymentOption] = useState('vista_pix');

  // Conserto state
  const [device, setDevice] = useState<'smartphone' | 'notebook' | 'outro'>('smartphone');
  const [symptom, setSymptom] = useState<string>('tela');

  const productTypes = [
    { id: 'iphone', label: 'iPhone Novo Lacrado' },
    { id: 'macbook', label: 'MacBook / Mac Mini' },
    { id: 'audio', label: 'AirPods / Fones' },
    { id: 'console', label: 'PlayStation / Games' },
  ];

  const devicesList = [
    { id: 'smartphone', label: 'Celular / iPhone' },
    { id: 'notebook', label: 'MacBook / Notebook' },
    { id: 'outro', label: 'Console / Outro' },
  ] as const;

  const symptomsList = [
    { id: 'tela', label: 'Tela Quebrada / Sem Imagem' },
    { id: 'bateria', label: 'Bateria Descarregando Rápido' },
    { id: 'placa', label: 'Aparelho Não Liga / Travou' },
    { id: 'limpeza', label: 'Aquecendo / Lentidão' },
  ];

  const handleAction = () => {
    if (mode === 'compra') {
      const prodName = productTypes.find(p => p.id === selectedProductType)?.label || 'Produto Importado';
      onPreFillContact(prodName, 'compra');
    } else {
      const devName = devicesList.find(d => d.id === device)?.label || 'Dispositivo';
      const sympName = symptomsList.find(s => s.id === symptom)?.label || 'Defeito';
      onPreFillContact(`${devName} - ${sympName}`, 'assistencia');
    }
  };

  return (
    <div className="py-16 bg-[#080d1a] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            <span>Simulador Rápido</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Importados & Assistência</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            O que você deseja resolver hoje?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Escolha se deseja adquirir um produto importado com as melhores condições ou consultar o conserto para o seu equipamento.
          </p>
        </div>

        {/* Mode Switch */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-900 hairline-border rounded-lg">
            <button
              type="button"
              onClick={() => setMode('compra')}
              className={`px-5 py-2.5 text-xs font-semibold rounded-md transition-all flex items-center gap-2 ${
                mode === 'compra'
                  ? 'bg-[#1E3A8A] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Quero Comprar Importado</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('conserto')}
              className={`px-5 py-2.5 text-xs font-semibold rounded-md transition-all flex items-center gap-2 ${
                mode === 'conserto'
                  ? 'bg-[#1E3A8A] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Preciso de Assistência / Conserto</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-[#0f172a]/70 p-6 rounded-xl hairline-border space-y-6">
            {mode === 'compra' ? (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    1. Categoria Desejada
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {productTypes.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelectedProductType(p.id)}
                        className={`py-2.5 px-3 text-xs font-medium rounded-md transition-all text-left ${
                          selectedProductType === p.id
                            ? 'bg-[#1E3A8A] text-white shadow-sm border border-blue-400/40'
                            : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/5 hover:border-white/10'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    2. Condição de Pagamento Preferida
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentOption('vista_pix')}
                      className={`py-2.5 px-3 text-xs font-medium rounded-md transition-all text-left ${
                        paymentOption === 'vista_pix'
                          ? 'bg-[#1E3A8A] text-white shadow-sm border border-blue-400/40'
                          : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/5'
                      }`}
                    >
                      À Vista no PIX (Melhor Preço)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentOption('cartao_troca')}
                      className={`py-2.5 px-3 text-xs font-medium rounded-md transition-all text-left ${
                        paymentOption === 'cartao_troca'
                          ? 'bg-[#1E3A8A] text-white shadow-sm border border-blue-400/40'
                          : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/5'
                      }`}
                    >
                      Cartão até 18x ou Aparelho na Troca
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    1. Equipamento para Conserto
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {devicesList.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setDevice(d.id)}
                        className={`py-2.5 px-2 text-xs font-medium rounded-md transition-all text-center ${
                          device === d.id
                            ? 'bg-[#1E3A8A] text-white shadow-sm border border-blue-400/40'
                            : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/5'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    2. Defeito Apresentado
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {symptomsList.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSymptom(s.id)}
                        className={`py-2 px-3 text-xs font-medium rounded-md transition-all text-left ${
                          symptom === s.id
                            ? 'bg-[#1E3A8A] text-white shadow-sm border border-blue-400/40'
                            : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/5'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Result Card */}
          <div className="lg:col-span-6 bg-[#0f172a] p-6 rounded-xl hairline-border-blue flex flex-col justify-between shadow-xl shadow-blue-950/20">
            <div>
              <div className="flex items-center justify-between text-xs text-blue-400 pb-3 border-b border-white/10 font-mono">
                <span className="font-semibold uppercase tracking-wider">
                  {mode === 'compra' ? 'Disponibilidade de Estoque' : 'Estimativa de Reparo'}
                </span>
                <span className="text-emerald-400">
                  {mode === 'compra' ? 'Pronta Entrega' : '90 Dias de Garantia'}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mt-4 tracking-tight">
                {mode === 'compra'
                  ? 'Aparelhos Novos Lacrados com Garantia Global'
                  : 'Serviço Ágil com Peças Homologadas de Padrão Original'}
              </h4>

              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                {mode === 'compra'
                  ? 'Garantimos procedência comprovada com número de série consultável na hora, nota/recibo e opções de parcelamento facilitado ou desconto à vista.'
                  : 'Seu equipamento é inspecionado na entrada com teste de funcionamento e reparado com rapidez por técnicos experientes.'}
              </p>

              <div className="mt-5 space-y-2 text-xs text-slate-300 bg-slate-900/90 p-3.5 rounded-lg hairline-border">
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-slate-500 font-medium">Prazo:</span>
                  <span className="text-blue-300 font-semibold font-mono text-[11px]">
                    {mode === 'compra' ? 'Retirada Imediata / Envio no Dia' : 'Express (40 min a mesmo dia)'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-slate-500 font-medium">Condição:</span>
                  <span className="text-slate-200 font-mono text-[11px]">
                    {mode === 'compra' ? '100% Original e Lacrado' : 'Peças de Primeira Linha'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-slate-500 font-medium">Segurança:</span>
                  <span className="text-emerald-400 font-medium text-[11px]">Garantia Real e Suporte</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleAction}
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-blue-700 active:scale-[0.98] rounded-md transition-all shadow-lg shadow-blue-900/40 flex items-center justify-center gap-1.5"
              >
                <span>{mode === 'compra' ? 'Consultar Valores no WhatsApp' : 'Solicitar Orçamento de Conserto'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
