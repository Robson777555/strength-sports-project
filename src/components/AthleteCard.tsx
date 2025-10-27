interface AthleteCardProps {
  name: string;
  sport: string;
  weight: string;
  country: string;
  description: string;
  image: string;
  achievements?: string[];
}

const AthleteCard = ({ name, sport, weight, country, description, image, achievements }: AthleteCardProps) => {
  return (
    <div className="athlete-card group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={`${name} - ${sport}`}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
          <p className="text-primary font-medium">{sport}</p>
        </div>

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Peso: {weight}</span>
          <span>{country}</span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Principais Conquistas:</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AthleteCard;