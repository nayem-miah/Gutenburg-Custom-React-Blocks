import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save();
	return <div {...blockProps}>{attributes.content}</div>;
}
