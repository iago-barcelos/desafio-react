import whiteHearSVG from '../assets/white-heart.svg';
import redHeartSVG from '../assets/red-heart.svg';

type FavoriteButtonProps = {
  isFavorite: boolean,
  onClick: (isFavorite: boolean) => void
}

// Componente para favoritar/desfavoritar a notícia

function FavoriteButton({ isFavorite, onClick }: FavoriteButtonProps) {

  function handleHeartClick() {
    onClick(!isFavorite);
  }

  return (
    <button onClick={ () => handleHeartClick()} >
      <img 
        src={ isFavorite ? redHeartSVG : whiteHearSVG } 
        alt={ isFavorite ? 'Favoritado' : 'Desfavoritado' } 
      />
    </button>
  );
}

export default FavoriteButton;