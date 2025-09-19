import React, { useState } from 'react';
import { BookOpen, Users, Award, Play, Download, Star, CheckCircle, Clock, Target } from 'lucide-react';

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
      title: 'Matemática Fundamental',
      students: '2.847',
      rating: 4.9,
      price: 'R$ 197',
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Física para ENEM',
      students: '1.523',
      rating: 4.8,
      price: 'R$ 247',
      image: 'https://images.pexels.com/photos/8500/desk-office-pen-ruler.jpg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      title: 'Química Orgânica',
      students: '987',
      rating: 4.9,
      price: 'R$ 297',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const benefits = [
    'Acesso vitalício ao conteúdo',
    'Certificado de conclusão',
    'Suporte direto com o professor',
    'Material complementar em PDF',
    'Exercícios práticos',
    'Grupo exclusivo no Telegram'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-amber-500 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Prof. Ana Silva</h1>
              <p className="text-sm text-gray-300">Especialista em Exatas</p>
            </div>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 px-6 py-2 rounded-lg font-semibold transition-colors">
            Meus Cursos
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Aprenda <span className="text-amber-400">Exatas</span> de Forma Simples e Eficaz
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Mais de 10 anos ensinando matemática, física e química. 
                Métodos comprovados que já aprovaram milhares de alunos.
              </p>
              <div className="flex items-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">15k+</div>
                  <div className="text-sm text-gray-300">Alunos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">4.9</div>
                  <div className="text-sm text-gray-300">Avaliação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">95%</div>
                  <div className="text-sm text-gray-300">Aprovação</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Assistir Aula Grátis
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-bold text-lg transition-all">
                  Ver Todos os Cursos
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Comece Agora - É Grátis!</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                >
                  <option value="">Qual matéria te interessa?</option>
                  <option value="matematica">Matemática</option>
                  <option value="fisica">Física</option>
                  <option value="quimica">Química</option>
                  <option value="todas">Todas as matérias</option>
                </select>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                >
                  <option value="">Seu nível atual</option>
                  <option value="iniciante">Iniciante</option>
                  <option value="intermediario">Intermediário</option>
                  <option value="avancado">Avançado</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
                >
                  Quero Minha Aula Grátis!
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Ao se cadastrar, você receberá nossa primeira aula gratuita por e-mail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Cursos Mais Populares</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia aprovada por milhares de estudantes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600">{course.students} alunos</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                      <span className="text-sm text-gray-600">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">{course.price}</span>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Ver Curso
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">O que você vai receber</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Dominar as Exatas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 15.000 alunos que já transformaram suas notas com nossos métodos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105">
              Começar Agora
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-amber-500 p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Prof. Ana Silva</span>
              </div>
              <p className="text-gray-400">
                Transformando vidas através da educação há mais de 10 anos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Cursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Matemática Fundamental</li>
                <li>Física para ENEM</li>
                <li>Química Orgânica</li>
                <li>Preparatório Vestibular</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@profanasilva.com.br</li>
                <li>(11) 99999-8888</li>
                <li>@profanasilva</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Prof. Ana Silva. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeacherLanding;