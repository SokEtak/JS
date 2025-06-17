//this com=ncept is similar to dictionary in python

let MyLeaningProgress = {
                    C:1,
                    "C++":2,
                    'Java':8,
                    'C#':4,
                    Kotlin:4,
                    Js:1,
                    Python:1    
                } 


                //access value via key
                console.log(`${MyLeaningProgress.Python} months`)

                // console.log(`${MyLeaningProgress[Js]} months`) //error

                console.log(`${MyLeaningProgress["C++"]} months`)

                console.log(`${MyLeaningProgress['C']} months`)

                let key = "Java"
                console.log(`${MyLeaningProgress[key]} months`)

                // console.log(`${MyLeaningProgress['car']} months`) // cannot find(undefine)

                //adding new item
                MyLeaningProgress.newSkill = "Patient"
                console.log(MyLeaningProgress.newSkill)
                
                //modify item
                MyLeaningProgress.newSkill = "ReactjS"
                console.log(MyLeaningProgress.newSkill)

                //array+object
                //complex data

                let person = {
                            'family-member':["Sister","Father","Mommy","Brother"],

                            'job-carreer':["IT",
                                           "Programmer",
                                           "Mobile App",
                                           {Web:["FrontedEnd","BackedEnd","Full-Stack"]}],

                            'favorite-hobbies':{Sport:['Cycling','Running'],ESport:["Mobile Game",'Pc Game']}
                             }

                             console.log(person['job-carreer'][3]["Web"][2]) //Full-Stack
                             console.log(person["favorite-hobbies"]["Sport"][1])//Running
                             
                             //add new item
                             person["favorite-hobbies"]["Sport"][2] = "Fishing"
                             console.log(person["favorite-hobbies"].Sport)
                             
                             //modify
                             person["favorite-hobbies"].Sport[2] = 'Hanging Outside'
                             console.log(person["favorite-hobbies"].Sport)


