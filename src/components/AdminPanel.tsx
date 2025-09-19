import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  MapPin, 
  Clock, 
  Smartphone, 
  Monitor, 
  Tablet,
  Globe,
  Facebook,
  Instagram,
  Search,
  Filter,
  Download,
  Eye,
  MousePointer,
  Target,
  Activity
} from 'lucide-react';

const AdminPanel = () => {
  const [selectedClient, setSelectedClient] = useState('all');
  const [dateRange, setDateRange] = useState('7d');

  // Dados de exemplo para o painel administrativo
  const clients = [
    { id: 'all', name: 'Todos os Clientes' },
    { id: '1', name: 'Advocacia Silva & Santos' },
    { id: '2', name: 'Prof. João - Marketing Digital' },
    { id: '3', name: 'E-commerce Premium Store' },
    { id: '4', name: 'Consultoria Empresarial' }
  ];

  const trafficSources = [
    { source: 'Google Ads', visits: 12450, leads: 1024, conversion: 8.2, color: 'bg-blue-500', icon: Search },
    { source: 'Facebook Ads', visits: 8930, leads: 712, conversion: 8.0, color: 'bg-blue-600', icon: Facebook },
    { source: 'Instagram', visits: 5670, leads: 453, conversion: 8.0, color: 'bg-pink-500', icon: Instagram },
    { source: 'Acesso Direto', visits: 3240, leads: 194, conversion: 6.0, color: 'bg-gray-500', icon: Globe }
  ];

  const deviceStats = [
    { device: 'Mobile', visits: 18540, percentage: 61.8, icon: Smartphone, color: 'bg-green-500' },
    { device: 'Desktop', visits: 8970, percentage: 29.9, icon: Monitor, color: 'bg-blue-500' },
    { device: 'Tablet', visits: 2490, percentage: 8.3, icon: Tablet, color: 'bg-purple-500' }
  ];

  const hourlyData = [
    { hour: '00h', visits: 145, leads: 12 },
    { hour: '03h', visits: 89, leads: 7 },
    { hour: '06h', visits: 234, leads: 19 },
    { hour: '09h', visits: 567, leads: 45 },
    { hour: '12h', visits: 789, leads: 63 },
    { hour: '15h', visits: 654, leads: 52 },
    { hour: '18h', visits: 892, leads: 71 },
    { hour: '21h', visits: 456, leads: 36 }
  ];

  const heatmapData = [
    { area: 'Cabeçalho', clicks: 2340, percentage: 23.4 },
    { area: 'Formulário Principal', clicks: 3450, percentage: 34.5 },
    { area: 'Botão CTA', clicks: 1890, percentage: 18.9 },
    { area: 'Depoimentos', clicks: 890, percentage: 8.9 },
    { area: 'Rodapé', clicks: 1430, percentage: 14.3 }
  ];

  const recentLeads = [
    {
      id: 1,
      name: 'Maria Silva',
      email: 'maria@email.com',
      phone: '(11) 99999-1234',
      source: 'Google Ads',
      client: 'Advocacia Silva & Santos',
      timestamp: '2 min atrás',
      status: 'new'
    },
    {
      id: 2,
      name: 'João Santos',
      email: 'joao@email.com',
      phone: '(11) 99999-5678',
      source: 'Facebook',
      client: 'Prof. João - Marketing Digital',
      timestamp: '15 min atrás',
      status: 'contacted'
    },
    {
      id: 3,
      name: 'Ana Costa',
      email: 'ana@email.com',
      phone: '(11) 99999-9012',
      source: 'Instagram',
      client: 'E-commerce Premium Store',
      timestamp: '1 hora atrás',
      status: 'qualified'
    }
  ];

  const automationStatus = [
    { client: 'Advocacia Silva & Santos', status: 'active', leads: 45, lastRun: '5 min atrás' },
    { client: 'Prof. João - Marketing Digital', status: 'active', leads: 32, lastRun: '12 min atrás' },
    { client: 'E-commerce Premium Store', status: 'paused', leads: 0, lastRun: '2 horas atrás' },
    { client: 'Consultoria Empresarial', status: 'active', leads: 18, lastRun: '8 min atrás' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
              <p className="text-gray-600">Visão geral de todos os clientes e campanhas</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedClient}
                onChange={(e) => setSelectedClient(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {clients.map(client => (
                  <option key={client.id} value={client.id}>{client.name}</option>
                ))}
              </select>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="24h">Últimas 24h</option>
                <option value="7d">Últimos 7 dias</option>
                <option value="30d">Últimos 30 dias</option>
                <option value="90d">Últimos 90 dias</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Métricas Gerais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Visitas</p>
                <p className="text-3xl font-bold text-gray-900">30.290</p>
                <p className="text-sm text-green-600 mt-1">+15.3% vs período anterior</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Leads</p>
                <p className="text-3xl font-bold text-gray-900">2.383</p>
                <p className="text-sm text-green-600 mt-1">+12.7% vs período anterior</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Taxa de Conversão Média</p>
                <p className="text-3xl font-bold text-gray-900">7.9%</p>
                <p className="text-sm text-green-600 mt-1">+2.1% vs período anterior</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Clientes Ativos</p>
                <p className="text-3xl font-bold text-gray-900">4</p>
                <p className="text-sm text-blue-600 mt-1">Todas automações rodando</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Origem do Tráfego */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Relatório de Tráfego por Origem</h3>
              <div className="space-y-4">
                {trafficSources.map((source, index) => {
                  const IconComponent = source.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${source.color}`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{source.source}</p>
                          <p className="text-sm text-gray-600">{source.visits.toLocaleString()} visitas</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{source.leads} leads</p>
                        <p className="text-sm text-green-600">{source.conversion}% conversão</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dispositivos */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Dispositivos Utilizados</h3>
              <div className="grid grid-cols-3 gap-6">
                {deviceStats.map((device, index) => {
                  const IconComponent = device.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className={`${device.color} p-4 rounded-xl mb-4 inline-block`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-medium text-gray-900">{device.device}</p>
                      <p className="text-2xl font-bold text-gray-900">{device.visits.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">{device.percentage}%</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Horários de Pico */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Horários com Maior Fluxo de Visitantes</h3>
              <div className="flex items-end justify-between h-40 space-x-2">
                {hourlyData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full relative">
                      <div
                        className="bg-blue-500 rounded-t w-full transition-all duration-1000 ease-out"
                        style={{ height: `${(data.visits / 892) * 120}px` }}
                      ></div>
                      <div
                        className="bg-green-500 rounded-t w-full absolute bottom-0 transition-all duration-1000 ease-out"
                        style={{ height: `${(data.leads / 71) * 120}px` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">{data.hour}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-6 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Visitas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Leads</span>
                </div>
              </div>
            </div>

            {/* Mapa de Calor */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Mapa de Calor - Áreas Mais Clicadas</h3>
              <div className="space-y-4">
                {heatmapData.map((area, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full opacity-75"></div>
                      <span className="text-gray-700">{area.area}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${area.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-900 font-medium w-16 text-right">{area.clicks}</span>
                      <span className="text-gray-500 text-sm w-12 text-right">{area.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Lateral */}
          <div className="space-y-8">
            {/* Status das Automações */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Status das Automações</h3>
              <div className="space-y-4">
                {automationStatus.map((automation, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">{automation.client}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        automation.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {automation.status === 'active' ? 'Ativa' : 'Pausada'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>{automation.leads} leads processados</p>
                      <p>Última execução: {automation.lastRun}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Últimos Leads */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Últimos Contatos Recebidos</h3>
              <div className="space-y-4">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{lead.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        lead.status === 'new' ? 'bg-blue-100 text-blue-800' :
                        lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {lead.status === 'new' ? 'Novo' : 
                         lead.status === 'contacted' ? 'Contatado' : 'Qualificado'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>{lead.email}</p>
                      <p>{lead.phone}</p>
                      <p className="text-xs">Cliente: {lead.client}</p>
                      <div className="flex justify-between items-center mt-2">
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

export default AdminPanel;