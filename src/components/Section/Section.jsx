import { SectionSt, Title } from "./Section.styled";
import PropTypes from 'prop-types'

export const Section = ({ title = '', children }) => {
  return (
    <SectionSt>
      <Title>{title}</Title>
      {children}
    </SectionSt>
  );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
}