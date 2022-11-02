import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `Отправлено ${timePeriod} назад`;
  };

  return (
    <span title={timestamp}>
        $nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo