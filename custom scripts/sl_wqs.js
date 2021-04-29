function weapons() {
  
  var wowhead_stuff = UrlFetchApp.fetch("https://www.wowhead.com/world-quests/sl/na").getContentText();
  var profs = ["dmgmax1", "Alchemy", "Blacksmithing", "Cooking", "Enchanting", "Engineering", "Fishing", "Herbalism", "Inscription", "Jewelcrafting", "Leatherworking", "Mining", "Skinning", "Tailoring"];
  var property;
  var output = "";

  for(property in profs) {
    for(var count=-1, index=-2; index != -1; count++, index=wowhead_stuff.indexOf(profs[property],index+1) );
      if(count > 0) {
        switch(profs[property]){
          case "dmgmax1":
            output = output + count + "⚔️ ";
            break;
          case "Alchemy":
            output = output + count + "⚗️ ";
            break;
          case "Blacksmithing":
            output = output + count + "⚒️ ";
            break;
          case "Cooking":
            output = output + count + "🔥 ";
            break;
          case "Enchanting":
            output = output + count + "✨ ";
            break;
          case "Engineering":
            output = output + count + "🛠️ ";
            break;
          case "Fishing":
            output = output + count + "🎣 ";
            break;
          case "Herbalism":
            output = output + count + "🌿 ";
            break;
          case "Inscription":
            output = output + count + "📜 ";
            break;
          case "Jewelcrafting":
            output = output + count + "💎 ";
            break;
          case "Leatherworking":
            output = output + count + "💼 ";
            break;
          case "Mining":
            output = output + count + "⛏️ ";
            break;
          case "Skinning":
            output = output + count + "🔪 ";
            break;
          case "Tailoring":
            output = output + count + "🧵 ";
            break;
        }
      }
  }
  return output;
}