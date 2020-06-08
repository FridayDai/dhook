import React, { useState } from 'react';
import Modal from '../index';

const Demo = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(toggle => !toggle)}>click to toggle</button>
      <Modal
        visible={toggle}
        onCancel={() => setToggle(false)}
      >
        <div>test</div>
      </Modal>
    </div>
  )
};

export default Demo;
