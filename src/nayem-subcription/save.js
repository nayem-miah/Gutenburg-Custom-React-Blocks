import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const action = `https://nayemmiah.com/${attributes?.list_id}`;
	return (
		<div {...useBlockProps.save()}>
			<div className="misha-subscription-block-wrapper">
				<div
					className="misha-subscription-image"
					style={{
						backgroundImage: `url(${attributes?.image?.url})`,
					}}
				>
					<div className="misha-subscription-block-content">
						<RichText.Content tagName="h3" value={attributes?.titleText} />
						<RichText.Content tagName="p" value={attributes?.justText} />

						<form action={action} method="POST">
							<input type="email" name="EMAIL" placeholder="Enter your email" />
							<RichText.Content tagName="button" value={attributes?.btnText} />
							<input
								type="hidden"
								name="opt_in"
								value={attributes?.doubleoptin ? "yes" : "no"}
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}


