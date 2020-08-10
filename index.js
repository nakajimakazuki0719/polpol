confirm("以下の答えは半角の数字のみでお願いします")
var height = prompt("身長は幾つ？")
if(height>180){
  alert("高いね");
}else{
  alert("低いね");
}

var shota = prompt("週に何回抜きますか？");
shota =Number(shota);
switch (shota) {
  case 0<shota<4:
    type = "アンアンアン"
    break;
    case 5:
    type = "誰にかけたいですか？"
    break;
    case 6:
    type = "正常"
    break;
    case 7:
      type = "matane";
      break;





  default:
  type = "嘘やん"

};
alert(type);
alert("そんなにみたいん")
