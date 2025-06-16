import React, { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from './Text';
import Button from 'react-bootstrap/Button';
import domtoimage from 'dom-to-image-more';

const Edit = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memRef = useRef(null);

  const addText = () => {
    setCount(count + 1);
  };

  const saveImage = () => {
    if (memRef.current === null) return;

    domtoimage.toJpeg(memRef.current, { quality: 0.95 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'exported-image.jpeg';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error('Export error:', error);
      });
  };

  return (
    <div ref={memRef} className="container mt-5 mb-5">

        <img src={params.get("url")} alt="pic" className="img-fluid mb-3" />
        {Array(count).fill(0).map(() => (
          <Text />
        ))}
      
      <div className="mt-3 d-flex gap-2">
        <Button onClick={addText}>Add Card</Button>
        <Button variant="success" onClick={saveImage}>Save Image</Button>
      </div>
    </div>
  );
};

export default Edit;