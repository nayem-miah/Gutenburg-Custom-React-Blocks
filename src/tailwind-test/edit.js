import { useBlockProps } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    return (
        <div {...blockProps}>
            <textarea
                value={attributes.content}
                onChange={(e) => setAttributes({ content: e.target.value })}
                placeholder="Enter content for Block 2"
            />
        </div>
    );
}
