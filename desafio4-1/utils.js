module.exports = {
    education: function (education_level){
        if (education_level == "high_school"){
            return "Ensino Médio Completo"
        } else if(education_level == "college"){
            return "Ensino Superior Completo" 
        } else if(education_level == "masters"){
            return "Mestrado" 
        } else {
            return "Doutorado" 
        }
    },

    age: function(timestamp){
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getUTCFullYear() - birthDate.getUTCFullYear()
        const month = today.getUTCMonth() - birthDate.getUTCMonth()
                
        if (month < 0 || month == 0 && today.getUTCDate() < birthDate.getUTCDate()){
            age = age - 1
        }
        return age
    },
    
    date: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }
}

