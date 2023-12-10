import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DiscussionList from './DiscussionList';

const ChannelPage = () => {
  const { channelId } = useParams();
  const [channelName, setChannelName] = useState('');

  useEffect(() => {
    setChannelName(`Channel ${channelId}`);
  }, [channelId]);

  return (
    <div>
      <h2>{channelName}</h2>
      <DiscussionList endpoint={`/api/Discussion/channel/${channelId}`} />
    </div>
  );
};

export default ChannelPage;
