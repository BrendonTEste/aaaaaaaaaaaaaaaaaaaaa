import React, { useState } from 'react';
import { Scale, Shield, Award, Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight, Users, BookOpen, Gavel } from 'lucide-react';

const LawyerLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const specialties = [
    {
      icon: Scale,
      title: 'Direito Civil',
      description: 'Contratos, responsabilidade civil, direito de família e sucessões com mais de 15 anos de experiência.',
      cases: '500+ casos'
    },
    {
      icon: Shield,
      title: 'Direito Criminal',
      description: 'Defesa criminal, habeas corpus e recursos em todas as instâncias com histórico de 95% de êxito.',
      cases: '300+ defesas'
    },
    {
      icon: Gavel,
      title: 'Direito Empresarial',
      description: 'Consultoria jurídica, contratos comerciais e recuperação judicial para empresas de todos os portes.',
      cases: '200+ empresas'
    },
    {
      icon: Award,
      title: 'Direito Trabalhista',
      description: 'Defesa de direitos trabalhistas, rescisões e processos contra empresas com resultados comprovados.',
      cases: '800+ processos'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      case: 'Direito de Família',
      text: 'Profissionalismo exemplar. Dr. Ricardo resolveu meu caso de divórcio com eficiência total e transparência em cada etapa.',
      rating: 5,
      result: 'Caso resolvido em 3 meses'
    },
    {
      name: 'João Silva',
      case: 'Direito Empresarial',
      text: 'Excelente assessoria jurídica. Salvou minha empresa de uma situação complexa de recuperação judicial.',
      rating: 5,
      result: 'R$ 2M preservados'
    },
    {
      name: 'Ana Costa',
      case: 'Direito Criminal',
      text: 'Defesa impecável. Conseguiu minha absolvição em um caso que parecia impossível. Gratidão eterna.',
      rating: 5,
      result: 'Absolvição total'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '2000+', label: 'Casos Resolvidos' },
    { number: '95%', label: 'Taxa de Êxito' },
    { number: '24h', label: 'Resposta Garantida' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 shadow-2xl">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-amber-600 p-3 rounded-xl shadow-lg">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Dr. Ricardo Advocacia</h1>
              <p className="text-sm text-slate-300">OAB/SP 123.456 • Especialista em Direito</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-right">
              <div className="text-sm text-slate-300">Atendimento 24h</div>
              <div className="font-semibold">(11) 99999-9999</div>
            </div>
            <button className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-lg">
              Consulta Gratuita
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-amber-600 text-slate-900 px-6 py-2 rounded-full text-sm font-bold inline-block mb-8">
                ⚖️ ADVOCACIA DE EXCELÊNCIA
              </div>
              <h2 className="text-6xl font-bold mb-8 leading-tight">
                Defenda seus <span className="text-amber-400">Direitos</span> com Máxima Competência Jurídica
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Mais de 15 anos de experiência em advocacia. Atendimento personalizado, 
                estratégias jurídicas eficazes e resultados comprovados em todas as áreas do direito.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-1">{achievement.number}</div>
                    <div className="text-sm text-slate-400">{achievement.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-600 hover:bg-amber-700 text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg">
                  Agendar Consulta Gratuita
                </button>
                <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all">
                  WhatsApp Direto
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Consulta Jurídica Gratuita</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">Nome Completo *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">Telefone/WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">Área do Direito *</label>
                    <select
                      name="caseType"
                      value={formData.caseType}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Selecione a área</option>
                      <option value="civil">Direito Civil</option>
                      <option value="criminal">Direito Criminal</option>
                      <option value="empresarial">Direito Empresarial</option>
                      <option value="trabalhista">Direito Trabalhista</option>
                      <option value="familia">Direito de Família</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Descreva seu caso *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                    placeholder="Conte-nos detalhes sobre sua situação jurídica..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-slate-900 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
                >
                  Solicitar Consulta Gratuita Agora
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Resposta garantida em até 2 horas • Consulta 100% gratuita e sem compromisso
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-8">Áreas de Atuação</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Expertise comprovada nas principais áreas do direito com resultados excepcionais
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <div key={index} className="bg-slate-50 rounded-3xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 group">
                  <div className="bg-amber-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{specialty.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{specialty.description}</p>
                  <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold inline-block">
                    {specialty.cases}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-8">Depoimentos de Clientes</h2>
            <p className="text-xl text-slate-600">Resultados reais que transformaram vidas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-slate-200 pt-6">
                  <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                  <div className="text-slate-600 mb-3">{testimonial.case}</div>
                  <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold inline-block">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold mb-10">Entre em Contato</h2>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="bg-amber-600 p-4 rounded-xl mr-6">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Telefone</div>
                    <div className="text-slate-300 text-xl">(11) 3456-7890</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-600 p-4 rounded-xl mr-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Email</div>
                    <div className="text-slate-300 text-xl">contato@ricardoadvocacia.com.br</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-600 p-4 rounded-xl mr-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Endereço</div>
                    <div className="text-slate-300 text-xl">Av. Paulista, 1000 - São Paulo, SP</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-600 p-4 rounded-xl mr-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Horário</div>
                    <div className="text-slate-300 text-xl">Seg-Sex: 8h às 18h</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-8">Atendimento de Emergência</h3>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Para casos urgentes e situações que não podem esperar, 
                estamos disponíveis 24 horas por dia via WhatsApp.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 flex items-center justify-center">
                  WhatsApp 24h - Emergência
                  <ArrowRight className="ml-3 w-6 h-6" />
                </button>
                <div className="text-center text-slate-400 text-sm">
                  Resposta garantida em até 30 minutos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-amber-600 p-3 rounded-xl">
                  <Scale className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Dr. Ricardo Advocacia</div>
                  <div className="text-slate-400">OAB/SP 123.456</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Defendendo seus direitos com excelência, ética e resultados comprovados há mais de 15 anos.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Áreas de Atuação</h3>
              <ul className="space-y-3 text-slate-400">
                <li>• Direito Civil</li>
                <li>• Direito Criminal</li>
                <li>• Direito Empresarial</li>
                <li>• Direito Trabalhista</li>
                <li>• Direito de Família</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Certificações</h3>
              <ul className="space-y-3 text-slate-400">
                <li>• OAB São Paulo</li>
                <li>• Pós-graduação em Direito Civil</li>
                <li>• Especialização em Direito Criminal</li>
                <li>• Membro da AASP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>© 2024 Dr. Ricardo Advocacia - OAB/SP 123.456. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LawyerLanding;