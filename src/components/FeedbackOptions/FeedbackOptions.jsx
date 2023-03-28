import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'
import { Container, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options , onLeaveFeedback}) => {
  const btnKeys = Object.keys(options);

  return (
    <Container>
      {btnKeys.map(btn => {
        return (
          <Button
            key={nanoid()}
            onClick={(event) => onLeaveFeedback(event.target.textContent)}
          >
            {btn}
          </Button>
        );
      })}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
}
