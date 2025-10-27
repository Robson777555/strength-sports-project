import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AthleteCard from '@/components/AthleteCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Globe } from 'lucide-react';

// Import athlete images
import johnBrzezinImg from '@/assets/jhon.jpg';
import brianShawImg from '@/assets/bra.jpg';
import devonLarrattImg from '@/assets/devon.jpg';
import eddieHallImg from '@/assets/edie.jpg';
import levanSaginashviliImg from '@/assets/lev.jpg';
import thorBjornssonImg from '@/assets/thor.jpg';

const Home = () => {
  const featuredAthletes = [
    {
      name: "John Brzezin",
      sport: "Arm Wrestling",
      weight: "110 kg",
      country: "EUA",
      description: "John é um cara incrível no arm wrestling. Sua técnica é simplesmente perfeita e a explosão que ele consegue nas categorias de peso médio é de outro mundo.",
      image: johnBrzezinImg,
      achievements: [
        "3x Campeão Mundial WAL",
        "Recordista em sua categoria",
        "Técnico especializado"
      ]
    },
    {
      name: "Brian Shaw",
      sport: "Strongman",
      weight: "195 kg",
      country: "EUA",
      description: "Brian Shaw é simplesmente uma lenda. Quatro títulos de World's Strongest Man falam por si só. O cara é um gigante gentil fora das competições.",
      image: brianShawImg,
      achievements: [
        "4x World's Strongest Man",
        "3x Arnold Strongman Classic",
        "Recordista mundial"
      ]
    },
    {
      name: "Devon Larratt",
      sport: "Arm Wrestling",
      weight: "125 kg",
      country: "Canadá",
      description: "Devon é o cara que transformou o arm wrestling em arte. Veterano militar, ele domina este esporte há décadas e ainda continua evoluindo.",
      image: devonLarrattImg,
      achievements: [
        "Múltiplo campeão mundial",
        "Lenda do arm wrestling",
        "Influenciador do esporte"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* Featured Athletes Section */}
      <section id="atletas" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-header mb-6">Conheça os Gigantes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estes são alguns dos atletas que mais me impressionam no mundo dos esportes de força. 
              Cada um tem uma história única e conquistas que parecem impossíveis para nós, meros mortais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredAthletes.map((athlete, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <AthleteCard {...athlete} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/atletas">
              <Button size="lg" className="btn-hero group">
                Ver Todos os Atletas
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-header mb-6">O Site Possui</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <p className="text-muted-foreground">Campeões Mundiais</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <p className="text-muted-foreground">Atletas Profissionais</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <p className="text-muted-foreground">Países Representados</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
