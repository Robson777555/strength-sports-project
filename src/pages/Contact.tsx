import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FormularioContato from '@/components/FormularioContato';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Youtube, 
  Star,
  Users,
  Award,
  Heart
} from 'lucide-react';

const Contact = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Heart className="w-4 h-4 mr-2 text-red-500" />
              Especialista em Strength Sports
            </Badge>
          </div>
          <h1 className="section-header mb-6 animate-in fade-in-50 duration-700">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-in fade-in-50 duration-700 delay-200">
            Conecte-se conosco para treinamentos, parcerias ou simplesmente para conversar sobre 
            <span className="font-semibold text-primary"> Strongman</span> e 
            <span className="font-semibold text-secondary"> Arm Wrestling</span>
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-in fade-in-50 duration-700 delay-300">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Atletas Treinados</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">10+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FormularioContato />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-in slide-in-from-right-50 duration-700">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <MessageCircle className="w-6 h-6 mr-3 text-primary" />
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                      <p className="text-muted-foreground mb-2">robsonjobim96@hotmail.com</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('mailto:robsonjobim96@hotmail.com', '_blank')}
                        className="text-xs"
                      >
                        Enviar E-mail
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground mb-2">(51) 99694-0564</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('https://wa.me/5551996940564', '_blank')}
                        className="text-xs bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
                      >
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Chamar no WhatsApp
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                      <p className="text-muted-foreground mb-2">
                        Cachoeira do Sul - RS<br />
                        Brasil
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('https://maps.google.com/?q=Cachoeira+do+Sul+RS+Brasil', '_blank')}
                        className="text-xs"
                      >
                        Ver no Mapa
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:bg-muted/50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">
                        Segunda à Sexta: 9h às 18h<br />
                        Finais de semana: Sob consulta<br />
                        <span className="text-xs text-green-600 font-medium">Online 24/7 via WhatsApp</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Siga-nos nas Redes Sociais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    <Button 
                      variant="outline" 
                      className="justify-start h-12 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600"
                      onClick={() => window.open('https://instagram.com', '_blank')}
                    >
                      <Instagram className="w-5 h-5 mr-3 text-pink-500" />
                      <div className="text-left">
                        <div className="font-medium">Instagram</div>
                        <div className="text-xs text-muted-foreground">@strength_sports_rs</div>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="justify-start h-12 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
                      onClick={() => window.open('https://facebook.com', '_blank')}
                    >
                      <Facebook className="w-5 h-5 mr-3 text-blue-500" />
                      <div className="text-left">
                        <div className="font-medium">Facebook</div>
                        <div className="text-xs text-muted-foreground">Strength Sports RS</div>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="justify-start h-12 hover:bg-red-50 hover:border-red-200 hover:text-red-600"
                      onClick={() => window.open('https://youtube.com', '_blank')}
                    >
                      <Youtube className="w-5 h-5 mr-3 text-red-500" />
                      <div className="text-left">
                        <div className="font-medium">YouTube</div>
                        <div className="text-xs text-muted-foreground">Strength Sports Channel</div>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Sobre
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Especialista em Strongman e Arm Wrestling, compartilhando conhecimento 
                    sobre os maiores atletas do mundo nessas modalidades. Entre em contato 
                    para parcerias, informações ou simplesmente para conversar sobre estes 
                    esportes incríveis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre treinamentos, modalidades e nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                  Como funciona o treinamento de Strongman?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  O treinamento de Strongman combina força, resistência e técnica. 
                  Trabalhamos com exercícios específicos como atlas stones, farmer's walk, 
                  e log press, sempre respeitando o nível do atleta.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-secondary" />
                  Vocês oferecem treinamento para iniciantes?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sim! Temos programas específicos para iniciantes, com foco na técnica 
                  correta e progressão gradual. Cada aluno recebe atenção individualizada 
                  e acompanhamento personalizado.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-500" />
                  Qual a duração de uma sessão de treino?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  As sessões variam de 60 a 90 minutos, dependendo do nível e objetivos 
                  do atleta. Incluímos aquecimento, treino principal e alongamento.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-500" />
                  Vocês fazem treinamento em grupo?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sim! Oferecemos tanto treinamento individual quanto em grupos pequenos 
                  (máximo 6 pessoas) para manter a qualidade e segurança do treino.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              O que Nossos Atletas Dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Depoimentos reais de quem treina conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">
                  "O treinamento de Strongman aqui mudou completamente minha perspectiva 
                  sobre força. Robson é um excelente instrutor, sempre preocupado com 
                  a técnica e segurança."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Marcos Silva</div>
                    <div className="text-xs text-muted-foreground">Atleta de Strongman</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">
                  "Comecei no Arm Wrestling sem experiência nenhuma. Hoje já participo 
                  de competições! A metodologia e paciência do Robson fazem toda diferença."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Ana Costa</div>
                    <div className="text-xs text-muted-foreground">Atleta de Arm Wrestling</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">
                  "Excelente estrutura e equipamentos de qualidade. O ambiente é motivador 
                  e o Robson sempre disponível para tirar dúvidas. Recomendo demais!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    C
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Carlos Santos</div>
                    <div className="text-xs text-muted-foreground">Atleta de Força</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pronto para Começar sua Jornada?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entre em contato agora mesmo e dê o primeiro passo rumo aos seus objetivos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-hero"
              onClick={() => window.open('https://wa.me/5551996940564', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('mailto:robsonjobim96@hotmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Enviar E-mail
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;