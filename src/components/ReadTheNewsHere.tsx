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
    <button
      onClick={ handleClick }
    >
      Leia a notícia aqui!
    </button>
  );
}

export default ReadTheNewsHere;
