const map1 = new Map();

map1.set('John Smith', 500);
map1.set('John Doe', 500);
map1.set('Sara Conor', 280);
map1.set('Martin Fowler',320);

let  mapSort1 = Array.from(map1.entries()).sort(
  ([aName, aNumber], [bName, bNumber]) => {
    if (aNumber === bNumber) {
      if (aName < bName) return -1;
      return 1;
        } return bNumber - aNumber
  }
);
 mapSort1 = Object.fromEntries(mapSort1); // convert to object
 mapSort1 = new Map(Object.entries(mapSort1)) // convery again into hashmap


 let userInput = 2
 if(userInput == 0)
    console.log('no winner!')
 else if(userInput >= map1.size){
        console.log(mapSort1)
 }
 else{
      let keys = Array.from(mapSort1.keys())
      let values = Array.from(mapSort1.values())
      let  valueIndex = mapSort1.size - userInput
      let keyIndex =0 
      for(let i = valueIndex ; i<=mapSort1.size ; i++){
            if(keyIndex<userInput)
                console.log(keys[keyIndex] ,values[i] )
            else 
                console.log(keys[keyIndex] , ' lost')

            keyIndex++
      }
      while(keyIndex<mapSort1.size){
        console.log(keys[keyIndex] , ' lost')
        keyIndex++
      }
        

      
 }