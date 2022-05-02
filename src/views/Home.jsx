import react from 'react'
import { Container } from 'react-bootstrap';
import Content from '../components/Content'
import Post from '../components/Post'

const Home = () => {
    return (
      <div className="App">
          <Container>
              <Content />
              <Post />
          </Container>
      </div>
    );
  }

  export default Home;
