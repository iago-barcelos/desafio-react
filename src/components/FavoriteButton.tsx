import whiteHeartSVG from '../assets/white-heart.svg';
import redHeartSVG from '../assets/red-heart.svg';
import { useState } from 'react';

type FavoriteButtonProps = {
  isFavorite: boolean,
  onClick: (isFavorite: boolean) => void
}

function FavoriteButton({ isFavorite, onClick }: FavoriteButtonProps) {
  const [localIsFavorite, setLocalIsFavorite] = useState(isFavorite);

  const handleHeartClick = () => {
    const newIsFavorite = !localIsFavorite;
    setLocalIsFavorite(newIsFavorite);
    onClick(localIsFavorite);
  }

  return (
    <button onClick={handleHeartClick}>
      <img
        src={localIsFavorite ? redHeartSVG : whiteHeartSVG } 
        alt={localIsFavorite ? 'Coração Vazio' : 'Coração Vermelho'}
      />
    </button>
  );
}

export default FavoriteButton;

