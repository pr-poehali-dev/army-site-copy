import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Achievements = () => {
  const achievements = [
    { number: '500+', label: 'Участников', icon: 'Users' },
    { number: '₽2M+', label: 'Оборот в месяц', icon: 'DollarSign' },
    { number: '#1', label: 'В рейтинге', icon: 'Crown' },
    { number: '100%', label: 'Надёжность', icon: 'Shield' },
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Основание корпорации',
      description: 'Создание ELITE CORP и начало пути к вершине',
      icon: 'Rocket',
    },
    {
      year: '2024',
      title: 'Первая сотня участников',
      description: 'Достижение важной вехи - 100 активных членов команды',
      icon: 'Users',
    },
    {
      year: '2024',
      title: 'Лидер рейтинга',
      description: 'Выход на первое место в рейтинге корпораций сервера',
      icon: 'Trophy',
    },
    {
      year: '2024',
      title: 'Расширение влияния',
      description: 'Открытие новых направлений бизнеса и партнёрств',
      icon: 'TrendingUp',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Наши достижения</h1>
            <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Цифры, которые говорят сами за себя
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {achievements.map((item, idx) => (
              <Card
                key={idx}
                className="bg-card border-border text-center hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
                    <Icon name={item.icon as any} className="text-primary" size={40} />
                  </div>
                  <div className="text-5xl font-black text-gold mb-2">{item.number}</div>
                  <div className="text-muted-foreground font-semibold">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30 mb-20">
            <CardContent className="p-12">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center flex-shrink-0 animate-glow">
                  <Icon name="Star" className="text-primary-foreground" size={48} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-3">Лидеры индустрии</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    За время существования мы завершили более 1000 успешных сделок, создали 50+
                    рабочих мест и получили признание всего сообщества GTA 5 RP.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-16">
            <h2 className="text-4xl font-black text-center mb-12">Важные вехи</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {milestones.map((milestone, idx) => (
                <Card
                  key={idx}
                  className="bg-card border-border hover:border-primary transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name={milestone.icon as any} className="text-primary" size={32} />
                        </div>
                        <span className="text-primary font-bold text-sm">{milestone.year}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/30">
            <CardContent className="p-12 text-center">
              <Icon name="Award" className="text-primary mx-auto mb-6" size={56} />
              <h2 className="text-3xl font-bold mb-4">Благодарность команде</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                Все наши достижения - это результат слаженной работы каждого члена корпорации. 
                Мы гордимся нашей командой и благодарим каждого за вклад в общее дело. 
                Вместе мы создаём историю!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Achievements;
