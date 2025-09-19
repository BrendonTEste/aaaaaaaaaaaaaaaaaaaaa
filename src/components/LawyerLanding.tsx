import React, { useState } from 'react';
import { Scale, Shield, Award, Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';

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
      description: 'Contratos, responsabilidade civil, direito de família e sucessões'
    },
    {
      icon: Shield,
      title: 'Direito Criminal',
      description: 'Defesa criminal, habeas corpus e recursos em todas as instâncias'
    },
    {
      icon: Award,
      title: 'Direito Empresarial',
      description: 'Consultoria jurídica, contratos comerciais e recuperação judicial'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      case: 'Direito de Família',
      text: 'Profissionalismo exemplar. Resolveu meu caso com eficiência e transparência total.',
      rating: 5
    },
    {
      name: 'João Silva',
      case: 'Direito Empresarial',
      text: 'Excelente assessoria jurídica. Salvou minha empresa de uma situação complexa.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-amber-600 p-2 rounded-lg">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Dr. Ricardo Advocacia</h1>
              <p className="text-sm text-slate-300">OAB/SP 123.456</p>
            </div>
          </div>
          <button className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-lg font-semibold transition-colors">
            Consulta Gratuita
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Defenda seus <span className="text-amber-400">Direitos</span> com Excelência Jurídica
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Mais de 15 anos de experiência em advocacia. Atendimento personalizado 
                e resultados comprovados em todas as áreas do direito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105">
                  Agendar Consulta
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all">
                  WhatsApp Direto
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Consulta Jurídica Gratuita</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone/WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  required
                />
                <select
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  required
                >
                  <option value="">Área do Direito</option>
                  <option value="civil">Direito Civil</option>
                  <option value="criminal">Direito Criminal</option>
                  <option value="empresarial">Direito Empresarial</option>
                  <option value="familia">Direito de Família</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Descreva brevemente seu caso"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
                >
                  Solicitar Consulta Gratuita
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Áreas de Atuação</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expertise comprovada nas principais áreas do direito
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                  <div className="bg-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{specialty.title}</h3>
                  <p className="text-slate-600">{specialty.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">O que nossos clientes dizem</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm">{testimonial.case}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Entre em Contato</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-amber-400 mr-4" />
                  <span>(11) 3456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-amber-400 mr-4" />
                  <span>contato@ricardoadvocacia.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-amber-400 mr-4" />
                  <span>Av. Paulista, 1000 - São Paulo, SP</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-amber-400 mr-4" />
                  <span>Seg-Sex: 8h às 18h</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Atendimento 24h</h3>
              <p className="text-slate-300 mb-6">
                Para casos urgentes, estamos disponíveis 24 horas por dia via WhatsApp.
              </p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center">
                WhatsApp 24h
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Dr. Ricardo Advocacia - OAB/SP 123.456. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LawyerLanding;