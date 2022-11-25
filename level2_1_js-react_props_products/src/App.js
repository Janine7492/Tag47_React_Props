
import './App.css';
import ProductCards from './components/productCards/ProductCards';
import products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SUPERSHOP</h1>
      </header>
      <main className='AppMain'>
        {products.map((singleProduct, index) => {
          return <ProductCards key={index} img={singleProduct.img} product={singleProduct.product} price={singleProduct.price} description={singleProduct.description} />
        })}
      </main>
    </div>
  );
}

export default App;
