import whiteHeartSVG from '../assets/white-heart.svg';
import redHeartSVG from '../assets/red-heart.svg';
import { useState } from 'react';
import { HeartButton } from '../styles/NewsCardsStyle';

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
    <HeartButton onClick={handleHeartClick}>
      <img
        src={localIsFavorite ? redHeartSVG : whiteHeartSVG } 
        alt={localIsFavorite ? 'Coração Vazio' : 'Coração Vermelho'}
      />
    </HeartButton>
  );
}

export default FavoriteButton;

