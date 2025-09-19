import React, { useState } from 'react';
import { ShoppingCart, Star, Shield, Truck, CreditCard, CheckCircle, Clock, Users, Award, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

const ProductLanding = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      price: 97,
      originalPrice: 197,
      features: ['Acesso por 30 dias', 'Suporte por email', '1 bônus exclusivo', 'Garantia de 7 dias'],
      popular: false,
      savings: '50%'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 197,
      originalPrice: 397,
      features: ['Acesso vitalício', 'Suporte prioritário', '5 bônus exclusivos', 'Grupo VIP', 'Garantia de 30 dias', 'Atualizações gratuitas'],
      popular: true,
      savings: '50%'
    },
    {
      id: 'vip',
      name: 'VIP',
      price: 297,
      originalPrice: 597,
      features: ['Acesso vitalício', 'Mentoria 1:1', 'Todos os bônus', 'Certificado premium', 'Garantia estendida de 60 dias', 'Suporte 24/7'],
      popular: false,
      savings: '50%'
    }
  ];

  const testimonials = [
    {
      name: 'Pedro Costa',
      rating: 5,
      text: 'Produto incrível! Superou todas as minhas expectativas. Em 30 dias já vi resultados extraordinários.',
      verified: true,
      result: '+300% resultados',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Carla Mendes',
      rating: 5,
      text: 'Melhor investimento que já fiz na vida. Resultados visíveis desde o primeiro dia de uso.',
      verified: true,
      result: 'ROI de 500%',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Roberto Silva',
      rating: 5,
      text: 'Qualidade excepcional e entrega imediata. Suporte incrível. Recomendo para todos!',
      verified: true,
      result: 'Satisfação 100%',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const benefits = [
    { icon: Shield, text: 'Garantia incondicional de 30 dias' },
    { icon: Zap, text: 'Entrega imediata após pagamento' },
    { icon: Users, text: 'Suporte técnico especializado' },
    { icon: TrendingUp, text: 'Atualizações gratuitas vitalícias' },
    { icon: Target, text: 'Acesso a comunidade exclusiva' },
    { icon: Award, text: 'Material complementar premium' }
  ];

  const stats = [
    { number: '50k+', label: 'Clientes Satisfeitos', icon: Users },
    { number: '4.9', label: 'Avaliação Média', icon: Star },
    { number: '99%', label: 'Taxa de Satisfação', icon: CheckCircle },
    { number: '24h', label: 'Suporte Disponível', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 py-4 shadow-2xl border-b border-slate-700">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-xl shadow-lg">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold">Premium Store</span>
              <div className="text-sm text-slate-400">Produtos de Alta Performance</div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Truck className="w-5 h-5 text-blue-400" />
              <span>Entrega Imediata</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold inline-block mb-8 animate-pulse">
                🔥 OFERTA LIMITADA - ÚLTIMAS 24 HORAS
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                O <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Produto Premium</span> que vai Revolucionar sua Vida
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Descubra o segredo que mais de 50.000 pessoas já usam para alcançar 
                resultados extraordinários e transformar completamente sua realidade.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-slate-800 p-3 rounded-xl mb-3 inline-block">
                        <IconComponent className="w-6 h-6 text-amber-400" />
                      </div>
                      <div className="text-3xl font-bold text-amber-400 mb-1">{stat.number}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-slate-800 rounded-3xl p-8 mb-10 border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-bold">⏰ Oferta especial termina em:</span>
                </div>
                <div className="flex space-x-4 text-center">
                  <div className="bg-red-600 rounded-xl p-4 min-w-[80px]">
                    <div className="text-3xl font-bold">23</div>
                    <div className="text-xs">HORAS</div>
                  </div>
                  <div className="bg-red-600 rounded-xl p-4 min-w-[80px]">
                    <div className="text-3xl font-bold">45</div>
                    <div className="text-xs">MIN</div>
                  </div>
                  <div className="bg-red-600 rounded-xl p-4 min-w-[80px]">
                    <div className="text-3xl font-bold">12</div>
                    <div className="text-xs">SEG</div>
                  </div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-12 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-2xl flex items-center">
                <ShoppingCart className="w-6 h-6 mr-3" />
                Comprar Agora - 50% OFF
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-10 shadow-2xl border border-slate-600">
                <img 
                  src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                  alt="Produto Premium"
                  className="w-full rounded-2xl mb-8 shadow-xl"
                />
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic text-lg mb-4">
                    "Este produto mudou completamente minha vida. Resultados incríveis!"
                  </p>
                  <p className="text-amber-400 font-bold text-lg">- Cliente Verificado ✓</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-red-600 text-white px-6 py-3 rounded-full font-bold animate-bounce shadow-xl">
                BESTSELLER #1
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-24 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">Escolha seu Plano</h2>
            <p className="text-xl text-slate-400">Todos com garantia incondicional de satisfação</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-slate-700 rounded-3xl p-10 transition-all hover:scale-105 cursor-pointer border-2 ${
                  selectedPlan === plan.id ? 'border-amber-500 shadow-2xl' : 'border-slate-600'
                } ${plan.popular ? 'border-amber-500 scale-105' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-amber-500 text-slate-900 px-8 py-3 rounded-full font-bold text-sm shadow-xl">
                    MAIS POPULAR - MELHOR CUSTO BENEFÍCIO
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-5xl font-bold text-amber-400">R$ {plan.price}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-slate-400 line-through text-xl mr-3">R$ {plan.originalPrice}</span>
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{plan.savings}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="bg-emerald-500 rounded-full p-1 mr-4">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-slate-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg ${
                  plan.popular 
                    ? 'bg-amber-500 hover:bg-amber-600 text-slate-900' 
                    : 'bg-slate-600 hover:bg-slate-500 text-white'
                }`}>
                  Escolher {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">O que nossos clientes dizem</h2>
            <p className="text-xl text-slate-400">Mais de 50.000 pessoas já transformaram suas vidas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-3xl p-10 border border-slate-700 hover:border-amber-500 transition-all">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    {testimonial.verified && (
                      <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                        ✓ CLIENTE VERIFICADO
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>
                <div className="bg-emerald-900 text-emerald-300 px-4 py-3 rounded-xl text-sm font-bold">
                  {testimonial.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">Por que escolher nosso produto?</h2>
            <p className="text-xl text-slate-400">Benefícios exclusivos que você não encontra em nenhum outro lugar</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-center bg-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-amber-500 transition-all">
                  <div className="bg-amber-500 p-4 rounded-xl mr-6">
                    <IconComponent className="w-8 h-8 text-slate-900" />
                  </div>
                  <span className="text-slate-300 font-semibold text-lg">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">Não Perca Esta Oportunidade Única!</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Mais de 50.000 pessoas já transformaram suas vidas. Seja o próximo a conquistar resultados extraordinários!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-slate-900 text-white hover:bg-slate-800 px-12 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-2xl flex items-center">
              <ShoppingCart className="w-6 h-6 mr-3" />
              Comprar Agora - R$ 197
            </button>
            <div className="flex items-center text-slate-900">
              <Shield className="w-6 h-6 mr-3" />
              <span className="font-bold text-lg">Garantia incondicional de 30 dias</span>
            </div>
          </div>
          <div className="mt-8 text-slate-800">
            <p className="text-sm">Pagamento 100% seguro • Acesso imediato • Suporte 24/7</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-xl">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Premium Store</div>
                  <div className="text-slate-400">Produtos de Excelência</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Produtos premium desenvolvidos para pessoas que buscam resultados excepcionais e transformação real.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Produto</h3>
              <ul className="space-y-3 text-slate-400">
                <li>• Características Premium</li>
                <li>• Benefícios Exclusivos</li>
                <li>• Depoimentos Reais</li>
                <li>• Perguntas Frequentes</li>
                <li>• Garantia Total</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Suporte</h3>
              <ul className="space-y-3 text-slate-400">
                <li>• Central de Ajuda 24/7</li>
                <li>• Contato Direto</li>
                <li>• Política de Garantia</li>
                <li>• Termos de Uso</li>
                <li>• Política de Privacidade</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Pagamento Seguro</h3>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <CreditCard className="w-8 h-8 text-slate-400" />
                </div>
                <div className="bg-slate-800 p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="bg-slate-800 p-3 rounded-lg">
                  <Truck className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Compra 100% segura com criptografia SSL. 
                Entrega imediata e garantia total de satisfação.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>© 2024 Premium Store. Todos os direitos reservados. • CNPJ: 12.345.678/0001-90</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductLanding;