import { useParams } from 'react-router-dom';
import DiscussionList from './DiscussionList';
import Header from './Header';
import { Container } from '@mui/material';

const DiscussionsBySearch = () => {
  const { searchTerm } = useParams();

  return (
    <div>
        <Container>
            <Header/>
            <header>SEARCH TERM: {searchTerm}</header>
            <DiscussionList endpoint={`/api/Discussion/Search?searchTerm=${searchTerm}`} />
        </Container>
    </div>
  );
}

export default DiscussionsBySearch;
