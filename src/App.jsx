import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';
import {GlobalStyle, Form, Input, Container, ListView} from './styled-components';

function App() {
  const wishList = useSelector(state => state.wishList);
  const dispatch = useDispatch();

  const handleAdd = e => {
aaaaaa
  }
  
  return (
    <>
      <GlobalStyle />
      <Container>
      <h2>MY WISHLIST</h2>
      <ListView>
        List : {wishList}
      </ListView>
        <Form onSubmit={handleAdd}>
          <Input>

          </Input>

        </Form>
        
        
      </Container>
    </>
    );
}

export default App;