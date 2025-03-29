"use client";

import React from "react";
import type { TextFieldClientProps } from "payload";
import { useField } from "@payloadcms/ui";
import tailwindColors from "tailwindcss/colors";

const desiredShades = ["200", "300", "400"];
const predefinedColors = Object.entries(tailwindColors)
	.filter(([, value]) => typeof value === "object")
	.flatMap(([colorName, shades]) =>
		desiredShades
			.map((shade) => {
				const colorShades = shades as Record<string, string>;
				if (colorShades[shade]) {
					return { label: `${colorName}-${shade}`, value: colorShades[shade] };
				}
				return null;
			})
			.filter(
				(option): option is { label: string; value: string } => option !== null,
			),
	);

const ColorSelect = ({ field, path }: TextFieldClientProps) => {
	const { value, setValue } = useField<string>({ path });
	const currentColor = (value as string) || predefinedColors[0].value;

	return (
		<div className="field-type text" style={{ flex: "1 1 auto" }}>
			{field.label && (
				<label htmlFor={path} className="field-label">
					{typeof field.label === "object"
						? JSON.stringify(field.label)
						: field.label}
					{field.required && <span className="required">*</span>}
				</label>
			)}
			<div
				className="field-type__wrap"
				style={{ position: "relative", display: "inline-block" }}
			>
				<select
					id={path}
					value={currentColor}
					onChange={(e) => setValue(e.target.value)}
					style={{
						fontSize: 16,
						padding: "8px 40px 8px 8px",
						backgroundColor: currentColor,
						appearance: "none",
						WebkitAppearance: "none",
						MozAppearance: "none",
						color: "#000",
						border: "1px solid #ccc",
						borderRadius: 4,
						textTransform: "capitalize",
					}}
				>
					{predefinedColors.map((option) => (
						<option
							key={option.value}
							value={option.value}
							style={{
								backgroundColor: option.value,
								color: "#000",
								textTransform: "capitalize",
							}}
						>
							{option.label}
						</option>
					))}
				</select>
				<div
					style={{
						position: "absolute",
						right: 8,
						top: "50%",
						transform: "translateY(-50%)",
						pointerEvents: "none",
						fontSize: 16,
						color: "#000",
					}}
				>
					▼
				</div>
			</div>
		</div>
	);
};

export default ColorSelect;
