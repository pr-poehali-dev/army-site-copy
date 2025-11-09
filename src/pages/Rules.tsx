import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Rules = () => {
  const rules = [
    {
      title: 'Субординация',
      description: 'Уважение к старшим по званию - основа нашей структуры. Следуйте указаниям руководства и соблюдайте иерархию.',
      icon: 'UserCog',
    },
    {
      title: 'Дисциплина',
      description: 'Соблюдение внутренних распоряжений обязательно для всех. Приказы выполняются чётко и своевременно.',
      icon: 'Scale',
    },
    {
      title: 'Активность',
      description: 'Регулярное участие в жизни корпорации - залог успеха. Минимум 3 выхода в неделю обязательны.',
      icon: 'Activity',
    },
    {
      title: 'Лояльность',
      description: 'Преданность корпорации превыше личных интересов. Не разглашайте внутреннюю информацию третьим лицам.',
      icon: 'Heart',
    },
    {
      title: 'Профессионализм',
      description: 'Поддерживайте имидж корпорации на высшем уровне. Вежливость и компетентность во всём.',
      icon: 'Briefcase',
    },
    {
      title: 'Взаимопомощь',
      description: 'Помогайте коллегам в сложных ситуациях. Вместе мы сильнее и достигаем большего.',
      icon: 'HandHeart',
    },
  ];

  const sanctions = [
    {
      title: 'Первое нарушение',
      description: 'Устное предупреждение от непосредственного руководителя',
      severity: 'low',
    },
    {
      title: 'Второе нарушение',
      description: 'Официальное предупреждение с занесением в личное дело',
      severity: 'medium',
    },
    {
      title: 'Третье нарушение',
      description: 'Понижение в должности или временное отстранение',
      severity: 'high',
    },
    {
      title: 'Грубое нарушение',
      description: 'Немедленное исключение из корпорации без права восстановления',
      severity: 'critical',
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-green-500';
      case 'medium':
        return 'text-yellow-500';
      case 'high':
        return 'text-orange-500';
      case 'critical':
        return 'text-red-500';
      default:
        return 'text-primary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-black mb-6">Правила корпорации</h1>
            <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Основные принципы, которыми руководствуются все участники ELITE CORP
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
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
                      <h3 className="text-2xl font-bold mb-3">{rule.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-black text-center mb-12">Система наказаний</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {sanctions.map((sanction, idx) => (
                <Card
                  key={idx}
                  className="bg-card border-border animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <Icon
                        name="AlertTriangle"
                        className={getSeverityColor(sanction.severity)}
                        size={28}
                      />
                      <h3 className="text-xl font-bold">{sanction.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-12">
                      {sanction.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/30 mb-12">
            <CardContent className="p-8">
              <Icon name="AlertCircle" className="text-primary mx-auto mb-4" size={40} />
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                <span className="text-primary font-bold">Важно:</span> Нарушение любого из правил
                может привести к исключению из корпорации. Мы ценим каждого участника, но
                интересы организации всегда на первом месте.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30">
            <CardContent className="p-12">
              <div className="flex items-start gap-8">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center flex-shrink-0 animate-glow">
                  <Icon name="BookOpen" className="text-primary-foreground" size={48} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Кодекс чести</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Помимо основных правил, каждый член ELITE CORP должен следовать кодексу чести:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Всегда действуйте в интересах корпорации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Поддерживайте репутацию организации на высшем уровне</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Будьте честны с коллегами и руководством</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Стремитесь к постоянному развитию и совершенствованию</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rules;
