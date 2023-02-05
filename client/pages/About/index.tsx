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
  dark:bg-bd-1 pb-20 grid   "
    >
      <div>
        <Navbar />
        <Header pageHeader={isEnglish ? `How To Use ` : `アプリの使い方`} subHeader={isEnglish ? ` ` : ``} />
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

          <div className="mb-10  flex justify-center">
            <h1 className="text-5xl  font-bold dark:text-bl-1 text-bd-1">
              {" "}
              {isEnglish ? "This App has Two Modes" : "このアプリは二つのモードがある"}
            </h1>
          </div>
          {/* Class Color Explanation */}
          {/* <div className=" mb-10 flex  mobile:justify-start justify-center">
            {isEnglish ? (
              <h3>
                If a class or week is <span className="rounded-full bg-red-400 p-2">red</span> it is NOT ready yet.
              </h3>
            ) : (
              <h3>
                クラスや週が <span className="rounded-full bg-red-400 p-2">赤色</span>{" "}
                の場合は、まだ準備ができていません。
              </h3>
            )}
          </div>
          <div className=" mb-20 mobile:justify-start flex justify-center">
            {isEnglish ? (
              <h3>
                If a class or week <span className="rounded-full bg-but-d p-2">orange</span> it IS ready.
              </h3>
            ) : (
              <h3>
                クラスや週が <span className="rounded-full bg-but-d p-2">オレンジ色</span> 語彙が追加されています。
              </h3>
            )}
          </div> */}

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
                  <div className=" dark:text-bd-1 dark:bg-bl-1 bg-bd-1 text-bl-1 rounded  w-fit mb-4 p-2 flex text-3sm font-semibold">
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
                    ? `This deck splits all the cards into English and Japanese. Then, you have to match the English words 
                to the Japanese words with the same meaning. If they do not match the color will reset and you will need to try again!`
                    : `このデッキは、すべてのカードを英語と日本語に分割します。そして、同じ意味の英単語と日本語をマッチさせます。一致しない場合は、色がリセットされ、再挑戦する必要があります。`}
                </p>
                <div className=" mb-20 mobile:justify-start flex justify-center">
                  <div className="flex flex-col gap-3">
                    <div>
                      {isEnglish ? (
                        <h3>
                          A selected card will turn{" "}
                          <span className="rounded-full dark:text-bd-1 bg-mc-b p-1"> blue</span>.
                        </h3>
                      ) : (
                        <h3>
                          選択したカードは <span className="rounded-full dark:text-bd-1 bg-mc-b p-1">青</span>
                          .くなります。
                        </h3>
                      )}
                    </div>
                    <div>
                      {isEnglish ? (
                        <h3>
                          If both cards match they will turn{" "}
                          <span className="rounded-full dark:text-bd-1  bg-mc-g p-1">green</span>.
                        </h3>
                      ) : (
                        <h3>
                          ２枚とも一致すると緑色 <span className=" dark:text-bd-1  rounded-full bg-mc-g p-2">緑色</span>
                          になります。
                        </h3>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mobile:justify-start   flex">
                  <div className=" dark:text-bd-1 dark:bg-bl-1 bg-bd-1 text-bl-1 rounded w-fit mb-4 p-2 flex text-3sm font-semibold">
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
                <div className=" dark:bg-bl-1 bg-bd-1 text-bl-1 dark:text-bd-1 rounded  w-fit mt-4 mb-4 p-2 flex text-3sm font-semibold">
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
