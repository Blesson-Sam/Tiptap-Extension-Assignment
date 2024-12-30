import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BlockquoteExtension from "./BlockquoteExtension";
import "../styles/TiptapEditor.css";

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, BlockquoteExtension],
  });

  const handleAddBlockquote = () => {
    if (editor) {
      editor.commands.insertContent("<blockquote>New blockquote</blockquote>");
    }
  };

  const handleClearBlockquotes = () => {
    if (editor) {
      const content = editor.getJSON();
      content.content = content.content?.filter(
        (node) => node.type !== "blockquote"
      );
      editor.commands.setContent(content);
    }
  };

  return (
    <div className="editor-container">
      <h1>Tiptap Extension Assignment</h1>
      <button className="cta-button" onClick={handleAddBlockquote}>
        Insert Blockquote
      </button>
      <button className="cta-button clear-button" onClick={handleClearBlockquotes}>
        Clear Blockquotes
      </button>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;