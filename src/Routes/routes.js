import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Product from '../pages/Product';

const HandleRoutes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Product/>}/> 
            </Routes>
        </BrowserRouter>
    )
}

export default HandleRoutes;