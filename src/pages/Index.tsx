import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-semibold">GTA 5 RP • Элитная корпорация</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              Добро пожаловать в
              <br />
              <span className="text-gold">ELITE CORP</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Мы - элита бизнеса в GTA 5 RP. Объединяем амбициозных игроков для достижения
              невозможного. Власть, деньги, репутация - всё это ждёт тебя.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 animate-glow">
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать карьеру
              </Button>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8"
                >
                  Узнать больше
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
