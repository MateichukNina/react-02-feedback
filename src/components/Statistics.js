import { Section } from "./Section";

export const Statistics = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <Section title="Statistic">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedback}%</p>
    </Section>
  );
};