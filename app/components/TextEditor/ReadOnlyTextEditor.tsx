import { EditorThemeClasses, LexicalEditor } from 'lexical'
import { ReactElement, ReactNode, useEffect, useRef } from 'react'

import { InitialConfigType, InitialEditorStateType, LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import './ReadOnlyTextEditor.css'
import { EditorRefPlugin } from '@lexical/react/LexicalEditorRefPlugin'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'

interface ReadOnlyTextEditorProps {
  initialState?: InitialEditorStateType
  disabled?: boolean
}

export function ReadOnlyTextEditor ({ initialState, disabled = false }: ReadOnlyTextEditorProps): ReactElement {
  const editorRef = useRef<LexicalEditor>(null)

  const initialConfig: InitialConfigType = {
    namespace: 'ReadOnlyTextEditor',
    theme,
    onError,
    editorState: initialState,
    nodes: [],
    editable: !disabled
  }

  useEffect(() => {
    const editor = editorRef.current
    if (editor !== null && initialState !== undefined && typeof initialState === 'string') {
      editor.setEditorState(editor.parseEditorState(initialState))
    }
  }, [initialState])

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className='readonly-container'>
        <div className='readonly-inner'>
          <PlainTextPlugin
            contentEditable={<ContentEditable className='text' />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <EditorRefPlugin editorRef={editorRef} />
        </div>
      </div>
    </LexicalComposer>

  )
}

function Placeholder (): ReactNode {
  return <div className='editor-placeholder'>Añadir comentario...</div>
}

const theme: EditorThemeClasses = {
  code: 'editor-code',
  heading: {
    h1: 'editor-heading-h1',
    h2: 'editor-heading-h2',
    h3: 'editor-heading-h3',
    h4: 'editor-heading-h4',
    h5: 'editor-heading-h5'
  },
  image: 'editor-image',
  link: 'editor-link',
  list: {
    listitem: 'editor-listitem',
    nested: {
      listitem: 'editor-nested-listitem'
    },
    ol: 'editor-list-ol',
    ul: 'editor-list-ul'
  },
  ltr: 'ltr',
  paragraph: 'editor-paragraph',
  placeholder: 'editor-placeholder',
  quote: 'editor-quote',
  rtl: 'rtl',
  text: {
    bold: 'editor-text-bold',
    code: 'editor-text-code',
    hashtag: 'editor-text-hashtag',
    italic: 'editor-text-italic',
    overflowed: 'editor-text-overflowed',
    strikethrough: 'editor-text-strikethrough',
    underline: 'editor-text-underline',
    underlineStrikethrough: 'editor-text-underlineStrikethrough'
  }
}

function onError (error: Error): void {
  console.error(error)
}
