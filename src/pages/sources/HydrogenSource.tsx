import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Droplets, Zap } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import SourceBadge from '../../components/SourceBadge';

const HydrogenSource = () => {
  return (
    <PageLayout 
      title="Energia do Hidrogênio"
      subtitle="O elemento mais abundante do universo como vetor energético"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <SourceBadge isRenewable={true} className="bg-green-600/20 text-green-400 border-green-500/30" />
          <div className="text-gray-300 text-sm px-4 py-2 rounded-full bg-slate-700/50 border border-slate-600/50">
            <span>* Renovável quando produzido com energia limpa</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/50"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 mr-4">
              <Atom className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">O Hidrogênio como Energia</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            O hidrogênio é um vetor energético versátil que pode armazenar e transportar energia 
            de forma limpa. Quando queimado ou usado em células de combustível, produz apenas 
            água como subproduto. Sua sustentabilidade depende da forma como é produzido: pode 
            ser renovável quando obtido através de eletrólise usando energia limpa, ou não 
            renovável quando derivado de combustíveis fósseis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-green-800/30 to-green-700/20 border border-green-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-green-600/20 border border-green-500/30 mr-3">
                <Zap className="h-5 w-5 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Hidrogênio Verde</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Produzido através da eletrólise da água usando energia renovável (solar, eólica). 
              Totalmente limpo e sustentável.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-blue-800/30 to-blue-700/20 border border-blue-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 mr-3">
                <Atom className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Hidrogênio Azul</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Produzido a partir de gás natural com captura e armazenamento de carbono. 
              Solução de transição com menores emissões.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-700/20 border border-gray-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-gray-600/20 border border-gray-500/30 mr-3">
                <Droplets className="h-5 w-5 text-gray-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Hidrogênio Cinza</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Produzido a partir de combustíveis fósseis sem captura de carbono. 
              Método mais comum atualmente, mas não sustentável.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-2xl p-8 border border-emerald-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Vantagens do Hidrogênio</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 rounded-full bg-emerald-600/20 border border-emerald-500/30 inline-block mb-4">
                <Droplets className="h-8 w-8 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Emissão Zero</h4>
              <p className="text-gray-300 text-sm">Produz apenas vapor d'água na combustão</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-emerald-600/20 border border-emerald-500/30 inline-block mb-4">
                <Atom className="h-8 w-8 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Alta Densidade</h4>
              <p className="text-gray-300 text-sm">Três vezes mais energia por peso que gasolina</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-emerald-600/20 border border-emerald-500/30 inline-block mb-4">
                <Zap className="h-8 w-8 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Versatilidade</h4>
              <p className="text-gray-300 text-sm">Transporte, industria e armazenamento de energia</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Aplicações Principais</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-blue-600/20 border border-blue-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Transporte</h4>
                <p className="text-gray-300">Veículos com células de combustível, ônibus urbanos, trens e navios movidos a hidrogênio.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Indústria</h4>
                <p className="text-gray-300">Produção de aço, refino de petróleo, fabricação de amônia e processos químicos diversos.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-purple-600/20 border border-purple-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Armazenamento</h4>
                <p className="text-gray-300">Reserva de energia renovável para uso posterior, equilibrando oferta e demanda na rede elétrica.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-2xl p-8 border border-amber-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Desafios Atuais</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-amber-600/20 border border-amber-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Custos de Produção</h4>
                <p className="text-gray-300">Eletrólise ainda é cara comparada aos métodos convencionais, mas custos estão diminuindo.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-orange-600/20 border border-orange-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Armazenamento e Transporte</h4>
                <p className="text-gray-300">Requer altas pressões ou baixas temperaturas, demandando infraestrutura especializada.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Infraestrutura</h4>
                <p className="text-gray-300">Necessidade de desenvolver rede de distribuição e postos de abastecimento.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl p-6 border border-purple-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-4">Futuro do Hidrogênio</h3>
          <p className="text-gray-300 leading-relaxed">
            O hidrogênio é considerado fundamental para a transição energética global, especialmente 
            em setores difíceis de eletrificar como aviação, navegação e indústria pesada. Com 
            investimentos crescentes e avanços tecnológicos, o hidrogênio verde pode se tornar uma 
            das principais soluções para um futuro energético sustentável e livre de carbono.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default HydrogenSource;