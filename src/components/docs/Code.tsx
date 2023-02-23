import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Code = ({ children }: { children: string }) => {
  return (
    <>
      <SyntaxHighlighter
        language='python'
        // style={materialDark}
      >
        {children}
      </SyntaxHighlighter>
    </>
  )
}

export default Code
