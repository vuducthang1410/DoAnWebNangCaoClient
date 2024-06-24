import React, { useState, useEffect, useRef } from 'react';

const AutoResizingTextarea = () => {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      rows={1}
      className="w-full rounded-3xl  outline-none resize-none px-5"
      placeholder="Enter your text here..."
    />
  );
};

export default AutoResizingTextarea;
