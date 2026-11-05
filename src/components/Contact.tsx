import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  AlertCircle,
  Copy,
  Check,
  ShoppingBag,
  Wrench
} from 'lucide-react';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ 
  initialSubject = '' 
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interestType, setInterestType] = useState<'compra' | 'assistencia' | 'ambos'>('compra');
  const [itemOrDevice, setItemOrDevice] = useState(initialSubject || '');
  const [details, setDetails] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [protocolNumber, setProtocolNumber] = useState('');
  const [copied, setCopied] = useState(false);

  // Phone masking
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);
    
    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    }
    setPhone(val);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Por favor, informe seu nome completo.';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Por favor, informe um número de WhatsApp válido com DDD.';
    }
    if (!details.trim() && !itemOrDevice.trim()) {
      errs.details = 'Informe o produto que deseja ou o defeito do seu aparelho.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const code = `AST-${randomCode}`;
    setProtocolNumber(code);
    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const typeLabel = interestType === 'compra' 
      ? '🛍️ Compra de Produto Importado' 
      : interestType === 'assistencia' 
      ? '🛠️ Assistência Técnica / Conserto' 
      : '🛍️🛠️ Compra de Importado + Assistência';
    
    return encodeURIComponent(
      `Olá, ${COMPANY_INFO.name}! Gostaria de atendimento.\n\n` +
      `📋 Protocolo de Atendimento: ${protocolNumber}\n` +
      `👤 Nome: ${name}\n` +
      `📱 WhatsApp: ${phone}\n` +
      `🎯 Tipo de Interesse: ${typeLabel}\n` +
      `📦 Item ou Dispositivo: ${itemOrDevice || 'Não especificado'}\n` +
      `📝 Mensagem/Dúvida: ${details || 'Consultar valores e disponibilidade'}\n\n` +
      `Aguardo retorno!`
    );
  };

  const handleCopyProtocol = () => {
    navigator.clipboard.writeText(protocolNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-24 bg-[#0a0f1d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
            <span>Fale com a Nossa Equipe</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Atendimento Rápido</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Compre seu importado ou solicite seu conserto.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Preencha seus dados para receber valores atualizados de estoque, simulações de troca de usado ou orçamento prévio para o conserto do seu celular e computador.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#080d1a] p-6 sm:p-8 rounded-xl hairline-border shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-blue-950/80 hairline-border-blue rounded-full flex items-center justify-center mx-auto text-blue-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
                    Atendimento Pré-Registrado
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Protocolo: <span className="text-blue-400 font-mono">{protocolNumber}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                    Conecte-se agora via WhatsApp para verificar disponibilidade em tempo real ou tirar dúvidas com nossos especialistas.
                  </p>
                </div>

                {/* Summary Box */}
                <div className="bg-slate-900/80 p-4 rounded-lg hairline-border text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Cliente:</span>
                    <span className="text-slate-200 font-medium">{name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Interesse:</span>
                    <span className="text-slate-200 font-medium capitalize">{interestType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Item informado:</span>
                    <span className="text-slate-200 font-medium truncate max-w-[200px]">{itemOrDevice || 'Geral'}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] rounded-md transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Abrir no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyProtocol}
                    className="py-3 px-4 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hairline-border rounded-md transition-colors flex items-center justify-center gap-1.5"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copiado!' : 'Copiar Código'}</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setPhone('');
                    setItemOrDevice('');
                    setDetails('');
                  }}
                  className="text-xs text-slate-500 hover:text-slate-300 underline pt-2 block mx-auto"
                >
                  Enviar outra solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Interest Type Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Qual é o seu objetivo?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setInterestType('compra')}
                      className={`py-2 px-3 text-xs font-medium rounded-md transition-all flex items-center justify-center gap-1.5 ${
                        interestType === 'compra'
                          ? 'bg-[#1E3A8A] text-white border border-blue-400/40 shadow-sm'
                          : 'bg-slate-900 text-slate-400 hover:text-white hairline-border'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Comprar Importado</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setInterestType('assistencia')}
                      className={`py-2 px-3 text-xs font-medium rounded-md transition-all flex items-center justify-center gap-1.5 ${
                        interestType === 'assistencia'
                          ? 'bg-[#1E3A8A] text-white border border-blue-400/40 shadow-sm'
                          : 'bg-slate-900 text-slate-400 hover:text-white hairline-border'
                      }`}
                    >
                      <Wrench className="w-3.5 h-3.5" />
                      <span>Assistência Técnica</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setInterestType('ambos')}
                      className={`py-2 px-3 text-xs font-medium rounded-md transition-all flex items-center justify-center gap-1.5 ${
                        interestType === 'ambos'
                          ? 'bg-[#1E3A8A] text-white border border-blue-400/40 shadow-sm'
                          : 'bg-slate-900 text-slate-400 hover:text-white hairline-border'
                      }`}
                    >
                      <span>Ambos / Troca</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Eduardo Silveira"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md bg-slate-900/90 text-white placeholder-slate-500 hairline-border focus:outline-none focus:border-blue-500 transition-colors ${
                        errors.name ? 'border-rose-500/80' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-rose-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="(00) 00000-0000"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-md bg-slate-900/90 text-white placeholder-slate-500 hairline-border focus:outline-none focus:border-blue-500 transition-colors ${
                        errors.phone ? 'border-rose-500/80' : ''
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-rose-400">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Product / Device */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Produto que procura ou Modelo do seu aparelho
                  </label>
                  <input
                    type="text"
                    value={itemOrDevice}
                    onChange={(e) => setItemOrDevice(e.target.value)}
                    placeholder="Ex: iPhone 16 Pro Max 256GB / Troca de Tela iPhone 13 / Reparo MacBook M1"
                    className="w-full px-3.5 py-2.5 text-sm rounded-md bg-slate-900/90 text-white placeholder-slate-500 hairline-border focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Details */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Detalhes, dúvidas ou defeito observado
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Conte o que precisa: cor de preferência, se possui aparelho para dar na troca, sintoma do defeito ou prazo desejado..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-md bg-slate-900/90 text-white placeholder-slate-500 hairline-border focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  {errors.details && (
                    <p className="mt-1 text-[11px] text-rose-400">{errors.details}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-blue-700 active:scale-[0.98] rounded-md transition-all shadow-xl shadow-blue-950/60 flex items-center justify-center gap-2"
                  >
                    <span>Entrar em contato</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Contact Details & Trust Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Official Contact Card */}
            <div className="bg-[#080d1a] p-6 sm:p-7 rounded-xl hairline-border space-y-5">
              <h3 className="text-base font-bold text-white tracking-tight pb-3 border-b border-white/5">
                Dados Oficiais de Atendimento
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 font-medium block">Telefone e WhatsApp</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                      className="text-white hover:text-blue-300 font-mono font-medium transition-colors text-sm"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 font-medium block">Endereço da Loja & Assistência</span>
                    <span className="text-white font-medium">
                      {COMPANY_INFO.address}
                    </span>
                    <span className="text-slate-400 block mt-0.5">
                      Showroom presencial com estoque a pronta entrega e balcão de assistência técnica.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 font-medium block">Horário de Funcionamento</span>
                    <span className="text-slate-300 font-mono">
                      {COMPANY_INFO.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Olá, gostaria de consultar produtos importados ou assistência técnica.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chamar no WhatsApp Direto</span>
                </a>
              </div>
            </div>

            {/* Guarantees */}
            <div className="p-5 rounded-xl bg-slate-900/40 hairline-border text-xs text-slate-300 space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Nossas Garantias de Loja</span>
              </div>
              <ul className="space-y-1.5 text-slate-400 text-xs">
                <li>• Produtos importados novos lacrados com número de série consultável</li>
                <li>• Avaliação do seu usado na hora como entrada</li>
                <li>• Assistência técnica com 90 dias de garantia e peças homologadas</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
