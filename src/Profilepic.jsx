

const Profilepic = () => {
  const imgURL = "./src/assets/Baby.tux-800x800.png";
  const handleClick = (e) =>  e.target.style.display = 'none';    
  return  <img onClick={(e) => handleClick (e)} src={imgURL} draggable="false" height={300}></img>;
};

export default Profilepic;
