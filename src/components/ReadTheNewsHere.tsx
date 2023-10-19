import * as Style from '../styles/ReadTheNewsHereStyle';

type ButtonProps = {
  link: string,
  onClick: (link:string) => void
};

// Componente configurado para criar um botão que quando clicado leva ao site da notícia

function ReadTheNewsHere({link, onClick}: ButtonProps) {
  function handleClick() {
    onClick(link)
  }
  
  return (
    <Style.ReadTheNewsButton
      onClick={ handleClick }
    >
      Leia a notícia aqui!
    </Style.ReadTheNewsButton>
  );
}

export default ReadTheNewsHere;
