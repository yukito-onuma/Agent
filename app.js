function janken(choice, number) {
    let resultElement = document.getElementById("ResultMessage");
    let imageElement = document.getElementById("AgentImage");

    let random = Math.floor(Math.random() * 10) + 1;
    let agent = Num2Agent(random);
    let agentImageURL = getAgentImageURL(random);

    for (let i = 0; i < number; i++) 
    {
        resultElement.innerHTML = "選ばれたエージェント: " + agent;
        imageElement.src = agentImageURL;
    }    
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

function getAgentImageURL(random) {
    let url = "";

    switch (random) {
        case 1:
            url = "jett.png";
            break;
        case 2:
            url = "images/phoenix.png";
            break;
        case 3:
            url = "images/sage.png";
            break;
        case 4:
            url = "images/killjoy.png";
            break;
        case 5:
            url = "images/brimstone.png";
            break;
        case 6:
            url = "images/viper.png";
            break;
        case 7:
            url = "images/omen.png";
            break;
        case 8:
            url = "images/reyna.png";
            break;
        case 9:
            url = "images/cypher.png";
            break;
        case 10:
            url = "images/sova.png";
            break;
        default:
            url = "images/default.png";
            break;
    }

    return url;
}
