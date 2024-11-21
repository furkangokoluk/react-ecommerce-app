import Drawer from '@mui/material/Drawer';
import { useEffect } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Loading from './components/Loading';
import RouterConfig from './config/RouterConfig';
import PageContainer from './container/PageContainer';
import './css/App.css';
import { calculateBasket, deleteBasket, setDrawer } from './redux/slices/BasketSlice';

function App() {

  const { basketProducts, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [])

  return (
    <>
      <PageContainer>
        <Header />
        <Loading />
        <RouterConfig />
        <Drawer anchor='right' open={drawer} onClose={() => dispatch(setDrawer())}>
          {
            basketProducts && basketProducts.map((product) => {
              return (
                <div key={product.id}>
                  <div style={{ padding: '10px' }} className='flex-row'>
                    <img style={{ margin: '15px' }} src={product.image} width={70} height={70} />
                    <p style={{ width: '350px' }}>{product.title}  ({product.count})</p>
                    <p style={{ marginRight: '10px', fontWeight: 'bold' }}>{product.price * product.count} TL</p>

                    <FaRegTrashAlt
                      onClick={() => {
                        dispatch(deleteBasket({ id: product.id }))
                        dispatch(calculateBasket())
                      }
                      }

                      style={{ color: 'red' }}
                    />

                  </div>
                  <div>
                    <h2></h2>
                  </div>
                </div>
              )
            }
            )
          }
          <div>
            <h2 style={{ display: 'flex', justifyContent: 'end', marginRight: '20px' }}>Toplam Tutar: {totalAmount}</h2>
          </div>
        </Drawer>
      </PageContainer>
    </>
  )
}

export default App
