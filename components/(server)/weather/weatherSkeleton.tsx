import { CardWeather } from "@/components/Card/cardWeather";

export function WeatherSkeleton() {
  return (
    <div className="animate-pulse">
      <CardWeather
        emoji="🌡️"
        title="Chargement..."
        description="Récupération des données météo..."
      />
    </div>
  );
}
