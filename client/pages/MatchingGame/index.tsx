import Head from "next/head";
import MatchingCards from "../../Components/MatchingCards";
import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import HomeButton from "../../Components/HomeButton";
import ToggleButton from "../../Components/ToggleButton";

export default function MatchingGame() {
  const deck = [
    {
      word: "crispy",
      matchId: 11,
      matched: false,
      color: false,
    },
    {
      word: "tender",
      matchId: 12,
      matched: false,
      color: false,
    },
    {
      word: "can I try (something)?",
      matchId: 13,
      matched: false,
      color: false,
    },
    {
      word: "go ahead",
      matchId: 14,
      matched: false,
      color: false,
    },
    {
      word: "sip",
      matchId: 15,
      matched: false,
      color: false,
    },
    {
      word: "eat as much as one likes",
      matchId: 16,
      matched: false,
      color: false,
    },
    {
      word: "full",
      matchId: 17,
      matched: false,
      color: false,
    },
    {
      word: "big eater",
      matchId: 18,
      matched: false,
      color: false,
    },
    {
      word: "once a month",
      matchId: 19,
      matched: false,
      color: false,
    },
    {
      word: "have a great time [doing]",
      matchId: 20,
      matched: false,
      color: false,
    },
    {
      word: "chatting",
      matchId: 21,
      matched: false,
      color: false,
    },
    {
      word: "mojito",
      matchId: 22,
      matched: false,
      color: false,
    },
    {
      word: "creamy",
      matchId: 24,
      matched: false,
      color: false,
    },
    {
      word: "パリパリした",
      matchId: 11,
      matched: false,
      color: false,
    },
    {
      word: "柔らかい",
      matchId: 12,
      matched: false,
      color: false,
    },
    {
      word: "〜食べてもいい？",
      matchId: 13,
      matched: false,
      color: false,
    },
    {
      word: "どうぞ・いいよ",
      matchId: 14,
      matched: false,
      color: false,
    },
    {
      word: "（飲み物の）一口",
      matchId: 15,
      matched: false,
      color: false,
    },
    {
      word: "好きなだけ食べる",
      matchId: 16,
      matched: false,
      color: false,
    },
    {
      word: "お腹いっぱい",
      matchId: 17,
      matched: false,
      color: false,
    },
    {
      word: "大食の人・小食の人",
      matchId: 18,
      matched: false,
      color: false,
    },
    {
      word: "１ヶ月に一回",
      matchId: 19,
      matched: false,
      color: false,
    },
    {
      word: "〜にして楽しむ",
      matchId: 20,
      matched: false,
      color: false,
    },
    {
      word: "お喋りする",
      matchId: 21,
      matched: false,
      color: false,
    },
    {
      word: "モヒート",
      matchId: 22,
      matched: false,
      color: false,
    },
    {
      word: "クリーミー",
      matchId: 24,
      matched: false,
      color: false,
    },
  ];
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [wordOne, setWordOne] = useState("");
  const [wordTwo, setWordTwo] = useState("");
  const [color, setColor] = useState(false);

  const [choiceOne, setChoiceOne] = useState<number>();
  const [choiceTwo, setChoiceTwo] = useState<number>();

  const shuffleCards = () => {
    const shuffledCards = deck
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
      }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: any) => {
    console.log("clicked");
    console.log(card.matchId, card);

    if (choiceOne) {
      setChoiceTwo(card.matchId);
      setTurns(0);
      setWordTwo(card.word);
    }

    if (!choiceOne) {
      setChoiceOne(card.matchId);
      setTurns((prevTurn) => prevTurn + 1);
      setWordOne(card.word);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne === choiceTwo && wordOne !== wordTwo) {
        console.log("match");
        setCards((prevCards) => {
          return prevCards.map((c) => {
            if (c.matchId === choiceOne) {
              return { ...c, matched: true, color: true };
            } else {
              return c;
            }
          });
        });
        resetTurn();
      } else {
        setCards((prevCards) => {
          return prevCards.map((c) => {
            if (c.matchId !== choiceOne) {
              return { ...c, matched: false, color: false };
            } else {
              return c;
            }
          });
        });
        console.log("no match");
        resetTurn();
      }

      resetTurn();
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setTurns(0);
    setChoiceOne(NaN);
    setChoiceTwo(NaN);
    setWordOne("");
    setWordTwo("");
  };

  console.log(choiceOne, choiceTwo, turns, wordOne, wordTwo);
  return (
    <div>
      <Header pageHeader="Matching Game" />
      <div className="flex items-center  justify-between bg-slate-200 dark:bg-bd-1 p-4 ">
        <HomeButton />
        {/* <button onClick={handleMatchingGameClick}>start game</button> */}
        {/* <ShuffleButton onClick={shuffle(doubledDeck)} /> */}

        <ToggleButton />
      </div>
      <button onClick={shuffleCards}>New Game</button>

      <div
        className="
        dark:bg-bd-1
        p-10
      bg-slate-200 gap-5 flex flex-col items-center justify-center
      sm:items-center sm:justify-center
      sm:grid
      sm:grid-cols-2
      md:grid 
      md:grid-cols-3 
      lg:grid-cols-4
       "
      >
        {cards.map((card) => (
          <MatchingCards
            key={card.word + card.match}
            matchId={card.matchId}
            word={card.word}
            card={card}
            handleChoice={handleChoice}
            color={
              card.color === true
              // (card.matchId === choiceOne && card.word === wordOne && wordOne !== wordTwo) ||
              // (card.matchId === choiceTwo && card.word === wordTwo && wordOne !== wordTwo) ||
              // card.matched
            }
          />
        ))}
      </div>
    </div>
  );
}
