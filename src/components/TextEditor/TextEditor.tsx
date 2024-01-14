'use client';

import {
  AlignDropdown,
  BackgroundColorPicker,
  BoldButton,
  CodeFormatButton,
  Divider,
  Editor,
  EditorComposer,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextColorPicker,
  TextFormatDropdown,
  ToolbarPlugin,
  UnderlineButton,
} from 'verbum';

import './styles.css';

interface ITextEditor {
  onChange?: (arg: string) => void;
}

const TextEditor = ({ onChange }: ITextEditor) => (
  <div className='overflow-hidden rounded-sm shadow-sm max-w-[1000px]'>
    <EditorComposer>
      <Editor
        hashtagsEnabled={true}
        placeholder='Some blog thing!!'
        onChange={onChange}
      >
        <ToolbarPlugin defaultFontSize='16px'>
          <FontSizeDropdown />
          <Divider />
          <BoldButton />
          <ItalicButton />
          <UnderlineButton />
          <CodeFormatButton />
          <InsertLinkButton />
          <TextColorPicker />
          <BackgroundColorPicker />
          <TextFormatDropdown />
          <Divider />
          <InsertDropdown enablePoll={true} />
          <Divider />
          <AlignDropdown />
        </ToolbarPlugin>
      </Editor>
    </EditorComposer>
  </div>
);

export { TextEditor };
