import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-black mb-6">О корпорации</h1>
            <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              ELITE CORP - это не просто корпорация, это образ жизни. Основанная в 2024 году,
              мы быстро стали лидерами рынка благодаря инновационным подходам и сильной команде.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
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

          <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30 mb-20">
            <CardContent className="p-12">
              <div className="flex items-start gap-8">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center flex-shrink-0 animate-glow">
                  <Icon name="Building2" className="text-primary-foreground" size={48} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">История создания</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    ELITE CORP была основана группой опытных бизнесменов, которые понимали, что 
                    успех в мире GTA 5 RP требует не только амбиций, но и чёткой структуры, 
                    профессионализма и взаимовыручки.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    За короткое время мы выросли от небольшой команды до одной из самых влиятельных 
                    корпораций на сервере, объединив под своим крылом лучших специалистов в различных 
                    сферах деятельности.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Users" className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">Наша команда</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Мы гордимся нашей командой профессионалов. Каждый участник корпорации прошёл 
                  строгий отбор и доказал свою компетентность. У нас работают лучшие специалисты 
                  в области финансов, логистики, безопасности и развития бизнеса.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">Наш рост</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Благодаря эффективному управлению и инновационным стратегиям, мы показываем 
                  стабильный рост во всех направлениях. Каждый месяц мы расширяем сферы влияния, 
                  открываем новые направления бизнеса и увеличиваем прибыль.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
