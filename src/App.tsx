import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Concept from './pages/Concept';
import MechanicalEnergy from './pages/types/MechanicalEnergy';
import ThermalEnergy from './pages/types/ThermalEnergy';
import ElectricalEnergy from './pages/types/ElectricalEnergy';
import ChemicalEnergy from './pages/types/ChemicalEnergy';
import NuclearEnergy from './pages/types/NuclearEnergy';
import SolarEnergyType from './pages/types/SolarEnergyType';
import HydroelectricSource from './pages/sources/HydroelectricSource';
import SolarSource from './pages/sources/SolarSource';
import WindSource from './pages/sources/WindSource';
import GeothermalSource from './pages/sources/GeothermalSource';
import BiomassSource from './pages/sources/BiomassSource';
import TidalSource from './pages/sources/TidalSource';
import HydrogenSource from './pages/sources/HydrogenSource';
import FossilFuelsSource from './pages/sources/FossilFuelsSource';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conceito" element={<Concept />} />
            <Route path="/tipos/mecanica" element={<MechanicalEnergy />} />
            <Route path="/tipos/termica" element={<ThermalEnergy />} />
            <Route path="/tipos/eletrica" element={<ElectricalEnergy />} />
            <Route path="/tipos/quimica" element={<ChemicalEnergy />} />
            <Route path="/tipos/nuclear" element={<NuclearEnergy />} />
            <Route path="/tipos/solar" element={<SolarEnergyType />} />
            <Route path="/fontes/hidreletrica" element={<HydroelectricSource />} />
            <Route path="/fontes/solar" element={<SolarSource />} />
            <Route path="/fontes/eolica" element={<WindSource />} />
            <Route path="/fontes/geotermica" element={<GeothermalSource />} />
            <Route path="/fontes/biomassa" element={<BiomassSource />} />
            <Route path="/fontes/mares" element={<TidalSource />} />
            <Route path="/fontes/hidrogenio" element={<HydrogenSource />} />
            <Route path="/fontes/fosseis" element={<FossilFuelsSource />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;