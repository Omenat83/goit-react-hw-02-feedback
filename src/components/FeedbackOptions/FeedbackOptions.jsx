import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'
import { Container, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ btnKeys, onLeaveFeedback }) => {

  return (
    <Container>
      {btnKeys.map(btn => {
        return (
          <Button
            key={nanoid()}
            onClick={event => onLeaveFeedback(event.target.textContent)}
          >
            {btn}
          </Button>
        );
      })}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  btnKeys: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
