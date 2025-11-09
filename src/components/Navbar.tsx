import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/about', label: 'О корпорации', icon: 'Building2' },
    { path: '/achievements', label: 'Достижения', icon: 'Trophy' },
    { path: '/rules', label: 'Правила', icon: 'ScrollText' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center animate-glow">
              <Icon name="Briefcase" className="text-primary-foreground" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-gold">ELITE CORP</h1>
          </Link>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                {item.label}
              </Link>
            ))}
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Вступить
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
