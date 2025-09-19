import React, { useState } from 'react';
import { BookOpen, Users, Award, Play, Download, Star, CheckCircle, Clock, Target, TrendingUp, Brain, Zap } from 'lucide-react';

const TeacherLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const courses = [
    {
      title: 'Matemática do Zero ao Avançado',
      students: '4.847',
      rating: 4.9,
      price: 'R$ 297',
      originalPrice: 'R$ 597',
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '120 aulas',
      level: 'Todos os níveis'
    },
    {
      title: 'Física Completa para ENEM',
      students: '3.523',
      rating: 4.8,
      price: 'R$ 347',
      originalPrice: 'R$ 697',
      image: 'https://images.pexels.com/photos/8500/desk-office-pen-ruler.jpg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '95 aulas',
      level: 'Intermediário'
    },
    {
      title: 'Química Orgânica Descomplicada',
      students: '2.987',
      rating: 4.9,
      price: 'R$ 397',
      originalPrice: 'R$ 797',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '85 aulas',
      level: 'Avançado'
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: 'Acesso vitalício ao conteúdo' },
    { icon: Award, text: 'Certificado de conclusão reconhecido' },
    { icon: Users, text: 'Suporte direto com a professora' },
    { icon: Download, text: 'Material complementar em PDF' },
    { icon: Target, text: 'Exercícios práticos resolvidos' },
    { icon: Zap, text: 'Grupo exclusivo no Telegram' }
  ];

  const stats = [
    { number: '25k+', label: 'Alunos Aprovados', icon: Users },
    { number: '4.9', label: 'Avaliação Média', icon: Star },
    { number: '98%', label: 'Taxa de Aprovação', icon: TrendingUp },
    { number: '12', label: 'Anos Ensinando', icon: Brain }
  ];

  const testimonials = [
    {
      name: 'Pedro Henrique',
      course: 'Matemática Completa',
      text: 'Passei em Engenharia na USP! A Prof. Ana tem um método incrível que torna a matemática simples e divertida.',
      rating: 5,
      result: 'Aprovado na USP',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Mariana Santos',
      course: 'Física para ENEM',
      text: 'Minha nota em física subiu de 400 para 850 pontos! Método revolucionário que realmente funciona.',
      rating: 5,
      result: '+450 pontos no ENEM',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Lucas Oliveira',
      course: 'Química Orgânica',
      text: 'Consegui entender química orgânica pela primeira vez na vida! Explicações claras e didática perfeita.',
      rating: 5,
      result: 'Nota 9.5 na prova',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-800 text-white py-4 shadow-2xl">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-xl shadow-lg">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Prof. Ana Silva</h1>
              <p className="text-sm text-slate-300">Especialista em Exatas • 25k+ Alunos Aprovados</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-right">
              <div className="text-sm text-slate-300">Suporte direto</div>
              <div className="font-semibold">(11) 99999-8888</div>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-lg">
              Meus Cursos
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-amber-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold inline-block mb-8">
                🎓 MÉTODO APROVADO POR 25.000+ ALUNOS
              </div>
              <h2 className="text-6xl font-bold mb-8 leading-tight">
                Aprenda <span className="text-amber-400">Exatas</span> de Forma Simples e Definitiva
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Transforme sua relação com matemática, física e química. 
                Método comprovado que já aprovou milhares de alunos nos melhores vestibulares do país.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-slate-700 p-3 rounded-xl mb-3 inline-block">
                        <IconComponent className="w-6 h-6 text-amber-400" />
                      </div>
                      <div className="text-3xl font-bold text-amber-400 mb-1">{stat.number}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center">
                  <Play className="w-6 h-6 mr-3" />
                  Assistir Aula Grátis
                </button>
                <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all">
                  Ver Todos os Cursos
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-800 mb-8">Comece Agora - É Grátis!</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Seu nome completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Seu melhor e-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Qual matéria te interessa?</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Selecione uma matéria</option>
                    <option value="matematica">Matemática</option>
                    <option value="fisica">Física</option>
                    <option value="quimica">Química</option>
                    <option value="todas">Todas as matérias</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Seu nível atual</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Selecione seu nível</option>
                    <option value="iniciante">Iniciante (preciso começar do zero)</option>
                    <option value="intermediario">Intermediário (sei o básico)</option>
                    <option value="avancado">Avançado (quero me aperfeiçoar)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
                >
                  Quero Minha Aula Grátis Agora!
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Ao se cadastrar, você receberá nossa primeira aula gratuita por e-mail em até 5 minutos
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-800 mb-8">Cursos Mais Populares</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Metodologia aprovada por milhares de estudantes que conquistaram suas aprovações
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    50% OFF
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{course.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-slate-500 mr-2" />
                      <span className="text-sm text-slate-600">{course.students} alunos</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-amber-400 fill-current mr-1" />
                      <span className="text-sm text-slate-600 font-bold">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-slate-500 mr-2" />
                      <span className="text-sm text-slate-600">{course.duration}</span>
                    </div>
                    <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {course.level}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-amber-600">{course.price}</span>
                      <span className="text-slate-400 line-through ml-2">{course.originalPrice}</span>
                    </div>
                  </div>
                  <button className="w-full bg-slate-800 hover:bg-slate-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105">
                    Ver Curso Completo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-800 mb-8">O que você vai receber</h2>
            <p className="text-xl text-slate-600">Muito mais que aulas, uma transformação completa</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="bg-amber-100 p-4 rounded-xl mr-6">
                    <IconComponent className="w-8 h-8 text-amber-600" />
                  </div>
                  <span className="text-slate-700 font-semibold text-lg">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-800 mb-8">Histórias de Sucesso</h2>
            <p className="text-xl text-slate-600">Veja os resultados reais dos nossos alunos</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                    <div className="text-slate-600">{testimonial.course}</div>
                  </div>
                </div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>
                <div className="bg-emerald-100 text-emerald-800 px-4 py-3 rounded-full text-sm font-bold inline-block">
                  {testimonial.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">Pronto para Dominar as Exatas?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Junte-se a mais de 25.000 alunos que já transformaram suas notas e conquistaram suas aprovações
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-slate-900 text-white hover:bg-slate-800 px-12 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg">
              Começar Agora
            </button>
            <button className="border-3 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-12 py-5 rounded-xl font-bold text-xl transition-all">
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-amber-500 p-3 rounded-xl">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Prof. Ana Silva</div>
                  <div className="text-slate-400">Especialista em Exatas</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Transformando vidas através da educação há mais de 12 anos. 
                Mais de 25.000 alunos aprovados nos melhores vestibulares.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Cursos</h3>
              <ul className="space-y-3 text-slate-400">
                <li>• Matemática Completa</li>
                <li>• Física para ENEM</li>
                <li>• Química Orgânica</li>
                <li>• Preparatório Vestibular</li>
                <li>• Curso Intensivo</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Suporte</h3>
              <ul className="space-y-3 text-slate-400">
                <li>• Central de Ajuda</li>
                <li>• Grupo no Telegram</li>
                <li>• Suporte Técnico</li>
                <li>• FAQ</li>
                <li>• Política de Reembolso</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Contato</h3>
              <ul className="space-y-3 text-slate-400">
                <li>contato@profanasilva.com.br</li>
                <li>(11) 99999-8888</li>
                <li>@profanasilva</li>
                <li>Prof. Ana Silva - YouTube</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>© 2024 Prof. Ana Silva. Todos os direitos reservados. • CNPJ: 12.345.678/0001-90</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeacherLanding;