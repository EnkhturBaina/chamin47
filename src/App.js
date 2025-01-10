import logo from "./logo.svg";
import "./App.css";
import HeartRain from "./HeartRain";
import { useState } from "react";
import YesNoPage from "./pages/YesNoPage";
import relax_emoji from "./relax_emoji.png";

function App() {
	const [page, setPage] = useState(1);

	return (
		<div className="App">
			<div style={{ flex: 1 }}>
				<div style={{}}>
					{page == 1 ? <HeartRain /> : null}
					{page == 2 ? <YesNoPage /> : null}
				</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					marginTop: 100
				}}
			>
				<div className="emojiBtn" onClick={() => setPage(1)} style={{ fontSize: 30 }}>
					🥰
				</div>
				<div className="emojiBtn" onClick={() => setPage(2)}>
					<img src={relax_emoji} width={60} height={50} />
				</div>
			</div>
		</div>
	);
}

export default App;
