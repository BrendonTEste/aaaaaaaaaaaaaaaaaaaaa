import React, { useState, useEffect } from 'react';
import { 
  Users, 
  TrendingUp, 
  MousePointer, 
  Clock, 
  Smartphone, 
  Monitor, 
  Tablet,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Play,
  Pause,
  Calendar,
  BarChart3,
  Eye,
  Target
} from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  timestamp: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted';
}

interface TrafficData {
  source: string;
  visits: number;
  percentage: number;
  color: string;
}

interface DeviceData {
  device: string;
  visits: number;
  percentage: number;
  icon: React.ComponentType<any>;
}

const ClientDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [automationStatus, setAutomationStatus] = useState(true);

  // Dados mockados para demonstração
  const [dashboardData, setDashboardData] = useState({
    totalVisits: 0,
    totalLeads: 0,
    conversionRate: 0,
    activeAutomations: 0
  });

  const finalData = {
    totalVisits: 15847,
    totalLeads: 1284,
    conversionRate: 8.1,
    activeAutomations: 3
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setDashboardData({
        totalVisits: Math.floor(finalData.totalVisits * progress),
        totalLeads: Math.floor(finalData.totalLeads * progress),
        conversionRate: Math.floor(finalData.conversionRate * progress * 10) / 10,
        activeAutomations: Math.floor(finalData.activeAutomations * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setDashboardData(finalData);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const trafficSources: TrafficData[] = [
    { source: 'Google Ads', visits: 6234, percentage: 39.3, color: 'bg-blue-500' },
    { source: 'Facebook', visits: 4521, percentage: 28.5, color: 'bg-indigo-500' },
    { source: 'Instagram', visits: 2847, percentage: 18.0, color: 'bg-pink-500' },
    { source: 'Acesso Direto', visits: 1456, percentage: 9.2, color: 'bg-gray-500' },
    { source: 'Outros', visits: 789, percentage: 5.0, color: 'bg-purple-500' }
  ];

  const deviceData: DeviceData[] = [
    { device: 'Mobile', visits: 9508, percentage: 60.0, icon: Smartphone },
    { device: 'Desktop', visits: 4754, percentage: 30.0, icon: Monitor },
    { device: 'Tablet', visits: 1585, percentage: 10.0, icon: Tablet }
  ];

  const recentLeads: Lead[] = [
    {
      id: '1',
      name: 'Maria Silva',
      email: 'maria@email.com',
      phone: '(11) 99999-1234',
      source: 'Google Ads',
      timestamp: '2 min atrás',
      status: 'new'
    },
    {
      id: '2',
      name: 'João Santos',
      email: 'joao@email.com',
      phone: '(11) 99999-5678',
      source: 'Facebook',
      timestamp: '15 min atrás',
      status: 'contacted'
    },
    {
      id: '3',
      name: 'Ana Costa',
      email: 'ana@email.com',
      phone: '(11) 99999-9012',
      source: 'Instagram',
      timestamp: '1 hora atrás',
      status: 'qualified'
    },
    {
      id: '4',
      name: 'Pedro Lima',
      email: 'pedro@email.com',
      phone: '(11) 99999-3456',
      source: 'Acesso Direto',
      timestamp: '2 horas atrás',
      status: 'new'
    },
    {
      id: '5',
      name: 'Carla Oliveira',
      email: 'carla@email.com',
      phone: '(11) 99999-7890',
      source: 'Google Ads',
      timestamp: '3 horas atrás',
      status: 'converted'
    }
  ];

  const hourlyTraffic = [
    { hour: '00h', visits: 45 },
    { hour: '03h', visits: 23 },
    { hour: '06h', visits: 67 },
    { hour: '09h', visits: 234 },
    { hour: '12h', visits: 456 },
    { hour: '15h', visits: 389 },
    { hour: '18h', visits: 567 },
    { hour: '21h', visits: 234 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'qualified': return 'bg-purple-100 text-purple-800';
      case 'converted': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return 'Novo';
      case 'contacted': return 'Contatado';
      case 'qualified': return 'Qualificado';
      case 'converted': return 'Convertido';
      default: return 'Desconhecido';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard de Leads</h1>
              <p className="text-gray-600 mt-2">Acompanhe o desempenho das suas campanhas em tempo real</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="24h">Últimas 24h</option>
                <option value="7d">Últimos 7 dias</option>
                <option value="30d">Últimos 30 dias</option>
                <option value="90d">Últimos 90 dias</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Exportar Relatório
              </button>
            </div>
          </div>
        </div>

        {/* Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Visitas</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardData.totalVisits.toLocaleString()}</p>
                <p className="text-sm text-green-600 mt-1">+12.5% vs período anterior</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Leads Captados</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardData.totalLeads.toLocaleString()}</p>
                <p className="text-sm text-green-600 mt-1">+8.7% vs período anterior</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Taxa de Conversão</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardData.conversionRate}%</p>
                <p className="text-sm text-green-600 mt-1">+3.2% vs período anterior</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Automações Ativas</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardData.activeAutomations}</p>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm text-green-600">Todas funcionando</p>
                </div>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Origem do Tráfego */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Origem do Tráfego</h3>
              <div className="space-y-4">
                {trafficSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                      <span className="text-gray-700">{source.source}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-900 font-medium">{source.visits.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm w-12 text-right">{source.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dispositivos */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Dispositivos Utilizados</h3>
              <div className="grid grid-cols-3 gap-4">
                {deviceData.map((device, index) => {
                  const IconComponent = device.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-gray-100 p-4 rounded-lg mb-3">
                        <IconComponent className="w-8 h-8 text-gray-600 mx-auto" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">{device.device}</p>
                      <p className="text-lg font-bold text-gray-900">{device.visits.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">{device.percentage}%</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Horários de Pico */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Horários com Maior Fluxo</h3>
              <div className="flex items-end justify-between h-32 space-x-2">
                {hourlyTraffic.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="bg-blue-500 rounded-t w-full transition-all duration-1000 ease-out"
                      style={{
                        height: `${(data.visits / 567) * 100}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    ></div>
                    <span className="text-xs text-gray-600 mt-2">{data.hour}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Lateral */}
          <div className="space-y-8">
            {/* Status da Automação */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Status da Automação</h3>
                <button
                  onClick={() => setAutomationStatus(!automationStatus)}
                  className={`p-2 rounded-lg transition-colors ${
                    automationStatus ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}
                >
                  {automationStatus ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                </button>
              </div>
              <div className={`p-4 rounded-lg ${
                automationStatus ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${
                    automationStatus ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className={`font-medium ${
                    automationStatus ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {automationStatus ? 'Ativa' : 'Pausada'}
                  </span>
                </div>
                <p className={`text-sm ${
                  automationStatus ? 'text-green-700' : 'text-red-700'
                }`}>
                  {automationStatus 
                    ? 'Todos os leads estão sendo processados automaticamente'
                    : 'Automação pausada - leads não estão sendo processados'
                  }
                </p>
              </div>
            </div>

            {/* Últimos Leads */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Últimos 5 Contatos</h3>
              <div className="space-y-4">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{lead.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                        {getStatusText(lead.status)}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {lead.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {lead.phone}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">Via {lead.source}</span>
                        <span className="text-xs text-gray-500">{lead.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm">
                Ver todos os leads →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;