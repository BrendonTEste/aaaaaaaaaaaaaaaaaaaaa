import React, { useState } from 'react';
import { ShoppingCart, Star, Shield, Truck, CreditCard, CheckCircle, Clock, Users, Award, ArrowRight } from 'lucide-react';

const ProductLanding = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      price: 97,
      originalPrice: 197,
      features: ['Acesso por 30 dias', 'Suporte por email', '1 bônus exclusivo'],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 197,
      originalPrice: 397,
      features: ['Acesso vitalício', 'Suporte prioritário', '5 bônus exclusivos', 'Grupo VIP'],
      popular: true
    },
    {
      id: 'vip',
      name: 'VIP',
      price: 297,
      originalPrice: 597,
      features: ['Acesso vitalício', 'Mentoria 1:1', 'Todos os bônus', 'Certificado', 'Garantia estendida'],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Pedro Costa',
      rating: 5,
      text: 'Produto incrível! Superou todas as minhas expectativas. Recomendo 100%.',
      verified: true
    },
    {
      name: 'Carla Mendes',
      rating: 5,
      text: 'Melhor investimento que já fiz. Resultados visíveis desde o primeiro dia.',
      verified: true
    },
    {
      name: 'Roberto Silva',
      rating: 5,
      text: 'Qualidade excepcional e entrega rápida. Voltarei a comprar com certeza.',
      verified: true
    }
  ];

  const benefits = [
    'Garantia incondicional de 30 dias',
    'Entrega imediata após pagamento',
    'Suporte técnico especializado',
    'Atualizações gratuitas vitalícias',
    'Acesso a comunidade exclusiva',
    'Material complementar incluso'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 py-4 shadow-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-2 rounded-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Premium Store</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">Compra 100% Segura</span>
            <Shield className="w-5 h-5 text-green-400" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-6">
                🔥 OFERTA LIMITADA - 50% OFF
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                O <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Produto Premium</span> que vai Transformar sua Vida
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Descubra o segredo que mais de 10.000 pessoas já usam para alcançar 
                resultados extraordinários em tempo recorde.
              </p>
              
              <div className="flex items-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">10k+</div>
                  <div className="text-sm text-gray-400">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">4.9</div>
                  <div className="text-sm text-gray-400">Avaliação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">98%</div>
                  <div className="text-sm text-gray-400">Satisfação</div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Preço especial termina em:</span>
                </div>
                <div className="flex space-x-4 text-center">
                  <div className="bg-red-600 rounded-lg p-3">
                    <div className="text-2xl font-bold">23</div>
                    <div className="text-xs">HORAS</div>
                  </div>
                  <div className="bg-red-600 rounded-lg p-3">
                    <div className="text-2xl font-bold">45</div>
                    <div className="text-xs">MIN</div>
                  </div>
                  <div className="bg-red-600 rounded-lg p-3">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-xs">SEG</div>
                  </div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Comprar Agora - 50% OFF
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                  alt="Produto Premium"
                  className="w-full rounded-xl mb-6"
                />
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">
                    "Produto incrível! Mudou completamente minha rotina."
                  </p>
                  <p className="text-amber-400 font-semibold mt-2">- Cliente Verificado</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold animate-pulse">
                BESTSELLER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Escolha seu Plano</h2>
            <p className="text-xl text-gray-400">Todos com garantia de 30 dias</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-gray-800 rounded-2xl p-8 transition-all hover:scale-105 cursor-pointer ${
                  selectedPlan === plan.id ? 'ring-2 ring-amber-500' : ''
                } ${plan.popular ? 'border-2 border-amber-500' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black px-6 py-2 rounded-full font-bold text-sm">
                    MAIS POPULAR
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-amber-400">R$ {plan.price}</span>
                    <span className="text-gray-400 line-through ml-2">R$ {plan.originalPrice}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  plan.popular 
                    ? 'bg-amber-500 hover:bg-amber-600 text-black' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Escolher Plano
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">O que nossos clientes dizem</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                      VERIFICADO
                    </div>
                  )}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-amber-400">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Por que escolher nosso produto?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-gray-800 p-6 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Não Perca Esta Oportunidade!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Mais de 10.000 pessoas já transformaram suas vidas. Seja o próximo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Comprar Agora - R$ 197
            </button>
            <div className="flex items-center text-black">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-semibold">Garantia de 30 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Premium Store</span>
              </div>
              <p className="text-gray-400">
                Produtos premium para pessoas que buscam excelência.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Características</li>
                <li>Benefícios</li>
                <li>Depoimentos</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Central de Ajuda</li>
                <li>Contato</li>
                <li>Garantia</li>
                <li>Política de Privacidade</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Pagamento Seguro</h3>
              <div className="flex items-center space-x-2 mb-4">
                <CreditCard className="w-6 h-6 text-gray-400" />
                <Shield className="w-6 h-6 text-green-400" />
                <Truck className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-gray-400 text-sm">
                Compra 100% segura e entrega garantida
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Premium Store. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductLanding;