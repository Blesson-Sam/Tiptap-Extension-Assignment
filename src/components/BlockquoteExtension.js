import { Node } from '@tiptap/core';

const BlockquoteExtension = Node.create({
  name: 'blockquote',

  group: 'block',
  content: 'block+',

  parseHTML() {
    return [
      {
        tag: 'blockquote',
      },
    ];
  },

  renderHTML() {
    return ['blockquote', 0];
  },

  addCommands() {
    return {
      insertBlockquote:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: 'blockquote',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Your custom blockquote text',
                  },
                ],
              },
            ],
          });
        },
    };
  },
});

export default BlockquoteExtension;
