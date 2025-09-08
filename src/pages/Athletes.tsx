import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AthleteCard from '@/components/AthleteCard';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Import athlete images
import johnBrzezinImg from '@/assets/jhon.jpg';
import brianShawImg from '@/assets/bra.jpg';
import devonLarrattImg from '@/assets/devon.jpg';
import eddieHallImg from '@/assets/edie.jpg';
import levanSaginashviliImg from '@/assets/lev.jpg';
import thorBjornssonImg from '@/assets/thor.jpg';

const Athletes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('all');
  const [selectedWeight, setSelectedWeight] = useState('all');

  const allAthletes = [
    {
      name: "John Brzezin",
      sport: "Arm Wrestling",
      weight: "110 kg",
      country: "EUA",
      description: "John é um jovem talento do arm wrestling americano. Nascido em 1994, ele vem dominando sua categoria com uma técnica impressionante.",
      image: johnBrzezinImg,
      aliases: ["john", "brzezin", "jhon", "jon", "johnny", "j", "jb"],
      achievements: [
        "3x Campeão WAL Ultimate Armwrestling League",
        "Campeão de sua categoria",
        "Mentor de jovens atletas"
      ]
    },
    {
      name: "Brian Shaw",
      sport: "Strongman",
      weight: "195 kg",
      country: "EUA",
      description: "Brian é um gigante gentil que marcou época no strongman. Seus quatro títulos de World's Strongest Man falam por si só.",
      image: brianShawImg,
      aliases: ["brian", "shaw", "b", "bs", "brian shaw", "gigante", "strongman"],
      achievements: [
        "4x World's Strongest Man (2011, 2013, 2015, 2016)",
        "3x Arnold Strongman Classic",
        "Recordista em diversos eventos"
      ]
    },
    {
      name: "Devon Larratt",
      sport: "Arm Wrestling",
      weight: "125 kg",
      country: "Canadá",
      description: "Devon é simplesmente o cara no arm wrestling. Ex-militar, ele transformou este esporte e continua sendo uma referência mundial.",
      image: devonLarrattImg,
      aliases: ["devon", "larratt", "dev", "d", "dl", "devon larratt", "militar"],
      achievements: [
        "Múltiplo campeão mundial",
        "Lenda viva do arm wrestling",
        "Influenciador global do esporte"
      ]
    },
    {
      name: "Eddie Hall",
      sport: "Strongman",
      weight: "180 kg",
      country: "Reino Unido",
      description: "Eddie 'The Beast' Hall fez história ao ser o primeiro homem a levantar 500kg no deadlift. Sua força é simplesmente absurda.",
      image: eddieHallImg,
      aliases: ["eddie", "hall", "ed", "edi", "Edi", "Edie", "edie", "e", "eh", "eddie hall", "beast", "the beast"],
      achievements: [
        "World's Strongest Man 2017",
        "Recordista mundial de deadlift (500kg)",
        "Pioneiro em levantamentos extremos"
      ]
    },
    {
      name: "Levan Saginashvili",
      sport: "Arm Wrestling",
      weight: "175 kg",
      country: "Geórgia",
      description: "Levan é uma máquina no arm wrestling. Este georgiano é praticamente imbatível e tem uma força de braço que parece sobrenatural.",
      image: levanSaginashviliImg,
      aliases: ["levan", "saginashvili", "lev", "l", "ls", "levan saginashvili", "georgiano", "máquina"],
      achievements: [
        "Campeão mundial atual",
        "Invicto há mais de 5 anos",
        "Recordista em múltiplas categorias"
      ]
    },
    {
      name: "Hafþór Júlíus Björnsson",
      sport: "Strongman",
      weight: "175 kg",
      country: "Islândia",
      description: "Thor, como é conhecido, é famoso tanto pelo strongman quanto por interpretar 'The Mountain' em Game of Thrones. Um islandês impressionante.",
      image: thorBjornssonImg,
      aliases: ["thor", "bjornsson", "hafthor", "hafþór", "julius", "júlíus", "t", "tb", "thor bjornsson", "mountain", "the mountain", "islandês"],
      achievements: [
        "World's Strongest Man 2018",
        "Recordista mundial de deadlift",
        "Ator em Game of Thrones"
      ]
    }
  ];

  const sports = ['all', 'Strongman', 'Arm Wrestling'];
  const weights = ['all', 'Leve (até 90kg)', 'Médio (90-130kg)', 'Pesado (130kg+)'];

  const getWeightCategory = (weight: string) => {
    const kg = parseInt(weight);
    if (kg <= 90) return 'Leve (até 90kg)';
    if (kg <= 130) return 'Médio (90-130kg)';
    return 'Pesado (130kg+)';
  };

  const filteredAthletes = allAthletes.filter(athlete => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === '' || 
                         athlete.name.toLowerCase().includes(searchLower) ||
                         athlete.country.toLowerCase().includes(searchLower) ||
                         athlete.aliases.some(alias => alias.toLowerCase().includes(searchLower));
    const matchesSport = selectedSport === 'all' || athlete.sport === selectedSport;
    const matchesWeight = selectedWeight === 'all' || getWeightCategory(athlete.weight) === selectedWeight;

    return matchesSearch && matchesSport && matchesWeight;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-header mb-6">Os Atletas</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aqui estão os caras que me fazem questionar se somos da mesma espécie
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Digite o nome do atleta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground text-center">Esporte:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {sports.map(sport => (
                    <button
                      key={sport}
                      onClick={() => setSelectedSport(sport)}
                      className={`filter-btn ${
                        selectedSport === sport ? 'filter-btn-active' : 'filter-btn-inactive'
                      }`}
                    >
                      {sport === 'all' ? 'Todos' : sport}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground text-center">Categoria:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {weights.map(weight => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`filter-btn ${
                        selectedWeight === weight ? 'filter-btn-active' : 'filter-btn-inactive'
                      }`}
                    >
                      {weight === 'all' ? 'Todas' : weight}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAthletes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAthletes.map((athlete, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <AthleteCard {...athlete} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Nenhum atleta encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Athletes;