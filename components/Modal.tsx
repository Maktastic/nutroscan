import { Modal, Button, ModalHeader, ModalBody, ModalFooter, ModalContent } from '@nextui-org/react';
import { useRef } from 'react';
// @ts-ignore
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

interface Meal {
	description: string;
	nutrition: {
		calories: string;
		protein: string;
		fats: string;
		carbohydrates: string;
	};
}

interface DayMealPlan {
	breakfast: Meal;
	lunch: Meal;
	dinner: Meal;
}

interface MealPlan {
	[key: string]: DayMealPlan;
}

interface MealPlanModalProps {
	isModalOpen: boolean;
	onClose: () => void;
	mealPlan: MealPlan | any;
}

const MealPlanModal: React.FC<MealPlanModalProps> = ({ isModalOpen, onClose, mealPlan }) => {
	const planRef = useRef<HTMLDivElement>(null);
	const parsedMealPlan = mealPlan;

	// Path to the PNG version of your logo
	const logoPath = '/assets/logo.png'; // Replace with the PNG path

	// Function to generate and download the meal plan as PDF
	const handleDownloadPdf = async () => {
		const pdfDoc = await PDFDocument.create();
		let page = pdfDoc.addPage();
		const { width, height } = page.getSize();
		const paddingX = 50;  // Consistent horizontal padding
		const paddingY = 30;  // Adjust the vertical padding
		const fontSize = 12;
		const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
		const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold); // For bold headers

		// Fetch the logo
		const logoImageBytes = await fetch(logoPath).then((res) => res.arrayBuffer());
		const logoImage = await pdfDoc.embedPng(logoImageBytes); // Embedding the PNG version of the logo

		// Adjust the logo size
		const logoWidth = 100; // Custom width
		const logoHeight = 100; // Custom height

		// Draw the logo at the top center of the page
		page.drawImage(logoImage, {
			x: width / 2 - logoWidth / 2,
			y: height - logoHeight - paddingY,
			width: logoWidth,
			height: logoHeight,
		});

		// Add Title Below the Logo
		page.setFont(boldFont);
		page.setFontSize(24);
		page.drawText('7-Day Personalized Meal Plan', {
			x: paddingX,
			y: height - logoHeight - paddingY * 3,
			color: rgb(0.1, 0.1, 0.1),
		});

		// Divider line
		page.drawLine({
			start: { x: paddingX, y: height - logoHeight - paddingY * 3.8 },
			end: { x: width - paddingX, y: height - logoHeight - paddingY * 3.8 },
			thickness: 1,
			color: rgb(0.5, 0.5, 0.5),
		});

		let yPosition = height - logoHeight - paddingY * 5; // Adjust starting Y position below the logo

		// Iterate over the meal plan and add text to the PDF
		for (const [day, meals] of Object.entries(parsedMealPlan || {})) {
			// Set Day title (Bold and Larger Font)
			page.setFont(boldFont);
			page.setFontSize(18);
			page.drawText(day.replace('day', 'Day '), { x: paddingX, y: yPosition, color: rgb(0, 0.2, 0.4) });
			yPosition -= 40; // Add more space after the day title

			for (const [mealType, mealDetails] of Object.entries(meals as DayMealPlan)) {
				// Meal type (Breakfast, Lunch, Dinner)
				page.setFont(boldFont);
				page.setFontSize(14);
				page.drawText(`${mealType.charAt(0).toUpperCase() + mealType.slice(1)}:`, { x: paddingX, y: yPosition });
				yPosition -= 18;  // Increased space after meal type

				// Meal Description (regular font)
				page.setFont(font);
				page.setFontSize(12);
				page.drawText(mealDetails.description, { x: paddingX + 10, y: yPosition });
				yPosition -= 15;

				// Nutritional values
				const nutrition = mealDetails.nutrition;
				page.drawText(`Calories: ${nutrition.calories}, Protein: ${nutrition.protein}g, Fats: ${nutrition.fats}g, Carbs: ${nutrition.carbohydrates}g`, {
					x: paddingX + 10,
					y: yPosition,
					color: rgb(0.4, 0.4, 0.4),
				});
				yPosition -= 20;  // Increased space after nutrition details

				// Add a divider line between meals
				page.drawLine({
					start: { x: paddingX, y: yPosition },
					end: { x: width - paddingX, y: yPosition },
					thickness: 0.5,
					color: rgb(0.85, 0.85, 0.85),
				});
				yPosition -= 10;

				// Add a new page if the current one is filled
				if (yPosition < 50) {
					page = pdfDoc.addPage();
					yPosition = height - paddingY;
				}
			}

			// Add more space between each day's section
			yPosition -= 30;
		}

		// Serialize the PDFDocument to bytes and trigger download
		const pdfBytes = await pdfDoc.save();
		const blob = new Blob([pdfBytes], { type: 'application/pdf' });
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = 'meal-plan.pdf';
		link.click();
	};

	return (
		<Modal
			closeButton
			size="4xl"
			isDismissable={false}
			backdrop={'blur'}
			isOpen={isModalOpen}
			scrollBehavior={'inside'}
			onClose={onClose}
			classNames={{
				body: "py-6",
				backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
				base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
				header: "border-b-[1px] border-[#292f46]",
				footer: "border-t-[1px] border-[#292f46]",
				closeButton: "hover:bg-white/5 active:bg-white/10",
			}}
		>
			<ModalContent>
				<ModalHeader>
					<span className="text-2xl">Your Personalized Meal Plan</span>
				</ModalHeader>

				<ModalBody>
					{parsedMealPlan ? (
						<div ref={planRef} className="space-y-6">
							{Object.entries(parsedMealPlan).map(([day, meals]) => (
								<div key={day} className="border p-4 rounded-lg bg-[#292f46]">
									<h3 className="text-xl mb-4 font-semibold capitalize">{day.replace('day', 'Day ')}</h3>

									<div className="ml-4 space-y-4">
										{Object.entries(meals as DayMealPlan).map(([mealType, meal]: [string, Meal]) => (
											<div key={mealType}>
												<strong className="text-lg">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}:</strong>
												<p className="mb-2">{meal.description}</p>

												{/* Nutritional Values */}
												<div className="grid grid-cols-4 gap-2 text-sm text-gray-400">
													<div><strong>Calories:</strong> {meal.nutrition.calories}</div>
													<div><strong>Protein:</strong> {meal.nutrition.protein}</div>
													<div><strong>Fats:</strong> {meal.nutrition.fats}</div>
													<div><strong>Carbohydrates:</strong> {meal.nutrition.carbohydrates}</div>
												</div>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					) : (
						<p className="text-red-500">Failed to load the meal plan. Please try again.</p>
					)}
				</ModalBody>

				<ModalFooter>
					<Button color="primary" onClick={handleDownloadPdf}>Download as PDF</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default MealPlanModal;
