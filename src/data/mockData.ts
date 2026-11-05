import { ServiceItem, StatItem, ProcessStep, TestimonialItem, ImportedProduct } from '../types';

export const COMPANY_INFO = {
  name: 'Assistência Técnica & Importados',
  legalName: 'Assistência Técnica Especializada & Produtos Importados',
  slogan: 'Produtos importados 100% originais com garantia e assistência técnica especializada.',
  subheadline: 'Smartphones, MacBooks, consoles e acessórios importados a pronta entrega, com suporte técnico de bancada e garantia de 90 dias.',
  phone: '(00) 00000-0000',
  whatsappRaw: '5500000000000',
  address: 'SEU ENDEREÇO AQUI',
  hours: 'Não informado',
  email: 'contato@assistenciatecnica.com.br',
  warrantyDays: 90,
};

export const IMPORTED_PRODUCTS: ImportedProduct[] = [
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro & Pro Max',
    category: 'apple',
    condition: 'Novo Lacrado',
    highlight: 'Importado direto dos EUA, homologado e com garantia global Apple de 1 ano.',
    specs: ['Chip A18 Pro', 'Câmera Fusion 48MP', 'Acabamento em Titânio', 'Disponível em 128GB a 1TB'],
    warranty: 'Garantia Mundial Apple (1 Ano)',
    availability: 'Pronta Entrega'
  },
  {
    id: 'macbook-pro-m3',
    name: 'MacBook Pro & Air Apple Silicon',
    category: 'apple',
    condition: 'Novo Lacrado',
    highlight: 'Configurações oficiais com layout americano ou internacional, máxima performance e autonomia.',
    specs: ['Processadores M3, M3 Pro e M3 Max', 'Tela Liquid Retina XDR', 'Bateria para até 22 horas', 'Memória unificada até 128GB'],
    warranty: 'Garantia Mundial Apple (1 Ano)',
    availability: 'Pronta Entrega'
  },
  {
    id: 'galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra 5G',
    category: 'smartphones',
    condition: 'Novo Lacrado',
    highlight: 'Linha premium com recursos de inteligência artificial Galaxy AI nativos e S-Pen inclusa.',
    specs: ['Snapdragon 8 Gen 3 for Galaxy', 'Sensor principal de 200MP', 'Estrutura em Titânio', 'Display AMOLED 2600 nits'],
    warranty: 'Garantia da Loja + Fabricante',
    availability: 'Pronta Entrega'
  },
  {
    id: 'airpods-pro-max',
    name: 'AirPods Pro 2 & AirPods Max',
    category: 'audio',
    condition: 'Novo Lacrado',
    highlight: 'Áudio espacial imersivo com cancelamento ativo de ruído profissional, estojo MagSafe USB-C.',
    specs: ['Cancelamento Ativo de Ruído (ANC)', 'Modo Ambiente Adaptativo', 'Áudio Espacial Personalizado', 'Conector USB-C'],
    warranty: 'Garantia Oficial Apple',
    availability: 'Pronta Entrega'
  },
  {
    id: 'apple-watch-ultra',
    name: 'Apple Watch Ultra 2 & Series 10',
    category: 'apple',
    condition: 'Novo Lacrado',
    highlight: 'Caixa em titânio aeroespacial, GPS de dupla frequência e autonomia estendida para esportes extremos.',
    specs: ['Caixa de Titânio de 49mm', 'Tela de 3000 nits ultrabrilhante', 'Profundímetro e sensor de água', 'Bateria até 72 horas'],
    warranty: 'Garantia Oficial Apple',
    availability: 'Pronta Entrega'
  },
  {
    id: 'notebooks-dell-asus',
    name: 'Notebooks Dell XPS & Asus ROG',
    category: 'notebooks',
    condition: 'Novo Lacrado',
    highlight: 'Máquinas importadas de alta performance para arquitetura, edição pesada, programação e games.',
    specs: ['Intel Core i7/i9 e AMD Ryzen 9', 'GPUs NVIDIA RTX Série 40', 'Displays OLED 4K / QHD 240Hz', 'Teclados mecânicos/retroiluminados'],
    warranty: 'Garantia de 1 Ano',
    availability: 'Pronta Entrega'
  },
  {
    id: 'drones-dji-consoles',
    name: 'PlayStation 5 Slim & Drones DJI',
    category: 'acessorios',
    condition: 'Novo Lacrado',
    highlight: 'Equipamentos de última geração com todos os cabos, homologação e acessórios genuínos.',
    specs: ['PS5 com leitor de disco / Digital', 'Drones DJI Mini 4 Pro / Air 3', 'Vídeo em 4K HDR a 60fps', 'Sensores omnidirecionais'],
    warranty: 'Garantia com Suporte Técnico',
    availability: 'Pronta Entrega'
  },
  {
    id: 'iphones-seminovos-a-plus',
    name: 'Linha Semi-Novos Selecionados (Grade A+)',
    category: 'smartphones',
    condition: 'Semi-Novo Grade A+',
    highlight: 'Aparelhos 100% originais revisados na nossa bancada, sem peças trocadas e bateria saudável.',
    specs: ['Sem marcas de uso (impecáveis)', 'Bateria acima de 85% a 100%', 'Nunca abertos por terceiros', 'Testados em mais de 30 funções'],
    warranty: '90 Dias com Certificado',
    availability: 'Pronta Entrega'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'troca-telas-originais',
    number: '01',
    title: 'Troca de Telas & Displays Originais',
    shortDescription: 'Substituição com módulos genuínos preservando True Tone, biometria Face ID/Touch ID e taxa de 120Hz.',
    technicalDetails: [
      'Preservação e reprogramação do chip EEPROM',
      'Aplicação de fita de vedação contra poeira e respingos',
      'Fidelidade de cores sRGB / DCI-P3 garantida',
      'Substituição rápida no mesmo dia'
    ],
    equipment: 'Programador iCopy Plus & Prensa de Laminação OCA',
    turnaroundTime: 'A partir de 45 minutos',
    warranty: '90 dias com selo de integridade',
    category: 'smartphone'
  },
  {
    id: 'troca-bateria-original',
    number: '02',
    title: 'Substituição de Baterias Homologadas',
    shortDescription: 'Troca de bateria com saúde 100%, sem mensagens de erro e com reprogramação para leitura correta do sistema.',
    technicalDetails: [
      'Células de alta densidade energética com certificação',
      'Transplante de BMS para remoção de mensagem de peça desconhecida',
      'Calibração de ciclo completo de carga e descarga',
      'Descarte ecológico da bateria antiga'
    ],
    equipment: 'Aparelho de Solda Spot Portátil & Testador de Bateria',
    turnaroundTime: 'Express: 40 minutos',
    warranty: '90 dias de cobertura',
    category: 'smartphone'
  },
  {
    id: 'reparo-placas-smartphones',
    number: '03',
    title: 'Reparo em Placas & Microssoldagem',
    shortDescription: 'Conserto de aparelhos que não ligam, travados em loop, sem rede celular ou que sofreram curto na placa.',
    technicalDetails: [
      'Substituição de circuitos integrados (PMIC, Tristar, Hydra)',
      'Reconstrução de trilhas e componentes arrancados',
      'Reballing de memórias e processadores',
      'Localização de curtos com câmera térmica'
    ],
    equipment: 'Microscópio Trinocular 45x & Estação JBC',
    turnaroundTime: '24 a 48 horas',
    warranty: '90 dias com laudo técnico',
    category: 'smartphone'
  },
  {
    id: 'reparo-macbooks-notebooks',
    number: '04',
    title: 'Assistência em MacBooks & Notebooks',
    shortDescription: 'Reparo de placas-mãe Apple Silicon e notebooks corporativos, telas danificadas, teclados e conectores USB-C.',
    technicalDetails: [
      'Correção de linhas primárias de energia (19V / PPBUS)',
      'Troca de chips controladores Thunderbolt / Type-C',
      'Desoxidação completa após derramamento de líquidos',
      'Regravação de BIOS e reparo de circuitos de carga'
    ],
    equipment: 'Analisador Lógico USB-C PD & Osciloscópio Digital',
    turnaroundTime: '24 a 72 horas',
    warranty: '90 dias com relatório técnico',
    category: 'macbook'
  },
  {
    id: 'recuperacao-dados',
    number: '05',
    title: 'Recuperação de Dados e Arquivos',
    shortDescription: 'Resgate de fotos, contatos, conversas e documentos em celulares, SSDs e computadores que não ligam mais.',
    technicalDetails: [
      'Extração física mesmo com placa danificada',
      'Recuperação de dispositivos formatados ou com falha de boot',
      'Ambiente com estrito sigilo de dados (NDA)',
      'Entrega em mídia externa ou nuvem segura'
    ],
    equipment: 'Leitoras de NAND Flash & Estações Dedicadas',
    turnaroundTime: '2 a 4 dias úteis',
    warranty: 'Sigilo absoluto garantido',
    category: 'smartphone'
  },
  {
    id: 'limpeza-otimizacao-termica',
    number: '06',
    title: 'Limpeza Preventiva & Troca de Pasta Térmica',
    shortDescription: 'Manutenção completa para computadores, MacBooks e consoles evitando superaquecimento e lentidão.',
    technicalDetails: [
      'Aplicação de pastas térmicas premium de alta condutividade',
      'Desobstrução de coolers e dissipadores de cobre',
      'Troca de thermal pads ressecados',
      'Redução de até 18°C na temperatura sob carga pesada'
    ],
    equipment: 'Pasta Térmica Arctic Silver / Kryonaut & Soprador Antiestático',
    turnaroundTime: 'Mesmo dia (2 a 3 horas)',
    warranty: '90 dias com teste de temperatura',
    category: 'desktop'
  },
  {
    id: 'upgrades-ssd-memoria',
    number: '07',
    title: 'Upgrades de Armazenamento e Memória RAM',
    shortDescription: 'Deixe seu computador ou notebook até 10x mais veloz com instalação de SSD NVMe de alta velocidade e clonagem.',
    technicalDetails: [
      'Clonagem idêntica do sistema sem perder nenhum programa ou arquivo',
      'Instalação de SSDs NVMe PCIe de marcas de referência',
      'Expansão de memória RAM em Dual-Channel',
      'Otimização do sistema operacional para máxima agilidade'
    ],
    equipment: 'Dock Station de Clonagem Bit a Bit & Softwares Homologados',
    turnaroundTime: 'Express: 2 a 4 horas',
    warranty: 'Garantia das peças de até 1 ano',
    category: 'desktop'
  },
  {
    id: 'reparo-consoles-controles',
    number: '08',
    title: 'Conserto de Videogames & Controles',
    shortDescription: 'Reparo de PlayStation, Xbox e Nintendo Switch com falhas de HDMI, drift nos analógicos ou aquecimento.',
    technicalDetails: [
      'Substituição de portas HDMI com soldagem precisa',
      'Instalação de analógicos Hall Effect (anti-drift definitivo)',
      'Substituição de fonte interna e coolers',
      'Limpeza interna profunda e repaste térmico'
    ],
    equipment: 'Estação de Ar Quente Digital & Sensores Eletromagnéticos',
    turnaroundTime: '24 a 48 horas',
    warranty: '90 dias em peças e mão de obra',
    category: 'outro'
  }
];

export const STATS_DATA: StatItem[] = [
  {
    value: 100,
    prefix: '',
    suffix: '%',
    label: 'Produtos Originais',
    description: 'Aparelhos novos lacrados e revisados com procedência rigorosa.'
  },
  {
    value: 12500,
    prefix: '+',
    suffix: '',
    label: 'Clientes Atendidos',
    description: 'Vendas de importados entregues e consertos finalizados com sucesso.'
  },
  {
    value: 45,
    prefix: '',
    suffix: ' min',
    label: 'Troca Express de Telas',
    description: 'Substituição rápida e calibração no balcão sem demora.'
  },
  {
    value: 90,
    prefix: '',
    suffix: ' dias',
    label: 'Garantia com Suporte',
    description: 'Garantia real para consertos e suporte total na compra de importados.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Consultoria de Compra ou Recepção do Aparelho',
    description: 'Seja para adquirir um importado lacrado ou solicitar um conserto, nossa equipe entende exatamente a sua necessidade.',
    protocol: 'Atendimento Rápido e Sem Fila'
  },
  {
    step: '02',
    title: 'Triagem Técnica ou Apresentação do Produto',
    description: 'Inspeção preliminar detalhada para reparos ou demonstração das especificações e itens inclusos no produto importado.',
    protocol: 'Transparência de Especificação e Preço'
  },
  {
    step: '03',
    title: 'Execução Técnica com Peças Homologadas',
    description: 'O reparo é realizado em bancada profissional com ferramentas calibradas e peças originais, ou entrega imediata do importado.',
    protocol: 'Norma de Qualidade e Segurança'
  },
  {
    step: '04',
    title: 'Testes de Funcionamento & Emissão de Garantia',
    description: 'Todos os recursos são testados na sua frente, com emissão do termo de garantia de 90 dias e suporte contínuo.',
    protocol: 'Garantia de 90 Dias e Nota/Recibo'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Lucas Nogueira',
    role: 'Designer Gráfico',
    company: 'Studio Nogueira',
    device: 'iPhone 15 Pro Max 256GB + Troca de Bateria',
    issue: 'Buscava um aparelho novo lacrado e precisava trocar a bateria do antigo para revenda',
    solution: 'Compra do iPhone importado a pronta entrega e troca expressa da bateria em 40 minutos',
    quote: 'Comprei meu iPhone lacrado com preço imbatível e aproveitei para trocar a bateria do aparelho da minha esposa no mesmo lugar. Atendimento nota 10, tudo 100% original.',
    rating: 5
  },
  {
    id: '2',
    name: 'Fernanda Barreto',
    role: 'Advogada',
    company: 'Barreto & Associados',
    device: 'MacBook Air M2',
    issue: 'Tela quebrada após impacto no aeroporto com audiência no dia seguinte',
    solution: 'Substituição com tela original no mesmo dia mantendo True Tone e calibração',
    quote: 'Em outras assistências queriam 10 dias úteis para pedir a peça. Aqui resolveram na mesma tarde e ainda comprei um carregador MagSafe original importado que eu precisava com urgência.',
    rating: 5
  },
  {
    id: '3',
    name: 'Rodrigo Medeiros',
    role: 'Engenheiro de Software',
    company: 'Fintech Brasil',
    device: 'PlayStation 5 Slim + Upgrade SSD 2TB',
    issue: 'Compra de console importado e instalação de SSD de alta performance',
    solution: 'Console novo lacrado entregue configurado com SSD adicional instalado na hora',
    quote: 'Melhor lugar para quem gosta de tecnologia. Você compra o importado com procedência e tem a tranquilidade de saber que os caras entendem de conserto caso um dia precise.',
    rating: 5
  }
];

export const FAQS_DATA = [
  {
    question: 'Os produtos importados são novos e originais?',
    answer: 'Sim, trabalhamos exclusivamente com produtos 100% originais, novos e lacrados de fábrica (Apple, Samsung, Sony, DJI, etc.), com números de série verificáveis nos sites oficiais dos fabricantes. Também dispomos de opções semi-novas selecionadas (Grade A+) com bateria saudável e sem marcas de uso.'
  },
  {
    question: 'Qual é o prazo para conserto de celular e computadores?',
    answer: 'Serviços como troca de telas, baterias e conectores costumam ser concluídos no mesmo dia (entre 40 minutos a 2 horas). Reparos de placa que exigem microssoldagem ou desoxidação levam de 24 a 48 horas para testes rigorosos.'
  },
  {
    question: 'Como funciona a garantia tanto das compras quanto dos consertos?',
    answer: 'Para produtos importados novos da Apple, você conta com a garantia global oficial de 1 ano válida no Brasil. Para serviços de assistência técnica, oferecemos garantia legal e contratual de 90 dias com certificado impresso e suporte total.'
  },
  {
    question: 'Vocês pegam aparelho usado como parte do pagamento na compra de um novo?',
    answer: 'Sim! Avaliamos seu smartphone ou MacBook usado como entrada para a compra de um aparelho novo ou semi-novo importado. A avaliação é feita na hora de forma transparente.'
  },
  {
    question: 'Vocês realizam entrega de produtos importados ou recebem aparelhos por motoboy?',
    answer: 'Sim. Oferecemos entrega expressa via motoboy para compras de produtos importados e também coleta/devolução segura para aparelhos que necessitam de conserto.'
  }
];
