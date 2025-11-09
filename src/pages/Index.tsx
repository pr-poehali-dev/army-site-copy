import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О корпорации', icon: 'Building2' },
    { id: 'achievements', label: 'Достижения', icon: 'Trophy' },
    { id: 'rules', label: 'Правила', icon: 'ScrollText' },
  ];

  const achievements = [
    { number: '500+', label: 'Участников', icon: 'Users' },
    { number: '₽2M+', label: 'Оборот в месяц', icon: 'DollarSign' },
    { number: '#1', label: 'В рейтинге', icon: 'Crown' },
    { number: '100%', label: 'Надёжность', icon: 'Shield' },
  ];

  const rules = [
    {
      title: 'Субординация',
      description: 'Уважение к старшим по званию - основа нашей структуры',
      icon: 'UserCog',
    },
    {
      title: 'Дисциплина',
      description: 'Соблюдение внутренних распоряжений обязательно для всех',
      icon: 'Scale',
    },
    {
      title: 'Активность',
      description: 'Регулярное участие в жизни корпорации - залог успеха',
      icon: 'Activity',
    },
    {
      title: 'Лояльность',
      description: 'Преданность корпорации превыше личных интересов',
      icon: 'Heart',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center animate-glow">
                <Icon name="Briefcase" className="text-primary-foreground" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gold">ELITE CORP</h1>
            </div>
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Вступить
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden"
      >
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
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h3 className="text-4xl md:text-5xl font-black mb-6">О корпорации</h3>
            <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              ELITE CORP - это не просто корпорация, это образ жизни. Основанная в 2024 году,
              мы быстро стали лидерами рынка благодаря инновационным подходам и сильной команде.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Target',
                title: 'Наша миссия',
                text: 'Создание империи, где каждый участник может реализовать свой потенциал',
              },
              {
                icon: 'Eye',
                title: 'Наше видение',
                text: 'Стать эталоном успеха и профессионализма в мире GTA 5 RP',
              },
              {
                icon: 'Gem',
                title: 'Наши ценности',
                text: 'Честь, амбиции, единство и стремление к совершенству',
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={item.icon as any} className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-4xl md:text-5xl font-black mb-6">Наши достижения</h3>
            <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Цифры, которые говорят сами за себя
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
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
          <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30">
            <CardContent className="p-12">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center flex-shrink-0 animate-glow">
                  <Icon name="Star" className="text-primary-foreground" size={48} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-3">Лидеры индустрии</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    За время существования мы завершили более 1000 успешных сделок, создали 50+
                    рабочих мест и получили признание всего сообщества GTA 5 RP.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="rules" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-4xl md:text-5xl font-black mb-6">Правила корпорации</h3>
            <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Основные принципы, которыми руководствуются все участники ELITE CORP
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {rules.map((rule, idx) => (
              <Card
                key={idx}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={rule.icon as any} className="text-primary" size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">{rule.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Card className="bg-primary/5 border-primary/30 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <Icon name="AlertCircle" className="text-primary mx-auto mb-4" size={40} />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span className="text-primary font-bold">Важно:</span> Нарушение любого из правил
                  может привести к исключению из корпорации. Мы ценим каждого участника, но
                  интересы организации всегда на первом месте.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border bg-card">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Briefcase" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <div className="text-xl font-bold text-gold">ELITE CORP</div>
                <div className="text-sm text-muted-foreground">GTA 5 RP</div>
              </div>
            </div>
            <div className="text-center text-muted-foreground">
              <p>© 2024 ELITE CORP. Все права защищены.</p>
              <p className="text-sm mt-1">Создано для лучших из лучших</p>
            </div>
            <div className="flex gap-4">
              {['MessageCircle', 'Users', 'Mail'].map((icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  <Icon name={icon as any} className="text-muted-foreground" size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
