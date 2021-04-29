function weapons() {
  
    var sl_wqs = "";
    var wowhead_stuff = UrlFetchApp.fetch("https://www.wowhead.com/world-quests/sl/na").getContentText();

  
  var stringsearch = "dmgmax1"
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  var output = "";
  if(count > 0)
  {
    output=  count + "⚔️ ";
  }
  
  stringsearch = "Alchemy"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "⚗️ ";
  }
  
  stringsearch = "Blacksmithing"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "⚒️ ";
  }
  
  stringsearch = "Cooking"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "🔥 ";
  }
  
  stringsearch = "Enchanting"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "✨ ";
  }
  
  stringsearch = "Engineering"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "🛠️ ";
  }
  
  stringsearch = "Fishing"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "🎣 ";
  }
  
  stringsearch = "Herbalism"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "🌿 ";
  }
  
  stringsearch = "Inscription"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "📜 ";
  }
  
  stringsearch = "Jewelcrafting"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "💎 ";
  }
  
  stringsearch = "Leatherworking"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "💼 ";
  }
  
  stringsearch = "Mining"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "⛏️ ";
  }
  
  stringsearch = "Skinning"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "🔪 ";
  }
  
  stringsearch = "Tailoring"
  
  for(var count=-1,index=-2; index != -1; count++,index=wowhead_stuff.indexOf(stringsearch,index+1) );
  if(count > 0)
  {
    output = output + count + "🧵 ";
  }
  
  return output;
}