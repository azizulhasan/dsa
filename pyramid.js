const pyramid = n => {
    let level = ""
    for(let row = 0; row < n; row ++){
        
        for(let col = n; col > row ; col --){
            level += " "
        }
        for ( let col = 0; col <= row ; col++){

            if(col == 0){
                level += "*"
            }else{
                level += "**"
            }
        }

        level += "\n"
    }

    console.log(level)
}

pyramid(4)