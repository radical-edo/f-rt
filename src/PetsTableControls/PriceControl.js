import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Range = Slider.createSliderWithTooltip(Slider.Range);

function PriceControl() {
  return (
    <div>
      <Range min={10} max={1000} defaultValue={[10, 1000]} />
    </div>
  );
}

export default PriceControl;

