import { useState } from "react";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";

export default function About() {
  const [isEnglish, setIsEnglish] = useState(true);

  const changeLanguage = () => {
    console.log("changed");
    setIsEnglish((prevLang) => !prevLang);
  };

  return (
    <div
      className="  h-fit w-fit   bg-bl-1 
  dark:bg-bd-1 pb-20  "
    >
      <div>
        <Navbar />
        <Header pageHeader={isEnglish ? `How To Use This App` : `アプリの使い方`} subHeader={""} />
        <div className="flex items-center  justify-center dark:bg-bd-1 ">
          <Button content={isEnglish ? `Change Language` : `言語変更`} onClick={changeLanguage} />
        </div>
        <div className="bg-bl-1  h-fit  mx-20 mt-10 p-10 mobile:p-2 dark:text-bl-1  gap-20 mobile:flex-col dark:bg-bd-1 text-bd-1 ">
          <p className="text-2xl mb-20">
            {isEnglish
              ? `This site is a way to pre-learn words before class and as a way to
                review words after class. This app is
                an easy way to check important vocabulary that will be emphasised 
                in class quickly and easily when you
                have a few minutes on the bus, train, or even at home!`
              : `このサイトは、授業前に単語を予習する方法と、授業後に単語を復習する方法です。
              授業前の予習、授業後の復習にご利用ください。このアプリは
              授業で重要視される単語を簡単に確認することができます。
              授業で重要視される単語を、バスや電車でのちょっとした時間に
              バスや電車、自宅でのちょっとした時間に、授業で重要視される単語を手軽に確認できます。`}
          </p>
          <div className="mb-20 flex justify-center">
            <h1 className="text-5xl  font-bold dark:text-bl-1 text-bd-1">
              {" "}
              {isEnglish ? "This App has Two Modes" : "このアプリは二つのモドがある"}
            </h1>
          </div>

          {/* <div className="bg-bd-1 dark:bg-bl-1 text-bl-1  rounded dark:text-bd-1 w-fit p-2 mb-20 flex justify-center text-3sm font-semibold">
          </div> */}
          <div className="mobile:flex gap-20 mobile:flex-col grid grid-cols-2 ">
            <div className="">
              <div className="   ">
                <div className="flex justify-start  ">
                  <h1 className=" text-4xl font-bold text-but-d pb-4 ">#1 Regular Deck</h1>
                </div>
                <p className="pb-4">
                  {isEnglish
                    ? `This deck of cards will have the English on the front of each card and Japanese on the back of each
                  card. When you click on the card it will flip between both languages.`
                    : "このカードデッキは、各カードの表が英語、裏が日本語になります。カードをクリックすると、両方の言語が反転します。"}
                </p>
                <div className="flex  mobile:justify-start sm:justify-start  justify-end ">
                  <div className=" dark:bg-bl-1 bg-bd-1 text-bl-1 rounded  w-fit mb-4 p-2 flex text-3sm font-semibold">
                    {isEnglish ? "What is it good for?" : "理想な使い方"}
                  </div>
                </div>
                <p>
                  {isEnglish
                    ? `This deck is good for looking at vocabulary before class.
                   Why spend time looking up words in class
                  when you could be using that time to speak or
                   listen with a better understanding of the content!`
                    : `このデッキは、授業前に単語を調べるのに適しています。授業中に単語を調べる時間を、内容を理解して話したり聞いたりする時間に充てることができます。`}
                </p>
              </div>
            </div>

            <div className="flex flex-col ">
              <div>
                <h1 className=" text-4xl font-bold text-but-d pb-4 flex ">#2 Matching Deck</h1>
              </div>
              <div className="flex flex-col justify-end">
                <p className="pb-4">
                  {isEnglish
                    ? `This deck splits all the cards in 2. Then, you have to match the English words 
                to the Japanese words with the same meaning. When you click on a card it will turn blue. 
                When you click on a 2nd card it will turn blue if 
                they match OR if they do not match the color will reset and you will need to try again! If you match a card incorrectly all cards reset and you need to match them all again from the start.`
                    : `このデッキは、すべてのカードを2つに分割し、同じ意味の英単語と日本語をマッチさせるものです。カードをクリックすると、青くなります。2枚目のカードをクリックすると青色に変わり、一致しない場合は色がリセットされ、再挑戦する必要があります。間違ってマッチした場合、すべてのカードがリセットされ、最初からマッチさせる必要があります。`}
                </p>
                <div className="mobile:justify-start   flex">
                  <div className="dark:bg-bl-1 bg-bd-1 text-bl-1 rounded w-fit mb-4 p-2 flex text-3sm font-semibold">
                    {isEnglish ? "What is it good for?" : "理想な使い方"}
                  </div>
                </div>
                <p>
                  {isEnglish
                    ? `This deck is good for reviewing words from classes you have already taken and 
                  testing your knowledge and memory!
                  
                 `
                    : `
                    どんなことに使うの？
                    このデッキは、すでに受けた授業の単語を復習したり、あなたの知識と記憶をテストするのに適しています。
                    `}
                </p>
                <div className=" dark:bg-bl-1 bg-bd-1 text-bl-1 rounded dark:text-bd-1 w-fit mt-4 mb-4 p-2 flex text-3sm font-semibold">
                  {isEnglish ? "!!This mode is still a work in progress!!" : "!!このモードはまだ未完成です!!"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}