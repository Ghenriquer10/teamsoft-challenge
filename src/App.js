import HandleRoutes from './Routes/routes';
import GlobalStyle from './styles/global'
import ProductProvider from './contexts/productData'

function App() {
  return (
      <ProductProvider>
        <GlobalStyle/>
        <HandleRoutes/>
      </ProductProvider>
  );
}

export default App;
