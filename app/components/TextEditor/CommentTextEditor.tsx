import { EditorState, EditorThemeClasses, LexicalEditor, SerializedEditorState, SerializedLexicalNode, KEY_DOWN_COMMAND, COMMAND_PRIORITY_LOW } from 'lexical'
import { ReactElement, ReactNode, useCallback, useEffect, useRef, useState } from 'react'

import { InitialConfigType, InitialEditorStateType, LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import './styles.css'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { EditorRefPlugin } from '@lexical/react/LexicalEditorRefPlugin'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'

interface CommentTextEditorProps {
  initialState?: InitialEditorStateType
  handleChange: (comment: SerializedEditorState<SerializedLexicalNode>) => void
  handleCheck: (comment: SerializedEditorState<SerializedLexicalNode>) => void
  hideComment: () => void
  disabled?: boolean
}

export function CommentTextEditor ({ initialState, handleChange, handleCheck, hideComment, disabled = false }: CommentTextEditorProps): ReactElement {
  const [editorState, setEditorState] = useState<SerializedEditorState<SerializedLexicalNode>>()
  const editorRef = useRef<LexicalEditor>(null)

  const onChange = useCallback((editorState: EditorState): void => {
    const serializedEditorState = editorState.toJSON()
    setEditorState(serializedEditorState)
    handleChange(serializedEditorState)
  }, [setEditorState, handleChange])

  const initialConfig: InitialConfigType = {
    namespace: 'CommentTextEditor',
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

  useEffect(() => {
    const editor = editorRef.current
    let removeListener: () => any
    if (editor !== null) {
      editor.focus()
      removeListener = editor.registerCommand(KEY_DOWN_COMMAND, (event: KeyboardEvent) => {
        console.log(event.key)
        if (event.shiftKey) return false
        switch (event.key) {
          case 'Enter':
            event.preventDefault()
            if (editorState !== undefined) {
              handleCheck(editorState)
            }
            return true
          case 'Escape':
            event.preventDefault()
            hideComment()
            return true
        }

        return false
      }, COMMAND_PRIORITY_LOW)
    }

    return () => {
      if (removeListener !== undefined) { removeListener() }
    }
  }, [editorRef, editorState])

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className='editor-container'>
        <div className='editor-inner'>
          <PlainTextPlugin
            contentEditable={<ContentEditable className='editor-input' />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin ignoreHistoryMergeTagChange ignoreSelectionChange onChange={onChange} />
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
