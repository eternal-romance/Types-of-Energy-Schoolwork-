import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Flame } from 'lucide-react';
import PageLayout from '../../components/PageLayout';
import SourceBadge from '../../components/SourceBadge';

const BiomassSource = () => {
  return (
    <PageLayout 
      title="Energia da Biomassa"
      subtitle="Aproveitamento energético de materiais orgânicos renováveis"
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
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 mr-4">
              <Leaf className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">O que é Biomassa</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            A biomassa compreende todos os materiais orgânicos de origem vegetal ou animal que 
            podem ser utilizados para produção de energia. Inclui madeira, resíduos agrícolas, 
            dejetos animais, restos urbanos orgânicos e culturas energéticas específicas. 
            É considerada renovável porque o CO₂ liberado na combustão é reabsorvido pelas plantas 
            durante seu crescimento.
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
                <Leaf className="h-5 w-5 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Biomassa Florestal</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Madeira, galhos, folhas e outros resíduos de exploração florestal sustentável 
              e podas de árvores urbanas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-yellow-800/30 to-yellow-700/20 border border-yellow-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-yellow-600/20 border border-yellow-500/30 mr-3">
                <Recycle className="h-5 w-5 text-yellow-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Resíduos Agrícolas</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Bagaço de cana, casca de arroz, palha de milho, restos de colheita e 
              outros subprodutos da agricultura.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-orange-800/30 to-orange-700/20 border border-orange-600/50"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-orange-600/20 border border-orange-500/30 mr-3">
                <Flame className="h-5 w-5 text-orange-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Biogás</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Gás produzido pela decomposição de matéria orgânica em biodigestores, 
              aterros sanitários e estações de tratamento.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-2xl p-8 border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Formas de Conversão</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Combustão Direta</h4>
                <p className="text-gray-300">Queima direta da biomassa para produzir calor que pode gerar vapor e eletricidade.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-green-600/20 border border-green-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Fermentação</h4>
                <p className="text-gray-300">Processo biológico que converte açúcares em álcool etílico (etanol) para combustível.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full bg-blue-600/20 border border-blue-500/30 flex-shrink-0">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Digestão Anaeróbica</h4>
                <p className="text-gray-300">Decomposição de matéria orgânica sem oxigênio, produzindo biogás (metano e CO₂).</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Vantagens</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Utiliza resíduos que seriam descartados</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Contribui para economia circular</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Reduz emissões líquidas de CO₂</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Gera empregos em áreas rurais</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Disponível localmente</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Tecnologia madura e acessível</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Aplicações Principais</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 rounded-full bg-purple-600/20 border border-purple-500/30 inline-block mb-4">
                <Flame className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Geração Elétrica</h4>
              <p className="text-gray-300 text-sm">Usinas termoelétricas movidas a biomassa</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-purple-600/20 border border-purple-500/30 inline-block mb-4">
                <Recycle className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Biocombustíveis</h4>
              <p className="text-gray-300 text-sm">Etanol, biodiesel e biogás para transportes</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-full bg-purple-600/20 border border-purple-500/30 inline-block mb-4">
                <Leaf className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Aquecimento</h4>
              <p className="text-gray-300 text-sm">Calor para residências e processos industriais</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          className="text-center bg-gradient-to-r from-emerald-600/10 to-green-600/10 rounded-2xl p-6 border border-emerald-500/30"
        >
          <h3 className="text-xl font-bold text-white mb-4">Sustentabilidade</h3>
          <p className="text-gray-300 leading-relaxed">
            A biomassa representa uma oportunidade única de converter resíduos em energia útil, 
            contribuindo para a economia circular e redução de impactos ambientais. Quando gerenciada 
            de forma sustentável, pode fornecer energia renovável sem competir com a produção de 
            alimentos, aproveitando materiais que de outra forma seriam desperdiçados.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default BiomassSource;