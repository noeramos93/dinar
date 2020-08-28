import React from 'react';
import Carrusel from '../components/Carrusel';
import Loading from '../components/Loading';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../assets/styles/App.scss';

const Home = class extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: false });
    }, 5500);
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div>
        <Carrusel />
      </div>
    );
  }
};

export default Home;
