"use client";

import type { TextFieldClientProps } from "payload";
import { useField } from "@payloadcms/ui";

const predefinedColors = [
	{ label: "slate-200", value: "oklch(92.9% 0.013 255.508)" },
	{ label: "slate-300", value: "oklch(86.9% 0.022 252.894)" },
	{ label: "slate-400", value: "oklch(70.4% 0.04 256.788)" },
	{ label: "gray-200", value: "oklch(92.8% 0.006 264.531)" },
	{ label: "gray-300", value: "oklch(87.2% 0.01 258.338)" },
	{ label: "gray-400", value: "oklch(70.7% 0.022 261.325)" },
	{ label: "zinc-200", value: "oklch(92% 0.004 286.32)" },
	{ label: "zinc-300", value: "oklch(87.1% 0.006 286.286)" },
	{ label: "zinc-400", value: "oklch(70.5% 0.015 286.067)" },
	{ label: "neutral-200", value: "oklch(92.2% 0 0)" },
	{ label: "neutral-300", value: "oklch(87% 0 0)" },
	{ label: "neutral-400", value: "oklch(70.8% 0 0)" },
	{ label: "stone-200", value: "oklch(92.3% 0.003 48.717)" },
	{ label: "stone-300", value: "oklch(86.9% 0.005 56.366)" },
	{ label: "stone-400", value: "oklch(70.9% 0.01 56.259)" },
	{ label: "red-200", value: "oklch(88.5% 0.062 18.334)" },
	{ label: "red-300", value: "oklch(80.8% 0.114 19.571)" },
	{ label: "red-400", value: "oklch(70.4% 0.191 22.216)" },
	{ label: "orange-200", value: "oklch(90.1% 0.076 70.697)" },
	{ label: "orange-300", value: "oklch(83.7% 0.128 66.29)" },
	{ label: "orange-400", value: "oklch(75% 0.183 55.934)" },
	{ label: "amber-200", value: "oklch(92.4% 0.12 95.746)" },
	{ label: "amber-300", value: "oklch(87.9% 0.169 91.605)" },
	{ label: "amber-400", value: "oklch(82.8% 0.189 84.429)" },
	{ label: "yellow-200", value: "oklch(94.5% 0.129 101.54)" },
	{ label: "yellow-300", value: "oklch(90.5% 0.182 98.111)" },
	{ label: "yellow-400", value: "oklch(85.2% 0.199 91.936)" },
	{ label: "lime-200", value: "oklch(93.8% 0.127 124.321)" },
	{ label: "lime-300", value: "oklch(89.7% 0.196 126.665)" },
	{ label: "lime-400", value: "oklch(84.1% 0.238 128.85)" },
	{ label: "green-200", value: "oklch(92.5% 0.084 155.995)" },
	{ label: "green-300", value: "oklch(87.1% 0.15 154.449)" },
	{ label: "green-400", value: "oklch(79.2% 0.209 151.711)" },
	{ label: "emerald-200", value: "oklch(90.5% 0.093 164.15)" },
	{ label: "emerald-300", value: "oklch(84.5% 0.143 164.978)" },
	{ label: "emerald-400", value: "oklch(76.5% 0.177 163.223)" },
	{ label: "teal-200", value: "oklch(91% 0.096 180.426)" },
	{ label: "teal-300", value: "oklch(85.5% 0.138 181.071)" },
	{ label: "teal-400", value: "oklch(77.7% 0.152 181.912)" },
	{ label: "cyan-200", value: "oklch(91.7% 0.08 205.041)" },
	{ label: "cyan-300", value: "oklch(86.5% 0.127 207.078)" },
	{ label: "cyan-400", value: "oklch(78.9% 0.154 211.53)" },
	{ label: "sky-200", value: "oklch(90.1% 0.058 230.902)" },
	{ label: "sky-300", value: "oklch(82.8% 0.111 230.318)" },
	{ label: "sky-400", value: "oklch(74.6% 0.16 232.661)" },
	{ label: "blue-200", value: "oklch(88.2% 0.059 254.128)" },
	{ label: "blue-300", value: "oklch(80.9% 0.105 251.813)" },
	{ label: "blue-400", value: "oklch(70.7% 0.165 254.624)" },
	{ label: "indigo-200", value: "oklch(87% 0.065 274.039)" },
	{ label: "indigo-300", value: "oklch(78.5% 0.115 274.713)" },
	{ label: "indigo-400", value: "oklch(67.3% 0.182 276.935)" },
	{ label: "violet-200", value: "oklch(89.4% 0.057 293.283)" },
	{ label: "violet-300", value: "oklch(81.1% 0.111 293.571)" },
	{ label: "violet-400", value: "oklch(70.2% 0.183 293.541)" },
	{ label: "purple-200", value: "oklch(90.2% 0.063 306.703)" },
	{ label: "purple-300", value: "oklch(82.7% 0.119 306.383)" },
	{ label: "purple-400", value: "oklch(71.4% 0.203 305.504)" },
	{ label: "fuchsia-200", value: "oklch(90.3% 0.076 319.62)" },
	{ label: "fuchsia-300", value: "oklch(83.3% 0.145 321.434)" },
	{ label: "fuchsia-400", value: "oklch(74% 0.238 322.16)" },
	{ label: "pink-200", value: "oklch(89.9% 0.061 343.231)" },
	{ label: "pink-300", value: "oklch(82.3% 0.12 346.018)" },
	{ label: "pink-400", value: "oklch(71.8% 0.202 349.761)" },
	{ label: "rose-200", value: "oklch(89.2% 0.058 10.001)" },
	{ label: "rose-300", value: "oklch(81% 0.117 11.638)" },
	{ label: "rose-400", value: "oklch(71.2% 0.194 13.428)" },
];

const ColorSelect = ({ field, path }: TextFieldClientProps) => {
	const { value, setValue } = useField<string>({ path });
	const currentColor = (typeof value === "string" ? value : "") || predefinedColors[0].value;

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
