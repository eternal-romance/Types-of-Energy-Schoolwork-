import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, Home } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import SourceBadge from '../../components/SourceBadge';

const SolarSource = () => {
  return (
    <PageLayout 
      title="Fonte de Energia Solar"
      subtitle="Captação e conversão da radiação solar em energia utilizável"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center"
        >
          <SourceBadge isRenewable={true} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/50"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 mr-4">
              <Sun className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Tecnologias de Aproveitamento</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            A energia solar pode ser aproveitada através de diferentes tecnologias que convertem 
            a radiação solar em formas utilizáveis de energia. Cada tecnologia tem aplicações 
            específicas e níveis diferentes de eficiência, oferecendo soluções versáteis para 
            diversas necessidades energéticas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-blue-800/30 to-blue-700/20 border border-blue-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 mr-3">
                <Zap className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Energia Fotovoltaica</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Converte diretamente a luz solar em eletricidade através do efeito fotovoltaico 
              em células de silício ou outros semicondutores.
            </p>
            <div className="text-sm text-blue-300 bg-blue-900/30 p-3 rounded-lg">
              <strong>Aplicações:</strong> Residências, empresas, usinas solares, dispositivos portáteis
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-orange-800/30 to-orange-700/20 border border-orange-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-orange-600/20 border border-orange-500/30 mr-3">
                <Sun className="h-5 w-5 text-orange-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Energia Térmica</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Utiliza o calor do sol para aquecer fluidos, geralmente água, ou para produzir 
              vapor que pode mover turbinas geradoras.
            </p>
            <div className="text-sm text-orange-300 bg-orange-900/30 p-3 rounded-lg">
              <strong>Aplicações:</strong> Aquecimento de água, piscinas, usinas termossolares
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Vantagens da Energia Solar</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 rounded-full bg-green-600/20 border border-green-500/30 inline-block mb-4">
                <Sun className="h-8 w-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Abundante</h4>
              <p className="text-gray-300 text-sm">Fonte inesgotável de energia disponível diariamente</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-green-600/20 border border-green-500/30 inline-block mb-4">
                <Home className="h-8 w-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Descentralizada</h4>
              <p className="text-gray-300 text-sm">Pode ser instalada próximo ao ponto de consumo</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-green-600/20 border border-green-500/30 inline-block mb-4">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Baixa Manutenção</h4>
              <p className="text-gray-300 text-sm">Sistemas simples com poucos componentes móveis</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Tipos de Instalações</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-purple-600/20 border border-purple-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Sistemas Residenciais</h4>
                <p className="text-gray-300">Painéis instalados em telhados para suprir necessidades domésticas de energia elétrica e aquecimento de água.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Usinas Fotovoltaicas</h4>
                <p className="text-gray-300">Grandes instalações com milhares de painéis que alimentam a rede elétrica com energia limpa em escala comercial.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-blue-600/20 border border-blue-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Sistemas Isolados</h4>
                <p className="text-gray-300">Instalações autônomas para locais sem acesso à rede elétrica, como áreas rurais remotas ou equipamentos móveis.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-2xl p-6 border border-yellow-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-4">Crescimento Mundial</h3>
          <p className="text-gray-300 leading-relaxed">
            A energia solar é a fonte de energia renovável que mais cresce no mundo. Com a queda 
            constante dos custos de instalação e o aumento da eficiência das tecnologias, representa 
            uma solução fundamental para a descarbonização do setor energético e o acesso universal à energia limpa.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default SolarSource;