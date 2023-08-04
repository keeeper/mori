const shuffle = () => {
  const assets = [
    {image: "/assets/icons/fish.svg"},
    {image: "/assets/icons/tiger.svg"},
    {image: "/assets/icons/monkey.svg"},
    {image: "/assets/icons/dragon.svg"},
    {image: "/assets/icons/ox.svg"},
    {image: "/assets/icons/horse.svg"},
    {image: "/assets/icons/rabbit.svg"},
    {image: "/assets/icons/rooster.svg"},
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}));
}

export default shuffle;