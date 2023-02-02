import PropTypes from 'prop-types';
import { Filtration } from './Filter.styled';

const Filter = ({ value, onchandgeFilter }) => {
  return (
    <Filtration>
      <label>
        Find contacts by name
        <input
          value={value}
          onChange={onchandgeFilter}
          type="text"
          name="filter"
        />
      </label>
    </Filtration>
  );
};

Filter.propTypes = {
  onchandgeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
