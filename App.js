import React, { useEffect, useState } from 'react';
import {
  Container, Zoom, Grid,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getArts } from './actions/arts';
import Arts from './components/Arts/Arts';
import Navbar from './components/Navbar/Navbar';
import AddButton from './components/AddButton/AddButton';
import Modal from './components/Modal/Modal';
import useStyles from './styles';

const App = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getArts());
  }, [dispatch]);

  return (
    <Container
      style={{ backgroundImage: 'linear-gradient(175deg, #FF1B6B, #45CAFF 13%, #ffffff 20%)' }}
    >
      <Navbar />
      <Zoom in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={9}>
              <Arts />
            </Grid>
            <Grid item xs={12} sm={2}>
              <AddButton className={classes.addButton} setIsOpen={setIsOpen} />
              <Modal open={isOpen} onClose={() => setIsOpen(false)} />
            </Grid>
          </Grid>
        </Container>
      </Zoom>
    </Container>
  );
};

export default App;
