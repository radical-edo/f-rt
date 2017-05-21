import React, { PropTypes } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './PriceControl.css';

const Range = Slider.createSliderWithTooltip(Slider.Range);

PriceControl.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.array,
  onAfterChange: PropTypes.func,
  onChange: PropTypes.func
};

PriceControl.defaultProps = {
  onAfterChange: Function.prototype,
  onChange: Function.prototype,
};

function PriceControl({ className, onAfterChange, onChange, min, max, value }) {
  return (
    <div className={className}>
      <Range
        min={min}
        max={max}
        value={value}
        defaultValue={[min, max]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </div>
  );
}

export default PriceControl;

