function janken(choice) {
    let resultElement = document.getElementById("ResultMessage");

    let random = Math.floor(Math.random() * 10) + 1; // 修正: * 10 に変更
    console.log("ランダムな数字: " + random); // デバッグ用出力
    let agent = Num2Agent(random);
    resultElement.innerHTML = "選ばれたエージェント: " + agent;
}


function Num2Agent(random) {
    let agent = "";

    switch (random) {
        case 1:
            agent = "ジェット";
            break;
        case 2:
            agent = "フェニックス";
            break;
        case 3:
            agent = "セージ";
            break;
        case 4:
            agent = "キルジョイ";
            break;
        case 5:
            agent = "ブリムストーン";
            break;
        case 6:
            agent = "ヴァイパー";
            break;
        case 7:
            agent = "オーメン";
            break;
        case 8:
            agent = "レイナ";
            break;
        case 9:
            agent = "サイファー";
            break;
        case 10:
            agent = "ソーヴァ";
            break;
        default:
            agent = "不明なエージェント";
            break;
    }

    return agent;
}
