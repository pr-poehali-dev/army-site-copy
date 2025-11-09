import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
