

// export const FeedbackOptions = ({handleClickGood, handleClickNeutral, handleClickBad}) =>{

import { Button, ButtonList } from "./FeedBackOptions.styled";
import { Section } from "./Section";

 
//     return(
//       <div>
//         <h2>Please leave feedback</h2>
//         <button type="button" onClick={handleClickGood}>Good</button>
//         <button type="button" onClick={handleClickNeutral}>Neutral</button>
//         <button type="button" onClick={handleClickBad}>Bad</button>
//       </div>
//     )
//   }

  export const FeedbackOptions = ({ handleClickGood, handleClickNeutral, handleClickBad }) => {
    return (
      <Section title="FeedbackOptions">
       <ButtonList>
       <Button type="button" onClick={handleClickGood}>Good</Button>
        <Button type="button" onClick={handleClickNeutral}>Neutral</Button>
        <Button type="button" onClick={handleClickBad}>Bad</Button>
       </ButtonList>
      </Section>
    );
  };
