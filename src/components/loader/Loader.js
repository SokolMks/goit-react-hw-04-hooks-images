import { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class App extends Component {
  render() {
    return (
      <Loader
        type="Bars"
        color="#FF8C00"
        height={200}
        width={200}
        timeout={1000}
      />
    );
  }
}