import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Lightbulb, Flame, Battery } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Concept = () => {
  const examples = [
    {
      icon: Lightbulb,
      title: "Energia Luminosa",
      description: "A luz do sol que nos aquece e permite a fotossíntese das plantas"
    },
    {
      icon: Flame,
      title: "Energia Térmica",
      description: "O calor que sentimos ao nos aproximarmos de uma fogueira"
    },
    {
      icon: Battery,
      title: "Energia Elétrica",
      description: "A corrente que alimenta nossos dispositivos eletrônicos"
    }
  ];

  return (
    <PageLayout 
      title="O que é Energia?"
      subtitle="A capacidade fundamental de realizar trabalho e promover mudanças no universo"
    >
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-600/50 backdrop-blur-sm">
            <p className="text-gray-300 leading-relaxed mb-6 text-xl">
              A energia é uma propriedade fundamental da natureza que representa a capacidade de um sistema 
              realizar trabalho ou causar mudanças. Está presente em tudo ao nosso redor, desde o movimento 
              das partículas microscópicas até o brilho das estrelas distantes.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              Segundo a física, a energia não pode ser criada nem destruída, apenas transformada de uma 
              forma em outra. Este princípio, conhecido como Lei da Conservação da Energia, governa todos 
              os processos naturais e tecnológicos que conhecemos.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Exemplos no Cotidiano
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/40 to-slate-700/20 border border-slate-600/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30">
                    <example.icon className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{example.title}</h3>
                <p className="text-gray-300 leading-relaxed">{example.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30 mr-4">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Transformações Energéticas</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            A energia está constantemente se transformando ao nosso redor. Quando você pedala uma bicicleta, 
            a energia química dos alimentos é convertida em energia mecânica do movimento. Quando liga uma 
            lâmpada, a energia elétrica se transforma em energia luminosa e térmica.
          </p>
          
          <div className="flex items-center justify-center text-blue-400">
            <span className="text-lg font-medium">Energia Química</span>
            <ArrowRight className="h-5 w-5 mx-4" />
            <span className="text-lg font-medium">Energia Mecânica</span>
            <ArrowRight className="h-5 w-5 mx-4" />
            <span className="text-lg font-medium">Energia Elétrica</span>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Concept;