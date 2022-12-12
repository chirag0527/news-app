import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './App.css';

function App() {

  const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2d59cb4a32cd4c43a70d764ea1c34fec"

  const min = 1;
  const max = 5;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const min2 = 6;
  const max2 = 10;
  const randomNumber2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;

  const min3 = 11;
  const max3 = 15;
  const randomNumber3 = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;

  const min4 = 16;
  const max4 = 20;
  const randomNumber4 = Math.floor(Math.random() * (max4 - min4 + 1)) + min4;

  let t1, d1, t2, d2, t3, d3, t4, d4 = ""

  async function setvalues(){

    const response = await fetch(url);
    const json = await response.json();

    t1 = json.articles[randomNumber].title
    d1 = json.articles[randomNumber].description
    t2 = json.articles[randomNumber2].title
    d2 = json.articles[randomNumber2].description
    t3 = json.articles[randomNumber3].title
    d3= json.articles[randomNumber3].description
    t4 = json.articles[randomNumber4].title
    d4 = json.articles[randomNumber4].description
  }

  console.log(t1, d1)

  return (
    <><Navbar />
    <Main 
      title1 = {t1}
      desc1 = {d1}
      title2 = {t2}
      desc2 = {d2}
      title3 = {t3}
      desc3 = {d3}
      title4 = {t4}
      desc4 = {d4}

    /></>
  );
}

export default App;
