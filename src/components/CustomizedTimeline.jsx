import React from 'react';
import Timeline from '@mui/lab/Timeline';
import {generateTimelineItems} from './generateTimelineItems';


function CustomizedTimeline({ data }) {
    const timelineItems = generateTimelineItems(data);
    return <Timeline position="alternate">{timelineItems}</Timeline>;
};

export {CustomizedTimeline};
