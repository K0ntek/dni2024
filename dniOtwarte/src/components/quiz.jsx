import { useEffect, useState } from "react";
import Banach from "../stefan_banach_glo970-0-Enhanced-Animated.mp4";
import ResultsTable from "./ResultsTable";

export default function Quiz() {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [school, setSchool] = useState("");
	const [city, setCity] = useState("");
	const [formFilled, setFormFilled] = useState(false);
	const [answers, setAnswers] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [quizFinished, setQuizFinished] = useState(false);
	const [score, setScore] = useState(0);
	const [questions, setQuestions] = useState([])

    const originalQuestions = [
        {
            "question": "Ile jest osób w sali 32?",
            "answers": ["12", "10", "2", "15"],
            "correctAnswer": 3
        },
        {
            "question": "Jaki jest wzór na drzwiach w sali 36?",
            "answers": ["Δ=b2-4ac", "P=a2", "E=mc2", "OBJ= a3"],
            "correctAnswer": 2
        },
        {
            "question": "Czy na końcu korytarza jest plakat Technika grafiki i poligrafii cyfrowej?",
            "answers": ["TAK", "NIE"],
            "correctAnswer": 0
        },
        {
            "question": "W jakiej sali jest znak CISCO?",
            "answers": ["w sali 33", "w sali 36", "w sali 35", "w sali 37"],
            "correctAnswer": 2
        },
        {
            "question": "W których salach nie są włączone projektory?",
            "answers": ["w sali 33 i 36", "w sali 36 i 37", "w sali 35 i 34", "w sali 37 i 34"],
            "correctAnswer": 1
        },
        {
            "question": "Ile jest gaśnic na korytarzu?",
            "answers": ["0", "1", "2", "3"],
            "correctAnswer": 2
        },
        {
            "question": "W której sali jest napis \"Technik grafiki i poligrafii cyfrowej\"?",
            "answers": ["w sali 36", "w sali 34", "w sali 37", "w sali 33"],
            "correctAnswer": 2
        },
        {
            "question": "Jakiego koloru znajduje się plakat na drzwiach do sali 33?",
            "answers": ["Różowego", "Żółtego", "Zielonego", "Białego"],
            "correctAnswer": 0
        },
        {
            "question": "W jednej z sali ukrył się polityk, w której?",
            "answers": ["w sali 35", "w sali 37", "w sali 32", "w sali 34"],
            "correctAnswer": 2
        },
        {
            "question": "Ile jest klimatyzatorów w sali 33?",
            "answers": ["0", "1", "2", "3"],
            "correctAnswer": 2
        }
    ]

	const shuffle=(array)=> {
		let currentIndex = array.length,  randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex != 0) {

			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	useEffect(() => {
		setQuestions(shuffle(originalQuestions))
	}, [])

    


	function showScore() {
		let score = 0;
		questions.forEach((questionData, i) => {
			if (answers[i] === questionData.correctAnswer) {
				score += 1;
			}
		});
		setScore(score);
		setQuizFinished(true);
	}

    function setAnswer(question, answer) {
		console.log(question, answer);
		console.log(answers[question]);
		if (answers[question] !== undefined) {
			setAnswers(
				answers.map((a, i) => {
					if (i !== question) {
						return a;
					} else {
						return answer;
					}
				})
			);
		} else {
			const newAnswers = [...answers];
			newAnswers[question] = answer;
			console.log(newAnswers);
			setAnswers(newAnswers);
		}
	}

	function startQuiz() {
		if (username && school && city) {
			setFormFilled(true);
		}
	}

	if (!formFilled)
		return (
			<div className=" w-full relative overflow-hidden">
				<div className="circle absolute left-[-10%] top-[-10%] border-[10px] border-[#581724] rounded-full w-1/3 aspect-square z-[-1]"></div>
				<div className="circle absolute right-[-10%] top-[-10%] border-[10px] border-[#0f0f0f] rounded-full w-1/5 aspect-square z-[-1]"></div>
				<div className="circle absolute right-[8%] bottom-[20%] border-[1px] border-[#464646] rounded-full w-1/6 aspect-square z-[-1]"></div>
				<div className="circle absolute left-[10%] bottom-[30%] border-[2px] border-[#161616] rounded-full w-[10%] aspect-square z-[-1]"></div>
				<div className="circle absolute left-[-3%] bottom-[-2%] border-[5px] border-gray-950 rounded-full w-[6%] aspect-square z-[-1]"></div>

				<div className="my-[100px] w-[80%] m-auto bg-black z-[99] text-white px-[20px] py-[100px] rounded-3xl justify-center text-center grid xl:grid-cols-[30%_2px_69%]" id="formularz">
				<div className="form_content border-b-[2px] border-gray-800	 xl:border-0 w-[90%] mx-auto">
					<h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-[#ececec] to-[#4e4e4e] text-[50px] mx-auto py-[50px] w-[60%] xl:w-full font-inter font-[300]">WPROWADŹ DANE, ABY ROZPOCZĄĆ QUIZ O NASZEJ SZKOLE</h1>
				</div>
				<div className=" w-[2px] h-[100%] ml-[20px] bg-gray-100"></div>
				<div className="form my-auto mx-auto md:w-1/2">
					{/* <div className="justify-center m-auto text-center grid grid-cols-2">
                        <p className="text-[20px] text-right">Imię i nazwisko (opcjonalnie): </p>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						className="dane w-[50%] bg-transparent text-white border-b-[2px] border-gray-700 ml-[10px] py-[5px] px-[20px] 
									focus:outline-none outline-transparent focus:border-white transition-all duration-300"
						name="dane"
					/></div> */}
					 <div className="formWrapper flex space-x-5 justify-center relative h-fit mt-[30px]">
						<div className="w-full overflow-hidden">
						<input
							required='required'
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text" name="name" className=" px-7 relative bg-transparent border-[2px] p-2 rounded-lg border-gray-600 w-full focus:outline-none text-lg font-inter font-[300]" />
						<span className=" absolute left-[5px] bottom-3 font-inter font-[200] text-white text-md bg-[#000] px-2">IMIĘ</span>
						<i></i>
						</div>
					</div>
					<br />

                {/* <div className=" justify-center m-auto text-center grid grid-cols-2">
                  <p className="text-[20px] text-right">Pseudonim: </p>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						// placeholder="Pseudonim"
						className="dane w-[50%] bg-transparent text-white border-b-[2px] border-[crimson] ml-[10px] py-[5px] px-[20px]
									focus:outline-none outline-transparent focus:border-white transition-all duration-300"
						name="nick"
						id="nickName"
					/>
                  </div> */}
					<div className="formWrapper flex space-x-5 justify-center relative h-fit mt-[30px]">
				  <div className="w-full overflow-hidden">
                    <input
						required='required'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text" name="name" className=" px-7 relative bg-transparent border-[2px] p-2 rounded-lg border-gray-600 w-full focus:outline-none text-lg font-inter font-[300]" />
                    <span className=" absolute left-[5px] bottom-3 font-inter font-[200] text-white text-md bg-[#000] px-2">PSEUDONIM</span>
                    <i></i>
                  </div>
				  </div>
					<br />

                    {/* <div className=" justify-center m-auto text-center grid grid-cols-2">
                    <p className="text-[20px] text-right">Szkoła: </p>
					<input
						value={school}
						onChange={(e) => setSchool(e.target.value)}
						type="text"
						// placeholder="Szkoła"
						className="dane w-[50%] bg-transparent text-white border-b-[2px] border-[crimson] ml-[10px] py-[5px] px-[20px]
									 focus:outline-none outline-transparent focus:border-white transition-all duration-300"
						name="szkola"
					/>
                    </div> */}
					 <div className="formWrapper flex space-x-5 justify-center relative h-fit mt-[30px]">
					<div className="w-full overflow-hidden">
                    <input
						required='required'
						value={school}
						onChange={(e) => setSchool(e.target.value)}
						type="text" name="name" className=" px-7 relative bg-transparent border-[2px] p-2 rounded-lg border-gray-600 w-full focus:outline-none text-lg font-inter font-[300]" />
                    <span className=" absolute left-[5px] bottom-3 font-inter font-[200] text-white text-md bg-[#000] px-2">SZKOŁA</span>
                    <i></i>
                  </div>
				  </div>
					<br />

                    {/* <div className=" justify-center m-auto text-center grid grid-cols-2">
                   <p className="text-[20px] text-right">Miejscowość: </p>
					<input
						value={city}
						onChange={(e) => setCity(e.target.value)}
						type="text"
						// placeholder="Miejscowość"
						className="dane w-[50%] bg-transparent text-white border-b-[2px] border-[crimson] ml-[10px] py-[5px] px-[20px]
								 focus:outline-none outline-transparent focus:border-white transition-all duration-300"
						name="miejscowosc"
					/>
                   </div> */}
					<div className="formWrapper flex space-x-5 justify-center relative h-fit mt-[30px]">
				   <div className="w-full overflow-hidden">
                    <input
						required='required'
						value={city}
						onChange={(e) => setCity(e.target.value)}
						type="text" name="name" className=" px-7 relative bg-transparent border-[2px] p-2 rounded-lg border-gray-600 w-full focus:outline-none text-lg font-inter font-[300]" />
                    <span className=" absolute left-[5px] bottom-3 font-inter font-[200] text-white text-md bg-[#000] px-2">MIEJSCOWOŚĆ</span>
                    <i></i>
                  </div>
				  </div>
					<br />

					{/* <input type="button" value="Prześlij" className="send" id="send" /> */}
					<button className="send mt-[30px] border-[2px] border-gray-800 rounded-full px-[25px] py-[10px] font-poppins font-[400] text-[20px] hover:bg-gray-800 hover:text-white transition-all duration-300" id="send" onClick={startQuiz}>
						Rozpocznij
					</button>
				</div>
			</div>
			</div>
		);

	if (quizFinished) {
		return (
			<div className="formularz bg-black w-[80%] mx-auto my-[100px] py-[50px] grid xl:grid-cols-[30%_10px_69%] rounded-3xl" id="formularz">
				<div className="text-center border-b-[2px] border-gray-800 xl:border-0 w-[90%] mx-auto">
					<h1 className="text-gray-600 text-[50px] font-inter font-[200]">Twój Wynik:</h1>
					<div className="">
					<h2 className="   text-white text-[40px]">
						<span className="text-[70px]">{score}</span>/{questions.length}
					</h2>
					</div>
				</div>
				<div className="w-[2px] h-[100%] bg-gray-800 ml-[-60px] justify-center"></div>
				<div>
					<ResultsTable overflow="scroll" />
				</div>
			</div>
		);
	}

	return (
			<div className="quiz" id="quiz">
			<div className="questions my-[100px] w-[80%] m-auto bg-black rounded-3xl text-white px-[20px] py-[100px] grid lg:grid-cols-2 mx-auto justify-center">
				<div>
				<h1 className="  text-[40px] ml-[50px]">Pytanie <span className="text-gray-500">{currentQuestion + 1}</span></h1>
				<p className="text-[25px] font-inter font-[200] ml-[150px]">{questions[currentQuestion].question}</p>
				<div className="answers ml-[150px]">
					<ul>
						{questions[currentQuestion].answers.map((answer, i2) => (
							<li key={answer} className="  my-[10px] text-[20px]">
								<label className="p-[10px] rounded-lg hover:bg-white/20">
									<input
										type="radio"
										className="in-radio mr-[10px] accent-gray-800 font-poppins"
										onChange={(e) => setAnswer(currentQuestion, i2)}
										checked={answers[currentQuestion] === i2}
									/>
									{answer}
								</label>
							</li>
						))}
					</ul>

					<div className="buttons  ml-[-50px]">
						{currentQuestion !== 0 ? (
							<button className="prev mx-[10px] mt-[40px] px-[25px] py-[10px] border-[2px] border-gray-800 font-inter font-[300] text-[20px] text-[silver] rounded-full hover:bg-gray-800 transition-all duration-300" onClick={() => setCurrentQuestion(currentQuestion - 1)}>
								Poprzednie
							</button>
						) : (
							<></>
						)}
						{currentQuestion !== questions.length - 1 ? (
							<button className="next mx-[10px] mt-[40px] px-[25px] py-[10px] border-[2px] border-gray-800 font-inter font-[300] text-[20px] text-[silver] rounded-full hover:bg-gray-800 transition-all duration-300" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
								Następne
							</button>
						) : (
							<></>
						)}
						{currentQuestion === questions.length - 1 ? (
							<button className="next mx-[10px] mt-[40px] px-[25px] py-[10px] border-[2px] border-gray-800 font-inter font-[300] text-[20px] text-[silver] rounded-full hover:bg-gray-800 transition-all duration-300" onClick={showScore}>
								Zakończ
							</button>
						) : (
							<></>
						)}
					</div>
				</div>
				</div>
				<video loop autoPlay muted className="rounded-full">
					<source src={Banach} type="video/mp4">
					</source>
				</video>
			</div>
		</div>
	);
}
