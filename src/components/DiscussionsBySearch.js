import { useParams } from 'react-router-dom';
import DiscussionList from './DiscussionList';
import { Container } from '@mui/material';

const DiscussionsBySearch = () => {
  const { searchTerm } = useParams();

  return (
    <div>
      <Container>
        <header>SEARCH TERM: {searchTerm}</header>
        <DiscussionList endpoint={`/api/Discussion/Search?searchTerm=${searchTerm}`} />
      </Container>
    </div>
  );
}

export default DiscussionsBySearch;
