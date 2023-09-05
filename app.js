const commonCharacters = (str1, str2) => {
    let arr=""
    
    for(let i=0;i<str1.length;i++){
        let same=false
        for(let j=0;j<str2.length;j++){
            if(str1[i]===str2[j])
            {
                same=true
                break
            }
            
        }
        if(same){
            arr+=str1[i]
        }
    }
    return arr;
  };
  const s1="acexivou"
  const s2="aegihobu"
  console.log(commonCharacters(s1,s2))

  