import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';
import {GlobalStyle, Form, Input, P, Button, Container, ListView} from './styled-components';

function App() {
  //Form for adding to wishlist
  const AddForm = props => {
    const [input, setInput] = useState('');
    
    const handleChange = e => {
      e.preventDefault();
      setInput(e.target.value)
    }

    const handleSubmit = e => {
      e.preventDefault();

      props.onSubmit({
        word: input,
      });
      setInput('');
    }

    return (
      <>
        <Form onSubmit={handleSubmit}>
          <Input value={input} onChange={handleChange}/>
          <Button width={"125px"}>Add</Button>
        </Form>
      </>
    )
  }

  //A single removeable word on the wishlist
  const Word = props => {
    return (
      <>
        <P href='#' onClick={() => props.deleteWord(props.word)}>{props.word}</P>
        <br/>
      </>
    );
  }

  //Create topdown list of removable words
  const mapList = () => {
    return wishList.map((word, index) => {
      return <Word word={word} deleteWord={deleteWord} key={index}>{word}</Word>;
    });
  }

  //Retrieve state and dispatch actions using redux hooks
  const wishList = useSelector(state => state.wishList);
  const dispatch = useDispatch();
  const addWord = add => {
    var word = add.word;
    if (word === "") {
      return;
    }
    for (let wish of wishList) {
      if (wish === word) {
        return;
      }
    }
    dispatch(addItem(word));
  }
  const deleteWord = word => {
    dispatch(deleteItem(word))
  }

  const submitList = () => {
    for (let i = 0; i < wishList.length; i++) {
      deleteWord(wishList[i]);
    }
  }
  
  return (
    <>
      <GlobalStyle />
      <Container>
      <h2>MY WISHLIST</h2>
      <ListView>
        {mapList()}
      </ListView>
      <AddForm onSubmit={addWord}/>
      <Button width={"312px"}onClick={() => submitList()}>Submit</Button>
      </Container>
    </>
    );
}

export default App;