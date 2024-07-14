import { EditorState, EditorThemeClasses, LexicalEditor, SerializedEditorState, SerializedLexicalNode } from 'lexical'
import { ReactElement, ReactNode, useCallback, useEffect, useRef, useState } from 'react'

import { InitialConfigType, InitialEditorStateType, LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'

import ToolbarPlugin from './plugins/ToolbarPlugin'

import './styles.css'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { EditorRefPlugin } from '@lexical/react/LexicalEditorRefPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { ListNode, ListItemNode } from '@lexical/list'

interface DescriptionTextEditorProps {
  initialState: InitialEditorStateType
  handleBlur: (description: SerializedEditorState<SerializedLexicalNode>) => void
  disabled?: boolean
}

export function DescriptionTextEditor ({ initialState, handleBlur, disabled = false }: DescriptionTextEditorProps): ReactElement {
  const [editorState, setEditorState] = useState<SerializedEditorState<SerializedLexicalNode>>()
  const editorRef = useRef<LexicalEditor>(null)

  const onChange = useCallback((editorState: EditorState): void => {
    const serializedEditorState = editorState.toJSON()
    setEditorState(serializedEditorState)
  }, [setEditorState])

  const initialConfig: InitialConfigType = {
    namespace: 'DescriptionTextEditor',
    theme,
    onError,
    editorState: initialState,
    nodes: [ListNode, ListItemNode],
    editable: !disabled
  }

  useEffect(() => {
    const onBlur = (): void => {
      if (editorState === undefined) return
      handleBlur(editorState)
    }
    let rootElementRef: null | HTMLElement = null
    if (editorRef.current !== null && editorState !== undefined) {
      editorRef.current.registerRootListener((rootElement: null | HTMLElement, prevRootElement: null | HTMLElement) => {
        rootElementRef = rootElement
        prevRootElement?.removeEventListener('blur', onBlur)
        rootElement?.addEventListener('blur', onBlur)
      })
    }
    return (): void => {
      if (editorState !== undefined) {
        rootElementRef?.removeEventListener('blur', onBlur)
      }
    }
  }, [editorState, handleBlur])

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className='editor-container'>
        <ToolbarPlugin />
        <div className='editor-inner'>
          <RichTextPlugin
            contentEditable={<ContentEditable className='editor-input' />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <ListPlugin />
          <HistoryPlugin />
          <OnChangePlugin ignoreHistoryMergeTagChange ignoreSelectionChange onChange={onChange} />
          <EditorRefPlugin editorRef={editorRef} />
        </div>
      </div>
    </LexicalComposer>

  )
}

function Placeholder (): ReactNode {
  return <div className='editor-placeholder'>Añade una descripción de la tarea...</div>
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
