import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";
import {
	Button,
	CheckboxControl,
	PanelBody,
	PanelRow,
	TextControl,
} from "@wordpress/components";
export default function Edit({ attributes, setAttributes }) {
	return (
		<>
			<InspectorControls>
				<PanelBody title="Mailchimp" initialOpen={false}>
					<PanelRow>
						<TextControl
							label="List ID (Audience)"
							value={attributes?.list_id}
							onChange={(list_id) => setAttributes({ list_id })}
						/>
					</PanelRow>
					<PanelRow>
						<CheckboxControl
							label="Double opt in"
							checked={attributes?.doubleoptin}
							onChange={() =>
								setAttributes({ doubleoptin: !attributes.doubleoptin })
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<InspectorControls>
				<PanelBody title="Image" initialOpen={false}>
					<MediaUpload
						title="Select your image"
						allowedFormats={["png", "jpg", "jpeg"]}
						value={attributes?.image?.id}
						onSelect={(image) =>
							setAttributes({ image: { id: image?.id, url: image?.url } })
						}
						render={({ open }) => {
							if (0 === attributes?.image?.id) {
								return <Button onClick={open}>Select image</Button>;
							} else {
								return (
									<>
										<img
											src={attributes?.image?.url}
											onClick={open}
											alt="image"
										/>
										<Button
											onClick={(image) =>
												setAttributes({ image: { id: 0, url: "" } })
											}
										>
											Delete image
										</Button>
									</>
								);
							}
						}}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div className="misha-subscription-block-wrapper">
					<div
						className="misha-subscription-image"
						style={{
							backgroundImage: `url(${attributes?.image?.url})`,
						}}
					>
						<div className="misha-subscription-block-content">
							<RichText
								tagName="h3"
								value={attributes?.titleText}
								placeholder="Enter title...."
								allowedFormats={["core/bold", "core/italic", "core/link"]}
								onChange={(titleText) => setAttributes({ titleText })}
							/>

							<RichText
								tagName="p"
								value={attributes?.justText}
								placeholder="Enter some text here...."
								allowedFormats={["core/bold", "core/italic", "core/link"]}
								onChange={(justText) => setAttributes({ justText })}
							/>

							<div>
								<span>Your Email</span>

								<RichText
									tagName="span"
									value={attributes?.btnText}
									allowedFormats={[]}
									onChange={(btnText) => setAttributes({ btnText })}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
