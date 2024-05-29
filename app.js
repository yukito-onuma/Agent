function janken(choice) {
    let resultElement = document.getElementById("ResultMessage");
    let PlayersChoiceElement = document.getElementById("PlayersChoice");

    PlayersChoiceElement.innerHTML = Num2Synbol(choice);

    let PCsChoiceElemennt = document.getElementById("PCsChoice");
    let PCsChoiceNumber = Math.floor(Math.random() * 11) + 1;

    PCsChoiceElemennt.innerHTML = Num2Synbol(PCsChoiceNumber);

    resultElement.innerHTML = Judgement(choice);
}

function Num2Agent(choice) {
    let agent = "";

    switch (choice) {
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


function Judgement(choice) {
    let agent = "";

    switch (choice) {
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
