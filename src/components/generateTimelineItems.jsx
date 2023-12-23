// import React from 'react';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineDot from '@mui/lab/TimelineDot';
// import TimelineContent from '@mui/lab/TimelineContent';
// import Typography from '@mui/material/Typography';
// import './dot.css';

// const generateTimelineItems = (data) => {
//     return data.map((item, index) => (
//         <TimelineItem key={index}>
//             <TimelineOppositeContent
//                 sx={{ m: 'auto', fontWeight: 'bold', fontFamily: 'monospace', fontSize: '1rem' }}
//                 variant="body2"
//             >
//                 {item.date}
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//                 <TimelineConnector />
//                 <TimelineDot  className='custom-dot'>{item.icon}</TimelineDot>
//                 <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: '20px', px: 2 }}>
//                 <Typography variant="h6" component="span">
//                     {item.content}
//                 </Typography>
//                 {/* <Typography>{item.description}</Typography> */}
//             </TimelineContent>
//         </TimelineItem>
//     ));
// };

// export {generateTimelineItems};
import React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import './dot.css';

const TimelineItemComponent = ({ item }) => {

    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto', fontWeight: 'bold', fontFamily: 'monospace', fontSize: '1rem' }}
                variant="body2"
            >
                {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot className='custom-dot'>{item.icon}</TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '20px', px: 2 }}>
                <Typography variant="h6" component="span">
                    {item.content}
                </Typography>
                {/* <Typography>{item.description}</Typography> */}
            </TimelineContent>
        </TimelineItem>
    );
};

const generateTimelineItems = (data) => {
    return data.map((item, index) => (
        <TimelineItemComponent key={index} item={item} />
    ));
};

export { generateTimelineItems };
