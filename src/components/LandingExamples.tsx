import React, { useState } from 'react';
import { Monitor, Palette, Eye, ArrowRight, Scale, BookOpen, ShoppingCart } from 'lucide-react';
import LawyerLanding from './LawyerLanding';
import TeacherLanding from './TeacherLanding';
import ProductLanding from './ProductLanding';

const LandingExamples = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const examples = [
    {
      id: 'lawyer',
      title: 'Advocacia Premium',
      description: 'Layout sóbrio e profissional para escritórios de advocacia',
      colors: ['#0f172a', '#b45309', '#ffffff'],
      colorNames: ['Navy Blue', 'Gold', 'White'],
      features: ['Formulário de consulta', 'Áreas de atuação', 'Depoimentos', 'Contato 24h'],
      psychology: 'Transmite confiança, autoridade e credibilidade jurídica',
      icon: Scale,
      component: LawyerLanding
    },
    {
      id: 'teacher',
      title: 'Educação Online',
      description: 'Design dinâmico e interativo para professores e cursos',
      colors: ['#1e293b', '#f59e0b', '#f1f5f9'],
      colorNames: ['Charcoal', 'Amber', 'Light Gray'],
      features: ['Cursos em destaque', 'Depoimentos de alunos', 'Estatísticas', 'Cadastro gratuito'],
      psychology: 'Combina profissionalismo com acessibilidade e dinamismo',
      icon: BookOpen,
      component: TeacherLanding
    },
    {
      id: 'product',
      title: 'Produto Premium',
      description: 'Foco em benefícios e conversão para produtos digitais',
      colors: ['#0f172a', '#f59e0b', '#1f2937'],
      colorNames: ['Dark Navy', 'Gold', 'Dark Gray'],
      features: ['Planos de preço', 'Urgência e escassez', 'Garantias', 'Depoimentos'],
      psychology: 'Cria senso de exclusividade, urgência e valor premium',
      icon: ShoppingCart,
      component: ProductLanding
    }
  ];

  if (activeDemo) {
    const example = examples.find(ex => ex.id === activeDemo);
    if (example) {
      const Component = example.component;
      return (
        <div className="min-h-screen">
          <div className="fixed top-4 left-4 z-50">
            <button
              onClick={() => setActiveDemo(null)}
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
            >
              ← Voltar aos Exemplos
            </button>
          </div>
          <Component />
        </div>
      );
    }
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">
            Demonstrações de <span className="text-amber-600">Landing Pages</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Veja exemplos reais de landing pages otimizadas para diferentes nichos, 
            cada uma com paleta de cores estratégica para maximizar conversões
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {examples.map((example, index) => {
            const IconComponent = example.icon;
            return (
              <div
                key={example.id}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Preview Image */}
                <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                      <IconComponent className="w-16 h-16 text-white mx-auto mb-4" />
                      <div className="text-white text-center font-bold text-lg">
                        {example.title}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setActiveDemo(example.id)}
                      className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-xl transition-all hover:scale-110 shadow-lg"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{example.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{example.description}</p>

                  {/* Paleta de Cores */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center">
                      <Palette className="w-4 h-4 mr-2" />
                      Paleta de Cores
                    </h4>
                    <div className="flex space-x-2 mb-3">
                      {example.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-8 h-8 rounded-lg shadow-sm border border-slate-200"
                          style={{ backgroundColor: color }}
                          title={example.colorNames[idx]}
                        ></div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 italic">{example.psychology}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-700 mb-3">Principais Elementos</h4>
                    <ul className="space-y-2">
                      {example.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setActiveDemo(example.id)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center group"
                  >
                    <Monitor className="w-5 h-5 mr-2" />
                    Ver Demonstração Completa
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Paleta de Cores Detalhada */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-10">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Psicologia das Cores para Conversão
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-900 rounded-2xl mx-auto mb-4 shadow-lg"></div>
              <h4 className="font-bold text-slate-900 mb-2">Azul-marinho / Preto</h4>
              <p className="text-sm text-slate-600">
                Transmite confiança, autoridade e profissionalismo. 
                Ideal para áreas jurídicas e corporativas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-2xl mx-auto mb-4 shadow-lg"></div>
              <h4 className="font-bold text-slate-900 mb-2">Dourado / Âmbar</h4>
              <p className="text-sm text-slate-600">
                Representa exclusividade, valor agregado e premium. 
                Perfeito para CTAs e elementos de destaque.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-500 rounded-2xl mx-auto mb-4 shadow-lg"></div>
              <h4 className="font-bold text-slate-900 mb-2">Cinza / Prata</h4>
              <p className="text-sm text-slate-600">
                Estabilidade, sobriedade e tecnologia. 
                Excelente para fundos neutros e contraste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingExamples;