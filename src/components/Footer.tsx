import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (path === '/') {
      // Se estiver na home, scroll para o topo
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        // Aguarda a navegação e depois scroll para o topo
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    } else if (path === '/atletas') {
      // Se estiver na home, scroll para a seção de atletas
      if (location.pathname === '/') {
        const atletasSection = document.getElementById('atletas');
        if (atletasSection) {
          atletasSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Se estiver em outra página, navega para atletas e scroll para o topo
        navigate('/atletas');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Para outras páginas, navega normalmente
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SW</span>
              </div>
              <span className="text-xl font-bold">StrongWorld</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              O portal definitivo dos maiores strongmen e arm wrestlers do mundo. 
              Conectando fãs com os atletas mais extraordinários do planeta.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Links Rápidos</h3>
            <nav className="space-y-2">
              <button 
                onClick={() => handleNavigation('/')} 
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/atletas')} 
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Atletas
              </button>
              <button 
                onClick={() => handleNavigation('/contato')} 
                className="block text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>robsonjobim96@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>(51) 99694-0564</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Cachoeira do Sul - RS, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 StrongWorld. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Robson Jobim - Cachoeira do Sul RS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;