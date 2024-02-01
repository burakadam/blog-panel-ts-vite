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
  initialEditorState?: string | null;
}

const TextEditor = ({ onChange, initialEditorState }: ITextEditor) => {
  if (initialEditorState === null) return;

  return (
    <div className='overflow-hidden rounded-sm shadow-sm max-w-[1000px]'>
      <EditorComposer initialEditorState={initialEditorState || null}>
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
};

export { TextEditor };
