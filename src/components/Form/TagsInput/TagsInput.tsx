import { FormInstance, Input, Tag } from 'antd';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

interface TagsInputProps {
  form: FormInstance; // Replace 'any' with the actual type of your form
  name: string;
}

const TagsInput: React.FC<TagsInputProps> = ({ form, name }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === ',') {
      e.preventDefault(); // Prevent form submission on Enter key
      const currentTags = form.getFieldValue(name) || [];
      form.setFieldsValue({ [name]: [...currentTags, inputValue.trim()] });
      setInputValue('');
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    const currentTags = form.getFieldValue(name) || [];
    form.setFieldsValue({
      [name]: currentTags.filter((tag: string) => tag !== tagToRemove),
    });
  };

  return (
    <div>
      <Input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputPress}
        placeholder='Type tags and press Enter'
      />
      <div>
        {form.getFieldValue(name)?.map((tag: string) => (
          <Tag
            key={tag}
            closable
            onClose={() => handleTagRemove(tag)}
            className='mt-2'
            color='orange'
          >
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export { TagsInput };
