import { Container , Row , Col } from "react-bootstrap";
import './products.scss';
import emojiCottonCandy from "../../assets/img/emoji.png";
import emojiDonut from "../../assets/img/donutemoji.png";
import chocolateBarEmoji from "../../assets/img/chocolateBarEmoji.png";
import cakeEmoji from "../../assets/img/cake.png";
import candyEmoji from "../../assets/img/candyEmoji.png";
import lolipopEmoji from "../../assets/img/lolipopEmoji.png"
import pieEmoji from "../../assets/img/pieCakeEmoji.webp"
import mooncakeEmoji from "../../assets/img/mooncakeEmoji.webp"
import Product from "../../components/productObj/ProductObj";


const strawberryCottonCandy  = new Product("Strawberry Cotton Candy","This cotton candy is very good","2",emojiCottonCandy)
const donut  = new Product("Donut","This donut is one of the best in the world","3",emojiDonut)
const chocolateBar  = new Product("Chocolate Bar","This chocolate bar taste like feastable (mr.beast chocolate bar)","8",chocolateBarEmoji)
const cake  = new Product("Cake","This birthday cake is for your birthday !","25",cakeEmoji)
const candy  = new Product("Candy","Don't it too much or you'll have problem with your teeth","0.25",candyEmoji)
const lolipop  = new Product("Lolipop","Same for the candy , don't it too much h","0.5",lolipopEmoji)
const pie  = new Product("Pie","I don't know if this is an apple pie or an pumpkin pie, but it taste good","9.5",pieEmoji)
const mooncake  = new Product("MoonCake","Wait, this wasn't made on the moon ? ","4",mooncakeEmoji)

const productList = [strawberryCottonCandy , donut, chocolateBar , cake, candy, lolipop , pie , mooncake]

const Products = ()=>{
  return(
    <Container className="py-5" >
    <Row>
        <h1 className="text-light fw-bold title mb-5"><span style={{color:'var(--color-lighterpink)'}}>Our</span> Products</h1>
      <Col className="product-list">
        <Row >
      {
      productList.map((obj , index) => (
        <Col key={index} lg={4} md={6} sm={12} className="p-3">
          <Col  className="bg-light rounded p-3 d-flex h-100 product-card ">

            <Col>
              <p className="fw-bold fs-3" style={{color:'var(--color-pink)'}}>{obj.name}</p>
              <p><span className="fw-bolder" >Description :</span>  <br/> {obj.description} </p>
              <p className="fw-bold fs-4" style={{color:'var(--color-blue)'}}>Price : {obj.price}$</p>
            </Col>
          
            <Col>           
              <img src={obj.img} alt="cotton candy" className="img-fluid " />
            </Col>
            
        </Col>
      </Col>
        
        ))
      }
      

        </Row>
      </Col>
    </Row>
  </Container>
  )

}

export default Products;