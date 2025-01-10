import React from "react";
import { TypeAnimation } from "react-type-animation";
import bg from "../bg.png";

function YesNoPage() {
	return (
		<div
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				fontSize: "18px",
				lineHeight: "1.6",
				padding: "20px",
				textAlign: "center",
				minHeight: 500,
				color: "#6e6e6e"
			}}
		>
			<TypeAnimation
				sequence={[
					"Нүдээ анин, сэрүүхэн агаар дунд зогсоод яг одоо энэ л мөчид хамгийн гайхалтай ид шид биелж буйг төсөөлөөд үз дээ. Зүрх тань бага багаар дулаан илчээр дүүрч, бүх л бодол сэтгэл тань баяр хөөрийг мэдрэхийг хүлцээрэй. Тэгээд 'Сайн уу, ид шид минь' гэж өөртөө аядуухан боловч зоригтой гэгч нь хэлээд чин сэтгэлээсээ гэрэлт нар өөд инээмсэглээрэй. Дотор тань энэ л дулаан илч үүрд хадгалагдаж, ид шидэнд хөтлөх замыг гэрэлтүүлэн чиглүүлэх болно.",
					5000 // Текст бичиж дууссаны дараа 5 секунд хүлээнэ
				]}
				speed={60} // Үсэг бичих хурд
				style={{ whiteSpace: "pre-line" }} // Текстийг мөр таслахдаа форматтай хадгалах
				repeat={0} // Давталтыг 0 болгох нь нэг удаа бичиж зогсоно гэсэн үг
			/>
		</div>
	);
}

export default YesNoPage;
