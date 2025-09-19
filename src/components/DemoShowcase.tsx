import React, { useState } from 'react';
import { Monitor, Palette, Users, BookOpen, ShoppingBag, Scale } from 'lucide-react';

const DemoShowcase = () => {
  const [selectedDemo, setSelectedDemo] = useState('lawyer');

  const demos = {
    lawyer: {
      title: 'Escritório de Advocacia',
      subtitle: 'Layout sóbrio e profissional',
      colors: {
        primary: '#1e3a8a', // Navy Blue
        secondary: '#d4af37', // Gold
        accent: '#374151', // Graphite
        background: '#f8fafc' // Off-white
      },
      preview: {
        header: 'Advocacia & Consultoria Jurídica',
        subtitle: 'Especialistas em Direito Empresarial',
        cta: 'Consulta Gratuita',
        features: ['25+ anos de experiência', 'Atendimento personalizado', 'Resultados comprovados']
      }
    },
    teacher: {
      title: 'Professor/Educador',
      subtitle: 'Design dinâmico e interativo',
      colors: {
        primary: '#3b82f6', // Blue
        secondary: '#f59e0b', // Amber
        accent: '#6b7280', // Gray
        background: '#fef3c7' // Light beige
      },
      preview: {
        header: 'Transforme sua Carreira',
        subtitle: 'Curso Online de Marketing Digital',
        cta: 'Começar Agora',
        features: ['Aulas práticas', 'Certificado incluso', 'Suporte vitalício']
      }
    },
    product: {
      title: 'Produto/E-commerce',
      subtitle: 'Foco em benefícios e compra fácil',
      colors: {
        primary: '#000000', // Black
        secondary: '#d4af37', // Gold
        accent: '#6b7280', // Silver
        background: '#ffffff' // White
      },
      preview: {
        header: 'Produto Premium',
        subtitle: 'A solução que você estava procurando',
        cta: 'Comprar Agora',
        features: ['Garantia de 30 dias', 'Frete grátis', 'Desconto especial']
      }
    }
  };

  const colorPalettes = [
    {
      name: 'Advogados',
      description: 'Luxo + Confiança',
      colors: ['#1e3a8a', '#d4af37', '#ffffff', '#374151'],
      labels: ['Navy Blue', 'Dourado', 'Branco', 'Grafite']
    },
    {
      name: 'Professores',
      description: 'Profissional + Acolhedor',
      colors: ['#374151', '#f3f4f6', '#3b82f6', '#f59e0b'],
      labels: ['Grafite', 'Bege Claro', 'Azul Médio', 'Âmbar']
    },
    {
      name: 'Produtos',
      description: 'Moderno + Premium',
      colors: ['#000000', '#6b7280', '#d4af37', '#ffffff'],
      labels: ['Preto', 'Cinza', 'Dourado', 'Branco']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Demonstrações e <span className="text-blue-600">Mockups</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja exemplos de páginas criadas para diferentes nichos, cada uma com design personalizado
          </p>
        </div>

        {/* Seletor de Demos */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedDemo('lawyer')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedDemo === 'lawyer'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Scale className="w-5 h-5" />
                <span>Advogado</span>
              </button>
              <button
                onClick={() => setSelectedDemo('teacher')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedDemo === 'teacher'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Professor</span>
              </button>
              <button
                onClick={() => setSelectedDemo('product')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedDemo === 'product'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Produto</span>
              </button>
            </div>
          </div>
        </div>

        {/* Preview da Landing Page */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {demos[selectedDemo as keyof typeof demos].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {demos[selectedDemo as keyof typeof demos].subtitle}
            </p>

            {/* Paleta de Cores */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Paleta de Cores</h4>
              <div className="flex space-x-3">
                {Object.entries(demos[selectedDemo as keyof typeof demos].colors).map(([key, color]) => (
                  <div key={key} className="text-center">
                    <div
                      className="w-12 h-12 rounded-lg shadow-sm border border-gray-200 mb-2"
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="text-xs text-gray-600 capitalize">{key}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Características */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Características do Design</h4>
              <ul className="space-y-2">
                {demos[selectedDemo as keyof typeof demos].preview.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mockup da Landing Page */}
          <div className="animate-fade-in-right">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Browser Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded-full px-3 py-1 text-sm text-gray-600">
                  exemplo-{selectedDemo}.com
                </div>
              </div>

              {/* Landing Page Content */}
              <div 
                className="p-8"
                style={{ backgroundColor: demos[selectedDemo as keyof typeof demos].colors.background }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 
                    className="text-3xl font-bold mb-2"
                    style={{ color: demos[selectedDemo as keyof typeof demos].colors.primary }}
                  >
                    {demos[selectedDemo as keyof typeof demos].preview.header}
                  </h1>
                  <p 
                    className="text-lg"
                    style={{ color: demos[selectedDemo as keyof typeof demos].colors.accent }}
                  >
                    {demos[selectedDemo as keyof typeof demos].preview.subtitle}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {demos[selectedDemo as keyof typeof demos].preview.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: demos[selectedDemo as keyof typeof demos].colors.secondary }}
                      ></div>
                      <span 
                        className="text-sm"
                        style={{ color: demos[selectedDemo as keyof typeof demos].colors.accent }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button
                    className="px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all"
                    style={{ backgroundColor: demos[selectedDemo as keyof typeof demos].colors.primary }}
                  >
                    {demos[selectedDemo as keyof typeof demos].preview.cta}
                  </button>
                </div>

                {/* Form Preview */}
                <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-8 bg-gray-100 rounded animate-pulse"></div>
                    <div className="h-8 bg-gray-100 rounded animate-pulse"></div>
                    <div 
                      className="h-10 rounded font-medium text-white flex items-center justify-center"
                      style={{ backgroundColor: demos[selectedDemo as keyof typeof demos].colors.secondary }}
                    >
                      Enviar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Paletas de Cores Detalhadas */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Paletas de Cores para Transmitir Seriedade
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {colorPalettes.map((palette, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{palette.name}</h4>
                <p className="text-gray-600 mb-4">{palette.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {palette.colors.map((color, colorIndex) => (
                    <div key={colorIndex} className="text-center">
                      <div
                        className="w-full h-16 rounded-lg shadow-sm border border-gray-200 mb-2"
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="text-xs text-gray-600">{palette.labels[colorIndex]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Significados das Cores */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg mb-3"></div>
              <h5 className="font-semibold text-gray-900 mb-2">Azul-marinho</h5>
              <p className="text-sm text-gray-600">Transmite confiança, autoridade e profissionalismo. Ideal para áreas jurídicas e corporativas.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-8 h-8 bg-gray-800 rounded-lg mb-3"></div>
              <h5 className="font-semibold text-gray-900 mb-2">Preto/Grafite</h5>
              <p className="text-sm text-gray-600">Transmite sofisticação, formalidade e elegância. Perfeito para tipografia e destaques.</p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <div className="w-8 h-8 bg-yellow-600 rounded-lg mb-3"></div>
              <h5 className="font-semibold text-gray-900 mb-2">Dourado</h5>
              <p className="text-sm text-gray-600">Transmite exclusividade, valor agregado e confiança. Ideal para CTAs e elementos premium.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoShowcase;