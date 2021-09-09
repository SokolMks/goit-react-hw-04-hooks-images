import { Component } from 'react';
import Container from './components/container/Container';
import Searchbar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';

export default class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
      </Container>
    );
  }
}