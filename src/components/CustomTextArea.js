import React, { useEffect, useRef, useState,} from 'react';

const CustomTextArea =  ({placeholder,className,value,onChange }) => {
    const textareaRef = useRef(null);
  
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [value]);
  
    return (
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        rows={1}
        className={className}
        placeholder={placeholder}
      />
    );
  };

export default CustomTextArea;
