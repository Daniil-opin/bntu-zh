const mapImageUrl = "https://static-maps.yandex.ru/1.x/?ll=27.593196%2C53.921009&size=650,450&z=15&l=map&pt=27.593196%2C53.921009,pm2rdm";

export function MapEmbed() {
  return (
    <img
      src={mapImageUrl}
      alt="Карта расположения БНТУ в Минске"
      loading="eager"
    />
  );
}
