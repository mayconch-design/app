import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo } from './mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para higienização de estofados.";
    const url = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">TM</div>
            <div className="text-gray-700">
              <div className="text-lg font-semibold">Higienização</div>
              <div className="text-xs text-gray-500">Bertioga - SP</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contato
            </button>
          </nav>

          {/* WhatsApp Button */}
          <Button 
            onClick={handleWhatsAppClick}
            className="hidden md:flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            <Phone size={18} />
            <span>(13) 99704-3410</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="flex flex-col py-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Preços
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                Contato
              </button>
              <div className="px-4 py-3">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white"
                >
                  <Phone size={18} />
                  <span>(13) 99704-3410</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;